import { z, defineCollection } from "astro:content";

const pageSchema = z.object({
  seoDescription: z.string().min(60).max(155),
  seoTitle: z.string().min(30).max(60),
  tabTitle: z.string(),
});

const staticPageSchema = z.object({
  pageDescription: z.string(),
  pageTitle: z.string(),
}).and(pageSchema);

const blogCollection = defineCollection({
  type: "content",
  schema: pageSchema
});

export const collections = {
  staticPage: defineCollection({
    type: "data",
    schema: staticPageSchema
  }),
  blogIndustries: blogCollection,
  blogResources: blogCollection,
};
