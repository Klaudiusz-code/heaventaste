"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-10 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-navy shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-16 w-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo-taste.svg"
                alt="Heaven Taste"
                width={50}
                height={50}
                className="object-contain"
                unoptimized={true}
              />
            </div>
          </a>

          <div className="hidden lg:flex items-center">
            {links.map((link, i) => (
              <Fragment key={link.href}>
                {i > 0 && (
                  <span
                    className={`mx-1 text-sm select-none transition-colors duration-500 ${
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

            <div
              className={`w-px h-5 mx-4 transition-colors duration-500 ${
                scrolled ? "bg-white/10" : "bg-navy/10"
              }`}
            />

            <div className="flex items-center gap-2">
              <a
                href="#kontakt"
                className="bg-gold text-navy text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gold-light transition-colors duration-300"
              >
                Zarezerwuj
              </a>
              <a
                href="https://www.instagram.com/heaventastebar"
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  scrolled
                    ? "bg-white/5 border border-white/10 text-white/60 hover:bg-gold/20 hover:text-gold hover:border-gold/30"
                    : "bg-navy/5 border border-navy/10 text-navy/50 hover:bg-gold/10 hover:text-gold-dark hover:border-gold/30"
                }`}
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-500 ${
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

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-dark border-t border-white/5 px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {links.map((link, i) => (
            <Fragment key={link.href}>
              {i > 0 && (
                <div className="flex items-center gap-3 pl-4">
                  <div className="w-4 h-px bg-white/10" />
                  <span className="text-white/15 text-[10px] uppercase tracking-widest">
                    {links[i - 1].label}
                  </span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
              )}
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/70 hover:text-gold text-sm font-medium px-4 py-3 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            </Fragment>
          ))}
          <div className="flex items-center gap-2 mt-4 px-4">
            <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="flex-1 block text-center bg-gold text-navy text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gold-light transition-colors"
            >
              Zarezerwuj
            </a>
            <a
              href="https://www.instagram.com/heaventastebar"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-gold/20 hover:text-gold transition-all"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
