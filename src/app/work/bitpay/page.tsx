import Link from "next/link";
import styles from "../../work/page.module.css";

export const metadata = { title: "BitPay — Work" };

const projects = [
  { label: "Cookie Management", href: "/work/bitpay/cookie-management" },
  { label: "Website", href: "/work/bitpay/website" },
  { label: "Illustrations", href: "/work/bitpay/illustrations" },
];

export default function BitPay() {
  return (
    <>
      <section className={styles.header}>
        <h1>BitPay</h1>
        <p>Projects from BitPay.</p>
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
