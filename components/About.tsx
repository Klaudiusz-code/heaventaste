"use client";

import { useState, useRef, useEffect } from "react";
import { FiVolume2, FiVolumeX, FiCheck } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

interface AboutProps {
  data: {
    naglowekGlowny: string;
    opis: string;
    cytat: string;

    videoAbout: {
      node: {
        mediaItemUrl: string;
      };
    } | null;

    benefity: {
      tekst: string;
    }[];

    whatsapp: string;
    instagram: string;
  };
}

function getInstagramDmLink(url: string): string {
  if (!url) return "#";
  try {
    const match = url.match(/instagram\.com\/([^/?#]+)/);
    if (match) return `https://ig.me/m/${match[1]}`;
  } catch {}
  return url;
}

export default function About({ data }: AboutProps) {
  const [muted, setMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const dmLink = getInstagramDmLink(data.instagram);
  return (
    <section
      id="o-nas"
      className="py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cream/30 -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative group md:max-w-lg lg:max-w-none mx-auto lg:mx-0 w-full">
            <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 border-gold/20 shadow-2xl shadow-navy/20 relative bg-navy">
              <video
                ref={videoRef}
                src={data.videoAbout?.node.mediaItemUrl || "/vhs2.mp4"}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{
                  filter: "contrast(1.15) saturate(0.85) sepia(0.15)",
                }}
              />

              <div
                className="absolute inset-0 z-[5] pointer-events-none opacity-40 mix-blend-multiply"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 1px, transparent 1px, transparent 3px)",
                }}
              />

              <div className="absolute inset-0 z-[6] pointer-events-none bg-radial-[ellipse_at_center] from-transparent via-transparent to-black/50" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-[7] pointer-events-none" />

              <button
                onClick={toggleMute}
                className="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
              >
                {muted ? (
                  <FiVolumeX className="w-5 h-5 text-white" />
                ) : (
                  <FiVolume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10 hidden md:block" />

            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-gold/10 rounded-2xl -z-10 hidden md:block" />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-px w-8 bg-gold" />

              <span className="text-gold-dark text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                O nas
              </span>
            </div>

            <h2
              className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-navy tracking-tight leading-[1.15]"
              dangerouslySetInnerHTML={{
                __html: data.naglowekGlowny,
              }}
            />

            <div className="w-16 h-[2px] bg-gold/30 my-5 md:my-8" />

            <div
              className="text-navy/60 text-sm md:text-base lg:text-lg font-light leading-relaxed [&_strong]:text-navy/90 [&_strong]:font-medium [&_p]:mb-3"
              dangerouslySetInnerHTML={{
                __html: data.opis,
              }}
            />

            <div className="bg-cream/60 border-l-4 border-gold pl-5 py-4 mt-6 md:mt-8 rounded-r-lg">
              <p
                className="text-navy/70 text-xs md:text-sm font-light leading-relaxed italic [&_strong]:text-navy [&_strong]:font-medium [&_strong]:not-italic"
                dangerouslySetInnerHTML={{
                  __html: data.cytat,
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-6 mt-8 md:mt-10">
              {data.benefity?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 md:gap-3 group/feat"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-gold flex items-center justify-center">
                      <FiCheck className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <span className="text-navy/70 text-[11px] md:text-sm font-medium leading-tight">
                    {item.tekst}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={dmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 md:mt-10 inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white text-[11px] sm:text-xs md:text-sm font-semibold px-4 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl hover:shadow-xl hover:shadow-pink-500/25 hover:-translate-y-0.5 transition-all duration-300 group/btn whitespace-nowrap"
            >
              <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="hidden xs:inline">
                Szybki kontakt w DM na Instagram
              </span>
              <span className="xs:hidden">Napisz w DM</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
