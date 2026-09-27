"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Bridal", "Engagement", "Reception", "Hair", "Academy"];

// NOTE: Placeholder images — swap the `src` values with real photos from the
// Bridal Prasadini Facebook page (download them into /public/gallery and point
// these to /gallery/<file>.jpg).
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80", cat: "Bridal", span: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80", cat: "Engagement", span: "normal" },
  { id: 3, src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80", cat: "Reception", span: "normal" },
  { id: 4, src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&q=80", cat: "Bridal", span: "tall" },
  { id: 5, src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80", cat: "Hair", span: "normal" },
  { id: 6, src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80", cat: "Bridal", span: "normal" },
  { id: 7, src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80", cat: "Reception", span: "tall" },
  { id: 8, src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80", cat: "Academy", span: "normal" },
  { id: 9, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80", cat: "Bridal", span: "normal" },
  { id: 10, src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80", cat: "Engagement", span: "tall" },
  { id: 11, src: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=800&q=80", cat: "Hair", span: "normal" },
  { id: 12, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", cat: "Reception", span: "normal" },
  { id: 13, src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80", cat: "Academy", span: "tall" },
  { id: 14, src: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80", cat: "Bridal", span: "normal" },
  { id: 15, src: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=800&q=80", cat: "Engagement", span: "normal" },
  { id: 16, src: "https://images.unsplash.com/photo-1512257912092-65f65c1a1e6d?w=800&q=80", cat: "Hair", span: "tall" },
];

const stories = [
  {
    id: "s1",
    name: "Nethmi & Kasun",
    quote:
      "Prasadini made me feel like the most beautiful version of myself on my wedding day. The makeup lasted from morning to the very last dance.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80",
  },
  {
    id: "s2",
    name: "Sachini",
    quote:
      "From the trial to the big day, everything was flawless. My photos look stunning and the glow was exactly what I dreamed of.",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&q=80",
  },
  {
    id: "s3",
    name: "Dilini & Ruwan",
    quote:
      "The team was calm, professional and so talented. Both my engagement and homecoming looks were absolutely perfect.",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80",
  },
];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.cat === activeCategory);

  return (
    <>
      <section ref={ref} className="section-padding" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="container-luxury">
          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 text-xs tracking-[0.12em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  backgroundColor: activeCategory === cat ? "#C6A56B" : "transparent",
                  color: activeCategory === cat ? "white" : "#666",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "#C6A56B" : "#DDD",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry grid */}
          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="break-inside-avoid mb-4 group relative cursor-pointer overflow-hidden"
                  onClick={() => setLightbox(img.id)}
                >
                  <img
                    src={img.src}
                    alt={`${img.cat} gallery`}
                    className="w-full block transition-transform duration-700 group-hover:scale-105"
                    style={{ aspectRatio: img.span === "tall" ? "3/4" : "1/1" }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ backgroundColor: "rgba(44,32,20,0.45)" }}
                  >
                    <ZoomIn size={28} color="white" strokeWidth={1} />
                  </div>
                  <div
                    className="absolute top-3 left-3 px-2 py-1 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      backgroundColor: "#C6A56B",
                      color: "white",
                      fontFamily: "var(--font-inter)",
                      fontSize: "9px",
                    }}
                  >
                    {img.cat}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Real Bride Stories */}
      <section id="stories" className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}
              >
                Testimonials
              </span>
              <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
            </div>
            <h2
              className="font-normal"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#2D2D2D",
              }}
            >
              Real Bride Stories
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {stories.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-luxury overflow-hidden"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                <div className="p-6">
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-cormorant, var(--font-playfair))",
                      fontSize: "1.15rem",
                      lineHeight: 1.6,
                      color: "#555",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{s.quote}&rdquo;
                  </p>
                  <p
                    className="text-sm tracking-[0.15em] uppercase"
                    style={{ color: "#C6A56B", fontFamily: "var(--font-inter)", fontWeight: 600 }}
                  >
                    {s.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(20,14,10,0.9)", backdropFilter: "blur(8px)" }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white opacity-70 hover:opacity-100 transition-opacity"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            {galleryImages.find((img) => img.id === lightbox) && (
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={galleryImages.find((img) => img.id === lightbox)!.src}
                alt="Gallery"
                className="max-h-[85vh] max-w-[90vw] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
