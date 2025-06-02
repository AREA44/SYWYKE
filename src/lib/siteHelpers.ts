// Define the structure of a site's metadata
export interface SiteData {
  title: string;
  description: string;
  site: string;
  tags?: string[];
}

// Define the structure of a site
export interface Site {
  id: string;
  data: SiteData;
  slug: string;
  body: string;
  collection: "sites";
}

// Define the return type for `sitesAndTags`
export type SitesAndTagsResult = {
  allSites: Site[];
  allTags: Record<string, Site[]>;
};

// Main function to return sorted sites and tags mapping
export function sitesAndTags(allSites: Site[]): SitesAndTagsResult {
  const sites = sortedSites(allSites);
  const tags = siteTags(sites);
  return { allSites: sites, allTags: tags };
}

// Sorts sites alphabetically by their title
function sortedSites(sites: Site[]): Site[] {
  return sites.sort((a, b) =>
    (a.data.title || "").localeCompare(b.data.title || ""),
  );
}

// Groups sites by their tags, with optional alphabetical sorting of tags
function siteTags(sites: Site[]): Record<string, Site[]> {
  const allTags: Record<string, Site[]> = {};

  for (const site of sites) {
    for (const tag of site.data.tags ?? []) {
      allTags[tag] ||= [];
      allTags[tag].push(site);
    }
  }

  // Optional: Return tags in alphabetical order
  return Object.fromEntries(
    Object.entries(allTags).sort(([a], [b]) => a.localeCompare(b)),
  );
}
