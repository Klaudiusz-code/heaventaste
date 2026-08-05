type MenuProps = {
  data: {
    nazwaMalejSekcji: string;
    naglowekSekcji: string;
    opisSekcji: string;
    listaKoktajli: {
      nazwaKoktajlu: string;
      skladniki: string;
    }[];
    odbarmana: {
      tytul: string;
      opis: string;
    };
    tytulKartyIndywidualnej: string;
    opisKartyIndywidualnej: string;
    stopkaSekcji: string;
  };
};

export default function Menu({ data }: MenuProps) {
  return (
    <section id="menu" className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.25em]">
            {data.nazwaMalejSekcji}
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-3 md:mt-4 tracking-tight">
            {data.naglowekSekcji}
          </h2>

          <p className="text-navy/45 text-sm md:text-lg font-light leading-relaxed mt-3 md:mt-4">
            {data.opisSekcji}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 md:gap-y-6 max-w-4xl mx-auto">
          {data.listaKoktajli.map((item, i) => (
            <div key={i} className="group transition-all duration-300">
              <div className="flex items-baseline gap-2">
                <h4 className="font-serif text-sm md:text-base font-medium text-navy whitespace-nowrap group-hover:text-gold-dark transition-colors duration-300">
                  {item.nazwaKoktajlu}
                </h4>

                <div className="flex-1 border-b border-dotted border-navy/20 mb-1" />
              </div>

              <p className="text-navy/45 text-[11px] md:text-[13px] font-light leading-relaxed mt-1.5">
                {item.skladniki}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gold/30" />

            <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.25em]">
              {data.odbarmana.tytul}
            </span>

            <div className="h-px flex-1 bg-gold/30" />
          </div>

          <div className="text-center group">
            <h4 className="font-serif text-sm md:text-base font-medium text-navy group-hover:text-gold-dark transition-colors duration-300">
              {data.odbarmana.tytul}
            </h4>

            <p className="text-navy/45 text-[11px] md:text-[13px] font-light leading-relaxed mt-1.5">
              {data.odbarmana.opis}
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-2xl mx-auto">
          <div className="relative bg-white/70 backdrop-blur-sm border border-gold/20 rounded-2xl px-6 py-8 md:px-10 md:py-10 text-center shadow-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cream px-4">
              <span className="text-gold/60 text-sm tracking-widest">✦</span>
            </div>

            <h4 className="font-serif text-base md:text-lg font-medium text-navy mb-2">
              {data.tytulKartyIndywidualnej}
            </h4>

            <p className="text-navy/50 text-sm md:text-base font-light leading-relaxed">
              {data.opisKartyIndywidualnej}
            </p>
          </div>
        </div>

        <div className="text-center mt-10 md:mt-14">
          <p className="text-navy/40 text-xs md:text-sm italic font-light">
            {data.stopkaSekcji}
          </p>
        </div>
      </div>
    </section>
  );
}
