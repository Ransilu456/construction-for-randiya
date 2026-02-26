import { Suspense } from "react";
import type { Metadata } from "next";
import DesignsPageClient from "./DesignsPageClient";

export const metadata: Metadata = {
    title: "Modern House Plans & Architectural Models",
    description: "Browse our collection of architectural models designed for tropical living. From single-story villas to luxury multi-level residences.",
};

export default function DesignsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="animate-pulse text-accent tracking-widest uppercase text-xs font-semibold">
                    Loading Portfolio...
                </div>
            </div>
        }>
            <DesignsPageClient />
        </Suspense>
    );
}
