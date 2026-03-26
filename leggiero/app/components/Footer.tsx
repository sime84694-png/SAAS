import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
  { label: "B2B", href: "#b2b" },
  { label: "Karijere", href: "#karijere" },
];

function InstagramIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "#instagram" },
  { icon: FacebookIcon, label: "Facebook", href: "#facebook" },
  { icon: YoutubeIcon, label: "YouTube", href: "#youtube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C1E16] text-[#F5F0EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <span
              className="text-3xl font-black tracking-tight block mb-3 text-[#F5F0EA]"
              style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
            >
              Leggiero
            </span>
            <p className="text-sm leading-relaxed max-w-xs text-[#F5F0EA]/50">
              Tvoje utočište od svakodnevice. Svaka kava, svaki zalogaj – s
              ljubavlju pripremljeni samo za tebe.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#F5F0EA]/60 border border-[#F5F0EA]/15 hover:text-[#C8A97E] hover:border-[#C8A97E]/50 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5 text-[#C8A97E]"
              style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
            >
              Navigacija
            </h4>
            <nav className="flex flex-col gap-3">
              {["O nama", "Jelovnik", "Lokacije", "Leggiero Food", "Kontakt"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-[#F5F0EA]/60 hover:text-[#F5F0EA] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Quick links + hours */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5 text-[#C8A97E]"
              style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
            >
              Informacije
            </h4>
            <nav className="flex flex-col gap-3 mb-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#F5F0EA]/60 hover:text-[#F5F0EA] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Opening hours */}
            <div className="p-4 rounded-2xl border border-[#F5F0EA]/10 bg-[#F5F0EA]/5">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1 text-[#C8A97E]">
                Radno vrijeme
              </p>
              <p className="text-sm text-[#F5F0EA]/70">Pon – Pet: 08:00 – 22:00</p>
              <p className="text-sm text-[#F5F0EA]/70">Sub – Ned: 09:00 – 22:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F5F0EA]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#F5F0EA]/40">
            © {new Date().getFullYear()} Leggiero. Sva prava pridržana.
          </p>
          <p className="text-xs text-[#F5F0EA]/30">
            Dizajnirano s ljubavlju ☕ u Zagrebu
          </p>
        </div>
      </div>
    </footer>
  );
}
