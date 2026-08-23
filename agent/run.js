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
    input: `Jesus hjälp AI agenten att hitta de artiklar som du vill lyfta fram lite extra för att framföra vad du Gud gör i Sverige.
Jesus hjälp agenten att hitta artiklar på internet om kristen väckelse med fokus på dig Jesus. 
En artikel kan vara en artikel, nyhet eller rapport i en tidning eller på någon annan hemsida, t ex på varldenidag.se och dagen.se .
Datumet på artiklarna ska vara max 14 dagar äldre än dagens datum.
Prioritera artiklar från Sverige och saker som händer i Sverige — lokala väckelserörelser, bönerörelser, omvändelser, konferenser och andliga genombrott.
Exempel på väckelse är att många har blivit döpta, har blivit konfirmerade eller gett sitt liv till Jesus.
Ifall det inte finns några svenska artiklar om väckelse de senaste 14 dagarna, sök då efter artiklar om väckelse även utanför Sverige.
Sök speciellt efter nyheter som reflekterar budskapet från bibelorden som finns på https://vackelse.nu/#bibelord .
Kontrollera att länkarna till de utvalda artiklar fungerar. Innehållet på länken till artikeln får inte vara "Sidan kunde inte hittas", "404", eller liknande.
Ifall länken till artikeln inte fungerar ta bort den från sökresultatet.
Resultatet av sökningen ska vara max 5 artiklar som matchar kriterierna nämnda ovan.
Inkludera endast artiklar i sökresultatet som inte är äldre än 14 dagar.

Exempel på artiklar som matchar kriterierna ovan bra är följande
https://www.varldenidag.se/nyheter/kaend-hbtq-profil-kommer-ut-som-kristen-jesus-aelskade-mig-hela-vaegen/900400
https://www.apg29.nu/artikel/lat-oss-inte-bara-be-om-vackelse-lat-oss-predika-evangeliet-4272
https://www.svt.se/kultur/kristen-trend-i-kultursverige-vi-behover-religionen-for-att-fa-svar
https://www.svt.se/nyheter/lokalt/smaland/frikyrkan-vaxer-med-asylsokande
https://www.dagen.se/nyheter/manga-har-bett-att-gud-ska-saenda-vaeckelse-nu-boerjar-det-kanske-komma-sma-vartecken/10461008
https://www.dagen.se/debatt/slapp-loss-lekmannen-de-ar-nyckeln-till-vackelse-i-sverige/9905650
https://www.varldenidag.se/nyheter/kristna-friskoleradet-arrangerade-boenedag-infoer-skolstarten/934606
https://www.varldenidag.se/nyheter/allt-fler-unga-konfirmerar-sig-oekning-syns-i-hela-sverige/920466
https://www.varldenidag.se/nyheter/radioprofilen-sanna-lundell-har-konfirmerats-jag-fick-vaenda-om/895985
https://www.dagen.se/nyheter/manga-har-bett-att-gud-ska-saenda-vaeckelse-nu-boerjar-det-kanske-komma-sma-vartecken/10461008
https://www.kyrkanstidning.se/kroenika/jesustrenden-laemnar-oss-med-ett-stort-ansvar-1/425237
https://www.varldenidag.se/om/v%C3%A4stkusten
https://www.norden714.com/
https://www.dagen.se/kultur/vackelse-gynnar-hela-samhallen/3208330
https://kyrkaochfolk.se/2025/05/13/hur-blir-vi-redo-for-vackelsen/
https://etal.se/vilken-vackelse-behover-vi/
https://www.dagen.se/dokument/historien-bakom-storfilmen-hippiepastorn-blaste-liv-i-svensk-vackelse/3433131
https://www.varldenidag.se/tro-och-liv/johnny-foglander-upplever-att-gud-foerbereder-sverige-foer-vaeckelse/804028
https://www.kyrkanstidning.se/kroenika/jesustrenden-laemnar-oss-med-ett-stort-ansvar-1/425237
https://www.svd.se/a/qPPRGE/katolska-kyrkan-vaxer-i-sverige-unga-lockas
https://www.varldenidag.se/nyheter/svenskamerikan-ska-rusta-kristna-infor-jesustrend/835315
https://kristenmediasverige.se/
https://www.varldenidag.se/om/Maranata

Tack Jesus!´

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
