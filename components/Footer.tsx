import Image from "next/image";
import { FiInstagram, FiFacebook, FiMail, FiPhone } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="h-12 w-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-taste.svg"
                  alt="Heaven Taste Bar"
                  width={54}
                  height={60}
                  className="object-contain"
                  unoptimized={true}
                />
              </div>
            </a>
            <p className="text-white/30 text-sm font-light leading-relaxed mt-6 max-w-sm">
              Elegancki mobilny bar na przyjęcia, wesela i eventy firmowe.
              Tworzymy koktajle, które zostają w pamięci na długo po zakończeniu
              imprezy.
            </p>
          </div>

          <div>
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
                    className="text-white/30 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:669201223"
                  className="flex items-center gap-3 text-white/30 hover:text-gold text-sm transition-colors duration-300"
                >
                  <FiPhone className="w-4 h-4 text-gold/60" />
                  669 201 223
                </a>
              </li>
              <li>
                <a
                  href="mailto:wiczkowski47@gmail.com"
                  className="flex items-center gap-3 text-white/30 hover:text-gold text-sm transition-colors duration-300"
                >
                  <FiMail className="w-4 h-4 text-gold/60" />
                  wiczkowski47@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                {[
                  { icon: FiInstagram, href: "#" },
                  { icon: FiFacebook, href: "#" },
                  { icon: FaTiktok, href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-gold hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Heaven Taste Bar. Wszystkie prawa
            zastrzeżone.
          </p>

          <div className="flex items-center gap-4 text-white/20 text-xs">
            <a href="#" className="hover:text-white/40 transition-colors">
              Polityka Prywatności
            </a>
            <span>•</span>
            <a
              href="https://klaudiuszdev.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold/50 transition-colors"
            >
              Realizacja: klaudiuszdev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
