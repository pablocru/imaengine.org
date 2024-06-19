import {
  z,
  defineCollection,
  reference,
  type CollectionEntry,
  type ValidContentEntrySlug
} from "astro:content";

const pageSchema = z.object({
  title: z.string(),
  tabTitle: z.string(),
  seoTitle: z.string().min(30).max(60),
  seoDescription: z.string().min(60).max(155),
});

const staticPageSchema = z.object({
  pageDescription: z.string(),
}).and(pageSchema);

export type BlogPostCollection = "blogPost";
export type BlogPostEntry = CollectionEntry<BlogPostCollection>;
export type ValidBlogSlug = ValidContentEntrySlug<BlogPostCollection>;
export type ValidBlogCategory = ValidContentEntrySlug<"blogCategory">;

export const collections = {
  staticPage: defineCollection({
    type: "data",
    schema: staticPageSchema
  }),
  author: defineCollection({
    type: "data",
    schema: z.object({
      name: z.string(),
      label: z.string(),
      description: z.string(),
      linkedIn: z.string().url()
    })
  }),
  blogPost: defineCollection({
    type: "content",
    schema: z.object({
      relatedPosts: z.array(reference("blogPost")).default([]),
      isDraft: z.boolean().default(true),
      author: reference("author")
    }).and(pageSchema)
  }),
  blogCategory: defineCollection({
    type: "content",
    schema: pageSchema
  }),
};
