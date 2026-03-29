import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Replacement Cost: When to Repair vs Replace Your System",
  description:
    "Central AC and furnace replacement costs $4,000–$12,000 for most homes. Here's the complete breakdown by system type, plus the repair vs. replace decision framework and rebates available in 2025.",
};

const systemCosts = [
  {
    system: "Central AC only",
    range: "$3,500–$7,500",
    notes: "Single unit, existing ductwork reused",
  },
  {
    system: "Gas furnace only",
    range: "$2,500–$6,500",
    notes: "80–96% AFUE efficiency ratings",
  },
  {
    system: "AC + furnace (split system)",
    range: "$5,000–$12,000",
    notes: "Most common whole-home replacement",
  },
  {
    system: "Heat pump (air-source)",
    range: "$4,500–$10,000",
    notes: "Heats and cools, works best in mild climates",
  },
  {
    system: "Heat pump (ground-source/geothermal)",
    range: "$15,000–$30,000",
    notes: "Highest efficiency, highest upfront cost",
  },
  {
    system: "Mini-split (single zone)",
    range: "$2,000–$5,500",
    notes: "No ductwork required, great for additions",
  },
  {
    system: "Mini-split (multi-zone, 3–4 zones)",
    range: "$7,000–$14,500",
    notes: "Whole-home zoned heating and cooling",
  },
  {
    system: "Packaged unit (rooftop/ground)",
    range: "$3,500–$8,000",
    notes: "Common in commercial and single-story homes without basements",
  },
];

const decisionTable = [
  {
    scenario: "System is under 10 years old",
    verdict: "Repair",
    color: "#059669",
    reasoning: "Plenty of lifespan remaining. Repair unless it&apos;s a major component (compressor, heat exchanger).",
  },
  {
    scenario: "Repair cost × system age &gt; $5,000",
    verdict: "Replace",
    color: "#dc2626",
    reasoning: "The 5,000 Rule: if (repair cost) × (years old) exceeds $5,000, replacement is better value.",
  },
  {
    scenario: "System uses R-22 refrigerant",
    verdict: "Replace",
    color: "#dc2626",
    reasoning: "R-22 (Freon) is phased out and costs $50–$175/lb to add. Each leak means expensive, temporary repair.",
  },
  {
    scenario: "System is 15+ years old",
    verdict: "Replace",
    color: "#dc2626",
    reasoning: "Average lifespan is 15–20 years. An old system at full repair cost buys minimal remaining life.",
  },
  {
    scenario: "Minor repair (capacitor, contactor, filter)",
    verdict: "Repair",
    color: "#059669",
    reasoning: "These are $150–$400 fixes. Not a reason to replace unless the system has multiple simultaneous issues.",
  },
  {
    scenario: "Inconsistent temperatures, high bills",
    verdict: "Evaluate",
    color: "#d97706",
    reasoning: "Could be ductwork, insulation, or equipment. Get a full load calculation before replacing anything.",
  },
  {
    scenario: "Compressor failure on a 12+ year old system",
    verdict: "Replace",
    color: "#dc2626",
    reasoning: "Compressor replacement ($1,500–$2,500) on an old system buys 2–4 years. Full replacement wins.",
  },
];

