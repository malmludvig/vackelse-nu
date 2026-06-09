'use strict';

// ── STATE ─────────────────────────────────────────────────────────────────
let lang = 'sv';
let agentRunning = false;

// ── TRANSLATIONS ──────────────────────────────────────────────────────────
const T = {
    sv: {
        nav_syfte:    'Syfte',
        nav_blogg:    'Blogg',
        nav_bibelord: 'Bibelord',
        nav_om:       'Om oss',
        contact:      'Kontakt:',

        agentTitle:   '_ väckelse-spaning',
        agentLead:    'En AI-agent söker nätet efter rapporter om väckelse i Sverige och världen.',
        agentBtnStart:'Starta sökning',
        agentBtnAgain:'Sök igen',
        agentSearching:'söker...',
        agentDone:    'sökning klar',
        agentError:   'fel — se logg',
        devlogLabel:  '_ agentlogg — vad har testats',
        mockNote:     '* Visar simulerade resultat. Se loggen nedan för vad som testats och nästa steg.',

        bloggTitle:   '_ blogg',
        syfteTitle:   '_ syfte',
        syfteH3:      'Vad är vackelse.nu?',
        syfteP1:      'Att kommunicera vad Gud gör i Sverige just nu.',
        syfteP2:      'Hans rike komme.',
        syfteP3:      'Vi berättar om väckelse — lokalt och globalt — med tro på att Gud handlar i vår tid. Vågar experimentera och leka med den Helige Ande. Det är OK att misslyckas, men vi dokumenterar allt.',
        purposeVerse: '"Omvänd er, för himmelriket är nära."',
        purposeVerse2:'"Be alltså så: Fader vår, du som är i himlen..."',

        bibelordTitle:'_ bibelord',
        bibelordLead: 'Skrifter som pekar på väckelse, Guds rike och den Helige Ande.',

        omTitle:      '_ om oss',
        omP1:         'vackelse.nu är ett projekt som vill dokumentera och kommunicera vad Gud gör i Sverige idag.',
        omP2:         'Vi vågar experimentera och leka med den Helige Ande. Det är OK att misslyckas — men vi dokumenterar vad som görs så att vi kan lära oss av misstagen.',

        heroSub:      'Berättar vad Gud gör i Sverige nu',
        heroKingdom:  'Hans rike komme',

        langBtn:      'EN',
    },
    en: {
        nav_syfte:    'Purpose',
        nav_blogg:    'Blog',
        nav_bibelord: 'Bible Verses',
        nav_om:       'About',
        contact:      'Contact:',

        agentTitle:   '_ revival watch',
        agentLead:    'An AI agent searches the web for reports of revival in Sweden and the world.',
        agentBtnStart:'Start search',
        agentBtnAgain:'Search again',
        agentSearching:'searching...',
        agentDone:    'search complete',
        agentError:   'error — see log',
        devlogLabel:  '_ agent log — what has been tried',
        mockNote:     '* Showing simulated results. See the log below for what was tried and next steps.',

        bloggTitle:   '_ blog',
        syfteTitle:   '_ purpose',
        syfteH3:      'What is vackelse.nu?',
        syfteP1:      'To communicate what God is doing in Sweden right now.',
        syfteP2:      'His Kingdom Come.',
        syfteP3:      'We tell stories of revival — locally and globally — trusting that God is at work in our time. We dare to experiment and play with the Holy Spirit. It\'s OK to fail, but we document everything.',
        purposeVerse: '"Repent, for the kingdom of heaven is near."',
        purposeVerse2:'"Our Father in heaven, hallowed be your name..."',

        bibelordTitle:'_ bible verses',
        bibelordLead: 'Scriptures pointing to revival, God\'s kingdom, and the Holy Spirit.',

        omTitle:      '_ about us',
        omP1:         'vackelse.nu is a project aiming to document and communicate what God is doing in Sweden today.',
        omP2:         'We dare to experiment and play with the Holy Spirit. It\'s OK to fail — but we document what is done so we can learn from our mistakes.',

        heroSub:      'Reporting what God is doing in Sweden now',
        heroKingdom:  'His Kingdom Come',

        langBtn:      'SV',
    }
};

