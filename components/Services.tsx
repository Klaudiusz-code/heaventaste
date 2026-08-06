import { GiWineGlass } from "react-icons/gi";
import { FiBriefcase, FiGlobe, FiZap, FiTool } from "react-icons/fi";
import { FaCocktail } from "react-icons/fa";

interface ServicesProps {
  data: {
    tytulSekcji: string;
    opisSekcji: string;

    listServices: {
      tytul: string;
      opis: string;
    }[];
  };
}

export default function Services({ data }: ServicesProps) {
  const icons = [FaCocktail, GiWineGlass, FiBriefcase, FiGlobe, FiZap, FiTool];

  return (
    <section
      id="uslugi"
      className="py-16 md:py-24 lg:py-32 bg-navy relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-5 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 gap-4 border-b border-white/[0.06] pb-8 md:pb-10">
          <div>
            <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
              Usługi
            </span>

            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-white mt-3 md:mt-4 tracking-tight">
              {data.tytulSekcji}
            </h2>
          </div>

          <p className="text-white/35 text-sm md:text-base font-light leading-relaxed max-w-sm md:text-right">
            {data.opisSekcji}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 items-start gap-x-8 md:gap-x-12 lg:gap-x-16">
          {data.listServices.map((service, i) => {
            const Icon = icons[i] || FaCocktail;

            return (
              <div
                key={i}
                className="group border-b border-white/[0.06] py-5 md:py-8 cursor-default transition-all duration-500"
              >
                <div className="flex items-start gap-3 md:gap-5 p-2 md:p-4 rounded-xl md:rounded-2xl hover:bg-white/[0.03] transition-colors duration-500">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-500 mt-0.5">
                    <Icon
                      className="
                    w-4 h-4 md:w-5 md:h-5 
                    text-white/40 
                    group-hover:text-gold 
                    transition-colors 
                    duration-500
                    "
                    />
                  </div>

                  <div>
                    <h3 className="text-white font-serif text-base md:text-xl font-medium mb-1 md:mb-2 group-hover:text-gold-light transition-colors duration-300">
                      {service.tytul}
                    </h3>

                    <p className="text-white/30 text-xs md:text-sm font-light leading-relaxed">
                      {service.opis}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
