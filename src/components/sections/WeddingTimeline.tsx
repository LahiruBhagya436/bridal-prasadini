"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We understand your style, preferences, and wedding vision in a personal meeting.",
    icon: "✦",
  },
  {
    num: "02",
    title: "Trial Makeup",
    desc: "Experience your perfect bridal look before the big day. Refinements welcome.",
    icon: "✦",
  },
  {
    num: "03",
    title: "Wedding Plan",
    desc: "We plan every detail for your big day — timeline, team, and contingencies.",
    icon: "✦",
  },
  {
    num: "04",
    title: "Wedding Day",
    desc: "Relax. We arrive early, work efficiently, and ensure you look flawless from start to finish.",
    icon: "✦",
  },
  {
    num: "05",
    title: "Memories Forever",
    desc: "Beautiful moments captured in photographs that will last a lifetime.",
    icon: "✦",
  },
];

export default function WeddingTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
              The Journey
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
          </div>
          <h2
            className="font-normal"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2D2D2D" }}
          >
            The Bridal Journey
          </h2>
        </motion.div>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{ backgroundColor: "rgba(198,165,107,0.3)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center"
              >
                {/* Circle number */}
                <div
                  className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center lg:mb-6"
                  style={{ backgroundColor: "#FAF8F5", border: "1px solid #C6A56B" }}
                >
                  {/* Gold dot at center on desktop */}
                  <div className="hidden lg:block absolute -top-px left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: "#C6A56B", top: "-5px" }} />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Mobile vertical line */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute left-6 h-8 w-px mt-12"
                    style={{ backgroundColor: "rgba(198,165,107,0.3)" }}
                  />
                )}

                <div className="lg:px-2">
                  <h3
                    className="text-lg font-normal mb-2"
                    style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-manrope)", color: "#888", fontWeight: 300 }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
