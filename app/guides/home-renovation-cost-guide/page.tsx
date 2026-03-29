import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Renovation Costs in 2025: What Every Room Actually Costs",
  description:
    "Room-by-room renovation costs for 2025. Kitchen, bathroom, basement, whole house — budget, mid-range, and high-end prices, plus which projects deliver the best ROI.",
};

const roomCosts = [
  { room: "Kitchen", budget: "$5,000–$15,000", mid: "$15,000–$45,000", highEnd: "$45,000–$150,000+" },
  { room: "Bathroom", budget: "$3,000–$8,000", mid: "$8,000–$25,000", highEnd: "$25,000–$80,000+" },
  { room: "Basement", budget: "$5,000–$15,000", mid: "$15,000–$30,000", highEnd: "$30,000–$75,000+" },
  { room: "Master Bedroom", budget: "$2,000–$6,000", mid: "$6,000–$15,000", highEnd: "$15,000–$40,000+" },
  { room: "Living Room", budget: "$1,500–$5,000", mid: "$5,000–$12,000", highEnd: "$12,000–$30,000+" },
  { room: "Whole House", budget: "$20,000–$60,000", mid: "$60,000–$150,000", highEnd: "$150,000–$500,000+" },
];

const roiTable = [
  { project: "Minor Kitchen Remodel", cost: "$10,000–$20,000", roiPct: "72–81%", verdict: "Strong" },
  { project: "Bathroom Addition", cost: "$20,000–$50,000", roiPct: "51–63%", verdict: "Good" },
  { project: "Deck Addition (wood)", cost: "$10,000–$20,000", roiPct: "65–72%", verdict: "Strong" },
  { project: "Garage Door Replacement", cost: "$1,200–$2,500", roiPct: "90–100%+", verdict: "Excellent" },
  { project: "Entry Door (steel)", cost: "$900–$2,000", roiPct: "90–100%+", verdict: "Excellent" },
  { project: "Major Kitchen Remodel", cost: "$50,000–$120,000", roiPct: "53–59%", verdict: "Moderate" },
  { project: "Master Suite Addition", cost: "$80,000–$160,000", roiPct: "50–56%", verdict: "Moderate" },
  { project: "Swimming Pool", cost: "$35,000–$100,000", roiPct: "20–40%", verdict: "Poor" },
];

const factors = [
  {
    title: "Location affects price more than anything else",
    body: "Labor rates in San Francisco are 2–3x what they are in Birmingham, Alabama. Materials cost more to ship to remote areas. Local permitting requirements add cost in some cities. When you see national averages, remember they can be wildly off for your specific city.",
  },
  {
    title: "Materials choice is the biggest variable you control",
    body: "Cabinets alone can range from $2,000 (flat-pack IKEA) to $40,000+ (custom solid wood). Countertops go from $300 (laminate) to $8,000+ (quartzite). Tile runs $1 to $50+ per square foot installed. The biggest cost control lever you have is materials selection.",
  },
  {
    title: "Timing: off-season can save 10–20%",
    body: "Contractors are hungry for work in winter (especially for exterior projects) and early spring. Starting a project in November or December — for interior work especially — often means better contractor availability and lower bids. Avoid summer start dates for anything competitive.",
  },
  {
    title: "Permits cost money but skip them at your peril",
    body: "Electrical, plumbing, structural, and HVAC work typically requires permits. Permit costs range from $50 to $2,000+ depending on project size and city. Unpermitted work can void insurance claims, cause problems at resale, and require expensive teardowns to fix. Always pull permits for major work.",
  },
];

const faqs = [
  {
    q: "How much does a full kitchen remodel cost?",
    a: "A mid-range kitchen remodel (new cabinets, countertops, appliances, flooring, some layout changes) typically runs $25,000–$60,000. High-end custom kitchens with structural changes and premium appliances routinely exceed $100,000. The cost-per-square-foot ranges from $150–$600+ depending on finish level.",
  },
  {
    q: "What's the cheapest room to renovate?",
    a: "A living room or bedroom refresh is typically the least expensive major renovation — you can dramatically change the feel with new flooring, paint, trim, and lighting for $3,000–$8,000. Kitchens and bathrooms cost the most because of plumbing, cabinets, and appliances.",
  },
  {
    q: "Do I need permits for a bathroom renovation?",
    a: "If you're moving or adding plumbing fixtures, changing electrical, or moving walls, yes — permits are required in virtually every jurisdiction. A cosmetic refresh (new tile, vanity, fixtures in the same location) often doesn't require permits, but check with your local building department first.",
  },
  {
    q: "How long does a whole-house renovation take?",
    a: "Expect 6–18 months for a whole-house renovation, depending on scope. A mid-range whole-house update (new flooring, paint, fixtures, kitchen and bath updates) typically takes 3–6 months. Major structural work or custom details can stretch to a year or more. Supply chain delays on custom materials are the most common cause of overruns.",
  },
];

