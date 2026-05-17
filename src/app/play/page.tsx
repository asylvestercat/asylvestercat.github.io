import styles from "./page.module.css";

export const metadata = { title: "Play" };

export default function Play() {
  return (
    <>
      <section className={styles.header}>
        <h1>Play</h1>
        <p>Experiments and side projects.</p>
      </section>

      <section className={styles.content}>
        <p>Content coming soon.</p>
      </section>
    </>
  );
}