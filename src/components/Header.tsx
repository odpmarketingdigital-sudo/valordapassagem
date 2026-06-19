"use client";

import { useState } from "react";
import Link from "next/link";
import { Bus, Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const navLinks = [
  { href: "/passagens", label: "Passagens" },
  { href: "/empresas", label: "Empresas" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <Bus className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <span className="font-bold text-primary-dark text-base sm:text-lg leading-tight group-hover:text-primary transition-colors">
              {SITE.name}
            </span>
            <p className="hidden sm:block text-xs text-slate-500 leading-tight">
              Preços de passagens de ônibus
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-4 py-3 md:hidden"
          aria-label="Navegação mobile"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
