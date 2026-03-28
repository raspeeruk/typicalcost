import { Metadata } from "next";
import { cities, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Cities — Service Price Guide (2026)",
  description:
    "Browse service costs across 50 US cities. Find out what home cleaning, plumbing, lawn care, and 50+ other services cost in your area.",
  alternates: {
    canonical: "https://typicalcost.com/cities",
  },
};

export default function CitiesIndexPage() {
  const sorted = [...cities].sort((a, b) => b.population - a.population);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div
        style={{
          backgroundColor: "#1a2332",
          padding: "3rem 24px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              fontFamily: "'Outfit', sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            Service Costs by City
          </h1>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "1.0625rem",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.6,
            }}
          >
            {cities.length} US cities tracked. Each city has {services.length}{" "}
            service price pages.
          </p>
        </div>
      </div>

      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 24px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {sorted.map((city) => {
            const costLabel =
              city.costIndex >= 1.3
                ? "High cost"
                : city.costIndex <= 0.85
                ? "Low cost"
                : "Average cost";
            const costColor =
              city.costIndex >= 1.3
                ? "#dc2626"
                : city.costIndex <= 0.85
                ? "#16a34a"
                : "#6b7280";

            return (
              <a
                key={city.slug}
                href={`/cities/${city.slug}`}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  padding: "1.25rem 1.5rem",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#1a2332",
                      fontWeight: 600,
                      fontSize: "1rem",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {city.name}
                  </div>
                  <div
                    style={{
                      color: "#9ca3af",
                      fontSize: "0.8125rem",
                      fontFamily: "'Outfit', sans-serif",
                      marginTop: "0.125rem",
                    }}
                  >
                    {city.stateFull}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      color: "#1a2332",
                      fontWeight: 700,
                      fontSize: "1rem",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {city.costIndex.toFixed(2)}x
                  </div>
                  <div
                    style={{
                      color: costColor,
                      fontSize: "0.75rem",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {costLabel}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
