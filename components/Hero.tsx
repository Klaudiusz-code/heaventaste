"use client";

import { useState, useEffect, useCallback } from "react";
import { FiArrowRight } from "react-icons/fi";

interface HeroProps {
  data: {
    button: {
      text: string;
    };

    slides: {
      imageHero: {
        node: {
          sourceUrl: string;
        };
      } | null;

      krotkiNaglowek: string;
      naglowek: string;
      description: string;
    }[];

    stats: {
      opis: string;
      wartosc: string;
    }[];
  };
}

export default function Hero({ data }: HeroProps) {
  const slides = data.slides;
  const stats = data.stats || [];

  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    [slides.length],
  );

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(next, 7000);

    return () => clearInterval(timer);
  }, [next, slides.length]);

  if (!slides.length) return null;

  return (
    <section className="bg-white pt-[132px] sm:pt-[136px] md:pt-[140px] lg:pt-[125px] pb-0 lg:pb-16 relative">
      <div
        className="mx-auto px-0 lg:px-8 relative"
        style={{ maxWidth: "1700px" }}
      >
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-navy/[0.04] rounded-[5rem] blur-3xl -z-10 pointer-events-none" />

        <div
          className="
          relative 
          rounded-none lg:rounded-[3rem]
          overflow-hidden
          min-h-[500px] sm:min-h-[550px] md:min-h-[600px]
          h-[70vh] sm:h-[72vh] lg:h-[75vh]
          border-0 lg:border border-transparent lg:border-navy/[0.06]
          shadow-none lg:shadow-[0_30px_80px_-20px_rgba(1,26,48,0.25)]
          group
          "
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`
              absolute inset-0 
              transition-opacity duration-1000 ease-in-out
              ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
            >
              <img
                src={slide.imageHero?.node.sourceUrl || "/heroa.jpg"}
                alt={slide.naglowek}
                className={`
                  absolute inset-0 
                  w-full h-full 
                  object-cover 
                  will-change-transform
                  transition-transform 
                  duration-[7000ms]
                  ease-linear
                  ${i === current ? "scale-100" : "scale-110"}
                `}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}

          <div
            className="relative z-20 h-full flex items-center"
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            <div className="w-full px-5 sm:px-6 md:px-20 lg:px-28">
              <div className="max-w-xl mb-28 sm:mb-32 md:mb-0 relative">
                <div className="pb-20 sm:pb-24 md:pb-[88px]">
                  <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 mb-5 md:mb-8 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span className="text-gold text-[9px] sm:text-[11px] font-medium uppercase tracking-widest">
                      {slides[current].krotkiNaglowek}
                    </span>
                  </div>

                  <h1 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-3 sm:mb-4 md:mb-6">
                    {slides[current].naglowek}
                  </h1>

                  <p className="text-white/50 text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-md">
                    {slides[current].description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0">
                  <a
                    href="#kontakt"
                    className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gold text-navy font-semibold text-xs sm:text-sm px-5 sm:px-8 h-12 rounded-lg sm:rounded-xl hover:bg-gold-light transition-all duration-300 whitespace-nowrap"
                  >
                    {data.button.text}
                    <FiArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
            <div className="bg-gradient-to-t from-navy/70 via-navy/30 to-transparent h-24 md:h-32" />

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
              style={{ maxWidth: "1400px" }}
            >
              <div className="px-5 sm:px-6 md:px-20 lg:px-28 pb-5 md:pb-8 flex flex-col gap-y-3 md:flex-row md:gap-x-16 md:gap-y-0 max-w-[75%] lg:max-w-[55%]">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="transform transition-all duration-500 whitespace-nowrap"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="text-gold font-serif text-base sm:text-lg md:text-2xl font-semibold">
                      {stat.wartosc}
                    </div>
                    <div className="text-white/30 text-[8px] sm:text-[9px] md:text-[10px] mt-0.5 uppercase tracking-[0.15em]">
                      {stat.opis}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-14 z-30 flex items-center gap-3 lg:hidden">
            <div className="flex flex-col items-end gap-2.5">
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-500 rounded-full hidden sm:block ${
                      i === current
                        ? "w-6 h-1.5 md:w-8 md:h-2 bg-gold"
                        : "w-1.5 h-1.5 md:w-2 md:h-2 bg-white/25 hover:bg-white/50"
                    }`}
                    aria-label={`Przejdź do slajdu ${i + 1}`}
                  />
                ))}
              </div>
              <div className="w-24 md:w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  key={current}
                  className="h-full bg-gold/80 animate-slider-progress"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition-all duration-300"
                aria-label="Poprzedni slajd"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={next}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition-all duration-300"
                aria-label="Następny slajd"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex absolute bottom-8 right-20 z-30 flex-col items-end gap-3">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-500 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-gold"
                      : "w-2 h-2 bg-white/25 hover:bg-white/50"
                  }`}
                  aria-label={`Przejdź do slajdu ${i + 1}`}
                />
              ))}
            </div>
            <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                key={current}
                className="h-full bg-gold/80 animate-slider-progress"
              />
            </div>
          </div>

          <button
            onClick={prev}
            className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Poprzedni slajd"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={next}
            className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Następny slajd"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
