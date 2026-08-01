"use client";

import { useState, FormEvent } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiLoader,
} from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // === TUTAJ PODPIJ SWOJ BACKEND ===
      // Przykład dla Formspree (zmień ID na swój):
      // const response = await fetch("https://formspree.io/f/TWÓJ_ID", {
      //   method: "POST",
      //   body: formData,
      //   headers: { 'Accept': 'application/json' }
      // });
      // if (!response.ok) throw new Error("Błąd sieci");

      // Symulacja opóźnienia sieci (do usunięcia po podpięciu prawdziwego backendu)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error);
      alert("Wystąpił błąd. Spróbuj ponownie.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  // Wspólne klasy dla inputów - dopasowane do ciemnego tła
  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 placeholder:text-white/40";

  return (
    <section id="kontakt" className="py-16 md:py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Lewa kolumna - Informacje kontaktowe */}
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
                href="mailto:kontakt@heaventastebar.pl"
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
                    kontakt@heaventastebar.pl
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
                    Cała Polska dojedziemy wszędzie
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#0f2744] p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Imię i nazwisko */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Imię i nazwisko
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jan Kowalski"
                      className={inputClasses}
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Numer telefonu
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="123 456 789"
                      className={inputClasses}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Adres e-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jan@email.pl"
                      className={inputClasses}
                    />
                  </div>

                  {/* Data */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Data przyjęcia
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className={`${inputClasses} [color-scheme:dark]`} // Wymusza ciemny kalendarz w przeglądarkach
                    />
                  </div>

                  {/* Miejscowość */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Miejscowość / Sala
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      placeholder="Kraków / Hotel XYZ"
                      className={inputClasses}
                    />
                  </div>

                  {/* Rodzaj przyjęcia */}
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Rodzaj przyjęcia
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      defaultValue=""
                      className={`${inputClasses} bg-[#0f2744]`} // Tło selecta musi być nieco mocniejsze dla poprawnego wyświetlania opcji
                    >
                      <option value="" disabled>
                        Wybierz...
                      </option>
                      <option className="bg-[#0f2744] text-white">
                        Wesele
                      </option>
                      <option className="bg-[#0f2744] text-white">
                        Urodziny
                      </option>
                      <option className="bg-[#0f2744] text-white">
                        Event firmowy
                      </option>
                      <option className="bg-[#0f2744] text-white">
                        Garden party
                      </option>
                      <option className="bg-[#0f2744] text-white">
                        Domówka
                      </option>
                      <option className="bg-[#0f2744] text-white">
                        Wieczór kawalerski
                      </option>
                      <option className="bg-[#0f2744] text-white">
                        Wieczór panieński
                      </option>
                      <option className="bg-[#0f2744] text-white">Inne</option>
                    </select>
                  </div>

                  {/* Liczba gości */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Liczba gości
                    </label>
                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      required
                      placeholder="np. 100"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Dodatkowe informacje{" "}
                    <span className="text-white/40 font-normal">
                      (opcjonalnie)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Napisz kilka słów o swoim wydarzeniu lub dodatkowych wymaganiach..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="rodo"
                    name="rodo"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-white/30 bg-white/5 text-gold focus:ring-gold accent-[#C5A059]"
                  />
                  <label
                    htmlFor="rodo"
                    className="text-sm leading-relaxed text-white/60 cursor-pointer"
                  >
                    Wyrażam zgodę na przetwarzanie moich danych osobowych
                    zawartych w formularzu przez{" "}
                    <strong className="text-white/80">Heaven Taste Bar</strong>{" "}
                    w celu przygotowania oferty oraz kontaktu w sprawie
                    zapytania, zgodnie z obowiązującymi przepisami o ochronie
                    danych osobowych.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || submitted}
                  className={`w-full rounded-xl py-4 font-medium text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    submitted
                      ? "bg-green-500 cursor-default"
                      : "bg-gold hover:bg-gold/90 disabled:opacity-70 disabled:cursor-not-allowed"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <FiLoader className="w-5 h-5 animate-spin" /> Wysyłanie...
                    </>
                  ) : submitted ? (
                    <>
                      <FiCheck className="w-5 h-5" /> Wysłano pomyślnie!
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" /> Wyślij zapytanie
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
