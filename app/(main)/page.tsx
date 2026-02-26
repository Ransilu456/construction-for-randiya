
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Tropical Architecture & Construction in Sri Lanka",
  description: "Experience the pinnacle of tropical modernism. We design and build luxury sanctuaries in Sri Lanka, blending indigenous wisdom with modern engineering.",
};

import FeaturedDesigns from "@/components/Sections/FeaturedDesigns";
import HeroSection from "@/components/Sections/Hero";
import CTA from "@/components/ui/CTA";
import Testimonials from "@/components/Sections/Testimonials";
import Trust from "@/components/Sections/Trust";
import Intro from "@/components/Sections/Intro";
import HouseStory from "@/components/Sections/HouseStory";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <HeroSection />
      <Intro />
      <Trust />
      <HouseStory />
      <FeaturedDesigns />
      <Testimonials />
      <CTA />
    </main>
  );
}

