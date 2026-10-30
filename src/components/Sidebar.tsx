import Image from 'next/image';
import { site } from '@/data/site';
import banner from '../../public/img/banner.jpeg';
import { CodeIcon, GitHubIcon, LinkedInIcon } from './icons';
import { NavLinks } from './NavLinks';
import { PillLink } from './PillLink';
import { ThemeToggle } from './ThemeToggle';
import styles from './Sidebar.module.css';

const SOCIALS = [
  { href: site.links.github, label: 'GitHub', Icon: GitHubIcon },
  { href: site.links.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
];

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image
        src={banner}
        alt="Photographing from a lakeshore"
        className={styles.banner}
        sizes="(min-width: 860px) 460px, 100vw"
        placeholder="blur"
        preload
      />

      <p className={styles.name}>{site.name}</p>
      <p className={styles.role}>{site.role}</p>
      <p className={styles.lead}>
        {site.bio}
        <br />
        Based in {site.location}.
      </p>

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
        View source
      </PillLink>
    </aside>
  );
}
