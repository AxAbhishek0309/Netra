"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/compare", label: "Compare" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "glass-navbar py-2" 
          : "bg-transparent py-4"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150" />
              <Sparkles className="relative h-7 w-7 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gold-gradient">
              Netra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1 p-1.5 rounded-full bg-card/30 backdrop-blur-sm border border-border/30">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  pathname === link.href
                    ? "text-primary-foreground bg-gold-gradient shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/tools"
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full bg-gold-gradient text-primary-foreground btn-gold"
            >
              Get Started
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden relative p-2.5 text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-card/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "absolute inset-0 transition-all duration-300",
                mobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
              )} />
              <X className={cn(
                "absolute inset-0 transition-all duration-300",
                mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-out",
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="pb-6 pt-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-300",
                  pathname === link.href
                    ? "bg-gold-gradient text-primary-foreground shadow-lg shadow-primary/10"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/tools"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-sm font-semibold rounded-xl bg-gold-gradient text-primary-foreground btn-gold"
              >
                Get Started
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
