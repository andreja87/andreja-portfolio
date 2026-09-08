import { useState, useEffect, useRef } from "react";

/* =========================================================
   TRANSLATIONS
   All copy lives here. To edit text, edit only this object.
   ========================================================= */
const t = {
  en: {
    eyebrow: "People Development & Healthy Workplaces",
    name: "Andreja Trajkovic",
    heroSub: "My focus is employee learning and development, together with building healthy workplaces based on respect, support and open communication.",
    ctaPrimary: "See my work",
    ctaSecondary: "Get in touch",
    nav: {
      projects: "Projects",
      offer: "Focus areas",
      story: "My story",
      blog: "Articles",
      formula: "Formula",
      contact: "Contact",
    },
    backToTop: "Back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    storyTitle: "My story",
    storyBody: [
      "I've worked in different roles and industries. These experiences showed me how respect, opportunities to grow, communication and team atmosphere affect how employees feel and work.",
      "I've been part of teams where support and development were part of everyday work, but I've also seen how their absence affects employees' energy and motivation. That is why I believe respect, support and a strong sense of community are the foundation of a healthy workplace.",
      "For more than a decade, I've actively worked on my personal development and explored communication and human behavior. Today, I combine that interest with my professional experience and formal education in HR, organizational behavior and business organization.",
      "My goal is to contribute to workplaces where employees can grow, communicate openly, support one another and build success together.",
    ],
    offerTitle: "How I can contribute",
    offerIntro: "I combine professional experience, continuous learning and L&D principles to develop practical approaches focused on employees and their work environment.",
    offers: [
      {
        name: "Employee Skills Development",
        desc: "Developing knowledge and skills that help employees grow and respond confidently to the needs of their roles.",
      },
      {
        name: "Learning & Development",
        desc: "Programs and development activities designed around employees and the way work actually happens.",
      },
      {
        name: "Communication & Emotional Intelligence",
        desc: "Developing self-awareness, open communication and stronger working relationships.",
      },
      {
        name: "Healthy Workplaces",
        desc: "Supporting workplace cultures based on respect, mutual support, collaboration and shared responsibility.",
      },
    ],
    formulaTitle: "The formula",
    formulaA: "Respect",
    formulaB: "Room to grow",
    formulaC: "Satisfied employees",
    formulaD: "Healthier workplaces",
    formulaNote: "It isn't complicated. It just requires consistency.",
    projectsTitle: "Projects",
    projectsIntro: "Case studies and projects focused on employee learning and development, skills development and healthier workplaces.",
    projectsComingSoon: "Project case studies are on the way.",
    projectsComingSoonSub: "The first case studies are in the works. Check back soon.",
    viewCaseStudy: "View case study",
    viewProject: "View project",
    backToWork: "Back to projects",
    caseStudyPending: "The full case study is being written.",
    caseStudyPendingSub: "The detailed write-up will be published here shortly.",
    caseStudyEnOnly: "The detailed case study is currently available in English.",
    caseStudyPartial: "The remaining sections are currently available in English.",
    caseStudyReadEn: "Read in English",
    notFound: "That page doesn't exist.",
    blogTitle: "Articles",
    blogIntro: "Articles about employee development and healthier workplaces are on the way.",
    blogComingSoon: "The first articles are in the works. Check back soon.",
    readMore: "Read more",
    contactTitle: "Let's connect",
    contactBody: "For collaboration or an exchange of ideas about L&D and healthier workplaces, feel free to send me a message.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSend: "Send message",
    formSending: "Sending...",
    formSuccess: "Thank you. Your message has been sent.",
    formError: "Something went wrong. Please try again.",
    formIncomplete: "Please fill in all three fields.",
    formBadEmail: "Please check the email address.",
    linkedinBefore: "You can also find me on ",
    linkedinLink: "LinkedIn",
    linkedinAfter: ".",
    footer: "\u00A9 2026 Andreja Trajkovic. All rights reserved.",
  },
  sr: {
    eyebrow: "Razvoj zaposlenih i zdrava radna okru\u017eenja",
    name: "Andreja Trajkovi\u0107",
    heroSub: "Moj fokus su edukacija i razvoj zaposlenih, kao i stvaranje zdravih radnih okru\u017eenja zasnovanih na po\u0161tovanju, podr\u0161ci i otvorenoj komunikaciji.",
    ctaPrimary: "Projekti",
    ctaSecondary: "Kontakt",
    nav: {
      projects: "Projekti",
      offer: "Oblasti rada",
      story: "O meni",
      blog: "Blog",
      formula: "Formula",
      contact: "Kontakt",
    },
    backToTop: "Nazad na vrh",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    storyTitle: "Moja pri\u010da",
    storyBody: [
      "Radila sam na razli\u010ditim pozicijama i u razli\u010ditim industrijama. Ta iskustva pokazala su mi koliko po\u0161tovanje, mogu\u0107nost za razvoj, komunikacija i atmosfera u timu uti\u010du na to kako se zaposleni ose\u0107aju i rade.",
      "Bila sam deo timova u kojima su podr\u0161ka i razvoj bili deo svakodnevnog rada, ali sam videla i kako njihov nedostatak uti\u010de na energiju i motivaciju zaposlenih. Zato verujem da su po\u0161tovanje, podr\u0161ka i ose\u0107aj pripadnosti osnova zdravog radnog okru\u017eenja.",
      "Vi\u0161e od decenije aktivno radim na li\u010dnom razvoju i prou\u010davam komunikaciju i pona\u0161anje ljudi. Danas to interesovanje povezujem sa profesionalnim iskustvom i formalnim obrazovanjem iz oblasti upravljanja ljudskim resursima, organizacionog pona\u0161anja i organizacije preduze\u0107a.",
      "\u017delim da doprinesem radnim okru\u017eenjima u kojima se zaposleni razvijaju, otvoreno komuniciraju, podr\u017eavaju jedni druge i zajedno grade uspeh.",
    ],
    offerTitle: "Kako mogu da doprinesem",
    offerIntro: "U svom pristupu povezujem profesionalno iskustvo, kontinuiranu edukaciju i principe L&D-a kako bih razvijala prakti\u010dna re\u0161enja usmerena na zaposlene i njihovo radno okru\u017eenje.",
    offers: [
      {
        name: "Razvoj kompetencija zaposlenih",
        desc: "Razvoj znanja i ve\u0161tina koji zaposlenima omogu\u0107ava da napreduju i sigurnije odgovore na zahteve svoje uloge.",
      },
      {
        name: "Edukacija i razvoj",
        desc: "Programi i razvojne aktivnosti prilago\u0111eni zaposlenima i na\u010dinu na koji se posao zaista odvija.",
      },
      {
        name: "Komunikacija i emocionalna inteligencija",
        desc: "Razvoj samosvesti, otvorene komunikacije i kvalitetnijih odnosa na poslu.",
      },
      {
        name: "Zdrava radna okru\u017eenja",
        desc: "Podr\u0161ka u stvaranju kulture zasnovane na po\u0161tovanju, me\u0111usobnoj podr\u0161ci, saradnji i zajedni\u010dkoj odgovornosti.",
      },
    ],
    formulaTitle: "Formula",
    formulaA: "Po\u0161tovanje",
    formulaB: "Prostor za razvoj",
    formulaC: "Zadovoljni zaposleni",
    formulaD: "Zdravija radna okru\u017eenja",
    formulaNote: "Nije komplikovano. Samo je potrebno raditi dosledno.",
    projectsTitle: "Projekti",
    projectsIntro: "Studije slu\u010daja i projekti posve\u0107eni edukaciji, razvoju kompetencija zaposlenih i stvaranju zdravijih radnih okru\u017eenja.",
    projectsComingSoon: "Studije slu\u010daja su u pripremi.",
    projectsComingSoonSub: "Prve studije slu\u010daja uskoro sti\u017eu. Navratite ponovo.",
    viewCaseStudy: "Pogledaj studiju slu\u010daja",
    viewProject: "Pogledaj projekat",
    backToWork: "Nazad na projekte",
    caseStudyPending: "Studija slu\u010daja je u pripremi.",
    caseStudyPendingSub: "Detaljan prikaz projekta bi\u0107e objavljen ovde uskoro.",
    caseStudyEnOnly: "Detaljan prikaz studije slu\u010daja trenutno je dostupan na engleskom jeziku.",
    caseStudyPartial: "Preostale sekcije studije slu\u010daja trenutno su dostupne na engleskom jeziku.",
    caseStudyReadEn: "Pro\u010ditaj na engleskom",
    notFound: "Ta stranica ne postoji.",
    blogTitle: "Blog",
    blogIntro: "Uskoro sti\u017eu tekstovi o razvoju zaposlenih i zdravijim radnim okru\u017eenjima.",
    blogComingSoon: "Prvi \u010dlanci su u pripremi. Navratite ponovo.",
    readMore: "Pro\u010ditaj vi\u0161e",
    contactTitle: "Pove\u017eimo se",
    contactBody: "Za saradnju ili razmenu ideja o razvoju zaposlenih i zdravijim radnim okru\u017eenjima, slobodno mi pi\u0161ite.",
    formName: "Ime",
    formEmail: "Email",
    formMessage: "Poruka",
    formSend: "Po\u0161alji poruku",
    formSending: "Slanje u toku...",
    formSuccess: "Hvala. Va\u0161a poruka je poslata.",
    formError: "Do\u0161lo je do gre\u0161ke. Poku\u0161ajte ponovo.",
    formIncomplete: "Molimo popunite sva tri polja.",
    formBadEmail: "Proverite adresu e-po\u0161te.",
    linkedinBefore: "Tu sam i na ",
    linkedinLink: "LinkedIn-u",
    linkedinAfter: ".",
    footer: "\u00A9 2026 Andreja Trajkovi\u0107. Sva prava zadr\u017eana.",
  },
};

