# Devlog — vackelse.nu Draft 1

Dokumenterar vad som prövats, vad som fungerar, och vad vi lärt oss.
"Det är OK att misslyckas — men dokumentera."

---

## Draft 1 — Vad är byggt

### Struktur
- `index.html` — en sida med alla sektioner
- `style.css` — Courier/typewriter-estetik, vit/svart tema, responsiv
- `script.js` — språkväxling (SV/EN), temabyte, AI-agent, bibelordsakordeon

### Funktioner
- [x] Typewriter-animation på hero-titeln
- [x] Språkväxling svenska ↔ engelska (fullständig översättning)
- [x] Inverted mode (svart bakgrund, vit text)
- [x] AI-agent med sökknapp, status och resultatvisning
- [x] Agentlogg med dokumenterade experiment (se nedan)
- [x] Blogg med 2 exempelinlägg
- [x] Bibelord-accordion (24 referenser)
- [x] Syfte, Om oss, Footer
- [x] Mobilresponsiv navigation

---

## AI-agenten — experiment och lärdomar

### Experiment 1 — Direkt RSS-fetch
- **Försök:** `fetch('https://www.dagen.se/rss')`
- **Resultat:** CORS-fel — browsern blockerar cross-origin requests
- **Lärdom:** Statiska sidor kan inte hämta RSS direkt utan backend

### Experiment 2 — CORS-proxy (allorigins.win)
- **Försök:** `fetch('https://api.allorigins.win/get?url=dagen.se/rss')`
- **Resultat:** Timeout och opålitliga svar
- **Lärdom:** Gratistjänster är för opålitliga för produktion

### Experiment 3 — DuckDuckGo Instant Answer API
- **Försök:** `fetch('https://api.duckduckgo.com/?q=väckelse+Sverige&format=json')`
- **Resultat:** Returnerar Wikipedia-data, inte nyheter
- **Lärdom:** DDG API är för faktafrågor, inte nyhetssökning

### Experiment 4 — rss2json.com
- **Försök:** `fetch('https://api.rss2json.com/v1/api.json?rss_url=...')`
- **Resultat:** Kräver API-nyckel för produktionsanvändning
- **Lärdom:** Gratis tier är rate-limitad — OK för prototyp, inte produktion

### Nuvarande lösning
Mock-data visas med realistisk fördröjning. UI-flödet fungerar.
Dokumenterar live-fel i agentloggen i realtid.

---

## Nästa steg (Draft 2)

### AI-agenten — backend
- [ ] Node.js/Deno backend (t.ex. Deno Deploy = gratis tier)
- [ ] Scrapa RSS från: dagen.se, varldenidag.se, evangeliiherald.se, kyrkan.se
- [ ] Koppla Claude API för att summera och kategorisera nyheter
- [ ] Cachelagra i JSON — uppdatera 1 gång/timme via cron
- [ ] NewsAPI.org — gratis tier 100 req/dag, värt att testa

### Hemsidan
- [ ] Faktisk domän vackelse.nu
- [ ] CMS för blogg (t.ex. Sanity, Notion API, eller bara markdown-filer)
- [ ] RSS-flöde för hemsidans egna blogginlägg
- [ ] Kontaktformulär
- [ ] SEO — Open Graph, structured data

### Leka med den Helige Ande
- [ ] Automatisk bibelvers varje dag (random från listan)
- [ ] Bön-timer / fokus-läge
- [ ] Karta över väckelserörelser i Sverige
- [ ] Crowdsource — låt besökare rapportera vad de ser Gud göra

---

## Tekniska noteringar

- Allt är vanilla HTML/CSS/JS — ingen byggprocess, inga dependencies
- Körs direkt från fil eller via vilken statisk hosting som helst (Netlify, Vercel, GitHub Pages)
- Typewriter-animation: CSS `animation: typeHero 1.2s steps(8, end)` på h1
- Inverted mode: `:root` CSS-variabler + `body.inverted` override
- Språkväxling: `data-key` attribut + JS-dictionary

---

*Senast uppdaterad: 2024-01-15 — Draft 1*
