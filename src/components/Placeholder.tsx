import styles from './Placeholder.module.css';

// Stand-in for pages whose content ships in a later ticket.
export function Placeholder({ title }: { title: string }) {
  return (
    <section className={styles.placeholder}>
      <h1>{title}</h1>
      <p>Coming soon. This page is part of the site rebuild.</p>
    </section>
  );
}
