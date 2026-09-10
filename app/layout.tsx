import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Heaven Taste Bar",
    template: "%s | Heaven Taste Bar",
  },

  description:
    "Mobilny bar koktajlowy na wesela, eventy i wyjątkowe przyjęcia.",

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Heaven Taste & Events",
  "image": "https://heaventastebar.pl/wp-content/uploads/2026/08/logo-taste.svg",
  "@id": "https://heaventastebar.pl/",
  "url": "https://heaventastebar.pl/",
  "description": "Heaven Taste & Events",
  "disambiguatingDescription": "Heaven Taste Events to profesjonalny mobilny bar, który wnosi niepowtarzalny klimat na każde przyjęcie. Specjalizujemy się w usługach barmańskich na wesela, oferując pełen zakres napojów przygotowywanych na miejscu przez doświadczonych barmanów. Nasz mobilny bar na wesele to idealne rozwiązanie, gdy chcesz zaskoczyć gości różnorodnymi, wykwintnymi koktajlami oraz wyjątkową obsługą. Dbamy o najwyższą jakość i estetykę, dostosowując ofertę do indywidualnych potrzeb klienta. Barman na wesele zadba o profesjonalne przygotowanie drinków i sprawną obsługę gości, tworząc wyjątkową atmosferę podczas całego wydarzenia. Wybierz nasza usługę i spraw, by Twoje wydarzenie było niezwykłe. Skontaktuj się z nami i zamów usługę barmańską już dziś!",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gdańsk",
    "addressRegion": "Województwo pomorskie",
    "postalCode": "80-454",
    "streetAddress": "Nad Stawem 7",
    "addressCountry": "PL",
    "telephone": "+48669201223"
  },
  "makesOffer": [
    "bar mobilny Gdańsk",
    "barman na wesele Gdańsk",
    "mobilny barman Gdańsk",
    "mobilny bar na wesele Gdańsk",
    "usługa barmańska Gdańsk"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    }
  ],
  "sameAs": [
    "https://maps.app.goo.gl/jgfM8Wy5jEc4FeDr7",
    "https://share.google/sGU1y1ddpnu0jSeoL",
    "https://www.instagram.com/heaventastebar/",
    "https://www.facebook.com/heaventastebar",
    "https://www.youtube.com/@heaventastebar",
    "https://www.tiktok.com/@.heaventastebar",
    "https://www.weselezklasa.pl/ogloszenia-weselne/heaven-taste-mobilne-uslugi-barmanskie,45810/",
    "https://www.krs-online.com.pl/firma/9744300-heaven-taste-events-blazej-wiczkowski",
    "https://www.gdziewesele.pl/barman-na-wesele/heaven-taste-bar-uslugi-barmanskie",
    "https://www.planujemywesele.pl/56589-heaven-taste-bar",
    "http://zlotafirma.pl/company/heaven-taste-bar-barman-bar-mobilny-wesela-eventy-firmowe-imprezy-okolicznosciowe-szkolenia-5818383",
    "https://wedding.pl/barman-na-wesele/heaven-taste"
  ]
}`}
        </script>
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}

