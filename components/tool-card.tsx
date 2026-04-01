"use client"

import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToolCardProps {
  id: string
  name: string
  category: string
  description: string
  featured?: boolean
  rating?: number
}

export function ToolCard({ id, name, category, description, featured, rating = 4.5 }: ToolCardProps) {
  return (
    <Link href={`/tools/${id}`} className="group block">
      <div className={cn(
        "relative p-6 rounded-2xl border overflow-hidden hover-lift",
        featured 
          ? "glass-card border-primary/25 gold-glow" 
          : "bg-card/40 border-border/40 hover:border-primary/20"
      )}>
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        
        {/* Top gradient line for featured */}
        {featured && (
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        )}
        
        <div className="relative">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-4">
            {/* Category badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8 backdrop-blur-sm">
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">{category}</span>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1 text-muted-foreground">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          </div>
          
          {/* Tool name */}
          <h3 className="text-lg font-bold text-foreground mb-2.5 group-hover:text-gold-gradient transition-all duration-300">
            {name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
            {description}
          </p>
          
          {/* View details link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <span className="relative">
              View Details
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export function ToolCardSkeleton() {
  return (
    <div className="relative p-6 rounded-2xl border border-border/30 bg-card/20 overflow-hidden shimmer">
      <div className="flex items-start justify-between mb-4">
        <div className="h-7 w-24 bg-muted/30 rounded-full" />
        <div className="h-4 w-10 bg-muted/30 rounded" />
      </div>
      <div className="h-6 w-3/4 bg-muted/30 rounded mb-2.5" />
      <div className="space-y-2 mb-5">
        <div className="h-4 w-full bg-muted/30 rounded" />
        <div className="h-4 w-2/3 bg-muted/30 rounded" />
      </div>
      <div className="h-5 w-28 bg-muted/30 rounded" />
    </div>
  )
}
