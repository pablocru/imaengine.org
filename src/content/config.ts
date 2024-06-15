import { z, defineCollection } from "astro:content";

const pageSchema = z.object({
  tabTitle: z.string(),
  pageTitle: z.string(),
  seoTitle: z.string().min(30).max(60),
  seoDescription: z.string().min(60).max(155),
});

export const collections = {
  homePage: defineCollection({
    type: "data",
    schema: z.object({
      pageDescription: z.string(),
    }).and(pageSchema)
  }),
  staticPage: defineCollection({
    type: "data",
    schema: pageSchema
  })
};
