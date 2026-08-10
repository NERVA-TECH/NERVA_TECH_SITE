import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { cn } from "@/lib/utils";
import logoNerva from "@/assets/logo-nerva-transparente.png";

const navLinks = [
  { label: "Soluções", href: "/#servicos" },
  { label: "Como trabalhamos", href: "/#processo" },
  { label: "Cases", href: "/#cases" },
  { label: "Sobre", href: "/#tecnologia" },
];

export function Header() {
  const isSticky = useStickyHeader("hero-sentinel");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-background border-b border-border"
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="container mx-auto px-6 py-5 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src={logoNerva}
            alt="Nerva Tech"
            className="h-8 w-auto object-contain"
          />
          <span className="font-sans font-semibold text-foreground text-lg tracking-tight">
            Nerva
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA — Tines-style pill button */}
        <a
          href="/automatizar"
          className="hidden md:inline-flex items-center px-5 py-2 bg-foreground text-background font-mono text-xs uppercase tracking-[0.15em] rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Automatizar minha operação
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/automatizar"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-[0.15em] rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Automatizar minha operação
          </a>
        </div>
      )}
    </header>
  );
}
