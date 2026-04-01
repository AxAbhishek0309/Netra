export interface Tool {
  id: string
  name: string
  category: string
  description: string
  fullDescription: string
  website: string
  featured: boolean
  pricing: PricingPlan[]
}

export interface PricingPlan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
}

export const categories = [
  { id: "all", name: "All", count: 12 },
  { id: "nlp", name: "NLP", count: 4 },
  { id: "image", name: "Image", count: 4 },
  { id: "productivity", name: "Productivity", count: 4 },
]

export const tools: Tool[] = [
  {
    id: "openai-gpt",
    name: "OpenAI GPT-4",
    category: "NLP",
    description: "Advanced language model for text generation, analysis, and conversation.",
    fullDescription: "GPT-4 is OpenAI's most advanced system, producing safer and more useful responses. It can solve difficult problems with greater accuracy, thanks to its broader general knowledge and problem solving abilities.",
    website: "https://openai.com",
    featured: true,
    pricing: [
      {
        name: "Free",
        price: "Free",
        description: "Get started with basic features",
        features: ["Limited API calls", "GPT-3.5 access", "Community support", "Basic documentation"],
      },
      {
        name: "Plus",
        price: "$20",
        period: "/month",
        description: "For individual power users",
        features: ["GPT-4 access", "Faster response times", "Priority access", "Plugin access", "Advanced analysis"],
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations",
        features: ["Unlimited access", "Custom models", "Dedicated support", "SLA guarantees", "Advanced security", "Admin console"],
      },
    ],
  },
  {
    id: "anthropic-claude",
    name: "Anthropic Claude",
    category: "NLP",
    description: "Constitutional AI assistant focused on safety and helpfulness.",
    fullDescription: "Claude is an AI assistant made by Anthropic. It's designed to be helpful, harmless, and honest. Claude excels at thoughtful dialogue, content creation, complex reasoning, and detailed instructions.",
    website: "https://anthropic.com",
    featured: true,
    pricing: [
      {
        name: "Free",
        price: "Free",
        description: "Basic access to Claude",
        features: ["Limited messages", "Standard speed", "Basic features"],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/month",
        description: "For professionals",
        features: ["5x more usage", "Priority access", "Claude 3 Opus", "Early features"],
        highlighted: true,
      },
      {
        name: "Team",
        price: "$30",
        period: "/user/month",
        description: "For teams and businesses",
        features: ["Everything in Pro", "Team management", "Higher limits", "Admin dashboard"],
      },
    ],
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "Image",
    description: "AI-powered image generation with stunning artistic quality.",
    fullDescription: "Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species. It creates stunning, artistic images from text descriptions.",
    website: "https://midjourney.com",
    featured: true,
    pricing: [
      {
        name: "Basic",
        price: "$10",
        period: "/month",
        description: "For casual creators",
        features: ["200 generations/month", "General commercial terms", "Access to member gallery", "3 concurrent jobs"],
      },
      {
        name: "Standard",
        price: "$30",
        period: "/month",
        description: "For regular users",
        features: ["15h fast generations", "Unlimited relaxed", "General commercial terms", "Stealth mode"],
        highlighted: true,
      },
      {
        name: "Pro",
        price: "$60",
        period: "/month",
        description: "For professionals",
        features: ["30h fast generations", "Unlimited relaxed", "Stealth mode", "12 concurrent jobs"],
      },
    ],
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    category: "Image",
    description: "Open-source image generation model with extensive customization.",
    fullDescription: "Stable Diffusion is a deep learning, text-to-image model. It is primarily used to generate detailed images based on text descriptions, and can also be applied to other tasks like inpainting and image-to-image translations.",
    website: "https://stability.ai",
    featured: false,
    pricing: [
      {
        name: "Free",
        price: "Free",
        description: "Self-hosted option",
        features: ["Unlimited local generation", "Full customization", "Community models", "No API limits"],
      },
      {
        name: "Pro API",
        price: "$10",
        period: "/month",
        description: "API access",
        features: ["1000 credits", "Fast generation", "Premium support", "Commercial license"],
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large scale",
        features: ["Unlimited credits", "Priority processing", "Custom training", "Dedicated support"],
      },
    ],
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    category: "Productivity",
    description: "AI-powered writing assistant integrated into your workspace.",
    fullDescription: "Notion AI helps you write better, faster. Summarize existing content, brainstorm ideas, write drafts, fix spelling and grammar, and translate - all within your Notion workspace.",
    website: "https://notion.so",
    featured: true,
    pricing: [
      {
        name: "Free",
        price: "Free",
        description: "Limited AI responses",
        features: ["20 AI responses", "Basic writing help", "Summarization", "Translation"],
      },
      {
        name: "Plus",
        price: "$10",
        period: "/month",
        description: "Unlimited AI power",
        features: ["Unlimited AI usage", "All AI features", "Priority support", "Advanced templates"],
        highlighted: true,
      },
      {
        name: "Business",
        price: "$15",
        period: "/member/month",
        description: "For teams",
        features: ["Everything in Plus", "Team billing", "Admin tools", "SAML SSO"],
      },
    ],
  },
  {
    id: "jasper",
    name: "Jasper AI",
    category: "Productivity",
    description: "AI content platform for marketing and business writing.",
    fullDescription: "Jasper is an AI content platform that helps individuals and teams create high-quality content for marketing, sales, and more. It offers templates, workflows, and brand voice customization.",
    website: "https://jasper.ai",
    featured: false,
    pricing: [
      {
        name: "Creator",
        price: "$49",
        period: "/month",
        description: "For individuals",
        features: ["1 seat", "Brand voice", "50+ templates", "SEO mode", "Browser extension"],
      },
      {
        name: "Pro",
        price: "$69",
        period: "/month",
        description: "For small teams",
        features: ["Up to 5 seats", "Everything in Creator", "Campaigns", "Instant campaigns", "API access"],
        highlighted: true,
      },
      {
        name: "Business",
        price: "Custom",
        description: "For enterprises",
        features: ["Unlimited seats", "Custom AI features", "Advanced security", "Dedicated support", "Custom workflows"],
      },
    ],
  },
  {
    id: "dalle-3",
    name: "DALL-E 3",
    category: "Image",
    description: "OpenAI's latest image generation model with improved accuracy.",
    fullDescription: "DALL-E 3 represents a leap forward in generating images from text descriptions. It understands significantly more nuance and detail, allowing you to translate your ideas into exceptionally accurate images.",
    website: "https://openai.com/dall-e-3",
    featured: false,
    pricing: [
      {
        name: "ChatGPT Plus",
        price: "$20",
        period: "/month",
        description: "Via ChatGPT",
        features: ["DALL-E 3 access", "GPT-4 included", "40 messages/3h", "Image editing"],
        highlighted: true,
      },
      {
        name: "API",
        price: "$0.04",
        period: "/image",
        description: "Pay per use",
        features: ["Standard quality", "1024x1024", "HD available", "Commercial use"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For organizations",
        features: ["Volume discounts", "Priority access", "Custom limits", "Dedicated support"],
      },
    ],
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    category: "NLP",
    description: "AI-powered search engine with real-time information access.",
    fullDescription: "Perplexity is an AI-powered search engine that provides direct answers to questions using large language models. It searches the web in real-time and provides sourced, accurate responses.",
    website: "https://perplexity.ai",
    featured: false,
    pricing: [
      {
        name: "Free",
        price: "Free",
        description: "Basic search",
        features: ["Standard searches", "Basic AI model", "Limited Pro searches", "Mobile app"],
      },
      {
        name: "Pro",
        price: "$20",
        period: "/month",
        description: "Power users",
        features: ["Unlimited Pro searches", "GPT-4 & Claude", "File uploads", "API access", "Priority support"],
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For teams",
        features: ["Team management", "SSO integration", "Usage analytics", "Custom limits"],
      },
    ],
  },
  {
    id: "runway",
    name: "Runway ML",
    category: "Image",
    description: "AI-powered creative suite for video and image generation.",
    fullDescription: "Runway is an applied AI research company shaping the next era of art, entertainment and human creativity. Create videos, images, and train custom AI models.",
    website: "https://runwayml.com",
    featured: false,
    pricing: [
      {
        name: "Free",
        price: "Free",
        description: "Get started",
        features: ["125 credits", "3 video projects", "720p exports", "Gen-1 & Gen-2"],
      },
      {
        name: "Standard",
        price: "$15",
        period: "/month",
        description: "For creators",
        features: ["625 credits/month", "Unlimited projects", "4K exports", "All AI tools"],
        highlighted: true,
      },
      {
        name: "Pro",
        price: "$35",
        period: "/month",
        description: "For professionals",
        features: ["2250 credits/month", "Priority processing", "Custom AI training", "Team features"],
      },
    ],
  },
  {
    id: "grammarly",
    name: "Grammarly",
    category: "Productivity",
    description: "AI writing assistant for grammar, clarity, and style improvements.",
    fullDescription: "Grammarly is an AI-powered writing assistant that helps you communicate more effectively. It checks grammar, spelling, punctuation, clarity, engagement, and delivery mistakes in real-time.",
    website: "https://grammarly.com",
    featured: false,
    pricing: [
      {
        name: "Free",
        price: "Free",
        description: "Basic writing checks",
        features: ["Grammar checking", "Spelling correction", "Punctuation", "Basic suggestions"],
      },
      {
        name: "Premium",
        price: "$12",
        period: "/month",
        description: "Advanced features",
        features: ["All Free features", "Clarity suggestions", "Tone detection", "Plagiarism check", "Word choice"],
        highlighted: true,
      },
      {
        name: "Business",
        price: "$15",
        period: "/member/month",
        description: "For teams",
        features: ["Everything in Premium", "Brand tones", "Style guides", "Analytics dashboard", "Priority support"],
      },
    ],
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    category: "Productivity",
    description: "AI copywriting tool for marketing content and sales copy.",
    fullDescription: "Copy.ai is an AI-powered copywriting platform that helps you create marketing copy, blog posts, social media content, and more. It offers 90+ templates and supports 25+ languages.",
    website: "https://copy.ai",
    featured: false,
    pricing: [
      {
        name: "Free",
        price: "Free",
        description: "Get started",
        features: ["2,000 words/month", "90+ copywriting tools", "Unlimited projects", "1 user seat"],
      },
      {
        name: "Pro",
        price: "$49",
        period: "/month",
        description: "For professionals",
        features: ["Unlimited words", "5 user seats", "25+ languages", "Priority support", "Brand voice"],
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large teams",
        features: ["Unlimited seats", "API access", "Custom workflows", "Dedicated support", "SSO"],
      },
    ],
  },
  {
    id: "cohere",
    name: "Cohere",
    category: "NLP",
    description: "Enterprise-grade NLP models for text understanding and generation.",
    fullDescription: "Cohere provides access to advanced Large Language Models and NLP tools through one API. Build powerful applications that understand text, generate content, and more.",
    website: "https://cohere.com",
    featured: false,
    pricing: [
      {
        name: "Free",
        price: "Free",
        description: "For development",
        features: ["Rate-limited API", "Basic models", "Community support", "Playground access"],
      },
      {
        name: "Production",
        price: "$0.40",
        period: "/1M tokens",
        description: "Pay as you go",
        features: ["Production API", "All models", "Email support", "99.9% SLA"],
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Custom solutions",
        features: ["Custom fine-tuning", "Private deployment", "Dedicated support", "Custom SLA"],
      },
    ],
  },
]

export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id)
}

export function getToolsByCategory(category: string): Tool[] {
  if (category === "all") return tools
  return tools.filter((tool) => tool.category.toLowerCase() === category.toLowerCase())
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured)
}

export function searchTools(query: string): Tool[] {
  const lowerQuery = query.toLowerCase()
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.category.toLowerCase().includes(lowerQuery)
  )
}
