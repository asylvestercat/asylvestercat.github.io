import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import heroStyles from "@/components/Hero/Hero.module.css";
import styles from "./page.module.css";

const featured = [
  { label: "Baymax CMS", sub: "Disney", href: "/work/disney/baymax" },
  { label: "Employee Wellness", sub: "Disney", href: "/work/disney/employee-wellness" },
];

export default function Home() {
  return (
    <>
      <Hero>
        <h1 className={heroStyles.heroTitle}>Hello, I&apos;m Anna</h1>
        <p className={heroStyles.heroSubtitle}>Experienced frontend developer with a designer&apos;s eye, building polished, scalable web experiences.</p>
      </Hero>
      <section className={styles.content}>
        <h2 className={styles.sectionHeading}>Featured Work</h2>
        <div className={styles.grid}>
          {featured.map(({ label, sub, href }) => (
            <Link key={href} href={href} className={styles.card}>
              <span className={styles.cardSub}>{sub}</span>
              <span className={styles.cardTitle}>{label}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
