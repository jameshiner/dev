'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLayoutEffect, useRef } from 'react';
import { navItems } from '@/data/site';
import styles from './NavLinks.module.css';

// Matches the header's 0.35s slide in Sidebar.module.css, plus a little margin.
const SLIDE_MS = 400;

export function NavLinks() {
  const pathname = usePathname();
  const router = useRouter();
  const barRef = useRef<HTMLElement>(null);
  // The page a pinned-bar tab click is heading to; null otherwise.
  const keepPinnedFor = useRef<string | null>(null);

  // Phones: if the tab bar is pinned, skip Next's scroll to the top (which would bring the
  // header back) and keep the bar pinned instead. onNavigate only runs for in-app navigation,
  // so modifier-clicks (new tab) are left alone; other navigations use Link's default.
  function onNavigate(event: { preventDefault: () => void }, href: string) {
    keepPinnedFor.current = null;
    const bar = barRef.current;
    const pinned =
      !!bar &&
      getComputedStyle(bar).position === 'sticky' &&
      bar.getBoundingClientRect().top <= 0 &&
      window.scrollY > 0;
    if (!pinned || href === pathname) return;
    event.preventDefault();
    keepPinnedFor.current = href;
    router.push(href, { scroll: false });
  }

  // After that navigation, before the browser paints: scroll to where the header has just
  // scrolled off (bar pinned, content right under it, as if scrolled there by hand). Again once
  // the header's slide above has finished, since Safari doesn't adjust scroll for layout
  // changes above the viewport. Any other navigation (e.g. Back) is left alone.
  useLayoutEffect(() => {
    if (keepPinnedFor.current !== pathname) return;
    keepPinnedFor.current = null;
    const bar = barRef.current;
    // The root layout's content column, which holds <main> and the footer.
    const content = document.querySelector('main')?.parentElement;
    if (!bar || !content) return;
    const pin = () =>
      window.scrollTo(0, content.getBoundingClientRect().top + window.scrollY - bar.offsetHeight);
    pin();
    const timer = setTimeout(pin, SLIDE_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <nav aria-label="Main" className={styles.bar} ref={barRef}>
      <ul className={styles.nav}>
        {navItems.map(({ href, label }) => {
          const current = pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
          return (
            <li key={href}>
              <Link
                href={href}
                className={styles.navLink}
                aria-current={current ? 'page' : undefined}
                onNavigate={(event) => onNavigate(event, href)}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
