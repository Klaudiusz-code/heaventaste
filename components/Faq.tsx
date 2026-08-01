"use client";

import { useState } from "react";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";

const faqs = [
  {
    question: "Kiedy rozpoczyna się serwis koktajli?",
    answer:
      "To Wy wybieracie godzinę rozpoczęcia serwisu. Nasz bar jest zawsze gotowy przed wejściem pierwszych gości. Co ważne – serwis może rozpocząć się nawet do godziny później bez żadnych dopłat.",
  },
  {
    question: "Kto zajmuje się zakupami i alkoholem?",
    answer:
      "Nasza usługa jest kompleksowa. Zajmujemy się wszystkim – od przygotowania zaplecza, przez składniki, aż po wyposażenie. Wy nie musicie się o nic martwić.",
  },
  {
    question: "Czy bar może być ustawiony na zewnątrz?",
    answer:
      "Tak! Organizujemy bary w ogrodach i na zewnątrz. Potrzebujemy jedynie dostępu do prądu (standardowe 230V) oraz odpowiedniego podłoża i zadaszenia na wypadek niepogody.",
  },
  {
    question: "Ilu barmanów obsługuje przyjęcie?",
    answer:
      "Do 40 gości obsługę zapewnia jeden doświadczony barman. Powyżej 40 osób zawsze przyjeżdża dwóch lub więcej barmanów, aby serwis przebiegał płynnie i bez kolejek.",
  },
  {
    question: "Czy można wydłużyć czas pracy baru?",
    answer:
      "Oczywiście! Jesteśmy bardzo elastyczni. Możesz zdecydować się na przedłużenie pracy baru bezpośrednio podczas trwania przyjęcia lub ustalić to z nami na etapie wczesnych przygotowań.",
  },
  {
    question: "Jak mogę zarezerwować termin?",
    answer:
      "Najlepiej po prostu do nas napisać przez formularz kontaktowy lub wiadomość. Chętnie odpowiemy na wszelkie pytania, umówimy się na spotkanie lub wyślemy umowę mailem.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
            FAQ
          </span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-navy mt-3 md:mt-4 tracking-tight">
            Pytania i odpowiedzi
          </h2>
          <p className="text-navy/45 text-sm md:text-lg font-light leading-relaxed mt-3 md:mt-4">
            Najczęściej zadawane pytania i to, co warto wiedzieć przed
            wydarzeniem.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? "border-gold/30 shadow-lg shadow-gold/5"
                  : "border-navy/[0.06] hover:border-navy/10"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-left p-4 md:p-6 gap-3 md:gap-4"
              >
                <span
                  className={`font-medium text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                    openIndex === i ? "text-gold-dark" : "text-navy"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-gold/10 text-gold-dark rotate-0"
                      : "bg-navy/5 text-navy/40"
                  }`}
                >
                  {openIndex === i ? (
                    <FiMinus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  ) : (
                    <FiPlus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 md:px-6 md:pb-6 text-navy/50 text-xs md:text-sm font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sekcja zachęcająca do kontaktu */}
        <div className="mt-12 md:mt-20 text-center">
          <div className="w-16 h-px bg-gold/30 mx-auto mb-8 md:mb-10" />
          <h3 className="font-serif text-xl md:text-3xl font-semibold text-navy tracking-tight">
            Zafascynował Cię nasz{" "}
            <span className="italic text-gold-dark">pomysł?</span>
          </h3>
          <p className="text-navy/40 text-sm md:text-base font-light leading-relaxed mt-3 md:mt-4 max-w-md mx-auto">
            Porozmawiajmy o szczegółach Twojego wydarzenia. Odezwiemy się w
            ciągu kilku godzin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-8 md:mt-10">
            <a
              href="#kontakt"
              className="group bg-gold text-navy font-semibold text-sm px-8 py-3.5 md:py-4 rounded-xl hover:bg-gold-light transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-gold/20"
            >
              Wyślij zapytanie
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:669201223"
              className="flex items-center gap-2 text-navy/50 hover:text-gold-dark text-sm font-medium transition-colors duration-300"
            >
              lub zadzwoń: 669 201 223
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
