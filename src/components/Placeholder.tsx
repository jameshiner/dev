import { SectionHeading } from './SectionHeading';
import styles from './Placeholder.module.css';

// Stand-in for pages whose content ships in a later ticket.
export function Placeholder({ title }: { title: string }) {
  return (
    <section>
      <SectionHeading as="h1">{title}</SectionHeading>
      <p className={styles.text}>Coming soon. This page is part of the site rebuild.</p>
    </section>
  );
}