/* =========================================================
   FUTURE FORWARD — CASE STUDY CONTENT

   Both languages are complete. Each was written separately rather than
   translated, so the two objects hold their own wording.

   Every section renders only when its key exists. If a new section is
   added to one language before the other, the page skips it in the other
   language and shows a note pointing to the version that has it.
   ========================================================= */
const CASE_FUTURE_FORWARD = {
  en: {
    disclaimer:
      "This case study was developed as part of my final academic project using Future Forward as a real-world organizational context. The analysis was based on information provided by the company and relevant secondary research. The proposed solutions were developed for academic purposes and were not implemented or formally endorsed by the company.",

    overviewTitle: "Project Overview",
    overview: [
      "Future Forward is a small IT company based in the Netherlands and Serbia. Its sister company, GuideLites, operates in more than 20 countries and supports over 1,700 active licenses. At the time of the project, the Future Forward team consisted of approximately five to six experienced software development and UI/UX professionals.",
      "Team members had a high level of autonomy. They independently followed industry developments, selected relevant tools and already used AI in their daily work.",
      "This academic case study explored how a lightweight Learning & Development framework could build on those strengths and support employee development, knowledge sharing and future workforce capability.",
    ],

    challengeTitle: "The L&D Challenge",
    challengeIntro: [
      "Employees largely managed their learning independently. The challenge was to connect individual development more clearly with shared learning and future organizational needs.",
      "The aim was not to replace autonomy with complex processes. It was to introduce enough structure to:",
    ],
    challengeList: [
      "provide clearer direction for employee development",
      "make knowledge easier to capture and preserve",
      "support more consistent learning across the team",
      "use AI as both a work and learning resource",
      "prepare for future knowledge transfer and workforce growth",
    ],
    challengeQuestionLabel: "The central question",
    challengeQuestion:
      "How can a small company maintain the autonomy of experienced employees while creating a practical structure for continuous learning, knowledge sharing and workforce development, without disrupting complex project work or delivery timelines?",

    roleTitle: "My Role",
    roleIntro: "My contribution included:",
    roleList: [
      "researching the company and its industry context",
      "analyzing information gathered through an interview with the Managing Partner",
      "reviewing current employee learning, knowledge-sharing and AI practices",
      "identifying L&D needs and opportunities",
      "connecting the findings with relevant L&D research",
      "designing a practical, AI-supported L&D framework",
      "outlining implementation steps, responsibilities, resources and evaluation indicators",
    ],
    roleClose:
      "The goal was to develop a realistic approach suited to the company's size, experienced team and way of working.",

    processTitle: "My Process",
    processVisualAlt: "Diagram of the five process steps",
    processFlow: ["Understand", "Analyze", "Prioritize", "Design", "Plan"],
    process: [
      {
        title: "Understand",
        desc: "I explored the company context, team structure and current approach to employee learning, knowledge sharing and AI use.",
      },
      {
        title: "Analyze",
        desc: "I compared the current approach with relevant L&D research and identified areas that could benefit from additional structure.",
      },
      {
        title: "Prioritize",
        desc: "I focused on L&D needs that were relevant to a small, experienced team working on complex projects.",
      },
      {
        title: "Design",
        desc: "I developed a framework connecting individual development, learning during everyday work, team knowledge sharing and future mentoring.",
      },
      {
        title: "Plan",
        desc: "I outlined a 12-month implementation plan, including responsibilities, time, resources and evaluation indicators.",
      },
    ],

    frameworkTitle: "The Proposed Framework",
    framework: [
      "Based on the analysis, I developed three connected measures. Each measure addresses a specific L&D need while remaining practical for a small, experienced team.",
      "The measures were designed to support individual development, create shared ways of working and strengthen knowledge continuity without adding unnecessary complexity to everyday work.",
    ],

    measureLabel: "The Measure",
    elementsLabel: "Key Elements",
    impactLabel: "Expected Impact",
    futureBadge: "Proposed as a future measure",

    measures: [
      {
        title: "Measure 1 \u2014 Structured L&D Program Supported by AI",
        measure: [
          "At the time of the analysis, employee learning and development were largely self-directed, without a structured process for setting development goals and reviewing progress.",
          "I proposed a structured but flexible L&D program based on an Individual Development Plan for each employee. The program reflects the employee\u2019s development needs, interests, and role. It allows employees to maintain their autonomy while providing clearer career direction and development support.",
        ],
        elements: [
          "Quarterly development conversations",
          "An Individual Development Plan for each employee",
          "Development goals aligned with the employee\u2019s interests, role requirements, and company needs",
          "AI tools, learning content, and platforms selected according to the agreed goals",
          "Regular progress reviews and adjustments to the individual plan",
        ],
        impact: [
          "Clear development and career goals",
          "Learning tailored to the employee",
          "Better visibility of development activities and progress",
          "Greater employee motivation and engagement",
          "Continuous learning connected with everyday work",
        ],
      },
      {
        title: "Measure 2 \u2014 Shared Guidelines for Using AI Tools",
        measure: [
          "At the time of the analysis, employees were already using different AI tools in their daily work, but there was no shared system for selecting tools, exchanging good practices, and documenting knowledge.",
          "I proposed an internal guide containing approved AI tools, established processes, and examples of best practices. The guide provides a clear foundation for more efficient work and continuous learning without preventing employees from exploring and suggesting new solutions. When the team adopts a new tool or useful practice, the guide is updated.",
        ],
        elements: [
          "An internal guide containing approved AI tools, usage guidelines, and examples of best practices",
          "A monthly 60-minute mini-hackathon for sharing experiences and testing new approaches",
          "Comparison of different approaches and documentation of useful solutions",
          "An internal blog and searchable knowledge base in Notion",
          "Quarterly reviews of the guide, with new tools and practices added after team approval",
        ],
        impact: [
          "Clear guidance for using AI tools",
          "Less time spent searching for suitable solutions",
          "More productive and consistent working practices",
          "Continuous learning through shared experience and testing new approaches",
          "Easier collaboration and knowledge sharing across the team",
          "Retention of useful knowledge and experience within the company",
        ],
      },
      {
        title: "Measure 3 \u2014 Mentoring Program and Junior Roles",
        future: true,
        measure: [
          "At the time of the analysis, the team consisted of experienced professionals, but there was no structured way to transfer and preserve their knowledge within the company. This created a risk that important knowledge could be lost if individual employees left the organization.",
          "As a future step, I proposed gradually introducing one or two junior roles together with a structured mentoring program. The program enables experienced employees to transfer their knowledge systematically to new team members. Its purpose is to reduce the risk of knowledge loss and support the company\u2019s long-term workforce stability.",
        ],
        elements: [
          "A dedicated mentor for each junior employee",
          "Weekly development conversations",
          "An Individual Development Plan",
          "Job shadowing and working on tasks with experienced colleagues",
          "Code reviews and regular feedback",
          "Reverse mentoring, allowing junior employees to share new knowledge, tools, and perspectives with their mentors",
        ],
        impact: [
          "More structured onboarding for junior employees",
          "Faster development of their knowledge and skills",
          "Systematic knowledge transfer and retention",
          "Lower risk of losing critical knowledge",
          "Stronger communication and mentoring skills among experienced employees",
          "Better collaboration and connection across the team",
          "Greater workforce stability and readiness for future growth",
        ],
      },
    ],

    measuresNote:
      "The effects listed above are expected rather than achieved results, as the measures were not implemented during the academic project.",

    conclusionTitle: "Conclusion",
    conclusion: [
      "Together, the three measures connect individual development, shared AI practices and knowledge transfer within one practical L&D framework.",
      "The proposed approach maintains employee autonomy while adding enough structure to support continuous learning, preserve knowledge and prepare the company for future workforce growth.",
      "As the measures were not implemented during the academic project, these are expected outcomes rather than measured business results.",
    ],
    outcomeLine: ["Individual development", "Shared knowledge", "Future workforce capability"],
  },

  /* Serbian: written separately, not translated. Complete as of now.
     `processFlow` holds the short step labels used above the process cards;
     the English version does not use them. */
  sr: {
    disclaimer:
      "Ova studija slu\u010daja nastala je kao deo mog zavr\u0161nog akademskog projekta, koriste\u0107i Future Forward kao primer iz realnog organizacionog okru\u017eenja. Analiza je zasnovana na informacijama dobijenim od kompanije i relevantnim sekundarnim istra\u017eivanjima. Predlo\u017eena re\u0161enja razvijena su u akademske svrhe i nisu primenjena niti ih je kompanija formalno odobrila.",

    overviewTitle: "Pregled projekta",
    overview: [
      "Future Forward je mala IT kompanija koja posluje u Holandiji i Srbiji. Njena sestrinska kompanija GuideLites prisutna je u vi\u0161e od 20 zemalja i ima preko 1.700 aktivnih licenci.",
      "U vreme izrade projekta, Future Forward tim \u010dinilo je pribli\u017eno petoro do \u0161estoro iskusnih stru\u010dnjaka iz oblasti razvoja softvera i UI/UX dizajna.",
      "Zaposleni su imali visok nivo autonomije. Samostalno su pratili razvoj industrije, birali alate relevantne za svoj rad i ve\u0107 koristili ve\u0161ta\u010dku inteligenciju u svakodnevnim aktivnostima.",
      "Ova studija slu\u010daja istra\u017euje kako jednostavan L&D okvir mo\u017ee da se nadove\u017ee na postoje\u0107e prednosti kompanije i podr\u017ei edukaciju i razvoj zaposlenih, razmenu znanja i budu\u0107e kadrovske kapacitete.",
    ],

    challengeTitle: "L&D izazov",
    challengeIntro: [
      "Edukacija i razvoj zaposlenih uglavnom su se odvijali samostalno. Izazov je bio jasnije povezati individualni razvoj sa razmenom znanja i budu\u0107im potrebama kompanije.",
      "Cilj nije bio uvo\u0111enje slo\u017eenih procesa koji bi ograni\u010dili autonomiju zaposlenih. Bilo je potrebno uvesti dovoljno strukture da se:",
    ],
    challengeList: [
      "zaposlenima pru\u017ei jasniji pravac razvoja",
      "znanje lak\u0161e dokumentuje i sa\u010duva",
      "podr\u017ei doslednija edukacija unutar tima",
      "zaposlenima olak\u0161a kori\u0161\u0107enje ve\u0161ta\u010dke inteligencije u svakodnevnom radu i edukaciji",
      "kompanija pripremi za budu\u0107i prenos znanja i razvoj kadrovskih kapaciteta",
    ],
    challengeQuestionLabel: "Glavno pitanje projekta",
    challengeQuestion:
      "Kako malo preduze\u0107e mo\u017ee da zadr\u017ei autonomiju iskusnih zaposlenih, a istovremeno uvede prakti\u010dnu strukturu za kontinuiranu edukaciju, razmenu znanja i razvoj kadrovskih kapaciteta, bez ometanja rada na slo\u017eenim projektima ili ugro\u017eavanja rokova isporuke?",

    roleTitle: "Moja uloga",
    roleIntro: "Moja uloga obuhvatila je:",
    roleList: [
      "istra\u017eivanje kompanije i industrijskog konteksta",
      "analizu informacija prikupljenih kroz intervju sa Managing Partnerom",
      "pregled postoje\u0107e prakse edukacije i razvoja zaposlenih, razmene znanja i kori\u0161\u0107enja AI alata",
      "prepoznavanje L&D potreba i mogu\u0107nosti za unapre\u0111enje",
      "povezivanje nalaza sa relevantnim L&D istra\u017eivanjima",
      "kreiranje prakti\u010dnog L&D okvira podr\u017eanog ve\u0161ta\u010dkom inteligencijom",
      "definisanje koraka za primenu, odgovornosti, potrebnih resursa i pokazatelja za pra\u0107enje rezultata",
    ],
    roleClose:
      "Cilj je bio da razvijem realisti\u010dan pristup prilago\u0111en veli\u010dini kompanije, iskusnom timu i postoje\u0107em na\u010dinu rada.",

    processTitle: "Proces rada",
    processVisualAlt: "Dijagram pet koraka u procesu rada",
    processFlow: [
      "Postoje\u0107e stanje",
      "Analiza potreba",
      "L&D prioriteti",
      "Kreiranje re\u0161enja",
      "Plan primene",
    ],
    process: [
      {
        title: "Razumevanje postoje\u0107eg stanja",
        desc: "Istra\u017eila sam poslovni kontekst, strukturu tima i postoje\u0107i pristup edukaciji i razvoju zaposlenih, razmeni znanja i kori\u0161\u0107enju ve\u0161ta\u010dke inteligencije.",
      },
      {
        title: "Analiza i prepoznavanje potreba kompanije",
        desc: "Postoje\u0107i pristup uporedila sam sa relevantnim L&D istra\u017eivanjima i prepoznala oblasti u kojima bi dodatna struktura mogla da donese vrednost.",
      },
      {
        title: "Odre\u0111ivanje L&D prioriteta",
        desc: "Izdvojila sam L&D potrebe relevantne za mali tim iskusnih stru\u010dnjaka koji rade na slo\u017eenim projektima.",
      },
      {
        title: "Kreiranje re\u0161enja",
        desc: "Razvila sam okvir koji povezuje individualni razvoj, edukaciju tokom svakodnevnog rada, razmenu znanja unutar tima i budu\u0107e mentorstvo.",
      },
      {
        title: "Planiranje",
        desc: "Napravila sam predlog dvanaestomese\u010dnog plana primene, koji obuhvata odgovornosti, potrebno vreme, resurse i pokazatelje za pra\u0107enje rezultata.",
      },
    ],

    frameworkTitle: "Predlo\u017eene mere",
    framework: [
      "Na osnovu analize definisala sam tri povezane mere. Svaka mera odgovara na prepoznatu potrebu i sadr\u017ei konkretne elemente za primenu i o\u010dekivane efekte.",
    ],

    measureLabel: "Mera",
    elementsLabel: "Elementi mere",
    impactLabel: "O\u010dekivani efekti",
    futureBadge: "Predlog za budu\u0107i razvoj",

    measures: [
      {
        title: "Mera 1 \u2014 Strukturirani L&D program podr\u017ean ve\u0161ta\u010dkom inteligencijom",
        measure: [
          "U vreme analize, edukacija i razvoj zaposlenih uglavnom su se odvijali samostalno, bez strukturiranog procesa za definisanje razvojnih ciljeva i pra\u0107enje napretka.",
          "Predlo\u017eila sam strukturiran, ali fleksibilan L&D program zasnovan na individualnom planu razvoja za svakog zaposlenog. Program je prilago\u0111en njegovim razvojnim potrebama, interesovanjima i ulozi. Omogu\u0107ava mu da zadr\u017ei autonomiju, uz jasniji karijerni pravac i podr\u0161ku u razvoju.",
        ],
        elements: [
          "Kvartalni razgovori o razvoju",
          "Individualni plan razvoja za svakog zaposlenog",
          "Razvojni ciljevi uskla\u0111eni sa interesovanjima zaposlenog, zahtevima njegove uloge i potrebama kompanije",
          "Izbor AI alata, edukativnih sadr\u017eaja i platformi u skladu sa definisanim ciljevima",
          "Redovno pra\u0107enje napretka i prilago\u0111avanje individualnog plana",
        ],
        impact: [
          "Jasni razvojni i karijerni ciljevi",
          "Edukacija prilago\u0111ena zaposlenom",
          "Bolji pregled razvojnih aktivnosti i napretka",
          "Ve\u0107a motivacija i uklju\u010denost zaposlenih",
          "Kontinuirana edukacija povezana sa svakodnevnim radom",
        ],
      },
      {
        title: "Mera 2 \u2014 Zajedni\u010dke smernice za kori\u0161\u0107enje AI alata",
        measure: [
          "U vreme analize, zaposleni su ve\u0107 koristili razli\u010dite AI alate u svakodnevnom radu, ali nije postojao zajedni\u010dki sistem za izbor alata, razmenu dobrih praksi i dokumentovanje ste\u010denih znanja.",
          "Predlo\u017eila sam interni vodi\u010d sa usvojenim AI alatima, primerima najboljih praksi i definisanim procesima za njihovo kori\u0161\u0107enje. Vodi\u010d zaposlenima pru\u017ea jasnu osnovu za efikasniji rad i edukaciju, bez ograni\u010davanja mogu\u0107nosti da istra\u017euju i predla\u017eu nova re\u0161enja. Kada tim usvoji novi alat ili korisnu praksu, vodi\u010d se a\u017eurira.",
        ],
        elements: [
          "Interni vodi\u010d sa usvojenim AI alatima, smernicama za kori\u0161\u0107enje i primerima najboljih praksi",
          "Mese\u010dni mini-hakaton u trajanju od 60 minuta za razmenu iskustava i isprobavanje novih pristupa",
          "Zajedni\u010dko pore\u0111enje pristupa i dokumentovanje korisnih re\u0161enja",
          "Interni blog i pretra\u017eiva baza znanja u Notion-u",
          "Kvartalno a\u017euriranje vodi\u010da, kao i dodavanje novih alata i praksi nakon \u0161to ih tim usvoji",
        ],
        impact: [
          "Jasne smernice za kori\u0161\u0107enje AI alata",
          "Manje vremena utro\u0161enog na tra\u017eenje odgovaraju\u0107ih re\u0161enja",
          "Produktivniji i dosledniji na\u010din rada",
          "Kontinuirana edukacija kroz razmenu iskustava i isprobavanje novih pristupa",
          "Lak\u0161a saradnja i razmena znanja unutar tima",
          "O\u010duvanje korisnih znanja i iskustava u kompaniji",
        ],
      },
      {
        title: "Mera 3 \u2014 Program mentorstva i uvo\u0111enje juniorskih pozicija",
        future: true,
        measure: [
          "U vreme analize, tim su \u010dinili iskusni stru\u010dnjaci, ali nije postojao strukturiran na\u010din za preno\u0161enje i o\u010duvanje njihovog znanja unutar kompanije. Zbog toga je postojao rizik da se odlaskom pojedinih zaposlenih izgubi deo va\u017enog znanja.",
          "Kao budu\u0107i korak, predlo\u017eila sam postepeno uvo\u0111enje jedne do dve juniorske pozicije i strukturiran program mentorstva. Program omogu\u0107ava sistemati\u010dan prenos znanja iskusnih zaposlenih na nove \u010dlanove tima. Njegov cilj je da smanji rizik od gubitka znanja i doprinese dugoro\u010dnoj kadrovskoj stabilnosti kompanije.",
        ],
        elements: [
          "Odre\u0111ivanje mentora za svakog juniora",
          "Nedeljni razgovori o razvoju",
          "Individualni plan razvoja",
          "Pra\u0107enje rada iskusnijih kolega i zajedni\u010dki rad na zadacima",
          "Pregled koda i redovne povratne informacije",
          "Obrnuto mentorstvo, kroz koje juniori sa mentorima dele nova znanja, alate i perspektive",
        ],
        impact: [
          "Strukturiranije uvo\u0111enje juniora u posao",
          "Br\u017ei razvoj njihovih znanja i ve\u0161tina",
          "Sistemati\u010dan prenos i o\u010duvanje znanja unutar kompanije",
          "Manji rizik od gubitka klju\u010dnog znanja",
          "Razvoj komunikacionih i mentorskih ve\u0161tina iskusnih zaposlenih",
          "Bolja saradnja i povezanost unutar tima",
          "Ve\u0107a kadrovska stabilnost i spremnost kompanije za budu\u0107i rast",
        ],
      },
    ],

    measuresNote:
      "Navedeni efekti su o\u010dekivani, a ne ostvareni rezultati, jer mere nisu primenjene tokom akademskog projekta.",

    conclusionTitle: "Zaklju\u010dak",
    conclusion: [
      "Tri predlo\u017eene mere povezuju individualni razvoj zaposlenih, zajedni\u010dke prakse kori\u0161\u0107enja ve\u0161ta\u010dke inteligencije i sistemati\u010dan prenos znanja u jedan prakti\u010dan L&D okvir.",
      "Ovakav pristup zadr\u017eava autonomiju iskusnih zaposlenih, ali uvodi dovoljno strukture da podr\u017ei kontinuiranu edukaciju, o\u010duvanje znanja i budu\u0107u kadrovsku stabilnost kompanije.",
      "Po\u0161to mere nisu primenjene tokom akademskog projekta, navedeni efekti predstavljaju o\u010dekivane, a ne ostvarene rezultate.",
    ],
    outcomeLine: [
      "Individualni razvoj",
      "Razmena i o\u010duvanje znanja",
      "Budu\u0107a kadrovska stabilnost",
    ],
  },
};

