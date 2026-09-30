import Image from "next/image";
import { FiInstagram, FiFacebook, FiMail, FiPhone } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

type FooterProps = {
  data: {
    numerTelefonu: string;
    email: string;
    socialMedia: {
      facebook: string;
      instagram: string;
      tiktok: string;
    };
    logo: {
      node: {
        sourceUrl: string;
      };
    };
  };
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-navy-dark border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* LOGO + OPIS */}
          <div className="sm:col-span-2 lg:col-span-5">
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="h-12 w-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={data.logo.node.sourceUrl}
                  alt="Heaven Taste Bar"
                  width={54}
                  height={60}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </a>

            <p className="text-white/30 text-sm font-light leading-relaxed mt-6 max-w-sm">
              Elegancki mobilny bar na przyjęcia, wesela i eventy firmowe.
              Tworzymy koktajle, które zostają w pamięci na długo po zakończeniu
              imprezy.
            </p>
          </div>

          {/* MENU */}
          <div className="lg:col-span-3">
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
              Nawigacja
            </h4>

            <ul className="space-y-3">
              {[
                { href: "#o-nas", label: "O nas" },
                { href: "#uslugi", label: "Usługi" },
                { href: "#pakiety", label: "Pakiety" },
                { href: "#menu", label: "Menu" },
                { href: "#galeria", label: "Realizacje" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KONTAKT */}
          <div className="lg:col-span-4">
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
              Kontakt
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${data.numerTelefonu}`}
                  className="flex items-center gap-3 text-white/30 hover:text-gold text-sm transition-colors"
                >
                  <FiPhone className="w-4 h-4 text-gold/60 shrink-0" />
                  {data.numerTelefonu}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-3 text-white/30 hover:text-gold text-sm transition-colors"
                >
                  <FiMail className="w-4 h-4 text-gold/60 shrink-0" />
                  {data.email}
                </a>
              </li>

              {/* SOCIAL */}
              <li className="flex items-center gap-3 pt-2">
                <a
                  href={data.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/20 transition-all"
                >
                  <FiInstagram className="w-4 h-4" />
                </a>

                <a
                  href={data.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/20 transition-all"
                >
                  <FiFacebook className="w-4 h-4" />
                </a>

                <a
                  href={data.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/20 transition-all"
                >
                  <FaTiktok className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* REKOMENDACJE */}
        <div className="mt-14 pt-10 border-t border-white/[0.05]">
          <span className="text-white/20 text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">
            Rekomendacje
          </span>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mt-5">
            {/* Wesele z Klasą */}
            <a
              href="https://www.weselezklasa.pl/ogloszenia-weselne/heaven-taste-mobilne-uslugi-barmanskie,45810/"
              target="_blank"
              rel="noopener noreferrer"
              title="Heaven Taste Bar - Wesele z Klasą"
              className="group flex items-center gap-4 rounded-lg px-4 py-3 -ml-4 sm:ml-0 hover:bg-white/[0.02] transition-colors"
            >
              <img
                src="https://www.weselezklasa.pl//banery/Weselezklasa/logo26x32przezroczystetlobialewypelnienie.png"
                alt="Wesele z Klasą"
                className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{ imageRendering: "crisp-edges" }}
              />
              <div className="flex flex-col">
                <span className="text-white/50 text-base font-light group-hover:text-white/70 transition-colors leading-tight">
                  Wesele z Klasą
                </span>
                <span className="text-white/20 text-xs font-light mt-1">
                  Zobacz nasz profil na portalu →
                </span>
              </div>
            </a>

            {/* Orły Rozrywki */}
            <a
              href="https://www.orlyrozrywki.pl/profile-1040344-heaven-taste-events"
              target="_blank"
              rel="noopener noreferrer"
              title="Heaven Taste & Events - Gdańsk"
              className="group flex items-center gap-4 rounded-lg px-4 py-3 -ml-4 sm:ml-0 hover:bg-white/[0.02] transition-colors"
            >
              <img
                src="https://www.orlyrozrywki.pl/images/medals/1040344/laureat300_gold_pl.png"
                alt="Heaven Taste & Events - Gdańsk"
                className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="flex flex-col">
                <span className="text-white/50 text-base font-light group-hover:text-white/70 transition-colors leading-tight">
                  Orły Rozrywki
                </span>
                <span className="text-white/20 text-xs font-light mt-1">
                  Zobacz nasz profil na portalu →
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Heaven Taste Bar. Wszelkie prawa
            zastrzeżone.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="/polityka-prywatnosci"
              className="text-white/20 text-xs hover:text-white/40 transition-colors"
            >
              Polityka Prywatności
            </a>

            <span className="hidden sm:inline text-white/10">|</span>

            <a
              href="https://klaudiuszdev.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/20 text-xs hover:text-gold/50 transition-colors"
            >
              <img
                src="https://klaudiuszdev.pl/hello.svg"
                alt="KlaudiuszDev"
                className="w-5 h-5"
              />
              <span>Realizacja: klaudiuszdev.pl</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
