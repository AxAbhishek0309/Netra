"use client"

import { useState, useMemo } from "react"
import { Search, X, Newspaper } from "lucide-react"
import { NewsCard } from "@/components/news-card"
import type { NewsArticle } from "@/lib/news"

interface NewsGridProps {
  articles: NewsArticle[]
}

export function NewsGrid({ articles }: NewsGridProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return articles
    const q = searchQuery.toLowerCase()
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.description?.toLowerCase().includes(q) ||
        a.source.name.toLowerCase().includes(q)
    )
  }, [articles, searchQuery])

  return (
    <>
      {/* Search Bar */}
      <div className="relative max-w-2xl mb-10">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
        <input
          type="text"
          placeholder="Search news by title, topic, or source..."
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

      {/* Results count */}
      <div className="mb-8">
        <p className="text-sm text-muted-foreground">
          Showing <span className="text-foreground font-semibold">{filtered.length}</span> articles
          {searchQuery && (
            <span> matching &ldquo;<span className="text-primary">{searchQuery}</span>&rdquo;</span>
          )}
        </p>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, index) => (
            <NewsCard
              key={`${article.url}-${index}`}
              title={article.title}
              description={article.description ?? ""}
              url={article.url}
              urlToImage={article.urlToImage}
              sourceName={article.source.name}
              publishedAt={article.publishedAt}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="w-20 h-20 rounded-2xl bg-card/40 border border-border/30 flex items-center justify-center mx-auto mb-6">
            <Newspaper className="w-9 h-9 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">No articles found</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            No news matched your search. Try a different keyword.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-card/80 hover:border-primary/30 transition-all duration-300"
          >
            <Search className="w-4 h-4 text-primary" />
            Clear search
          </button>
        </div>
      )}
    </>
  )
}
