
const cardInterpretations = [

    // =========================
    // VELKÉ ARKÁNY
    // =========================

    {
        id: 0,
        name: "Blázen",
        suit: "Velké arkány",
        energy: "positive",
        type: "light",
        keywords: [
            "nový začátek",
            "svoboda",
            "odvaha",
            "spontánnost"
        ]
    },

    {
        id: 1,
        name: "Mág",
        suit: "Velké arkány",
        energy: "creative",
        type: "positive",
        keywords: [
            "tvořivost",
            "akce",
            "schopnosti",
            "sebevědomí"
        ]
    },

    {
        id: 2,
        name: "Velekněžka",
        suit: "Velké arkány",
        energy: "intuitive",
        type: "neutral",
        keywords: [
            "intuice",
            "tajemství",
            "citlivost",
            "vnitřní hlas"
        ]
    },

    {
        id: 3,
        name: "Císařovna",
        suit: "Velké arkány",
        energy: "nurturing",
        type: "positive",
        keywords: [
            "péče",
            "hojnost",
            "harmonie",
            "růst"
        ]
    },

    {
        id: 4,
        name: "Císař",
        suit: "Velké arkány",
        energy: "stable",
        type: "neutral",
        keywords: [
            "stabilita",
            "autorita",
            "řád",
            "kontrola"
        ]
    },

    {
        id: 5,
        name: "Velekněz",
        suit: "Velké arkány",
        energy: "spiritual",
        type: "neutral",
        keywords: [
            "víra",
            "učení",
            "duchovno",
            "tradice"
        ]
    },

    {
        id: 6,
        name: "Milenci",
        suit: "Velké arkány",
        energy: "love",
        type: "positive",
        keywords: [
            "láska",
            "partnerství",
            "harmonie",
            "volba"
        ]
    },

    {
        id: 7,
        name: "Vůz",
        suit: "Velké arkány",
        energy: "determined",
        type: "positive",
        keywords: [
            "vítězství",
            "síla vůle",
            "postup",
            "odhodlání"
        ]
    },

    {
        id: 8,
        name: "Síla",
        suit: "Velké arkány",
        energy: "strong",
        type: "positive",
        keywords: [
            "vnitřní síla",
            "odvaha",
            "trpělivost",
            "klid"
        ]
    },

    {
        id: 9,
        name: "Poustevník",
        suit: "Velké arkány",
        energy: "introspective",
        type: "neutral",
        keywords: [
            "moudrost",
            "samota",
            "hledání",
            "vnitřní cesta"
        ]
    },

    {
        id: 10,
        name: "Kolo štěstí",
        suit: "Velké arkány",
        energy: "changing",
        type: "neutral",
        keywords: [
            "změna",
            "osud",
            "cyklus",
            "nový směr"
        ]
    },

    {
        id: 11,
        name: "Spravedlnost",
        suit: "Velké arkány",
        energy: "balanced",
        type: "neutral",
        keywords: [
            "pravda",
            "rovnováha",
            "spravedlnost",
            "zodpovědnost"
        ]
    },

    {
        id: 12,
        name: "Viselec",
        suit: "Velké arkány",
        energy: "surrender",
        type: "hard",
        keywords: [
            "čekání",
            "oběť",
            "zastavení",
            "nový pohled"
        ]
    },

    {
        id: 13,
        name: "Smrt",
        suit: "Velké arkány",
        energy: "transformative",
        type: "hard",
        keywords: [
            "transformace",
            "konec",
            "změna",
            "znovuzrození"
        ]
    },

    {
        id: 14,
        name: "Umírněnost",
        suit: "Velké arkány",
        energy: "harmonious",
        type: "positive",
        keywords: [
            "harmonie",
            "rovnováha",
            "trpělivost",
            "klid"
        ]
    },

    {
        id: 15,
        name: "Ďábel",
        suit: "Velké arkány",
        energy: "dark",
        type: "hard",
        keywords: [
            "závislost",
            "strach",
            "omezení",
            "pokušení"
        ]
    },

    {
        id: 16,
        name: "Věž",
        suit: "Velké arkány",
        energy: "chaotic",
        type: "hard",
        keywords: [
            "chaos",
            "rozpad",
            "náhlá změna",
            "pravda"
        ]
    },

    {
        id: 17,
        name: "Hvězda",
        suit: "Velké arkány",
        energy: "hopeful",
        type: "positive",
        keywords: [
            "naděje",
            "uzdravení",
            "inspirace",
            "víra"
        ]
    },

    {
        id: 18,
        name: "Měsíc",
        suit: "Velké arkány",
        energy: "emotional",
        type: "neutral",
        keywords: [
            "intuice",
            "iluze",
            "nejistota",
            "podvědomí"
        ]
    },

    {
        id: 19,
        name: "Slunce",
        suit: "Velké arkány",
        energy: "joyful",
        type: "positive",
        keywords: [
            "radost",
            "štěstí",
            "úspěch",
            "energie"
        ]
    },

    {
        id: 20,
        name: "Soud",
        suit: "Velké arkány",
        energy: "awakening",
        type: "positive",
        keywords: [
            "probuzení",
            "uvědomění",
            "nová etapa",
            "rozhodnutí"
        ]
    },

    {
        id: 21,
        name: "Svět",
        suit: "Velké arkány",
        energy: "fulfilled",
        type: "positive",
        keywords: [
            "naplnění",
            "dokončení",
            "úspěch",
            "celek"
        ]
    },

    // =========================
    // HOLE
    // 22–35
    // =========================

    {
        id: 22,
        name: "Eso holí",
        suit: "Hole",
        energy: "creative",
        type: "positive",
        keywords: [
            "nový projekt",
            "inspirace",
            "potenciál",
            "energie"
        ]
    },

    {
        id: 23,
        name: "Dvojka holí",
        suit: "Hole",
        energy: "planning",
        type: "positive",
        keywords: [
            "plánování",
            "budoucnost",
            "vize",
            "rozhodnutí"
        ]
    },

    {
        id: 24,
        name: "Trojka holí",
        suit: "Hole",
        energy: "growth",
        type: "positive",
        keywords: [
            "růst",
            "pokrok",
            "spolupráce",
            "expanze"
        ]
    },

    {
        id: 25,
        name: "Čtyřka holí",
        suit: "Hole",
        energy: "celebration",
        type: "positive",
        keywords: ["oslava", "radost", "domov", "úspěch"]
    },

    {
        id: 26,
        name: "Pětka holí",
        suit: "Hole",
        energy: "conflict",
        type: "hard",
        keywords: ["soupeření", "napětí", "boj", "konflikt"]
    },

    {
        id: 27,
        name: "Šestka holí",
        suit: "Hole",
        energy: "victory",
        type: "positive",
        keywords: ["vítězství", "uznání", "úspěch", "sebedůvěra"]
    },

    {
        id: 28,
        name: "Sedmička holí",
        suit: "Hole",
        energy: "defensive",
        type: "hard",
        keywords: ["obrana", "odolnost", "vytrvalost", "tlak"]
    },

    {
        id: 29,
        name: "Osmička holí",
        suit: "Hole",
        energy: "fast",
        type: "positive",
        keywords: ["rychlost", "změna", "pohyb", "zprávy"]
    },

    {
        id: 30,
        name: "Devítka holí",
        suit: "Hole",
        energy: "resilient",
        type: "hard",
        keywords: ["únava", "vytrvalost", "síla", "nevzdávání se"]
    },

    {
        id: 31,
        name: "Desítka holí",
        suit: "Hole",
        energy: "burden",
        type: "hard",
        keywords: ["zodpovědnost", "tlak", "přetížení", "povinnosti"]
    },

    {
        id: 32,
        name: "Páže holí",
        suit: "Hole",
        energy: "curious",
        type: "positive",
        keywords: ["novinky", "zvědavost", "objevování", "energie"]
    },

    {
        id: 33,
        name: "Rytíř holí",
        suit: "Hole",
        energy: "adventurous",
        type: "positive",
        keywords: ["akce", "pohyb", "odvaha", "změna"]
    },

    {
        id: 34,
        name: "Královna holí",
        suit: "Hole",
        energy: "charismatic",
        type: "positive",
        keywords: ["sebevědomí", "vášeň", "inspirace", "péče"]
    },

    {
        id: 35,
        name: "Král holí",
        suit: "Hole",
        energy: "leadership",
        type: "positive",
        keywords: ["vedení", "autorita", "vize", "kontrola"]
    },

    // =========================
    // POHÁRY
    // 36–49
    // =========================

    {
        id: 36,
        name: "Eso pohárů",
        suit: "Poháry",
        energy: "emotional",
        type: "positive",
        keywords: ["láska", "intuice", "nové emoce", "otevřené srdce"]
    },

    {
        id: 37,
        name: "Dvojka pohárů",
        suit: "Poháry",
        energy: "connection",
        type: "positive",
        keywords: ["partnerství", "sjednocení", "láska", "harmonie"]
    },

    {
        id: 38,
        name: "Trojka pohárů",
        suit: "Poháry",
        energy: "celebration",
        type: "positive",
        keywords: ["přátelství", "oslava", "radost", "společnost"]
    },

    {
        id: 39,
        name: "Čtyřka pohárů",
        suit: "Poháry",
        energy: "apathy",
        type: "neutral",
        keywords: ["nespokojenost", "nuda", "přemýšlení", "odmítnutí"]
    },

    {
        id: 40,
        name: "Pětka pohárů",
        suit: "Poháry",
        energy: "loss",
        type: "hard",
        keywords: ["smutek", "ztráta", "zklamání", "léčení"]
    },

    {
        id: 41,
        name: "Šestka pohárů",
        suit: "Poháry",
        energy: "nostalgia",
        type: "positive",
        keywords: ["vzpomínky", "dětství", "minulost", "něha"]
    },

    {
        id: 42,
        name: "Sedmička pohárů",
        suit: "Poháry",
        energy: "illusion",
        type: "neutral",
        keywords: ["fantazie", "volby", "iluze", "sny"]
    },

    {
        id: 43,
        name: "Osmička pohárů",
        suit: "Poháry",
        energy: "departure",
        type: "neutral",
        keywords: ["odchod", "hledání", "změna", "vnitřní cesta"]
    },

    {
        id: 44,
        name: "Devítka pohárů",
        suit: "Poháry",
        energy: "fulfillment",
        type: "positive",
        keywords: ["splněná přání", "spokojenost", "radost", "štěstí"]
    },

    {
        id: 45,
        name: "Desítka pohárů",
        suit: "Poháry",
        energy: "family",
        type: "positive",
        keywords: ["rodina", "harmonie", "láska", "naplnění"]
    },

    {
        id: 46,
        name: "Páže pohárů",
        suit: "Poháry",
        energy: "dreamy",
        type: "positive",
        keywords: ["sny", "romantika", "intuice", "citlivost"]
    },

    {
        id: 47,
        name: "Rytíř pohárů",
        suit: "Poháry",
        energy: "romantic",
        type: "positive",
        keywords: ["pozvání", "city", "romantika", "zprávy"]
    },

    {
        id: 48,
        name: "Královna pohárů",
        suit: "Poháry",
        energy: "calm",
        type: "positive",
        keywords: ["klid", "empatie", "péče", "intuice"]
    },

    {
        id: 49,
        name: "Král pohárů",
        suit: "Poháry",
        energy: "compassionate",
        type: "positive",
        keywords: ["empatie", "moudrost", "citlivost", "podpora"]
    },

    // =========================
    // MEČE
    // 50–63
    // =========================

    {
        id: 50,
        name: "Eso mečů",
        suit: "Meče",
        energy: "clarity",
        type: "neutral",
        keywords: ["pravda", "jasnost", "rozhodnutí", "myšlenky"]
    },

    {
        id: 51,
        name: "Dvojka mečů",
        suit: "Meče",
        energy: "balance",
        type: "neutral",
        keywords: ["rozhodování", "rovnováha", "volba", "nejistota"]
    },

    {
        id: 52,
        name: "Trojka mečů",
        suit: "Meče",
        energy: "heartbreak",
        type: "hard",
        keywords: ["bolest", "smutek", "zrada", "zklamání"]
    },

    {
        id: 53,
        name: "Čtyřka mečů",
        suit: "Meče",
        energy: "rest",
        type: "neutral",
        keywords: ["odpočinek", "klid", "léčení", "pauza"]
    },

    {
        id: 54,
        name: "Pětka mečů",
        suit: "Meče",
        energy: "strategy",
        type: "hard",
        keywords: ["strategie", "tajemství", "opatrnost", "únik"]
    },

    {
        id: 55,
        name: "Šestka mečů",
        suit: "Meče",
        energy: "transition",
        type: "neutral",
        keywords: ["přechod", "změna", "cesta", "uzdravení"]
    },

    {
        id: 56,
        name: "Sedmička mečů",
        suit: "Meče",
        energy: "deception",
        type: "hard",
        keywords: ["podvod", "manipulace", "tajemství", "strategie"]
    },

    {
        id: 57,
        name: "Osmička mečů",
        suit: "Meče",
        energy: "restriction",
        type: "hard",
        keywords: ["omezení", "strach", "bezmoc", "blok"]
    },

    {
        id: 58,
        name: "Devítka mečů",
        suit: "Meče",
        energy: "anxiety",
        type: "hard",
        keywords: ["úzkost", "stres", "strach", "obavy"]
    },

    {
        id: 59,
        name: "Desítka mečů",
        suit: "Meče",
        energy: "ending",
        type: "hard",
        keywords: ["konec", "vyčerpání", "transformace", "bolest"]
    },

    {
        id: 60,
        name: "Páže mečů",
        suit: "Meče",
        energy: "curious",
        type: "neutral",
        keywords: ["zvědavost", "učení", "pozorování", "myšlení"]
    },

    {
        id: 61,
        name: "Rytíř mečů",
        suit: "Meče",
        energy: "direct",
        type: "neutral",
        keywords: ["komunikace", "pravda", "rychlost", "akce"]
    },

    {
        id: 62,
        name: "Královna mečů",
        suit: "Meče",
        energy: "intelligent",
        type: "neutral",
        keywords: ["logika", "nezávislost", "inteligence", "jasnost"]
    },

    {
        id: 63,
        name: "Král mečů",
        suit: "Meče",
        energy: "authority",
        type: "neutral",
        keywords: ["disciplína", "autorita", "kontrola", "rozum"]
    },

    // =========================
    // PENTAKLY
    // 64–77
    // =========================

    {
        id: 64,
        name: "Eso pentaklů",
        suit: "Pentakly",
        energy: "prosperity",
        type: "positive",
        keywords: ["finance", "stabilita", "nová příležitost", "úspěch"]
    },

    {
        id: 65,
        name: "Dvojka pentaklů",
        suit: "Pentakly",
        energy: "balance",
        type: "positive",
        keywords: ["rovnováha", "spolupráce", "partnerství", "harmonie"]
    },

    {
        id: 66,
        name: "Trojka pentaklů",
        suit: "Pentakly",
        energy: "teamwork",
        type: "positive",
        keywords: ["spolupráce", "učení", "růst", "dovednosti"]
    },

    {
        id: 67,
        name: "Čtyřka pentaklů",
        suit: "Pentakly",
        energy: "security",
        type: "positive",
        keywords: ["stabilita", "domov", "bezpečí", "jistota"]
    },

    {
        id: 68,
        name: "Pětka pentaklů",
        suit: "Pentakly",
        energy: "lack",
        type: "hard",
        keywords: ["nedostatek", "finance", "nejistota", "obavy"]
    },

    {
        id: 69,
        name: "Šestka pentaklů",
        suit: "Pentakly",
        energy: "generosity",
        type: "positive",
        keywords: ["štědrost", "podpora", "sdílení", "pomoc"]
    },

    {
        id: 70,
        name: "Sedmička pentaklů",
        suit: "Pentakly",
        energy: "patience",
        type: "neutral",
        keywords: ["trpělivost", "čekání", "růst", "vývoj"]
    },

    {
        id: 71,
        name: "Osmička pentaklů",
        suit: "Pentakly",
        energy: "mastery",
        type: "positive",
        keywords: ["práce", "dovednosti", "disciplína", "zlepšení"]
    },

    {
        id: 72,
        name: "Devítka pentaklů",
        suit: "Pentakly",
        energy: "luxury",
        type: "positive",
        keywords: ["hojnost", "nezávislost", "úspěch", "komfort"]
    },

    {
        id: 73,
        name: "Desítka pentaklů",
        suit: "Pentakly",
        energy: "legacy",
        type: "positive",
        keywords: ["rodina", "dědictví", "stabilita", "bohatství"]
    },

    {
        id: 74,
        name: "Páže pentaklů",
        suit: "Pentakly",
        energy: "ambition",
        type: "positive",
        keywords: ["cíle", "finance", "učení", "nový začátek"]
    },

    {
        id: 75,
        name: "Rytíř pentaklů",
        suit: "Pentakly",
        energy: "reliable",
        type: "positive",
        keywords: ["spolehlivost", "práce", "trpělivost", "odpovědnost"]
    },

    {
        id: 76,
        name: "Královna pentaklů",
        suit: "Pentakly",
        energy: "abundance",
        type: "positive",
        keywords: ["péče", "hojnost", "stabilita", "podpora"]
    },

    {
        id: 77,
        name: "Král pentaklů",
        suit: "Pentakly",
        energy: "security",
        type: "positive",
        keywords: ["stabilita", "úspěch", "bezpečí", "jistota"]
    }

];

export default cardInterpretations;
