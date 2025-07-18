import { getCollection } from "astro:content";

// Sort all sites alphabetically
export async function getSortedSites() {
  const sites = await getCollection("sites");
  return sites.sort((a, b) =>
    (a.data.title || "").localeCompare(b.data.title || "")
  );
}

// Get paginated result for all sites
export async function getPaginatedSites(page: number, perPage: number) {
  const allSites = await getSortedSites();
  const start = (page - 1) * perPage;
  return {
    paginated: allSites.slice(start, start + perPage),
    totalPages: Math.ceil(allSites.length / perPage),
    allSites,
  };
}

// Extract unique tags from sites
export function extractUniqueTags(
  sites: Awaited<ReturnType<typeof getSortedSites>>
) {
  const tagSet = new Set<string>();
  for (const site of sites) {
    for (const tag of site.data.tags ?? []) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet);
}

// Slugify tag for URLs
export function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Filter sites by tag and paginate
export async function getSitesByTag(
  tag: string,
  page: number,
  perPage: number
) {
  const allSites = await getSortedSites();
  const filtered = allSites.filter((site) =>
    (site.data.tags ?? []).includes(tag)
  );
  const start = (page - 1) * perPage;
  return {
    paginated: filtered.slice(start, start + perPage),
    totalPages: Math.ceil(filtered.length / perPage),
    allFiltered: filtered,
  };
}
