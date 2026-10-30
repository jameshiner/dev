import type { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

// Small uppercase accent label above each section. Pages without a visible title use as="h1".
export function SectionHeading({
  as: Heading = 'h2',
  children,
}: {
  as?: 'h1' | 'h2';
  children: ReactNode;
}) {
  return <Heading className={styles.heading}>{children}</Heading>;
}
