import Link from "next/link";
import { SITE } from "@/lib/site";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/passagens", label: "Passagens" },
  { href: "/empresas", label: "Empresas" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
            VP
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

        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
