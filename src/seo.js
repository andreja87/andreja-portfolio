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

const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#andreja`,
  name: "Andreja Trajković",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/portrait.jpg`,
  jobTitle: "Konsultantkinja za razvoj zaposlenih (People Development i L&D)",
  email: `mailto:${EMAIL}`,
  sameAs: [LINKEDIN_URL],
  knowsAbout: [
    "Razvoj zaposlenih",
    "Edukacija zaposlenih",
    "Learning and Development",
    "Emocionalna inteligencija",
    "Zdrava radna okruženja",
    "Coaching",
  ],
  address: { "@type": "PostalAddress", addressCountry: "RS" },
};

export const routes = [
  {
    path: "/",
    title: "Razvoj i edukacija zaposlenih | Andreja Trajković",
    description:
      "Pomažem kompanijama u Srbiji da razvijaju zaposlene kroz edukaciju, emocionalnu inteligenciju i zdrava radna okruženja. Saznaj kako mogu da doprinesem.",
    image: "/share.jpg",
    imageAlt: "Andreja Trajković — razvoj zaposlenih i zdrava radna okruženja",
    type: "website",
    priority: "1.0",
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
          publisher: { "@id": `${SITE_URL}/#andreja` },
        },
      ],
    },
  },
  {
    /* While the pro bono round is full (COACHING_OPEN = false in
       Portfolio.jsx), change the description to mention the waiting list. */
    path: "/coaching/",
    title: "Individualni coaching online, pro bono | Andreja Trajković",
    description:
      "Online individualni coaching u okviru pro bono programa za 10 klijenata. Istražujemo šta ti je važno i definišemo konkretne korake ka tvom cilju.",
    image: "/share.jpg",
    imageAlt: "Individualni coaching sa Andrejom Trajković",
    type: "website",
    priority: "0.9",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        person,
        {
          "@type": "Service",
          name: "Individualni coaching",
          serviceType: "Individualni coaching",
          url: `${SITE_URL}/coaching/`,
          provider: { "@id": `${SITE_URL}/#andreja` },
          areaServed: { "@type": "Country", name: "Srbija" },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${SITE_URL}/coaching/`,
            name: "Online",
          },
          inLanguage: "sr-Latn",
        },
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
    priority: "0.7",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Jačanje kadrovskih kapaciteta kroz edukaciju i razvoj zaposlenih",
      url: `${SITE_URL}/work/future-forward/`,
      image: `${SITE_URL}/share-future-forward.jpg`,
      author: person,
      inLanguage: "sr-Latn",
    },
  },
];
