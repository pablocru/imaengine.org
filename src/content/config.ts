import { z, defineCollection } from "astro:content";

const pageSchema = z.object({
  pageDescription: z.string(),
  pageTitle: z.string(),
  seoDescription: z.string().min(60).max(155),
  seoTitle: z.string().min(30).max(60),
  tabTitle: z.string(),
});

export const collections = {
  staticPage: defineCollection({
    type: "data",
    schema: pageSchema
  })
};
