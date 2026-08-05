export const dynamic = "force-dynamic";

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
import Topbar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const GRAPHQL_URL = "https://heaventastebar.pl/graphql";

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
        image {
          secureUrl
        }
      }
    }
    sekcjaHero {
    button{
      text
    }
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
      tytulSekcji
      opisSekcji
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
      zasieg
    }

    sekcjaOpinie {
      nagwlowekSekcji
      descriptionTestimonials
      opinie {
        imie
        rodzajEventu
        opis
      }
      przycisk {
        text
        linkDoOpiniiGoogle
      }
    }
  }
}
`;

const QUERY_GLOBAL_SETTINGS = `
query GlobalSettings {
  globalneUstawienia {
    globalneUstawieniaV2 {
      numerTelefonu
      numerTelefonuWahtshap
      email
      socialMedia {
        facebook
        instagram
        tiktok
      }
      logo {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;

async function getGlobalSettings() {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY_GLOBAL_SETTINGS,
    }),
    cache: "no-store",
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Global Settings Error:", json.errors);
    throw new Error("GraphQL global settings error");
  }

  return json.data.globalneUstawienia.globalneUstawieniaV2;
}

async function getHomePage() {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY_HOME,
    }),
    cache: "no-store",
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
      images: [
        {
          url: seo?.openGraph?.image?.sourceUrl,
        },
      ],
    },
  };
}

export default async function Home() {
  const data = await getHomePage();
  const settings = await getGlobalSettings();
  const page = data.page;

  return (
    <main>
      <Topbar data={settings} />
      <Navbar data={settings} />
      <Hero data={page.sekcjaHero} />
      <About
        data={{
          ...page.sekcjaOMnie,
          whatsapp: settings.numerTelefonuWahtshap,
        }}
      />
      <Services data={page.sekcjaUslugi} />
      <Packages data={page.sekcjaPakiety} />
      <Menu data={page.sekcjaMenu} />
      <Gallery data={page.sekcjaGaleria} />
      <Testimonials data={page.sekcjaOpinie} />
      <Social data={page.sekcjaSocialMedia} />
      <Faq data={page.sekcjaPytaniaIOdpowiedzi} />
      <Contact
        data={{
          ...page.sekcjaKontakt,
          telefon: settings.numerTelefonu,
          email: settings.email,
        }}
      />
      <Footer data={settings} />
    </main>
  );
}
