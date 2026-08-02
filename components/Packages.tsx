import { FiCheck, FiArrowRight } from "react-icons/fi";

export default function Packages() {
  const packages = [
    {
      name: "Basic",
      desc: "Klasyczna elegancja. Solidna baza alkoholowa i pełne wyposażenie dla mniejszych imprez.",
      features: [
        "Rum, Gin, Whisky Szkocka i Irlandzka, Triple Sec",
        "Świeże egzotyczne owoce, zioła oraz przyprawy",
        "Syropy i kordiały z naturalnych składników",
        "Bittersy i likiery barmańskie (Monin, Giffard)",
        "Soki owocowe 100% oraz napoje gazowane",
        "Domowe puree ze świeżych owoców",
        "Koktajle bezalkoholowe w cenie",
        "Lód w kostkach i kruszony",
      ],
      footnote:
        "Wódka czysta po stronie organizatora (średnio 5 litrów na każde 100 osób).",
      cta: "Zapytaj o pakiet",
      highlighted: false,
    },
    {
      name: "Classic",
      desc: "Dla tych, którzy chcą czegoś więcej. Z myślą o wyjątkowych chwilach, zawsze w dobrym smaku!",
      features: [
        "Rum Blanco i Spiced, Gin, Whisky, Tequila, Triple Sec",
        "Likiery smakowe do drinków",
        "Kolorowe shoty w kilku różnych smakach",
        "Przepyszna domowa nalewka dla gości",
        "10% rabatu na atrakcje dodatkowe",
        "Świeże owoce, zioła, syropy, bittersy i puree",
        "Soki 100%, napoje gazowane i lód",
        "Koktajle bezalkoholowe w cenie",
      ],
      footnote:
        "Wódka czysta po stronie organizatora (średnio 5 litrów na każde 100 osób).",
      cta: "Zapytaj o pakiet",
      highlighted: true,
    },
    {
      name: "Prestige",
      desc: "Najszerszy zakres barowych możliwości. Celebracja w najlepszym wydaniu!",
      features: [
        "Rozszerzona półka: Jägermeister, Aperol, Prosecco (i 0%), Campari, Wermuty",
        "Bar molekularny – suchy lód tworzący efekt mgiełki",
        "Podpalane shoty w wielu smakach i kolorach",
        "Modyfikacje wizualne menu koktajli na życzenie",
        "Bogatsza oprawa wizualna baru (oświetlenie, dekoracje)",
        "Aż 20% zniżki na atrakcje dodatkowe",
        "Pełne zaplecze z pakietu Classic",
        "Koktajle bezalkoholowe w cenie",
      ],
      footnote:
        "Wódka czysta po stronie organizatora (średnio 5 litrów na każde 100 osób).",
      cta: "Zapytaj o pakiet",
      highlighted: false,
    },
  ];

  return (
    <section id="pakiety" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
            Pakiety
          </span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-navy mt-3 md:mt-4 tracking-tight">
            Dopasujemy się do Twojego budżetu
          </h2>
          <p className="text-navy/45 text-sm md:text-lg font-light leading-relaxed mt-3 md:mt-4">
            Każdy pakiet obejmuje kompletną obsługę barową bez ukrytych kosztów,
            dopłat i niedomówień.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-5 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                pkg.highlighted
                  ? "bg-white border-2 border-gold shadow-2xl shadow-gold/10 sm:col-span-2 lg:col-span-1"
                  : "bg-cream/40 border border-navy/[0.06] hover:shadow-xl hover:shadow-navy/5"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-navy text-gold text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-gold/20">
                  Popularny
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy">
                  {pkg.name}
                </h3>
                <p className="text-navy/40 text-xs md:text-sm font-light mt-2 leading-relaxed">
                  {pkg.desc}
                </p>

                <div
                  className={`w-full h-px my-4 md:my-6 ${
                    pkg.highlighted ? "bg-gold/20" : "bg-navy/[0.06]"
                  }`}
                />

                <ul className="space-y-2.5 md:space-y-3 flex-1">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-0.5 text-gold-dark flex-shrink-0">
                        <FiCheck
                          className="w-3.5 h-3.5 md:w-4 md:h-4"
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-navy/60 text-xs md:text-sm font-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Stopka z informacją o wódce */}
                <p className="text-[10px] md:text-[13px] text-navy/30 mt-4 leading-relaxed">
                  *{pkg.footnote}
                </p>

                <a
                  href="#kontakt"
                  className={`mt-6 flex items-center justify-center gap-2 font-semibold text-sm py-3 md:py-4 rounded-xl transition-all duration-300 ${
                    pkg.highlighted
                      ? "bg-gold text-navy hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25"
                      : "bg-navy text-white hover:bg-navy-light"
                  }`}
                >
                  {pkg.cta}
                  <FiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
