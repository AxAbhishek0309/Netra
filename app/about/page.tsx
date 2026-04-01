import Link from "next/link"
import { ArrowRight, Users, Target, Zap, Globe, Sparkles, TrendingUp, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Target,
    title: "Accuracy",
    description: "We meticulously verify all pricing and feature information to ensure you have accurate, up-to-date data.",
  },
  {
    icon: Users,
    title: "User-First",
    description: "Every decision we make is guided by what helps our users find the right AI tools faster.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "We continuously update our database to reflect the latest changes in the AI landscape.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "AI tools should be discoverable by everyone, regardless of technical background.",
  },
]

const team = [
  { name: "Alex Chen", role: "Founder & CEO", initial: "A" },
  { name: "Sarah Kim", role: "Head of Research", initial: "S" },
  { name: "Marcus Johnson", role: "Lead Engineer", initial: "M" },
  { name: "Emily Wang", role: "Product Designer", initial: "E" },
]

const stats = [
  { value: "100+", label: "AI tools catalogued", icon: Sparkles },
  { value: "500+", label: "Pricing plans analyzed", icon: TrendingUp },
  { value: "50K+", label: "Monthly active users", icon: Users },
  { value: "99%", label: "User satisfaction", icon: Award },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      <main className="pt-28 pb-24">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
                <Users className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">About Us</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-8 tracking-tight leading-tight">
                We make AI tools{" "}
                <span className="text-gold-gradient">accessible</span> to everyone
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AIStack was founded with a simple mission: help people discover, compare, and choose the right AI tools without the confusion of scattered information and hidden pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-6 lg:p-8 rounded-2xl glass-card border border-border/30 text-center hover-lift cursor-default animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-gold-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 border-t border-border/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-5">
                  <Target className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Our Mission</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-8 tracking-tight">
                  Simplifying AI Discovery
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    The AI tool landscape is evolving rapidly. New tools emerge daily, pricing changes frequently, and finding reliable comparisons is nearly impossible.
                  </p>
                  <p>
                    We built AIStack to solve this problem. Our platform aggregates information from hundreds of AI tools, standardizes their features and pricing, and presents everything in a clear, comparable format.
                  </p>
                  <p>
                    Whether you&apos;re a solo creator looking for an image generator or an enterprise team evaluating NLP solutions, AIStack helps you make informed decisions.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="glass-card border border-primary/25 rounded-3xl p-8 lg:p-10 gold-glow">
                  <div className="space-y-8">
                    {[
                      { value: "100+", label: "AI tools catalogued and reviewed" },
                      { value: "500+", label: "Pricing plans analyzed" },
                      { value: "50K+", label: "Monthly active users" },
                    ].map((item, index) => (
                      <div key={index} className="group flex items-center gap-5">
                        <div className="text-4xl lg:text-5xl font-black text-gold-gradient group-hover:scale-105 transition-transform">
                          {item.value}
                        </div>
                        <div className="text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 border-t border-border/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-5">
                <Award className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Core Values</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-5 tracking-tight">
                What We Stand For
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                These principles guide everything we do at AIStack.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-7 rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm transition-all duration-500 hover:border-primary/25 hover:bg-card/40 hover-lift"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 border-t border-border/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-5">
                <Users className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">The Team</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-5 tracking-tight">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A passionate team dedicated to making AI accessible to everyone.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="group text-center p-6 rounded-2xl border border-border/30 bg-card/20 transition-all duration-500 hover:border-primary/25 hover:bg-card/40 hover-lift"
                >
                  <div className="relative w-20 h-20 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <span className="text-2xl font-black text-primary-foreground">{member.initial}</span>
                  </div>
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden border-gradient-animated">
              <div className="glass-card gold-glow-pulse">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                
                <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:py-24 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Get Started</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-5 tracking-tight">
                    Ready to find your perfect AI tool?
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                    Start exploring our curated collection of AI tools and make informed decisions for your projects.
                  </p>
                  <Link
                    href="/tools"
                    className="group inline-flex items-center gap-2.5 px-10 py-5 text-lg font-bold rounded-full bg-gold-gradient text-primary-foreground btn-gold shadow-2xl shadow-primary/25"
                  >
                    Browse Tools
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
