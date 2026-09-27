import type { Metadata } from "next";
import GalleryContent from "@/components/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse real bridal makeup, engagement, reception and hair styling work by Bridal Prasadini Mallawarachchi — Salons & Academy in Sri Lanka.",
};

export default function GalleryPage() {
  return (
    <main>
      {/* Page header */}
      <section
        className="section-padding"
        style={{
          background: "linear-gradient(180deg, #2D2418 0%, #3A2E1C 100%)",
          paddingTop: "9rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="container-luxury text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}
            >
              Portfolio
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
          </div>
          <h1
            className="font-normal mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              color: "#fff",
            }}
          >
            Our Gallery
          </h1>
          <p
            className="mx-auto"
            style={{
              maxWidth: "560px",
              color: "rgba(255,255,255,0.75)",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.7,
            }}
          >
            A collection of real brides, engagements and receptions — every look
            crafted to make you feel effortlessly beautiful on your day.
          </p>
        </div>
      </section>

      <GalleryContent />
    </main>
  );
}
