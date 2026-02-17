# Tanuja Vankalas - Actress Portfolio

A premium, minimalist portfolio website for Tanuja Vankalas, built with Next.js, TailwindCSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: TypeScript

## 🛠️ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/krishna7875/tanuja-vankalas-portfolio.git
    cd tanuja-vankalas-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## ☁️ Deployment on Cloudflare Pages

This project is optimized for deployment on Cloudflare Pages.

### ⚠️ IMPORTANT: Fix for "undefined reading filter" Error

If you encounter the error `Cannot read properties of undefined (reading 'filter')` during deployment, it is likely due to an **outdated Node.js version** on Cloudflare. Next.js 16 requires Node.js 18.17 or later (Node 20 recommended).

**You MUST set the Node.js version explicitly in Cloudflare Pages:**

1.  Go to your Cloudflare Pages project dashboard.
2.  Navigate to **Settings** > **Environment variables**.
3.  Add the following variable:
    -   **Variable Name**: `NODE_VERSION`
    -   **Value**: `20`
4.  **Retry the deployment**.

### Standard Deployment Steps

1.  Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Go to **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3.  Select the repository `tanuja-vankalas-portfolio`.
4.  **Configure builds**:
    -   **Framework Preset**: Next.js
    -   **Build Command**: `npx @cloudflare/next-on-pages@1` (Recommended for dynamic features) OR `npm run build` (if using static export).
        *   *Note: For this site, `npm run build` serves standard static assets, but `@cloudflare/next-on-pages` is better for full Next.js compatibility.*
    -   **Build Output Directory**: `.vercel/output/static` (if using next-on-pages) or `.next` (default).

**(Recommended) Static Export Configuration**:
If you want a purely static site (cheaper, faster, easier hosting):
1.  Open `next.config.ts`.
2.  Add `output: "export"` to the config object.
3.  Deploy with build command: `npm run build` and output directory: `out`.

## 📁 Project Structure

```
src/
├── app/                # App Router pages and layouts
├── components/         # React components
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # Hero, Gallery, Videos, etc.
│   └── ui/             # Reusable UI elements (Buttons, Typography)
├── lib/                # Utilities, animations, data files
└── ...
```
