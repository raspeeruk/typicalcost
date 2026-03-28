import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  cities,
  getService,
  getCity,
  calcCityPrice,
  formatPrice,
  getNearbyCity,
} from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

function parseSlug(slug: string): { serviceSlug: string; citySlug: string } | null {
  // Pattern: [service]-cost-[city]
  // e.g. house-cleaning-cost-new-york-ny
  const match = slug.match(/^(.+)-cost-(.+)$/);
  if (!match) return null;
  return { serviceSlug: match[1], citySlug: match[2] };
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ slug: `${service.slug}-cost-${city.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};

  const service = getService(parsed.serviceSlug);
  const city = getCity(parsed.citySlug);
  if (!service || !city) return {};

  const price = calcCityPrice(service, city);

  return {
    title: `${service.name} Cost in ${city.name}, ${city.state} (2026)`,
    description: `How much does ${service.name.toLowerCase()} cost in ${city.name}, ${city.state}? Average cost is ${formatPrice(price.avg)} — ranging from ${formatPrice(price.min)} to ${formatPrice(price.max)}. Get free quotes from local pros.`,
    alternates: {
      canonical: `https://typicalcost.com/${slug}`,
    },
  };
}

export default async function ServiceCityPage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  const service = getService(parsed.serviceSlug);
  const city = getCity(parsed.citySlug);
  if (!service || !city) notFound();

  const price = calcCityPrice(service, city);
  const nearbyCities = getNearbyCity(city);
  const relatedServices = service.relatedServices
    .map((s) => getService(s))
    .filter(Boolean);

  const priceDiff = Math.round(
    ((city.costIndex - 1) / 1) * 100
  );
  const priceDiffLabel =
    priceDiff > 0
      ? `${Math.abs(priceDiff)}% above national average`
      : priceDiff < 0
      ? `${Math.abs(priceDiff)}% below national average`
      : "at national average";

  const year = 2026;

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
            href={`/services/${service.slug}`}
            style={{ color: "#0066cc", textDecoration: "none" }}
          >
            {service.name}
          </a>
          <span>›</span>
          <a
            href={`/cities/${city.slug}`}
            style={{ color: "#0066cc", textDecoration: "none" }}
          >
            {city.name}, {city.state}
          </a>
          <span>›</span>
          <span style={{ color: "#374151" }}>
            {service.name} Cost in {city.name}
          </span>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2.5rem 24px",
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        {/* Main content */}
        <div>
          {/* H1 + price hero */}
          <h1
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#1a2332",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            {service.name} Cost in {city.name}, {city.state} ({year})
          </h1>

          {/* Price card */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "2rem 2.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "0.8125rem",
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: "0.375rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 600,
                  }}
                >
                  Low
                </div>
                <div
                  style={{
                    color: "#374151",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {formatPrice(price.min)}
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  borderLeft: "1px solid #e5e7eb",
                  borderRight: "1px solid #e5e7eb",
                  padding: "0 1.5rem",
                }}
              >
                <div
                  style={{
                    color: "#0066cc",
                    fontSize: "0.8125rem",
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: "0.375rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 600,
                  }}
                >
                  Typical Average
                </div>
                <div
                  style={{
                    color: "#0066cc",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {formatPrice(price.avg)}
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "0.8125rem",
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: "0.375rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 600,
                  }}
                >
                  High
                </div>
                <div
                  style={{
                    color: "#374151",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {formatPrice(price.max)}
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#f0f7ff",
                borderRadius: "8px",
                padding: "0.75rem 1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#374151",
                  fontSize: "0.875rem",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                <strong>{city.name}</strong> is {priceDiffLabel} for{" "}
                {service.name.toLowerCase()}
              </span>
              <span
                style={{
                  color: "#0066cc",
                  fontSize: "0.875rem",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                }}
              >
                {service.unit}
              </span>
            </div>
          </div>

          {/* What affects the price */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
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
              What affects the price of {service.name.toLowerCase()} in{" "}
              {city.name}?
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {service.factors.map((factor, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "0.625rem 0",
                    borderBottom:
                      i < service.factors.length - 1
                        ? "1px solid #f3f4f6"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#0066cc",
                      color: "#ffffff",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {i + 1}
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

          {/* City comparison table */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
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
              How {city.name} compares
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    {["City", "Low", "Average", "High"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "0.75rem 1rem",
                          textAlign: h === "City" ? "left" : "right",
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
                  {/* National average row */}
                  <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        color: "#6b7280",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                      }}
                    >
                      National Average
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        textAlign: "right",
                        color: "#6b7280",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                      }}
                    >
                      {formatPrice(service.nationalMin)}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        textAlign: "right",
                        color: "#6b7280",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                      }}
                    >
                      {formatPrice(service.nationalAvg)}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        textAlign: "right",
                        color: "#6b7280",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                      }}
                    >
                      {formatPrice(service.nationalMax)}
                    </td>
                  </tr>
                  {/* Current city */}
                  <tr
                    style={{
                      borderBottom: "1px solid #f3f4f6",
                      backgroundColor: "#f0f7ff",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        color: "#0066cc",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      {city.name}, {city.state} ◀
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        textAlign: "right",
                        color: "#0066cc",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      {formatPrice(price.min)}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        textAlign: "right",
                        color: "#0066cc",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                      }}
                    >
                      {formatPrice(price.avg)}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        textAlign: "right",
                        color: "#0066cc",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      {formatPrice(price.max)}
                    </td>
                  </tr>
                  {/* Nearby cities */}
                  {nearbyCities.map((nearCity) => {
                    const nearPrice = calcCityPrice(service, nearCity);
                    return (
                      <tr
                        key={nearCity.slug}
                        style={{ borderBottom: "1px solid #f3f4f6" }}
                      >
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.875rem",
                          }}
                        >
                          <a
                            href={`/${service.slug}-cost-${nearCity.slug}`}
                            style={{
                              color: "#374151",
                              textDecoration: "none",
                            }}
                          >
                            {nearCity.name}, {nearCity.state}
                          </a>
                        </td>
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            textAlign: "right",
                            color: "#374151",
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.875rem",
                          }}
                        >
                          {formatPrice(nearPrice.min)}
                        </td>
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            textAlign: "right",
                            color: "#374151",
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.875rem",
                          }}
                        >
                          {formatPrice(nearPrice.avg)}
                        </td>
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            textAlign: "right",
                            color: "#374151",
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.875rem",
                          }}
                        >
                          {formatPrice(nearPrice.max)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#1a2332",
                fontFamily: "'Outfit', sans-serif",
                marginBottom: "1.25rem",
              }}
            >
              Frequently asked questions
            </h2>
            {[
              {
                q: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
                a: `The average cost of ${service.name.toLowerCase()} in ${city.name}, ${city.state} is ${formatPrice(price.avg)} ${service.unit}. Prices typically range from ${formatPrice(price.min)} to ${formatPrice(price.max)} depending on the scope of work and provider.`,
              },
              {
                q: `Why is ${service.name.toLowerCase()} ${priceDiff >= 0 ? "more" : "less"} expensive in ${city.name}?`,
                a: `${city.name} has a cost-of-living index of ${city.costIndex.toFixed(2)} relative to the national average (1.00). This means local labor, overhead, and operating costs are ${priceDiffLabel}, which directly impacts what service providers charge.`,
              },
              {
                q: `What's included in the price for ${service.name.toLowerCase()}?`,
                a: `${service.description}. The price typically includes standard labor and materials. Key factors that affect the final quote: ${service.factors.join(", ")}.`,
              },
              {
                q: `How do I get the best price for ${service.name.toLowerCase()} in ${city.name}?`,
                a: `Get at least 3 quotes from local providers before committing. Ask about bundled discounts if combining with related services. Off-season or weekday scheduling often lowers costs by 10-20%.`,
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  paddingBottom: i < 3 ? "1.25rem" : 0,
                  marginBottom: i < 3 ? "1.25rem" : 0,
                  borderBottom: i < 3 ? "1px solid #f3f4f6" : "none",
                }}
              >
                <h3
                  style={{
                    color: "#1a2332",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: "0.5rem",
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.9rem",
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Related services */}
          {relatedServices.length > 0 && (
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "1.75rem 2rem",
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
                Related services in {city.name}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {relatedServices.map((rel) => {
                  if (!rel) return null;
                  const relPrice = calcCityPrice(rel, city);
                  return (
                    <a
                      key={rel.slug}
                      href={`/${rel.slug}-cost-${city.slug}`}
                      style={{
                        backgroundColor: "#f8f9fa",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        padding: "1rem",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      <div
                        style={{
                          color: "#1a2332",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        {rel.name}
                      </div>
                      <div
                        style={{
                          color: "#0066cc",
                          fontWeight: 700,
                          fontSize: "1rem",
                          fontFamily: "'Outfit', sans-serif",
                          marginTop: "0.25rem",
                        }}
                      >
                        {formatPrice(relPrice.avg)}
                      </div>
                      <div
                        style={{
                          color: "#9ca3af",
                          fontSize: "0.75rem",
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        avg in {city.name}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside>
          {/* Get quotes CTA */}
          <div
            style={{
              backgroundColor: "#0066cc",
              borderRadius: "12px",
              padding: "1.75rem",
              marginBottom: "1.5rem",
              position: "sticky",
              top: "24px",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "1.125rem",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: "0.75rem",
              }}
            >
              Get free quotes in {city.name}
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.875rem",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              Connect with top-rated local pros. Compare quotes and save up to
              30%.
            </p>
            <a
              href={`https://www.angi.com/companylist/us/${city.slug.replace(/-[a-z]{2}$/, "")}/`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                display: "block",
                backgroundColor: "#ffffff",
                color: "#0066cc",
                textAlign: "center",
                padding: "0.875rem",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "0.9375rem",
                fontFamily: "'Outfit', sans-serif",
                textDecoration: "none",
                marginBottom: "0.75rem",
              }}
            >
              Get free quotes — Angi
            </a>
            <a
              href={`https://www.thumbtack.com/`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                display: "block",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#ffffff",
                textAlign: "center",
                padding: "0.875rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.9375rem",
                fontFamily: "'Outfit', sans-serif",
                textDecoration: "none",
              }}
            >
              Get free quotes — Thumbtack
            </a>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.6875rem",
                fontFamily: "'Outfit', sans-serif",
                marginTop: "0.75rem",
                textAlign: "center",
              }}
            >
              Affiliate links. We may earn a commission.
            </p>
          </div>

          {/* Service info */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <h3
              style={{
                color: "#1a2332",
                fontSize: "1rem",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: "1rem",
              }}
            >
              About this estimate
            </h3>
            <dl style={{ margin: 0 }}>
              {[
                { label: "Service", value: service.name },
                { label: "City", value: `${city.name}, ${city.state}` },
                { label: "Priced per", value: service.unit },
                {
                  label: "Cost index",
                  value: `${city.costIndex.toFixed(2)}x national avg`,
                },
                { label: "Data year", value: String(year) },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #f3f4f6",
                    gap: "1rem",
                  }}
                >
                  <dt
                    style={{
                      color: "#6b7280",
                      fontSize: "0.8125rem",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {item.label}
                  </dt>
                  <dd
                    style={{
                      color: "#1a2332",
                      fontSize: "0.8125rem",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      margin: 0,
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
