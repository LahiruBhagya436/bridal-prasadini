"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Academy", href: "/academy" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(250,248,245,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(198,165,107,0.15)" : "none",
          boxShadow: scrolled ? "0 1px 30px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start group">
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-inter)", color: "#C6A56B" }}
              >
                Bridal
              </span>
              <span
                className="text-xl md:text-2xl font-normal leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}
              >
                Prasadini
              </span>
              <span
                className="text-[9px] tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-inter)", color: "#666" }}
              >
                Salons &amp; Academy
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs tracking-[0.12em] uppercase transition-colors duration-300 group"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color: "#2D2D2D",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#C6A56B" }}
                  />
                </Link>
              ))}
            </nav>

            {/* Book CTA */}
            <div className="hidden lg:block">
              <Link href="/book" className="btn-primary text-xs">
                Book Consultation
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{ color: "#2D2D2D" }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col pt-24"
            style={{ backgroundColor: "rgba(250,248,245,0.98)", backdropFilter: "blur(16px)" }}
          >
            <nav className="container-luxury flex flex-col gap-6 pt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-2xl font-normal"
                    style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="pt-4"
              >
                <Link href="/book" className="btn-primary" onClick={() => setOpen(false)}>
                  Book Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
