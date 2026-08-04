import { Metadata } from "next";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Social from "@/components/Social";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

const GRAPHQL_URL = "http://heaventastebar.pl/graphql";

const QUERY_HOME = `
query HomePage {
  page(id: "strona-glowna", idType: URI) {
    title

    seo {
      title
      description
      focusKeywords
      canonicalUrl
      openGraph {
        title
        description
      }
    }

    sekcjaHero {
      slides {
        imageHero {
          node {
            sourceUrl
          }
        }
        krotkiNaglowek
        naglowek
        description
      }

      stats {
        opis
        wartosc
      }
    }

    sekcjaOMnie {
      naglowekGlowny
      opis
      cytat
      benefity {
        tekst
      }
      wideo {
        node {
          sourceUrl
        }
      }
    }

    sekcjaUslugi {
      naglowek
      opis
      listServices {
        tytul
        opis
      }
    }

    sekcjaPakiety {
      tytulSekcji
      opisSekcji

      packagesList {
        nazwa
        shortDescription
        stopkaPakietu

        elementsPackages {
          tekst
        }

        przycisk {
          texst
        }
      }
    }

    sekcjaMenu {
      nazwaMalejSekcji
      naglowekSekcji
      opisSekcji

      listaKoktajli {
        nazwaKoktajlu
        skladniki
      }

      odbarmana {
        tytul
        opis
      }

      stopkaSekcji
    }

    sekcjaGaleria {
      naglowekSekcji
      opisSekcji

      galeria {
        nodes {
          sourceUrl
        }
      }
    }

    sekcjaSocialMedia {
      naglowekSekcji
      opisSekcji

      facebook {
        nazwaProfilu
        url
      }

      instagram {
        nazwaProfilu
        url
      }

      tiktok {
        nazwaprofilu
        url
      }
    }

    sekcjaPytaniaIOdpowiedzi {
      naglowekSekcji
      opisSekcji

      pytania {
        pytanie
        odpowiedz
      }
    }

    sekcjaKontakt {
      naglowekSekcji
      opisSekcji

      rodzajeprzyjec {
        nazwa
      }
    }
  }
}
`;

async function getHomePage() {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: QUERY_HOME,
    }),

    next: {
      revalidate: 60,
    },
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Error:", json.errors);
    throw new Error("GraphQL query error");
  }

  return json.data;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePage();

  const seo = data?.page?.seo;

  return {
    title: seo?.title ?? "Heaven Taste Bar | abc",

    description:
      seo?.description ??
      "Mobilny bar koktajlowy na wesela, eventy i wyjątkowe przyjęcia.",

    keywords: seo?.focusKeywords ?? undefined,

    alternates: {
      canonical: seo?.canonicalUrl ?? undefined,
    },

    openGraph: {
      title: seo?.openGraph?.title ?? seo?.title ?? "Heaven Taste Bar",

      description: seo?.openGraph?.description ?? seo?.description ?? "",

      type: "website",
    },
  };
}

export default async function Home() {
  const data = await getHomePage();

  const page = data.page;

  return (
    <main>
      <Hero data={page.sekcjaHero} />

      <About data={page.sekcjaOMnie} />

      <Services data={page.sekcjaUslugi} />

      <Packages data={page.sekcjaPakiety} />

      <Menu data={page.sekcjaMenu} />

      <Gallery data={page.sekcjaGaleria} />

      <Social data={page.sekcjaSocialMedia} />

      <Faq data={page.sekcjaPytaniaIOdpowiedzi} />

      <Contact data={page.sekcjaKontakt} />
    </main>
  );
}
