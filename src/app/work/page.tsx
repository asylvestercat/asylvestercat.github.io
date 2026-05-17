import styles from "./page.module.css";

export const metadata = { title: "Work" };

export default function Work() {
  return (
    <>
      <section className={styles.header}>
        <h1>Work</h1>
        <p>Projects and case studies.</p>
      </section>

      <section className={styles.content}>
        <p>Content coming soon.</p>
      </section>
    </>
  );
}