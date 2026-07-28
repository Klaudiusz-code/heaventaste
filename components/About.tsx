"use client";

import { useState, useRef } from "react";
import {
  FiAward,
  FiHeart,
  FiStar,
  FiClock,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const features = [
    { icon: FiAward, label: "Profesjonalna obsługa" },
    { icon: FiHeart, label: "Pasja do koktajli" },
    { icon: FiStar, label: "Premium składniki" },
    { icon: FiClock, label: "Punktualność" },
  ];

  return (
    <section
      id="o-nas"
      className="py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative group md:max-w-lg lg:max-w-none mx-auto lg:mx-0 w-full">
            <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 border-gold/20 shadow-2xl shadow-navy/20 relative">
              <video
                ref={videoRef}
                src="/about.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <button
                onClick={toggleMute}
                className="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
              >
                {muted ? (
                  <FiVolumeX className="w-5 h-5 text-white" />
                ) : (
                  <FiVolume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10 hidden md:block" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-gold/10 rounded-2xl -z-10 hidden md:block" />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold-dark text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                O nas
              </span>
            </div>

            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-navy tracking-tight leading-[1.15]">
              Tworzymy{" "}
              <span className="italic text-gold-dark">doświadczenia</span>,{" "}
              <br />
              nie tylko drinki
            </h2>

            <div className="w-16 h-[2px] bg-gold/30 my-5 md:my-8" />

            <p className="text-navy/50 text-sm md:text-base lg:text-lg font-light leading-relaxed">
              Heaven Taste Bar to mobilny bar, który przemienia każde przyjęcie
              w wyjątkowe wydarzenie. Działamy z pasją i dbałością o każdy
              detal&nbsp;— od selekcji alkoholi, przez prezentację, po obsługę
              gości.
            </p>

            <p className="text-navy/50 text-sm md:text-base lg:text-lg font-light leading-relaxed mt-3 md:mt-4">
              Nasz zespół to profesjonalni barmani z wieloletnim doświadczeniem,
              którzy potrafią stworzyć atmosferę godną najlepszych koktajlbarów.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-6 mt-6 md:mt-10">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 md:gap-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold-dark" />
                  </div>
                  <span className="text-navy/70 text-[11px] md:text-sm font-medium leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/48669210223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 mt-6 md:mt-10 group"
            >
              <FaWhatsapp className="w-5 h-5" />
              Napisz na WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