/* Optional diagram for the process section. Put the exported Canva image in
   `public` and set the path, e.g. "/process.png". The written steps below it
   always stay on the page, so nothing essential lives only inside the image. */
const PROCESS_VISUAL = { en: "", sr: "" };

/* =========================================================
   PROJECTS

   Each project needs a `slug`. It becomes the address of that
   project's own page: #/work/<slug>. Clicking the card opens it.

   Set caseStudy: true and the button label changes on its own.

   `detail.sections` builds the project page. Each section is
   { heading: {en, sr}, body: {en: [...], sr: [...]} } where the
   body is a list of paragraphs. While sections is empty, the
   page shows a short "in preparation" note instead.
   ========================================================= */
const projects = [
  {
    slug: "future-forward",
    caseStudy: true,
    date: {
      en: "Academic L&D Case Study · 2026",
      sr: "Akademska L&D studija slučaja · 2026",
    },
    title: {
      en: "Strengthening Workforce Capability Through Employee Learning and Development",
      sr: "Jačanje kadrovskih kapaciteta kroz edukaciju i razvoj zaposlenih",
    },
    excerpt: {
      en: "Designing a lightweight, AI-supported L&D framework to support employee development, knowledge continuity and future workforce capability in a small senior IT team.",
      sr: "Kreiranje jednostavnog L&D okvira, podržanog veštačkom inteligencijom, sa ciljem razvoja zaposlenih, očuvanja znanja i jačanja budućih kadrovskih kapaciteta u malom timu iskusnih IT stručnjaka.",
    },
    detail: CASE_FUTURE_FORWARD,
  },
];

