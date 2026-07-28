"use client";

import { useState, FormEvent } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
              Kontakt
            </span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-white mt-3 md:mt-4 tracking-tight leading-tight">
              Porozmawiajmy
              <span className="block text-gold italic">o Twoim evencie</span>
            </h2>
            <p className="text-white/45 text-sm md:text-lg font-light leading-relaxed mt-4 md:mt-6">
              Napisz do nas lub zadzwoń&nbsp;— odpowiadamy w ciągu kilku godzin.
              Chętnie poznamy szczegóły Twojego przyjęcia.
            </p>

            <div className="space-y-5 md:space-y-6 mt-8 md:mt-10">
              <a
                href="tel:669201223"
                className="flex items-center gap-3 md:gap-4 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <FiPhone className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
                <div>
                  <div className="text-white/35 text-[10px] md:text-xs uppercase tracking-widest">
                    Telefon
                  </div>
                  <div className="text-white text-sm md:text-base font-medium mt-0.5">
                    669 201 223
                  </div>
                </div>
              </a>

              <a
                href="mailto:wiczkowski47@gmail.com"
                className="flex items-center gap-3 md:gap-4 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <FiMail className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
                <div>
                  <div className="text-white/35 text-[10px] md:text-xs uppercase tracking-widest">
                    Email
                  </div>
                  <div className="text-white text-sm md:text-base font-medium mt-0.5 break-all">
                    wiczkowski47@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gold/10 flex items-center justify-center">
                  <FiMapPin className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
                <div>
                  <div className="text-white/35 text-[10px] md:text-xs uppercase tracking-widest">
                    Zasięg
                  </div>
                  <div className="text-white text-sm md:text-base font-medium mt-0.5">
                    Cała Polska — dojedziemy wszędzie
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl md:rounded-[2rem] p-5 md:p-8 lg:p-10 space-y-4 md:space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="text-white/35 text-[10px] md:text-xs uppercase tracking-widest block mb-1.5 md:mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg md:rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.06] transition-all duration-300"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="text-white/35 text-[10px] md:text-xs uppercase tracking-widest block mb-1.5 md:mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg md:rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.06] transition-all duration-300"
                    placeholder="+48 000 000 000"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/35 text-[10px] md:text-xs uppercase tracking-widest block mb-1.5 md:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg md:rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.06] transition-all duration-300"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label className="text-white/35 text-[10px] md:text-xs uppercase tracking-widest block mb-1.5 md:mb-2">
                  Rodzaj wydarzenia
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg md:rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-white text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.06] transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-navy">
                    Wybierz...
                  </option>
                  <option value="wedding" className="bg-navy">
                    Wesele
                  </option>
                  <option value="corporate" className="bg-navy">
                    Event firmowy
                  </option>
                  <option value="private" className="bg-navy">
                    Impreza prywatna
                  </option>
                  <option value="other" className="bg-navy">
                    Inne
                  </option>
                </select>
              </div>

              <div>
                <label className="text-white/35 text-[10px] md:text-xs uppercase tracking-widest block mb-1.5 md:mb-2">
                  Wiadomość
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg md:rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                  placeholder="Opowiedz nam o swoim wydarzeniu — data, miejsce, liczba gości..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-gold text-navy font-semibold text-sm py-3.5 md:py-4 rounded-lg md:rounded-xl hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <FiCheck className="w-5 h-5" />
                    Wiadomość wysłana!
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4 md:w-5 md:h-5" />
                    Wyślij zapytanie
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
