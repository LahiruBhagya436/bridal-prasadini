import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SmoothScroll from "@/components/providers/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bridal Prasadini Mallawarachchi — Luxury Bridal Makeup & Academy",
    template: "%s | Bridal Prasadini",
  },
  description:
    "Sri Lanka's premier luxury bridal makeup artist & academy. Bespoke bridal makeup, hair styling, and wedding beauty services by Prasadini Mallawarachchi.",
  keywords: [
    "bridal makeup Sri Lanka",
    "luxury wedding makeup",
    "Prasadini Mallawarachchi",
    "bridal academy",
    "wedding hair styling",
    "bridal beauty salon",
  ],
  authors: [{ name: "Prasadini Mallawarachchi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bridal Prasadini Mallawarachchi",
    title: "Bridal Prasadini Mallawarachchi — Luxury Bridal Makeup & Academy",
    description:
      "Every bride deserves perfection. Discover Sri Lanka's finest luxury bridal makeup and styling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridal Prasadini Mallawarachchi",
    description: "Luxury Bridal Makeup & Wedding Styling",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${manrope.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
