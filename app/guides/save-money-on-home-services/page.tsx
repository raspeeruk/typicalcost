import { Metadata } from "next";

export const metadata: Metadata = {
  title: "27 Ways to Save Money on Home Services in 2025",
  description:
    "US homeowners spend $3,018 per year on home maintenance — most overpay. Here are 27 proven ways to cut your home service costs without sacrificing quality.",
};

const diyTable = [
  { task: "Painting interior walls", difficulty: "Easy", diy: "$150–$400", pro: "$800–$2,500", verdict: "DIY it", verdictColor: "#059669" },
  { task: "Replacing light fixtures", difficulty: "Easy–Medium", diy: "$50–$200", pro: "$150–$400", verdict: "DIY it", verdictColor: "#059669" },
  { task: "Installing laminate flooring", difficulty: "Medium", diy: "$400–$1,500", pro: "$1,500–$4,000", verdict: "DIY it", verdictColor: "#059669" },
  { task: "Replacing outlets/switches", difficulty: "Medium", diy: "$20–$80", pro: "$80–$250", verdict: "DIY it", verdictColor: "#059669" },
  { task: "Caulking and weatherstripping", difficulty: "Easy", diy: "$20–$60", pro: "$100–$300", verdict: "DIY it", verdictColor: "#059669" },
  { task: "Roof replacement", difficulty: "Very Hard", diy: "$1,500–$4,000", pro: "$5,000–$15,000", verdict: "Hire out", verdictColor: "#dc2626" },
  { task: "Electrical panel upgrade", difficulty: "Requires license", diy: "Illegal/unsafe", pro: "$1,500–$3,500", verdict: "Hire out", verdictColor: "#dc2626" },
  { task: "Main plumbing line work", difficulty: "Requires permit", diy: "$500–$2,000", pro: "$1,500–$5,000", verdict: "Hire out", verdictColor: "#dc2626" },
  { task: "HVAC installation", difficulty: "Requires certification", diy: "Not possible", pro: "$3,000–$10,000", verdict: "Hire out", verdictColor: "#dc2626" },
  { task: "Bathroom tile (simple)", difficulty: "Medium", diy: "$200–$600", pro: "$800–$2,500", verdict: "Your call", verdictColor: "#d97706" },
];

const faqs = [
  {
    q: "What is the 1% rule for home maintenance?",
    a: "Budget 1% of your home's value per year for maintenance and repairs. A $400,000 home should have $4,000 set aside annually for maintenance. This doesn't mean you'll spend it every year — but when a $4,000 HVAC repair comes, you won't be scrambling. Homes in older neighborhoods or with aging systems may need 1.5–2%.",
  },
  {
    q: "Are home warranties worth it?",
    a: "For older homes with aging systems (HVAC, plumbing, electrical), a home warranty can make sense — especially the first 2 years of ownership when you don't know what you're inheriting. For newer homes with everything under manufacturer warranty, they rarely pay off. The average home warranty costs $600–$1,200/year with $75–$125 service call fees. Do the math on what your systems are likely to cost.",
  },
  {
    q: "When is the cheapest time to hire contractors?",
    a: "January–February for most exterior work (roofing, siding, painting). November–December for HVAC (before spring rush). Late fall for landscaping (contractors wrap up season). August for window and door replacement (slower period before fall remodel rush). You can typically save 10–20% by avoiding peak demand months.",
  },
  {
    q: "Does bundling projects with one contractor actually save money?",
    a: "Yes — consistently. Bundling 3+ projects with a single contractor typically saves 10–25% on combined cost. The contractor saves mobilization costs, scheduling overhead, and material delivery trips. Most will pass some of that back as a discount, especially to secure a larger job. Always ask explicitly for a multi-project rate.",
  },
];

