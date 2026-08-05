import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

type TopbarProps = {
  data: {
    numerTelefonu: string;
    numerTelefonuWahtshap: string;
    email: string;

    socialMedia: {
      facebook: string;
      instagram: string;
      tiktok: string;
    };
  };
};

export default function Topbar({ data }: TopbarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-navy-dark border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-10 flex items-center justify-between">
        {/* Telefon */}
        <a
          href={`tel:${data.numerTelefonu}`}
          className="flex items-center gap-2 text-gold/60 hover:text-gold transition-colors duration-300"
        >
          <FiPhone className="w-3 h-3" />

          <span className="text-[11px] font-medium tracking-wide">
            {data.numerTelefonu}
          </span>
        </a>

        {/* Social media */}
        <div className="hidden md:flex items-center gap-4">
          {data.socialMedia.instagram && (
            <>
              <a
                href={data.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/25 hover:text-gold transition-colors duration-300"
              >
                <FaInstagram className="w-3 h-3" />
              </a>

              <span className="text-white/10">|</span>
            </>
          )}

          {data.socialMedia.facebook && (
            <>
              <a
                href={data.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/25 hover:text-gold transition-colors duration-300"
              >
                <FaFacebookF className="w-3 h-3" />
              </a>

              <span className="text-white/10">|</span>
            </>
          )}

          {data.socialMedia.tiktok && (
            <a
              href={data.socialMedia.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-gold transition-colors duration-300"
            >
              <FaTiktok className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Email */}
        <a
          href={`mailto:${data.email}`}
          className="flex items-center gap-2 text-gold/60 hover:text-gold transition-colors duration-300"
        >
          <FiMail className="w-3 h-3" />

          <span className="text-[11px] font-medium tracking-wide hidden sm:inline">
            {data.email}
          </span>
        </a>
      </div>
    </div>
  );
}
