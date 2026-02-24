# Modern House Construction — Tropical Architecture Website

A premium, full-featured Next.js website for a Sri Lankan construction company specialising in **Tropical Modernism** — blending contemporary minimalism with Sri Lankan architectural heritage.

---

## ✨ Features

- **Elegant Tropical Modernism aesthetic** — off-white backgrounds, earthy/mahogany accents, generous whitespace
- **Responsive design** — optimised for all screen sizes from mobile to desktop
- **Portfolio / Designs gallery** — filterable by style (Urban, Villas, Tropical) with individual detail pages
- **Services showcase** — Architectural Design, Turnkey Construction, Heritage Restoration, and Bespoke Interiors
- **Contact form** — powered by [Resend](https://resend.com) for reliable email delivery
- **Admin inquiry panel** — view and manage client inquiries
- **SEO-ready** — sitemap, robots.txt, per-page metadata, and semantic HTML
- **Custom 404 page**
- **Smooth animations** via Framer Motion

---

## 🗂️ Project Structure

```
construction/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage (Hero, Philosophy, Featured Designs, Testimonials, CTA)
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── designs/            # Designs listing + [slug] detail pages
│   ├── gallery/            # Photo gallery
│   ├── contact/            # Contact form page
│   ├── testimonials/       # Testimonials page
│   ├── admin/              # Admin inquiry management
│   ├── not-found.tsx       # 404 error page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt
├── components/ui/          # Shared UI components
│   ├── Navbar.tsx          # Navigation bar (with contact info strip)
│   ├── Footer.tsx          # Site footer
│   ├── FeaturedDesigns.tsx # Featured designs section (homepage)
│   ├── DesignCard.tsx      # Reusable design card component
│   └── StatusBadge.tsx     # Status indicator badge
├── data/
│   ├── designs.ts          # House design catalogue data
│   └── inquiries.json      # Stored client inquiries
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | Full-stack React framework |
| **React 19** | UI library |
| **TypeScript 5** | Type safety |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |
| **Resend** | Email delivery (contact form) |
| **Google Fonts** — Inter & Outfit | Typography |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18+**
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Ransilu456/construction-for-rohith.git
cd construction-for-rohith

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

> Get a free API key at [resend.com](https://resend.com).

### Running Locally

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
npm run start
```

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Philosophy, Featured Designs, Testimonials, CTA |
| `/about` | Company story and team |
| `/services` | Architectural Design, Turnkey Construction, Heritage Restoration, Bespoke Interiors |
| `/designs` | Full portfolio gallery, filterable by style |
| `/designs/[slug]` | Individual design detail page |
| `/gallery` | Photo gallery |
| `/contact` | Contact form |
| `/testimonials` | Client testimonials |
| `/admin` | Admin panel for managing inquiries |

---

## 🏡 Design Catalogue

The site features four flagship designs defined in `data/designs.ts`:

| Design | Style | Area | Price Range |
|---|---|---|---|
| The Cinnamon Courtyard | Urban | 4,200 sqft | LKR 60M – 90M |
| Lakeview Minimalism | Villas | 3,100 sqft | LKR 45M – 70M |
| The Earth House | Tropical | 5,500 sqft | LKR 100M – 150M |
| The Kandy Retreat | Tropical | 4,800 sqft | LKR 80M – 120M |

---

## 📞 Contact

**Modern House Construction**
- 📍 Puttalam Road, Chilaw
- 📞 077 8682 720 / 07777 88 600

---

## 📝 License

This project is private and proprietary. All rights reserved.
