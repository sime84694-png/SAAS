import { ArrowRight, Flame, Leaf, Clock } from "lucide-react";

const features = [
  { icon: Flame, label: "Topla jela" },
  { icon: Leaf, label: "Svježe salate" },
  { icon: Clock, label: "Brza usluga" },
];

export default function LeggieroFood() {
  return (
    <section id="leggiero-food" className="py-20 lg:py-28 bg-[#F5F0EA] relative overflow-hidden">
      {/* Decorative background shape */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
        style={{ background: "#4A5D4E" }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 bottom-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: "#C8A97E" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#4A5D4E]/20 to-[#2C1E16]/20 min-h-[420px] flex items-center justify-center shadow-2xl">
              {/* Inner card mock – self-service food display */}
              <div className="w-full h-full flex flex-col">
                {/* Top bar */}
                <div className="bg-[#4A5D4E] px-6 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                  </div>
                  <span className="text-white/70 text-xs font-medium tracking-widest uppercase">
                    Leggiero Food – Bogovićeva
                  </span>
                </div>

                {/* Food grid mock */}
                <div className="flex-1 p-6 grid grid-cols-3 gap-3">
                  {[
                    { emoji: "🍜", label: "Varivo dana" },
                    { emoji: "🍱", label: "Sushi box" },
                    { emoji: "🥗", label: "Svježa salata" },
                    { emoji: "🍛", label: "Azijska kuhinja" },
                    { emoji: "🫙", label: "Juhe" },
                    { emoji: "🥩", label: "Meso na žaru" },
                  ].map((food, i) => (
                    <div
                      key={i}
                      className="bg-white/80 rounded-xl p-3 flex flex-col items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="text-3xl">{food.emoji}</span>
                      <span className="text-[10px] font-semibold text-[#2C1E16]/60 text-center leading-tight">
                        {food.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom label */}
                <div className="bg-[#2C1E16]/5 px-6 py-2 text-center">
                  <span className="text-[10px] text-[#2C1E16]/30 tracking-widest uppercase">
                    [Self-Service Food Display Placeholder]
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#C8A97E] text-[#2C1E16] rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-xs font-semibold tracking-widest uppercase opacity-70">Lokacija</p>
              <p className="text-base font-black" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
                Bogovićeva
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C8A97E] mb-4 block">
              Novi gastro koncept
            </span>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#2C1E16] leading-tight mb-6"
              style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
            >
              Brzo, svježe, ukusno:{" "}
              <span className="text-[#4A5D4E]">Leggiero Food.</span>
            </h2>
            <p className="text-base text-[#2C1E16]/65 leading-relaxed mb-8">
              Upoznajte naš novi gastro koncept u Bogovićevoj. Bilo da trebate
              gotova variva, azijski sushi ili svježe salate – naš self-service
              princip štedi vaše vrijeme bez kompromisa na kvaliteti.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E]"
                >
                  <Icon size={15} />
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#dnevni-meni"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-base font-semibold text-white bg-[#4A5D4E] hover:bg-[#3a4d3e] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              Provjeri Dnevni Meni
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
