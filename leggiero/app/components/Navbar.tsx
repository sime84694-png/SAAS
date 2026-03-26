"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "O nama", href: "#o-nama" },
  { label: "Jelovnik", href: "#jelovnik" },
  { label: "Lokacije", href: "#lokacije" },
  { label: "Leggiero Food", href: "#leggiero-food" },
  { label: "Karijere", href: "#karijere" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0EA]/95 backdrop-blur-sm border-b border-[#C8A97E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-black tracking-tight text-[#2C1E16] hover:text-[#4A5D4E] transition-colors"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Leggiero
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#2C1E16]/80 hover:text-[#4A5D4E] transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="#naruci"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-[#2C1E16] bg-[#C8A97E] hover:bg-[#b8956a] transition-colors shadow-sm"
            >
              Naruči online
            </Link>
            <button
              className="lg:hidden p-2 text-[#2C1E16] hover:text-[#4A5D4E] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F5F0EA] border-t border-[#C8A97E]/20 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-base font-medium text-[#2C1E16] hover:text-[#4A5D4E] border-b border-[#C8A97E]/10 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#naruci"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-[#2C1E16] bg-[#C8A97E] hover:bg-[#b8956a] transition-colors"
            >
              Naruči online
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
