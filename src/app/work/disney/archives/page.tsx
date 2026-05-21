import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import LaptopSVG from "@/assets/laptop.svg";
import styles from "./page.module.css";

export const metadata = { title: "Walt Disney Archives — Disney" };

export default function Archives() {
  return (
    <>
      <Hero>
        <div className={styles.laptopWrapper}>
          <LaptopSVG className={styles.laptop} />
          <div className={styles.screenContainer}>
            <div className={styles.archivesLogoContainer}>
              <Image
                src="/archives/archives-logo.png"
                alt="Walt Disney Archives"
                width={400}
                height={400}
                className={styles.archivesLogo}
                unoptimized
              />
            </div>
          </div>
        </div>
      </Hero>

      {/* Project meta */}
      <section className={styles.meta}>
        <div className={styles.metaInner}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Company</span>
            <span className={styles.metaValue}>The Walt Disney Company</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>Frontend Developer</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Duration</span>
            <span className={styles.metaValue}>2 years</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Architecture</span>
            <span className={styles.metaValue}>JSON-driven component system</span>
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
              The Walt Disney Archives site is a public-facing web experience celebrating the history and legacy of The Walt Disney Company. I managed and maintained the site for two years, shipping updates in tandem with new Disney stories, anniversaries, and releases as they came out.
            </p>
            <p>
              Content and presentation were cleanly separated — a JSON file held all the text and image references, and a component system mapped that data to the page. Adding a new story or updating existing content meant editing the JSON, not touching the component code.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>02</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>JSON-Driven Architecture</h2>
            <p>
              The system separates content from structure entirely. A central JSON file defines each story or feature on the site — its text, the names of its images, display order, and any metadata. The frontend reads that file and maps each entry to the appropriate component. The components themselves never need to change for a content update.
            </p>

            <div className={styles.archDiagram}>
              <div className={styles.archBox}>
                <span className={styles.archBoxLabel}>content.json</span>
                <span className={styles.archBoxDesc}>Single source of truth. Holds all text content, image filenames, ordering, and metadata for every story on the site.</span>
              </div>
              <div className={styles.archArrow}>⟶</div>
              <div className={styles.archBox}>
                <span className={styles.archBoxLabel}>Component layer</span>
                <span className={styles.archBoxDesc}>Components receive the JSON payload as props and render accordingly. Layout, typography, and interaction logic live here — not in the data.</span>
              </div>
              <div className={styles.archArrow}>⟶</div>
              <div className={styles.archBox}>
                <span className={styles.archBoxLabel}>Published page</span>
                <span className={styles.archBoxDesc}>The rendered site. New stories appear the moment the JSON is updated and the site rebuilds — no component changes needed.</span>
              </div>
            </div>

            <div className={styles.callout}>
              Content and code are fully decoupled. A new Disney story goes live by adding an entry to the JSON file. The component system does the rest.
            </div>
          </div>
        </div>
      </section>

      {/* Managing updates */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>03</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Two Years of Updates</h2>
            <p className={styles.lead}>
              Disney moves fast. New films, series, anniversaries, and archival features release on a rolling cadence, and the Archives site needed to reflect that consistently.
            </p>

            <div className={styles.screenshotWrapper}>
              <Image
                src="/archives/archives-1.png"
                alt="Walt Disney Archives article listing"
                width={1600}
                height={900}
                className={styles.screenshot}
                sizes="(max-width: 900px) 100vw, 800px"
                unoptimized
              />
              <p className={styles.caption}>
                The Archives site article listing. Each card represents a story, anniversary, or archival feature — all driven from the same JSON structure and rendered through the same component set. Over two years, this library grew steadily while the visual consistency stayed locked in.
              </p>
            </div>

            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>1</span>
                <div>
                  <h3 className={styles.stepTitle}>Story drops on a schedule</h3>
                  <p>Updates were tied to Disney's release calendar — new content needed to go live in sync with announcements, premieres, and cultural moments. Timing mattered.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>2</span>
                <div>
                  <h3 className={styles.stepTitle}>Edit the JSON, ship the update</h3>
                  <p>Because content lived in a JSON file rather than hardcoded in components, most updates were fast. Add a new entry, drop in the image assets, verify the render, and deploy. No component refactoring, no layout regressions.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>3</span>
                <div>
                  <h3 className={styles.stepTitle}>Consistency at scale</h3>
                  <p>Over two years, the site accumulated a significant body of content. The JSON-driven system kept everything visually consistent — new stories automatically inherited the same component layout as existing ones without any extra effort.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>04</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>What It Reinforced</h2>
            <p>
              Maintaining the Archives site for two years gave me a real appreciation for what good architectural decisions feel like from the inside. The original engineering choice — separate content from presentation, drive everything from data — made every subsequent update faster and lower risk. I didn't have to fight the codebase to do my job.
            </p>
            <p>
              It also sharpened my instincts for long-term maintainability. A system you inherit is a reflection of the decisions made before you arrived. The Archives site was a good one.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
