import type { MarkdownHeading } from "astro";

export type TocHeading = {
  slug: string,
  text: string,
  subheadings: TocHeading[]
}

export function buildTocStructure(headings: MarkdownHeading[]) {
  if (!headings.length) return [];

  const tocHeadings: TocHeading[] = [];
  const firstDepth = headings[0].depth;

  for (const { depth, slug, text } of headings) {
    addTocSubheadings(tocHeadings, { slug, text, subheadings: [] }, depth - firstDepth);
  }

  return tocHeadings;
}

function addTocSubheadings(
  tocHeadings: TocHeading[],
  tocHeading: TocHeading,
  depth: number
) {
  if (depth === 0) {
    tocHeadings.push(tocHeading);
  } else {
    const depthHeading = tocHeadings.at(-1);

    if (!depthHeading) return;

    addTocSubheadings(depthHeading.subheadings, tocHeading, --depth);
  }
}

