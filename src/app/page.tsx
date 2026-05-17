import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Hello, I&apos;m Anna</h1>
        <p className={styles.heroSubtitle}>Frontend engineer with a designer&apos;s eye, building polished, scalable web experiences.</p>
      </section>

      <section className={styles.content}>
        <h2>Featured Work</h2>
        <p>Content coming soon.</p>
      </section>
    </>
  );
}