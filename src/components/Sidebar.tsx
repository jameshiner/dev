import Image from 'next/image';
import type { ReactNode } from 'react';
import { site } from '@/data/site';
import banner from '../../public/img/banner.jpeg';
import { CodeIcon, GitHubIcon, LinkedInIcon } from './icons';
import { NavLinks } from './NavLinks';
import { PillLink } from './PillLink';
import { SidebarFrame } from './SidebarFrame';
import { ThemeToggle } from './ThemeToggle';
import styles from './Sidebar.module.css';

const SOCIALS = [
  { href: site.links.github, label: 'GitHub', Icon: GitHubIcon },
  { href: site.links.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
];

// Slides away on phones on every page but Home.
function Collapsible({ children }: { children: ReactNode }) {
  return (
    <div className={styles.collapse}>
      <div className={styles.collapseInner}>{children}</div>
    </div>
  );
}

export function Sidebar() {
  return (
    <SidebarFrame className={styles.sidebar}>
      <Collapsible>
        <Image
          src={banner}
          alt="Photographing from a lakeshore"
          className={styles.banner}
          sizes="(min-width: 860px) and (min-height: 500px) 460px, 100vw"
          placeholder="blur"
          preload
        />
      </Collapsible>

      <div className={styles.nameRow}>
        <p className={styles.name}>{site.name}</p>
        {/* Phones only: icon socials and theme toggle. */}
        <div className={styles.mobileActions}>
          {SOCIALS.map(({ href, label, Icon }) => (
            <PillLink key={href} href={href} aria-label={label} className={styles.iconButton}>
              <Icon />
            </PillLink>
          ))}
          <ThemeToggle className={styles.iconButton} />
        </div>
      </div>
      <p className={styles.role}>{site.role}</p>

      <Collapsible>
        <p className={styles.lead}>
          {site.bio}
          <br />
          Based in {site.location}.
        </p>
      </Collapsible>

      <NavLinks />

      <div className={styles.actions}>
        {SOCIALS.map(({ href, label, Icon }) => (
          <PillLink key={href} href={href}>
            <Icon />
            {label}
          </PillLink>
        ))}
        <ThemeToggle />
      </div>

      <PillLink href={site.links.source} className={styles.source}>
        <CodeIcon />
        Source
      </PillLink>
    </SidebarFrame>
  );
}
