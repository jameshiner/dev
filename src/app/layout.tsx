import type { Metadata } from 'next';
import { DM_Sans, IBM_Plex_Sans } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { themeScript } from '@/components/theme';
import { site } from '@/data/site';
import { baseOpenGraph, siteUrl } from '@/lib/metadata';
import './globals.css';
import styles from './layout.module.css';

// Display font for the name and big headings; text font for everything else.
const displayFont = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-display-face' });
const textFont = DM_Sans({ subsets: ['latin'], variable: '--font-text-face' });

// Site-wide defaults. Each page adds its own title, canonical URL and preview text (see
// pageMetadata in lib/metadata); the preview image and icons come from opengraph-image.tsx,
// icon.tsx and apple-icon.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { ...baseOpenGraph, title: site.name, description: site.description },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    // suppressHydrationWarning: themeScript may change data-theme before React hydrates.
    <html
      lang="en"
      data-theme="dark"
      className={`${displayFont.variable} ${textFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className={styles.shell}>
          <Sidebar />
          <div className={styles.content}>
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
