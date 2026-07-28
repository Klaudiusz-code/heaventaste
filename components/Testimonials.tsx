import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Anna i Marek",
    event: "Wesele włopolskie",
    text: "Barman był absolutnym hitem naszego wesela! Goście do dziś wspominają autorskie koktajle. Pełen profesjonalizm, genialny kontakt przed imprezą i niesamowita atmosfera, jaką stworzyli za barem. Polecamy w 100%!",
    rating: 5,
  },
  {
    name: "Kamil Z.",
    event: "Integracja firmowa",
    text: "Współpraca od A do Z. Chłopiny przyjechały wcześniej, ustawiły wszystko co do milimetra i przez 5 godzin serwowały drinki na najwyższym poziomie. Nasza firma była zachwycona.",
    rating: 5,
  },
  {
    name: "Magdalena W.",
    event: "Urodziny w ogrodzie",
    text: "Organizowałam przyjęcie dla 40 osób i chciałam czegoś wyjątkowego. Heaven Taste Bar spełnił moje oczekiwania ponad miarę. Drinki były pyszne, a pokaz flaringu rozbawił wszystkich gości.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-medium uppercase tracking-[0.2em]">
            Opinie
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-navy mt-4 tracking-tight">
            Co mówią nasi klienci
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-cream/50 border border-navy/[0.05] rounded-2xl p-8 flex flex-col hover:shadow-lg hover:shadow-navy/5 transition-all duration-500"
            >
              {/* Gwiazdki */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, j) => (
                  <FiStar key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Cytat */}
              <p className="text-navy/60 text-sm font-light leading-relaxed flex-1">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Autor */}
              <div className="mt-8 pt-6 border-t border-navy/[0.06]">
                <p className="font-serif text-base font-semibold text-navy">
                  {item.name}
                </p>
                <p className="text-navy/40 text-xs mt-1">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
