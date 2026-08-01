import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-navy-dark border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-10 flex items-center justify-between">
        <a
          href="tel:669201223"
          className="flex items-center gap-2 text-gold/60 hover:text-gold transition-colors duration-300"
        >
          <FiPhone className="w-3 h-3" />
          <span className="text-[11px] font-medium tracking-wide">
            669 201 223
          </span>
        </a>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/heaventastebar"
            className="text-white/25 hover:text-gold transition-colors duration-300"
          >
            <FaInstagram className="w-3 h-3" />
          </a>
          <span className="text-white/10">|</span>
          <a
            href="https://www.facebook.com/heaventastebar"
            className="text-white/25 hover:text-gold transition-colors duration-300"
          >
            <FaFacebookF className="w-3 h-3" />
          </a>
          <span className="text-white/10">|</span>
          <a
            href="www.tiktok.com/@.heaventastebar"
            className="text-white/25 hover:text-gold transition-colors duration-300"
          >
            <FaTiktok className="w-3 h-3" />
          </a>
        </div>

        <a
          href="mailto:kontakt@heaventastebar.pl"
          className="flex items-center gap-2 text-gold/60 hover:text-gold transition-colors duration-300"
        >
          <FiMail className="w-3 h-3" />
          <span className="text-[11px] font-medium tracking-wide hidden sm:inline">
            kontakt@heaventastebar.pl
          </span>
        </a>
      </div>
    </div>
  );
}
