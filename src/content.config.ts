import { z, defineCollection } from "astro:content";
const sitesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    site: z.string().url(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});
export const collections = {
  sites: sitesCollection,
};
