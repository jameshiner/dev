import type { ReactNode } from 'react';
import { SectionHeading } from './SectionHeading';
import styles from './Section.module.css';

// A titled page section; consecutive sections get the same spacing on every page.
export function Section({
  title,
  as,
  children,
}: {
  title: string;
  as?: 'h1' | 'h2';
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <SectionHeading as={as}>{title}</SectionHeading>
      {children}
    </section>
  );
}