/* =========================================================
   ARTICLES
   Same shape, without slug or caseStudy. Use `url` to link out.
   ========================================================= */
const blogPosts = [];

/* The Articles section stays built but hidden until the first article is live.
   Flip this to true and the section and its menu item come back, in place
   between "My story" and "Formula". */
const SHOW_BLOG = false;

/* Section order on the page and in the fixed menu */
const NAV_IDS = ["projects", "offer", "story", ...(SHOW_BLOG ? ["blog"] : []), "formula", "contact"];

/* Where the contact form posts. Create a free form at formspree.io or
   web3forms.com, point it at the email address below, and paste the
   endpoint they give you here. See the README for the steps. */
const FORM_ENDPOINT = "https://formspree.io/f/maeylojg";

/* Portrait for the "My story" section.
   Put the image in the `public` folder and set the path here, e.g. "/portrait.jpg".
   Leave it empty and the section stays single-column, exactly as before. */
const PORTRAIT = "/portrait.jpg";
const PORTRAIT_ALT = {
  en: "Portrait of Andreja Trajkovic",
  sr: "Portret Andreje Trajković",
};

/* Replace with the real LinkedIn profile URL */
const LINKEDIN_URL = "https://www.linkedin.com/in/andreja-trajkovic";
const EMAIL = "andrejatrajkovic999@gmail.com";

/* ============ Scroll reveal helper ============ */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* Dates are plain strings for articles, {en, sr} objects for projects */
const localize = (value, lang) =>
  typeof value === "string" ? value : value ? value[lang] : "";

