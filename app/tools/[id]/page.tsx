import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Sparkles, Star, Users, Zap } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingCard } from "@/components/pricing-card"
import { getToolById, tools } from "@/lib/data"

interface ToolDetailsPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    id: tool.id,
  }))
}

export async function generateMetadata({ params }: ToolDetailsPageProps) {
  const { id } = await params
  const tool = getToolById(id)
  
  if (!tool) {
    return {
      title: "Tool Not Found - AIStack",
    }
  }

  return {
    title: `${tool.name} Pricing & Features - AIStack`,
    description: tool.description,
  }
}

export default async function ToolDetailsPage({ params }: ToolDetailsPageProps) {
  const { id } = await params
  const tool = getToolById(id)

  if (!tool) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/tools"
            className="group inline-flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <div className="p-1.5 rounded-lg bg-card/50 border border-border/50 group-hover:border-primary/30 group-hover:bg-card transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium">Back to Tools</span>
          </Link>

          {/* Header */}
          <div className="relative glass-card border border-primary/20 rounded-3xl p-8 lg:p-12 mb-14 overflow-hidden gold-glow">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">{tool.category}</span>
                </div>

                {/* Tool Name */}
                <h1 className="text-4xl lg:text-5xl font-black text-foreground mb-5 tracking-tight">
                  {tool.name}
                </h1>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
                  {tool.fullDescription}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                    <span className="text-muted-foreground">Rating:</span>
                    <span className="font-bold text-foreground">4.8/5</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Users:</span>
                    <span className="font-bold text-foreground">10K+</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-bold text-foreground">{tool.category}</span>
                  </div>
                </div>
              </div>

              {/* Website Link */}
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gold-gradient text-primary-foreground font-bold btn-gold shadow-xl shadow-primary/20 shrink-0"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Pricing Section */}
          <section>
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Pricing</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3 tracking-tight">
                Pricing Plans
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose the plan that best fits your needs and scale as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {tool.pricing.map((plan, index) => (
                <div 
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PricingCard
                    name={plan.name}
                    price={plan.price}
                    period={plan.period}
                    description={plan.description}
                    features={plan.features}
                    highlighted={plan.highlighted}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Related Tools CTA */}
          <section className="mt-20 pt-14 border-t border-border/20">
            <div className="relative glass-card border border-border/30 rounded-3xl p-10 lg:p-14 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              <div className="relative">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Looking for alternatives?
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Compare {tool.name} with other {tool.category} tools to find the perfect fit for your workflow.
                </p>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm text-foreground font-bold transition-all duration-300 hover:bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  Compare Tools
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
