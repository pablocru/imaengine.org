import { getCollection, getEntries } from "astro:content";
import type { BlogPostCollection, BlogPostEntry, ValidBlogSlug } from "@content/config";

export function filterPostsCondition(post: BlogPostEntry) {
  const { data: { isDraft, pubDate } } = post;

  return import.meta.env.DEV || (!isDraft && pubDate <= new Date());
}

export async function getBlogCollection() {
  return await getCollection("blogPost", filterPostsCondition);
}

export async function getBlogEntries(
  postReferences: { collection: BlogPostCollection, slug: ValidBlogSlug }[]
) {
  const posts = await getEntries(postReferences);

  return posts.filter(filterPostsCondition);
}