// ── BLOG POSTS ────────────────────────────────────────────────────────────
const POSTS = [
    {
        date:    '2024-01-20',
        dateSv:  '20 januari 2024',
        dateEn:  'January 20, 2024',
        titleSv: 'Bönerörelse i Göteborg',
        titleEn: 'Prayer movement in Gothenburg',
        bodySv:  `I Göteborg samlas ungdomar varje torsdag för bön. Inga program, ingen agenda — bara tillbedjan och bön för Sverige.

Möten som börjat med tio personer har vuxit till hundratals. Det är något på gång.

"Hans rike komme, Hans vilja ske — på jorden som i himlen."`,
        bodyEn:  `In Gothenburg, young people gather every Thursday for prayer. No program, no agenda — just worship and prayer for Sweden.

Meetings that started with ten people have grown to hundreds. Something is happening.

"His kingdom come, His will be done — on earth as it is in heaven."`,
        tags: ['#bön', '#göteborg', '#ungdomar']
    },
    {
        date:    '2024-01-15',
        dateSv:  '15 januari 2024',
        dateEn:  'January 15, 2024',
        titleSv: 'Välkommen till vackelse.nu',
        titleEn: 'Welcome to vackelse.nu',
        bodySv:  `Det här är första inlägget på vackelse.nu. Vi vill berätta om vad Gud gör i Sverige idag — om bön, om omvändelse, om väckelse.

Vi tror att Gud talar. Vi tror att han handlar. Och vi vill fånga det.

Den Helige Ande rör sig. Häng med.`,
        bodyEn:  `This is the first post on vackelse.nu. We want to tell what God is doing in Sweden today — about prayer, repentance, revival.

We believe God speaks. We believe He acts. And we want to capture it.

The Holy Spirit is moving. Come along.`,
        tags: ['#vackelse', '#välkommen', '#helige_ande']
    }
];

