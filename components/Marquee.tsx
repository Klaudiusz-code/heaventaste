export default function Marquee() {
  const items = [
    "MOBILNY BAR",
    "KOKTAJLE PREMIUM",
    "WESLA",
    "EVENTY FIRMOWE",
    "SHOW BARMAŃSKI",
    "PEŁNE WYPOSAŻENIE",
    "AUTORSKIE PRZEPISY",
    "KRAJOWA OBSŁUGA",
  ];

  return (
    <div className="bg-navy py-5 overflow-hidden border-y border-white/[0.04]">
      <div className="flex animate-scroll-marquee whitespace-nowrap">
        {/* Duplikujemy tablicę, żeby pasek płynnie się zapętlał bez przerw */}
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-6 md:mx-10">
            <span className="text-white/15 text-sm font-medium uppercase tracking-[0.2em]">
              {item}
            </span>
            <span className="text-gold/30 ml-6 md:ml-10 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
