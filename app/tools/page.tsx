"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, X, Sparkles } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ToolCard } from "@/components/tool-card"
import { tools, categories } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTools = useMemo(() => {
    let result = tools

    if (activeCategory !== "all") {
      result = result.filter(
        (tool) => tool.category.toLowerCase() === activeCategory.toLowerCase()
      )
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query)
      )
    }

    return result
  }, [searchQuery, activeCategory])

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Browse Collection</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-4 tracking-tight">
              Browse AI Tools
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Discover the perfect AI tool for your needs from our curated collection of premium tools.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search tools by name, category, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-12 py-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                    activeCategory === category.id
                      ? "bg-gold-gradient text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                      : "bg-card/40 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card/60"
                  )}
                >
                  {category.name}
                  <span className={cn(
                    "ml-2 text-xs",
                    activeCategory === category.id ? "opacity-80" : "opacity-50"
                  )}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="text-foreground font-semibold">{filteredTools.length}</span> tools
              {activeCategory !== "all" && (
                <span> in <span className="text-primary font-medium">{categories.find(c => c.id === activeCategory)?.name}</span></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;<span className="text-primary">{searchQuery}</span>&rdquo;</span>
              )}
            </p>
            {(activeCategory !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                }}
                className="text-sm text-primary font-medium hover:underline underline-offset-4"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Tools Grid */}
          {filteredTools.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <div 
                  key={tool.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
                >
                  <ToolCard
                    id={tool.id}
                    name={tool.name}
                    category={tool.category}
                    description={tool.description}
                    featured={tool.featured}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-2xl bg-card/40 border border-border/30 flex items-center justify-center mx-auto mb-6">
                <Search className="w-9 h-9 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">No tools found</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                We couldn&apos;t find any tools matching your criteria. Try adjusting your search or filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-card/80 hover:border-primary/30 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
