import type { Metadata } from "next";
import "./globals.css";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

export const metadata: Metadata = {
  title: {
    default: "TypicalCost — Real prices. Real cities. No surprises.",
    template: "%s | TypicalCost",
  },
  description:
    "Find out how much any service costs in your city. Real price data for 50+ services across 50 US cities. No estimates, no surprises.",
  metadataBase: new URL("https://typicalcost.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TypicalCost",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {GA4_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA4_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        <header style={{ backgroundColor: "#1a2332" }} className="py-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                Typical<span style={{ color: "#0066cc" }}>Cost</span>
              </span>
            </a>
            <nav className="flex items-center gap-6">
              <a
                href="/services"
                style={{
                  color: "#9ca3af",
                  fontSize: "0.875rem",
                  fontFamily: "'Outfit', sans-serif",
                  textDecoration: "none",
                }}
              >
                Services
              </a>
              <a
                href="/cities"
                style={{
                  color: "#9ca3af",
                  fontSize: "0.875rem",
                  fontFamily: "'Outfit', sans-serif",
                  textDecoration: "none",
                }}
              >
                Cities
              </a>
              <a
                href="/guides"
                style={{
                  color: "#9ca3af",
                  fontSize: "0.875rem",
                  fontFamily: "'Outfit', sans-serif",
                  textDecoration: "none",
                }}
              >
                Guides
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer
          style={{ backgroundColor: "#1a2332", borderTop: "1px solid #2d3748" }}
          className="mt-16 py-10 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: "0.5rem",
                  }}
                >
                  Typical<span style={{ color: "#0066cc" }}>Cost</span>
                </div>
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "0.875rem",
                    fontFamily: "'Outfit', sans-serif",
                    maxWidth: "260px",
                  }}
                >
                  Real prices. Real cities. No surprises.
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <div
                    style={{
                      color: "#ffffff",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      fontFamily: "'Outfit', sans-serif",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Browse
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="space-y-2">
                    <li>
                      <a
                        href="/services"
                        style={{
                          color: "#9ca3af",
                          fontSize: "0.875rem",
                          fontFamily: "'Outfit', sans-serif",
                          textDecoration: "none",
                        }}
                      >
                        All Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/cities"
                        style={{
                          color: "#9ca3af",
                          fontSize: "0.875rem",
                          fontFamily: "'Outfit', sans-serif",
                          textDecoration: "none",
                        }}
                      >
                        All Cities
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              style={{
                borderTop: "1px solid #2d3748",
                marginTop: "2rem",
                paddingTop: "1.5rem",
                color: "#6b7280",
                fontSize: "0.75rem",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              © {new Date().getFullYear()} TypicalCost. Prices are estimates
              based on market data and may vary. Always get multiple quotes.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
