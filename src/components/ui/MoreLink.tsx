import Link from 'next/link';
import type { Route } from 'next';
import { ChevronRightIcon } from './icons';
import styles from './MoreLink.module.css';

// "Full experience ›" style link at the end of a section.
export function MoreLink({ href, children }: { href: Route; children: string }) {
  return (
    <Link href={href} className={styles.more}>
      {children}
      <ChevronRightIcon />
    </Link>
  );
}
