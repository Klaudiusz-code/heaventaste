"use client";

import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  {
    src: "gallery1.jpg",
    alt: "Przygotowywanie koktajlu",
  },
  {
    src: "gallery2.jpg",
    alt: "Barman w akcji",
  },
  {
    src: "gallery3.jpg",
    alt: "Kolorowe drinki",
  },
  {
    src: "gallery4.jpg",
    alt: "Show barmański",
  },
  {
    src: "gallery5.jpg",
    alt: "Obsługa weselna",
  },
  {
    src: "gallery6.jpg",
    alt: "Detale koktajli",
  },
  {
    src: "gallery7.jpg",
    alt: "Detale koktajli",
  },
  {
    src: "gallery8.jpg",
    alt: "Detale koktajli",
  },
  {
    src: "gallery9.jpg",
    alt: "Detale koktajli",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const open = (i: number) => setSelected(i);
  const close = () => setSelected(null);
  const prev = () =>
    setSelected((s) =>
      s !== null ? (s - 1 + images.length) % images.length : null,
    );
  const next = () =>
    setSelected((s) => (s !== null ? (s + 1) % images.length : null));

  return (
    <section id="galeria" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">
            Realizacje
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mt-4 tracking-tight">
            Zobacz nas w działaniu
          </h2>
          <p className="text-navy/45 text-lg font-light leading-relaxed mt-4">
            Każde wydarzenie to osobna historia. Oto kilka z nich.
          </p>
        </div>

        {/* Równa siatka 3 kolumny, proporcje 4:3 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => open(i)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
          >
            <FiX className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
