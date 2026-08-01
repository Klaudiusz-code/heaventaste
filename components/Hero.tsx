"use client";

import { useState, useEffect, useCallback } from "react";
import { FiArrowRight } from "react-icons/fi";

const slides = [
  {
    image: "/hero1.jpg",
    tag: "Mobilny Bar Koktajlowy",
    title: "Smak, styl i emocje w jednym miejscu",
    description:
      "Wy cieszycie się chwilą, my dbamy o resztę. Zapewniamy profesjonalną obsługę i estetyczną strefę barową dopasowaną do charakteru wydarzenia.",
  },
  {
    image: "/hero2.jpg",
    tag: "Najwyższa Jakość",
    title: "Autorskie koktajle i naturalne składniki",
    description:
      "Pracujemy na sprawdzonych alkoholach premium, autorskich syropach i świeżych owocach. Jakość, która ma znaczenie w każdym drinku.",
  },
  {
    image: "/hero3.jpg",
    tag: "Open Bar",
    title: "Kompleksowa obsługa bez niedomówień",
    description:
      "Serwis w systemie Open Bar do 8 godzin. Na każde przyjęcie przyjeżdżamy w pełni przygotowani, z własnym zapleczem i sprawdzonymi rozwiązaniami.",
  },
  {
    image: "/hero4.jpg",
    tag: "Atrakcje Dodatkowe",
    title: 'Efekt "WOW", który zapiera dech',
    description:
      "Pokaz barmański Fireshow, bar molekularny z suchym lodem czy elegancka wieża z szampana. Spektakl, który zostaje w sercach gości.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-white pt-[120px] sm:pt-[130px] lg:pt-[140px] pb-0 lg:pb-16 relative">
      <div
        className="mx-auto px-0 lg:px-8 relative"
        style={{ maxWidth: "1700px" }}
      >
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-navy/[0.04] rounded-[5rem] blur-3xl -z-10 pointer-events-none" />

        <div
          className="relative 
          rounded-none lg:rounded-[3rem] 
          overflow-hidden 
          h-[70vh] sm:h-[72vh] lg:h-[75vh] 
          border-0 lg:border border-transparent lg:border-navy/[0.06] 
          shadow-none lg:shadow-[0_30px_80px_-20px_rgba(1,26,48,0.25)] 
          group"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.tag}
                className={`absolute inset-0 w-full h-full object-cover will-change-transform transition-transform duration-[7000ms] ease-linear ${
                  i === current ? "scale-100" : "scale-110"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}

          <div
            className="relative z-20 h-full flex items-center"
            style={{ maxWidth: "1400px", margin: "0 auto" }}
          >
            <div className="w-full px-5 sm:px-6 md:px-14 lg:px-20">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 mb-5 md:mb-8 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-gold text-[9px] sm:text-[11px] font-medium uppercase tracking-widest">
                    {slides[current].tag}
                  </span>
                </div>

                <div className="overflow-hidden">
                  <h1 className="font-serif text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-3 sm:mb-4 md:mb-6 transform transition-all duration-700 ease-out">
                    {slides[current].title}
                  </h1>
                </div>

                <div className="overflow-hidden">
                  <p className="text-white/50 text-xs sm:text-sm md:text-lg font-light leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-md transform transition-all duration-700 delay-100 ease-out">
                    {slides[current].description}
                  </p>
                </div>

                <div className="overflow-hidden">
                  <a
                    href="#kontakt"
                    className="group inline-flex items-center gap-2 sm:gap-3 bg-gold text-navy font-semibold text-xs sm:text-sm px-5 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 transform translate-y-0 hover:translate-y-[-2px]"
                  >
                    Zapytaj o dostępność
                    <FiArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
            <div className="bg-gradient-to-t from-navy/70 via-navy/30 to-transparent h-24 md:h-32" />
            <div
              className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 md:px-14 lg:px-20 pb-5 md:pb-8 flex flex-wrap gap-x-6 gap-y-3 md:gap-x-16 md:gap-y-0"
              style={{ maxWidth: "1400px", margin: "0 auto" }}
            >
              {[
                { value: "100+", label: "Obsłużonych eventów" },
                { value: "8h", label: "Open Bar w pakiecie" },
                { value: "100%", label: "Naturalnych składników" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="transform transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-gold font-serif text-base sm:text-lg md:text-2xl font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-white/30 text-[8px] sm:text-[9px] md:text-[10px] mt-0.5 uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-2 sm:left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
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
            className="absolute right-2 sm:right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
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

          <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-14 lg:right-20 z-20 flex flex-col items-end gap-2.5 md:gap-3">
            <div className="flex items-center gap-1.5 md:gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-500 rounded-full hidden sm:block ${
                    i === current
                      ? "w-6 h-1.5 md:w-8 md:h-2 bg-gold"
                      : "w-1.5 h-1.5 md:w-2 md:h-2 bg-white/25 hover:bg-white/50"
                  }`}
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
        </div>
      </div>
    </section>
  );
}
