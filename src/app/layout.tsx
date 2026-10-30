import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'James Hiner',
  description: 'James Hiner, frontend web developer in Denver, CO.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
