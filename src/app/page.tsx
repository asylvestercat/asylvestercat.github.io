import Hero from "@/components/Hero/Hero";
import heroStyles from "@/components/Hero/Hero.module.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
        <Hero>
            <h1 className={heroStyles.heroTitle}>Hello, I&apos;m Anna</h1>
            <p className={heroStyles.heroSubtitle}>Frontend developer with a designer&apos;s eye, building polished, scalable web experiences.</p>
        </Hero>
        <section className={styles.content}>
            <h2>Featured Work</h2>
            <p>Content coming soon.</p>
        </section>
    </>
  );
}