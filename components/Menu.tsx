const menuData = [
  { name: "Aperol Spritz", ingredients: "Aperol, Prosecco, soda" },
  { name: "Mojito", ingredients: "Rum, mięta, limonka, cukier, soda" },
  {
    name: "Whisky Sour",
    ingredients: "Whisky, sok z cytryny, cukier, białko, Angostura",
  },
  { name: "French 75", ingredients: "Gin, cukier, cytryna, Prosecco" },
  { name: "Gin & Twist", ingredients: "Gin, sok grejpfrutowy, tonik" },
  { name: "Espresso Martini", ingredients: "Wódka, espresso, Kahlúa, cukier" },
  {
    name: "Strawberry Daiquiri",
    ingredients: "Rum, purée truskawkowe, sok z limonki, cukier",
  },
  {
    name: "Pornstar Martini",
    ingredients: "Wódka, marakuja, wanilia, limonka, Prosecco",
  },
  { name: "Jägerbomb", ingredients: "Jägermeister, Red Bull" },
  {
    name: "Hibiskus 0%",
    ingredients: "Syrop hibiskusowy, sok jabłkowy, sok z cytryny, tonik",
  },
  { name: "Rubin 0%", ingredients: "Ananas, kokos, wiśnie, soda" },
];

export default function Menu() {
  return (
    <section id="menu" className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8">
        {/* Nagłówek */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.25em]">
            Bar Menu G&T Twist
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-3 md:mt-4 tracking-tight">
            Koktajle stworzone z pasją
          </h2>

          <p className="text-navy/45 text-sm md:text-lg font-light leading-relaxed mt-3 md:mt-4">
            Klasyczne receptury i wyjątkowe smaki dopasowane do charakteru
            Twojego wydarzenia.
          </p>
        </div>

        {/* Lista koktajli */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 md:gap-y-6 max-w-4xl mx-auto">
          {menuData.map((item, i) => (
            <div key={i} className="group transition-all duration-300">
              <div className="flex items-baseline gap-2">
                <h4 className="font-serif text-sm md:text-base font-medium text-navy whitespace-nowrap group-hover:text-gold-dark transition-colors duration-300">
                  {item.name}
                </h4>

                <div className="flex-1 border-b border-dotted border-navy/20 mb-1" />
              </div>

              <p className="text-navy/45 text-[11px] md:text-[13px] font-light leading-relaxed mt-1.5">
                {item.ingredients}
              </p>
            </div>
          ))}
        </div>

        {/* Od barmana */}
        <div className="mt-10 md:mt-14 max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gold/30" />
            <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.25em]">
              Od barmana
            </span>
            <div className="h-px flex-1 bg-gold/30" />
          </div>

          <div className="text-center group">
            <h4 className="font-serif text-sm md:text-base font-medium text-navy group-hover:text-gold-dark transition-colors duration-300">
              Niespodzianka
            </h4>
            <p className="text-navy/45 text-[11px] md:text-[13px] font-light leading-relaxed mt-1.5">
              Powiedz, na co masz ochotę — stworzymy coś wyjątkowego specjalnie
              dla Ciebie
            </p>
          </div>
        </div>

        {/* Stopka */}
        <div className="text-center mt-10 md:mt-14">
          <p className="text-navy/40 text-xs md:text-sm italic font-light">
            Nie znalazłeś swojego ulubionego smaku? Zapytaj naszego barmana —
            stworzymy coś specjalnie dla Ciebie.
          </p>
        </div>
      </div>
    </section>
  );
}
