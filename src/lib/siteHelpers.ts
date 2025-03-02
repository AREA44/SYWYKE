export interface SiteData {
  title: string;
  description: string;
  site: string;
  tags?: string[];
}

export interface Site {
  id: string;
  data: SiteData;
  slug: string;
  body: string;
  collection: "sites";
}

// Define explicit return type for better TypeScript support
export function sitesAndTags(allSites: Site[]): {
  allSites: Site[];
  allTags: Record<string, Site[]>;
} {
  const sites = sortedSites(allSites);
  const tags = siteTags(sites);
  return { allSites: sites, allTags: tags };
}

// Use .toSorted() instead of .sort() for immutability
function sortedSites(sites: Site[]): Site[] {
  return sites.toSorted((a, b) => a.data.title.localeCompare(b.data.title));
}

function siteTags(sites: Site[]): Record<string, Site[]> {
  return sites.reduce<Record<string, Site[]>>((allTags, site) => {
    (site.data.tags ?? []).forEach((tag) => {
      allTags[tag] ||= []; // Use logical OR assignment for cleaner initialization
      allTags[tag].push(site);
    });
    return allTags;
  }, {});
}
