import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Read a Home Inspection Report: What to Negotiate and What to Ignore",
  description:
    "A home inspection report can be 50+ pages of findings. Learn which issues are deal-breakers, which to negotiate, and which to ignore entirely before closing.",
};

const findings = [
  {
    type: "Safety Hazards",
    example: "Missing GFCI outlets, exposed wiring, gas leak, carbon monoxide risk",
    action: "Fix immediately — require seller to address before closing",
    cost: "$100–$2,500",
    color: "#dc2626",
  },
  {
    type: "Major Defects",
    example: "Failing roof, cracked foundation, failed HVAC, major water intrusion",
    action: "Negotiate price reduction or repair credit",
    cost: "$2,000–$50,000+",
    color: "#d97706",
  },
  {
    type: "Maintenance Items",
    example: "Dirty gutters, aging caulk, minor paint peeling, slow drains",
    action: "Your problem after closing — budget for it",
    cost: "$50–$500",
    color: "#059669",
  },
  {
    type: "Cosmetic Issues",
    example: "Scuffed walls, dated fixtures, worn carpet, minor dents",
    action: "Ignore — not an inspection issue",
    cost: "$0 — aesthetic only",
    color: "#6b7280",
  },
];

const faqs = [
  {
    q: "Should I attend the home inspection?",
    a: "Yes — always. Walking through the property with the inspector is the most valuable part of the inspection. You'll see issues in context, understand severity, and get verbal explanations that never make it into the written report. Inspectors will often point to something and say 'this isn't technically a defect but watch it.' You only get that if you're there.",
  },
  {
    q: "Can I negotiate after an inspection on an as-is sale?",
    a: "Usually not, by definition. An as-is sale means the seller won't make repairs or concessions. However, you typically still have the right to inspect — the inspection informs your decision to proceed or walk away. If the inspection reveals issues severe enough to change your risk calculus, your exit is to terminate, not negotiate. Know this going in.",
  },
  {
    q: "What's a serious finding vs. a minor one?",
    a: "Serious: anything affecting structure (foundation cracks, roof failure), safety (electrical hazards, gas leaks, CO), or systems (failed HVAC, active plumbing leaks). Minor: anything cosmetic, single-trade maintenance items, or items the inspector flags as 'monitor.' A 50-page report with 80 items is normal — it doesn't mean the house is falling apart. Most findings are informational.",
  },
  {
    q: "When should you walk away based on an inspection?",
    a: "Walk when: foundation issues are structural (not cosmetic cracks), when multiple major systems are simultaneously failing, when water intrusion shows signs of long-term concealment, or when repair estimates exceed your renegotiation ceiling. Don't walk based on a long list of minor items — that's normal. Walk based on the character of the problems, not the count.",
  },
];

