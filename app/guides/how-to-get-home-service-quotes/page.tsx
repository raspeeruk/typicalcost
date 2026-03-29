import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get Home Service Quotes: A Complete Guide to Not Getting Ripped Off",
  description:
    "Getting the right contractor quote starts before you pick up the phone. Here's exactly how to request, compare, and negotiate home service estimates in 2025.",
};

const beforeQuoteChecklist = [
  "Write a specific scope of work — room dimensions, what's included, what's excluded",
  "Decide on materials before you call (brand, grade, color where relevant)",
  "Know your target timeline — is there a hard deadline?",
  "Understand what you're asking for vs. what the contractor typically includes",
  "Research typical prices for your area (TypicalCost, Angi, HomeAdvisor)",
  "List your must-haves vs. nice-to-haves so you can negotiate intelligently",
  "Prepare photos of the work area — text them before the visit saves time",
  "Note any access constraints (hours, parking, parking permits needed)",
];

const quoteRequestChecklist = [
  "Exact scope of work in writing — what's included and what's not",
  "Specific materials to be used (brand, model, grade, quantity)",
  "Project timeline: start date, estimated completion date",
  "Payment schedule with milestone triggers",
  "Who's doing the work — contractor directly, or subcontractors?",
  "Permit responsibility — who pulls and pays for permits?",
  "Cleanup and debris removal — included or extra?",
  "Warranty terms — how long, what's covered, how to claim",
];

const faqs = [
  {
    q: "How many quotes should I get for a home project?",
    a: "A minimum of three for any project over $500. For major projects (over $5,000), getting 4–5 quotes is reasonable and often saves $1,000+ just in the process. Each additional quote gives you better data and more negotiating leverage.",
  },
  {
    q: "Is the lowest quote always the best?",
    a: "Rarely. The lowest quote often means different (cheaper) materials, less experienced labor, or a scope that omits something others included. Compare quotes line by line — materials, scope, timeline, warranty. A mid-range quote from a licensed, insured contractor with references is usually better value than the cheapest option.",
  },
  {
    q: "Should I tell contractors what other quotes came in at?",
    a: "This is a negotiating call. Sharing the lowest quote with your preferred contractor can lead to a price match. But be careful: some contractors will match the price by cutting corners on scope or materials rather than reducing margin. If you share quotes, make sure you're comparing like-for-like scope.",
  },
  {
    q: "How long should I wait for a quote?",
    a: "Most reputable contractors provide written quotes within 3–7 days of a site visit. If someone says they'll send a quote and goes silent for more than a week, that's a signal about how they'll handle the actual project. A contractor who's too busy to write a quote is too busy for your job.",
  },
];

