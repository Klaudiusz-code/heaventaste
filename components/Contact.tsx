"use client";

import { useState, FormEvent } from "react";
import Script from "next/script";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiLoader,
} from "react-icons/fi";

type ContactProps = {
  data: {
    naglowekSekcji: string;
    opisSekcji: string;

    rodzajeprzyjec: {
      nazwa: string;
    }[];

    telefon: string;
    email: string;
    zasieg: string;
  };
};

export default function Contact({ data }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaewyyop", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Błąd podczas wysyłania formularza.");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Wystąpił błąd podczas wysyłania formularza.");
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 placeholder:text-white/40";

  return (
    <section id="kontakt" className="py-16 md:py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
              Kontakt
            </span>

            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-white mt-3 md:mt-4 tracking-tight leading-tight">
              {(() => {
                const words = data.naglowekSekcji.split(" ");
                const lastWord = words.pop();
                return (
                  <>
                    {words.join(" ")}{" "}
                    <span className="text-gold">{lastWord}</span>
                  </>
                );
              })()}
            </h2>

            <p className="text-white/45 text-sm md:text-lg font-light leading-relaxed mt-4 md:mt-6">
              {data.opisSekcji}
            </p>

            <div className="space-y-5 md:space-y-6 mt-8 md:mt-10">
              <a
                href={`tel:${data.telefon}`}
                className="flex items-center gap-3 md:gap-4 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                  <FiPhone className="text-gold" />
                </div>

                <div>
                  <div className="text-white/35 text-xs uppercase tracking-widest">
                    Telefon
                  </div>

                  <div className="text-white">{data.telefon}</div>
                </div>
              </a>

              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-3 md:gap-4 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                  <FiMail className="text-gold" />
                </div>

                <div>
                  <div className="text-white/35 text-xs uppercase tracking-widest">
                    Email
                  </div>

                  <div className="text-white break-all">{data.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                  <FiMapPin className="text-gold" />
                </div>

                <div>
                  <div className="text-white/35 text-xs uppercase tracking-widest">
                    Zasięg
                  </div>

                  <div className="text-white">{data.zasieg}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#0f2744] p-6 md:p-8 rounded-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="hidden"
                  name="_subject"
                  value="Nowe zapytanie - Heaven Taste Bar"
                />

                <input type="hidden" name="_language" value="pl" />

                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="min-w-0">
                    <label className="block text-sm text-white/70 mb-2">
                      Imię i nazwisko
                    </label>

                    <input
                      name="name"
                      required
                      placeholder="Jan Kowalski"
                      className={inputClasses}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm text-white/70 mb-2">
                      Numer telefonu
                    </label>

                    <input
                      name="phone"
                      type="tel"
                      required
                      minLength={9}
                      maxLength={9}
                      pattern="[0-9]{9}"
                      placeholder="123456789"
                      className={inputClasses}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm text-white/70 mb-2">
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jan@email.pl"
                      className={inputClasses}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm text-white/70 mb-2">
                      Data przyjęcia
                    </label>

                    <input
                      name="date"
                      type="date"
                      required
                      className={`${inputClasses} [color-scheme:dark]`}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm text-white/70 mb-2">
                      Miejscowość / Sala
                    </label>

                    <input
                      name="location"
                      required
                      placeholder="Kraków / Hotel XYZ"
                      className={inputClasses}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm text-white/70 mb-2">
                      Rodzaj przyjęcia
                    </label>

                    <select
                      name="eventType"
                      required
                      defaultValue=""
                      className={`${inputClasses} bg-[#0f2744]`}
                    >
                      <option value="" disabled>
                        Wybierz...
                      </option>

                      {data.rodzajeprzyjec.map((item, index) => (
                        <option
                          key={index}
                          value={item.nazwa}
                          className="bg-[#0f2744]"
                        >
                          {item.nazwa}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="min-w-0 md:col-span-2">
                    <label className="block text-sm text-white/70 mb-2">
                      Liczba gości
                    </label>

                    <input
                      name="guests"
                      type="number"
                      required
                      placeholder="np. 100"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">
                    Dodatkowe informacje
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    placeholder="Napisz kilka słów o wydarzeniu..."
                  />
                </div>

                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    value="Tak"
                    required
                    className="mt-1 accent-[#C5A059]"
                  />

                  <p className="text-sm text-white/60">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez{" "}
                    <strong>Heaven Taste Bar</strong>.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || submitted}
                  className={`w-full rounded-xl py-4 font-medium flex justify-center items-center gap-2 transition ${
                    submitted
                      ? "bg-green-500"
                      : "bg-gold hover:bg-gold/90 text-navy"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <FiLoader className="animate-spin" />
                      Wysyłanie...
                    </>
                  ) : submitted ? (
                    <>
                      <FiCheck />
                      Wysłano!
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Wyślij zapytanie
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-8">
            <p className="text-white/40 text-[12px] mt-2 max-w-lg mx-auto">
              Sprawdź autentyczne opinie par młodych na portalu Wesele z Klasą
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/20">
            <div
              style={{
                width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
                backgroundColor: "#0f2744",
              }}
              className="wzk-widget iframe-height"
              data-wzk-widget-type="type4"
              data-wzk-notice="45810"
            >
              <div
                style={{
                  backgroundColor: "#0f2744",
                  textAlign: "center",
                  padding: "16px",
                  fontSize: "12px",
                  lineHeight: "12px",
                }}
              >
                <a
                  className="wzk-accent-color"
                  title="Heaven Taste Bar"
                  href="https://www.weselezklasa.pl/ogloszenia-weselne/heaven-taste-mobilne-uslugi-barmanskie,45810/#opinie"
                  rel="nofollow"
                  target="_blank"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                  }}
                >
                  Heaven Taste Bar
                </a>
                <img
                  style={{
                    margin: "8px auto 0",
                    display: "block",
                    opacity: 0.4,
                  }}
                  src="https://widgets.4wzk.pl/dist/img/footer-logo.svg"
                  alt="Wesele z klasą"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://widgets.4wzk.pl/dist/js/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
