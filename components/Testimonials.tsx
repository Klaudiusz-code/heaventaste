"use client";

import { useState } from "react";
import { FiStar, FiExternalLink, FiArrowRight } from "react-icons/fi";

type TestimonialItem = {
  imie: string | null;
  rodzajEventu: string | null;
  opis: string | null;
};

type TestimonialButton = {
  text: string | null;
  linkDoOpiniiGoogle: string | null;
};

type TestimonialsData = {
  nagwlowekSekcji?: string | null;
  descriptionTestimonials?: string | null;
  opinie?: TestimonialItem[] | null;
  przycisk?: TestimonialButton | null;
};

type TestimonialsProps = {
  data: TestimonialsData;
};

export default function Testimonials({ data }: TestimonialsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!data?.opinie || data.opinie.length === 0) return null;

  const { opinie, przycisk, nagwlowekSekcji, descriptionTestimonials } = data;

  const googleLink =
    przycisk?.linkDoOpiniiGoogle ||
    "https://www.google.com/maps/place/Heaven+Taste+Bar";
  const googleText = przycisk?.text || "Zobacz więcej opinii na Google";

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] bg-gold/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[400px] lg:w-[500px] h-[250px] md:h-[400px] lg:h-[500px] bg-navy/[0.07] rounded-full blur-[80px] md:blur-[120px]" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.3em]">
            Rekomendacje
          </span>

          {nagwlowekSekcji ? (
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-4 md:mt-5 tracking-tight leading-[1.1]">
              {nagwlowekSekcji}
            </h2>
          ) : (
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-4 md:mt-5 tracking-tight leading-[1.1]">
              Zaufanie zapisane
              <br />
              <span className="text-gold">w każdym toaście</span>
            </h2>
          )}

          {descriptionTestimonials && (
            <p className="text-navy/50 text-sm md:text-base font-light leading-relaxed mt-4 max-w-xl mx-auto">
              {descriptionTestimonials}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 items-stretch">
          {opinie.map((item, i) => {
            const isMiddle = i === 1;
            const isExpanded = expandedIndex === i;
            const isLongText = (item.opis?.length ?? 0) > 250;

            return (
              <div
                key={i}
                className={`
                  relative rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col
                  transition-all duration-700 group overflow-hidden
                  ${
                    isMiddle
                      ? "bg-navy text-white md:-mt-4 md:mb-4 lg:-mt-6 lg:mb-6 shadow-2xl shadow-navy/30 border border-white/10"
                      : "bg-white/80 backdrop-blur-sm border border-navy/5 hover:shadow-2xl hover:shadow-navy/10 hover:-translate-y-1 md:hover:-translate-y-2"
                  }
                `}
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl pointer-events-none z-20">
                  <div
                    className={`
                      absolute -inset-full h-full w-[200%] skew-x-12
                      transition-transform duration-[1200ms] ease-in-out
                      ${isMiddle ? "group-hover:translate-x-[60%]" : "group-hover:translate-x-[65%]"}
                    `}
                    style={{
                      background: `linear-gradient(to right, transparent, ${isMiddle ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0.08)"}, transparent)`,
                    }}
                  />
                </div>

                <div
                  className={`flex gap-1.5 sm:gap-2 mb-6 sm:mb-8 relative z-10 text-gold`}
                >
                  {[...Array(5)].map((_, j) => (
                    <FiStar
                      key={j}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                    />
                  ))}
                </div>

                <div className="relative flex-1 mb-4 sm:mb-6 z-10">
                  <div
                    className="overflow-hidden transition-all ease-in-out"
                    style={{
                      maxHeight: isExpanded ? "800px" : "7rem",
                      transitionDuration: isExpanded ? "600ms" : "300ms",
                    }}
                  >
                    <p
                      className={`
                      font-light leading-[1.85] pt-1
                      ${
                        isMiddle
                          ? "text-white/80 text-base sm:text-lg"
                          : "text-navy/70 text-sm sm:text-[15px]"
                      } 
                      italic
                    `}
                    >
                      {item.opis}
                    </p>
                  </div>

                  {!isExpanded && isLongText && (
                    <div
                      className={`
                      absolute bottom-0 left-0 right-0 h-20 z-20 pointer-events-none
                      ${
                        isMiddle
                          ? "bg-gradient-to-t from-navy via-navy/80 to-transparent"
                          : "bg-gradient-to-t from-white/90 via-white/60 to-transparent"
                      }
                    `}
                    />
                  )}
                </div>

                {isLongText && (
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                    className={`
                      relative z-30 flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest
                      transition-all duration-300 mb-4 sm:mb-6 group/btn w-fit
                      ${isMiddle ? "text-gold/70 hover:text-gold" : "text-navy/40 hover:text-gold-dark"}
                    `}
                  >
                    <span>{isExpanded ? "Zwiń" : "Czytaj dalej"}</span>
                    <FiArrowRight
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-500 ${isExpanded ? "rotate-90" : "rotate-0"}`}
                    />
                  </button>
                )}

                {/* Autor */}
                <div
                  className={`
                  mt-auto pt-5 sm:pt-8 relative z-10 border-t
                  ${isMiddle ? "border-white/10" : "border-navy/10"}
                `}
                >
                  <p
                    className={`font-serif text-lg sm:text-xl font-bold ${isMiddle ? "text-white" : "text-navy"}`}
                  >
                    {item.imie}
                  </p>
                  <p
                    className={`
                    text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1.5 sm:mt-2
                    ${isMiddle ? "text-gold/80" : "text-gold-dark"}
                  `}
                  >
                    {item.rodzajEventu}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Przycisk Google */}
        <div className="mt-14 md:mt-20 flex justify-center">
          <a
            href={googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/btn 
              relative 
              inline-flex 
              items-center 
              gap-3 sm:gap-4 
              bg-navy 
              text-white/90 
              text-xs sm:text-sm 
              font-semibold 
              px-7 sm:px-10 py-4 sm:py-5 
              rounded-full 
              overflow-hidden
              shadow-xl shadow-navy/20
              hover:shadow-2xl hover:shadow-navy/30
              transition-all 
              duration-500
            "
          >
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

            <div className="flex gap-1 text-gold relative z-10">
              <FiStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              <FiStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              <FiStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              <FiStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              <FiStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            </div>
            <span className="relative z-10">{googleText}</span>
            <FiExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40 group-hover/btn:text-gold transition-colors duration-300 relative z-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
