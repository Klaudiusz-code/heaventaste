"use client";

import { FiCheck, FiArrowRight } from "react-icons/fi";

interface PackagesProps {
  data: {
    tytulSekcji: string;
    opisSekcji: string;

    packagesList: {
      nazwa: string;
      shortDescription: string;
      stopkaPakietu: string;

      elementsPackages: {
        tekst: string;
      }[];

      przycisk: {
        texst: string;
      };
    }[];
  };
}

export default function Packages({ data }: PackagesProps) {
  const packages = data.packagesList || [];

  return (
    <section id="pakiety" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
            Pakiety
          </span>

          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-navy mt-3 md:mt-4 tracking-tight">
            {data.tytulSekcji}
          </h2>

          <p className="text-navy/45 text-sm md:text-lg font-light leading-relaxed mt-3 md:mt-4">
            {data.opisSekcji}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-5 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                i === 1
                  ? "bg-white border-2 border-gold shadow-2xl shadow-gold/10 sm:col-span-2 lg:col-span-1"
                  : "bg-cream/40 border border-navy/[0.06] hover:shadow-xl hover:shadow-navy/5"
              }`}
            >
              {i === 1 && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-navy text-gold text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-gold/20">
                  Popularny
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy">
                  {pkg.nazwa}
                </h3>

                <p
                  className="text-navy/40 text-xs md:text-sm font-light mt-2 leading-[1.3] tracking-wide"
                  dangerouslySetInnerHTML={{
                    __html: pkg.shortDescription.replace(". ", ".<br>"),
                  }}
                />

                <div
                  className={`w-full h-px my-4 md:my-6 ${
                    i === 1 ? "bg-gold/20" : "bg-navy/[0.06]"
                  }`}
                />

                <ul className="space-y-2.5 md:space-y-3 flex-1">
                  {pkg.elementsPackages?.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-0.5 text-gold-dark flex-shrink-0">
                        <FiCheck
                          className="w-3.5 h-3.5 md:w-4 md:h-4"
                          strokeWidth={2.5}
                        />
                      </div>

                      <span className="text-navy/60 text-xs md:text-sm font-light">
                        {feature.tekst}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] md:text-[13px] text-navy/30 mt-4 leading-relaxed">
                  *{pkg.stopkaPakietu}
                </p>

                <a
                  href="#kontakt"
                  className={`mt-6 flex items-center justify-center gap-2 font-semibold text-sm py-3 md:py-4 rounded-xl transition-all duration-300 ${
                    i === 1
                      ? "bg-gold text-navy hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25"
                      : "bg-navy text-white hover:bg-navy-light"
                  }`}
                >
                  {pkg.przycisk?.texst}

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
