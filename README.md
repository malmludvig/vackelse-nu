# väckelse.nu

Berättar vad Gud gör i Sverige nu. Hans rike komma. 🔥

## Vad är det här?

En statisk hemsida med en AI-agent som söker efter nyheter om kristen väckelse i Sverige och världen. Resultaten visas direkt på hemsidan.

## Hur det fungerar

- **Hemsidan** — GitHub Pages, statisk HTML/CSS/JS
- **AI-agenten** — Node.js + OpenAI GPT-4o med `web_search_preview`, körs via GitHub Actions
- **Sökning** — Manuell trigger via GitHub Actions → sparar resultat i `data/results.json` och historik i `data/history.json`
- **Adminsida** — `/admin.html` listar alla tidigare sökningar

## Köra agenten

1. Gå till **Actions → Search Agent → Run workflow**
2. Resultaten uppdateras automatiskt på hemsidan
