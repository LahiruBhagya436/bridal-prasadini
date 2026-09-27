import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Bridal beauty tips, wedding-day timelines, skincare prep and makeup inspiration from Bridal Prasadini Mallawarachchi — Salons & Academy.",
};

const posts = [
  {
    id: 1,
    category: "Bridal Tips",
    title: "5 Skincare Steps to Start 3 Months Before Your Wedding",
    excerpt:
      "Glowing bridal skin starts long before the big day. Here's the simple routine we recommend to every bride for a flawless, camera-ready complexion.",
    date: "Coming soon",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
  {
    id: 2,
    category: "Wedding Day",
    title: "The Perfect Wedding-Morning Timeline for Hair & Makeup",
    excerpt:
      "Running late on the morning ruins photos and nerves. This is how we plan the hours so you're ready, calm and radiant right on schedule.",
    date: "Coming soon",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
  },
  {
    id: 3,
    category: "Inspiration",
    title: "Soft Glam vs. Classic Bridal: Which Look Is Right for You?",
    excerpt:
      "From natural soft glam to timeless classic bridal, we break down the most-loved looks and how to choose the one that suits your dress and venue.",
    date: "Coming soon",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&q=80",
  },
  {
    id: 4,
    category: "Academy",
    title: "Thinking of a Career in Bridal Makeup? Start Here",
    excerpt:
      "Our academy students often ask how to break into bridal artistry. Here are the first steps, kit essentials and skills that matter most.",
    date: "Coming soon",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
  },
  {
    id: 5,
    category: "Bridal Tips",
    title: "How to Make Your Bridal Makeup Last All Day (and Night)",
    excerpt:
      "Sweat, tears and long hours are no match for the right prep and products. Our artists share the techniques that keep your look perfect.",
    date: "Coming soon",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80",
  },
  {
    id: 6,
    category: "Inspiration",
    title: "Choosing Hair Accessories That Complement Your Look",
    excerpt:
      "The right veil, comb or floral piece completes a bridal style. Here's how we match accessories to your hair, dress and overall theme.",
    date: "Coming soon",
    image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=800&q=80",
  },
];

export default function BlogPage() {
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
              Journal
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
            The Bridal Journal
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
            Beauty tips, wedding-day guides and inspiration from our artists and
            academy — to help you look and feel your best.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="container-luxury">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="card-luxury overflow-hidden flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ aspectRatio: "3/2" }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{ color: "#C6A56B", fontFamily: "var(--font-inter)", fontWeight: 600 }}
                  >
                    {post.category}
                  </span>
                  <h2
                    className="font-normal mb-3"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.35rem",
                      lineHeight: 1.3,
                      color: "#2D2D2D",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: "#666",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    className="mt-auto text-xs tracking-[0.15em] uppercase"
                    style={{ color: "#999", fontFamily: "var(--font-inter)" }}
                  >
                    {post.date}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: "#2D2D2D",
              }}
            >
              Ready to plan your bridal look?
            </p>
            <Link href="/book" className="btn-primary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
