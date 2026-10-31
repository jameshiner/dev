import { cacheLife } from 'next/cache';
import { site } from '@/data/site';
import styles from './Footer.module.css';

// new Date() can't run during a Cache Components prerender, so cache the year; deploys refresh it too.
async function CopyrightYear() {
  'use cache';
  cacheLife('max');
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © <CopyrightYear /> {site.name}
      </p>
    </footer>
  );
}
