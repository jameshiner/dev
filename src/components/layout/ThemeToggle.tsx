'use client';

import { useLayoutEffect } from 'react';
import { MoonIcon, SunIcon } from '@/components/ui/icons';
import { THEME_STORAGE_KEY as STORAGE_KEY } from '@/lib/theme';
import styles from './ThemeToggle.module.css';

// Which icon shows is decided in CSS from data-theme, so the server and client render the same markup.
export function ThemeToggle({ className }: { className?: string }) {
  // In dev, Strict Mode's remount resets <html> attributes; re-apply the saved theme. No-op in production.
  useLayoutEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'light') {
        document.documentElement.dataset.theme = 'light';
      }
    } catch {}
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  return (
    <button
      type="button"
      className={className ? `${styles.toggle} ${className}` : styles.toggle}
      onClick={toggle}
      aria-label="Toggle theme"
    >
      <SunIcon className={styles.sun} />
      <MoonIcon className={styles.moon} />
    </button>
  );
}
