import { Metadata } from "next";

const GRAPHQL_URL = "https://heaventastebar.pl/graphql";

const QUERY_POLICY = `
query PrivacyPolicy {
  page(id: "polityka-prywatnosci", idType: URI) {
    title
    content
    seo {
      title
      description
    }
  }
}
`;

async function getPrivacyPolicy() {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: QUERY_POLICY }),
    cache: "no-store",
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Privacy policy GraphQL error");
  }

  return json.data.page;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPrivacyPolicy();
  return {
    title: page.seo?.title ?? "Polityka prywatności | Heaven Taste Bar",
    description:
      page.seo?.description ?? "Polityka prywatności Heaven Taste Bar.",
  };
}

export default async function PrivacyPolicyPage() {
  const page = await getPrivacyPolicy();

  return (
    <main className="min-h-screen bg-cream py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.25em]">
            Dokument prawny
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4 tracking-tight">
            {page.title}
          </h1>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-8 bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            <div className="h-px w-8 bg-gold/30" />
          </div>
        </div>

        <article
          className="
            bg-white/60 
            backdrop-blur-sm
            border border-navy/10 
            rounded-2xl 
            p-8 md:p-12 lg:p-16
            shadow-sm

            /* NAGŁÓWKI */
            [&_h1]:font-serif [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:text-navy [&_h1]:mb-6 [&_h1]:mt-8
            [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-navy [&_h2]:mb-4 [&_h2]:mt-12
            [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-navy [&_h3]:mb-3 [&_h3]:mt-8
            [&_h4]:font-serif [&_h4]:text-lg [&_h4]:text-navy [&_h4]:mb-2 [&_h4]:mt-6

            /* AKAPITY */
            [&_p]:text-navy/65 [&_p]:text-base [&_p]:leading-[1.85] [&_p]:mb-5

            /* LISTY */
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-1
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol]:space-y-1
            [&_ul]:marker:text-gold/70 [&_ol]:marker:text-gold/70
            [&_li]:text-navy/65 [&_li]:leading-[1.8]

            /* POGRUBIENIA I KURSYWY */
            [&_strong]:text-navy [&_strong]:font-semibold
            [&_em]:text-navy/80 [&_em]:italic

            /* LINKI */
            [&_a]:text-gold-dark [&_a]:font-medium [&_a]:no-underline [&_a]:transition-colors
            hover:[&_a]:underline

            /* LINIE I TABELKI (jakby były w polityce) */
            [&_hr]:border-navy/10 [&_hr]:my-10
            [&_table]:w-full [&_th]:text-left [&_th]:p-3 [&_th]:border-b [&_th]:border-navy/10 [&_th]:text-navy
            [&_td]:p-3 [&_td]:border-b [&_td]:border-navy/5 [&_td]:text-navy/65
            
            /* CYTATY */
            [&_blockquote]:border-l-4 [&_blockquote]:border-gold/40 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-navy/70
          "
          dangerouslySetInnerHTML={{
            __html: page.content,
          }}
        />
      </div>
    </main>
  );
}