// ── BIBLE VERSES ──────────────────────────────────────────────────────────
const VERSES = [
    {
        refSv: 'Jesaja 52:6–53:12',      refEn: 'Isaiah 52:6–53:12',
        note: 'Herrens lidande tjänare / The suffering servant',
        text: null
    },
    {
        refSv: 'Efesierbrevet 1–2',       refEn: 'Ephesians 1–2',
        note: 'Välsignelser i Kristus / Blessings in Christ',
        text: null
    },
    {
        refSv: 'Matteus 4:17',            refEn: 'Matthew 4:17',
        note: '',
        textSv: '"Omvänd er, för himmelriket är nära."',
        textEn: '"Repent, for the kingdom of heaven is near."'
    },
    {
        refSv: 'Matteus 6:8–15',          refEn: 'Matthew 6:8–15',
        note: 'Herrens bön / The Lord\'s Prayer',
        textSv: '"Be alltså så: Fader vår, du som är i himlen, låt ditt namn bli helgat..."',
        textEn: '"Our Father in heaven, hallowed be your name, your kingdom come..."'
    },
    {
        refSv: 'Matteus 10:7–14',         refEn: 'Matthew 10:7–14',
        note: 'Utsändandet / The Sending',
        textSv: '"Gå och predika: Himmelriket är nära."',
        textEn: '"As you go, proclaim: The kingdom of heaven is near."'
    },
    {
        refSv: 'Matteus 28:16–20',        refEn: 'Matthew 28:16–20',
        note: 'Stora uppdraget / The Great Commission',
        textSv: '"Gå ut och gör alla folk till lärjungar..."',
        textEn: '"Go and make disciples of all nations..."'
    },
    {
        refSv: 'Lukas 9:62–10:11',        refEn: 'Luke 9:62–10:11',
        note: 'Utsändandet av de sjuttio / Sending of the seventy-two',
        text: null
    },
    {
        refSv: 'Lukas 10:30–37',          refEn: 'Luke 10:30–37',
        note: 'Den barmhärtige samariten / The Good Samaritan',
        text: null
    },
    {
        refSv: 'Lukas 23:40–47',          refEn: 'Luke 23:40–47',
        note: 'Rövaren på korset / The thief on the cross',
        text: null
    },
    {
        refSv: 'Lukas 24:25–26, 44–50',   refEn: 'Luke 24:25–26, 44–50',
        note: 'Den uppståndne Jesus / The risen Jesus teaches',
        text: null
    },
    {
        refSv: 'Johannes 14:6–16:15',     refEn: 'John 14:6–16:15',
        note: 'Löftet om den Helige Ande / Promise of the Holy Spirit',
        textSv: '"Jag är vägen, sanningen och livet..."',
        textEn: '"I am the way, the truth, and the life..."'
    },
    {
        refSv: 'Johannes 16:23–17:26',    refEn: 'John 16:23–17:26',
        note: 'Jesu översteprästerliga bön / High Priestly Prayer',
        text: null
    },
    {
        refSv: 'Apg 2:31–36',             refEn: 'Acts 2:31–36',
        note: 'Pingstdagen / Pentecost',
        text: null
    },
    {
        refSv: 'Apg 3:12–26',             refEn: 'Acts 3:12–26',
        note: 'Petrus predikar i templet',
        text: null
    },
    {
        refSv: 'Apg 4:28–31',             refEn: 'Acts 4:28–31',
        note: 'Bönemöte — väckelse / Prayer meeting — revival',
        textSv: '"De bad alla tillsammans... och platsen skakade, och de uppfylldes av den Helige Ande."',
        textEn: '"They raised their voices together in prayer... the place was shaken and they were filled with the Holy Spirit."'
    },
    {
        refSv: 'Apg 10:34–47',            refEn: 'Acts 10:34–47',
        note: 'Den Helige Ande faller / The Spirit falls on Gentiles',
        text: null
    },
    {
        refSv: 'Kolosserbrevet 1',         refEn: 'Colossians 1',
        note: 'Kristus — allting i allting / Christ — all in all',
        text: null
    },
    {
        refSv: 'Uppenbarelseboken 4',      refEn: 'Revelation 4',
        note: 'Tillbedjan i himlen / Worship in heaven',
        text: null
    },
    {
        refSv: 'Uppenbarelseboken 5:11–14', refEn: 'Revelation 5:11–14',
        textSv: '"Lammet är värdigt att ta emot kraft och rikedom och vishet och styrka..."',
        textEn: '"Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength..."',
        note: ''
    },
    {
        refSv: 'Uppenbarelseboken 7:9–12', refEn: 'Revelation 7:9–12',
        note: 'Den stora skaran / The great multitude',
        textSv: '"En stor skara som ingen kunde räkna, från alla folk och stammar och länder och språk..."',
        textEn: '"A great multitude that no one could count, from every nation, tribe, people and language..."'
    },
    {
        refSv: 'Uppenbarelseboken 14:1–3', refEn: 'Revelation 14:1–3',
        note: 'Lammet och de 144 000',
        text: null
    },
    {
        refSv: 'Uppenbarelseboken 15:3–4', refEn: 'Revelation 15:3–4',
        textSv: '"Stor och underbar är din gärning, Herre Gud, du Allsmäktige..."',
        textEn: '"Great and marvelous are your deeds, Lord God Almighty..."',
        note: ''
    },
    {
        refSv: 'Uppenbarelseboken 19:1–15', refEn: 'Revelation 19:1–15',
        textSv: '"Halleluja! Frälsningen och äran och makten tillhör vår Gud!"',
        textEn: '"Hallelujah! Salvation and glory and power belong to our God!"',
        note: ''
    },
    {
        refSv: 'Uppenbarelseboken 21–22',  refEn: 'Revelation 21–22',
        note: 'Det nya Jerusalem / The New Jerusalem',
        text: null
    }
];

