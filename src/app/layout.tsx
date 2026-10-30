import type { Metadata } from 'next';
import { Geist, Schibsted_Grotesk } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { themeScript } from '@/components/theme';
import { site } from '@/data/site';
import './globals.css';
import styles from './layout.module.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const schibsted = Schibsted_Grotesk({ subsets: ['latin'], variable: '--font-schibsted' });

export const metadata: Metadata = {
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    // suppressHydrationWarning: themeScript may change data-theme before React hydrates.
    <html
      lang="en"
      data-theme="dark"
      className={`${geist.variable} ${schibsted.variable}`}
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
