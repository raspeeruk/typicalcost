import { Metadata } from "next";
import { services, formatPrice, categoryLabels } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Services — Price Guide (2026)",
  description:
    "Browse price estimates for 50+ home, automotive, event, health, and business services across 50 US cities.",
  alternates: {
    canonical: "https://typicalcost.com/services",
  },
};

export default function ServicesIndexPage() {
  const categories = Object.entries(categoryLabels);

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
            All Services — Price Guide
          </h1>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "1.0625rem",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.6,
            }}
          >
            {services.length} services tracked. Click any service to see prices
            across all 50 US cities.
          </p>
        </div>
      </div>

      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 24px" }}
      >
        {categories.map(([catKey, catLabel]) => {
          const catServices = services.filter((s) => s.category === catKey);
          return (
            <div key={catKey} style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#1a2332",
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: "1rem",
                  paddingBottom: "0.625rem",
                  borderBottom: "3px solid #0066cc",
                  display: "inline-block",
                }}
              >
                {catLabel}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "0.875rem",
                }}
              >
                {catServices.map((service) => (
                  <a
                    key={service.slug}
                    href={`/services/${service.slug}`}
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
                          marginBottom: "0.25rem",
                        }}
                      >
                        {service.name}
                      </div>
                      <div
                        style={{
                          color: "#9ca3af",
                          fontSize: "0.8125rem",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        {service.unit} · 50 cities
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div
                        style={{
                          color: "#0066cc",
                          fontWeight: 700,
                          fontSize: "1.125rem",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        {formatPrice(service.nationalAvg)}
                      </div>
                      <div
                        style={{
                          color: "#9ca3af",
                          fontSize: "0.75rem",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        national avg
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
