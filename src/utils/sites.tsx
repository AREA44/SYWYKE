import 'astro/jsx-runtime'

export function sitesAndTags(allSites: any) {
  const sites = sortedSites(allSites)
  const tags = siteTags(sites)
  return { allSites: sites, allTags: tags }
}

function sortedSites(allSites: any) {
  allSites = allSites.sort((a: any, b: any) => {
    return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
  })
  return allSites
}

function siteTags(sites: any[]) {
  return sites.reduce(
    (allTags: { [x: string]: any[] }, site: { frontmatter: { tags: any } }) => {
      const Tags = site.frontmatter.tags
      if (Tags) {
        Tags.forEach((tag: string | number) => {
          if (!allTags[tag]) {
            allTags[tag] = []
          }
          allTags[tag].push(site)
        })
      }
      return allTags
    },
    {},
  )
}
