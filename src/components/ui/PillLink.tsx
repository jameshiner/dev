import type { ReactNode } from 'react';
import styles from './PillLink.module.css';

type PillLinkProps = {
  href: string;
  children: ReactNode;
  /** Layout tweaks from the caller (margins, alignment). */
  className?: string;
  'aria-label'?: string;
};

// Outlined pill link to an external site; opens in a new tab.
export function PillLink({ href, children, className, 'aria-label': ariaLabel }: PillLinkProps) {
  return (
    <a
      href={href}
      className={className ? `${styles.pill} ${className}` : styles.pill}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
