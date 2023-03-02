import "astro/jsx-runtime";

export function sitesAndTags(allSites) {
  const sites = sortedSites(allSites);
  const tags = siteTags(sites);
  return { allSites: sites, allTags: tags };
}

function sortedSites(allSites) {
  allSites = allSites.sort((a, b) => {
    return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
  });
  return allSites;
}

function siteTags(sites) {
  return sites.reduce((allTags, site) => {
    const Tags = site.frontmatter.tags;
    if (Tags) {
      Tags.forEach((tag) => {
        if (!allTags[tag]) {
          allTags[tag] = [];
        }
        allTags[tag].push(site);
      });
    }
    return allTags;
  }, {});
}
