import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Hire a Contractor: 12 Steps to Protect Your Money in 2025",
  description:
    "Hiring the wrong contractor can cost you twice. Follow these 12 steps to vet contractors properly, read contracts, and avoid the most common mistakes homeowners make.",
};

const steps = [
  {
    num: "01",
    title: "Define the scope in writing",
    body: "Before you contact anyone, write down exactly what you want done. Room dimensions, materials, finish quality, timeline expectations. Vague requests lead to vague quotes — and disputes later.",
  },
  {
    num: "02",
    title: "Get 3+ quotes",
    body: "Never hire from a single quote. Get at least three bids for any project over $500. On major projects (roofing, HVAC, kitchen remodels) the spread between the cheapest and most expensive quote is often 40–60%. You need the data.",
  },
  {
    num: "03",
    title: "Check license and insurance",
    body: "Every state has a contractor licensing board — look them up. Ask for the contractor's license number and verify it online in under two minutes. Also confirm they carry both general liability insurance and workers' compensation. If someone gets hurt on your property and the contractor isn't insured, you're liable.",
  },
  {
    num: "04",
    title: "Verify references — and actually call them",
    body: "Ask for 3 references from similar projects completed in the last 12 months. Call all three. Ask: Was the project completed on time? On budget? Would you hire them again? Any surprises? Most contractors give great references — ask the references for anyone else who worked with them.",
  },
  {
    num: "05",
    title: "Read the contract line by line",
    body: "A legitimate contractor will always provide a written contract. It should spell out: scope of work, materials (brand, grade, quantity), timeline, payment schedule, change order process, warranty terms, and dispute resolution. If it's vague anywhere, ask for specifics before signing.",
  },
  {
    num: "06",
    title: "Understand the payment schedule",
    body: "Most projects use a milestone-based payment schedule: deposit at signing, payment when materials arrive, payment at midpoint, and final payment at completion. Understand each milestone and what triggers each payment before any money changes hands.",
  },
  {
    num: "07",
    title: "Never pay in full upfront",
    body: "This is the single most important rule. Legitimate contractors don't need full payment before they start. If someone demands 50%+ upfront or full payment in cash before work begins, walk away. This is the most common setup for contractor fraud.",
  },
  {
    num: "08",
    title: "Document everything",
    body: "Take photos before, during, and after. Keep every email and text. If you agree to something verbally, follow up with a written confirmation. \"Per our conversation, you agreed to use CertainTeed 30-year shingles in Weathered Wood.\" This protects both parties.",
  },
  {
    num: "09",
    title: "Understand the warranty",
    body: "There are two types: manufacturer warranty (on materials) and workmanship warranty (on labor). Most reputable contractors offer 1–2 years on workmanship. Get this in writing. Know how to make a warranty claim and what voids it.",
  },
  {
    num: "10",
    title: "Know your lien rights",
    body: "In most states, if a contractor doesn't pay their subcontractors or suppliers, those parties can file a lien against your property — even after you've paid the contractor in full. Ask your contractor for lien waivers from all subcontractors as part of the final payment process.",
  },
  {
    num: "11",
    title: "Do a final walkthrough",
    body: "Before writing the final check, walk the entire project with the contractor. Use your original scope document as a checklist. Note any items that are incomplete or below the standard agreed to. Get these in writing before final payment.",
  },
  {
    num: "12",
    title: "Release final payment only when satisfied",
    body: "Your final payment is your leverage. Don't release it until every punch-list item is complete. Once the contractor has full payment and you've found an issue, your negotiating position disappears. Keep the final payment proportional to any outstanding work.",
  },
];

const redFlags = [
  "No physical address or P.O. box only — can't be found if something goes wrong",
  "Wants full payment in cash upfront before any work begins",
  "Can't provide a license number or says their license is \"pending\"",
  "Pressure to sign today — \"this price is only good until 5pm\"",
  "Quote is dramatically lower than all others (lowest isn't always best)",
  "No written contract — only handshake agreements",
  "Can't name their insurance carrier or provide a certificate of insurance",
  "Arrived unsolicited after a storm (storm chasers are a known contractor scam)",
];

