import { FiInstagram, FiArrowUpRight } from "react-icons/fi";
import { FaTiktok, FaFacebookF } from "react-icons/fa";

type SocialProps = {
  data: {
    naglowekSekcji: string;
    opisSekcji: string;

    facebook: {
      nazwaProfilu: string;
      url: string;
    };

    instagram: {
      nazwaProfilu: string;
      url: string;
    };

    tiktok: {
      nazwaprofilu: string;
      url: string;
    };
  };
};

export default function Social({ data }: SocialProps) {
  const socials = [
    {
      name: "Instagram",
      handle: data.instagram?.nazwaProfilu,
      action: "Obserwuj",
      icon: FiInstagram,
      hoverBg: "hover:bg-pink-500/10 hover:border-pink-500/20",
      iconColor: "text-pink-400",
      href: data.instagram?.url,
    },
    {
      name: "TikTok",
      handle: data.tiktok?.nazwaprofilu,
      action: "Zaobserwuj",
      icon: FaTiktok,
      hoverBg: "hover:bg-white/5 hover:border-white/10",
      iconColor: "text-white",
      href: data.tiktok?.url,
    },
    {
      name: "Facebook",
      handle: data.facebook?.nazwaProfilu,
      action: "Polub nas",
      icon: FaFacebookF,
      hoverBg: "hover:bg-blue-500/10 hover:border-blue-500/20",
      iconColor: "text-blue-400",
      href: data.facebook?.url,
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-gold text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
            Social Media
          </span>

          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-white mt-3 md:mt-4 tracking-tight leading-tight">
            {data.naglowekSekcji}
          </h2>

          <p className="text-white/40 text-sm md:text-lg font-light leading-relaxed mt-3 md:mt-4">
            {data.opisSekcji}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 ${social.hoverBg}`}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                <social.icon
                  className={`w-5 h-5 md:w-7 md:h-7 ${social.iconColor}`}
                />
              </div>

              <h3 className="text-white font-serif text-lg md:text-xl font-semibold mb-1">
                {social.name}
              </h3>

              <p className="text-white/30 text-xs md:text-sm font-light mb-4 md:mb-8">
                {social.handle}
              </p>

              <div className="mt-auto flex items-center gap-2 text-xs md:text-sm font-medium text-gold/70 group-hover:text-gold transition-colors duration-300">
                <span>{social.action}</span>
                <FiArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
