import Link from "next/link";
import styles from "../../work/page.module.css";

export const metadata = { title: "Disney — Work" };

const projects = [
  { label: "Baymax CMS", href: "/work/disney/baymax" },
  { label: "Walt Disney Archives", href: "/work/disney/archives" },
  { label: "Employee Wellness", href: "/work/disney/employee-wellness" },
  { label: "HTML Emails", href: "/work/disney/html-emails" },
];

export default function Disney() {
  return (
    <>
      <section className={styles.header}>
        <h1>Disney</h1>
        <p>Projects from The Walt Disney Company.</p>
      </section>

      <section className={styles.grid}>
        {projects.map(({ label, href }) => (
          <Link key={href} href={href} className={styles.card}>
            <span className={styles.cardTitle}>{label}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
