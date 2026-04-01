"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { ChevronDown, Check, X, ExternalLink, ArrowRight, Sparkles, Scale, Search } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { tools, Tool } from "@/lib/data"
import { cn } from "@/lib/utils"

interface DropdownProps {
  label: string
  selectedTool: Tool | null
  onSelect: (tool: Tool) => void
  excludeId?: string
}

function ToolDropdown({ label, selectedTool, onSelect, excludeId }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  const availableTools = useMemo(() => {
    let filtered = excludeId ? tools.filter((t) => t.id !== excludeId) : tools
    if (search.trim()) {
      const query = search.toLowerCase()
      filtered = filtered.filter(t => 
        t.name.toLowerCase().includes(query) || 
        t.category.toLowerCase().includes(query)
      )
    }
    return filtered
  }, [excludeId, search])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-semibold text-foreground mb-3">
        {label}
      </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group w-full flex items-center justify-between px-5 py-4 rounded-xl bg-card/40 backdrop-blur-sm border text-left transition-all duration-300",
          isOpen 
            ? "border-primary/40 ring-2 ring-primary/20" 
            : "border-border/50 hover:border-primary/30"
        )}
      >
        <span className={selectedTool ? "text-foreground font-medium" : "text-muted-foreground"}>
          {selectedTool?.name || "Select a tool..."}
        </span>
        <ChevronDown className={cn(
          "w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-foreground",
          isOpen && "rotate-180 text-primary"
        )} />
      </button>

      {isOpen && (
        <div className="absolute z-20 w-full mt-3 rounded-xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/50 overflow-hidden animate-scale-in">
          {/* Search */}
          <div className="p-3 border-b border-border/30">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-muted/30 border border-border/30 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
            </div>
          </div>
          
          <div className="max-h-64 overflow-y-auto">
            {availableTools.length > 0 ? availableTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => {
                  onSelect(tool)
                  setIsOpen(false)
                  setSearch("")
                }}
                className={cn(
                  "w-full flex items-center gap-4 px-5 py-3.5 text-left transition-all duration-200 hover:bg-primary/10",
                  selectedTool?.id === tool.id && "bg-primary/15"
                )}
              >
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{tool.name}</div>
                  <div className="text-xs text-muted-foreground">{tool.category}</div>
                </div>
                {selectedTool?.id === tool.id && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </button>
            )) : (
              <div className="px-5 py-8 text-center text-muted-foreground text-sm">
                No tools found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

interface ComparisonRowProps {
  label: string
  value1: React.ReactNode
  value2: React.ReactNode
  highlighted?: boolean
}

function ComparisonRow({ label, value1, value2, highlighted }: ComparisonRowProps) {
  return (
    <div className={cn(
      "grid grid-cols-3 py-5 border-b border-border/20 transition-colors",
      highlighted && "bg-primary/5"
    )}>
      <div className="px-6 text-sm font-semibold text-muted-foreground">{label}</div>
      <div className="px-6 text-sm text-foreground text-center font-medium">{value1}</div>
      <div className="px-6 text-sm text-foreground text-center font-medium">{value2}</div>
    </div>
  )
}

export default function ComparePage() {
  const [tool1, setTool1] = useState<Tool | null>(null)
  const [tool2, setTool2] = useState<Tool | null>(null)

  const getStartingPrice = (tool: Tool) => {
    const freeOrLowest = tool.pricing.find(p => p.price === "Free") || tool.pricing[0]
    return freeOrLowest?.price || "N/A"
  }

  const getProPrice = (tool: Tool) => {
    const proPlan = tool.pricing.find(p => p.highlighted) || tool.pricing[1]
    return proPlan ? `${proPlan.price}${proPlan.period || ""}` : "N/A"
  }

  const getTotalFeatures = (tool: Tool) => {
    const allFeatures = tool.pricing.flatMap(p => p.features)
    return [...new Set(allFeatures)].length
  }

  const hasComparison = tool1 && tool2

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-5">
              <Scale className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Side by Side</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-5 tracking-tight">
              Compare AI Tools
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select two tools to see a detailed side-by-side comparison of their features and pricing.
            </p>
          </div>

          {/* Tool Selectors */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <ToolDropdown
              label="First Tool"
              selectedTool={tool1}
              onSelect={setTool1}
              excludeId={tool2?.id}
            />
            <ToolDropdown
              label="Second Tool"
              selectedTool={tool2}
              onSelect={setTool2}
              excludeId={tool1?.id}
            />
          </div>

          {/* Comparison Table */}
          {hasComparison ? (
            <div className="glass-card border border-primary/20 rounded-3xl overflow-hidden gold-glow animate-fade-in-up">
              {/* Header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-card/80 via-card/90 to-card/80 border-b border-border/30">
                <div className="px-6 py-6 text-sm font-bold text-muted-foreground uppercase tracking-wide">
                  Comparison
                </div>
                <div className="px-6 py-6 text-center border-l border-border/20">
                  <div className="font-bold text-foreground text-lg">{tool1.name}</div>
                  <div className="text-xs text-primary mt-1 font-medium">{tool1.category}</div>
                </div>
                <div className="px-6 py-6 text-center border-l border-border/20">
                  <div className="font-bold text-foreground text-lg">{tool2.name}</div>
                  <div className="text-xs text-primary mt-1 font-medium">{tool2.category}</div>
                </div>
              </div>

              {/* Rows */}
              <ComparisonRow
                label="Category"
                value1={tool1.category}
                value2={tool2.category}
              />
              <ComparisonRow
                label="Starting Price"
                value1={<span className="text-gold-gradient font-bold">{getStartingPrice(tool1)}</span>}
                value2={<span className="text-gold-gradient font-bold">{getStartingPrice(tool2)}</span>}
                highlighted
              />
              <ComparisonRow
                label="Pro Plan Price"
                value1={getProPrice(tool1)}
                value2={getProPrice(tool2)}
              />
              <ComparisonRow
                label="Available Plans"
                value1={tool1.pricing.length}
                value2={tool2.pricing.length}
              />
              <ComparisonRow
                label="Total Features"
                value1={getTotalFeatures(tool1)}
                value2={getTotalFeatures(tool2)}
                highlighted
              />
              <ComparisonRow
                label="Free Tier"
                value1={
                  tool1.pricing.some(p => p.price === "Free") ? (
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500/20">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/20">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                  )
                }
                value2={
                  tool2.pricing.some(p => p.price === "Free") ? (
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500/20">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/20">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                  )
                }
              />
              <ComparisonRow
                label="Enterprise Plan"
                value1={
                  tool1.pricing.some(p => p.name.toLowerCase().includes("enterprise") || p.price === "Custom") ? (
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500/20">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/20">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                  )
                }
                value2={
                  tool2.pricing.some(p => p.name.toLowerCase().includes("enterprise") || p.price === "Custom") ? (
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500/20">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/20">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                  )
                }
              />

              {/* Website Links */}
              <div className="grid grid-cols-3 py-6 bg-gradient-to-r from-card/50 via-card/70 to-card/50">
                <div className="px-6 text-sm font-bold text-muted-foreground">Visit Website</div>
                <div className="px-6 text-center">
                  <a
                    href={tool1.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-primary font-semibold hover:underline underline-offset-4 text-sm"
                  >
                    Visit
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <div className="px-6 text-center">
                  <a
                    href={tool2.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-primary font-semibold hover:underline underline-offset-4 text-sm"
                  >
                    Visit
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-card border border-border/30 rounded-3xl p-16 text-center animate-fade-in-up">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6">
                <Scale className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Select two tools to compare
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Use the dropdowns above to select the AI tools you want to compare side-by-side.
              </p>
            </div>
          )}

          {/* Pro Tip */}
          {hasComparison && (
            <div className="mt-10 p-7 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm animate-fade-in-up animate-delay-200">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Pro Tip</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Click on a tool&apos;s name in our comparison to view detailed pricing plans and features. Consider your specific needs when choosing between tools.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
