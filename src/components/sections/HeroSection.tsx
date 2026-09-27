"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;
    const words = headlineRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
      }
    );
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
      style={{ backgroundColor: "#1A1411" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      >
        {/* Cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(20,15,10,0.85) 0%, rgba(20,15,10,0.4) 50%, rgba(20,15,10,0.2) 100%)",
          }}
        />
      </div>

      {/* Decorative gold line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ backgroundColor: "#C6A56B", opacity: 0.6 }}
      />

      {/* Content */}
      <div className="relative z-10 container-luxury w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
            <span
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}
            >
              The Art of Bridal Beauty
            </span>
          </motion.div>

          {/* Main headline — word-by-word GSAP reveal */}
          <h1
            ref={headlineRef}
            className="font-normal leading-[1.05] mb-3 overflow-hidden"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              color: "#FAF8F5",
            }}
          >
            {"Every Bride".split(" ").map((word, i) => (
              <span key={i} className="word inline-block mr-[0.25em] opacity-0">
                {word}
              </span>
            ))}
            <br />
            {["Deserves", "Perfection"].map((word, i) => (
              <span key={i} className="word inline-block mr-[0.25em] opacity-0" style={{ color: "#C6A56B" }}>
                {word}
              </span>
            ))}
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="text-lg md:text-xl font-light mb-12 max-w-xl"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "rgba(250,248,245,0.75)",
              letterSpacing: "0.04em",
            }}
          >
            Luxury Bridal Makeup &amp; Wedding Styling by Prasadini Mallawarachchi
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/book" className="btn-primary">
              Book Consultation
            </Link>
            <Link
              href="/gallery"
              className="btn-outline"
              style={{ borderColor: "rgba(250,248,245,0.4)", color: "#FAF8F5" }}
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex gap-10 mt-16"
          >
            {[
              { num: "10+", label: "Years Experience" },
              { num: "500+", label: "Happy Brides" },
              { num: "50+", label: "Academy Students" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-2xl md:text-3xl font-normal"
                  style={{ fontFamily: "var(--font-playfair)", color: "#C6A56B" }}
                >
                  {s.num}
                </p>
                <p
                  className="text-xs tracking-[0.12em] uppercase mt-1"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(250,248,245,0.5)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        aria-label="Scroll down"
      >
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-inter)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "#C6A56B" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
