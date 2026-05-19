# Neway Commerce OS

> A WorkBuddy AI Skill that generates a full-stack commerce website skeleton from a short **product idea description**.
>
> Recommended to generate via WorkBuddy Bot. Other bots (Cursor, Claude, GPT) can also do a great job with the same effect.

---

## 📖 Overview

Neway Commerce OS is a reusable commerce operating system Skill designed for:

- **Digital products** (UI Kits, templates, courses, software licenses)
- **Creator storefronts** (one-person creator shops)
- **Multi-product studios** (NewayStudio-style product matrix)
- **AI-assisted sales** (built-in AI shopping concierge)

**Core idea**: Input a one-line product idea → Output a fully runnable React + Vite + Hono full-stack website with storefront, cart, checkout, admin dashboard, AI concierge, and EdgeOne Pages deployment configuration.

---

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18
- (Optional) EdgeOne Pages account for deployment
- (Optional) Stripe account for production payments

### Usage

**Recommended: Generate via WorkBuddy Bot conversation**

Just tell the AI what you want, for example:

> 🎯 **"Create a trendy fashion ecommerce site selling branded hoodies"**
>
> 🎯 **"Build a digital product store for my AI prompt template packs"**
>
> 🎯 **"Make me a creator subscription site with monthly membership and AI concierge"**
>
> 🎯 **"Generate a multi-product studio website selling courses + design assets + SaaS subscriptions"**

The Bot will analyze your request and complete the full generation flow. **One sentence is all it takes.**

> 💡 This isn't limited to WorkBuddy Bot — feed this Skill to Cursor, Claude, GPT, or any AI assistant and they'll produce equally great results.

---

## 📂 Generated Project Structure

```
site-name/
├── src/
│   ├── components/
│   │   └── AiConcierge.tsx    # AI shopping concierge component
│   ├── pages/
│   │   ├── HomePage.tsx       # Homepage / product showcase
│   │   ├── CartPage.tsx       # Shopping cart page
│   │   ├── CheckoutPage.tsx   # Checkout page
│   │   ├── AccountPage.tsx    # User account page
│   │   └── AdminPage.tsx      # Admin dashboard page
│   ├── lib/
│   │   └── api.ts             # API request wrapper
│   ├── store/
│   │   └── cartStore.ts       # Cart state (Zustand)
│   ├── data/
│   │   └── products.json      # Default product data
│   ├── App.tsx                # Routes & layout
│   ├── main.tsx               # Entry point
│   └── styles.css             # Global styles
├── functions/
│   ├── api/
│   │   ├── products.ts        # Product list API
│   │   ├── checkout.ts        # Checkout API
│   │   └── assistant.ts       # AI concierge API
│   └── node/
│       └── stripe-webhook.ts  # Stripe Webhook handler
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── edgeone.json               # EdgeOne Pages deploy config
├── .env.example               # Environment variable template
└── NEWAY_BRIEF.md             # Generation summary
```

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18 + TypeScript + Vite + Framer Motion |
| **State Management** | Zustand |
| **Routing** | React Router v6 |
| **API** | Hono Edge Functions / Node Functions |
| **Payment** | Stripe (Mock mode + Production mode) |
| **AI Concierge** | Custom API endpoint with AI integration stub |
| **Deployment** | EdgeOne Pages |

---

## 🎮 Playground Examples

### Play 1: Trendy Fashion Store 🧢

> "Generate a stylish fashion ecommerce site targeting young streetwear brands, with new arrivals, exclusive collab zone, limited-time countdown deals, dark edgy color scheme, and AI stylist recommendations"

Output includes: new arrivals carousel, collab zone, countdown timers, dark theme with gradient accents, AI fashion concierge

### Play 2: Digital Creator Shop 🎨

> "Build an indie creator store selling templates, presets, and ebooks, organized by category, with real-time cart updates and one-click mock checkout for preview"

Output includes: category filter bar, product card grid, live cart drawer, one-step mock checkout

### Play 3: SaaS Subscription Site 🔄

> "Create a SaaS product website with three pricing tiers (Free/Pro/Enterprise), feature comparison table, and AI sales assistant"

Output includes: pricing card comparison, feature grid, AI concierge (help choose plan), account page with subscription status

### Play 4: Full Product Matrix 📦

> "Build a premium multi-product storefront for NewayStudio that sells UI kits, AI workflow packs, and creator tools, with an AI shopping concierge and Stripe checkout."

Output includes: studio-style homepage, cross-category product matrix, full checkout flow + admin, Stripe payment + webhook

---

## 🧪 Payment Modes

### Mock Mode (default, for dev/demo)

- Generates a fake order ID
- Simulates payment success
- Redirects to success/account page
- No external services required

### Stripe Mode (production)

- Creates a Stripe Checkout Session
- Redirects to Stripe-hosted checkout
- Processes payment via Webhook
- Requires: `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET`

**Switch**: Set `VITE_PAYMENT_MODE=stripe` in `.env`

---

## 🚢 Deployment (EdgeOne Pages)

### Local Development

```bash
npm install
npm run dev      # Start Vite dev server
```

### Production Deployment

1. Set environment variables in EdgeOne Pages
2. Switch payment mode to `stripe`
3. Configure the webhook endpoint
4. Deploy frontend + function handlers
5. Verify checkout redirect and webhook receipt

### Deployment Checklist

- [ ] Homepage renders correctly
- [ ] Products load properly
- [ ] Cart updates work
- [ ] Checkout endpoint responds
- [ ] AI concierge endpoint responds
- [ ] Webhook endpoint is configured
- [ ] Admin page is reachable
- [ ] Environment placeholders replaced with real values

---

## 🔧 Customization & Extensions

### Connect a real AI concierge

`functions/api/assistant.ts` provides the AI concierge API stub. To connect:

1. Set `AI_API_BASE`, `AI_API_KEY`, `AI_MODEL` environment variables
2. Call an external AI API from the endpoint
3. Or implement custom recommendation logic directly

### Add more pages

Simply add files under `src/pages/` and register routes in `App.tsx`.

### Customize styling

Edit `src/styles.css` or adopt CSS-in-JS / Tailwind.

---

## 📐 Architecture Layers

```
┌─────────────────────────────────────┐
│   Presentation Layer (React + Vite) │  ← Home / Products / Cart / Checkout / Admin
├─────────────────────────────────────┤
│   Application Layer (Zustand + API) │  ← State management, routing, API wrappers
├─────────────────────────────────────┤
│   API Layer (Hono Functions)        │  ← Products / Checkout / AI / Webhook
├─────────────────────────────────────┤
│   Commerce Layer                    │  ← Products, Cart, Checkout, Payment switch
├─────────────────────────────────────┤
│   Deployment Layer (EdgeOne Pages)  │  ← Static hosting + Edge Func + Node Func
└─────────────────────────────────────┘
```

---

## ⚠️ Notes

- Generated projects are **scaffold/skeleton level** — complete UI structure with API endpoint stubs
- **Mock data** and **simulated behaviors** are enabled by default; connect real services for production
- Each generation is independent and **will not modify existing projects**
- The AI concierge endpoint is an **integration stub** returning mock responses by default
- The generated `NEWAY_BRIEF.md` explicitly states what is scaffold-ready and what needs further implementation

---

## 📄 License

MIT