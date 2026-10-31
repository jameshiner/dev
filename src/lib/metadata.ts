import type { Metadata } from 'next';
import { site } from '@/data/site';

export const siteUrl = 'https://www.hiner.dev';

// The link-preview card drawn by src/app/opengraph-image.tsx, which also uses these values.
export const shareImageSize = { width: 1200, height: 630 };
export const shareImageAlt = `${site.name}, ${site.role}`;

// Shared Open Graph fields. The image is listed explicitly because Next only adds the generated
// one automatically where a page doesn't set its own openGraph.
export const baseOpenGraph = {
  type: 'website' as const,
  siteName: site.name,
  locale: 'en_US',
  images: [{ url: '/opengraph-image', ...shareImageSize, alt: shareImageAlt }],
};

/**
 * Title, description, canonical URL and link preview for a page. Every page uses this (home
 * sets the same fields in page.tsx): Next merges metadata shallowly, so a page's openGraph
 * replaces the layout's, and a page without its own canonical would get none.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, title: `${title} · ${site.name}`, description, url: path },
  };
}
