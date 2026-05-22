import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import LaptopSVG from "@/assets/laptop.svg";
import styles from "./page.module.css";

export const metadata = { title: "Illustrations — BitPay" };

export default function BitPayIllustrations() {
  return (
    <>
      <Hero>
        <div className={styles.laptopWrapper}>
          <LaptopSVG className={styles.laptop} />
          <div className={styles.screenContainer}>
            <Image
              src="/bitpay/bitpay-3.png"
              alt="BitPay illustration work"
              fill
              sizes="(max-width: 840px) 76vw, 638px"
              style={{ objectFit: "cover", objectPosition: "left top" }}
            />
          </div>
        </div>
      </Hero>

      {/* Project meta */}
      <section className={styles.meta}>
        <div className={styles.metaInner}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Company</span>
            <span className={styles.metaValue}>BitPay</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>Frontend Developer</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Tools</span>
            <span className={styles.metaValue}>Adobe Illustrator · Affinity Designer</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Featured</span>
            <Link
              href="https://bitpay.com/careers"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.metaLink}
            >
              bitpay.com/careers
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>01</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.lead}>
              These illustrations weren&apos;t in the job description — they were the kind of thing that gets done because you&apos;re the right person for it and the work needs to happen.
            </p>
            <p>
              When BitPay needed custom illustration work for the careers page, I took it on. My background in art meant I could move quickly without the overhead of briefing an outside designer — I understood the brand, knew the context, and could execute directly. The illustrations are live on{" "}
              <Link
                href="https://bitpay.com/careers"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.metaLink}
              >
                bitpay.com/careers
              </Link>
              .
            </p>
            <div className={styles.callout}>
              This project is a good example of being able to wear many hats. An art background doesn&apos;t come up in every sprint, but when it does, it means the team doesn&apos;t have to stop and find someone else.
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>02</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Tools</h2>

            <div className={styles.toolList}>
              <div className={styles.toolRow}>
                <span className={styles.toolName}>Adobe Illustrator</span>
                <span className={styles.toolDesc}>Used for vector illustration work. Illustrator&apos;s precision and bezier tooling made it the right fit for clean, scalable artwork that would render well across screen sizes.</span>
              </div>
              <div className={styles.toolRow}>
                <span className={styles.toolName}>Affinity Designer</span>
                <span className={styles.toolDesc}>A fast, lightweight alternative to Illustrator for certain parts of the workflow. Affinity&apos;s export tooling and SVG handling worked well for getting assets into the codebase cleanly.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Illustrations */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>03</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>The Work</h2>

            <div className={styles.illustrationGrid}>
              <div className={styles.illustrationWrapper}>
                <Image
                  src="/bitpay/bitpay-illustration-1.png"
                  alt="BitPay illustration"
                  width={800}
                  height={800}
                  className={styles.illustration}
                  loading="eager"
                  unoptimized
                />
              </div>
              <div className={styles.illustrationWrapper}>
                <Image
                  src="/bitpay/bitpay-illustration-2.png"
                  alt="BitPay illustration"
                  width={800}
                  height={800}
                  className={styles.illustration}
                  unoptimized
                />
              </div>
              <div className={styles.illustrationWrapper}>
                <Image
                  src="/bitpay/bitpay-illustration-3.png"
                  alt="BitPay illustration"
                  width={800}
                  height={800}
                  className={styles.illustration}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
