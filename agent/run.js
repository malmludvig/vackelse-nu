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
    input: `Sök på internet efter nyheter och rapporter om kristen väckelse från de senaste 180 dagarna.
Prioritera starkt nyheter från Sverige och saker som händer i Sverige — lokala väckelserörelser, bönrörelser, omvändelser, konferenser och andliga genombrott.
Inkludera även globala nyheter om väckelse om inga svenska nyheter finns, men Sverige har alltid högst prioritet.
Hitta 3–5 relevanta artiklar eller rapporter.${seenSection}

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
