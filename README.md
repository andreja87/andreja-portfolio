# Andreja — Portfolio

Dvojezični (EN/SR) portfolio sajt. React + Vite.

## Struktura

```
index.html            ulazna stranica
vite.config.js        podešavanja
package.json          spisak biblioteka
src/main.jsx          pokreće aplikaciju
src/Portfolio.jsx     CEO SADRŽAJ — ovde se menja tekst
```

Praktično sve što ćeš ikada dirati nalazi se u `src/Portfolio.jsx`.

## Kako se menja tekst

Na vrhu fajla je objekat `t` sa dva dela: `en` i `sr`. Nađi rečenicu koju
želiš da promeniš, promeni je, i to je sve. Struktura mora ostati ista u
oba jezika.

## Kako se dodaje projekat ili blog tekst

Ispod prevoda su dva niza: `projects` i `blogPosts`. Rade na isti način.

Svaki projekat ima `slug`, koji postaje adresa njegove stranice
(`#/work/future-forward`). Klik na karticu otvara tu stranicu. Ako dodaš
`caseStudy: true`, dugme samo promeni natpis u "Pogledaj studiju slučaja".

Sadržaj stranice projekta piše se u `detail.sections`. Dok je taj niz
prazan, stranica prikazuje kratku napomenu da je studija slučaja u
pripremi. Primer popunjene sekcije:

```js
detail: {
  sections: [
    {
      heading: { en: "Context", sr: "Kontekst" },
      body: {
        en: ["First paragraph.", "Second paragraph."],
        sr: ["Prvi pasus.", "Drugi pasus."],
      },
    },
  ],
}
```

Za blog tekst dodaj jedan objekat u `blogPosts`:

```js
const blogPosts = [
  {
    date: "2026-09-15",
    title: {
      en: "Why respect scales better than perks",
      sr: "Zašto se poštovanje isplati više od benefita",
    },
    excerpt: {
      en: "Short intro that appears on the card.",
      sr: "Kratak uvod koji se vidi na kartici.",
    },
    url: "https://linkedin.com/pulse/...", // opciono
  },
];
```

Čim niz nije prazan, "uskoro" stanje nestaje i kartice se same pojave.

## Fotografija u sekciji "Moja priča"

Napravi folder `public` pored `src` i ubaci sliku u njega, na primer
`public/portrait.jpg`. Zatim u `src/Portfolio.jsx` nađi `PORTRAIT` i upiši
putanju:

```js
const PORTRAIT = "/portrait.jpg";
```

Sekcija se sama prebacuje u dve kolone na ekranima širim od 900 piksela,
a na telefonu slika ide ispod teksta. Dok je `PORTRAIT` prazno, sve
izgleda kao i do sada.

Preporuka za sliku: vertikalni kadar, odnos stranica oko 4:5, širina
najmanje 900 piksela, veličina fajla ispod 400 KB.

## Kontakt forma (obavezan korak)

Statični sajt ne može sam da pošalje mejl. Forma zato šalje poruku preko
besplatnog servisa. Postupak traje pet minuta:

1. Otvori formspree.io i napravi besplatan nalog.
2. Napravi novu formu i za primaoca upiši svoju adresu.
3. Kopiraj endpoint koji ti daju, izgleda kao
   `https://formspree.io/f/xxxxxxx`.
4. U `src/Portfolio.jsx` nađi `FORM_ENDPOINT` i nalepi ga:

```js
const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxx";
```

Dok je `FORM_ENDPOINT` prazan, forma se prikazuje ali slanje ne uspeva i
posetiocu se ispisuje poruka o grešci. Ne objavljuj sajt pre nego što
uneseš endpoint.

Alternativa je web3forms.com, radi na isti način.

## Blog sekcija

Sekcija je napisana, ali privremeno sakrivena. Kada objaviš prvi tekst,
u `src/Portfolio.jsx` postavi:

```js
const SHOW_BLOG = true;
```

Sekcija se sama vraća na svoje mesto, između "Moja priča" i "Formula", i
stavka se sama pojavljuje u meniju.

## Kontakt podaci

U `src/Portfolio.jsx`, odmah ispod nizova, stoje `LINKEDIN_URL` i `EMAIL`.
Mejl je već postavljen. LinkedIn link zameni svojim profilom.

## Objavljivanje (Cloudflare Pages, besplatno)

1. Ubaci ove fajlove u GitHub repozitorijum.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Izaberi repozitorijum.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Save and Deploy.

Cloudflare sam instalira sve što treba i napravi sajt. Svaki put kad
promeniš tekst na GitHub-u, sajt se osveži za minut-dva.

Isto radi i na Netlify-u, sa istim build komandama.

## Lokalni rad (opciono)

Ako ikada poželiš da vidiš izmene pre objavljivanja:

```
npm install
npm run dev
```
