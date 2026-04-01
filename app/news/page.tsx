import { Newspaper, Sparkles, KeyRound, RefreshCw } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { fetchAINews } from "@/lib/news"
import { NewsGrid } from "@/app/news/news-grid"

export const metadata = {
  title: "AI News - Netra",
  description: "Stay updated with the latest developments in artificial intelligence.",
}

// Force dynamic so revalidate works correctly
export const dynamic = "force-dynamic"

export default async function NewsPage() {
  const { articles, error } = await fetchAINews()

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-5">
              <Newspaper className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Latest Updates</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-4 tracking-tight">
              AI News
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Stay updated with the latest developments in artificial intelligence.
            </p>
          </div>

          {/* No API key state */}
          {error === "no_key" && (
            <div className="glass-card border border-primary/20 rounded-3xl p-10 lg:p-14 text-center gold-glow animate-fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6">
                <KeyRound className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-3">API Key Required</h3>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
                To display live AI news, add your free NewsAPI key to <code className="px-2 py-0.5 rounded bg-card border border-border/50 text-primary text-sm font-mono">.env.local</code>
              </p>
              <div className="inline-block text-left bg-card/60 border border-border/40 rounded-xl px-6 py-4 font-mono text-sm text-muted-foreground mb-8">
                <span className="text-primary/60"># .env.local</span>
                <br />
                <span className="text-primary">NEWS_API_KEY</span>=your_key_here
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://newsapi.org/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gold-gradient text-primary-foreground font-bold btn-gold shadow-xl shadow-primary/20"
                >
                  <Sparkles className="w-4 h-4" />
                  Get Free API Key
                </a>
                <p className="text-xs text-muted-foreground">Free tier · 100 requests/day · No credit card</p>
              </div>
            </div>
          )}

          {/* API error state */}
          {error && error !== "no_key" && (
            <div className="glass-card border border-border/30 rounded-3xl p-10 text-center animate-fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-card/60 border border-border/30 flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Failed to load news</h3>
              <p className="text-muted-foreground max-w-md mx-auto text-sm">
                {error}. Check your API key in <code className="text-primary font-mono">.env.local</code> and restart the dev server.
              </p>
            </div>
          )}

          {/* Success state */}
          {!error && articles.length > 0 && (
            <>
              {/* Live indicator */}
              <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-xs text-primary font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Live · refreshes every 30 min · sorted by latest
              </div>

              <NewsGrid articles={articles} />
            </>
          )}

        </div>
      </main>

      <Footer />
    </div>
  )
}
