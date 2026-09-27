"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nadeesha Fernando",
    date: "December 2024",
    rating: 5,
    text: "Prasadini did my bridal makeup perfectly. I felt like a queen on my wedding day. Thank you so much! The look lasted the entire day without a single touch-up.",
    service: "Bridal Makeup",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 2,
    name: "Thisuri Wickramasinghe",
    date: "November 2024",
    rating: 5,
    text: "From the trial to the wedding day, Prasadini was absolutely professional and talented. My hair and makeup were beyond my expectations. Worth every cent.",
    service: "Bridal Makeup & Hair",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: 3,
    name: "Samantha Perera",
    date: "October 2024",
    rating: 5,
    text: "The home service was incredible. Prasadini and her team arrived on time and created the most beautiful look for my engagement. Highly recommend to every bride.",
    service: "Engagement Makeup — Home Service",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    id: 4,
    name: "Dinusha Rajapaksha",
    date: "September 2024",
    rating: 5,
    text: "I've never felt more beautiful in my life. Prasadini truly understood my vision and brought it to life. The bridesmaids all looked stunning too. A true professional.",
    service: "Bridal + Bridesmaids Package",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <section ref={ref} className="section-padding" style={{ backgroundColor: "#2D2D2D" }}>
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
              Love Stories
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
          </div>
          <h2
            className="font-normal"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FAF8F5" }}
          >
            Real Brides, Real Stories
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {/* Quote */}
          <div className="text-center mb-10">
            <div
              className="text-6xl mb-6 leading-none"
              style={{ color: "#C6A56B", fontFamily: "var(--font-playfair)" }}
            >
              "
            </div>

            <motion.p
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-light mb-8 leading-relaxed"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "rgba(250,248,245,0.85)",
                fontStyle: "italic",
              }}
            >
              {t.text}
            </motion.p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} style={{ color: "#C6A56B", fill: "#C6A56B" }} />
              ))}
            </div>

            {/* Avatar + name */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-14 h-14 rounded-full overflow-hidden"
                style={{ border: "2px solid #C6A56B" }}
              >
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p
                  className="font-medium"
                  style={{ fontFamily: "var(--font-manrope)", color: "#FAF8F5" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs tracking-wider"
                  style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}
                >
                  {t.service} — {t.date}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:border-[#C6A56B] hover:text-[#C6A56B]"
              style={{ border: "1px solid #444", color: "#666" }}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 6,
                    height: 2,
                    backgroundColor: i === active ? "#C6A56B" : "#444",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:border-[#C6A56B] hover:text-[#C6A56B]"
              style={{ border: "1px solid #444", color: "#666" }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
