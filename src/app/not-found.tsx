import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <p className={styles.code}>404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for doesn&apos;t exist.</p>
      <Link href="/" className={styles.home}>
        Return home
      </Link>
    </section>
  );
}
