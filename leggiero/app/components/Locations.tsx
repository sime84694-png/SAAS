import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    name: "Arena Centar",
    address: "Lanište ul. 26, Zagreb",
    hours: "Otvara u 08:00",
    badge: "Popularno",
  },
  {
    name: "Supernova Jankomir",
    address: "Oreškovićeva ul. 4H, Zagreb",
    hours: "Otvara u 08:00",
    badge: null,
  },
  {
    name: "City Center One",
    address: "Avenija Dubrovnik 16, Zagreb",
    hours: "Otvara u 08:00",
    badge: null,
  },
  {
    name: "Savica",
    address: "Savica, Zagreb",
    hours: "Otvara u 08:00",
    badge: "Novo",
  },
];

export default function Locations() {
  return (
    <section id="lokacije" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C8A97E] mb-3 block">
            Gdje smo
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black text-[#2C1E16] mb-4"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Lokacije
          </h2>
          <p className="max-w-xl mx-auto text-[#2C1E16]/60 text-base leading-relaxed">
            Pronađi Leggiero bar koji ti je najbliži i počni dan kako zaslužuješ.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Map placeholder */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg bg-[#e8e2d9] min-h-[420px] flex flex-col items-center justify-center">
            {/* Fake map grid */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2C1E16" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Fake roads */}
            <div className="absolute inset-0 opacity-30">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#2C1E16" strokeWidth="3" />
                <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#2C1E16" strokeWidth="1.5" />
                <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#2C1E16" strokeWidth="3" />
                <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#2C1E16" strokeWidth="1.5" />
                <line x1="0" y1="20%" x2="40%" y2="55%" stroke="#2C1E16" strokeWidth="1" />
                <line x1="60%" y1="30%" x2="100%" y2="75%" stroke="#2C1E16" strokeWidth="1" />
              </svg>
            </div>

            {/* Map pins */}
            {[
              { top: "35%", left: "28%" },
              { top: "58%", left: "68%" },
              { top: "22%", left: "55%" },
              { top: "70%", left: "35%" },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute z-10 flex flex-col items-center"
                style={{ top: pos.top, left: pos.left, transform: "translate(-50%, -100%)" }}
              >
                <div className="w-8 h-8 rounded-full bg-[#4A5D4E] flex items-center justify-center shadow-lg border-2 border-white">
                  <MapPin size={14} color="white" />
                </div>
                <div className="w-1 h-2 bg-[#4A5D4E]" />
              </div>
            ))}

            {/* Overlay label */}
            <div className="relative z-10 text-center mt-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-md">
                <p className="text-xs font-semibold text-[#2C1E16]/50 tracking-widest uppercase mb-1">
                  [Google Maps Placeholder]
                </p>
                <p className="text-sm font-bold text-[#2C1E16]">Zagreb, Hrvatska</p>
              </div>
            </div>
          </div>

          {/* Right: Location list */}
          <div className="flex flex-col gap-4">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-[#F5F0EA] hover:bg-[#eee8df] transition-colors cursor-pointer border border-transparent hover:border-[#C8A97E]/30"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#4A5D4E]/10 group-hover:bg-[#4A5D4E] transition-colors flex items-center justify-center">
                  <MapPin size={18} className="text-[#4A5D4E] group-hover:text-white transition-colors" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3
                      className="font-bold text-[#2C1E16] text-base leading-tight"
                      style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                    >
                      {loc.name}
                    </h3>
                    {loc.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-[#C8A97E] text-[#2C1E16]">
                        {loc.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#2C1E16]/50 mt-0.5">{loc.address}</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <Clock size={12} className="text-[#4A5D4E]" />
                    <span className="text-xs font-medium text-[#4A5D4E]">{loc.hours}</span>
                  </div>
                </div>

                {/* Arrow */}
                <span className="flex-shrink-0 text-[#2C1E16]/20 group-hover:text-[#C8A97E] transition-colors text-lg mt-0.5">
                  →
                </span>
              </div>
            ))}

            {/* CTA */}
            <a
              href="#sve-lokacije"
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#4A5D4E] hover:bg-[#3a4d3e] transition-colors shadow-sm"
            >
              <MapPin size={16} />
              Sve lokacije
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
