const tarotCards = [
    // VELKÉ ARKÁNY
    { id: 0, name: "Blázen", arcana: "Velké", number: 0, element: "Vzduch", description: "Nový začátek, svoboda, dobrodružství", imageUrl: "/images/1.jpg" },
    { id: 1, name: "Kouzelník", arcana: "Velké", number: 1, element: "Vzduch", description: "Tvořivost, vůle, manifestace", imageUrl: "/images/2.jpg" },
    { id: 2, name: "Velekněžka", arcana: "Velké", number: 2, element: "Voda", description: "Intuice, tajemství, podvědomí", imageUrl: "/images/3.jpg" },
    { id: 3, name: "Císařovna", arcana: "Velké", number: 3, element: "Země", description: "Plodnost, péče, hojnost", imageUrl: "/images/4.jpg" },
    { id: 4, name: "Císař", arcana: "Velké", number: 4, element: "Oheň", description: "Autorita, struktura, stabilita", imageUrl: "/images/5.jpg" },
    { id: 5, name: "Hierofant", arcana: "Velké", number: 5, element: "Země", description: "Tradice, víra, učení", imageUrl: "/images/6.jpg" },
    { id: 6, name: "Milenci", arcana: "Velké", number: 6, element: "Vzduch", description: "Láska, volba, vztahy", imageUrl: "/images/7.jpg" },
    { id: 7, name: "Vůz", arcana: "Velké", number: 7, element: "Voda", description: "Vítězství, směr, kontrola", imageUrl: "/images/8.jpg" },
    { id: 8, name: "Síla", arcana: "Velké", number: 8, element: "Oheň", description: "Odvaha, vnitřní síla", imageUrl: "/images/9.jpg" },
    { id: 9, name: "Poustevník", arcana: "Velké", number: 9, element: "Země", description: "Hledání, samota, moudrost", imageUrl: "/images/10.jpg" },
    { id: 10, name: "Kolo osudu", arcana: "Velké", number: 10, element: "Oheň", description: "Změna, osud, cyklus", imageUrl: "/images/11.jpg" },
    { id: 11, name: "Spravedlnost", arcana: "Velké", number: 11, element: "Vzduch", description: "Pravda, rovnováha", imageUrl: "/images/12.jpg" },
    { id: 12, name: "Viselec", arcana: "Velké", number: 12, element: "Voda", description: "Oběť, nový pohled", imageUrl: "/images/13.jpg" },
    { id: 13, name: "Smrt", arcana: "Velké", number: 13, element: "Voda", description: "Transformace, konec, nový začátek", imageUrl: "/images/14.jpg" },
    { id: 14, name: "Umírněnost", arcana: "Velké", number: 14, element: "Oheň", description: "Harmonie, rovnováha", imageUrl: "/images/15.jpg" },
    { id: 15, name: "Ďábel", arcana: "Velké", number: 15, element: "Země", description: "Pokušení, závislosti", imageUrl: "/images/16.jpg" },
    { id: 16, name: "Věž", arcana: "Velké", number: 16, element: "Oheň", description: "Chaos, náhlá změna", imageUrl: "/images/17.jpg" },
    { id: 17, name: "Hvězda", arcana: "Velké", number: 17, element: "Vzduch", description: "Naděje, inspirace", imageUrl: "/images/18.jpg" },
    { id: 18, name: "Měsíc", arcana: "Velké", number: 18, element: "Voda", description: "Iluze, intuice", imageUrl: "/images/19.jpg" },
    { id: 19, name: "Slunce", arcana: "Velké", number: 19, element: "Oheň", description: "Radost, úspěch", imageUrl: "/images/20.jpg" },
    { id: 20, name: "Soud", arcana: "Velké", number: 20, element: "Oheň", description: "Probuzení, rozhodnutí", imageUrl: "/images/21.jpg" },
    { id: 21, name: "Svět", arcana: "Velké", number: 21, element: "Země", description: "Dokončení, naplnění", imageUrl: "/images/22.jpg" },

    // HOLE
    { id: 22, name: "Eso holí", arcana: "Malé", suit: "Hole", number: 1, imageUrl: "/images/23.jpg" },
    { id: 23, name: "Dvě hole", arcana: "Malé", suit: "Hole", number: 2, imageUrl: "/images/24.jpg" },
    { id: 24, name: "Tři hole", arcana: "Malé", suit: "Hole", number: 3, imageUrl: "/images/25.jpg" },
    { id: 25, name: "Čtyři hole", arcana: "Malé", suit: "Hole", number: 4, imageUrl: "/images/26.jpg" },
    { id: 26, name: "Pět holí", arcana: "Malé", suit: "Hole", number: 5, imageUrl: "/images/27.jpg" },
    { id: 27, name: "Šest holí", arcana: "Malé", suit: "Hole", number: 6, imageUrl: "/images/28.jpg" },
    { id: 28, name: "Sedm holí", arcana: "Malé", suit: "Hole", number: 7, imageUrl: "/images/29.jpg" },
    { id: 29, name: "Osm holí", arcana: "Malé", suit: "Hole", number: 8, imageUrl: "/images/30.jpg" },
    { id: 30, name: "Devět holí", arcana: "Malé", suit: "Hole", number: 9, imageUrl: "/images/31.jpg" },
    { id: 31, name: "Deset holí", arcana: "Malé", suit: "Hole", number: 10, imageUrl: "/images/32.jpg" },
    { id: 32, name: "Páže holí", arcana: "Malé", suit: "Hole", number: 11, imageUrl: "/images/33.jpg" },
    { id: 33, name: "Rytíř holí", arcana: "Malé", suit: "Hole", number: 12, imageUrl: "/images/34.jpg" },
    { id: 34, name: "Královna holí", arcana: "Malé", suit: "Hole", number: 13, imageUrl: "/images/35.jpg" },
    { id: 35, name: "Král holí", arcana: "Malé", suit: "Hole", number: 14, imageUrl: "/images/36.jpg" },

    // POHÁRY
    { id: 36, name: "Eso pohárů", arcana: "Malé", suit: "Poháry", number: 1, imageUrl: "/images/37.jpg" },
    { id: 37, name: "Dva poháry", arcana: "Malé", suit: "Poháry", number: 2, imageUrl: "/images/38.jpg" },
    { id: 38, name: "Tři poháry", arcana: "Malé", suit: "Poháry", number: 3, imageUrl: "/images/39.jpg" },
    { id: 39, name: "Čtyři poháry", arcana: "Malé", suit: "Poháry", number: 4, imageUrl: "/images/40.jpg" },
    { id: 40, name: "Pět pohárů", arcana: "Malé", suit: "Poháry", number: 5, imageUrl: "/images/41.jpg" },
    { id: 41, name: "Šest pohárů", arcana: "Malé", suit: "Poháry", number: 6, imageUrl: "/images/42.jpg" },
    { id: 42, name: "Sedm pohárů", arcana: "Malé", suit: "Poháry", number: 7, imageUrl: "/images/43.jpg" },
    { id: 43, name: "Osm pohárů", arcana: "Malé", suit: "Poháry", number: 8, imageUrl: "/images/44.jpg" },
    { id: 44, name: "Devět pohárů", arcana: "Malé", suit: "Poháry", number: 9, imageUrl: "/images/45.jpg" },
    { id: 45, name: "Deset pohárů", arcana: "Malé", suit: "Poháry", number: 10, imageUrl: "/images/46.jpg" },
    { id: 46, name: "Páže pohárů", arcana: "Malé", suit: "Poháry", number: 11, imageUrl: "/images/47.jpg" },
    { id: 47, name: "Rytíř pohárů", arcana: "Malé", suit: "Poháry", number: 12, imageUrl: "/images/48.jpg" },
    { id: 48, name: "Královna pohárů", arcana: "Malé", suit: "Poháry", number: 13, imageUrl: "/images/49.jpg" },
    { id: 49, name: "Král pohárů", arcana: "Malé", suit: "Poháry", number: 14, imageUrl: "/images/50.jpg" },

    // MEČE
    { id: 50, name: "Eso mečů", arcana: "Malé", suit: "Meče", number: 1, imageUrl: "/images/51.jpg" },
    { id: 51, name: "Dva meče", arcana: "Malé", suit: "Meče", number: 2, imageUrl: "/images/52.jpg" },
    { id: 52, name: "Tři meče", arcana: "Malé", suit: "Meče", number: 3, imageUrl: "/images/53.jpg" },
    { id: 53, name: "Čtyři meče", arcana: "Malé", suit: "Meče", number: 4, imageUrl: "/images/54.jpg" },
    { id: 54, name: "Pět mečů", arcana: "Malé", suit: "Meče", number: 5, imageUrl: "/images/55.jpg" },
    { id: 55, name: "Šest mečů", arcana: "Malé", suit: "Meče", number: 6, imageUrl: "/images/56.jpg" },
    { id: 56, name: "Sedm mečů", arcana: "Malé", suit: "Meče", number: 7, imageUrl: "/images/57.jpg" },
    { id: 57, name: "Osm mečů", arcana: "Malé", suit: "Meče", number: 8, imageUrl: "/images/58.jpg" },
    { id: 58, name: "Devět mečů", arcana: "Malé", suit: "Meče", number: 9, imageUrl: "/images/59.jpg" },
    { id: 59, name: "Deset mečů", arcana: "Malé", suit: "Meče", number: 10, imageUrl: "/images/60.jpg" },
    { id: 60, name: "Páže mečů", arcana: "Malé", suit: "Meče", number: 11, imageUrl: "/images/61.jpg" },
    { id: 61, name: "Rytíř mečů", arcana: "Malé", suit: "Meče", number: 12, imageUrl: "/images/62.jpg" },
    { id: 62, name: "Královna mečů", arcana: "Malé", suit: "Meče", number: 13, imageUrl: "/images/63.jpg" },
    { id: 63, name: "Král mečů", arcana: "Malé", suit: "Meče", number: 14, imageUrl: "/images/64.jpg" },

    // PENTAKLY
    { id: 64, name: "Eso pentaklů", arcana: "Malé", suit: "Pentakle", number: 1, imageUrl: "/images/65.jpg" },
    { id: 65, name: "Dva pentakly", arcana: "Malé", suit: "Pentakle", number: 2, imageUrl: "/images/66.jpg" },
    { id: 66, name: "Tři pentakly", arcana: "Malé", suit: "Pentakle", number: 3, imageUrl: "/images/67.jpg" },
    { id: 67, name: "Čtyři pentakly", arcana: "Malé", suit: "Pentakle", number: 4, imageUrl: "/images/68.jpg" },
    { id: 68, name: "Pět pentaklů", arcana: "Malé", suit: "Pentakle", number: 5, imageUrl: "/images/69.jpg" },
    { id: 69, name: "Šest pentaklů", arcana: "Malé", suit: "Pentakle", number: 6, imageUrl: "/images/70.jpg" },
    { id: 70, name: "Sedm pentaklů", arcana: "Malé", suit: "Pentakle", number: 7, imageUrl: "/images/71.jpg" },
    { id: 71, name: "Osm pentaklů", arcana: "Malé", suit: "Pentakle", number: 8, imageUrl: "/images/72.jpg" },
    { id: 72, name: "Devět pentaklů", arcana: "Malé", suit: "Pentakle", number: 9, imageUrl: "/images/73.jpg" },
    { id: 73, name: "Deset pentaklů", arcana: "Malé", suit: "Pentakle", number: 10, imageUrl: "/images/74.jpg" },
    { id: 74, name: "Páže pentaklů", arcana: "Malé", suit: "Pentakle", number: 11, imageUrl: "/images/75.jpg" },
    { id: 75, name: "Rytíř pentaklů", arcana: "Malé", suit: "Pentakle", number: 12, imageUrl: "/images/76.jpg" },
    { id: 76, name: "Královna pentaklů", arcana: "Malé", suit: "Pentakle", number: 13, imageUrl: "/images/77.jpg" },
    { id: 77, name: "Král pentaklů", arcana: "Malé", suit: "Pentakle", number: 14, imageUrl: "/images/78.jpg" }
];

