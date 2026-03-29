import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Remodel Cost Guide: Budget, Mid-Range, and High-End Breakdown",
  description:
    "Kitchen remodels range from $10,000 to $150,000+. Here's an honest breakdown of where the money goes, what actually adds resale value, and how to get more kitchen for your budget.",
};

const componentCosts = [
  {
    component: "Cabinets",
    budget: "$2,000–$5,000",
    midRange: "$8,000–$20,000",
    highEnd: "$25,000–$60,000+",
    pctOfTotal: "25–40%",
  },
  {
    component: "Labor",
    budget: "$3,000–$7,000",
    midRange: "$8,000–$18,000",
    highEnd: "$20,000–$45,000",
    pctOfTotal: "20–35%",
  },
  {
    component: "Appliances",
    budget: "$1,500–$3,500",
    midRange: "$4,000–$10,000",
    highEnd: "$15,000–$40,000+",
    pctOfTotal: "10–20%",
  },
  {
    component: "Countertops",
    budget: "$800–$2,000",
    midRange: "$2,500–$6,000",
    highEnd: "$8,000–$20,000",
    pctOfTotal: "10–15%",
  },
  {
    component: "Flooring",
    budget: "$500–$2,000",
    midRange: "$2,000–$5,000",
    highEnd: "$5,000–$15,000",
    pctOfTotal: "5–10%",
  },
  {
    component: "Lighting",
    budget: "$200–$800",
    midRange: "$1,000–$3,000",
    highEnd: "$3,000–$10,000",
    pctOfTotal: "3–5%",
  },
  {
    component: "Plumbing",
    budget: "$500–$1,500",
    midRange: "$1,500–$4,000",
    highEnd: "$4,000–$10,000",
    pctOfTotal: "4–8%",
  },
  {
    component: "Backsplash",
    budget: "$200–$800",
    midRange: "$800–$2,500",
    highEnd: "$2,500–$8,000",
    pctOfTotal: "3–6%",
  },
];

