"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const accolades = [
  { num: "10+", label: "Years of Artistry" },
  { num: "500+", label: "Brides Transformed" },
  { num: "50+", label: "Academy Graduates" },
  { num: "5★", label: "Google Rating" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding overflow-hidden" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=85"
                alt="Prasadini Mallawarachchi — Luxury Bridal Makeup Artist"
                fill
                className="object-cover object-center transition-transform duration-[1.5s] hover:scale-105"
              />
              {/* Gold frame accent */}
              <div
                className="absolute -bottom-6 -right-6 w-2/3 h-2/3 -z-10"
                style={{ border: "1px solid rgba(198,165,107,0.35)" }}
              />
            </div>

            {/* Floating accolade card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-4 -left-4 md:-left-8 p-6 shadow-2xl"
              style={{ backgroundColor: "#C6A56B", maxWidth: 200 }}
            >
              <p
                className="text-3xl font-normal mb-1"
                style={{ fontFamily: "var(--font-playfair)", color: "white" }}
              >
                10+
              </p>
              <p
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.8)" }}
              >
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}
              >
                The Artist
              </span>
            </div>

            <h2
              className="font-normal mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "#2D2D2D",
              }}
            >
              Crafting Timeless{" "}
              <span style={{ color: "#C6A56B" }}>Brides</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-manrope)", color: "#666", fontWeight: 300 }}
            >
              With over a decade of experience, Prasadini Mallawarachchi has established herself as Sri Lanka's most trusted luxury bridal makeup artist. Her work is defined by a deep understanding of each bride's unique beauty — enhancing natural features with a flawless, editorial finish that photographs beautifully and lasts all day.
            </p>

            <p
              className="text-base leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-manrope)", color: "#666", fontWeight: 300 }}
            >
              Beyond individual bridal services, Prasadini has trained over 50 professional makeup artists through her prestigious Beauty Academy, shaping the next generation of Sri Lankan beauty professionals.
            </p>

            {/* Accolades grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {accolades.map((a) => (
                <div key={a.label} className="flex flex-col">
                  <span
                    className="text-2xl font-normal mb-1"
                    style={{ fontFamily: "var(--font-playfair)", color: "#C6A56B" }}
                  >
                    {a.num}
                  </span>
                  <span
                    className="text-xs tracking-[0.1em] uppercase"
                    style={{ fontFamily: "var(--font-inter)", color: "#999" }}
                  >
                    {a.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mb-8">
              <p
                className="text-3xl"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#2D2D2D",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Prasadini Mallawarachchi
              </p>
            </div>

            <Link href="/about" className="btn-outline">
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
