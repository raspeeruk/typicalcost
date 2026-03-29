import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Replacement Cost: What to Expect in 2025",
  description:
    "National averages, cost by material, and everything that affects your final price. What asphalt, metal, and slate roofs actually cost — plus how to choose a contractor.",
};

const materialCosts = [
  { material: "3-tab asphalt shingles", perSqft: "$3.50–$5.50", avg1500: "$8,000–$12,000", avg2500: "$13,000–$21,000", lifespan: "20–25 years" },
  { material: "Architectural asphalt", perSqft: "$4.50–$7.00", avg1500: "$10,000–$16,000", avg2500: "$17,000–$27,000", lifespan: "25–30 years" },
  { material: "Metal (standing seam)", perSqft: "$9.00–$16.00", avg1500: "$18,000–$32,000", avg2500: "$30,000–$55,000", lifespan: "40–70 years" },
  { material: "Metal (corrugated)", perSqft: "$7.00–$12.00", avg1500: "$14,000–$24,000", avg2500: "$24,000–$42,000", lifespan: "25–40 years" },
  { material: "Wood shake/shingle", perSqft: "$6.50–$11.00", avg1500: "$13,000–$22,000", avg2500: "$22,000–$38,000", lifespan: "20–30 years" },
  { material: "Slate (natural)", perSqft: "$15.00–$30.00", avg1500: "$30,000–$60,000", avg2500: "$52,000–$100,000+", lifespan: "75–150 years" },
  { material: "Tile (concrete/clay)", perSqft: "$10.00–$20.00", avg1500: "$20,000–$40,000", avg2500: "$34,000–$70,000", lifespan: "40–50+ years" },
];

