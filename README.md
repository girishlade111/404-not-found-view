# 404 Not Found View

> A stylish and modern 404 error page built with Next.js, React, and Tailwind CSS

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/gileb64375-5584s-projects/v0-404-not-found-view)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/dd6riBSqd6y)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-black?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

---

## Overview

This project is a **custom 404 Not Found error page** designed with a modern, creative aesthetic. It serves as the default error page when users navigate to non-existent routes in the Next.js application. The page features an engaging visual design with smooth animations and a clean user experience.

> **Auto-synced** with your [v0.app](https://v0.app) deployments - any changes made in the deployed app are automatically pushed to this repository.

---

## Features

- **Modern Design** - Clean, minimalist 404 error page with creative visual elements
- **Responsive Layout** - Fully responsive design that works on all screen sizes
- **Theme Support** - Light and dark mode via `next-themes`
- **Smooth Animations** - Built-in Tailwind CSS animations for visual polish
- **Accessibility Ready** - Semantic HTML structure with proper ARIA attributes
- **Custom Fonts** - Uses Geist font family for typography

---

## System Architecture

```mermaid
flowchart TD
    subgraph Client["Client Side"]
        Browser[Web Browser]
        React[React 19]
        Tailwind[Tailwind CSS]
        Themes[next-themes]
    end

    subgraph Server["Server Side"]
        NextJS[Next.js 15 App Router]
        NodeRuntime[Node.js Runtime]
    end

    subgraph UI_Components["UI Components"]
        Button[Button Component]
        ThemeProvider[Theme Provider]
    end

    subgraph Styling["Styling System"]
        Utils[lib/utils.ts]
        CVA[class-variance-authority]
        TailwindMerge[tailwind-merge]
        clsx[clsx]
    end

    subgraph Deployment["Deployment"]
        Vercel[Vercel Platform]
        CDN[Vercel CDN]
    end

    Browser -->|HTTP Requests| NextJS
    React -->|Render UI| Browser
    Tailwind -->|Style| React
    Themes -->|Theme Context| React
    NextJS -->|Server Render| NodeRuntime
    Button -->|UI Component| React
    ThemeProvider -->|Context| React
    Utils -->|Class Merging| CVA
    CVA -->|Variants| TailwindMerge
    TailwindMerge -->|CN Helper| clsx
    Vercel -->|CDN Delivery| Browser
    NextJS -->|Deploy to| Vercel
    CDN -->|Static Assets|
```

---

## Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.2.4 | React Framework |
| **React** | 19 | UI Library |
| **TypeScript** | 5 | Type Safety |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 3.4.17 | Utility-first CSS |
| **Radix UI** | 1.2.2+ | Unstyled UI Primitives |
| **Lucide React** | 0.454.0 | Icons |
| **Geist** | 1.3.1 | Font Family |

### Utilities & Libraries
| Technology | Version | Purpose |
|------------|---------|---------|
| **class-variance-authority** | 0.7.1 | Component variants |
| **clsx** | 2.1.1 | Conditional classes |
| **tailwind-merge** | 2.5.5 | Tailwind class merging |
| **next-themes** | 0.4.4 | Dark mode support |
| **zod** | 3.24.1 | Schema validation |
| **react-hook-form** | 7.54.1 | Form handling |

### Dev Dependencies
| Technology | Version | Purpose |
|------------|---------|---------|
| **PostCSS** | 8.5 | CSS processing |
| **Autoprefixer** | 10.4.20 | Vendor prefixes |
| **@types/node** | 22 | Node.js types |

---

## Project Structure

```
404-not-found-view/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with theme provider
│   ├── page.tsx                  # Home page
│   └── not-found.tsx             # 404 error page
├── components/
│   └── ui/                       # UI components
│       ├── button.tsx           # Button component
│       └── theme-provider.tsx    # Theme provider
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── next.config.mjs              # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm** 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/404-not-found-view.git

# Navigate to project directory
cd 404-not-found-view

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Configuration

### Tailwind CSS

The project uses **Tailwind CSS v3** with custom configuration:

- **Dark Mode**: Class-based via `darkMode: ['class']`
- **Content Paths**: `./app/**/*`, `./components/**/*`
- **Custom Colors**: Background, foreground, primary, secondary, muted, accent, destructive, border, input, ring, chart colors
- **Custom Border Radius**: lg, md, sm variants
- **Animations**: Accordion down/up animations
- **Plugins**: tailwindcss-animate

### Next.js Config

```javascript
{
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }
}
```

### Environment Variables

> No environment variables required for basic setup.

---

## Statistics

| Metric | Value |
|--------|-------|
| **Total Dependencies** | 240+ packages |
| **Production Dependencies** | ~50 packages |
| **Dev Dependencies** | ~6 packages |
| **UI Components** | Radix UI primitives (~30+) |
| **Bundle Size** | Optimized via Next.js |

---

## Deployment

### Vercel (Recommended)

The project is pre-configured for Vercel deployment:

1. **Connect Repository** to Vercel
2. **Framework Preset**: Next.js (automatic)
3. **Build Command**: `npm run build`
4. **Output Directory**: `.next`
5. **Install Command**: `npm install`

> **Live URL**: [https://vercel.com/gileb64375-5584s-projects/v0-404-not-found-view](https://vercel.com/gileb64375-5584s-projects/v0-404-not-found-view)

### Build for Production

```bash
npm run build
# Output: .next/ directory
```

---

## How It Works

1. **Create & Modify** - Build your project using [v0.app](https://v0.app)
2. **Deploy** - Deploy your changes from the v0 interface
3. **Auto-Sync** - Changes are automatically pushed to this repository
4. **Vercel Deploy** - Vercel deploys the latest version automatically

---

## License

> MIT License - Feel free to use for your own projects.

---

## Support

- **Documentation**: [Next.js Docs](https://nextjs.org/docs) | [Tailwind CSS](https://tailwindcss.com)
- **Issues**: [Report Issues](https://github.com/anomalyco/opencode/issues)
- **v0.app**: [Project Chat](https://v0.app/chat/projects/dd6riBSqd6y)