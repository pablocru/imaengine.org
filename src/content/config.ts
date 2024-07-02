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
  title: z.string(),
});

export type BlogPostCollection = "blogPost";
export type BlogPostEntry = CollectionEntry<BlogPostCollection>;
export type ValidBlogSlug = ValidContentEntrySlug<BlogPostCollection>;
export type ValidBlogCategory = ValidContentEntrySlug<"blogCategory">;

export const collections = {
  staticPage: defineCollection({
    type: "content",
    schema: pageSchema
  }),
  author: defineCollection({
    type: "data",
    schema: z.object({
      description: z.string(),
      label: z.string(),
      linkedIn: z.string().url(),
      name: z.string(),
      profilePicture: reference("image"),
    })
  }),
  blogPost: defineCollection({
    type: "content",
    schema: z.object({
      author: reference("author"),
      cardDescription: z.string().max(90),
      cardTitle: z.string().max(60),
      cover: reference("image"),
      isReady: z.boolean().default(false),
      pubDate: z.date().default(new Date(new Date().getTime() + 8.64e+7)),
      relatedPosts: z.array(reference("blogPost")).max(2).default([]),
    }).and(pageSchema)
  }),
  blogCategory: defineCollection({
    type: "content",
    schema: z.object({
      featuredPosts: z.array(reference("blogPost")).default([])
    }).and(pageSchema)
  }),
  image: defineCollection({
    type: "data",
    schema: ({ image }) => z.object({
      alt: z.string(),
      metadata: image(),
    })
  })
};