// ── AGENT LOG ─────────────────────────────────────────────────────────────
// Documents every experiment — OK to fail, important to learn.
const LOG = [
    { type: 'info', ts: '2024-01-15 09:00', msg: '[Experiment 1] Försöker hämta RSS från dagen.se direkt via fetch()' },
    { type: 'fail', ts: '2024-01-15 09:01', msg: 'BLOCKERAT: CORS-policy på dagen.se tillåter inte cross-origin requests från browser' },
    { type: 'info', ts: '2024-01-15 09:15', msg: '[Experiment 2] Försöker via CORS-proxy allorigins.win: fetch(allorigins + dagen.se/rss)' },
    { type: 'fail', ts: '2024-01-15 09:17', msg: 'TIMEOUT: allorigins.win svarar inte på dessa RSS-feeds konsekvent' },
    { type: 'info', ts: '2024-01-15 09:30', msg: '[Experiment 3] DuckDuckGo Instant Answer API för "väckelse Sverige"' },
    { type: 'fail', ts: '2024-01-15 09:31', msg: 'EJ NYHETER: DDG API returnerar Wikipedia-sammanfattningar, inte aktuella nyheter' },
    { type: 'info', ts: '2024-01-15 10:00', msg: '[Experiment 4] rss2json.com gratis-tier för dagen.se + varldenidag.se' },
    { type: 'fail', ts: '2024-01-15 10:02', msg: 'KRÄVER API-nyckel för produktion — gratis tier är rate-limitad och opålitlig' },
    { type: 'info', ts: '2024-01-15 10:30', msg: '[Nuvarande lösning] Mock-data med realistiska nyheter — agent-UI fungerar, data är simulerad' },
    { type: 'ok',   ts: '2024-01-15 10:31', msg: 'Mock-agent live — visar UI-flödet korrekt, dokumenterar fel i realtid' },
    { type: 'todo', ts: '—', msg: '[TODO] Bygg Node.js/Deno backend som scrapar: dagen.se, varldenidag.se, evangeliiherald.se' },
    { type: 'todo', ts: '—', msg: '[TODO] Koppla Claude API för att summera och kategorisera inlägg om väckelse' },
    { type: 'todo', ts: '—', msg: '[TODO] Cachelagra i JSON-fil — uppdatera 1 gång/timme via cron' },
    { type: 'todo', ts: '—', msg: '[TODO] NewsAPI.org har nyckel-baserat API med gratis tier — värt att testa' },
];

// ── MOCK SEARCH RESULTS ───────────────────────────────────────────────────
const MOCK_RESULTS = [
    {
        source: 'Dagen.se',
        date:   '2024-01-14',
        titleSv: '"Jag har aldrig upplevt något liknande" — rapporter om väckelse i Norrbotten',
        titleEn: '"I have never experienced anything like it" — reports of revival in northern Sweden',
        excerptSv: 'Hundratals samlades till bönedagar i Luleå efter rapporter om ovanliga omvändelser bland ungdomar. Pastorer beskriver "en tyst men kraftfull rörelse av Anden".',
        excerptEn: 'Hundreds gathered for days of prayer in Luleå following reports of unusual conversions among young people. Pastors describe "a quiet but powerful movement of the Spirit."',
        url: '#'
    },
    {
        source: 'Evangelii Herald',
        date:   '2024-01-12',
        titleSv: 'Fängelsegudstjänster växer — väckelse bakom murarna',
        titleEn: 'Prison services growing — revival behind bars',
        excerptSv: 'Rapporter från kriminalvårdsanstalter i Västra Götaland: ovanligt många omvändelser. Fångarna berättar om möten med Gud som förändrat deras liv fullständigt.',
        excerptEn: 'Reports from prisons in western Sweden: unusually many conversions. Prisoners describe encounters with God that have completely changed their lives.',
        url: '#'
    },
    {
        source: 'Världen idag',
        date:   '2024-01-10',
        titleSv: 'Hans rike komme — konferens lockar 3 000 besökare',
        titleEn: 'His Kingdom Come — conference draws 3,000 visitors',
        excerptSv: 'En oväntad rörelse bland unga i Örebro har spridit sig till grannskapet. Kyrkor av alla traditioner samlas nu för gemensam bön för Sverige.',
        excerptEn: 'An unexpected movement among young people in Örebro has spread to the surrounding area. Churches of all traditions now gather in joint prayer for Sweden.',
        url: '#'
    },
    {
        source: 'Kyrkans Tidning',
        date:   '2024-01-08',
        titleSv: 'Pingst eller process? Teologer diskuterar Andens rörelser idag',
        titleEn: 'Pentecost or process? Theologians discuss movements of the Spirit today',
        excerptSv: 'Flera teologer noterar likheterna med 1905 års väckelse. "Det handlar inte om program — det handlar om bön och omvändelse," säger en av dem.',
        excerptEn: 'Several theologians note similarities with the 1905 revival. "It\'s not about programs — it\'s about prayer and repentance," says one of them.',
        url: '#'
    }
];

