export const SITE_URL = "https://imaengine.org";

export const EXCLUDED_SLUGS = ["legal-notice", "privacy-cookie-policy"];

export function shouldExcludePageFromSitemap(page: string) {
  return !EXCLUDED_SLUGS.some((excludedSlug) => `${SITE_URL}/${excludedSlug}/` === page);
}

export function excludeSlugsFromRobots() {
  let disallowedSlugs = "";

  for (let i = 0; i < EXCLUDED_SLUGS.length; i++) {
    const slug = EXCLUDED_SLUGS[i];

    if (i > 0) disallowedSlugs += "\n";

    disallowedSlugs += "Disallow: /" + slug + "/";
  }

  return disallowedSlugs;
}
