import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder – warm café gradient with a subtle pattern overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#3b2c1a] via-[#4a3828] to-[#2e4030]"
        aria-hidden="true"
      />

      {/* Noise / texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Decorative warm circle blobs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "#C8A97E" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "#4A5D4E" }}
        aria-hidden="true"
      />

      {/* Placeholder image label */}
      <div className="absolute top-6 right-6 text-xs text-white/40 font-medium tracking-widest uppercase hidden lg:block">
        [Placeholder: Moderna kafeterija]
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 border border-[#C8A97E]/40 text-[#C8A97E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] animate-pulse" />
          Lavazza · Torterie Macaron · Premium Ambijent
        </span>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight mb-6"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          Tvoj godišnji{" "}
          <span className="text-[#C8A97E]">usred dana.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/75 leading-relaxed mb-10">
          Pobjegni od svakodnevnog stresa. Uživaj u savršenoj Lavazza kavi,
          svježim sokovima i premium Torterie Macaron slasticama u ugodnom
          ambijentu.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#jelovnik"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white bg-[#4A5D4E] hover:bg-[#3a4d3e] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Istraži Jelovnik
          </Link>
          <Link
            href="#lokacije"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-[#2C1E16] bg-[#C8A97E] hover:bg-[#b8956a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Pronađi najbliži bar
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Sazni više</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
