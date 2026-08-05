import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#061626]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08),transparent_65%)]" />

      <div className="relative flex flex-col items-center">
        <div className="relative flex items-center justify-center w-52 h-52">
          <div className="absolute inset-0 rounded-full border border-[#C5A059]/15" />

          <div className="absolute inset-3 rounded-full border border-[#C5A059]/10" />

          <div className="absolute inset-0 animate-[spin_6s_linear_infinite]">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C5A059] shadow-[0_0_25px_rgba(197,160,89,.9)]" />
          </div>

          <div className="absolute inset-5 animate-[spin_4s_linear_reverse_infinite]">
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#E7C67D] shadow-[0_0_20px_rgba(231,198,125,.9)]" />
          </div>

          <div className="absolute inset-10 animate-[spin_8s_linear_infinite]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C5A059]" />
          </div>

          <div className="relative z-10 animate-pulse">
            <Image
              src="/logo-taste.svg"
              alt="Heaven Taste Bar"
              width={90}
              height={90}
              priority
              unoptimized
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#C5A059] uppercase tracking-[0.45em] text-xs font-semibold">
            Heaven Taste Bar
          </p>

          <p className="mt-3 text-white/55 text-sm font-light">
            Przygotowujemy wyjątkowe doświadczenie...
          </p>

          <div className="mt-6 w-52 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <div className="h-full w-1/3 bg-[#C5A059] animate-[loading_1.6s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

    </div>
  );
}
