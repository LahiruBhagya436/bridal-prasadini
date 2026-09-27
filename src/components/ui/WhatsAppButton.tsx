"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "94700000000"; // replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Prasadini, I would like to book a bridal consultation."
);

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Quick reply popup */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(198,165,107,0.15)",
                  width: 300,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 p-4" style={{ backgroundColor: "#25D366" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
                    BP
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold leading-tight">Prasadini</p>
                    <p className="text-green-100 text-xs">Bridal Expert</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-200" />
                      <p className="text-green-100 text-xs">Online now</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-white opacity-70 hover:opacity-100"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Body */}
                <div className="p-4">
                  <div
                    className="rounded-xl p-3 text-sm mb-3"
                    style={{ backgroundColor: "#F0F0F0", color: "#333", fontFamily: "var(--font-manrope)" }}
                  >
                    Hi there! 👋 Welcome to Bridal Prasadini. How can I help you plan your perfect bridal look? ✨
                  </div>
                  <p className="text-xs mb-3" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                    Typically replies within a few minutes
                  </p>

                  {/* Quick replies */}
                  <div className="flex flex-col gap-2">
                    {[
                      "💄 Book a Consultation",
                      "💰 View Pricing",
                      "📸 See Portfolio",
                    ].map((msg) => (
                      <a
                        key={msg}
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg.replace(/^[^\s]+\s/, ""))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-center py-2 px-3 rounded-full transition-all duration-300 hover:bg-opacity-80"
                        style={{
                          border: "1px solid #25D366",
                          color: "#25D366",
                          fontFamily: "var(--font-inter)",
                          fontWeight: 500,
                        }}
                      >
                        {msg}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Hours footer */}
                <div className="px-4 pb-4">
                  <p className="text-xs text-center" style={{ color: "#bbb", fontFamily: "var(--font-inter)" }}>
                    Business hours: Mon–Sat 8am–7pm
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="relative"
          >
            {/* Pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "#25D366" }}
            />

            <button
              onClick={() => setShowPopup(!showPopup)}
              className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110"
              style={{ backgroundColor: "#25D366" }}
              aria-label="Chat on WhatsApp"
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>

              {/* Unread badge */}
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold"
                style={{ backgroundColor: "#FF3B30", fontFamily: "var(--font-inter)" }}
              >
                1
              </span>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
