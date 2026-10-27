import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export type Stat = { value: string; label: string };
export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  role_or_context: string | null;
};

function trimNumber(n: number) {
  return String(Math.round(n * 10) / 10);
}

function compact(n: number) {
  if (n >= 1_000_000) return `${trimNumber(n / 1_000_000)}M`;
  if (n >= 1_000) return `${trimNumber(n / 1_000)}K`;
  return String(n);
}

// Order and wording of the hero stats row. "key" matches the label column in the stats table.
const statDefinitions: { key: string; label: string; format: (n: number) => string }[] = [
  { key: "years_experience", label: "Experience", format: (n) => `${n}yr+` },
  { key: "brands_managed", label: "Brands", format: (n) => `${n}+` },
  { key: "growth_percent", label: "Growth", format: (n) => `${n}%+` },
  { key: "views", label: "Views", format: compact },
];

// Shown while the numbers load, and if Supabase is unreachable, so the page never has blanks.
export const fallbackStats: Stat[] = [
  { value: "4yr+", label: "Experience" },
  { value: "50+", label: "Brands" },
  { value: "40%+", label: "Growth" },
  { value: "188K", label: "Views" },
];

async function fetchStats(): Promise<Stat[]> {
  if (!supabase) return fallbackStats;
  const { data, error } = await supabase.from("stats").select("label, value");
  if (error || !data) return fallbackStats;
  const byLabel = new Map<string, number>(
    (data as { label: string; value: number }[]).map((row) => [row.label, row.value]),
  );
  return statDefinitions.map((definition, index) => {
    const value = byLabel.get(definition.key);
    const fallback = fallbackStats[index];
    if (value === undefined) {
      return fallback ?? { value: "", label: definition.label };
    }
    return { value: definition.format(value), label: definition.label };
  });
}

async function fetchTestimonials(): Promise<Testimonial[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("testimonials")
    .select("id, name, quote, role_or_context")
    .eq("is_published", true)
    .order("created_at", { ascending: false })
    .limit(6);
  if (error || !data) return [];
  return data as Testimonial[];
}

export function useStats() {
  const query = useQuery({
    queryKey: ["stats"],
    queryFn: fetchStats,
    placeholderData: fallbackStats,
    staleTime: 60_000,
  });
  return query.data ?? fallbackStats;
}

export function useTestimonials() {
  const query = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    staleTime: 60_000,
  });
  return query.data ?? [];
}
