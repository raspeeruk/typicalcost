import servicesData from "@/data/services.json";
import citiesData from "@/data/cities.json";

export interface Service {
  slug: string;
  name: string;
  category: string;
  unit: string;
  nationalAvg: number;
  nationalMin: number;
  nationalMax: number;
  description: string;
  factors: string[];
  affiliateCategory: string;
  relatedServices: string[];
}

export interface City {
  slug: string;
  name: string;
  state: string;
  stateFull: string;
  costIndex: number;
  population: number;
}

export interface CityPrice {
  min: number;
  max: number;
  avg: number;
}

export const services: Service[] = servicesData as Service[];
export const cities: City[] = citiesData as City[];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function calcCityPrice(service: Service, city: City): CityPrice {
  return {
    min: Math.round(service.nationalMin * city.costIndex),
    max: Math.round(service.nationalMax * city.costIndex),
    avg: Math.round(service.nationalAvg * city.costIndex),
  };
}

export function formatPrice(amount: number): string {
  if (amount >= 1000) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const categoryLabels: Record<string, string> = {
  home: "Home Services",
  automotive: "Automotive",
  events: "Events & Occasions",
  health: "Health & Beauty",
  business: "Business Services",
  pets: "Pet Services",
  construction: "Construction & Renovation",
};

export const popularCombos: Array<{ serviceSlug: string; citySlug: string }> = [
  { serviceSlug: "house-cleaning", citySlug: "new-york-ny" },
  { serviceSlug: "lawn-mowing", citySlug: "los-angeles-ca" },
  { serviceSlug: "oil-change", citySlug: "chicago-il" },
  { serviceSlug: "carpet-cleaning", citySlug: "houston-tx" },
  { serviceSlug: "plumbing-repair", citySlug: "phoenix-az" },
  { serviceSlug: "car-detailing", citySlug: "san-francisco-ca" },
  { serviceSlug: "wedding-photography", citySlug: "dallas-tx" },
  { serviceSlug: "roof-repair", citySlug: "seattle-wa" },
  { serviceSlug: "kitchen-remodel", citySlug: "boston-ma" },
  { serviceSlug: "dog-boarding", citySlug: "miami-fl" },
  { serviceSlug: "hvac-service", citySlug: "denver-co" },
  { serviceSlug: "painting-interior", citySlug: "atlanta-ga" },
];

export function getNearbyCity(city: City, exclude: string[] = []): City[] {
  // Return 3 cities with similar cost indices for comparison
  return cities
    .filter((c) => c.slug !== city.slug && !exclude.includes(c.slug))
    .sort(
      (a, b) =>
        Math.abs(a.costIndex - city.costIndex) -
        Math.abs(b.costIndex - city.costIndex)
    )
    .slice(0, 3);
}
