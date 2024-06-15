import { getCollection, type ContentEntryMap } from "astro:content";

export async function getPostPathsFiltered(collection: keyof ContentEntryMap) {
  const excludedPostIDs = ["mockup"];

  const blogEntries = await getCollection(
    collection,
    ({ id }) => !(
      import.meta.env.PROD &&
      excludedPostIDs.some(postID => id.startsWith(postID))
    )
  );

  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}
