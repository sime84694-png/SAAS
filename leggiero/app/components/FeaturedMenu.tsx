const menuItems = [
  {
    id: 1,
    title: "Torta Dubai čokolada",
    description:
      "Čokoladni biskvit, hrskavi kadaif s praline pistacijom.",
    price: "5,40 €",
    tag: "Slastice",
    emoji: "🍫",
    gradient: "from-amber-900/20 to-amber-700/10",
  },
  {
    id: 2,
    title: "Smokey Turkey Bagel",
    description:
      "Dimljena pureća prsa, polutvrdi sir i majoneza u pecivu sa sezamom.",
    price: "4,20 €",
    tag: "Hrana",
    emoji: "🥯",
    gradient: "from-stone-700/20 to-stone-500/10",
  },
  {
    id: 3,
    title: "Osvježenje",
    description:
      "Ledene kave i ljetni kokteli (Palomatic, Daj Gin).",
    price: null,
    tag: "Pića",
    emoji: "🧋",
    gradient: "from-green-900/20 to-teal-700/10",
  },
];

export default function FeaturedMenu() {
  return (
    <section id="jelovnik" className="py-20 lg:py-28 bg-[#F5F0EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C8A97E] mb-3 block">
            Što nudimo
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black text-[#2C1E16] mb-4"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Istaknuta ponuda
          </h2>
          <p className="max-w-xl mx-auto text-[#2C1E16]/60 text-base leading-relaxed">
            Od premijum slastica do svježih bagela – svaki zalogaj i gutljaj
            pažljivo je odabran za tvoj odmor.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image placeholder */}
              <div
                className={`relative h-52 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[#2C1E16]/5" />
                <span className="text-7xl select-none">{item.emoji}</span>
                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#2C1E16] shadow-sm">
                  {item.tag}
                </span>
                {/* Placeholder label */}
                <span className="absolute bottom-2 right-3 text-[10px] text-[#2C1E16]/30 tracking-widest uppercase">
                  [Slika]
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-xl font-bold text-[#2C1E16] mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#2C1E16]/60 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Price + action */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#F5F0EA]">
                  {item.price ? (
                    <span className="text-2xl font-black text-[#C8A97E]">
                      {item.price}
                    </span>
                  ) : (
                    <span className="text-sm font-medium text-[#4A5D4E]">
                      Sezonska ponuda
                    </span>
                  )}
                  <button className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#4A5D4E] hover:bg-[#3a4d3e] transition-colors">
                    Naruči
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA link */}
        <div className="text-center mt-10">
          <a
            href="#jelovnik"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A5D4E] hover:text-[#2C1E16] transition-colors border-b-2 border-[#4A5D4E]/30 hover:border-[#2C1E16] pb-0.5"
          >
            Pogledaj cijeli jelovnik
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