// ── RENDER FUNCTIONS ──────────────────────────────────────────────────────

function applyLang() {
    const t = T[lang];

    // Nav links
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.dataset.key;
        if (t[k] !== undefined) el.textContent = t[k];
    });

    document.getElementById('langBtn').textContent = t.langBtn;

    // Hero
    document.getElementById('heroSub').textContent      = t.heroSub;
    document.getElementById('heroKingdom').textContent  = t.heroKingdom;

    // Agent
    document.getElementById('agentTitle').textContent   = t.agentTitle;
    document.getElementById('agentLead').textContent    = t.agentLead;
    document.getElementById('searchBtnText').textContent = agentRunning ? t.agentSearching : t.agentBtnStart;
    document.getElementById('devlogLabel').textContent  = t.devlogLabel;

    // Blog
    document.getElementById('bloggTitle').textContent   = t.bloggTitle;

    // Syfte
    document.getElementById('syfteTitle').textContent   = t.syfteTitle;
    document.getElementById('syfteH3').textContent      = t.syfteH3;
    document.getElementById('syfteP1').textContent      = t.syfteP1;
    document.getElementById('syfteP2').textContent      = t.syfteP2;
    document.getElementById('syfteP3').textContent      = t.syfteP3;
    document.getElementById('purposeVerse').textContent = t.purposeVerse;
    document.getElementById('purposeVerse2').textContent= t.purposeVerse2;

    // Bibelord
    document.getElementById('bibelordTitle').textContent = t.bibelordTitle;
    document.getElementById('bibelordLead').textContent  = t.bibelordLead;

    // Om
    document.getElementById('omTitle').textContent = t.omTitle;
    document.getElementById('omP1').textContent    = t.omP1;
    document.getElementById('omP2').textContent    = t.omP2;

    renderBlog();
    renderVerses();

}

function renderBlog() {
    document.getElementById('blogPosts').innerHTML = POSTS.map(p => `
        <article class="post">
            <span class="post-date">${lang === 'sv' ? p.dateSv : p.dateEn}</span>
            <h3 class="post-title">${lang === 'sv' ? p.titleSv : p.titleEn}</h3>
            <div class="post-body">${lang === 'sv' ? p.bodySv : p.bodyEn}</div>
            <div class="post-tags">${p.tags.join(' ')}</div>
        </article>
    `).join('');
}

