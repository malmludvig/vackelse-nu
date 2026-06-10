'use strict';

// ── STATE ─────────────────────────────────────────────────────────────────
let lang = 'sv';

// ── TRANSLATIONS ──────────────────────────────────────────────────────────
const T = {
    sv: {
        nav_syfte:    'Syfte',
        nav_blogg:    'Blogg',
        nav_bibelord: 'Bibelord',
        nav_om:       'Om oss',
        contact:      'Kontakt:',


        bloggTitle:   '_ blogg',
        syfteTitle:   '_ syfte',
        syfteH3:      'Vad är vackelse.nu?',
        syfteP1:      'Att kommunicera vad Gud gör i Sverige just nu.',
        syfteP2:      'Hans rike komma.',
        syfteP3:      'Vi berättar om väckelse — lokalt och globalt — med tro på att Gud handlar i vår tid. Vågar experimentera och leka med den Helige Ande. Det är OK att misslyckas, men vi dokumenterar allt.',
        purposeVerse: '"Omvänd er, för himmelriket är nära."',
        purposeVerse2:'"Be alltså så: Fader vår, du som är i himlen..."',

        bibelordTitle:'_ bibelord',
        bibelordLead: 'Skrifter som pekar på väckelse, Guds rike och den Helige Ande.',

        omTitle:      '_ om oss',
        omP1:         'vackelse.nu är ett projekt som vill dokumentera och kommunicera vad Gud gör i Sverige idag.',
        omP2:         '',

        heroSub:      'Berättar vad Gud gör i Sverige nu',
        heroKingdom:  'Hans rike komma',

        langBtn:      'EN',
    },
    en: {
        nav_syfte:    'Purpose',
        nav_blogg:    'Blog',
        nav_bibelord: 'Bible Verses',
        nav_om:       'About',
        contact:      'Contact:',


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
        omP2:         '',

        heroSub:      'Reporting what God is doing in Sweden now',
        heroKingdom:  'His Kingdom Come',

        langBtn:      'SV',
    }
};

// ── BLOG POSTS ────────────────────────────────────────────────────────────
const POSTS = [
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
    },
    {
        date:    '2024-01-20',
        dateSv:  '20 januari 2024',
        dateEn:  'January 20, 2024',
        titleSv: 'Bönerörelse i Göteborg',
        titleEn: 'Prayer movement in Gothenburg',
        bodySv:  `I Göteborg samlas ungdomar varje torsdag för bön. Inga program, ingen agenda — bara tillbedjan och bön för Sverige.

Möten som börjat med tio personer har vuxit till hundratals. Det är något på gång.

"Hans rike komma, Hans vilja ske — på jorden som i himlen."`,
        bodyEn:  `In Gothenburg, young people gather every Thursday for prayer. No program, no agenda — just worship and prayer for Sweden.

Meetings that started with ten people have grown to hundreds. Something is happening.

"His kingdom come, His will be done — on earth as it is in heaven."`,
        tags: ['#bön', '#göteborg', '#ungdomar']
    }
];

