import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>James Hiner</h1>
      <p>Frontend Web Developer · Denver, CO</p>
      <p className={styles.note}>Site rebuild in progress.</p>
    </main>
  );
}
