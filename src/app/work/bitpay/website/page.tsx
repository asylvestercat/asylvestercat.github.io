import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import LaptopSVG from "@/assets/laptop.svg";
import styles from "./page.module.css";

export const metadata = { title: "Website — BitPay" };

export default function BitPayWebsite() {
  return (
    <>
      <Hero>
        <div className={styles.laptopWrapper}>
          <LaptopSVG className={styles.laptop} />
          <div className={styles.screenContainer}>
            <Image
              src="/bitpay/bitpay-1.png"
              alt="BitPay website screenshot"
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
            <span className={styles.metaLabel}>Stack</span>
            <span className={styles.metaValue}>Vue.js · Nuxt.js</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Timeline</span>
            <span className={styles.metaValue}>2019 – 2022</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Live</span>
            <Link
              href="https://bitpay.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.metaLink}
            >
              bitpay.com
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
              I was the sole frontend developer responsible for bitpay.com — every page, every update, every initiative. In the 2019–2022 window, the crypto space moved fast, and the website had to keep pace.
            </p>
            <p>
              Product launches, regulatory shifts, market moves, and partnership announcements all translated into website work. Being the single owner of the frontend meant I managed a high volume of updates without a handoff layer — from design collaboration through implementation and deployment.
            </p>

            <div className={styles.statRow}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>dynamic pages built</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>30+</span>
                <span className={styles.statLabel}>reusable UI components</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vue to Nuxt migration */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>02</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Vue.js to Nuxt.js</h2>
            <p>
              The site was originally built in Vue.js. As the scale of content and SEO requirements grew, I led the migration to Nuxt.js — bringing server-side rendering, file-based routing, and improved performance to the public-facing site.
            </p>

            <div className={styles.scaleTable}>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>SSR</span>
                <span className={styles.scaleDesc}>Nuxt&apos;s server-side rendering replaced client-only rendering, improving initial load performance and making pages indexable without JavaScript execution.</span>
              </div>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>Routing</span>
                <span className={styles.scaleDesc}>File-based routing eliminated manual route configuration. Adding a new page meant creating a file — the framework handled the rest.</span>
              </div>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>SEO</span>
                <span className={styles.scaleDesc}>With a crypto audience driven heavily by search, SSR was a meaningful upgrade. Pages that previously required JS to render became fully crawlable.</span>
              </div>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>Continuity</span>
                <span className={styles.scaleDesc}>The migration preserved the existing component architecture. Vue single-file components translated cleanly, keeping the codebase familiar while the infrastructure improved underneath.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component library */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>03</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Component Library</h2>
            <p className={styles.lead}>
              I built a library of 30+ reusable UI components by interpreting Sketch design mocks — translating static designs into flexible, composable pieces that could be dropped into any page.
            </p>
            <p>
              The goal was to remove repetition from the development process. Once a component existed, any new page that needed it took minutes to wire up rather than hours to build from scratch. With the volume of updates the crypto market demanded, that acceleration compounded.
            </p>

            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>1</span>
                <div>
                  <h3 className={styles.stepTitle}>Design interpretation</h3>
                  <p>Each component started as a Sketch mock. I translated those into Vue single-file components — handling layout, spacing, responsive behavior, and states (hover, active, disabled) that the static mock couldn&apos;t fully specify.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>2</span>
                <div>
                  <h3 className={styles.stepTitle}>Props-driven flexibility</h3>
                  <p>Components were built to accept props for content and configuration, so the same component could serve multiple contexts across the site without duplication. A card component, for instance, worked for product listings, blog previews, and feature callouts.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>3</span>
                <div>
                  <h3 className={styles.stepTitle}>Shared across surfaces</h3>
                  <p>The library served both the website and internal applications. Components built for bitpay.com were reused in other BitPay products, making the investment in the library pay off beyond the marketing site.</p>
                </div>
              </div>
            </div>

            <div className={styles.callout}>
              30+ components meant that by the time the crypto market accelerated in 2021, new pages could be assembled from existing pieces. The bottleneck shifted from building components to deciding what to say.
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
