import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Service Cost Guides — TypicalCost",
  description:
    "Expert guides on hiring contractors, understanding renovation costs, getting quotes, and saving money on home services across 50 US cities.",
};

const guides = [
  {
    href: "/guides/how-to-hire-a-contractor",
    title: "How to Hire a Contractor",
    description:
      "12 steps to protect your money. How to vet contractors, read contracts, and avoid common scams.",
    tag: "Hiring",
    readTime: "9 min read",
  },
  {
    href: "/guides/home-renovation-cost-guide",
    title: "Home Renovation Cost Guide",
    description:
      "What every room actually costs in 2025 — kitchen, bathroom, basement, whole house. Budget vs. high-end.",
    tag: "Costs",
    readTime: "8 min read",
  },
  {
    href: "/guides/how-to-get-home-service-quotes",
    title: "How to Get Home Service Quotes",
    description:
      "A complete guide to getting quotes without getting ripped off. Includes what to say and what to compare.",
    tag: "Quotes",
    readTime: "7 min read",
  },
  {
    href: "/guides/save-money-on-home-services",
    title: "27 Ways to Save Money on Home Services",
    description:
      "Timing tricks, DIY vs. hire decisions, bundling strategies, and when warranties are worth it.",
    tag: "Savings",
    readTime: "10 min read",
  },
];

export default function GuidesHubPage() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "#1a2332", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <p
            style={{
              color: "#0066cc",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            <a href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>TypicalCost</a>
            {" "}&rsaquo;{" "}Guides
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Home Service Cost Guides
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.125rem", lineHeight: 1.6 }}>
            Know what things cost before you hire. Every guide is written to help you make smarter decisions — not just get the cheapest bid.
          </p>
        </div>
      </section>

      {/* Guide cards */}
      <section style={{ maxWidth: "768px", margin: "48px auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {guides.map((guide) => (
            <a
              key={guide.href}
              href={guide.href}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "1.75rem",
                textDecoration: "none",
                display: "block",
                transition: "box-shadow 0.15s, border-color 0.15s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <span
                  style={{
                    backgroundColor: "#e8f0fe",
                    color: "#0066cc",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {guide.tag}
                </span>
                <span style={{ color: "#9ca3af", fontSize: "0.8125rem" }}>{guide.readTime}</span>
              </div>
              <h2
                style={{
                  color: "#1a2332",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: "0.625rem",
                }}
              >
                {guide.title}
              </h2>
              <p style={{ color: "#6b7280", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                {guide.description}
              </p>
              <span style={{ color: "#0066cc", fontWeight: 600, fontSize: "0.9375rem" }}>
                Read guide →
              </span>
            </a>
          ))}
        </div>

        {/* CTA to home */}
        <div
          style={{
            marginTop: "3rem",
            backgroundColor: "#0066cc",
            borderRadius: "12px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "1.375rem",
              fontWeight: 700,
              marginBottom: "0.625rem",
            }}
          >
            See Real Prices in Your City
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
            Every guide is backed by real price data across 50 US cities. Know the going rate before you call a contractor.
          </p>
          <a
            href="/"
            style={{
              backgroundColor: "#ffffff",
              color: "#0066cc",
              padding: "0.75rem 1.75rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            See Real Prices in Your City →
          </a>
        </div>
      </section>
    </div>
  );
}
