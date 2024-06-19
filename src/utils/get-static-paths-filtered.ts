import { getCollection, getEntries } from "astro:content";
import type { BlogCollection, BlogCollectionEntry, ValidBlogSlug } from "@content/config";

export function filterPostsCondition(entry: BlogCollectionEntry) {
  return !(import.meta.env.PROD && entry.data.isDraft);
}

export async function getBlogCollection() {
  return await getCollection("blogPost", filterPostsCondition);
}

export async function getBlogEntries(
  entries: { collection: BlogCollection, slug: ValidBlogSlug }[]
) {
  const posts = await getEntries(entries);

  return posts.filter(filterPostsCondition);
}