export default function SaveMoneyOnHomeServicesPage() {
  const font = "'Outfit', sans-serif";
  const navy = "#1a2332";
  const blue = "#0066cc";
  const body = "#374151";

  const tips: { num: number; category: string; title: string; body: string }[] = [
    // Timing
    { num: 1, category: "Timing", title: "Book HVAC service in fall or spring — not during emergencies", body: "Emergency HVAC calls in peak summer heat or winter cold cost 30–50% more than scheduled maintenance. Spring and fall tune-ups prevent emergencies and cost a fraction of reactive repairs." },
    { num: 2, category: "Timing", title: "Schedule roofing in winter (in mild climates)", body: "Roofing contractors have less work in winter. Bids in November–January are consistently 10–20% lower than the same job in summer. In cold climates, schedule for early spring before the rush." },
    { num: 3, category: "Timing", title: "Book landscaping in late fall", body: "After the busy season ends, landscaping companies aggressively price fall cleanup, winterization, and pre-booking for next spring. Lock in annual maintenance contracts in October–November for best rates." },
    { num: 4, category: "Timing", title: "Plan painting projects for shoulder seasons", body: "Interior painting is year-round, but exterior painting slows in late fall and early spring. Painters are hungry for work in these periods. The same crew, 15% cheaper, just by timing." },
    { num: 5, category: "Timing", title: "Never call a contractor in an emergency if you can wait 24 hours", body: "Emergency markup is real — often 25–50% above standard rates. If the issue isn't immediately destructive (active leak, gas smell), waiting until business hours and calling multiple contractors saves significant money." },
    // DIY
    { num: 6, category: "DIY", title: "Learn to do your own annual HVAC maintenance", body: "Replacing filters, cleaning coils, and checking refrigerant levels can extend HVAC life 5–7 years. YouTube tutorials cover everything. Cost: $50/year in parts. Professional maintenance: $150–$300/year." },
    { num: 7, category: "DIY", title: "Do your own caulking and weatherstripping", body: "Air sealing is the highest-ROI home maintenance task. A $30 caulk job around windows and doors can save $150–$300/year in energy costs. Payback period: 2–3 months." },
    { num: 8, category: "DIY", title: "Paint before calling in trades for refresh projects", body: "A fresh coat of paint transforms a room. Interior painting is genuinely beginner-accessible with the right prep. The money you save vs. hiring painters ($800–$2,500 per room) funds other projects." },
    // Bundling
    { num: 9, category: "Bundling", title: "Bundle multiple projects with one contractor", body: "Scheduling 3+ projects with the same contractor in one visit reduces mobilization costs, travel time, and overhead. Contractors typically discount 10–25% for bundled work. This is the most consistently effective savings tactic for large project lists." },
    { num: 10, category: "Bundling", title: "Ask your plumber to do multiple fixes in one visit", body: "The service call fee ($75–$150) is fixed whether the plumber fixes one thing or five. List every small plumbing issue and address them all in one visit. Same principle applies to electricians." },
    { num: 11, category: "Bundling", title: "Negotiate annual maintenance contracts", body: "Many HVAC, pest control, and landscaping companies offer significant discounts for annual prepaid contracts vs. one-off service calls. Lock in annual rates before you need them." },
    // Quotes
    { num: 12, category: "Quotes", title: "Always get 3+ quotes — every single time", body: "This alone saves $500–$2,000+ on major projects. The quote spread on roofing, HVAC, and kitchen remodels in the same city routinely runs 40–60%. Getting three quotes takes 2 hours and can save as much as a part-time job." },
    { num: 13, category: "Quotes", title: "Use competitor quotes as leverage with your preferred contractor", body: "\"I have two other quotes that came in lower — is there any flexibility?\" Most contractors would rather reduce margin slightly than lose the job. You don't even need to share the exact number." },
    { num: 14, category: "Quotes", title: "Ask specifically about a multi-project discount", body: "Don't wait for contractors to offer it. Ask: \"If I book you for both the deck and the fence, what rate can you do?\" The answer is almost always better than the sum of individual quotes." },
    // Materials
    { num: 15, category: "Materials", title: "Supply your own materials for simple projects", body: "For straightforward labor jobs (installing fixtures you provide, painting with paint you buy), buying materials yourself at retail can be cheaper than the contractor markup. Always confirm the contractor is OK with customer-supplied materials first." },
    { num: 16, category: "Materials", title: "Buy discontinued or overstock tile and flooring", body: "Tile liquidators and overstock warehouses sell premium materials at 60–80% below retail. If you have flexibility on the specific material, the savings are substantial. Search \"tile liquidators [your city]\" for local options." },
    { num: 17, category: "Materials", title: "Get contractor pricing at supply houses", body: "Some building supply companies extend contractor pricing to homeowners doing large projects. Ask directly — the worst they say is no. On a kitchen remodel, contractor pricing on cabinets can save $2,000–$8,000." },
    // Maintenance
    { num: 18, category: "Maintenance", title: "The 1% rule: budget before you need it", body: "Set aside 1% of your home's value annually for maintenance. A $400,000 home = $4,000/year reserve. Homeowners without a maintenance reserve pay emergency rates. Those with a reserve can plan, shop, and save." },
    { num: 19, category: "Maintenance", title: "Flush your water heater annually", body: "Sediment buildup reduces efficiency and shortens water heater life by 3–5 years. Annual flushing costs 45 minutes and $0. Replacement costs $1,000–$3,000. ROI: excellent." },
    { num: 20, category: "Maintenance", title: "Clean your gutters twice a year", body: "Clogged gutters cause fascia rot, foundation erosion, and basement flooding — all expensive repairs. Cleaning twice a year costs $100–$200 hired out, or an afternoon of your time. It prevents $5,000–$20,000 in damage." },
    { num: 21, category: "Maintenance", title: "Inspect your roof after every major storm", body: "Minor roof damage caught early is a $300 repair. The same damage left for a full winter is a $5,000+ insurance claim (minus deductible). Walk the perimeter and look for obvious damage after major weather events." },
    // Memberships
    { num: 22, category: "Programs", title: "Check if your utility offers HVAC rebates", body: "Most US utilities offer rebates for energy-efficient HVAC replacement — $300–$1,500 is common for qualifying systems. Check before you buy. Your contractor may not mention this unprompted." },
    { num: 23, category: "Programs", title: "Check federal and state energy efficiency tax credits", body: "The Inflation Reduction Act created substantial tax credits for heat pumps, insulation, windows, and doors. Credits run 10–30% of project cost. Your tax professional or a quick IRS Energy Star lookup can confirm eligibility." },
    { num: 24, category: "Programs", title: "Home warranty programs: buy when you move in, not after problems start", body: "Home warranties are most valuable when you don't yet know what's failing. Buy at purchase or within the first year. Adding a warranty after systems have started failing often triggers exclusions." },
    // Misc
    { num: 25, category: "Misc", title: "Get your neighbor to share the cost of fence repairs", body: "A shared fence is legally a shared expense in most states. If your fence needs repair or replacement, split the cost with your neighbor. Most neighbors agree when asked properly. Saves 50%." },
    { num: 26, category: "Misc", title: "Hire crews directly from job sites in your neighborhood", body: "When you see a crew doing good work nearby, ask for a card. Word-of-mouth referral to a crew already mobilized in your area often means lower rates and faster availability. Be respectful — ask during a break, not mid-work." },
    { num: 27, category: "Misc", title: "Review your homeowner's insurance annually", body: "Many homeowners are over-insured on coverage they don't need, or under-insured where it matters. An annual 30-minute review with your agent can find $200–$600/year in savings or prevent a coverage gap that costs far more." },
  ];

  const categories = ["Timing", "DIY", "Bundling", "Quotes", "Materials", "Maintenance", "Programs", "Misc"];
  const categoryColors: Record<string, string> = {
    Timing: "#7c3aed",
    DIY: "#059669",
    Bundling: "#0066cc",
    Quotes: "#dc2626",
    Materials: "#d97706",
    Maintenance: "#0891b2",
    Programs: "#be185d",
    Misc: "#374151",
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: font }}>
      {/* Hero */}
      <section style={{ backgroundColor: navy, padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <p style={{ color: "#9ca3af", fontSize: "0.8125rem", marginBottom: "0.875rem" }}>
            <a href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>TypicalCost</a>
            {" "}&rsaquo;{" "}
            <a href="/guides" style={{ color: "#9ca3af", textDecoration: "none" }}>Guides</a>
            {" "}&rsaquo;{" "}Save Money on Home Services
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
            27 Ways to Save Money on Home Services in 2025
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "600px" }}>
            US homeowners spend an average of $3,018 per year on home maintenance and repairs. Most of them overpay. Here&apos;s how to stop.
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
          <p style={{ color: body, fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "1rem" }}>
            The average American household spends $3,018 per year on home maintenance, according to the American Housing Survey. High-cost cities like New York, San Francisco, and Boston push that number past $5,000. Most of this is necessary — but a significant portion is overpayment.
          </p>
          <p style={{ color: body, fontSize: "1.0625rem", lineHeight: 1.75, margin: 0 }}>
            These 27 strategies are organized by category. You don&apos;t need to implement all of them — pick the 5–6 that fit your situation and you&apos;ll likely save $1,000–$3,000 this year.
          </p>
        </div>

        {/* Category nav */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {categories.map((cat) => (
            <span
              key={cat}
              style={{
                backgroundColor: categoryColors[cat],
                color: "#ffffff",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                letterSpacing: "0.04em",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Tips list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "3rem" }}>
          {tips.map((tip) => (
            <div
              key={tip.num}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "1.25rem 1.5rem",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem", minWidth: "2.5rem" }}>
                <span style={{ color: blue, fontWeight: 800, fontSize: "1.0625rem", lineHeight: 1 }}>
                  {String(tip.num).padStart(2, "0")}
                </span>
                <span
                  style={{
                    backgroundColor: categoryColors[tip.category],
                    color: "#ffffff",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    padding: "0.125rem 0.375rem",
                    borderRadius: "9999px",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tip.category}
                </span>
              </div>
              <div>
                <h3 style={{ color: navy, fontWeight: 700, fontSize: "1rem", marginBottom: "0.375rem", lineHeight: 1.3 }}>
                  {tip.title}
                </h3>
                <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
                  {tip.body}
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
            Know what you should be paying — before you call
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            Every saving strategy works better when you start with real price data. TypicalCost shows actual price ranges for 50+ services in your city.
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

        {/* DIY vs Hire table */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          DIY vs. Hire Out: An Honest Assessment of 10 Common Tasks
        </h2>
        <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          Not all DIY makes sense. Here&apos;s an honest breakdown of which tasks are genuinely DIY-accessible and which ones end up costing more when attempted by non-professionals.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "3rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ backgroundColor: navy, color: "#ffffff" }}>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Task</th>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>DIY Difficulty</th>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>DIY Cost</th>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Pro Cost</th>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 600 }}>Verdict</th>
              </tr>
            </thead>
            <tbody>
              {diyTable.map((row, i) => (
                <tr key={row.task} style={{ backgroundColor: i % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                  <td style={{ padding: "0.75rem 1rem", color: navy, fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{row.task}</td>
                  <td style={{ padding: "0.75rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.difficulty}</td>
                  <td style={{ padding: "0.75rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.diy}</td>
                  <td style={{ padding: "0.75rem 1rem", color: body, borderBottom: "1px solid #e5e7eb" }}>{row.pro}</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid #e5e7eb", fontWeight: 700, color: row.verdictColor }}>{row.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Warranties section */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Membership and Home Warranty Programs — Are They Worth It?
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
            Home warranty programs (American Home Shield, Choice Home Warranty, etc.) cost $600–$1,200/year with service call fees of $75–$125. They cover repair or replacement of covered systems and appliances. Are they worth it?
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { label: "Worth it for:", items: ["Homes over 10 years old with original systems", "New homeowners who don't know the condition of systems", "Landlords with multiple properties", "Homeowners without an emergency repair fund"] },
              { label: "Usually not worth it for:", items: ["Newer homes where systems are under manufacturer warranty", "Homeowners with a fully-funded maintenance reserve", "Homes with recently replaced major systems", "Those willing to shop for competitive repair quotes (often cheaper than warranty caps)"] },
            ].map((section, i) => (
              <div key={i}>
                <div style={{ color: navy, fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.5rem" }}>{section.label}</div>
                <ul style={{ margin: 0, padding: "0 0 0 1.25rem" }}>
                  {section.items.map((item, j) => (
                    <li key={j} style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "0.25rem" }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Multiple quotes section */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", marginTop: "3rem" }}>
          Get Multiple Quotes — Every Time
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
            The single most consistently effective money-saving habit for homeowners is getting multiple quotes on every major project. Here&apos;s what the data shows:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            {[
              { label: "Saved on roofing projects", value: "$3,000–$8,000" },
              { label: "Saved on HVAC replacement", value: "$2,000–$5,000" },
              { label: "Saved on kitchen remodels", value: "$8,000–$25,000" },
              { label: "Typical price spread", value: "40–60%" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <div style={{ color: blue, fontSize: "1.375rem", fontWeight: 800, lineHeight: 1, marginBottom: "0.375rem" }}>
                  {stat.value}
                </div>
                <div style={{ color: "#6b7280", fontSize: "0.8125rem", lineHeight: 1.4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.75, margin: 0 }}>
            Getting three quotes on a major project takes 2–4 hours. At $2,000+ in typical savings, that&apos;s an effective hourly rate of $500–$1,000. There is no better use of your time as a homeowner.
          </p>
        </div>

        {/* 1% rule */}
        <h2 style={{ color: navy, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", marginTop: "3rem" }}>
          The 1% Rule for Your Maintenance Budget
        </h2>
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderLeft: `4px solid ${blue}`,
            borderRadius: "0 12px 12px 0",
            padding: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "1rem" }}>
            Budget 1% of your home&apos;s value per year for maintenance and repairs. Older homes, homes in harsh climates, or homes with aging systems should budget 1.5–2%.
          </p>
          <p style={{ color: body, fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "0 " }}>
            This doesn&apos;t mean you&apos;ll spend it every year. Some years you spend nothing major; other years you replace the roof. The 1% rule creates the reserve so that when a $6,000 expense comes, it&apos;s planned spending — not an emergency. Homeowners who don&apos;t maintain a reserve end up paying emergency rates, accepting the first quote, and financing maintenance on credit cards. That&apos;s expensive in every direction.
          </p>
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
            Every saving strategy starts with knowing the number
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            See city-adjusted price data for 50+ home services — so you know when you&apos;re being quoted fairly and when you&apos;re not.
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