const faqs = [
  {
    q: "How long does a roof replacement take?",
    a: "For a typical single-family home, 1–3 days is the norm. A straightforward 1,500 sq ft ranch with architectural shingles is often done in a single day. Larger homes, complex roof geometries (many valleys, dormers, chimneys), or premium materials like slate can take 4–7 days. Weather delays are common — contractors schedule conservatively and most won't start a job they can't complete before a forecast rain.",
  },
  {
    q: "Can I do a partial roof replacement?",
    a: "Yes, but with caveats. Replacing a damaged section is technically possible, but matching shingles to a roof that's been weathering for 10+ years is difficult — the new section will typically be visibly different. For insurance claims, partial replacement is common. For aesthetic and structural consistency, full replacement is usually recommended when more than 25–30% of the roof needs attention or when the existing roof is over 15 years old.",
  },
  {
    q: "Does homeowners insurance cover roof replacement?",
    a: "It depends on the cause and your policy. Sudden storm damage (hail, wind, falling trees) is typically covered. Wear and tear, age-related deterioration, and poor maintenance are not. Age matters: some policies only pay actual cash value (depreciated) on roofs over 15–20 years old, not full replacement cost. Always file a claim for storm damage — let the adjuster assess. Don't let contractors tell you what's covered; call your insurer directly.",
  },
  {
    q: "Metal vs. asphalt shingles — which is better value?",
    a: "Metal wins on lifespan and lifetime cost; asphalt wins on upfront cost. A metal roof at $25,000 that lasts 50 years costs $500/year. Architectural shingles at $15,000 lasting 28 years cost $535/year. The economics are similar — but metal typically adds more resale value, handles extreme weather better, and requires less maintenance. If you plan to stay in the home 15+ years and can absorb the higher upfront cost, metal is often the better value. If you're selling in the next 5–10 years, quality asphalt makes more sense.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function RoofReplacementCostGuidePage() {
  const font = "'Outfit', sans-serif";
  const navy = "#1a2332";
  const blue = "#0066cc";
  const body = "#374151";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: font }}>
        <section style={{ backgroundColor: navy, padding: "64px 24px 56px" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto" }}>
            <p style={{ color: "#9ca3af", fontSize: "0.8125rem", marginBottom: "0.875rem" }}>
              <a href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>TypicalCost</a>
              {" "}&rsaquo;{" "}
              <a href="/guides" style={{ color: "#9ca3af", textDecoration: "none" }}>Guides</a>
              {" "}&rsaquo;{" "}Roof Replacement Cost
            </p>
            <h1
              style={{
                color: "#ffffff",
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Roof Replacement Cost: What to Expect in 2025
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "600px" }}>
              National average: $8,000–$20,000 for a typical home. But material, pitch, and local labor rates can push that number much higher or lower. Here&apos;s the complete breakdown.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: "768px", margin: "0 auto", padding: "48px 24px 64px" }}>

          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <p style={{ color: body, fontSize: "1.0625rem", lineHeight: 1.75, margin: 0 }}>
              Roof replacement is one of the highest-variance home improvement projects you&apos;ll ever price. A 1,500 sq ft ranch with basic asphalt shingles might cost $9,000. That same job with steep pitch, multiple valleys, and a chimney rebuild could hit $22,000. Understanding what drives the price lets you read quotes intelligently and negotiate from a position of knowledge.
            </p>
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Cost by Material — Full Comparison
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Material selection is the single biggest cost driver. Here&apos;s what different materials cost per square foot and for typical home sizes:
          </p>
          <div style={{ overflowX: "auto", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "12px", marginBottom: "3rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ backgroundColor: navy, color: "#ffffff" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Material</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Per Sq Ft (installed)</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>1,500 sq ft home</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>2,500 sq ft home</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Lifespan</th>
                </tr>
              </thead>
              <tbody>
                {materialCosts.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                    <td style={{ padding: "0.75rem 1rem", color: navy, fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{row.material}</td>
                    <td style={{ padding: "0.75rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.perSqft}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "#059669", fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{row.avg1500}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "#059669", fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{row.avg2500}</td>
                    <td style={{ padding: "0.75rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.lifespan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            What Adds to the Price
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The base material cost is just the starting point. These factors commonly push final quotes higher:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
            {[
              {
                title: "Roof pitch (steepness)",
                body: "Roofers add 15–30% on steep pitches (7:12 or higher) because of safety equipment, slower installation, and higher material waste. A 12:12 pitch (45°) can add $2,000–$5,000 to a typical job.",
              },
              {
                title: "Valleys, dormers, and penetrations",
                body: "Every change in roofline direction — valleys, dormers, skylights, chimneys — requires additional flashing, more labor, and more precision. A roof with 8 valleys costs significantly more per square than a simple hip roof.",
              },
              {
                title: "Tear-off and disposal",
                body: "Most jurisdictions limit roof layers to 2. If your current roof is 2 layers deep, tear-off is mandatory — adding $1,000–$3,000 to the job. Disposal adds further cost in many urban markets.",
              },
              {
                title: "Deck repairs",
                body: "Once old shingles come off, inspectors often find rotted or damaged decking (the plywood substrate). Board repairs are typically billed per sheet — $75–$150/sheet — and can add $500–$3,000 to jobs on older homes.",
              },
              {
                title: "Chimney and flashing",
                body: "Chimney flashing is often the first place a roof leaks. Repointing or replacing chimney flashing adds $200–$600 per chimney. Full chimney rebuild can run $1,500–$4,000.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderLeft: `4px solid ${blue}`,
                  borderRadius: "0 12px 12px 0",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <h3 style={{ color: navy, fontWeight: 700, fontSize: "1rem", marginBottom: "0.375rem" }}>{item.title}</h3>
                <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Repair vs. Replacement — How to Decide
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Not every roofing problem requires full replacement. Use this framework:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "3rem" }}>
            {[
              { label: "Roof age under 10 years", action: "Repair", color: "#059669", reason: "Plenty of life left. A targeted repair is cost-effective." },
              { label: "Damage confined to one section, &lt;10% of total area", action: "Repair", color: "#059669", reason: "Localized damage on a younger roof is patchable." },
              { label: "Roof age 15–20 years with multiple leak points", action: "Replace", color: "#dc2626", reason: "Repairs will keep coming. Full replacement delivers clean warranty and long-term certainty." },
              { label: "More than 2 existing layers", action: "Replace", color: "#dc2626", reason: "Code limits and structural weight concerns make adding another layer a bad idea." },
              { label: "Storm damage with insurance coverage", action: "Replace", color: blue, reason: "Insurance claim covers replacement — there&apos;s no reason to do a partial repair." },
              { label: "Selling within 2 years, minor issues", action: "Repair", color: "#d97706", reason: "Unless replacement is needed for the sale, a repair and disclosure is more cost-effective." },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "1rem 1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    backgroundColor: row.color,
                    color: "#ffffff",
                    borderRadius: "8px",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: "0.125rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.action}
                </span>
                <div>
                  <div style={{ color: navy, fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.25rem" }} dangerouslySetInnerHTML={{ __html: row.label }} />
                  <div style={{ color: body, fontSize: "0.875rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: row.reason }} />
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            How to Choose a Roofing Contractor
          </h2>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "Verify current state contractor license — roofing license requirements vary by state",
                "Confirm general liability insurance ($1M+) and workers&apos; comp — get certificates, not just verbal confirmation",
                "Ask if they&apos;re a manufacturer-certified installer (GAF Master Elite, Owens Corning Preferred) — unlocks extended warranties",
                "Check for a physical business address — storm chaser contractors often operate from post boxes",
                "Request 3 local references for jobs completed in the last 12 months",
                "Confirm they pull the permit — some skip it to cut costs; you&apos;re liable if they do",
                "Understand the payment schedule — never pay more than 10% down before work starts",
                "Get both material warranty and labor/workmanship warranty in writing",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: blue, fontWeight: 700, minWidth: "1.5rem" }}>✓</span>
                  <span style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              backgroundColor: blue,
              borderRadius: "12px",
              padding: "2rem",
              textAlign: "center",
              marginBottom: "3rem",
              marginTop: "2rem",
            }}
          >
            <h2 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              See what roofing costs in your city
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              TypicalCost shows real contractor price ranges for roofing, HVAC, electrical, and 50+ home services across the US.
            </p>
            <a
              href="/"
              style={{
                backgroundColor: "#ffffff",
                color: blue,
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

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem" }}>
                <h3 style={{ color: navy, fontWeight: 700, fontSize: "1rem", marginBottom: "0.625rem" }}>{faq.q}</h3>
                <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: navy, borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
            <h2 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Get multiple quotes before you decide
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Roofing quotes vary 30–60% for the same job. See the going rate in your city before calling your first contractor.
            </p>
            <a
              href="/"
              style={{
                backgroundColor: blue,
                color: "#ffffff",
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
        </div>
      </div>
    </>
  );
}