const faqs = [
  {
    q: "How long does a kitchen remodel take?",
    a: "For a full gut remodel (new cabinets, counters, appliances, flooring, lighting), expect 4–12 weeks from demo to completion. Countertop fabrication alone takes 2–4 weeks after template. Cabinet lead times can run 6–12 weeks for semi-custom, 16+ weeks for fully custom. A cosmetic refresh (paint, hardware, light fixtures) can be done in 1–2 weekends. The biggest schedule risk is change orders mid-project and material delays.",
  },
  {
    q: "What adds the most value to a kitchen?",
    a: "Cabinets and countertops are the highest-impact visual elements — and where buyers focus attention. New cabinet fronts or a full cabinet replacement transforms the space. After that: updated appliances (especially refrigerator and dishwasher), improved lighting (under-cabinet and overhead), and fresh paint. Hardware is the highest ROI per dollar spent — $3–$10 per handle can completely modernize dated cabinets.",
  },
  {
    q: "Should I remodel my kitchen before selling?",
    a: "It depends on your market and current condition. A kitchen that&apos;s dated but functional usually benefits from a cosmetic refresh ($3,000–$8,000) rather than a full remodel. Full remodels rarely return dollar-for-dollar at sale — typical ROI is 60–80%. Exception: if your kitchen is genuinely below-market for the neighborhood (missing dishwasher, broken appliances, visibly damaged cabinets), an update can help you sell at full asking price rather than at a discount.",
  },
  {
    q: "Can I live at home during a kitchen remodel?",
    a: "Yes, most homeowners do — but it requires planning. Set up a temporary kitchen: microwave, coffee maker, hot plate on a folding table, mini-fridge if needed. Paper plates and weekly meal prep reduce the burden. Plan to eat out 3–4 nights per week and budget $50–$100/week extra for food. The hardest periods are demo week (dust everywhere) and the 2–4 week gap between countertop removal and new countertop installation when you have no sink. Plan that stretch in advance.",
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

export default function KitchenRemodelCostGuidePage() {
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
              {" "}&rsaquo;{" "}Kitchen Remodel Cost
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
              Kitchen Remodel Cost Guide: Budget, Mid-Range, and High-End Breakdown
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "600px" }}>
              Budget: $10K–$25K. Mid-range: $25K–$60K. High-end: $60K–$150K+. Here&apos;s exactly where the money goes — and where you can save without compromising the result.
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
              Kitchen remodels are the most popular home improvement project in America — and the one where budgets are most frequently blown. The reason: kitchens have more moving parts than any other room (cabinets, countertops, appliances, plumbing, electrical, lighting, flooring, backsplash) and the upgrade path is infinite. Knowing where money goes and where you can economize is the difference between a great kitchen and a half-finished one.
            </p>
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            The Three Budget Tiers — What You Actually Get
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
            {[
              {
                tier: "Budget: $10,000–$25,000",
                color: "#059669",
                what: "Cabinet refacing or RTA (ready-to-assemble) cabinets, laminate or entry-level quartz countertops, mid-range appliances from a set sale, LVP flooring, new fixtures and hardware, paint.",
                best: "Homes with a functional kitchen layout that just needs cosmetic updating. Best ROI for the investment.",
              },
              {
                tier: "Mid-Range: $25,000–$60,000",
                color: blue,
                what: "Semi-custom cabinets, quartz countertops, stainless steel appliances (mid-range brands), tile backsplash, hardwood or tile flooring, recessed lighting, under-cabinet lighting.",
                best: "Most common full remodel tier. Delivers a fully updated kitchen that photos well and lasts 15+ years.",
              },
              {
                tier: "High-End: $60,000–$150,000+",
                color: "#7c3aed",
                what: "Custom inset cabinets, natural stone counters (quartzite, marble), professional appliances (Wolf, Sub-Zero, Miele), heated floors, custom tile work, hidden storage solutions, structural changes.",
                best: "Premium homes in high-value markets, or when the kitchen is genuinely central to lifestyle and long-term living.",
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
                <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.75rem" }}>{item.tier}</h3>
                <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                  <strong style={{ color: navy }}>What you get:</strong> {item.what}
                </p>
                <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: navy }}>Best for:</strong> {item.best}
                </p>
              </div>
            ))}
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Cost by Component — Across All Budget Tiers
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Every kitchen remodel has the same core components. Here&apos;s what each costs at different budget levels:
          </p>
          <div style={{ overflowX: "auto", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "12px", marginBottom: "3rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ backgroundColor: navy, color: "#ffffff" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Component</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Budget</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Mid-Range</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>High-End</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>% of Total</th>
                </tr>
              </thead>
              <tbody>
                {componentCosts.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                    <td style={{ padding: "0.75rem 1rem", color: navy, fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{row.component}</td>
                    <td style={{ padding: "0.75rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.budget}</td>
                    <td style={{ padding: "0.75rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.midRange}</td>
                    <td style={{ padding: "0.75rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.highEnd}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "#059669", fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{row.pctOfTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Highest ROI Upgrades — Best Bang for Your Budget
          </h2>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Not all kitchen upgrades are created equal. These deliver the most visible impact per dollar spent:
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
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Cabinet hardware replacement — $3–$10/piece, $150–$600 total", tip: "New handles and pulls transform dated cabinets. Highest ROI upgrade in any kitchen. Do this before spending on anything else." },
                { label: "Under-cabinet lighting — $200–$800", tip: "Eliminates shadows, makes counters pop in photos, changes the feel of the entire kitchen. LED strip lights are DIY-friendly." },
                { label: "Paint — $100–$400 DIY or $800–$1,500 pro", tip: "A fresh, modern color (not white — consider greige, navy lowers, warm gray) can completely reframe the space. Highest ROI per dollar of any renovation." },
                { label: "Faucet upgrade — $150–$600 installed", tip: "A brushed nickel or matte black faucet signals quality and updates the focal point of the sink area. Visible impact disproportionate to cost." },
                { label: "Countertop swap (laminate to quartz) — $2,500–$6,000", tip: "If you&apos;re keeping existing cabinets, new countertops are the highest single-item value upgrade. Quartz at $60–$80/sqft installed is durable, maintenance-free, and photos beautifully." },
              ].map((item, i) => (
                <li key={i} style={{ paddingBottom: "0.875rem", borderBottom: i < 4 ? "1px solid #f3f4f6" : "none" }}>
                  <div style={{ color: navy, fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.25rem" }}>{item.label}</div>
                  <div style={{ color: body, fontSize: "0.9rem", lineHeight: 1.65 }}>{item.tip}</div>
                </li>
              ))}
            </ul>
          </div>

          <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Financing Options
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
            {[
              {
                title: "HELOC (Home Equity Line of Credit)",
                color: "#059669",
                body: "Best for large remodels if you have equity. Rates are variable but typically lower than personal loans. Interest may be tax-deductible when used for home improvements. You draw only what you need.",
              },
              {
                title: "Cash-out refinance",
                color: blue,
                body: "Replaces your existing mortgage with a larger one, giving you the difference in cash. Only makes sense if current rates are close to your existing rate, or if you need a very large sum. Closing costs ($2,000–$5,000) reduce the advantage on smaller projects.",
              },
              {
                title: "Personal loan",
                color: "#d97706",
                body: "Fast and simple — no home equity required. Rates range 8–25% depending on credit. Best for smaller remodels ($10,000–$25,000) where HELOC setup costs aren&apos;t worth it and you want a fixed payment schedule.",
              },
              {
                title: "Contractor financing",
                color: "#6b7280",
                body: "Many contractors offer 12-month 0% financing through GreenSky or similar programs. Read the fine print: deferred interest can kick in retroactively if not fully paid. Convenient but often the most expensive long-term.",
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
              See what kitchen remodels cost in your city
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Labor rates and material costs vary significantly by market. TypicalCost shows real price ranges across 50 US cities.
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
              Find local kitchen contractors
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Get real price data for your city before you accept a single quote.
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
