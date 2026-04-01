import Link from "next/link"
import { Sparkles, ArrowUpRight } from "lucide-react"

const footerLinks = {
  product: [
    { href: "/tools", label: "Browse Tools" },
    { href: "/compare", label: "Compare Tools" },
    { href: "/about", label: "About Us" },
  ],
  categories: [
    { href: "/tools?category=nlp", label: "NLP Tools" },
    { href: "/tools?category=image", label: "Image AI" },
    { href: "/tools?category=productivity", label: "Productivity" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-[#060606]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="relative">
                <div className="absolute inset-0 blur-lg bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Sparkles className="relative h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <span className="text-xl font-bold text-gold-gradient">Netra</span>
            </Link>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Discover and compare the best AI tools. Make informed decisions with comprehensive pricing and feature comparisons.
            </p>
            
            {/* Newsletter mini form */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-foreground mb-2.5 uppercase tracking-wide">Stay Updated</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 text-sm rounded-xl bg-card/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
                <button className="px-4 py-2.5 rounded-xl bg-gold-gradient text-primary-foreground text-sm font-semibold btn-gold">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wide">Product</h3>
            <ul className="space-y-3.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wide">Categories</h3>
            <ul className="space-y-3.5">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wide">Legal</h3>
            <ul className="space-y-3.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Netra. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Social links with premium hover effects */}
              <Link 
                href="#" 
                className="group p-2.5 rounded-xl bg-card/30 border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link 
                href="#" 
                className="group p-2.5 rounded-xl bg-card/30 border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="#" 
                className="group p-2.5 rounded-xl bg-card/30 border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
