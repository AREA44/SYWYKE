export function sitesAndTags(allSites: any) {
  const sites = sortedSites(allSites)
  const tags = siteTags(sites)
  return { allSites: sites, allTags: tags }
}

function sortedSites(allSites: any) {
  const sites = Array.isArray(allSites) ? allSites : []
  return sites.sort((a: any, b: any) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  })
}

function siteTags(sites: any[]) {
  return sites.reduce((allTags: { [x: string]: any[] }, site: any) => {
    const tags = site.data.tags
    if (tags) {
      tags.forEach((tag: string | number) => {
        if (!allTags[tag]) {
          allTags[tag] = []
        }
        allTags[tag].push(site)
      })
    }
    return allTags
  }, {})
}
