const menuData = [
  {
    category: "Klasyki",
    items: [
      {
        name: "Aperol Spritz",
        ingredients: "Aperol, Prosecco, woda gazowana, pomarańcza",
      },
      {
        name: "Mojito",
        ingredients: "Rum biały, limonka, mięta, trzcina cukrowa",
      },
      {
        name: "Old Fashioned",
        ingredients: "Bourbon, cukier, Angostura, skórka pomarańczy",
      },
    ],
  },
  {
    category: "Nasze Autorskie",
    items: [
      {
        name: "Heaven Taste",
        ingredients: "Tonik z wiśnią, gin, bazylia, lód krystaliczny",
      },
      {
        name: "Gold Rush",
        ingredients: "Whisky, miód świeży, cytryna, bitters",
      },
      {
        name: "Smoky Rose",
        ingredients: "Mezcal, likier różany, grapefruit, dym",
      },
    ],
  },
  {
    category: "Bezalkoholowe",
    items: [
      {
        name: "Virgin Colada",
        ingredients: "Ananas, kokosowe mleko, limonka, lód",
      },
      {
        name: "Berry Mocktail",
        ingredients: "Purée z malin, limonka, mięta, woda gazowana",
      },
      {
        name: "Ginger Sunrise",
        ingredients: "Sok z pomarańczy, imbir, syrop z agawy",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8">
        {/* Nagłówek - mniejszy na mobile */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
            Menu
          </span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-navy mt-3 md:mt-4 tracking-tight">
            Przykładowe drinki
          </h2>
          <p className="text-navy/45 text-sm md:text-lg font-light leading-relaxed mt-3 md:mt-4">
            Menu zawsze dopasowujemy do charakteru wydarzenia i preferencji
            gości.
          </p>
        </div>

        {/* Siatka: 1 kolumna na mobile, 2 na tabletach, 3 na laptopach */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {menuData.map((cat, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="h-px flex-1 bg-gold/30" />
                <h3 className="font-serif text-sm md:text-lg font-semibold text-navy whitespace-nowrap">
                  {cat.category}
                </h3>
                <div className="h-px flex-1 bg-gold/30" />
              </div>

              <div className="space-y-3 md:space-y-5">
                {cat.items.map((item, j) => (
                  <div key={j} className="group cursor-default">
                    {/* Wiersz z nazwą i przekreślnikiem - mniejszy font na mobile */}
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-serif text-sm md:text-base font-medium text-navy whitespace-nowrap group-hover:text-gold-dark transition-colors duration-300">
                        {item.name}
                      </h4>
                      <div className="flex-1 border-b border-dotted border-navy/20 mb-1" />
                    </div>
                    <p className="text-navy/40 text-[11px] md:text-xs font-light mt-1 md:mt-1.5 leading-relaxed">
                      {item.ingredients}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
