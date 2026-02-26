import type { Metadata } from "next";
import TestimonialsPageClient from "./TestimonialsPageClient";

export const metadata: Metadata = {
    title: "Client Stories & Reviews | Trust in Craftsmanship",
    description: "Read what our homeowners have to say about their journey with Best Arch. Authentic testimonials from bespoke tropical house projects.",
};

export default function TestimonialsPage() {
    return <TestimonialsPageClient />;
}