const categoryFindings = [
  {
    category: "Roof",
    common: "Missing/damaged shingles, granule loss, flashing issues, improper ventilation",
    typical: "$500–$15,000 depending on damage scope and material",
  },
  {
    category: "Foundation",
    common: "Hairline cracks (normal), stair-step cracks in brick, horizontal cracks in block walls",
    typical: "Hairline: $0. Structural: $5,000–$30,000+",
  },
  {
    category: "Plumbing",
    common: "Slow drains, corroded supply lines, water heater age, low pressure",
    typical: "$100–$5,000 depending on scope",
  },
  {
    category: "Electrical",
    common: "Double-tapped breakers, aluminum wiring, outdated panel, missing GFCI",
    typical: "Panel upgrade: $1,500–$4,000. GFCI outlets: $200–$800",
  },
  {
    category: "HVAC",
    common: "Old equipment (>15 years), dirty coils, improper installation, poor airflow",
    typical: "Tune-up: $150–$300. Replacement: $2,000–$8,000",
  },
  {
    category: "Windows & Doors",
    common: "Failed seals (foggy glass), single-pane in cold climates, damaged weatherstripping",
    typical: "Seal replacement: $100–$300/window. Full window: $400–$1,200",
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

export default function HomeInspectionReportGuidePage() {
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
              {" "}&rsaquo;{" "}Home Inspection Report
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
              How to Read a Home Inspection Report: What to Negotiate and What to Ignore
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "600px" }}>
              A 60-page inspection report looks alarming until you know how to read it. Most findings are normal. Here&apos;s how to separate deal-breakers from background noise — and what to actually negotiate.
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
              Most home inspection reports run 40–80 pages and flag 30–100+ items. First-time buyers often panic. Experienced buyers know that a long report usually means a thorough inspector — not a bad house. The skill is triaging: which findings kill deals, which warrant negotiation, and which you accept as part of owning an older property.
            </p>
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            The Four Finding Types — And What to Do With Each
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Every inspection finding falls into one of four categories. Your response to each is completely different:
          </p>
          <div style={{ overflowX: "auto", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "12px", marginBottom: "3rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ backgroundColor: navy, color: "#ffffff" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Finding Type</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Example</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Action</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                {findings.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                    <td style={{ padding: "0.875rem 1rem", borderBottom: "1px solid #e5e7eb" }}>
                      <span style={{ color: row.color, fontWeight: 700, fontSize: "0.9rem" }}>{row.type}</span>
                    </td>
                    <td style={{ padding: "0.875rem 1rem", color: body, borderBottom: "1px solid #e5e7eb", fontSize: "0.875rem" }}>{row.example}</td>
                    <td style={{ padding: "0.875rem 1rem", color: body, borderBottom: "1px solid #e5e7eb", fontSize: "0.875rem" }}>{row.action}</td>
                    <td style={{ padding: "0.875rem 1rem", color: navy, fontWeight: 600, borderBottom: "1px solid #e5e7eb", fontSize: "0.875rem", whiteSpace: "nowrap" }}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            What Inspectors Check — And What They Don&apos;t
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Home inspectors perform a visual, non-invasive inspection of accessible systems and components. Knowing the scope prevents misplaced expectations:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
            {[
              {
                title: "What inspectors check",
                color: "#059669",
                items: [
                  "Roof covering and visible structure",
                  "Foundation and visible structural components",
                  "Electrical panel, wiring, and outlets",
                  "Plumbing supply, drain lines, and fixtures",
                  "HVAC systems and components",
                  "Windows, doors, and weatherproofing",
                  "Attic insulation and ventilation",
                  "Visible interior: walls, floors, ceilings",
                  "Garage and attached structures",
                ],
              },
              {
                title: "What inspectors don't check",
                color: "#dc2626",
                items: [
                  "Behind walls, floors, or ceilings (non-invasive only)",
                  "Septic systems (requires separate specialist)",
                  "Underground oil tanks or buried pipes",
                  "Swimming pools or hot tubs (add-on, not standard)",
                  "Chimney interior (requires chimney sweep)",
                  "Mold or air quality (requires environmental specialist)",
                  "Pest or termite infestation (separate inspection)",
                  "Sewer line condition (camera inspection add-on)",
                  "Appliances (visual only — not functional testing)",
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderLeft: `4px solid ${section.color}`,
                  borderRadius: "0 12px 12px 0",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <h3 style={{ color: navy, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{section.title}</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {section.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                      <span style={{ color: section.color, fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: "0.1rem" }}>
                        {i === 0 ? "✓" : "✕"}
                      </span>
                      <span style={{ color: body, fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Most Common Findings by Category
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Here&apos;s what inspectors typically find in each major system — with realistic cost estimates:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "3rem" }}>
            {categoryFindings.map((cat, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <h3 style={{ color: blue, fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{cat.category}</h3>
                <p style={{ color: body, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                  <strong style={{ color: navy }}>Common findings:</strong> {cat.common}
                </p>
                <p style={{ color: body, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  <strong style={{ color: navy }}>Typical cost:</strong>{" "}
                  <span style={{ color: "#059669", fontWeight: 600 }}>{cat.typical}</span>
                </p>
              </div>
            ))}
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            How to Build Your Repair Request
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            After the inspection, you typically have a negotiation window (3–7 days in most contracts). Here&apos;s how to structure your repair request to maximize results:
          </p>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { label: "Focus on safety and major defects only", tip: "Ask for repairs or credits on safety hazards and major system failures. Asking for 40 items signals inexperience and puts sellers on the defensive." },
                { label: "Request credit, not repairs", tip: "When sellers make repairs, they pick the contractor and the quality. A credit at closing lets you control the repair. Prefer '$3,000 closing credit' over 'seller to fix roof flashing.'" },
                { label: "Back every request with an estimate", tip: "Get a contractor estimate for each issue you&apos;re negotiating. An unsubstantiated ask is easy to reject. A written estimate from a licensed contractor is hard to argue with." },
                { label: "Pick your battles strategically", tip: "On a $400,000 house, don&apos;t negotiate a $200 gutter cleaning. Sellers remember the spirit of negotiations. Pick 3–5 meaningful items and let the rest go." },
                { label: "Know your walk-away number", tip: "Before submitting the repair request, decide: if the seller gives me $0, will I still buy? If yes, you have leverage. If no, you need to communicate urgency clearly." },
              ].map((item, i) => (
                <li key={i} style={{ paddingBottom: "0.875rem", borderBottom: i < 4 ? "1px solid #f3f4f6" : "none" }}>
                  <div style={{ color: navy, fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.25rem" }}>{item.label}</div>
                  <div style={{ color: body, fontSize: "0.9rem", lineHeight: 1.65 }}>{item.tip}</div>
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
            }}
          >
            <h2 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Know what repairs actually cost before negotiating
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              TypicalCost shows real contractor prices for every major repair category across 50 US cities. Walk into negotiations with real numbers.
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
              See Repair Costs in Your City →
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
              Find local contractors for any repair
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Compare real prices for roofing, HVAC, electrical, plumbing, and more across 50 US cities.
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
