"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nutricion", label: "Nutricion" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-primary">
              JJCATERING
            </span>
            <span className="text-sm font-light text-muted-foreground">
              S.A.S.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/5939984507444"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground md:block"
          >
            Cotizacion Inmediata
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground md:hidden"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-primary/20 bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5939984507444"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block border border-primary px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Cotizacion Inmediata
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
