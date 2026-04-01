"use client"

import { Check, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText?: string
}

export function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  highlighted = false,
  ctaText = "Get Started",
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative p-7 rounded-2xl border overflow-hidden transition-all duration-500",
        highlighted
          ? "glass-card border-primary/30 gold-glow-strong scale-[1.02]"
          : "bg-card/30 border-border/40 hover:border-border/60 hover-lift"
      )}
    >
      {/* Animated gradient background for highlighted */}
      {highlighted && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/8 animate-pulse" />
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
          <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </>
      )}

      {/* Highlighted badge */}
      {highlighted && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full bg-gold-gradient text-primary-foreground shadow-lg shadow-primary/25 uppercase tracking-wide">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}

      <div className="relative">
        {/* Plan name */}
        <h3 className={cn(
          "text-lg font-bold mb-2",
          highlighted ? "text-foreground" : "text-foreground/90"
        )}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{description}</p>

        {/* Price */}
        <div className="mb-6">
          <span className={cn(
            "text-4xl font-extrabold tracking-tight",
            highlighted ? "text-gold-gradient" : "text-foreground"
          )}>
            {price}
          </span>
          {price !== "Free" && price !== "Custom" && (
            <span className="text-muted-foreground text-sm ml-1">{period}</span>
          )}
        </div>

        {/* CTA Button */}
        <button
          className={cn(
            "w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300",
            highlighted
              ? "bg-gold-gradient text-primary-foreground btn-gold shadow-lg shadow-primary/20"
              : "bg-secondary/80 text-secondary-foreground hover:bg-secondary border border-border/50"
          )}
        >
          {ctaText}
        </button>

        {/* Features */}
        <ul className="mt-7 space-y-3.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <div className={cn(
                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors",
                highlighted 
                  ? "bg-primary/20 group-hover:bg-primary/30" 
                  : "bg-muted group-hover:bg-muted/80"
              )}>
                <Check className={cn(
                  "w-3 h-3 transition-colors",
                  highlighted ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )} />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
