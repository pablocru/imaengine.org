import {
  z,
  defineCollection,
  reference,
  type CollectionEntry,
  type ValidContentEntrySlug
} from "astro:content";

const pageSchema = z.object({
  seoDescription: z.string().min(60).max(155),
  seoTitle: z.string().min(30).max(60),
  tabTitle: z.string(),
});

const staticPageSchema = z.object({
  pageDescription: z.string(),
  pageTitle: z.string(),
}).and(pageSchema);

const blogCollection = (
  postCategories: string[],
  relatedCollection: BlogCollection,
) => defineCollection({
  type: "content",
  schema: z.object({
    categories: z.array(z.string()).default(postCategories),
    relatedPosts: z.array(reference(relatedCollection)).default([]),
    isDraft: z.boolean().default(true),
  }).and(pageSchema)
});

export type BlogCollection = "blogIndustries" | "blogResources";
export type BlogCollectionEntry = CollectionEntry<BlogCollection>;
export type ValidBlogSlug = ValidContentEntrySlug<BlogCollection>;

export const collections = {
  staticPage: defineCollection({
    type: "data",
    schema: staticPageSchema
  }),
  blogIndustries: blogCollection(["industries"], "blogIndustries"),
  blogResources: blogCollection(["resources"], "blogResources"),
};
