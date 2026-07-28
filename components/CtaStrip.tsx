import { FaCocktail } from "react-icons/fa";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export default function CtaStrip() {
  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="relative bg-cream rounded-[2rem] p-10 md:p-16 border-2 border-gold/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] group hover:-translate-y-1 transition-all duration-700">
          <div className="absolute inset-4 md:inset-6 rounded-[1.5rem] border border-gold/15 pointer-events-none" />

          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-gold rounded-full shadow-lg shadow-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <FaCocktail className="w-6 h-6 text-navy" />
          </div>

          <div className="relative z-10 text-center">
            <span className="text-gold-dark text-[11px] font-semibold uppercase tracking-[0.3em] block mb-6">
              Zarezerwuj swój termin
            </span>

            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy tracking-tight leading-tight">
              Zaproś nas na
              <br />
              <span className="italic text-gold-dark">swoje przyjęcie</span>
            </h2>

            <p className="text-navy/50 text-base font-light leading-relaxed mt-6 max-w-md mx-auto">
              Stwórzmy wspólnie atmosferę, o której goście będą opowiadać przez
              lata.
            </p>

            <div className="mt-10 flex flex-col items-center gap-5">
              <a
                href="#kontakt"
                className="group/btn bg-navy text-white font-semibold text-sm px-10 py-4 rounded-xl hover:bg-navy-light transition-all duration-300 flex items-center gap-2 shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30"
              >
                Wyślij zapytanie
                <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:669201223"
                className="flex items-center gap-2 text-navy/40 hover:text-gold-dark text-sm font-medium transition-colors duration-300"
              >
                <FiPhone className="w-3.5 h-3.5" />
                lub zadzwoń: 669 201 223
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
