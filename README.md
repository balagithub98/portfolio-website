# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Supabase. Features comprehensive web design, development, and marketing services with a focus on SEO optimization and accessibility.

## Features

- **Modern Design**: Clean, responsive design with smooth animations
- **SEO Optimized**: Comprehensive SEO with structured data, sitemap, and metadata
- **Accessibility**: WCAG 2.2 AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized for Core Web Vitals with code splitting and lazy loading
- **Contact Form**: Validated contact form with Supabase integration
- **Animations**: Framer Motion animations with reduced-motion support

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: Supabase (PostgreSQL)
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives with custom styling
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.local.example .env.local
```

4. Configure your `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Your Portfolio Website"
CONTACT_EMAIL=contact@yourdomain.com
SUPPORT_EMAIL=support@yourdomain.com
```

5. Set up Supabase:
   - Create a new Supabase project
   - Run the SQL schema from `supabase/schema.sql`
   - Run the RLS policies from `supabase/rls.sql`
   - Deploy the Edge Function from `supabase/functions/contact-form/`

6. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Marketing pages
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/            # React components
│   ├── sections/          # Landing page sections
│   ├── services/          # Services page components
│   ├── contact/           # Contact page components
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
│   ├── supabase/          # Supabase client configuration
│   ├── types.ts           # TypeScript type definitions
│   └── utils.ts           # Utility functions
├── supabase/              # Supabase configuration
│   ├── functions/         # Edge Functions
│   ├── schema.sql         # Database schema
│   └── rls.sql            # Row Level Security policies
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run analyze` - Analyze bundle size

## Deployment

### Automated Deployment with GitHub Actions + Vercel

This project includes GitHub Actions workflows for automated deployment:

#### Setup Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Vercel Project:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings

3. **Get Vercel Credentials:**
   - In Vercel dashboard, go to Settings → General
   - Copy your **Project ID** and **Organization ID**
   - Go to Settings → Tokens and create a new token

4. **Configure GitHub Secrets:**
   Go to your GitHub repository → Settings → Secrets and variables → Actions, add:
   ```
   VERCEL_TOKEN=your_vercel_token
   VERCEL_ORG_ID=your_org_id
   VERCEL_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_APP_NAME=Your App Name
   ```

5. **Deploy:**
   - Push to `main` branch to trigger automatic deployment
   - Check Actions tab for deployment status
   - Your site will be live at `https://your-project.vercel.app`

#### Workflows Included:

- **`.github/workflows/deploy.yml`** - Deploys to Vercel on push to main
- **`.github/workflows/ci.yml`** - Runs tests and builds on PRs

### Manual Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to configure
4. Add environment variables in Vercel dashboard

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## SEO Features

- **Metadata**: Dynamic metadata for each page
- **Structured Data**: JSON-LD for Organization and WebSite
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Open Graph**: Social media preview optimization
- **Twitter Cards**: Twitter preview optimization
- **Canonical URLs**: Proper canonical link handling

## Accessibility Features

- **WCAG 2.2 AA**: Compliant with accessibility standards
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Color Contrast**: Meets contrast requirements
- **Reduced Motion**: Respects user motion preferences

## Performance Features

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Code Splitting**: Automatic code splitting
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Font display swap
- **Bundle Analysis**: Built-in bundle analyzer

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@yourdomain.com or create an issue in the repository.