// ── BIBLE VERSES ──────────────────────────────────────────────────────────
const VERSES = [
    {
        refSv: 'Jesaja 52:6–53:12', refEn: 'Isaiah 52:6–53:12',
        note: 'Herrens lidande tjänare / The suffering servant',
        textSv: `6 Därför skall mitt folk lära känna mitt namn, ja, på den dagen skall de förstå att det är jag som talar: Här är jag. 7 Hur fagra är inte glädjebudbärarens fötter på bergen, han som förkunnar frid, som förkunnar gott, som förkunnar räddning, som säger till Sion: Din Gud är konung! 8 Lyssna! Dina väktare ropar högt, de jublar tillsammans, ty med egna ögon ser de hur HERREN vänder åter till Sion. 9 Bryt ut i jubel, sjung tillsammans, ni Jerusalems ruiner! Ty HERREN tröstar sitt folk, han återlöser Jerusalem. 10 HERREN blottar sin heliga arm inför alla folkens ögon, och jordens alla ändar skall se vår Guds frälsning. 11 Gå bort, gå bort, dra ut därifrån, rör inte vid något orent. Gå ut ur dess mitt, rena er, ni som bär HERRENS kärl. 12 Ty ni skall inte gå i all hast, ni skall inte fly under uppbrott, ty HERREN går framför er, och Israels Gud är er bakre väktare.

13 Se, min tjänare skall ha framgång, han skall bli upphöjd och lyft upp och bli mycket hög. 14 Liksom många häpnade över honom – så vanställt var hans utseende, inte likt en människa, hans gestalt inte lik en människas – 15 så skall han stänka på många folk. Kungar skall sluta sina munnar inför honom. Ty de skall se vad de aldrig har berättats, de skall förstå vad de aldrig har hört.

53:1 Vem har trott vårt budskap, och för vem har HERRENS arm uppenbarats? 2 Han sköt upp som en skjuva inför honom, som en rot ur torr jord. Han hade ingen skepnad och ingen härlighet — vi såg honom, men han hade inget utseende som vi åtrådde. 3 Han var föraktad och övergiven av människor, en smärtornas man, förtrogen med sjukdom. Han var som en från vilken man skyler sitt ansikte, föraktad — och vi värderade honom inte.

4 Men det var våra sjukdomar han bar, det var våra smärtor han lade på sig. Vi tänkte att han var hemsökt, slagen av Gud och plågad. 5 Men han var genomborrad för våra överträdelsers skull, slagen för våra missgärningars skull. Straffet var lagt på honom för att vi skulle ha frid, och genom hans sår har vi fått läkedom. 6 Vi gick alla vilse som får, vi vände oss var och en sin väg, men HERREN lät allas vår skuld drabba honom.

7 Han var plågad och betryckt, men han öppnade inte sin mun. Han leddes som ett lamm till slakt, och som ett får inför sina klippare är tyst, öppnade han inte sin mun. 8 Genom förtryck och dom bortfördes han, och vem tänkte på hans levnad? Ja, han rycktes bort från de levandes land, han slogs för mitt folks överträdelse. 9 Man gav honom en grav bland de onda, och hos de rika vid sin död — fast han inte hade gjort något orätt och inget svek fanns i hans mun.

10 Men HERREN fann välbehag i att krossa honom och lät honom lida. Eftersom hans liv görs till ett skuldoffer skall han se avkomlingar och leva länge, och HERRENS vilja skall ha framgång genom hans hand. 11 Av sin själs vedermöda skall han se ljus och bli mättad. Min rättfärdige tjänare skall rättfärdiga de många, och deras skuld är det han bär. 12 Därför skall jag ge honom del bland de stora, och med mäktiga skall han dela byte, eftersom han utgav sitt liv i döden och räknades bland överträdarna. Ty han bar mångas synd och bad för överträdarna.`
    },
    {
        refSv: 'Efesierbrevet 1–2', refEn: 'Ephesians 1–2',
        note: 'Välsignelser i Kristus / Blessings in Christ',
        textSv: `1:1 Paulus, Kristi Jesu apostel genom Guds vilja, hälsar de heliga i Efesus som tror på Kristus Jesus. 2 Nåd och frid från Gud, vår Fader, och Herren Jesus Kristus.

3 Välsignad vare Gud, vår Herre Jesu Kristi Fader, som i Kristus har välsignat oss med all andlig välsignelse i himlen. 4 I honom har han utvalt oss före världens skapelse till att vara heliga och fläckfria inför honom. I kärlek 5 har han förutbestämt oss till att få söners ställning hos sig genom Jesus Kristus, enligt sin viljas behag, 6 till pris för sin nåds härlighet, som han har skänkt oss i den Älskade.

7 I honom har vi återlösningen genom hans blod, förlåtelse för synderna, efter hans nåds rikedom 8 som han i överflöd har låtit komma oss till del med all vishet och insikt. 9 Han har låtit oss få känna sin viljas hemlighet, den beslutning han i sin godhet fattade i sig själv 10 om att genomföra sin frälsningsplan när tiden var fullbordad: att i Kristus sammanfatta allt, vad som är i himlen och vad som är på jorden.

11 I honom har vi fått vår del, vi som från början var bestämda till det enligt hans vilja, han som verkar allt efter sin viljas beslut, 12 för att vi skall vara till pris för hans härlighet, vi som redan hade hoppats på Kristus. 13 I honom har också ni fått höra sanningens ord, evangeliet om er frälsning. I honom har ni kommit till tro och tagit emot den utlovade helige Ande som sigill, 14 han som är en handpenning på vår arvedel, tills vi fullt och helt vinner friköpningen, till pris för hans härlighet.

15 Därför, sedan jag hört om er tro på Herren Jesus och er kärlek till alla de heliga, 16 upphör jag inte att tacka Gud för er, och i mina böner tänker jag på er. 17 Jag ber att vår Herre Jesu Kristi Gud, härlighetens Fader, skall ge er vishetens och uppenbarelsens Ande, så att ni lär känna honom. 18 Jag ber att era hjärtans ögon skall upplysas, så att ni förstår vilket hopp han har kallat er till, hur rikt på härlighet hans arv bland de heliga är, 19 och hur oerhört stor hans makt är i oss som tror.

20 Denna makt verkade han i Kristus när han uppväckte honom från de döda och satte honom på sin högra sida i himlen, 21 högt över alla furstar och väldigheter och krafter och herradömen och över alla namn som kan nämnas, inte bara i denna tidsålder utan också i den kommande. 22 Allt lade han under hans fötter och satte honom till huvud över allting i församlingen, 23 som är hans kropp, fullheten av honom som uppfyller allt i alla.

2:1 Också er har han gjort levande, ni som var döda genom era överträdelser och synder, 2 i vilka ni en gång vandrade efter denna världens tidsålder, efter fursten som härskar i luften, den ande som nu är verksam i olydnadens söner. 3 Bland dem var vi alla en gång och följde vårt köttets och våra tankars begär och var av naturen vredens barn, liksom de andra.

4 Men Gud, som är rik på barmhärtighet, har älskat oss med en så stor kärlek, 5 att fastän vi var döda genom våra överträdelser, har han gjort oss levande tillsammans med Kristus — av nåd är ni frälsta — 6 och har uppväckt oss tillsammans med honom och satt oss med honom i den himmelska världen, i Kristus Jesus, 7 för att i de kommande tidsåldrarna visa sin nåds överväldigande rikedom, genom sin godhet mot oss i Kristus Jesus.

8 Ty av nåd är ni frälsta genom tro, och det inte av er själva — det är en Guds gåva. 9 Det beror inte på gärningar, för att ingen skall berömma sig. 10 Ty vi är hans verk, skapade i Kristus Jesus till goda gärningar, som Gud har förberett för att vi skall vandra i dem.

11 Kom därför ihåg att ni som en gång var hedningar till kroppen och kallades oomskurna av dem som kallas omskurna med handgjord omskärelse 12 — att ni på den tiden var utan Kristus, utestängda från Israels medborgarskap och utan del i löftenas förbund, utan hopp och utan Gud i världen. 13 Men nu, i Kristus Jesus, har ni som en gång var långt borta kommit nära, genom Kristi blod.

14 Ty han är vår frid, han som har gjort de två till ett och rivit ner skiljemuren, fiendskapen, 15 i sin kropp och genom att upphäva lagen med dess bud och stadgar. Han ville skapa en enda ny människa av de två och stifta fred, 16 och försona dem båda med Gud till en enda kropp genom korset, sedan han dödat fiendskapen på korset. 17 Han kom och förkunnade frid för er som var långt borta och frid för dem som var nära, 18 ty genom honom har vi båda i en och samme Ande tillträde till Fadern.

19 Alltså är ni inte längre gäster och främlingar, utan ni är medborgare med de heliga och tillhör Guds familj, 20 uppbyggda på apostlarnas och profeternas grundval, där Jesus Kristus är hörnstenen. 21 I honom fogas hela byggnaden samman och växer upp till ett heligt tempel i Herren. 22 I honom byggs också ni upp till en Guds boning i Anden.`
    },
    {
        refSv: 'Matteus 4:17', refEn: 'Matthew 4:17',
        note: '',
        textSv: '17 Från och med den tiden började Jesus predika: "Omvänd er, för himmelriket är nära."',
        textEn: '"Repent, for the kingdom of heaven is near."'
    },
    {
        refSv: 'Matteus 6:8–15', refEn: 'Matthew 6:8–15',
        note: 'Herrens bön / The Lord\'s Prayer',
        textSv: `8 Var alltså inte lika dem, ty er Fader vet vad ni behöver, innan ni ber honom om det. 9 Be alltså så: Fader vår, du som är i himlen, låt ditt namn bli helgat, 10 låt ditt rike komma, låt din vilja ske, på jorden som i himlen. 11 Ge oss i dag vårt dagliga bröd. 12 Och förlåt oss våra skulder, liksom vi har förlåtit dem som står i skuld till oss. 13 Och led oss inte in i frestelse, utan rädda oss från det onda. Ty riket är ditt, och makten och härligheten, i evighet. Amen.

14 Ty om ni förlåter människorna deras överträdelser, skall er himmelske Fader också förlåta er. 15 Men om ni inte förlåter människorna, skall inte heller er Fader förlåta era överträdelser.`
    },
    {
        refSv: 'Matteus 10:7–14', refEn: 'Matthew 10:7–14',
        note: 'Utsändandet / The Sending',
        textSv: `7 Gå ut och predika: Himmelriket är nära. 8 Bota sjuka, uppväck döda, gör spetälska rena, driv ut onda andar. Ni har fått för intet, ge för intet.

9 Skaffa er inte guld eller silver eller koppar i era bälten, 10 inte ränsel för resan, inte två skjortor, inte sandaler, inte stav, ty en arbetare är värd sin mat.

11 I vilken stad eller by ni än kommer in, ta reda på vem i den som är värd att ta emot er, och stanna kvar där tills ni lämnar platsen. 12 När ni kommer in i ett hus, hälsa det. 13 Är huset värdigt, skall er frid komma över det. Men är det inte värdigt, skall er frid vända tillbaka till er. 14 Och om någon inte tar emot er och inte hör på era ord, gå ut ur det huset eller den staden och skaka stoftet av era fötter.`
    },
    {
        refSv: 'Matteus 28:16–20', refEn: 'Matthew 28:16–20',
        note: 'Stora uppdraget / The Great Commission',
        textSv: `16 De elva lärjungarna begav sig till Galileen, till det berg dit Jesus hade befallt dem att gå. 17 Och när de fick se honom, tillbad de honom, men några tvivlade.

18 Då trädde Jesus fram och talade till dem: "Jag har fått all makt i himlen och på jorden. 19 Gå därför ut och gör alla folk till lärjungar! Döp dem i Faderns och Sonens och den helige Andes namn 20 och lär dem att hålla allt vad jag har befallt er. Och se, jag är med er alla dagar till tidens slut."`
    },
    {
        refSv: 'Lukas 9:62–10:11', refEn: 'Luke 9:62–10:11',
        note: 'Utsändandet av de sjuttio / Sending of the seventy-two',
        textSv: `9:62 Jesus svarade honom: "Den som sätter handen till plogen och ser sig tillbaka är inte lämpad för Guds rike."

10:1 Sedan utsåg Herren sjuttiotvå andra och sände ut dem två och två framför sig till alla städer och orter dit han själv hade tänkt sig. 2 Han sade till dem: "Skörden är stor, men arbetarna är få. Be därför skördens Herre att han sänder ut arbetare till sin skörd. 3 Gå! Se, jag sänder er som lamm mitt bland vargar. 4 Tag inte med er pung eller ränsel eller sandaler, och hälsa inte på någon längs vägen.

5 När ni kommer in i ett hus, säg då först: 'Frid vare med detta hus!' 6 Om där finns en fridens son, skall er frid vila över honom. Om inte, skall den vända tillbaka till er. 7 Stanna kvar i det huset och ät och drick vad de bjuder er, ty en arbetare är värd sin lön. Flytta inte från hus till hus.

8 När ni kommer in i en stad och de tar emot er, ät vad de sätter fram för er. 9 Bota de sjuka där och säg till dem: 'Guds rike är nära er.' 10 Men när ni kommer in i en stad och de inte tar emot er, gå ut på gatorna i den och säg: 11 'Ja, till och med stoftet från er stad som har fastnat på våra fötter, det torkar vi av mot er. Men detta skall ni veta: Guds rike är nära.'"`,
    },
    {
        refSv: 'Lukas 10:30–37', refEn: 'Luke 10:30–37',
        note: 'Den barmhärtige samariten / The Good Samaritan',
        textSv: `30 Jesus svarade och sade: "En man var på väg ner från Jerusalem till Jeriko och föll i händerna på rövare. De tog av honom allt han hade, misshandlade honom och gick sin väg och lämnade honom halvdöd. 31 En präst kom råkande samma väg, och när han fick se mannen gick han förbi på andra sidan. 32 På samma sätt kom en levit till platsen, och när han fick se honom gick han förbi på andra sidan.

33 Men en samarier som var på resa kom till den plats där han låg och fick se honom och ömkade sig. 34 Han gick fram till honom, hällde olja och vin på hans sår och förband dem. Sedan lyfte han upp honom på sin åsna och förde honom till ett värdshus och skötte om honom. 35 Nästa dag tog han upp två denarer och gav åt värden och sade: 'Sköt om honom, och vad mer du lägger ut skall jag betala dig på återvägen.'

36 Vilken av dessa tre anser du var den mannens nästa som föll i händerna på rövarna?" 37 Han svarade: "Den som visade honom barmhärtighet." Då sade Jesus till honom: "Gå du och gör likadant."`
    },
    {
        refSv: 'Lukas 23:40–47', refEn: 'Luke 23:40–47',
        note: 'Rövaren på korset / The thief on the cross',
        textSv: `40 Men den andre tillrättavisade honom och sade: "Fruktar du inte ens Gud, du som har fått samma dom? 41 För oss är det rättvist — vi får vad vi förtjänar för vad vi har gjort. Men han har inte gjort något ont." 42 Och han sade: "Jesus, tänk på mig när du kommer i ditt rike." 43 Jesus svarade honom: "Jag försäkrar dig: i dag skall du vara med mig i paradiset."

44 Det var nu vid sjätte timmen, och mörker kom över hela landet ända till nionde timmen 45 sedan solen hade slocknat. Och förhänget i templet rämnade mitt itu. 46 Och Jesus ropade med hög röst: "Fader, i dina händer lämnar jag min ande." Och när han hade sagt detta, andades han ut. 47 När centurionen såg vad som hade hänt, prisade han Gud och sade: "Denne man var verkligen rättfärdig."`
    },
    {
        refSv: 'Lukas 24:25–26, 44–50', refEn: 'Luke 24:25–26, 44–50',
        note: 'Den uppståndne Jesus / The risen Jesus teaches',
        textSv: `25 Då sade han till dem: "Så oförståndiga ni är och så trög ert hjärta är att tro på allt vad profeterna har sagt! 26 Måste inte Kristus lida detta och sedan gå in i sin härlighet?"

44 Han sade till dem: "Det var detta jag sade till er medan jag ännu var hos er: allt måste uppfyllas som är skrivet om mig i Moses lag, i Profeterna och i Psalmerna." 45 Sedan öppnade han deras sinnen för att de skulle förstå skrifterna. 46 Och han sade till dem: "Det är så skrivet att Kristus skall lida och uppstå från de döda på tredje dagen, 47 och att omvändelse och syndernas förlåtelse skall predikas i hans namn för alla folk, med Jerusalem som utgångspunkt. 48 Ni är vittnen till detta.

49 Och se, jag sänder er vad min Fader har lovat. Men ni skall stanna kvar i staden, tills ni har blivit iklädda kraft från höjden." 50 Han förde dem ut mot Betania och lyfte upp sina händer och välsignade dem.`
    },
    {
        refSv: 'Johannes 14:6–16:15', refEn: 'John 14:6–16:15',
        note: 'Löftet om den Helige Ande / Promise of the Holy Spirit',
        textSv: `14:6 Jesus sade till honom: "Jag är vägen, sanningen och livet. Ingen kommer till Fadern utom genom mig. 7 Om ni kände mig, skulle ni också känna min Fader. Och från och med nu känner ni honom och har sett honom."

15 Om ni älskar mig, håller ni mina bud. 16 Och jag skall be Fadern, och han skall ge er en annan Hjälpare, som skall vara hos er för alltid, 17 sanningens Ande, som världen inte kan ta emot. Ty världen ser honom inte och känner honom inte. Men ni känner honom, ty han bor hos er och skall vara i er.

26 Men Hjälparen, den helige Ande, som Fadern skall sända i mitt namn, han skall lära er allt och påminna er om allt vad jag har sagt er.

27 Frid lämnar jag efter mig, min frid ger jag er. Inte som världen ger ger jag er. Låt inte era hjärtan oroas och var inte rädda.

15:1 Jag är den sanna vinstocken och min Fader är vingårdsmannen. 5 Jag är vinstocken, ni är grenarna. Den som förblir i mig och jag i honom, han bär mycket frukt, ty utan mig kan ni ingenting göra.

26 Men när Hjälparen kommer, som jag skall sända er från Fadern, sanningens Ande som utgår från Fadern, då skall han vittna om mig.

16:7 Men jag säger er sanningen: Det är till er fördel att jag går bort. Ty om jag inte går bort, kommer inte Hjälparen till er. Men om jag går bort, skall jag sända honom till er.

13 Men när han kommer, sanningens Ande, skall han vägleda er i hela sanningen. Ty han skall inte tala av sig själv, utan allt vad han hör skall han tala, och vad som komma skall skall han förkunna för er. 14 Han skall förhärliga mig, ty av mitt skall han ta emot och förkunna för er. 15 Allt vad Fadern har är mitt. Därför sade jag att han tar av mitt och förkunnar för er.`
    },
    {
        refSv: 'Johannes 16:23–17:26', refEn: 'John 16:23–17:26',
        note: 'Jesu översteprästerliga bön / High Priestly Prayer',
        textSv: `16:23 Den dagen skall ni inte fråga mig om något. Jag försäkrar er: Vad ni ber Fadern om i mitt namn, det skall han ge er. 24 Hittills har ni inte bett om något i mitt namn. Be, och ni skall få, för att er glädje skall vara fullkomlig.

33 Detta har jag talat till er, för att ni skall ha frid i mig. I världen har ni lidande. Men var vid gott mod, jag har övervunnit världen.

17:1 Detta talade Jesus. Sedan lyfte han blicken mot himlen och sade: "Fader, stunden har kommit. Förhärliga din Son, för att Sonen skall förhärliga dig. 2 Du har gett honom makt över alla människor för att han skall ge evigt liv åt alla dem som du har gett honom. 3 Och detta är det eviga livet: att de känner dig, den ende sanne Guden, och honom som du har sänt, Jesus Kristus.

6 Jag har uppenbarat ditt namn för de människor som du tog ut ur världen och gav åt mig. De var dina, och du gav dem åt mig, och de har hållit fast vid ditt ord.

17 Helga dem i sanningen: ditt ord är sanning. 18 Liksom du sände mig till världen, sänder jag dem till världen. 19 Och för deras skull helgar jag mig, för att de skall vara helgade i sanningen.

20 Jag ber inte bara för dem, utan också för dem som genom deras ord tror på mig, 21 för att de alla skall vara ett, liksom du, Fader, är i mig och jag i dig. Jag ber att de skall vara i oss, för att världen skall tro att du har sänt mig.

24 Fader, jag vill att de som du har gett mig skall vara med mig där jag är, för att de skall se min härlighet, den du har gett mig, ty du har älskat mig innan världen skapades.

26 Och jag har låtit dem känna ditt namn och skall låta dem känna det, för att den kärlek som du har älskat mig med skall vara i dem, och jag i dem."`
    },
    {
        refSv: 'Apg 2:31–36', refEn: 'Acts 2:31–36',
        note: 'Pingstdagen / Pentecost',
        textSv: `31 Och han såg i förväg och talade om Kristi uppståndelse, att han varken skulle bli kvar i dödsriket eller hans kropp se förgängelsen. 32 Denne Jesus har Gud uppväckt, och vi är alla vittnen till det. 33 Han har blivit upphöjd till Guds högra sida och har av Fadern tagit emot den utlovade helige Ande och har utgjutit vad ni ser och hör. 34 Ty David har inte stigit upp till himlen, men han säger: Herren sade till min Herre: Sätt dig på min högra sida, 35 tills jag har lagt dina fiender till en fotapall åt dina fötter.

36 Hela Israels folk skall alltså veta med säkerhet att denne Jesus, som ni korsfäste, har Gud gjort till både Herre och Kristus.`
    },
    {
        refSv: 'Apg 3:12–26', refEn: 'Acts 3:12–26',
        note: 'Petrus predikar i templet',
        textSv: `12 Då sade Petrus till folket: "Israeliter, varför förvånar ni er över detta? Och varför ser ni på oss som om vi av vår egen kraft eller fromhet hade fått den här mannen att gå? 13 Abrahams, Isaks och Jakobs Gud, våra fäders Gud, har förhärligat sin tjänare Jesus, honom som ni utlämnade och förnekade inför Pilatus, när han hade beslutat att frige honom.

14 Ni förnekade den Helige och Rättfärdige och begärde att en mördare skulle frige åt er. 15 Men livets upphovsman dödade ni. Honom har Gud uppväckt från de döda, och det är vi vittnen till. 16 Och det är hans namn och tron på hans namn som har gjort den här mannen stark, som ni ser och känner. Det är tron som kommit genom Jesus som har gett honom full hälsa inför er alla.

17 Nu vet jag, bröder, att ni handlade i okunnighet, liksom era ledare. 18 Men Gud uppfyllde på det sättet vad han hade förutsagt genom alla profeternas mun, att hans Kristus skulle lida. 19 Omvänd er därför och vänd om, så att era synder utplånas 20 och tider av vederkvickelse kommer från Herrens ansikte och han sänder er den Kristus som är bestämd för er, nämligen Jesus. 21 Himlen måste ta emot honom till de tider av upprättelse av allt som Gud har talat om från gammal tid genom sina heliga profeters mun.

22 Mose har sagt: En profet skall Herren er Gud låta uppstå åt er bland era bröder, en som är lik mig. Honom skall ni lyssna till i allt vad han säger er. 23 Och det skall ske att var och en som inte lyssnar till den profeten skall utrotas ur folket.

25 Ni är söner till profeterna och till förbundet som Gud slöt med era fäder när han sade till Abraham: Och i din avkomma skall alla folk på jorden bli välsignade. 26 Det var för er Gud först lät sin tjänare uppstå och sände honom för att välsigna er, då var och en av er vänder sig bort från sina onda gärningar.`
    },
    {
        refSv: 'Apg 4:28–31', refEn: 'Acts 4:28–31',
        note: 'Bönemöte — väckelse / Prayer meeting — revival',
        textSv: `28 för att göra allt vad din hand och din vilja i förväg hade bestämt skulle ske. 29 Och nu, Herre, se på deras hot och låt dina tjänare predika ditt ord med all frimodighet. 30 Räck ut din hand till helande, och låt tecken och under ske genom din helige tjänares Jesu namn."

31 Och när de hade bett, skakades platsen där de var samlade, och de uppfylldes alla av den helige Ande och predikade Guds ord med frimodighet.`
    },
    {
        refSv: 'Apg 10:34–47', refEn: 'Acts 10:34–47',
        note: 'Den Helige Ande faller / The Spirit falls on Gentiles',
        textSv: `34 Då började Petrus tala och sade: "Nu förstår jag verkligen att Gud inte gör skillnad på människor, 35 utan att i varje folk den som fruktar honom och gör vad som är rätt är välkommen hos honom.

36 Det ord han sände till Israels barn, när han förkunnade frid genom Jesus Kristus — han är allas Herre — 37 det ordet känner ni till. Det spred sig över hela Judeen, med start i Galileen efter det dop som Johannes predikade: 38 om Jesus från Nasaret, hur Gud smorde honom med helig Ande och kraft, och hur han gick omkring och gjorde gott och botade alla som var i djävulens våld, ty Gud var med honom.

39 Och vi är vittnen till allt vad han gjorde i Judeens och Jerusalems land. Honom dödade de genom att hänga honom på ett trä. 40 Men Gud uppväckte honom på tredje dagen och lät honom uppenbaras, 41 inte för allt folket utan för oss vittnen som Gud hade utvalt i förväg, för oss som åt och drack med honom sedan han hade uppstått från de döda. 42 Han befallde oss att predika för folket och vittna om att det är han som Gud har bestämt till domare över levande och döda.

43 Honom vittnar alla profeterna om, att var och en som tror på honom får syndernas förlåtelse genom hans namn." 44 Medan Petrus ännu talade föll den helige Ande på alla som hörde ordet. 45 De troende av judisk börd som hade kommit med Petrus häpnade alla över att den helige Andes gåva hade blivit utgjuten också över hedningarna. 46 Ty de hörde dem tala med tungor och prisa Gud. Då sade Petrus: 47 "Kan någon neka dessa vatten och hindra att de döps, dessa som har tagit emot den helige Ande liksom vi?"`
    },
    {
        refSv: 'Kolosserbrevet 1', refEn: 'Colossians 1',
        note: 'Kristus — allting i allting / Christ — all in all',
        textSv: `1 Paulus, Kristi Jesu apostel genom Guds vilja, och brodern Timoteus, 2 hälsar de heliga i Kolossai, de troende bröderna i Kristus. Nåd och frid från Gud, vår Fader.

9 Därför upphör vi inte, sedan den dagen vi hörde det, att be för er och att be att ni skall uppfyllas med kunskap om hans vilja i all andlig vishet och insikt, 10 för att ni skall vandra värdigt Herren och behaga honom i allt och bära frukt i alla goda gärningar och växa i kunskapen om Gud. 11 Må ni stärkas med all kraft enligt hans härliga makt, till allt tålamod och uthållighet, 12 med glädje och tacksamhet till Fadern som har gjort er kompetenta att dela de heligas arvedel i ljuset.

13 Han har frälst oss från mörkrets välde och fört oss in i sin älskade Sons rike. 14 I honom har vi friköpningen, syndernas förlåtelse.

15 Han är den osynlige Gudens avbild, förstfödd före allt skapat. 16 Ty i honom skapades allt i himlen och på jorden, det synliga och det osynliga, troner och herravälden, furstar och makter — allt är skapat genom honom och till honom. 17 Han är före allting, och allt består i honom. 18 Han är huvudet för kroppen, för församlingen. Han är begynnelsen, förstfödd från de döda, för att han i allt skall vara den främste.

19 Ty Gud fann för gott att låta hela fullheten bo i honom 20 och att genom honom försona allt med sig, sedan han hade skapat frid genom blodet på hans kors — frid genom honom för allt på jorden och i himlen.

27 åt dem ville Gud göra känt hur rikt på härlighet denna hemlighet är bland hedningarna: Kristus i er, härlighetens hopp.

28 Honom förkunnar vi när vi förmanar varje människa och undervisar varje människa i all vishet, för att vi skall kunna leda fram varje människa som fullvuxen i Kristus.`
    },
    {
        refSv: 'Uppenbarelseboken 4', refEn: 'Revelation 4',
        note: 'Tillbedjan i himlen / Worship in heaven',
        textSv: `1 Sedan såg jag, och se, en dörr stod öppen i himlen. Och den röst som jag förut hade hört tala med mig som en basun sade: "Stig hit upp, och jag skall visa dig vad som måste ske härefter." 2 Strax kom jag i ande. Och se, en tron stod i himlen, och på tronen satt en. 3 Och han som satt där liknade en jaspis och en karneol till utseendet, och runt tronen var det en regnbåge som liknade en smaragd.

4 Och runt tronen stod tjugofyra troner, och på tronerna satt tjugofyra äldste, klädda i vita kläder och med gyllene kronor på sina huvuden. 5 Från tronen utgick ljungeldar och röster och åskor. Och framför tronen brann sju eldslågor, det är Guds sju andar. 6 Och framför tronen var det liksom ett glashav, likt kristall.

Och mitt för tronen och runt om tronen stod fyra varelser, fulla av ögon framtill och baktill. 8 Var och en av de fyra varelserna hade sex vingar och var full av ögon runt om och inuti. Och de hade ingen ro dag eller natt, utan de sade: Helig, helig, helig är Herren Gud den Allsmäktige, han som var och som är och som komma skall.

9 Och när varelserna lovade och ärade och tackade honom som satt på tronen och som lever i evigheters evighet, 10 föll de tjugofyra äldste ner inför honom som satt på tronen och tillbad honom som lever i evigheters evighet och kastade sina kronor inför tronen och sade:

11 Värdig är du, vår Herre och Gud, att ta emot äran och priset och makten, ty du har skapat allt, och genom din vilja är det till och har det skapats.`
    },
    {
        refSv: 'Uppenbarelseboken 5:11–14', refEn: 'Revelation 5:11–14',
        note: '',
        textSv: `11 Och jag såg och hörde rösten av många änglar runt tronen och varelserna och de äldste. Deras antal var tiotusental gånger tiotusen och tusentals tusen. 12 Och de sade med hög röst: Värdigt är Lammet, som är slaktat, att ta emot kraft och rikedom och vishet och styrka och ära och härlighet och lov.

13 Och varje skapat ting i himlen och på jorden och under jorden och på havet och allt vad i dem är, dem hörde jag säga: Honom som sitter på tronen och Lammet tillhör lovet och äran och härligheten och makten i evigheters evighet. 14 Och de fyra varelserna sade: Amen. Och de äldste föll ner och tillbad.`
    },
    {
        refSv: 'Uppenbarelseboken 7:9–12', refEn: 'Revelation 7:9–12',
        note: 'Den stora skaran / The great multitude',
        textSv: `9 Sedan såg jag, och se, en stor skara som ingen kunde räkna, av alla folk och stammar och länder och språk. De stod inför tronen och inför Lammet, klädda i vita kläder och med palmkvistar i sina händer. 10 Och de ropade med hög röst och sade: Frälsningen tillhör vår Gud, honom som sitter på tronen, och Lammet.

11 Och alla änglar stod runt om tronen och de äldste och de fyra varelserna och de föll ner på sina ansikten inför tronen och tillbad Gud 12 och sade: Amen! Lovet och härligheten och visheten och tacksägelsen och äran och makten och styrkan tillhör vår Gud i evigheters evighet. Amen.`
    },
    {
        refSv: 'Uppenbarelseboken 14:1–3', refEn: 'Revelation 14:1–3',
        note: 'Lammet och de 144 000',
        textSv: `1 Och jag såg, och se, Lammet stod på Sions berg, och med honom etthundrafyrtiofyratusen som hade hans namn och hans Faders namn skrivet på sina pannor. 2 Och jag hörde en röst från himlen, lik bruset av stora vatten och som dånet av ett starkt åskväder. Och rösten jag hörde var som när harpospelare spelar på sina harpor. 3 De sjöng en ny sång inför tronen och inför de fyra varelserna och de äldste, och ingen kunde lära sig sången utom de etthundrafyrtiofyratusen, de som är friköpta från jorden.`
    },
    {
        refSv: 'Uppenbarelseboken 15:3–4', refEn: 'Revelation 15:3–4',
        note: '',
        textSv: `3 Och de sjunger Moses, Guds tjänares, sång och Lammets sång och säger: Stora och underbara är dina gärningar, Herre Gud, du Allsmäktige. Rättfärdiga och sanna är dina vägar, du folkens konung. 4 Vem skulle inte frukta dig, Herre, och ära ditt namn? Ty du allena är helig. Alla folk skall komma och tillbe inför dig, ty dina rättfärdiga domar har blivit uppenbara.`
    },
    {
        refSv: 'Uppenbarelseboken 19:1–15', refEn: 'Revelation 19:1–15',
        note: '',
        textSv: `1 Sedan hörde jag liksom ett mäktigt rop av en stor skara i himlen: Halleluja! Frälsningen och äran och makten tillhör vår Gud, 2 ty hans domar är sanna och rättfärdiga. Han har dömt den stora skökan som förde jordens folk på fall med sin otukt och har utkrävt sina tjänares blod av hennes hand. 3 Och de sade en gång till: Halleluja! Och hennes rök stiger upp i evigheters evighet.

4 Och de tjugofyra äldste och de fyra varelserna föll ner och tillbad Gud som sitter på tronen och sade: Amen, Halleluja! 5 Och en röst utgick från tronen och sade: Lova vår Gud, alla ni hans tjänare och ni som fruktar honom, både små och stora!

6 Och jag hörde liksom rösten av en stor skara och som bruset av stora vatten och som dånet av starka åskor, och de sade: Halleluja! Ty Herren, vår Gud, den Allsmäktige, har tagit makten som konung. 7 Låt oss glädja oss och jubla och ge honom äran. Ty Lammets bröllop har kommit, och hans brud har gjort sig redo. 8 Och hon har fått klä sig i rent och strålande fint linne. Ty det fina linnet är de heligas rättfärdiga gärningar.

11 Och jag såg himlen öppen, och se, en vit häst. Och han som rider på den kallas Trofast och Sann, och han dömer och strider i rättfärdighet. 12 Hans ögon är som eldslågor och på hans huvud är många kronor. Han har ett namn skrivet som ingen känner utom han själv. 13 Och han är klädd i en mantel doppad i blod, och hans namn kallas Guds Ord.

14 Och himmelens härar följde honom på vita hästar, klädda i vitt och rent fint linne. 15 Och ur hans mun utgår ett skarpt svärd med vilket han skall slå folken, och han skall regera dem med järnspira och trampa vinpressen med Guds, den Allsmäktiges, stränga vredes vin.`
    },
    {
        refSv: 'Uppenbarelseboken 21–22', refEn: 'Revelation 21–22',
        note: 'Det nya Jerusalem / The New Jerusalem',
        textSv: `21:1 Och jag såg en ny himmel och en ny jord, ty den första himlen och den första jorden hade försvunnit, och havet fanns inte mer. 2 Och jag såg den heliga staden, det nya Jerusalem, komma ner från himlen, från Gud, redo som en brud som är smyckad för sin man.

3 Och jag hörde en stark röst från tronen säga: Se, Guds tabernakel är bland människorna, och han skall bo hos dem, och de skall vara hans folk, och Gud själv skall vara hos dem och vara deras Gud. 4 Och han skall torka alla tårar från deras ögon. Döden skall inte finnas mer, och ingen sorg och inget rop och ingen smärta skall finnas mer. Ty det forna har försvunnit.

5 Och han som sitter på tronen sade: Se, jag gör allting nytt. Och han sade: Skriv, ty dessa ord är trovärdiga och sanna. 6 Och han sade till mig: Det är gjort. Jag är A och O, begynnelsen och slutet. Åt den törstige skall jag ge av livets vattenkälla för intet. 7 Den som övervinner skall ärva detta, och jag skall vara hans Gud och han skall vara min son.

22:1 Och han visade mig en ren flod med livets vatten, klar som kristall, som flödade ut från Guds och Lammets tron. 2 Mitt på stadens gata och på ömse sidor om floden stod livets träd, som bär tolv slags frukt och ger sin frukt varje månad, och trädets löv tjänar till läkedom för folken.

3 Och ingen förbannelse skall finnas mer. Och Guds och Lammets tron skall vara i staden, och hans tjänare skall tjäna honom. 4 Och de skall se hans ansikte, och hans namn skall vara på deras pannor. 5 Och natt skall inte finnas mer, och de behöver inte ljus av lampa eller solljus, ty Herren Gud lyser över dem, och de skall regera i evigheters evighet.

12 Se, jag kommer snart, och min lön är med mig för att ge var och en efter hans gärning. 13 Jag är A och O, den förste och den siste, begynnelsen och slutet.

17 Och Anden och bruden säger: Kom! Och den som hör det skall säga: Kom! Och den som törstar, han skall komma. Och den som vill, han skall ta emot livets vatten för intet.

20 Han som vittnar om detta säger: Ja, jag kommer snart. Amen. Kom, Herre Jesus! 21 Herren Jesu nåd vare med alla.`
    }
];


// ── MOCK SEARCH RESULTS (unused) ─────────────────────────────────────────
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
        titleSv: 'Hans rike komma — konferens lockar 3 000 besökare',
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
});
