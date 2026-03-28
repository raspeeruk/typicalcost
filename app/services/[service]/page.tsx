import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  cities,
  getService,
  calcCityPrice,
  formatPrice,
} from "@/lib/data";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) return {};
  return {
    title: `${service.name} Cost by City (2026)`,
    description: `Compare ${service.name.toLowerCase()} costs across 50 US cities. National average: ${formatPrice(service.nationalAvg)} ${service.unit}. Find out what you'll pay in your city.`,
    alternates: {
      canonical: `https://typicalcost.com/services/${serviceSlug}`,
    },
  };
}

export default async function ServiceHubPage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) notFound();

  const cityPrices = cities
    .map((city) => ({
      city,
      price: calcCityPrice(service, city),
    }))
    .sort((a, b) => b.price.avg - a.price.avg);

  const mostExpensive = cityPrices[0];
  const leastExpensive = cityPrices[cityPrices.length - 1];

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
            href="/services"
            style={{ color: "#0066cc", textDecoration: "none" }}
          >
            Services
          </a>
          <span>›</span>
          <span style={{ color: "#374151" }}>{service.name}</span>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 24px" }}>
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
          {service.name} Cost by City (2026)
        </h1>
        <p
          style={{
            color: "#6b7280",
            fontSize: "1.0625rem",
            fontFamily: "'Outfit', sans-serif",
            lineHeight: 1.6,
            marginBottom: "2rem",
            maxWidth: "720px",
          }}
        >
          {service.description}. Prices vary significantly by city — find out
          exactly what you'll pay in your area.
        </p>

        {/* National average + stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            {
              label: "National Average",
              value: formatPrice(service.nationalAvg),
              sub: service.unit,
            },
            {
              label: "National Range",
              value: `${formatPrice(service.nationalMin)} – ${formatPrice(service.nationalMax)}`,
              sub: "low to high",
            },
            {
              label: "Most Expensive",
              value: mostExpensive.city.name,
              sub: `avg ${formatPrice(mostExpensive.price.avg)}`,
            },
            {
              label: "Least Expensive",
              value: leastExpensive.city.name,
              sub: `avg ${formatPrice(leastExpensive.price.avg)}`,
            },
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
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: 1.2,
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

        {/* Full city table */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid #e5e7eb" }}>
            <h2
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#1a2332",
                fontFamily: "'Outfit', sans-serif",
                margin: 0,
              }}
            >
              {service.name} prices — all 50 cities
            </h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#f8f9fa", borderBottom: "2px solid #e5e7eb" }}>
                  {["City", "State", "Low", "Average", "High", ""].map((h, i) => (
                    <th
                      key={i}
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: h === "City" || h === "State" || h === "" ? "left" : "right",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "#6b7280",
                        fontFamily: "'Outfit', sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cityPrices.map(({ city, price }, idx) => (
                  <tr
                    key={city.slug}
                    style={{
                      borderBottom: "1px solid #f3f4f6",
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fafafa",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "#1a2332",
                      }}
                    >
                      {city.name}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                        color: "#6b7280",
                      }}
                    >
                      {city.state}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        textAlign: "right",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                        color: "#374151",
                      }}
                    >
                      {formatPrice(price.min)}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        textAlign: "right",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: "#0066cc",
                      }}
                    >
                      {formatPrice(price.avg)}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        textAlign: "right",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                        color: "#374151",
                      }}
                    >
                      {formatPrice(price.max)}
                    </td>
                    <td style={{ padding: "0.875rem 1rem" }}>
                      <a
                        href={`/${service.slug}-cost-${city.slug}`}
                        style={{
                          color: "#0066cc",
                          fontSize: "0.8125rem",
                          fontFamily: "'Outfit', sans-serif",
                          textDecoration: "none",
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                        }}
                      >
                        See details →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What affects price */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "2rem",
            marginTop: "1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#1a2332",
              fontFamily: "'Outfit', sans-serif",
              marginBottom: "1rem",
            }}
          >
            What affects {service.name.toLowerCase()} cost?
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {service.factors.map((factor, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  padding: "0.625rem 0",
                  borderBottom: i < service.factors.length - 1 ? "1px solid #f3f4f6" : "none",
                }}
              >
                <span
                  style={{
                    color: "#0066cc",
                    fontWeight: 700,
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    color: "#374151",
                    fontSize: "0.9375rem",
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {factor}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
