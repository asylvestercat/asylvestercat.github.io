import Link from "next/link";
import styles from "./page.module.css";

export const metadata = { title: "Work" };

const projects = [
  { label: "Disney", href: "/work/disney" },
  { label: "BitPay", href: "/work/bitpay" },
];

export default function Work() {
  return (
    <>
      <section className={styles.header}>
        <h1>Work</h1>
        <p>Projects and case studies.</p>
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
