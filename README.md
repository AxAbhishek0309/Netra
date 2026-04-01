# Netra — AI Tools & Pricing Explorer

A modern directory to discover, compare, and stay updated on the best AI tools available. Built with Next.js 16, Tailwind CSS v4, and a premium black + gold design system.

## Features

- **Browse Tools** — Explore 12+ curated AI tools across NLP, Image, and Productivity categories
- **Compare** — Side-by-side comparison of any two tools with pricing and feature breakdown
- **AI News** — Live news feed powered by NewsAPI, auto-refreshes every 30 minutes
- **Tool Detail Pages** — Full descriptions, pricing plans, and direct website links
- **Search & Filter** — Real-time search and category filtering on tools and news
- **Responsive** — Fully optimized for mobile, tablet, and desktop

## Tech Stack

- [Next.js 16](https://nextjs.org/) — App Router, Server Components
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) — Accessible component primitives
- [Lucide React](https://lucide.dev/) — Icons
- [NewsAPI](https://newsapi.org/) — Live AI news feed
- [Vercel Analytics](https://vercel.com/analytics) — Usage insights

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```bash
# Get your free key at https://newsapi.org/register
NEWS_API_KEY=your_api_key_here
```

> Free tier gives 100 requests/day — no credit card required.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── page.tsx          # Homepage
│   ├── tools/
│   │   ├── page.tsx      # Tools listing
│   │   └── [id]/page.tsx # Tool detail + pricing
│   ├── compare/page.tsx  # Side-by-side comparison
│   ├── news/
│   │   ├── page.tsx      # AI News (server component)
│   │   └── news-grid.tsx # Search + grid (client component)
│   └── about/page.tsx    # About page
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── tool-card.tsx
│   ├── news-card.tsx
│   ├── pricing-card.tsx
│   └── ui/               # shadcn/ui components
├── lib/
│   ├── data.ts           # Tools data
│   ├── news.ts           # NewsAPI fetch logic
│   └── utils.ts
└── .env.local            # API keys (gitignored)
```

## Deployment

Deploy instantly on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Add `NEWS_API_KEY` to your Vercel environment variables under **Project Settings → Environment Variables**.

## License

MIT
