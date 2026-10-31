import type { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

// Small uppercase accent label above each section. A page's first section uses as="h1" as the
// page title, which phones hide visually (the nav's current tab already names the page).
export function SectionHeading({
  as: Heading = 'h2',
  children,
}: {
  as?: 'h1' | 'h2';
  children: ReactNode;
}) {
  const className = Heading === 'h1' ? `${styles.heading} ${styles.pageTitle}` : styles.heading;
  return <Heading className={className}>{children}</Heading>;
}
