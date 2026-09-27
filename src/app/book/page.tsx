"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(9, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  weddingDate: z.string().min(1, "Please select your wedding date"),
  venue: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  contactPreference: z.enum(["whatsapp", "messenger", "email"]),
  requests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const services = [
  "Luxury Bridal Makeup",
  "Hair Styling & Updos",
  "Bridal Makeup + Hair Package",
  "Pre Wedding Glow Session",
  "Engagement Makeup",
  "Reception Makeup",
  "Bridesmaids Package",
  "Home Service",
  "Beauty Academy Enrollment",
];

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { contactPreference: "whatsapp" },
  });

  const onSubmit = async (data: BookingFormData) => {
    // Replace with actual form submission (e.g., Formspree, EmailJS, or API route)
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Booking data:", data);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3.5 text-sm border-b bg-transparent outline-none transition-colors duration-300 focus:border-[#C6A56B]";
  const inputStyle = {
    fontFamily: "var(--font-manrope)",
    color: "#2D2D2D",
    borderColor: "#DDD",
    borderBottom: "1px solid #DDD",
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FAF8F5" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 max-w-md"
        >
          <CheckCircle size={52} style={{ color: "#C6A56B", margin: "0 auto 1.5rem" }} />
          <h2
            className="text-3xl font-normal mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}
          >
            Thank You
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-manrope)", color: "#666" }}
          >
            Your consultation request has been received. Prasadini will personally reach out within 24 hours to confirm your appointment.
          </p>
          <p className="mt-4 text-sm" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
            We can't wait to begin your bridal journey.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#FAF8F5" }}>
      {/* Hero */}
      <div
        className="pt-32 pb-20 text-center"
        style={{ backgroundColor: "#2D2D2D" }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
              Begin Your Journey
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
          </div>
          <h1
            className="font-normal"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#FAF8F5" }}
          >
            Book a Consultation
          </h1>
          <p
            className="mt-4 text-lg font-light"
            style={{ fontFamily: "var(--font-cormorant)", color: "rgba(250,248,245,0.65)", fontStyle: "italic" }}
          >
            Every great bridal look starts with a conversation.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="section-padding">
        <div className="container-luxury max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                Full Name *
              </label>
              <input
                {...register("name")}
                className={inputClass}
                style={inputStyle}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                  Phone / WhatsApp *
                </label>
                <input
                  {...register("phone")}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="+94 70 000 0000"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                  Email Address *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className={inputClass}
                  style={inputStyle}
                  placeholder="you@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            {/* Wedding date + venue */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                  Wedding Date *
                </label>
                <input
                  {...register("weddingDate")}
                  type="date"
                  className={inputClass}
                  style={inputStyle}
                />
                {errors.weddingDate && <p className="mt-1 text-xs text-red-500">{errors.weddingDate.message}</p>}
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                  Venue / Location
                </label>
                <input
                  {...register("venue")}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Wedding venue name"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                Service Required *
              </label>
              <select
                {...register("service")}
                className={inputClass}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>}
            </div>

            {/* Contact preference */}
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                Preferred Contact Method *
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: "whatsapp", label: "WhatsApp" },
                  { value: "messenger", label: "Messenger" },
                  { value: "email", label: "Email" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value={opt.value}
                      {...register("contactPreference")}
                      className="accent-[#C6A56B]"
                    />
                    <span className="text-sm" style={{ fontFamily: "var(--font-manrope)", color: "#666" }}>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Special requests */}
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                Special Requests or Notes
              </label>
              <textarea
                {...register("requests")}
                rows={4}
                className={inputClass}
                style={{ ...inputStyle, resize: "none", borderBottom: "none", border: "1px solid #DDD", padding: "1rem" }}
                placeholder="Tell us about your vision, skin type, allergies, or any special requirements..."
              />
            </div>

            {/* Divider */}
            <div className="h-px" style={{ backgroundColor: "#EEE" }} />

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary min-w-48 justify-center"
              >
                {isSubmitting ? "Sending..." : "Request Consultation"}
              </button>
              <p className="mt-4 text-xs" style={{ color: "#BBB", fontFamily: "var(--font-inter)" }}>
                We'll respond within 24 hours. Your information is kept strictly confidential.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