const faqs = [
  {
    q: "How long does HVAC installation take?",
    a: "For a standard split system replacement (AC + furnace) using existing ductwork, one day is typical — a 6–10 hour job for an experienced crew. New construction, complex systems, or jobs requiring ductwork modification can take 2–3 days. Mini-split installations run 4–8 hours per zone. If permits are required (and they almost always should be), the inspection adds a day at the end.",
  },
  {
    q: "What SEER rating should I choose?",
    a: "SEER (Seasonal Energy Efficiency Ratio) measures cooling efficiency — higher is more efficient but more expensive upfront. The federal minimum is 14 SEER (13.4 SEER2 under the new standard). For most climates, 16–18 SEER is the sweet spot: meaningful energy savings, reasonable payback period of 5–8 years. In hot climates (Texas, Florida, Arizona) where the AC runs 6+ months, 18–21 SEER starts to make sense. Above 21 SEER, the economics rarely pencil out for residential use.",
  },
  {
    q: "Are mini-splits worth it?",
    a: "Yes — in specific situations. Mini-splits are ideal for: home additions or detached garages where extending ducts is expensive, rooms with persistent hot/cold spots, older homes with no existing ductwork, and supplemental cooling for a finished basement or attic. They&apos;re more efficient than central systems and provide precise zone control. The downside: higher upfront cost per zone, outdoor condenser units require placement planning, and some homeowners dislike the aesthetic of wall-mounted air handlers.",
  },
  {
    q: "What&apos;s the best HVAC brand?",
    a: "There&apos;s less difference between top-tier brands than marketing suggests. Carrier, Trane, Lennox, and Rheem all make reliable residential equipment. What matters more: the installing contractor (their quality control, refrigerant handling, and commissioning practice determines system performance), the efficiency tier you choose, and the warranty terms. A well-installed Rheem outperforms a poorly installed Carrier. Get a contractor you trust, then let them recommend the brand they service best.",
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

export default function HVACReplacementCostGuidePage() {
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
              {" "}&rsaquo;{" "}HVAC Replacement Cost
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
              HVAC Replacement Cost: When to Repair vs Replace Your System
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "600px" }}>
              Full system replacement runs $4,000–$12,000 for most homes — but system type, efficiency rating, and local labor rates move that number significantly. Here&apos;s the full breakdown.
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
              HVAC decisions are high-stakes: an unnecessary replacement wastes thousands; delaying a necessary one means system failure on the hottest or coldest day of the year. The key is understanding the decision framework — what actually drives the repair vs. replace call — and knowing what system types cost so you can evaluate quotes with confidence.
            </p>
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Cost by System Type
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Prices include equipment and installation. Ductwork replacement or modification is additional ($15–$25/linear foot):
          </p>
          <div style={{ overflowX: "auto", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "12px", marginBottom: "3rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ backgroundColor: navy, color: "#ffffff" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>System Type</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Installed Cost</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {systemCosts.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                    <td style={{ padding: "0.875rem 1rem", color: navy, fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{row.system}</td>
                    <td style={{ padding: "0.875rem 1rem", color: "#059669", fontWeight: 700, borderBottom: "1px solid #e5e7eb", whiteSpace: "nowrap" }}>{row.range}</td>
                    <td style={{ padding: "0.875rem 1rem", color: body, borderBottom: "1px solid #e5e7eb", fontSize: "0.875rem" }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Repair vs. Replace — Decision Framework
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Use this decision table to evaluate your situation:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "3rem" }}>
            {decisionTable.map((row, i) => (
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
                  {row.verdict}
                </span>
                <div>
                  <div style={{ color: navy, fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.25rem" }} dangerouslySetInnerHTML={{ __html: row.scenario }} />
                  <div style={{ color: body, fontSize: "0.875rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: row.reasoning }} />
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Signs Your System Needs Replacing
          </h2>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "System is 15+ years old (AC) or 20+ years old (furnace)",
                "Uses R-22 refrigerant — phased out since 2020, very expensive to recharge",
                "Repair costs exceed 50% of replacement cost",
                "You&apos;re calling for repairs more than once per season",
                "Rooms that were comfortable before are now consistently too hot or cold",
                "Energy bills have increased 20%+ without a change in usage patterns",
                "System runs constantly but struggles to reach set temperature",
                "Unusual noises: grinding, banging, squealing, rattling that are new",
                "Refrigerant leaks — repeated recharges are expensive and indicate a structural failure",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#dc2626", fontWeight: 700, minWidth: "1.5rem" }}>⚠</span>
                  <span style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Rebates and Tax Credits Available in 2025
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
            {[
              {
                title: "Inflation Reduction Act — Heat Pump Tax Credit",
                color: "#059669",
                body: "25C tax credit covers 30% of heat pump installation cost, up to $2,000/year for qualifying heat pumps. Must meet minimum efficiency requirements. Claimed on your federal tax return. Check energy.gov for current qualifying products list.",
              },
              {
                title: "Inflation Reduction Act — High-Efficiency Furnaces",
                color: "#059669",
                body: "Natural gas furnaces that meet efficiency requirements qualify for 30% of cost, up to $600/year. Less generous than heat pump credit — but meaningful on a $4,000+ furnace replacement.",
              },
              {
                title: "Utility Company Rebates",
                color: blue,
                body: "Many utilities offer $100–$1,000 rebates for high-efficiency equipment. Check your utility&apos;s website or call their energy efficiency line. Rebates often require a specific SEER/HSPF rating and must be claimed within 90 days of installation.",
              },
              {
                title: "Manufacturer Rebates",
                color: "#d97706",
                body: "Carrier, Trane, Lennox, and others run periodic rebates ($100–$500) on specific product lines. Your contractor should be aware of active rebates — ask explicitly. These often coincide with seasonal promotions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderLeft: `4px solid ${item.color}`,
                  borderRadius: "0 12px 12px 0",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <h3 style={{ color: navy, fontWeight: 700, fontSize: "1rem", marginBottom: "0.375rem" }}>{item.title}</h3>
                <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: blue,
              borderRadius: "12px",
              padding: "2rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <h2 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              See HVAC prices in your city before you call
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              HVAC labor rates vary significantly by market. TypicalCost shows real contractor prices across 50 US cities so you know if a quote is fair.
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
              Get multiple HVAC quotes — prices vary 30–50%
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              See local contractor prices before committing. Know the fair rate for your city and system type.
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