export default tarotCards; export const sections = [
    {
        id: 1,
        title: "Velké arkány",
        description:
            "Velké arkány představují nejdůležitější a nejsilnější karty v tarotovém balíčku. Symbolizují zásadní životní témata, hluboké změny, osobní růst a důležité životní lekce. Každá karta nese vlastní symboliku a ukazuje určitou cestu, zkušenost nebo energii, kterou člověk během života prochází. Velké arkány obsahují 22 karet – od Blázna až po Svět – a společně vytvářejí symbolickou cestu lidského života, poznání a sebepoznání."
    },

    {
        id: 2,
        title: "Hole",
        description:
            "Hole představují energii, akci, vášeň, kreativitu a osobní sílu. Jsou spojovány s živlem ohně a ukazují na motivaci, odvahu, nové začátky, ambice a chuť něco tvořit nebo měnit. Tyto karty často symbolizují pracovní oblast, nápady, růst, pohyb vpřed a životní energii. Mohou také upozorňovat na impulzivitu, netrpělivost nebo přílišné vyčerpání."
    },

    {
        id: 3,
        title: "Poháry",
        description:
            "Poháry symbolizují emoce, vztahy, intuici a vnitřní prožívání. Jsou spojeny s živlem vody a ukazují na city, lásku, rodinu, přátelství i duchovní stránku člověka. Tyto karty často vypovídají o emocionálním stavu, harmonii nebo naopak citových zraněních a zklamáních. Poháry vedou člověka k naslouchání vlastní intuici a srdci."
    },

    {
        id: 4,
        title: "Meče",
        description:
            "Meče představují mysl, komunikaci, pravdu a rozhodování. Jsou spojeny s živlem vzduchu a často poukazují na konflikty, překážky, stres nebo důležitá životní rozhodnutí. Tyto karty ukazují sílu rozumu, analytického myšlení a schopnosti postavit se pravdě. Mohou však také symbolizovat hádky, strach, psychickou zátěž nebo bolestivé zkušenosti."
    },

    {
        id: 5,
        title: "Pentakly",
        description:
            "Pentakly symbolizují materiální svět, finance, práci, stabilitu a fyzickou realitu. Jsou spojeny s živlem země a ukazují na bezpečí, majetek, zdraví, pracovní úspěchy i dlouhodobé budování hodnot. Tyto karty často souvisejí s kariérou, penězi, domovem a praktickým přístupem k životu. Mohou také upozorňovat na přílišné lpění na materiálních věcech nebo strach ze ztráty jistoty."
    }
];
