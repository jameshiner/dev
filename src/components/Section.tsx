import type { ReactNode } from 'react';
import { SectionHeading } from './SectionHeading';
import styles from './Section.module.css';

// A titled page section; consecutive sections get the same spacing on every page.
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.section}>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </section>
  );
}
