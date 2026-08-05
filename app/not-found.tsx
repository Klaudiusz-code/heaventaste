import Link from "next/link";

export default function Custom404() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="font-serif text-[120px] md:text-[180px] leading-none text-navy/10 select-none">
          404
        </h1>

        <div className="-mt-16 md:-mt-24">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy tracking-tight">
            Strona nie znaleziona
          </h2>

          <div className="flex items-center justify-center gap-3 my-6">
            <div className="h-px w-8 bg-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            <div className="h-px w-8 bg-gold/40" />
          </div>

          <p className="text-navy/45 text-sm md:text-base font-light leading-relaxed">
            Wygląda na to, że strona, której szukasz, nie istnieje lub została
            przeniesiona w inne miejsce.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-8 bg-gold text-navy text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-gold-light transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </main>
  );
}
