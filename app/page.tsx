import { Metadata } from "next";
import {
  services,
  cities,
  popularCombos,
  calcCityPrice,
  formatPrice,
  categoryLabels,
  getService,
  getCity,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "TypicalCost — Real prices. Real cities. No surprises.",
  description:
    "Find out how much any service costs in your city. House cleaning, plumbing, car detailing, and 50+ more services across 50 US cities.",
};

export default function HomePage() {
  const categorized = Object.entries(categoryLabels).map(([key, label]) => ({
    key,
    label,
    items: services.filter((s) => s.category === key).slice(0, 4),
  }));

  const popular = popularCombos.map((combo) => {
    const service = getService(combo.serviceSlug);
    const city = getCity(combo.citySlug);
    if (!service || !city) return null;
    const price = calcCityPrice(service, city);
    return { service, city, price };
  }).filter(Boolean);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{ backgroundColor: "#1a2332", padding: "80px 24px 72px" }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              color: "#0066cc",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'Outfit', sans-serif",
              marginBottom: "1rem",
            }}
          >
            50 services · 50 cities · 2,500 price pages
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 800,
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            How much does it cost
            <br />
            <span style={{ color: "#0066cc" }}>in your city?</span>
          </h1>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "1.125rem",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
            }}
          >
            Real prices. Real cities. No surprises.
            <br />
            Every quote starts with knowing the going rate.
          </p>

          {/* Quick links to popular searches */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.625rem",
              justifyContent: "center",
            }}
          >
            {[
              { label: "House Cleaning NYC", href: "/house-cleaning-cost-new-york-ny" },
              { label: "Plumbing Repair LA", href: "/plumbing-repair-cost-los-angeles-ca" },
              { label: "Lawn Mowing Chicago", href: "/lawn-mowing-cost-chicago-il" },
              { label: "Oil Change Houston", href: "/oil-change-cost-houston-tx" },
              { label: "Roof Repair Seattle", href: "/roof-repair-cost-seattle-wa" },
              { label: "Kitchen Remodel Boston", href: "/kitchen-remodel-cost-boston-ma" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#e5e7eb",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontFamily: "'Outfit', sans-serif",
                  textDecoration: "none",
                  transition: "background-color 0.15s",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular searches */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px 0" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a2332",
            fontFamily: "'Outfit', sans-serif",
            marginBottom: "1.5rem",
          }}
        >
          Most-searched prices
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {popular.map((item) => {
            if (!item) return null;
            const { service, city, price } = item;
            return (
              <a
                key={`${service.slug}-${city.slug}`}
                href={`/${service.slug}-cost-${city.slug}`}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "box-shadow 0.15s, border-color 0.15s",
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
                    {service.name}
                  </div>
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "0.875rem",
                      fontFamily: "'Outfit', sans-serif",
                      marginTop: "0.125rem",
                    }}
                  >
                    {city.name}, {city.state}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      color: "#0066cc",
                      fontWeight: 700,
                      fontSize: "1.125rem",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {formatPrice(price.avg)}
                  </div>
                  <div
                    style={{
                      color: "#9ca3af",
                      fontSize: "0.75rem",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    avg
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Browse by category */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px 0" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a2332",
            fontFamily: "'Outfit', sans-serif",
            marginBottom: "1.5rem",
          }}
        >
          Browse by category
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {categorized.map((cat) => (
            <div
              key={cat.key}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  color: "#1a2332",
                  fontWeight: 700,
                  fontSize: "1rem",
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "2px solid #0066cc",
                  display: "inline-block",
                }}
              >
                {cat.label}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {cat.items.map((service) => (
                  <li key={service.slug} style={{ marginBottom: "0.5rem" }}>
                    <a
                      href={`/services/${service.slug}`}
                      style={{
                        color: "#374151",
                        fontSize: "0.9375rem",
                        fontFamily: "'Outfit', sans-serif",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.375rem",
                      }}
                    >
                      <span style={{ color: "#0066cc" }}>→</span>
                      {service.name}
                      <span
                        style={{
                          color: "#9ca3af",
                          fontSize: "0.8125rem",
                          marginLeft: "auto",
                        }}
                      >
                        avg {formatPrice(service.nationalAvg)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/services"
                style={{
                  display: "block",
                  marginTop: "1rem",
                  color: "#0066cc",
                  fontSize: "0.875rem",
                  fontFamily: "'Outfit', sans-serif",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                View all {cat.label.toLowerCase()} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How we calculate prices */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "56px auto 0",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "2.5rem 3rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "#0066cc",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: "0.75rem",
                }}
              >
                Methodology
              </p>
              <h2
                style={{
                  color: "#1a2332",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                How we calculate prices
              </h2>
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "0.9375rem",
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: 1.7,
                }}
              >
                We start with national average prices sourced from industry
                surveys, contractor databases, and homeowner reports. We then
                apply city-level cost-of-living indices — the same data used by
                economists and relocation services.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                { label: "Services tracked", value: `${services.length}` },
                { label: "Cities covered", value: `${cities.length}` },
                { label: "Price pages", value: "2,500+" },
                { label: "Updated", value: "2026" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: "10px",
                    padding: "1.25rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#0066cc",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      fontFamily: "'Outfit', sans-serif",
                      lineHeight: 1,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "0.8125rem",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section
        style={{
          backgroundColor: "#0066cc",
          marginTop: "56px",
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            fontSize: "1.75rem",
            fontWeight: 700,
            fontFamily: "'Outfit', sans-serif",
            marginBottom: "0.75rem",
          }}
        >
          Ready to find prices in your city?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "1rem",
            fontFamily: "'Outfit', sans-serif",
            marginBottom: "1.75rem",
          }}
        >
          Browse all 50 services or all 50 cities — every page has real numbers.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/services"
            style={{
              backgroundColor: "#ffffff",
              color: "#0066cc",
              padding: "0.875rem 2rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.9375rem",
              fontFamily: "'Outfit', sans-serif",
              textDecoration: "none",
            }}
          >
            Browse all services
          </a>
          <a
            href="/cities"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.5)",
              color: "#ffffff",
              padding: "0.875rem 2rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.9375rem",
              fontFamily: "'Outfit', sans-serif",
              textDecoration: "none",
            }}
          >
            Browse all cities
          </a>
        </div>
      </section>
    </div>
  );
}
