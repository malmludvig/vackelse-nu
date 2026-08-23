import OpenAI from 'openai';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY?.trim() });

const historyPath = join(__dirname, '..', 'data', 'history.json');
const existingHistory = existsSync(historyPath)
    ? JSON.parse(readFileSync(historyPath, 'utf8'))
    : [];

const seenUrls = existingHistory.flatMap(run => (run.items || []).map(item => item.url)).filter(Boolean);
const seenSection = seenUrls.length > 0
    ? `\n\nDessa URL:er har redan visats i tidigare sökningar — inkludera dem INTE igen:\n${seenUrls.map(u => `- ${u}`).join('\n')}`
    : '';

console.log(`Söker efter väckelse-nyheter... (${seenUrls.length} tidigare URL:er utesluts)`);

const response = await client.responses.create({
    model: 'gpt-4o',
    tools: [{ type: 'web_search_preview' }],
    input: `Sök på internet efter artiklar om kristen väckelse med fokus på Jesus. 
En artikel kan vara en artikel, nyhet eller rapport i en tidning eller på någon annan hemsida.
Sök gärna på varldenidag.se och dagen.se .
Sök endast efter nyheter som är max 14 dagar gamla.
Prioritera artiklar från Sverige och saker som händer i Sverige — lokala väckelserörelser, bönerörelser, omvändelser, konferenser och andliga genombrott.
Exempel på väckelse är att många har blivit döpta eller gett sitt liv till Jesus.
Ifall det inte finns några svenska artiklar om väckelse de senaste 14 dagarna, sök då efter artiklar om väckelse även utanför Sverige.
Sök speciellt efter nyheter som reflekterar budskapet från bibelorden som finns på https://vackelse.nu/#bibelord .
Kontrollera att länkarna till de utvalda nyheterna fungerar. Innehållet på sidan får inte vara "Sidan kunde inte hittas", eller liknande.
Resultatet av sökningen ska vara 3–5 relevanta artiklar som matchar kriterierna nämnda ovan.'
${seenSection}

Svara ENBART med ett JSON-objekt i exakt detta format — ingen förklarande text runt om:
{
  "items": [
    {
      "title": "Artikelns titel",
      "summary": "2–3 meningar som sammanfattar innehållet på svenska",
      "url": "https://...",
      "source": "Källans namn",
      "date": "YYYY-MM-DD"
    }
  ]
}`
});

const text = response.output_text;

let parsed;
try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Hittade inget JSON i svaret');
    parsed = JSON.parse(jsonMatch[0]);
} catch (e) {
    console.error('Kunde inte tolka svar från OpenAI:', text);
    process.exit(1);
}

const output = {
    lastUpdated: new Date().toISOString(),
    items: parsed.items || []
};

const outPath = join(__dirname, '..', 'data', 'results.json');
writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`Skrev ${output.items.length} resultat till ${outPath}`);

existingHistory.unshift(output);
writeFileSync(historyPath, JSON.stringify(existingHistory, null, 2));
console.log(`Historik: ${existingHistory.length} körningar sparade`);
