import type { ReactNode } from 'react';
import { SectionHeading } from './SectionHeading';
import styles from './Section.module.css';

// A titled page section; consecutive sections get the same spacing on every page.
export function Section({
  title,
  as,
  className,
  children,
}: {
  title: string;
  as?: 'h1' | 'h2';
  /** Page-specific tweaks from the caller. */
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={className ? `${styles.section} ${className}` : styles.section}>
      <SectionHeading as={as}>{title}</SectionHeading>
      {children}
    </section>
  );
}
