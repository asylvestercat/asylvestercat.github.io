import Image from "next/image";
import styles from "./page.module.css";

export const metadata = { title: "About" };

export default function About() {
  return (
    <>
      <section className={styles.header}>
        <h1>About</h1>
        <p>A little about me.</p>
      </section>

      <section className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src="/anna-headshot.png"
            alt="Anna Sylvester"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            unoptimized
          />
        </div>

        <div className={styles.bio}>
          <p>I&apos;m an experienced frontend developer based in Los Angeles with roots in Atlanta and a degree in graphic design. That design background is the lens I bring to every line of code I write. I care about how things look just as much as how they work.</p>
          <p>I started in fintech at a crypto startup called BitPay. I learned to build fast, reliable interfaces in a space where trust and clarity matter.</p>
          <p>From there I moved to The Walt Disney Company, where I was on the frontend team working on an internal CMS and component library used across major initiatives. Working at that scale taught me how to think in systems and ship work that holds up under pressure.</p>
          <p>Whether I&apos;m building a design system, wiring up an API, or fine-tuning a layout until it feels right, I bring the same mentality: make it clean, make it scalable, and make it something people actually enjoy using.</p>
          <p>Also... I recently got engaged! My partner and I get married in February 2027.</p>
        </div>
      </section>
    </>
  );
}
