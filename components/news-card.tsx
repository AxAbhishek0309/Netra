import { ExternalLink, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { timeAgo } from "@/lib/news"

interface NewsCardProps {
  title: string
  description: string
  url: string
  urlToImage: string | null
  sourceName: string
  publishedAt: string
  index?: number
}

export function NewsCard({
  title,
  description,
  url,
  urlToImage,
  sourceName,
  publishedAt,
  index = 0,
}: NewsCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block animate-fade-in-up"
      style={{ animationDelay: `${Math.min(index, 8) * 80}ms` }}
    >
      <div className="relative h-full rounded-2xl border border-border/40 bg-card/40 overflow-hidden hover-lift transition-all duration-500 hover:border-primary/25 flex flex-col">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

        {/* Image */}
        <div className="relative w-full h-44 bg-card/60 overflow-hidden shrink-0">
          {urlToImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={urlToImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="text-4xl font-black text-gold-gradient opacity-40 select-none">AI</div>
            </div>
          )}
          {/* Source badge over image */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-primary/20">
            <span className="text-xs font-semibold text-primary">{sourceName}</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-1 p-5">
          <h3 className="text-base font-bold text-foreground mb-2.5 leading-snug line-clamp-2 group-hover:text-gold-gradient transition-all duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/20">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>{timeAgo(publishedAt)}</span>
            </div>
            <span className={cn(
              "inline-flex items-center gap-1.5 text-xs font-semibold text-primary",
              "transition-all duration-300 group-hover:gap-2"
            )}>
              Read More
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

export function NewsCardSkeleton() {
  return (
    <div className="relative rounded-2xl border border-border/30 bg-card/20 overflow-hidden shimmer flex flex-col">
      <div className="w-full h-44 bg-muted/20" />
      <div className="p-5 space-y-3 flex-1">
        <div className="h-5 w-3/4 bg-muted/30 rounded" />
        <div className="h-4 w-full bg-muted/20 rounded" />
        <div className="h-4 w-5/6 bg-muted/20 rounded" />
        <div className="h-4 w-2/3 bg-muted/20 rounded" />
        <div className="pt-4 border-t border-border/20 flex justify-between">
          <div className="h-3 w-16 bg-muted/20 rounded" />
          <div className="h-3 w-20 bg-muted/20 rounded" />
        </div>
      </div>
    </div>
  )
}