export default function HowToGetQuotesPage() {
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
            {" "}&rsaquo;{" "}How to Get Quotes
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
            How to Get Home Service Quotes: A Complete Guide to Not Getting Ripped Off
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "600px" }}>
            Getting the right quote starts before you pick up the phone. Most homeowners make avoidable mistakes that cost them hundreds — or thousands. Here&apos;s how to do it right.
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
            Most homeowners approach getting quotes backwards. They call a contractor first, describe the project vaguely over the phone, get a number that means nothing because it&apos;s based on nothing specific, and then have no way to compare it to other quotes. The result: overpaying, mismatched expectations, or both. This guide fixes that process from the start.
          </p>
        </div>

        {/* Before you get quotes */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Before You Get Quotes
        </h2>
        <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          The quality of quotes you receive is directly proportional to the specificity of your request. Vague request = vague quote = no useful data. Do this prep work first:
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
            {beforeQuoteChecklist.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span
                  style={{
                    backgroundColor: blue,
                    color: "#ffffff",
                    borderRadius: "50%",
                    width: "1.375rem",
                    height: "1.375rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: "0.125rem",
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why 3+ quotes matter */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Getting 3+ Quotes — Why It Actually Matters
        </h2>
        <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          This isn&apos;t generic advice — the data backs it up. Price variance on the same job from different contractors is substantial:
        </p>
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "1.5rem",
            marginBottom: "1.25rem",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ backgroundColor: navy, color: "#ffffff" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Service</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Typical Price Spread</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Savings from Shopping</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roof replacement", "40–60%", "$3,000–$8,000"],
                  ["Kitchen remodel", "35–55%", "$8,000–$25,000"],
                  ["HVAC replacement", "30–50%", "$2,000–$5,000"],
                  ["Bathroom renovation", "35–50%", "$3,000–$10,000"],
                  ["Deck construction", "30–45%", "$2,000–$6,000"],
                  ["Landscaping project", "25–45%", "$500–$3,000"],
                ].map(([service, spread, savings], i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                    <td style={{ padding: "0.75rem 1rem", color: navy, fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{service}</td>
                    <td style={{ padding: "0.75rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{spread}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "#059669", fontWeight: 700, borderBottom: "1px solid #e5e7eb" }}>{savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.65, marginTop: "0.875rem", margin: "0.875rem 0 0" }}>
            Price spread data based on homeowner-reported quotes in same-city comparison studies. Savings assume selecting mid-range quote vs. highest.
          </p>
        </div>

        {/* Quote request checklist */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", marginTop: "3rem" }}>
          What to Include in a Quote Request
        </h2>
        <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          A quote is only as useful as the spec it&apos;s based on. Make sure every quote you receive addresses all eight of these:
        </p>
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {quoteRequestChecklist.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: blue, fontWeight: 700, minWidth: "1.5rem" }}>✓</span>
                <span style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
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
            Know the typical price before you call
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            TypicalCost shows real price ranges for your city. Walk into every quote conversation knowing exactly what the going rate is.
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

        {/* How to compare quotes */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          How to Compare Quotes Correctly
        </h2>
        <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          Comparing quotes by price alone is a mistake. Two quotes for the same job can have very different scopes, materials, and risk profiles. Here&apos;s what to compare:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {[
            {
              title: "Materials: brand, grade, and quantity",
              body: "Quote A uses 30-year architectural shingles; Quote B uses 20-year 3-tab shingles. Quote A looks more expensive until you realize Quote B will need replacement 10 years sooner. Always compare specific materials, not just the final number.",
            },
            {
              title: "Scope: what's actually included",
              body: "Ask each contractor: \"Does this include permit fees? Debris hauling? Protecting the surrounding area? Moving existing items?\" A quote that appears lower often omits these items and adds them as change orders later.",
            },
            {
              title: "Warranty: labor and materials",
              body: "A 2-year labor warranty vs. a 90-day warranty is a real difference. The contractor confident in their work offers longer warranties. Ask about both the workmanship warranty and how material warranties are handled.",
            },
            {
              title: "Timeline and availability",
              body: "When can they actually start? A contractor who can start tomorrow might be available for a reason. A 6-week wait from a booked-out contractor with references is often worth more than an immediate start from an unknown.",
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

        {/* Quote vs estimate vs bid */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Quote vs. Estimate vs. Bid — They&apos;re Different
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {[
            {
              term: "Estimate",
              color: "#d97706",
              body: "An approximate cost that can change. Not a commitment. Used for ballpark planning before scope is fully defined. Contractors can charge significantly more than an estimate without breaching contract — unless the estimate is in writing and called out as binding.",
            },
            {
              term: "Quote",
              color: blue,
              body: "A fixed price offer for a specific scope of work. A written quote should be honored at that price within its validity period (typically 30–90 days). This is what you want for any project where scope is clearly defined.",
            },
            {
              term: "Bid",
              color: "#059669",
              body: "Used in formal procurement contexts (commercial, government projects). Bids are binding offers submitted in competition. For residential work, \"bid\" and \"quote\" are often used interchangeably, but always confirm in writing what you're getting.",
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
              <h3 style={{ color: navy, fontWeight: 700, fontSize: "1rem", marginBottom: "0.375rem" }}>{item.term}</h3>
              <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* How to negotiate */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          How to Negotiate With Contractors
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
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "1rem" }}>
            Most homeowners don&apos;t negotiate — and leave money on the table. Contractors expect some negotiation. Here&apos;s how to do it without damaging the relationship:
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {[
              { label: "Use competing quotes as leverage", tip: "\"I have two other quotes that came in lower. I prefer to work with you — is there any flexibility?\" Most contractors will sharpen their pencil rather than lose the job." },
              { label: "Negotiate scope, not just price", tip: "Ask what you can remove to bring the cost down. Dropping one component from the scope is often more effective than asking for a price cut on the same scope." },
              { label: "Offer something valuable in return", tip: "Prompt payment, a written testimonial, a referral to a neighbor — these have real value to contractors. Offer them as part of a price discussion." },
              { label: "Time it right", tip: "Contractors are more flexible in slow seasons (winter for exterior work, early fall for HVAC). Ask if there's a discount for a flexible start date." },
              { label: "Don't negotiate on the last payment", tip: "Your final payment is not a negotiating chip after the job is done. Using it as leverage after good work is delivered damages the relationship and your reputation as a client." },
            ].map((item, i) => (
              <li key={i} style={{ paddingBottom: "0.875rem", borderBottom: i < 4 ? "1px solid #f3f4f6" : "none" }}>
                <div style={{ color: navy, fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.25rem" }}>{item.label}</div>
                <div style={{ color: body, fontSize: "0.9rem", lineHeight: 1.65 }}>{item.tip}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
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

        {/* Final CTA */}
        <div style={{ backgroundColor: navy, borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
          <h2 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Go into every quote knowing the number
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            See city-level price data for 50+ home services before you call your first contractor.
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
