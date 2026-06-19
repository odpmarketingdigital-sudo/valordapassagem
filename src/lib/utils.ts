export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function capitalize(text: string): string {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function parseRouteSlug(slug: string): { origin: string; destination: string } | null {
  const match = slug.match(/^(.+)-para-(.+)$/);
  if (!match) return null;
  return { origin: match[1], destination: match[2] };
}

export function buildRouteSlug(originSlug: string, destinationSlug: string): string {
  return `${originSlug}-para-${destinationSlug}`;
}