const faqs = [
  {
    q: "Should I hire the cheapest contractor?",
    a: "Not automatically. The lowest bid often means cut corners on materials, unlicensed subcontractors, or a contractor who underbid and will ask for more money mid-project. Compare scope, not just price. If one quote is 30%+ lower than the others, ask why specifically.",
  },
  {
    q: "Do I need a contract for small jobs?",
    a: "Yes. Even for a $300 job, a written scope protects you. It doesn't need to be formal — a detailed email confirmation works. \"Confirming you'll replace the kitchen faucet with a Moen Arbor in matte black for $285, completed by Thursday.\" That's a contract.",
  },
  {
    q: "What if the contractor asks for more money mid-project?",
    a: "This should trigger a written change order — a document that describes the additional work, the cost, and gets both parties' signatures before the work proceeds. If a contractor starts demanding more money verbally with no documentation, that's a warning sign.",
  },
  {
    q: "How do I find good contractors in my area?",
    a: "Referrals from neighbors and friends are the gold standard. Beyond that: your local building department (they know who pulls permits regularly), the National Association of the Remodeling Industry (NARI), and the Better Business Bureau. Review sites help but can be gamed — referrals are more reliable.",
  },
];

export default function HowToHireContractorPage() {
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
            {" "}&rsaquo;{" "}How to Hire a Contractor
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
            How to Hire a Contractor: 12 Steps to Protect Your Money in 2025
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "600px" }}>
            Hiring the wrong contractor is one of the most expensive mistakes a homeowner makes. The good news: most contractor fraud and botched jobs are completely preventable with the right process.
          </p>
        </div>
      </section>

      {/* Content */}
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
            The average homeowner will hire 8–10 contractors over the lifetime of owning a home. The difference between a great experience and a nightmare isn't luck — it's process. Follow these 12 steps on every project and you'll rarely have a bad outcome.
          </p>
        </div>

        {/* Steps */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
          The 12-Step Contractor Hiring Process
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "1.5rem",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: blue,
                  fontWeight: 800,
                  fontSize: "1.125rem",
                  minWidth: "2.5rem",
                  lineHeight: 1.3,
                }}
              >
                {step.num}
              </span>
              <div>
                <h3 style={{ color: navy, fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.5rem" }}>
                  {step.title}
                </h3>
                <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
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
            Know what your project should cost before you get quotes
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            TypicalCost shows real price ranges for 50+ home services in your city. Walk into every quote conversation knowing the going rate.
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

        {/* Red flags */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Red Flags When Hiring a Contractor
        </h2>
        <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          These warning signs don't mean every contractor showing them is a scammer — but they mean you should stop, ask questions, and verify before proceeding.
        </p>
        <div
          style={{
            backgroundColor: "#fff5f5",
            border: "1px solid #fecaca",
            borderRadius: "12px",
            padding: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {redFlags.map((flag, i) => (
              <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#dc2626", fontWeight: 700, fontSize: "1rem", minWidth: "1.25rem" }}>✕</span>
                <span style={{ color: "#374151", fontSize: "0.9375rem", lineHeight: 1.6 }}>{flag}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Upfront payment section */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          How Much Should You Pay Upfront?
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
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "1rem" }}>
            The industry rule of thumb: <strong style={{ color: navy }}>never pay more than 30% as a deposit</strong> before work begins. Many states actually cap contractor deposits by law (California limits them to 10% or $1,000, whichever is less).
          </p>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "1rem" }}>
            For most projects, a reasonable payment schedule looks like this:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9375rem" }}>
              <thead>
                <tr style={{ backgroundColor: navy, color: "#ffffff" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Milestone</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>% of Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Deposit at contract signing", "10–30%"],
                  ["Materials delivered / work begins", "25–30%"],
                  ["Project midpoint / inspection", "25–30%"],
                  ["Final payment at completion", "10–20%"],
                ].map(([milestone, pct], i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                    <td style={{ padding: "0.75rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{milestone}</td>
                    <td style={{ padding: "0.75rem 1rem", color: navy, fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.65, marginTop: "1rem", margin: "1rem 0 0" }}>
            Keep the final 10–20% as your leverage until every punch-list item is complete. This is standard and professional contractors expect it.
          </p>
        </div>

        {/* FAQ */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", marginTop: "3rem" }}>
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
              <h3 style={{ color: navy, fontWeight: 700, fontSize: "1rem", marginBottom: "0.625rem" }}>
                {faq.q}
              </h3>
              <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div
          style={{
            backgroundColor: navy,
            borderRadius: "12px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Ready to get quotes? Start with the right number.
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            See what your project typically costs in your city before you pick up the phone.
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
