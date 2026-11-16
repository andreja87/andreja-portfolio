/* =========================================================
   SEO — what Google and social networks see for each page
   ---------------------------------------------------------
   Every page listed here is built as its own HTML file, with the
   full text already inside, so Google can read it without running
   JavaScript. The sitemap is made from this list too.

   To add a page: add one entry below. Keep titles under ~60
   characters and descriptions under ~155, or Google cuts them.
   ========================================================= */

export const SITE_URL = "https://andrejatrajkovic.com";
export const SITE_NAME = "Andreja Trajković";
export const LINKEDIN_URL = "https://www.linkedin.com/in/andreja-trajkovic";
export const EMAIL = "andrejatrajkovic999@gmail.com";

const PERSON_ID = `${SITE_URL}/#andreja`;

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Andreja Trajković",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/portrait.jpg`,
  jobTitle: "Konsultantkinja za razvoj zaposlenih i coach",
  email: `mailto:${EMAIL}`,
  sameAs: [LINKEDIN_URL],
  knowsAbout: [
    "Razvoj zaposlenih",
    "Edukacija zaposlenih",
    "Learning and Development",
    "Emocionalna inteligencija",
    "Zdrava radna okruženja",
    "Individualni coaching",
    "Coaching za kompanije",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Training for Professional Mentors",
    credentialCategory: "certificate",
    recognizedBy: {
      "@type": "Organization",
      name: "International Centre for Coaching and Mentoring",
    },
  },
  address: { "@type": "PostalAddress", addressCountry: "RS" },
};

const serbia = { "@type": "Country", name: "Srbija" };

/* Breadcrumb trail shown by Google under the page title */
const crumbs = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE_URL}${path}`,
  })),
});

export const routes = [
  {
    path: "/",
    title: "Razvoj zaposlenih i coaching | Andreja Trajković",
    description:
      "Edukacija i razvoj zaposlenih, coaching za kompanije i pojedince i zdrava radna okruženja zasnovana na poštovanju i otvorenoj komunikaciji. Srbija i online.",
    image: "/share.jpg",
    imageAlt: "Andreja Trajković — razvoj zaposlenih i zdrava radna okruženja",
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        person,
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
          inLanguage: "sr-Latn",
          publisher: { "@id": PERSON_ID },
        },
      ],
    },
  },
  {
    path: "/coaching/kompanije/",
    title: "Coaching za zaposlene i menadžere | Andreja Trajković",
    description:
      "Individualni coaching zaposlenih i menadžera: komunikacija, feedback, organizacija vremena i proaktivnost. Za kompanije u Srbiji, online. Pošaljite upit.",
    image: "/share.jpg",
    imageAlt: "Coaching za kompanije — Andreja Trajković",
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        person,
        {
          "@type": "Service",
          name: "Coaching za kompanije",
          serviceType: "Individualni coaching zaposlenih i menadžera",
          url: `${SITE_URL}/coaching/kompanije/`,
          provider: { "@id": PERSON_ID },
          areaServed: serbia,
          audience: { "@type": "BusinessAudience", name: "Kompanije" },
          inLanguage: "sr-Latn",
        },
        crumbs([
          ["Početna", "/"],
          ["Coaching za kompanije", "/coaching/kompanije/"],
        ]),
      ],
    },
  },
  {
    /* Prices here must match the FAQ on the page (COACHING_INDIVIDUALS). */
    path: "/coaching/pojedinci/",
    title: "Individualni coaching online | Andreja Trajković",
    description:
      "Online coaching za lične i profesionalne ciljeve. Besplatan uvodni razgovor, sesija od 60 minuta 3.000 dinara, paket od pet sesija 13.500 dinara.",
    image: "/share.jpg",
    imageAlt: "Individualni coaching sa Andrejom Trajković",
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        person,
        {
          "@type": "Service",
          name: "Individualni coaching",
          serviceType: "Individualni coaching",
          url: `${SITE_URL}/coaching/pojedinci/`,
          provider: { "@id": PERSON_ID },
          areaServed: serbia,
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${SITE_URL}/coaching/pojedinci/`,
            name: "Online",
          },
          inLanguage: "sr-Latn",
          offers: [
            { "@type": "Offer", name: "Uvodni razgovor (30 do 60 minuta)", price: "0", priceCurrency: "RSD" },
            { "@type": "Offer", name: "Coaching sesija od 60 minuta", price: "3000", priceCurrency: "RSD" },
            { "@type": "Offer", name: "Paket od pet sesija", price: "13500", priceCurrency: "RSD" },
          ],
        },
        crumbs([
          ["Početna", "/"],
          ["Coaching za pojedince", "/coaching/pojedinci/"],
        ]),
      ],
    },
  },
  {
    /* When the pro bono round is full (COACHING_OPEN = false in
       Portfolio.jsx), change the description to mention the waiting list. */
    path: "/coaching/pro-bono/",
    title: "Pro bono coaching online | Andreja Trajković",
    description:
      "Pro bono program individualnog coachinga za 10 osoba: pet online sesija od 60 minuta i besplatan uvodni razgovor, bez novčane naknade.",
    image: "/share.jpg",
    imageAlt: "Pro bono individualni coaching sa Andrejom Trajković",
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        person,
        {
          "@type": "Service",
          name: "Pro bono individualni coaching",
          serviceType: "Individualni coaching",
          url: `${SITE_URL}/coaching/pro-bono/`,
          provider: { "@id": PERSON_ID },
          areaServed: serbia,
          inLanguage: "sr-Latn",
          offers: { "@type": "Offer", price: "0", priceCurrency: "RSD" },
        },
        crumbs([
          ["Početna", "/"],
          ["Pro bono coaching", "/coaching/pro-bono/"],
        ]),
      ],
    },
  },
  {
    path: "/work/future-forward/",
    title: "Studija slučaja: razvoj zaposlenih | Andreja Trajković",
    description:
      "Akademska L&D studija slučaja: jednostavan okvir za razvoj zaposlenih, očuvanje znanja i jačanje kadrovskih kapaciteta u malom IT timu, uz podršku AI alata.",
    image: "/share-future-forward.jpg",
    imageAlt:
      "Akademska L&D studija slučaja, 2026: Jačanje kadrovskih kapaciteta kroz edukaciju i razvoj zaposlenih",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: "Jačanje kadrovskih kapaciteta kroz edukaciju i razvoj zaposlenih",
          url: `${SITE_URL}/work/future-forward/`,
          image: `${SITE_URL}/share-future-forward.jpg`,
          author: person,
          inLanguage: "sr-Latn",
        },
        crumbs([
          ["Početna", "/"],
          ["Studija slučaja", "/work/future-forward/"],
        ]),
      ],
    },
  },
];
