# Modern House Construction (PVT) LTD

## Website Architecture & Implementation Guide (Next.js -- Serverless -- No Database)

------------------------------------------------------------------------

# 1. Project Overview

This document defines how to build a company website similar in
structure to Vajira House style websites, but customized for **Sri
Lankan architectural aesthetics**.

The site will: - Be built using Next.js (App Router) - Use Static Site
Generation (SSG) - Use Serverless contact form (no backend server) -
Have no database - Be optimized for SEO and performance - Be deployable
on Vercel (Free Tier)

------------------------------------------------------------------------

# 2. Tech Stack

Frontend Framework: - Next.js (latest stable) - React - TypeScript

Styling: - Tailwind CSS

UI Components: - Custom reusable components

Deployment: - Netlify (Free Plan)

Contact Form: - Serverless Email for free
(Free Tier)

------------------------------------------------------------------------

# 3. Website Structure

## Public Pages

/ (Home) /about /services /designs /designs/\[slug\] /gallery /contact add more

------------------------------------------------------------------------

# 4. Page Breakdown

## Home Page

Sections: - Hero Section (Sri Lankan modern house banner) - Company
Introduction - Featured Designs (3--6 cards) - Why Choose Us - Call to
Action - Footer add more

## About Page

-   Company Story
-   Vision & Mission
-   Team Section
-   Certifications

## Services Page

-   Custom House Design
-   Construction
-   Renovations
-   Project Management

## Designs Page

-   Grid layout
-   Filter by:
    -   Bedrooms
    -   Floors
    -   Style (Modern / Traditional / Luxury)
-   Each card links to dynamic page

## Design Details Page

-   Large Image Gallery
-   Specifications Table
-   Description
-   Inquiry Button

## Gallery Page

-   Masonry style layout
-   Before/After showcase

## Contact Page

-   Contact Form
-   Google Map Embed
-   Phone / Email / Address

------------------------------------------------------------------------

# 5. Data Handling (No Database)

All design data will be stored as local JSON files.

Example: /data/designs.json

Example structure:

\[ { "slug": "modern-villa-01", "title": "Modern Villa 01", "bedrooms":
3, "floors": 2, "style": "Modern", "area": "2400 sqft", "price": "LKR
9,500,000", "images": \["/images/villa1-1.jpg"\] }\]

Next.js will use: - generateStaticParams() - Static Rendering

------------------------------------------------------------------------

# 6. Contact Form (Serverless -- Free)

/app/api/contact/route.ts

The API will: - Validate inputs - Send email - Return success response

No database required.

------------------------------------------------------------------------

# 7. Security Considerations

1.  Use environment variables for email API key
2.  Add reCAPTCHA to prevent spam
3.  Validate all form inputs server-side
4.  Limit request rate
5.  Sanitize user inputs

------------------------------------------------------------------------

# 8. Performance Optimization

-   Use next/image for image optimization
-   Lazy load gallery images
-   Use Static Site Generation
-   Use dynamic imports where needed

------------------------------------------------------------------------

# 9. SEO Strategy

-   Use metadata in each page
-   Use OpenGraph tags
-   Structured data (JSON-LD)
-   Proper heading hierarchy
-   Sitemap.xml
-   robots.txt

------------------------------------------------------------------------

# 10. Folder Structure

/app /about /services /designs /\[slug\] /gallery /contact /api/contact need more

/components Hero.tsx Navbar.tsx Footer.tsx DesignCard.tsx and more

/data/designs.json

/public/images

/data/designs.ts

------------------------------------------------------------------------

# 11. Deployment Steps

1.  Push to GitHub
2.  Connect to Netlify
3.  Add environment variables
4.  Deploy

------------------------------------------------------------------------

# 12. Future Improvements

-   Admin Dashboard
-   CMS integration
-   WhatsApp chat integration
-   Sinhala language support
-   Cost calculator tool

------------------------------------------------------------------------

END OF DOCUMENT