export default function HomeRenovationCostGuidePage() {
  const font = "'Outfit', sans-serif";
  const navy = "#1a2332";
  const blue = "#0066cc";
  const body = "#374151";

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: font }}>
      {/* Hero */}
      <section style={{ backgroundColor: navy, padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <p style={{ color: "#9ca3af", fontSize: "0.8125rem", marginBottom: "0.875rem" }}>
            <a href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>TypicalCost</a>
            {" "}&rsaquo;{" "}
            <a href="/guides" style={{ color: "#9ca3af", textDecoration: "none" }}>Guides</a>
            {" "}&rsaquo;{" "}Home Renovation Cost Guide
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
            Home Renovation Costs in 2025: What Every Room Actually Costs
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "600px" }}>
            Renovation costs vary wildly by city, material, and contractor. Here are real numbers — not marketing ranges — for every major room at three finish levels.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "768px", margin: "0 auto", padding: "48px 24px 64px" }}>

        {/* Intro */}
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
            The most common renovation mistake is starting with a contractor instead of a budget. Without knowing what something should cost, you can't evaluate quotes, you can't make trade-offs, and you can't negotiate. This guide gives you real numbers — from budget to high-end — across the most common renovation projects. Use these as your baseline before you talk to anyone.
          </p>
        </div>

        {/* Room-by-room cost table */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Room-by-Room Renovation Costs
        </h2>
        <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          These ranges reflect total project cost including labor and materials. Budget = DIY-friendly materials and basic finishes. Mid-range = quality materials with professional installation. High-end = premium/custom materials with specialty contractors.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "3rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ backgroundColor: navy, color: "#ffffff" }}>
                <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Room</th>
                <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Budget</th>
                <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Mid-Range</th>
                <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>High-End</th>
              </tr>
            </thead>
            <tbody>
              {roomCosts.map((row, i) => (
                <tr key={row.room} style={{ backgroundColor: i % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                  <td style={{ padding: "0.875rem 1rem", color: navy, fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{row.room}</td>
                  <td style={{ padding: "0.875rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.budget}</td>
                  <td style={{ padding: "0.875rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.mid}</td>
                  <td style={{ padding: "0.875rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.highEnd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Factors section */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem" }}>
          Factors That Affect Renovation Cost
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {factors.map((factor, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <h3 style={{ color: navy, fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
                {factor.title}
              </h3>
              <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
                {factor.body}
              </p>
            </div>
          ))}
        </div>

        {/* ROI Table */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          The Renovation ROI Table: Which Projects Add the Most Resale Value?
        </h2>
        <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          ROI data sourced from Remodeling Magazine&apos;s Cost vs. Value Report. These figures represent the national average resale value added as a percentage of project cost.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "3rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ backgroundColor: navy, color: "#ffffff" }}>
                <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Project</th>
                <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Typical Cost</th>
                <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Avg ROI</th>
                <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Verdict</th>
              </tr>
            </thead>
            <tbody>
              {roiTable.map((row, i) => (
                <tr key={row.project} style={{ backgroundColor: i % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                  <td style={{ padding: "0.875rem 1rem", color: navy, fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{row.project}</td>
                  <td style={{ padding: "0.875rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.cost}</td>
                  <td style={{ padding: "0.875rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.roiPct}</td>
                  <td
                    style={{
                      padding: "0.875rem 1rem",
                      borderBottom: "1px solid #e5e7eb",
                      fontWeight: 700,
                      color:
                        row.verdict === "Excellent" ? "#059669"
                        : row.verdict === "Strong" ? "#0066cc"
                        : row.verdict === "Good" ? "#374151"
                        : row.verdict === "Moderate" ? "#d97706"
                        : "#dc2626",
                    }}
                  >
                    {row.verdict}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA box */}
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
            See what these projects cost in your city
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            National averages are a starting point. TypicalCost has city-adjusted prices for plumbing, roofing, kitchen remodels, and 47 other home services.
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

        {/* Renovation vs remodel vs repair */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Renovation vs. Remodel vs. Repair — What&apos;s the Difference?
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {[
            {
              term: "Repair",
              definition: "Fixing something that's broken or worn out. A repair restores something to its previous working state. Replacing a broken faucet, patching a roof leak, fixing a crack in drywall. Repairs are typically the least expensive and least disruptive.",
            },
            {
              term: "Renovation",
              definition: "Restoring or updating something that's outdated or tired, without changing the structure or purpose. New cabinets in the same kitchen layout. Fresh tile in the existing bathroom footprint. Refinished hardwood floors. Renovations improve what's already there.",
            },
            {
              term: "Remodel",
              definition: "Changing the structure, layout, or purpose of a space. Moving walls, converting a garage to a living space, combining two small bathrooms into one. Remodels require more permits and typically more structural work. They're usually the most expensive and involve the most disruption.",
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
              <h3 style={{ color: navy, fontWeight: 700, fontSize: "1rem", marginBottom: "0.375rem" }}>{item.term}</h3>
              <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>{item.definition}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <h3 style={{ color: navy, fontWeight: 700, fontSize: "1rem", marginBottom: "0.625rem" }}>{faq.q}</h3>
              <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ backgroundColor: navy, borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
          <h2 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Know your number before you renovate
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            See city-adjusted price data for kitchen remodels, bathroom renovations, and 48 other home services.
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
  );
}
