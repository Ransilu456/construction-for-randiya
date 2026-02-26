import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Best Arch | Tropical Modern House Construction Sri Lanka",
    template: "%s | Best Arch"
  },
  description: "Bespoke Tropical Modern Sanctuaries in Sri Lanka. Blending indigenous architectural wisdom with precise structural engineering and contemporary minimalism.",
  keywords: ["house construction sri lanka", "tropical architecture", "modern home design", "luxury villas sri lanka", "architectural studio chilaw", "turnkey construction"],
  authors: [{ name: "Best Arch" }],
  creator: "Best Arch",
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://modernhouse.lk",
    siteName: "Best Arch",
    title: "Best Arch | Tropical Modern House Construction Sri Lanka",
    description: "Crafting Tropical Modern Sanctuaries in Sri Lanka. Blending indigenous architectural wisdom with precise structural engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Arch | Tropical Modern Construction",
    description: "Bespoke Tropical Modern Sanctuaries in Sri Lanka.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
