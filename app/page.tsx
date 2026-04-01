import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Shield, BarChart3, Star, TrendingUp } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ToolCard } from "@/components/tool-card"
import { TextFlippingBoardDemo } from "@/components/text-flipping-board-demo"
import { getFeaturedTools } from "@/lib/data"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Sparkles,
    title: "Curated Collection",
    description: "Hand-picked AI tools reviewed and verified by our expert team for quality.",
  },
  {
    icon: BarChart3,
    title: "Transparent Pricing",
    description: "Compare pricing plans side-by-side with no hidden costs or surprises.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Stay current with the latest AI tools, features, and pricing changes.",
  },
  {
    icon: Shield,
    title: "Trusted Reviews",
    description: "Make informed decisions with honest, unbiased community reviews.",
  },
]

const stats = [
  { value: "100+", label: "AI Tools", icon: Sparkles },
  { value: "500+", label: "Pricing Plans", icon: BarChart3 },
  { value: "50K+", label: "Active Users", icon: TrendingUp },
  { value: "4.9", label: "User Rating", icon: Star },
]

export default function HomePage() {
  const featuredTools = getFeaturedTools()

  return (
    <div className="min-h-screen bg-background noise-overlay relative">
      {/* Full-page Aceternity grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )} />
        {/* Radial fade so center content stays clean */}
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,black_100%)]" />
      </div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        {/* Hero background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Two-column hero layout */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left — text content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8 animate-fade-in-up">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary tracking-wide">The #1 AI Tools Directory</span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 animate-fade-in-up animate-delay-100">
                <span className="text-foreground">Discover &amp; Compare</span>
                <br />
                <span className="text-gold-gradient-animated text-shadow-gold">AI Tools</span>
              </h1>

              {/* Subtext */}
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in-up animate-delay-200">
                Explore the best AI tools and their pricing in one place. Make informed decisions with comprehensive feature comparisons.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animate-delay-300">
                <Link
                  href="/tools"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold rounded-full bg-gold-gradient text-primary-foreground btn-gold shadow-xl shadow-primary/20"
                >
                  Explore Tools
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold rounded-full border-2 border-border bg-card/30 backdrop-blur-sm text-foreground transition-all duration-300 hover:bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  Compare Tools
                </Link>
              </div>
            </div>

            {/* Right — flipping board */}
            <div className="w-full lg:w-[420px] shrink-0 animate-fade-in-up animate-delay-200">
              <TextFlippingBoardDemo />
            </div>

          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative text-center p-6 lg:p-8 rounded-2xl glass-card border border-border/30 hover-lift cursor-default animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-gold-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-4">
                <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Featured</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-3 tracking-tight">
                Featured Tools
              </h2>
              <p className="text-muted-foreground text-lg">
                Handpicked AI tools trusted by thousands of professionals.
              </p>
            </div>
            <Link
              href="/tools"
              className="group inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
            >
              View all tools
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.slice(0, 3).map((tool, index) => (
              <div 
                key={tool.id} 
                className="animate-fade-in-up" 
                style={{ animationDelay: `${index * 100}ms` }}
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-36 border-t border-border/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-5 tracking-tight">
              Why Choose <span className="text-gold-gradient">Netra</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We make it easy to find, compare, and choose the right AI tools for your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-7 rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm transition-all duration-500 hover:border-primary/25 hover:bg-card/40 hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border-gradient-animated">
            <div className="glass-card gold-glow-pulse">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              
              <div className="relative px-6 py-20 sm:px-12 sm:py-24 lg:py-28 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Start Free Today</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-5 tracking-tight">
                  Ready to find the perfect AI tool?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Join thousands of professionals who use Netra to discover and compare AI tools.
                </p>
                <Link
                  href="/tools"
                  className="group inline-flex items-center gap-2.5 px-10 py-5 text-lg font-bold rounded-full bg-gold-gradient text-primary-foreground btn-gold shadow-2xl shadow-primary/25"
                >
                  Start Exploring
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
