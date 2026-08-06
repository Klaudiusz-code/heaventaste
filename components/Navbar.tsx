"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

type NavbarProps = {
  data: {
    logo: {
      node: {
        sourceUrl: string;
      };
    };

    socialMedia: {
      instagram: string;
    };
  };
};

export default function Navbar({ data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "#o-nas", label: "O nas" },
    { href: "#uslugi", label: "Usługi" },
    { href: "#pakiety", label: "Pakiety" },
    { href: "#menu", label: "Menu" },
    { href: "#galeria", label: "Realizacje" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-10 left-0 right-0 py-1 z-40 transition-all duration-500 ${
        scrolled ? "bg-navy shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - lewa strona */}
          <a
            href="#"
            className="flex items-center -ml-4 lg:-ml-10 pl-6 lg:pl-8 group flex-shrink-0"
          >
            <div className="h-20 w-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src={data.logo.node.sourceUrl}
                alt="Heaven Taste Bar"
                width={70}
                height={70}
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Linki - wycentrowane, tylko desktop */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            {links.map((link, i) => (
              <Fragment key={link.href}>
                {i > 0 && (
                  <span
                    className={`mx-1 text-sm ${
                      scrolled ? "text-white/10" : "text-navy/10"
                    }`}
                  >
                    /
                  </span>
                )}

                <a
                  href={link.href}
                  className={`text-[13px] font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                    scrolled
                      ? "text-white/70 hover:text-gold hover:bg-white/5"
                      : "text-navy/70 hover:text-gold-dark hover:bg-navy/5"
                  }`}
                >
                  {link.label}
                </a>
              </Fragment>
            ))}
          </div>

          {/* Prawa strona - przycisk + Instagram, tylko desktop */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a
              href="#kontakt"
              className="bg-gold text-navy text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gold-light transition-colors duration-300"
            >
              Sprawdź termin
            </a>

            {data.socialMedia.instagram && (
              <a
                href={data.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  scrolled
                    ? "bg-white/5 border border-white/10 text-white/60 hover:text-gold hover:bg-gold/10 hover:border-gold/30"
                    : "bg-navy/5 border border-navy/10 text-navy/50 hover:text-gold-dark hover:bg-gold/10 hover:border-gold/30"
                }`}
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Przycisk mobilny - prawa strona */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors flex-shrink-0 ${
              scrolled ? "text-white" : "text-navy"
            }`}
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobilne */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-dark border-t border-white/5 px-6 py-4 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white/70 hover:text-gold text-sm font-medium px-4 py-3 rounded-lg hover:bg-white/5 transition"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-2 mt-4 px-4">
            <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center bg-gold text-navy text-sm font-semibold px-6 py-3 rounded-xl"
            >
              Sprawdź termin
            </a>

            {data.socialMedia.instagram && (
              <a
                href={data.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