/* ============ Card grid shared by projects and articles ============ */
function CardSection({
  id,
  sectionClass,
  title,
  intro,
  items,
  lang,
  linkLabel,
  caseStudyLabel,
  emptyTitle,
  emptySub,
  navigate,
}) {
  return (
    <section className={sectionClass} id={id}>
      <div className="inner">
        <Reveal><h2 className="section-title">{title}</h2></Reveal>
        {intro && <Reveal delay={80}><p className="section-intro">{intro}</p></Reveal>}
        {items.length === 0 ? (
          <Reveal delay={140}>
            <div className="empty-state">
              <h3>{emptyTitle}</h3>
              {emptySub && <p>{emptySub}</p>}
            </div>
          </Reveal>
        ) : (
          <div className="card-grid">
            {items.map((item, i) => {
              const href = item.slug ? `#/work/${item.slug}` : item.url;
              const isExternal = !item.slug && !!item.url;
              const label = item.caseStudy && caseStudyLabel ? caseStudyLabel : linkLabel;
              const inner = (
                <>
                  <div>
                    {item.date && <p className="entry-date">{localize(item.date, lang)}</p>}
                    <h3>{item.title[lang]}</h3>
                    <p>{item.excerpt[lang]}</p>
                  </div>
                  {href && (
                    <p className="entry-link-row">
                      <span className="entry-link">{label} →</span>
                    </p>
                  )}
                </>
              );
              return (
                <Reveal key={item.slug || i} delay={i * 100}>
                  {href ? (
                    <a
                      className="card entry-card card-link"
                      href={href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noreferrer" }
                        : {
                            onClick: (e) => {
                              e.preventDefault();
                              navigate(href);
                            },
                          })}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="card entry-card">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============ Case study body ============ */
function MeasureBlock({ data, d, index }) {
  return (
    <div className="measure">
      <Reveal>
        <h3 className="measure-title">
          {data.title}
          {data.future && <span className="future-badge">{d.futureBadge}</span>}
        </h3>
      </Reveal>

      <div className="measure-flow">
        <Reveal delay={0}>
          <div className="card measure-card">
            <h4>{d.measureLabel}</h4>
            {data.measure.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <span className="measure-arrow" aria-hidden="true">→</span>
        </Reveal>

        <Reveal delay={260}>
          <div className="card measure-card">
            <h4>{d.elementsLabel}</h4>
            <ul>
              {data.elements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <span className="measure-arrow" aria-hidden="true">→</span>
        </Reveal>

        <Reveal delay={520}>
          <div className="card measure-card is-impact">
            <h4>{d.impactLabel}</h4>
            <ul>
              {data.impact.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function CaseStudyBody({ d, lang }) {
  const visual = PROCESS_VISUAL[lang];
  return (
    <>
      {d.overviewTitle && (
      <section className="case-section" aria-labelledby="cs-overview">
        <Reveal>
          <h2 id="cs-overview">{d.overviewTitle}</h2>
          {d.overview.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Reveal>
      </section>
      )}

      {d.challengeTitle && (
      <section className="case-section" aria-labelledby="cs-challenge">
        <Reveal>
          <h2 id="cs-challenge">{d.challengeTitle}</h2>
          {d.challengeIntro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <ul className="case-list">
            {d.challengeList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={140}>
          <div className="callout">
            <p className="callout-label">{d.challengeQuestionLabel}</p>
            <p className="callout-text">{d.challengeQuestion}</p>
          </div>
        </Reveal>
      </section>
      )}

      {d.roleTitle && (
      <section className="case-section" aria-labelledby="cs-role">
        <Reveal>
          <h2 id="cs-role">{d.roleTitle}</h2>
          <p>{d.roleIntro}</p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="contribution-list">
            {d.roleList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={200}>
          <p>{d.roleClose}</p>
        </Reveal>
      </section>
      )}

      {d.processTitle && (
      <section className="case-section" aria-labelledby="cs-process">
        <Reveal>
          <h2 id="cs-process">{d.processTitle}</h2>
        </Reveal>

        {d.processFlow && (
          <Reveal delay={60}>
            <div className="process-flow" aria-hidden="true">
              {d.processFlow.map((label, i) => (
                <span key={label} className="flow-item">
                  <span className="flow-chip">{label}</span>
                  {i < d.processFlow.length - 1 && (
                    <span className="flow-arrow">→</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        {visual && (
          <Reveal delay={80}>
            <figure className="process-visual">
              <img src={visual} alt={d.processVisualAlt} loading="lazy" />
            </figure>
          </Reveal>
        )}
        <ol className="process-steps">
          {d.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 110}>
              <li className="card process-card">
                <span className="process-number">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
      )}

      {d.frameworkTitle && (
      <section className="case-section" aria-labelledby="cs-framework">
        <Reveal>
          <h2 id="cs-framework">{d.frameworkTitle}</h2>
          {d.framework.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Reveal>
      </section>
      )}

      {(d.measures || []).map((m, i) => (
        <section className="case-section" key={m.title}>
          <MeasureBlock data={m} d={d} index={i} />
        </section>
      ))}

      {d.measuresNote && (
        <Reveal>
          <p className="measures-note">{d.measuresNote}</p>
        </Reveal>
      )}

      {d.conclusionTitle && (
      <section className="case-section" aria-labelledby="cs-conclusion">
        <Reveal>
          <h2 id="cs-conclusion">{d.conclusionTitle}</h2>
          {d.conclusion.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Reveal>
        <Reveal delay={140}>
          <div className="outcome-line">
            {d.outcomeLine.map((step, i) => (
              <span key={step} className="outcome-item">
                <span className="outcome-chip">{step}</span>
                {i < d.outcomeLine.length - 1 && (
                  <span className="outcome-arrow" aria-hidden="true">→</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
      )}
    </>
  );
}

/* ============ Project detail page ============ */
function ProjectPage({ project, c, lang, setLang, goToSection, goToTop, navigate }) {
  const detail = project.detail ? project.detail[lang] : null;
  /* True while this language is missing sections the English version has */
  const reference = project.detail ? project.detail.en : null;
  const isPartial =
    Boolean(detail) &&
    Boolean(reference) &&
    detail !== reference &&
    Object.keys(reference).some((key) => !(key in detail));

  return (
    <article className="project-page">
      <div className="inner">
        <Reveal>
          <a
            className="back-link"
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              navigate("#/");
            }}
          >
            ← {c.backToWork}
          </a>
          <p className="eyebrow">{localize(project.date, lang)}</p>
          <h1 className="project-title">{project.title[lang]}</h1>
          <p className="project-lead">{project.excerpt[lang]}</p>
          {detail && <p className="project-disclaimer">{detail.disclaimer}</p>}
        </Reveal>

        {detail ? (
          <>
            <CaseStudyBody d={detail} lang={lang} />
            {isPartial && (
              <Reveal delay={120}>
                <div className="empty-state case-partial">
                  <h3>{c.caseStudyPartial}</h3>
                  <button className="btn btn-primary" onClick={() => setLang("en")}>
                    {c.caseStudyReadEn}
                  </button>
                </div>
              </Reveal>
            )}
          </>
        ) : project.detail && project.detail.en ? (
          <Reveal delay={120}>
            <div className="empty-state">
              <h3>{c.caseStudyEnOnly}</h3>
              <button className="btn btn-primary" onClick={() => setLang("en")}>
                {c.caseStudyReadEn}
              </button>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={120}>
            <div className="empty-state">
              <h3>{c.caseStudyPending}</h3>
              <p>{c.caseStudyPendingSub}</p>
            </div>
          </Reveal>
        )}

        <Reveal delay={160}>
          <div className="project-footer-nav">
            <a
              className="btn btn-ghost"
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                navigate("#/");
              }}
            >
              ← {c.backToWork}
            </a>
            <button className="btn btn-ghost" onClick={goToTop}>↑ {c.backToTop}</button>
            <button className="btn btn-primary" onClick={() => goToSection("contact")}>
              {c.ctaSecondary}
            </button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

/* ============ Contact form ============ */
function ContactForm({ c }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [problem, setProblem] = useState("");

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (status === "error") setStatus("idle");
    setProblem("");
  };

  const submit = async () => {
    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    if (!name || !email || !message) {
      setProblem(c.formIncomplete);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setProblem(c.formBadEmail);
      return;
    }

    setProblem("");
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <p>{c.formSuccess}</p>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <div className="field-row">
        <label className="field">
          <span>{c.formName}</span>
          <input
            type="text"
            value={values.name}
            onChange={update("name")}
            autoComplete="name"
            required
          />
        </label>
        <label className="field">
          <span>{c.formEmail}</span>
          <input
            type="email"
            value={values.email}
            onChange={update("email")}
            autoComplete="email"
            required
          />
        </label>
      </div>
      <label className="field">
        <span>{c.formMessage}</span>
        <textarea rows="5" value={values.message} onChange={update("message")} required />
      </label>

      {(problem || status === "error") && (
        <p className="form-problem" role="alert">
          {problem || c.formError}
        </p>
      )}

      <button className="btn btn-primary" onClick={submit} disabled={status === "sending"}>
        {status === "sending" ? c.formSending : c.formSend}
      </button>
    </div>
  );
}

/* ============ Home page ============ */
function HomePage({ c, lang, goToSection, navigate }) {
  return (
    <>
      <header className="hero">
        <div className="monogram" aria-hidden="true">AT</div>
        <Reveal>
          <p className="eyebrow">{c.eyebrow}</p>
          <p className="hero-name">{c.name}</p>
          <h1>
            {lang === "en" ? (
              <>The most important system in any company isn't the software. <em>It's the people.</em></>
            ) : (
              <>Najvažniji sistem u svakoj kompaniji nije softver. <em>To su ljudi.</em></>
            )}
          </h1>
          <p className="hero-sub">{c.heroSub}</p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={() => goToSection("projects")}>{c.ctaPrimary}</button>
            <button className="btn btn-ghost" onClick={() => goToSection("contact")}>{c.ctaSecondary}</button>
          </div>
        </Reveal>
      </header>

      <CardSection
        id="projects"
        sectionClass="band home-section"
        title={c.projectsTitle}
        intro={c.projectsIntro}
        items={projects}
        lang={lang}
        linkLabel={c.viewProject}
        caseStudyLabel={c.viewCaseStudy}
        navigate={navigate}
        emptyTitle={c.projectsComingSoon}
        emptySub={c.projectsComingSoonSub}
      />

      <section className="home-section" id="offer">
        <div className="inner">
          <Reveal><h2 className="section-title">{c.offerTitle}</h2></Reveal>
          <Reveal delay={80}><p className="section-intro">{c.offerIntro}</p></Reveal>
          <div className="offer-grid">
            {c.offers.map((o, i) => (
              <Reveal key={o.name} delay={i * 90}>
                <div className="card">
                  <h3>{o.name}</h3>
                  <p>{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="story band home-section" id="story">
        <div className="inner">
          <Reveal><h2 className="section-title">{c.storyTitle}</h2></Reveal>
          <div className={PORTRAIT ? "story-grid has-portrait" : "story-grid"}>
            {PORTRAIT && (
              <Reveal className="story-portrait">
                <img src={PORTRAIT} alt={PORTRAIT_ALT[lang]} loading="lazy" />
              </Reveal>
            )}
            <div className={lang === "en" ? "story-text justified" : "story-text"}>
              {c.storyBody.map((p, i) => (
                <Reveal key={i} delay={120 + i * 120}><p>{p}</p></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {SHOW_BLOG && (
        <CardSection
          id="blog"
          sectionClass="home-section"
          title={c.blogTitle}
          intro={c.blogIntro}
          items={blogPosts}
          lang={lang}
          linkLabel={c.readMore}
          emptyTitle={c.blogComingSoon}
        />
      )}

      <section className="formula" id="formula">
        <div className="inner">
          <Reveal><h2 className="section-title">{c.formulaTitle}</h2></Reveal>
          <div className="formula-flow">
            <Reveal delay={0}>
              <span className="f-group">
                <span className="f-chip">{c.formulaA}</span>
                <span className="f-op">+</span>
                <span className="f-chip">{c.formulaB}</span>
              </span>
            </Reveal>
            <Reveal delay={350}><span className="f-op f-arrow">→</span></Reveal>
            <Reveal delay={500}><span className="f-chip">{c.formulaC}</span></Reveal>
            <Reveal delay={750}><span className="f-op f-arrow">→</span></Reveal>
            <Reveal delay={900}><span className="f-chip result">{c.formulaD}</span></Reveal>
          </div>
          <Reveal delay={1050}><p className="formula-note">{c.formulaNote}</p></Reveal>
        </div>
      </section>

      <section className="contact home-section" id="contact">
        <div className="inner">
          <Reveal>
            <h2>{c.contactTitle}</h2>
            <p className="contact-lead">{c.contactBody}</p>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm c={c} />
          </Reveal>
          <Reveal delay={200}>
            <p className="linkedin-note">
              {c.linkedinBefore}
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                {c.linkedinLink}
              </a>
              {c.linkedinAfter}
            </p>
          </Reveal>
        </div>
      </section>

    </>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState("en");
  const [hash, setHash] = useState(() =>
    typeof window === "undefined" ? "" : window.location.hash
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const c = t[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "sr" ? "sr-Latn" : "en";
  }, [lang]);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      setMenuOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const match = hash.match(/^#\/work\/(.+)$/);
  const project = match ? projects.find((p) => p.slug === match[1]) : null;
  const isProjectRoute = Boolean(match);

  /* Tracks which section is currently on screen, for the active menu item */
  useEffect(() => {
    const onScroll = () => {
      if (isProjectRoute) return;
      let current = "";
      NAV_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isProjectRoute]);

  /* Route changes are driven by state, with the address bar updated when the
     browser allows it. Sandboxed previews block hash writes, so state comes first. */
  const navigate = (target) => {
    const next = target === "#/" ? "" : target;
    setHash(next);
    setMenuOpen(false);
    window.scrollTo(0, 0);
    try {
      window.location.hash = target === "#/" ? "/" : target.replace(/^#/, "");
    } catch (err) {
      /* preview sandbox: state has already changed, nothing else to do */
    }
  };

  /* Scrolls so the section heading sits just under the fixed bar, rather than
     the padded top edge of the section. That keeps roughly 80px more of the
     actual content on screen. */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    /* A section that fills the screen is aligned by its own top edge, so its
       bottom does not fall below the fold. Shorter sections align by heading. */
    const fullHeight =
      section.classList.contains("formula") ||
      (section.classList.contains("home-section") &&
        section.getBoundingClientRect().height >= window.innerHeight - 80);
    const heading = fullHeight ? null : section.querySelector("h2");
    const anchor = heading || section;
    const barHeight = 56;
    const breathingRoom = fullHeight ? 0 : 28;
    const top =
      anchor.getBoundingClientRect().top + window.scrollY - barHeight - breathingRoom;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: Math.max(top, 0), behavior: reduced ? "auto" : "smooth" });
  };

  /* Menu links work from the project page too: go home first, then scroll */
  const goToSection = (id) => {
    setMenuOpen(false);
    if (isProjectRoute) {
      navigate("#/");
      setTimeout(() => scrollToSection(id), 90);
      return;
    }
    scrollToSection(id);
  };

  const goToTop = () => {
    if (isProjectRoute) {
      navigate("#/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Karla:wght@400;500;700&display=swap');

        :root {
          --bg: #F0EAE0;
          --surface: #F7F3EA;
          --ink: #2B241D;
          --muted: #6E635A;
          --accent: #5A6B4F;
          --line: #DCD3C4;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .site {
          background: var(--bg);
          color: var(--ink);
          font-family: 'Karla', sans-serif;
          font-size: 17px;
          line-height: 1.65;
          overflow-x: hidden;
        }
        h1, h2, h3 { font-family: 'Fraunces', serif; font-weight: 500; line-height: 1.15; }

        .reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.is-visible { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          html { scroll-behavior: auto; }
        }

        /* ---- Fixed top bar ---- */
        .topbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 60;
          background: rgba(240,234,224,.88);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }
        .topbar-inner {
          max-width: 1080px; margin: 0 auto; padding: 10px 24px;
          display: flex; align-items: center; gap: 14px;
        }
        .brand {
          font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600;
          letter-spacing: .04em; background: none; border: none; cursor: pointer;
          color: var(--ink); padding: 4px 2px; line-height: 1;
        }
        .brand:hover { color: var(--accent); }
        .nav-links {
          list-style: none; display: flex; align-items: center; gap: 2px;
          margin-left: auto;
        }
        .nav-link {
          font-family: 'Karla', sans-serif; font-size: 14px; font-weight: 500;
          background: none; border: none; cursor: pointer; color: var(--muted);
          padding: 7px 10px; border-radius: 999px; white-space: nowrap;
          transition: all .2s ease;
        }
        .nav-link:hover { color: var(--ink); background: rgba(43,36,29,.06); }
        .nav-link.is-active { color: var(--ink); font-weight: 700; }
        .topbar-right { display: flex; align-items: center; gap: 10px; margin-left: 8px; }

        .lang-toggle {
          display: flex; gap: 4px; padding: 3px;
          background: var(--surface); border: 1px solid var(--line); border-radius: 999px;
        }

        /* Hamburger, shown only on narrow screens */
        .burger {
          display: none; flex-direction: column; justify-content: center; gap: 5px;
          width: 40px; height: 36px; padding: 0 8px;
          background: none; border: none; cursor: pointer;
        }
        .burger span {
          display: block; height: 2px; width: 100%; background: var(--ink);
          border-radius: 2px; transition: transform .25s ease, opacity .2s ease;
        }
        .burger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .burger.is-open span:nth-child(2) { opacity: 0; }
        .burger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          display: none; flex-direction: column;
          border-top: 1px solid var(--line); background: var(--surface);
        }
        .mobile-link {
          font-family: 'Karla', sans-serif; font-size: 16px; font-weight: 500;
          text-align: left; padding: 14px 24px; background: none; border: none;
          border-bottom: 1px solid var(--line); color: var(--ink); cursor: pointer;
        }
        .mobile-link:last-child { border-bottom: none; }
        .mobile-link:hover { background: var(--bg); color: var(--accent); }

        @media (max-width: 1000px) {
          .nav-links { display: none; }
          .burger { display: flex; }
          .topbar-right { margin-left: auto; }
          .mobile-menu.is-open { display: flex; }
        }

        /* ---- Floating LinkedIn shortcut ---- */
        .floating-linkedin {
          position: fixed; left: 20px; bottom: 22px; z-index: 55;
          width: 46px; height: 46px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: var(--ink); color: var(--bg);
          box-shadow: 0 6px 18px rgba(43,36,29,.18);
          transition: background .25s ease, transform .25s ease;
        }
        .floating-linkedin:hover { background: var(--accent); transform: translateY(-2px); }
        .floating-linkedin svg { display: block; }
        .lang-toggle button {
          font-family: 'Karla', sans-serif; font-weight: 700; font-size: 13px;
          letter-spacing: .06em; padding: 6px 14px; border: none; border-radius: 999px;
          background: transparent; color: var(--muted); cursor: pointer; transition: all .25s ease;
        }
        .lang-toggle button.active { background: var(--ink); color: var(--bg); }
        .lang-toggle button:focus-visible,
        .nav-link:focus-visible,
        .mobile-link:focus-visible,
        .brand:focus-visible,
        .burger:focus-visible,
        .floating-linkedin:focus-visible,
        .card-link:focus-visible,
        .back-link:focus-visible,
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

        /* Hero */
        .hero {
          position: relative;
          min-height: calc(100vh - 56px);
          min-height: calc(100svh - 56px);
          display: flex; flex-direction: column; justify-content: center;
          padding: 84px 24px 56px; max-width: 1080px; margin: 0 auto;
        }
        .monogram {
          position: absolute; top: 50%; right: -4%;
          transform: translateY(-52%);
          font-family: 'Fraunces', serif; font-weight: 600;
          font-size: clamp(280px, 46vw, 620px);
          color: var(--ink); opacity: .05;
          user-select: none; pointer-events: none; line-height: 1;
        }
        .eyebrow {
          font-size: 13px; font-weight: 700; letter-spacing: .16em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 18px;
        }
        .hero h1 { font-size: clamp(34px, 5.4vw, 62px); max-width: 760px; margin-bottom: 22px; }
        .hero h1 em { font-style: italic; color: var(--accent); }
        .hero-sub { font-size: 19px; color: var(--muted); max-width: 540px; margin-bottom: 36px; }
        .hero-name { font-family: 'Fraunces', serif; font-size: 20px; margin-bottom: 6px; }
        .cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn {
          font-family: 'Karla', sans-serif; font-weight: 700; font-size: 15px;
          padding: 13px 26px; border-radius: 999px; cursor: pointer;
          border: 1.5px solid var(--ink); transition: all .25s ease;
          text-decoration: none; display: inline-block;
        }
        .btn-primary { background: var(--ink); color: var(--bg); }
        .btn-primary:hover { background: var(--accent); border-color: var(--accent); }
        .btn-ghost { background: transparent; color: var(--ink); }
        .btn-ghost:hover { background: var(--ink); color: var(--bg); }

        /* Sections */
        section { padding: 84px 24px; scroll-margin-top: 64px; }
        .inner { max-width: 1080px; margin: 0 auto; }
        .section-title { font-size: clamp(24px, 3vw, 34px); margin-bottom: 26px; }
        .section-title::after {
          content: ""; display: block; width: 48px; height: 3px;
          background: var(--accent); margin-top: 14px; border-radius: 2px;
        }
        .section-intro { color: var(--muted); margin-bottom: 24px; font-size: 17px; max-width: 680px; }
        .band { background: var(--surface); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }

        /* One section per screen, but only where there is room for it */
        @media (min-width: 900px) and (min-height: 470px) {
          .home-section {
            min-height: calc(100vh - 56px);
            min-height: calc(100svh - 56px);
            display: flex; align-items: center;
          }
          .home-section > .inner { width: 100%; }
        }

        /* Story */
        .story p { max-width: 680px; margin-bottom: 12px; font-size: 16.5px; line-height: 1.55; }
        .story p:last-child { margin-bottom: 0; }
        .story-grid { display: grid; grid-template-columns: 1fr; gap: 36px; align-items: start; }
        .story-portrait img {
          display: block; width: 100%; aspect-ratio: 4 / 5;
          object-fit: cover;
          /* Left of frame, so she sits toward the text; slightly high, so the
             face stays in view when the box is wider than it is tall */
          object-position: 38% 22%;
          border-radius: 20px; border: 1px solid var(--line);
          box-shadow: 0 14px 34px rgba(43,36,29,.10);
        }
        @media (min-width: 900px) {
          /* Photo left, text right, both columns the same height */
          .story-grid.has-portrait {
            grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr);
            gap: 56px; align-items: stretch;
          }
          .story-grid.has-portrait .story-text {
            /* Drops the first line so its cap height sits level with the photo */
            padding-top: 9px;
          }
          .story-grid.has-portrait .story-text p { max-width: 100%; }
          .story-grid.has-portrait .story-text.justified p {
            text-align: justify;
            hyphens: auto; -webkit-hyphens: auto;
          }
          .story-grid.has-portrait .story-portrait { display: flex; }
          .story-grid.has-portrait .story-portrait img {
            /* Follows the text column, but never grows past the screen, so the
               Serbian and English versions stay the same visual size */
            aspect-ratio: auto; height: 100%; min-height: 360px; max-height: 58vh;
          }
        }

        /* Cards */
        .offer-grid, .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 18px; }
        @media (min-width: 820px) { .offer-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; } }
        .card {
          background: var(--surface); border: 1px solid var(--line); border-radius: 16px;
          padding: 22px 21px; transition: transform .25s ease, box-shadow .25s ease; height: 100%;
        }
        .band .card { background: var(--bg); }
        .card:hover { transform: translateY(-4px); box-shadow: 0 10px 26px rgba(43,36,29,.08); }
        .card h3 { font-size: 19px; margin-bottom: 8px; }
        .card p { color: var(--muted); font-size: 15px; }
        .entry-card { min-height: 190px; display: flex; flex-direction: column; justify-content: space-between; }
        .card-link { text-decoration: none; color: inherit; }
        .card-link:hover .entry-link { text-decoration: underline; }
        .entry-date { font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: var(--accent); font-weight: 700; margin-bottom: 8px; }
        .entry-link-row { margin-top: 14px; }
        .entry-link { color: var(--accent); font-weight: 700; text-decoration: none; }
        .empty-state { border: 1.5px dashed var(--line); border-radius: 16px; padding: 46px 28px; text-align: center; max-width: 680px; }
        .empty-state h3 { font-size: 21px; margin-bottom: 8px; }
        .empty-state .btn { margin-top: 14px; }
        .empty-state p { color: var(--muted); }

        /* ---- Formula (signature section) ---- */
        .formula {
          background: var(--ink); color: var(--bg); text-align: center;
          min-height: calc(100vh - 56px);
          min-height: calc(100svh - 56px);
          display: flex; align-items: center;
        }
        .formula .inner { width: 100%; }
        .formula .section-title { color: var(--bg); }
        .formula .section-title::after { margin-left: auto; margin-right: auto; }
        .formula-flow {
          display: flex; flex-wrap: nowrap; align-items: center; justify-content: center;
          gap: clamp(9px, 1.2vw, 16px);
          font-family: 'Fraunces', serif;
          font-size: clamp(13px, 1.55vw, 23px);
          margin: 10px 0 34px;
        }
        .formula-flow > .reveal { display: flex; align-items: center; justify-content: center; }
        .f-group { display: flex; align-items: center; gap: clamp(8px, 1vw, 13px); }
        .f-chip {
          padding: .55em 1.05em; border-radius: 999px; white-space: nowrap;
          border: 1.5px solid rgba(240,234,224,.35);
        }
        .f-chip.result { background: var(--accent); border-color: var(--accent); }
        .f-op { font-family: 'Karla', sans-serif; opacity: .7; line-height: 1; display: inline-block; }
        .formula-note {
          font-family: 'Fraunces', serif; font-style: italic; font-weight: 400;
          /* Lightened accent: same colour family, readable on the dark band */
          color: #B7C3A8;
          font-size: clamp(17px, 2vw, 20px); line-height: 1.45;
          max-width: 520px; margin: 6px auto 0;
        }

        @media (max-width: 900px) {
          .formula-flow {
            flex-direction: column; align-items: center; justify-content: center;
            gap: 20px; font-size: clamp(17px, 4.4vw, 24px); text-align: center;
          }
          .f-arrow { transform: rotate(90deg); }
          .f-chip { white-space: normal; }
        }

        /* ---- Project detail page ---- */
        .project-page { padding: 92px 24px 84px; }
        .back-link {
          display: inline-block; margin-bottom: 30px; font-size: 15px; font-weight: 700;
          color: var(--muted); text-decoration: none; transition: color .25s ease;
        }
        .back-link:hover { color: var(--accent); }
        .project-title { font-size: clamp(28px, 4.2vw, 50px); max-width: 880px; margin-bottom: 22px; }
        .project-lead { font-size: 19px; color: var(--muted); max-width: 680px; margin-bottom: 18px; }
        .project-disclaimer {
          font-size: 15px; font-style: italic; color: var(--muted);
          max-width: 680px; padding-left: 16px; border-left: 3px solid var(--line);
          margin-bottom: 0;
        }
        .project-footer-nav {
          margin-top: 52px; padding-top: 28px; border-top: 1px solid var(--line);
          display: flex; flex-wrap: wrap; gap: 12px;
        }
        @media (max-width: 700px) {
          .project-footer-nav { justify-content: center; }
          .project-footer-nav .btn { flex: 1 1 100%; text-align: center; }
        }
        .project-footer-nav .btn { font-size: 14.5px; padding: 11px 22px; }

        /* ---- Case study ---- */
        .case-section { padding: 0; margin-top: 44px; }
        .case-section:first-of-type { margin-top: 40px; }
        .case-section h2 {
          font-size: clamp(22px, 2.7vw, 30px); margin-bottom: 16px;
        }
        .case-section > .reveal > p, .case-section > .reveal > h2 + p { max-width: 680px; }
        .case-section p { max-width: 680px; margin-bottom: 14px; font-size: 17px; }
        .case-list { list-style: none; max-width: 680px; margin: 4px 0 0; }
        .case-list li { position: relative; padding: 6px 0 6px 22px; font-size: 17px; }
        .case-list li::before {
          content: ""; position: absolute; left: 2px; top: 15px;
          width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
        }

        .callout {
          margin-top: 28px; padding: 26px 28px; border-radius: 18px;
          background: rgba(90,107,79,.08); border: 1px solid rgba(90,107,79,.28);
        }
        .callout-label {
          font-size: 12.5px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 10px;
        }
        .callout-text {
          font-family: 'Fraunces', serif; font-size: clamp(18px, 2.1vw, 22px);
          line-height: 1.4; color: var(--ink); margin: 0; max-width: 820px;
        }

        .contribution-list {
          list-style: none; display: grid; gap: 10px 20px;
          grid-template-columns: 1fr; margin: 6px 0 22px;
        }
        .contribution-list li {
          position: relative; padding: 10px 14px 10px 34px; font-size: 16.5px;
          background: var(--surface); border: 1px solid var(--line); border-radius: 12px;
        }
        .contribution-list li::before {
          content: ""; position: absolute; left: 15px; top: 20px;
          width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
        }
        @media (min-width: 820px) { .contribution-list { grid-template-columns: 1fr 1fr; } }

        .process-flow {
          display: flex; flex-wrap: wrap; align-items: center;
          gap: 8px; margin: 0 0 26px;
        }
        @media (max-width: 700px) {
          .process-flow { justify-content: center; text-align: center; }
        }
        .flow-item { display: inline-flex; align-items: center; gap: 8px; }
        .flow-chip {
          font-family: 'Fraunces', serif; font-size: 15px;
          padding: 7px 14px; border-radius: 999px;
          border: 1.5px solid rgba(90,107,79,.35); color: var(--ink);
          white-space: nowrap;
        }
        .flow-item:last-child .flow-chip {
          background: var(--accent); border-color: var(--accent); color: var(--bg);
        }
        .flow-arrow { color: var(--accent); opacity: .55; font-size: 14px; }

        .case-partial { margin-top: 46px; }
        .measures-note {
          margin-top: 26px; max-width: 680px;
          font-size: 15.5px; font-style: italic; color: var(--muted);
          padding-left: 16px; border-left: 3px solid var(--line);
        }

        .process-visual { margin: 0 0 26px; }
        .process-visual img {
          display: block; width: 100%; height: auto; border-radius: 18px;
          border: 1px solid var(--line);
        }
        .process-steps {
          list-style: none; display: grid; gap: 16px; margin: 6px 0 0;
          grid-template-columns: 1fr;
        }
        .process-card { position: relative; padding: 24px 22px; }
        .process-card h3 { font-size: 18px; margin: 10px 0 8px; }
        .process-card p { font-size: 15.5px; color: var(--muted); margin: 0; }
        .process-number {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--accent); color: var(--bg);
          font-size: 14px; font-weight: 700;
        }
        @media (min-width: 900px) {
          .process-steps { grid-template-columns: repeat(5, 1fr); gap: 14px; }
          .process-steps > .reveal { position: relative; }
          .process-steps > .reveal:not(:last-child)::after {
            content: "→"; position: absolute; top: 50%; right: -13px;
            transform: translateY(-50%); color: var(--accent); opacity: .55;
            font-size: 15px; line-height: 1; pointer-events: none;
          }
          .process-card { height: 100%; }
        }

        .measure-title {
          font-size: clamp(19px, 2.3vw, 24px); margin-bottom: 18px;
          display: flex; flex-wrap: wrap; align-items: center; gap: 12px;
        }
        .future-badge {
          font-family: 'Karla', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: .08em; text-transform: uppercase;
          color: var(--accent); background: rgba(90,107,79,.12);
          border: 1px solid rgba(90,107,79,.3);
          padding: 5px 12px; border-radius: 999px; white-space: nowrap;
        }
        .measure-flow { display: grid; grid-template-columns: 1fr; gap: 14px; align-items: stretch; }
        .measure-flow > .reveal { display: flex; }
        .measure-card { display: flex; flex-direction: column; width: 100%; }
        .measure-card h4 {
          font-family: 'Karla', sans-serif; font-size: 12.5px; font-weight: 700;
          letter-spacing: .14em; text-transform: uppercase; color: var(--accent);
          margin-bottom: 12px;
        }
        .measure-card p { font-size: 15.5px; color: var(--muted); margin-bottom: 10px; max-width: 100%; }
        .measure-card p:last-child { margin-bottom: 0; }
        .measure-card ul { list-style: none; margin: 0; }
        .measure-card li {
          position: relative; padding: 5px 0 5px 18px;
          font-size: 15.5px; color: var(--muted);
        }
        .measure-card li::before {
          content: ""; position: absolute; left: 2px; top: 13px;
          width: 5px; height: 5px; border-radius: 50%; background: var(--accent);
        }
        .measure-card.is-impact {
          background: rgba(90,107,79,.09); border-color: rgba(90,107,79,.32);
        }
        .measure-card.is-impact li { color: var(--ink); }
        .measure-arrow {
          display: flex; align-items: center; justify-content: center;
          color: var(--accent); opacity: .6; font-size: 20px;
          transform: rotate(90deg); width: 100%;
        }
        .measure-flow > .reveal:hover .measure-card { border-color: rgba(90,107,79,.45); }
        @media (min-width: 900px) {
          .measure-flow { grid-template-columns: 1fr auto 1fr auto 1fr; gap: 10px; }
          .measure-arrow { transform: none; }
        }

        .outcome-line {
          margin-top: 30px; display: flex; flex-wrap: wrap;
          align-items: center; gap: 10px;
        }
        .outcome-item { display: inline-flex; align-items: center; gap: 10px; }
        .outcome-chip {
          font-family: 'Fraunces', serif; font-size: clamp(15px, 1.7vw, 18px);
          padding: 10px 18px; border-radius: 999px;
          border: 1.5px solid rgba(90,107,79,.35); color: var(--ink);
        }
        .outcome-item:last-child .outcome-chip {
          background: var(--accent); border-color: var(--accent); color: var(--bg);
        }
        .outcome-arrow { color: var(--accent); opacity: .6; }
        @media (max-width: 700px) {
          .outcome-line {
            flex-direction: column; align-items: center;
            gap: 12px; text-align: center;
          }
          .outcome-item { flex-direction: column; gap: 12px; }
          .outcome-arrow { transform: rotate(90deg); }
        }

        /* Contact */
        .contact { text-align: center; padding: 54px 24px; }
        .contact h2 { font-size: clamp(25px, 3.1vw, 35px); margin-bottom: 12px; }
        .contact-lead { color: var(--muted); font-size: 17px; max-width: 660px; margin: 0 auto 20px; }

        .contact-form { max-width: 760px; margin: 0 auto; text-align: left; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .field { display: block; margin-bottom: 12px; }
        .field span {
          display: block; font-size: 13px; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; color: var(--muted); margin-bottom: 5px;
        }
        .field input, .field textarea {
          width: 100%; font-family: 'Karla', sans-serif; font-size: 16px; color: var(--ink);
          background: var(--surface); border: 1px solid var(--line); border-radius: 12px;
          padding: 11px 13px; transition: border-color .2s ease, box-shadow .2s ease;
        }
        .band .field input, .band .field textarea { background: var(--bg); }
        .field textarea { resize: vertical; min-height: 88px; line-height: 1.5; }
        .field input:focus, .field textarea:focus {
          outline: none; border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(90,107,79,.15);
        }
        .contact-form .btn { display: block; width: 100%; margin-top: 2px; padding: 12px 26px; text-align: center; }
        .contact-form .btn:disabled { opacity: .6; cursor: default; }
        .form-problem { color: #8C3B2E; font-size: 15px; margin: 4px 0 12px; }
        .form-success {
          max-width: 760px; margin: 0 auto;
          border: 1.5px solid var(--accent); border-radius: 16px;
          padding: 34px 28px; background: rgba(90,107,79,.07);
        }
        .form-success p { color: var(--ink); font-size: 18px; margin: 0; }
        .linkedin-note {
          color: var(--muted); font-size: 15.5px;
          max-width: 760px; margin: 16px auto 0;
          padding-top: 14px; border-top: 1px solid var(--line);
        }
        .linkedin-note a {
          color: var(--accent); font-weight: 700;
          text-decoration: underline; text-underline-offset: 3px;
        }
        .linkedin-note a:hover { color: var(--ink); }

        @media (max-width: 560px) {
          .field-row { grid-template-columns: 1fr; gap: 0; }
        }

        footer {
          text-align: center; padding: 26px; font-size: 14px;
          color: var(--muted); border-top: 1px solid var(--line);
        }

        /* Laptops with short screens: trim the vertical padding so more of each
           section fits above the fold */
        @media (min-width: 641px) and (max-height: 820px) {
          section { padding: 60px 24px; }
          .hero { padding: 86px 24px 56px; }
        }

        /* Very short windows, around 550px of usable height */
        @media (min-width: 641px) and (max-height: 620px) {
          .hero { padding: 66px 24px 32px; }
          .hero h1 { font-size: clamp(26px, 3.1vw, 36px); margin-bottom: 14px; }
          .hero-sub { font-size: 16px; margin-bottom: 20px; }
          .hero .btn { padding: 10px 22px; font-size: 14px; }
          section { padding: 34px 24px; }
          .section-title { font-size: clamp(21px, 2.4vw, 26px); margin-bottom: 14px; }
          .section-title::after { margin-top: 10px; }
          .section-intro { font-size: 15.5px; margin-bottom: 14px; }
          .offer-grid, .card-grid { gap: 12px; }
          .card { padding: 15px 16px; }
          .card p { font-size: 14px; }
          .entry-card { min-height: 0; }
          .story p { font-size: 15px; line-height: 1.5; margin-bottom: 8px; }
          .story-grid { gap: 26px; }
          .story-grid.has-portrait .story-portrait img {
            min-height: 220px; max-height: 44vh; object-position: 38% 18%;
          }
          .formula-flow { margin: 6px 0 18px; }
          .formula-note { font-size: 16px; }
          .contact { padding: 30px 24px; }
          .contact h2 { font-size: clamp(22px, 2.6vw, 28px); margin-bottom: 10px; }
          .contact-lead { font-size: 15.5px; margin-bottom: 14px; }
          .field { margin-bottom: 9px; }
          .field span { font-size: 12px; margin-bottom: 4px; }
          .field input, .field textarea { padding: 9px 12px; font-size: 15px; }
          .field textarea { min-height: 62px; }
          .contact-form .btn { padding: 10px 24px; }
          .linkedin-note { margin-top: 10px; padding-top: 10px; font-size: 14.5px; }
          footer { padding: 16px; font-size: 13px; }
        }

        /* Short windows: scale the type down so a whole section still fits */
        @media (min-width: 641px) and (max-height: 720px) and (min-height: 621px) {
          .hero { padding: 74px 24px 40px; }
          .hero h1 { font-size: clamp(28px, 3.6vw, 42px); margin-bottom: 16px; }
          .hero-sub { font-size: 17px; margin-bottom: 26px; }
          .hero-name { font-size: 18px; }
          .eyebrow { margin-bottom: 14px; }
          section { padding: 44px 24px; }
          .section-title { font-size: clamp(22px, 2.6vw, 28px); margin-bottom: 18px; }
          .section-intro { font-size: 16px; margin-bottom: 18px; }
          .card { padding: 18px 18px; }
          .card h3 { font-size: 17.5px; }
          .card p { font-size: 14.5px; }
          .story p { font-size: 15.5px; margin-bottom: 10px; }
          .contact { padding: 40px 24px; }
          .contact-lead { font-size: 16px; margin-bottom: 16px; }
          .field { margin-bottom: 10px; }
          .field textarea { min-height: 74px; }
          .linkedin-note { margin-top: 12px; padding-top: 12px; font-size: 15px; }
        }

        @media (max-width: 640px) {
          .hero { min-height: 86vh; padding-top: 80px; }
          .monogram { right: -18%; opacity: .045; }
          section { padding: 64px 20px; }
          .project-page { padding: 80px 20px 64px; }
        }
      `}</style>

      <nav className="topbar" aria-label="Main">
        <div className="topbar-inner">
          <button className="brand" onClick={goToTop} aria-label={c.backToTop}>AT</button>

          <ul className="nav-links">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <button
                  className={active === id ? "nav-link is-active" : "nav-link"}
                  onClick={() => goToSection(id)}
                >
                  {c.nav[id]}
                </button>
              </li>
            ))}
          </ul>

          <div className="topbar-right">
            <div className="lang-toggle" role="group" aria-label="Language">
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
              <button className={lang === "sr" ? "active" : ""} onClick={() => setLang("sr")}>SR</button>
            </div>
            <button
              className={menuOpen ? "burger is-open" : "burger"}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? c.closeMenu : c.openMenu}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        <div className={menuOpen ? "mobile-menu is-open" : "mobile-menu"}>
          {NAV_IDS.map((id) => (
            <button key={id} className="mobile-link" onClick={() => goToSection(id)}>
              {c.nav[id]}
            </button>
          ))}
        </div>
      </nav>

      {isProjectRoute ? (
        project ? (
          <ProjectPage
            project={project}
            c={c}
            lang={lang}
            setLang={setLang}
            goToSection={goToSection}
            goToTop={goToTop}
            navigate={navigate}
          />
        ) : (
          <article className="project-page">
            <div className="inner">
              <a
            className="back-link"
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              navigate("#/");
            }}
          >
            ← {c.backToWork}
          </a>
              <h1 className="project-title">{c.notFound}</h1>
            </div>
          </article>
        )
      ) : (
        <HomePage c={c} lang={lang} goToSection={goToSection} navigate={navigate} />
      )}

      <a
        className="floating-linkedin"
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={c.linkedinLink}
        title={c.linkedinLink}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8h4.5V23H.25V8zm7.5 0h4.31v2.05h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.96V23h-4.5V8z" />
        </svg>
      </a>

      <footer>
        <span>{c.footer}</span>
      </footer>
    </div>
  );
}
