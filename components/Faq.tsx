"use client";

import { useState } from "react";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";

type FaqProps = {
  data: {
    naglowekSekcji: string;
    opisSekcji: string;
    pytania: {
      pytanie: string;
      odpowiedz: string;
    }[];
  };
};

export default function Faq({ data }: FaqProps) {
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
            {data.naglowekSekcji}
          </h2>

          <p className="text-navy/45 text-sm md:text-lg font-light leading-relaxed mt-3 md:mt-4">
            {data.opisSekcji}
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {data.pytania.map((faq, i) => (
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
                  {faq.pytanie}
                </span>

                <div
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-gold/10 text-gold-dark"
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
                    {faq.odpowiedz}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
