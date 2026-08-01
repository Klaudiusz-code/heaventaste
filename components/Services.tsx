import { GiWineGlass } from "react-icons/gi";
import { FiBriefcase, FiGlobe, FiZap, FiTool } from "react-icons/fi";
import { FaCocktail } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: FaCocktail,
      title: "Serwis Open Bar",
      description:
        "Obsługa barmańska w systemie Open Bar do 8 godzin. Indywidualne menu koktajlowe ustalane wspólnie przed wydarzeniem, a doświadczeni barmani dbają o energię i klimat.",
    },
    {
      icon: GiWineGlass,
      title: "Wesela i przyjęcia",
      description:
        "Zrealizowaliśmy dziesiątki wesel. Stworzymy elegancki bar dopasowany do stylu Twojego przyjęcia, zdejmując z Was stres organizacyjny od pierwszego kontaktu.",
    },
    {
      icon: FiBriefcase,
      title: "Eventy firmowe",
      description:
        "Integracje, bankiety i konferencje. Stworzymy strefę barową, która zrobi profesjonalne wrażenie na gościach biznesowych i umili czas pracownikom.",
    },
    {
      icon: FiGlobe,
      title: "Imprezy prywatne",
      description:
        "Urodziny, garden party, domówki czy wieczory kawalerskie. Przenosimy jakość topowych koktajlbarów prosto do Twojego ogrodu lub domu.",
    },
    {
      icon: FiZap,
      title: "Pokaz barmański Fireshow",
      description:
        "Spektakl, który wzbudza emocje! Żonglerki z ogniem, sztuczki z shakerami i specjalny koktajl pokazowy – idealny efekt WOW na rozpoczęcie imprezy.",
    },
    {
      icon: FiTool,
      title: "Mobilność i logistyka",
      description:
        "Przyjeżdżamy 3 godziny wcześniej ze swoim zapleczem. Wybieracie styl baru pod Waszą wizję, a my zajmujemy się resztą – dojazd w całym woj. pomorskim w cenie.",
    },
  ];

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
              Nasza usługa od A do Z
            </h2>
          </div>
          <p className="text-white/35 text-sm md:text-base font-light leading-relaxed max-w-sm md:text-right">
            Twój w pełni zaopatrzony bar, gotowy serwować koktajle i emocje —
            bez ukrytych kosztów i niedomówień.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="group border-b border-white/[0.06] py-5 md:py-8 first:pt-0 cursor-default transition-all duration-500"
            >
              <div className="flex items-start gap-3 md:gap-5 p-2 -mx-2 md:p-4 md:-mx-4 rounded-xl md:rounded-2xl hover:bg-white/[0.03] transition-colors duration-500">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-500 mt-0.5">
                  <service.icon className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-gold transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-base md:text-xl font-medium mb-1 md:mb-2 group-hover:text-gold-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/30 text-xs md:text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
