import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  cities,
  getCity,
  calcCityPrice,
  formatPrice,
  categoryLabels,
} from "@/lib/data";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};
  return {
    title: `Service Costs in ${city.name}, ${city.state} (2026)`,
    description: `How much do services cost in ${city.name}, ${city.state}? Compare prices for 50+ services including home cleaning, plumbing, lawn care, and more.`,
    alternates: {
      canonical: `https://typicalcost.com/cities/${citySlug}`,
    },
  };
}

export default async function CityHubPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const priceDiff = Math.round((city.costIndex - 1) * 100);
  const priceDiffLabel =
    priceDiff > 0
      ? `${Math.abs(priceDiff)}% above the national average`
      : priceDiff < 0
      ? `${Math.abs(priceDiff)}% below the national average`
      : "at the national average";

  const categories = Object.entries(categoryLabels);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "0.75rem 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            gap: "0.5rem",
            fontSize: "0.8125rem",
            color: "#6b7280",
            fontFamily: "'Outfit', sans-serif",
            flexWrap: "wrap",
          }}
        >
          <a href="/" style={{ color: "#0066cc", textDecoration: "none" }}>
            Home
          </a>
          <span>›</span>
          <a
            href="/cities"
            style={{ color: "#0066cc", textDecoration: "none" }}
          >
            Cities
          </a>
          <span>›</span>
          <span style={{ color: "#374151" }}>
            {city.name}, {city.state}
          </span>
        </div>
      </div>

      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 24px" }}
      >
        <h1
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 800,
            color: "#1a2332",
            fontFamily: "'Outfit', sans-serif",
            lineHeight: 1.15,
            marginBottom: "0.75rem",
          }}
        >
          Service Costs in {city.name}, {city.state} (2026)
        </h1>
        <p
          style={{
            color: "#6b7280",
            fontSize: "1.0625rem",
            fontFamily: "'Outfit', sans-serif",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
            maxWidth: "720px",
          }}
        >
          {city.name} costs are {priceDiffLabel} for most services. Browse all
          50 services below to see exact prices for this city.
        </p>

        {/* City stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            {
              label: "Cost Index",
              value: `${city.costIndex.toFixed(2)}x`,
              sub: "vs national avg",
            },
            {
              label: "vs National Avg",
              value:
                priceDiff > 0
                  ? `+${priceDiff}%`
                  : priceDiff < 0
                  ? `${priceDiff}%`
                  : "Average",
              sub: "price level",
            },
            {
              label: "Population",
              value: new Intl.NumberFormat("en-US", {
                notation: "compact",
              }).format(city.population),
              sub: city.stateFull,
            },
            { label: "Services tracked", value: `${services.length}`, sub: "price pages" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <div
                style={{
                  color: "#6b7280",
                  fontSize: "0.75rem",
                  fontFamily: "'Outfit', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  marginBottom: "0.375rem",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  color: "#1a2332",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: 1.1,
                  marginBottom: "0.2rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "0.8125rem",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Services by category */}
        {categories.map(([catKey, catLabel]) => {
          const catServices = services.filter((s) => s.category === catKey);
          return (
            <div key={catKey} style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#1a2332",
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: "0.875rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "2px solid #0066cc",
                  display: "inline-block",
                }}
              >
                {catLabel}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {catServices.map((service) => {
                  const price = calcCityPrice(service, city);
                  return (
                    <a
                      key={service.slug}
                      href={`/${service.slug}-cost-${city.slug}`}
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "10px",
                        padding: "1.125rem 1.25rem",
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            color: "#1a2332",
                            fontWeight: 600,
                            fontSize: "0.9375rem",
                            fontFamily: "'Outfit', sans-serif",
                          }}
                        >
                          {service.name}
                        </div>
                        <div
                          style={{
                            color: "#9ca3af",
                            fontSize: "0.75rem",
                            fontFamily: "'Outfit', sans-serif",
                            marginTop: "0.125rem",
                          }}
                        >
                          {service.unit}
                        </div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div
                          style={{
                            color: "#0066cc",
                            fontWeight: 700,
                            fontSize: "1.0625rem",
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
