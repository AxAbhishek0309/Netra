export interface NewsArticle {
  title: string
  description: string
  url: string
  urlToImage: string | null
  source: { name: string }
  publishedAt: string
}

export async function fetchAINews(): Promise<{ articles: NewsArticle[]; error?: string }> {
  const apiKey = process.env.NEWS_API_KEY

  if (!apiKey || apiKey === "your_api_key_here") {
    return { articles: [], error: "no_key" }
  }

  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=artificial+intelligence+OR+%22AI+tools%22+OR+%22machine+learning%22+OR+%22large+language+model%22&language=en&sortBy=publishedAt&pageSize=12&apiKey=${apiKey}`,
      {
        next: { revalidate: 1800 }, // refresh every 30 minutes
      }
    )

    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.message || "API error")
    }

    const data = await res.json()

    if (data.status !== "ok") throw new Error(data.message || "API error")

    // Filter out articles with removed content or missing fields
    const articles: NewsArticle[] = (data.articles as NewsArticle[])
      .filter(
        (a) =>
          a.title &&
          a.title !== "[Removed]" &&
          a.url &&
          a.description &&
          a.description !== "[Removed]"
      )
      .slice(0, 12)

    return { articles }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return { articles: [], error: message }
  }
}

export function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(diff / 3600000)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" })
}