function renderVerses() {
    document.getElementById('verseList').innerHTML = VERSES.map((v, i) => {
        const ref  = lang === 'sv' ? v.refSv : v.refEn;
        const txt  = (lang === 'sv' ? v.textSv : v.textEn) || v.text;
        const body = txt
            ? `<div class="verse-body">${txt}</div>`
            : `<div class="verse-body"><em style="opacity:0.6">${lang === 'sv' ? 'Öppna i din bibel-app' : 'Open in your Bible app'}</em></div>`;
        const note = v.note ? `<span class="verse-note">— ${v.note}</span>` : '';
        return `
            <div class="verse-item" id="v${i}">
                <div class="verse-head" onclick="toggleVerse(${i})">
                    <span>${ref}${note}</span>
                    <span class="arrow">▶</span>
                </div>
                ${body}
            </div>`;
    }).join('');
}

function renderDevLog() {
    document.getElementById('devlogContent').innerHTML = LOG.map(e =>
        `<span class="log-line ${e.type}">[${e.ts}] ${e.msg}</span>`
    ).join('');
}

function renderMockResults() {
    const t = T[lang];
    document.getElementById('agentResults').innerHTML =
        MOCK_RESULTS.map(r => `
            <div class="result-card">
                <span class="result-source">${r.source} — ${r.date}</span>
                <div class="result-title"><a href="${r.url}">${lang === 'sv' ? r.titleSv : r.titleEn}</a></div>
                <div class="result-excerpt">${lang === 'sv' ? r.excerptSv : r.excerptEn}</div>
            </div>
        `).join('') +
        `<div class="result-note">${t.mockNote}</div>`;
}

// ── AGENT ─────────────────────────────────────────────────────────────────

async function runAgent() {
    if (agentRunning) return;
    agentRunning = true;

    const btn    = document.getElementById('searchBtn');
    const status = document.getElementById('agentStatus');
    const results= document.getElementById('agentResults');
    const t      = T[lang];

    btn.disabled = true;
    document.getElementById('searchBtnText').textContent = t.agentSearching;
    status.textContent = t.agentSearching;
    results.innerHTML  = `<div class="agent-status" style="margin:1.2rem 0 0.5rem">_ ${lang === 'sv' ? 'hämtar senaste resultat...' : 'fetching latest results...'}</div>`;

    try {
        const res = await fetch('/data/results.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (!data.items || data.items.length === 0) {
            results.innerHTML = `<div class="result-note">${lang === 'sv' ? 'Inga resultat ännu — kör agenten via GitHub Actions.' : 'No results yet — run the agent via GitHub Actions.'}</div>`;
        } else {
            const updated = data.lastUpdated
                ? new Date(data.lastUpdated).toLocaleString(lang === 'sv' ? 'sv-SE' : 'en-GB')
                : '—';
            results.innerHTML = data.items.map(r => `
                <div class="result-card">
                    <span class="result-source">${r.source || ''} — ${r.date || ''}</span>
                    <div class="result-title"><a href="${r.url || '#'}" target="_blank" rel="noopener">${r.title}</a></div>
                    <div class="result-excerpt">${r.summary}</div>
                </div>
            `).join('') + `<div class="result-note">_ ${lang === 'sv' ? 'uppdaterad' : 'updated'}: ${updated}</div>`;
        }

        status.textContent = t.agentDone;
    } catch (e) {
        results.innerHTML = `<div class="result-note">${lang === 'sv' ? 'Fel vid hämtning — försök igen.' : 'Fetch error — try again.'}</div>`;
        status.textContent = t.agentError;
    }

    agentRunning = false;
    btn.disabled = false;
    document.getElementById('searchBtnText').textContent = t.agentBtnAgain;
}

// ── CONTROLS ──────────────────────────────────────────────────────────────

function toggleLang() {
    lang = lang === 'sv' ? 'en' : 'sv';
    applyLang();
}

function toggleTheme() {
    document.body.classList.toggle('inverted');
}

function toggleMobileMenu() {
    document.getElementById('navMenu').classList.toggle('open');
}

function toggleVerse(i) {
    document.getElementById(`v${i}`).classList.toggle('open');
}

// ── INIT ──────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('footerYear').textContent = new Date().getFullYear();
    applyLang();
    renderDevLog();
});
