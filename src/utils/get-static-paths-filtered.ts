import { getCollection, getEntries } from "astro:content";
import type { BlogCollection, BlogCollectionEntry, ValidBlogSlug } from "@content/config";

export function filterPostsCondition(entry: BlogCollectionEntry) {
  return !(import.meta.env.PROD && entry.data.isDraft);
}

export async function getBlogCollection(collection: BlogCollection) {
  return await getCollection(collection, filterPostsCondition);
}

export async function getBlogEntries(
  entries: { collection: BlogCollection, slug: ValidBlogSlug }[]
) {
  const posts = await getEntries(entries);

  return posts.filter(filterPostsCondition);
}

export async function getPostPathsFiltered(collection: BlogCollection) {
  const blogEntries = await getCollection(collection, filterPostsCondition);

  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}
