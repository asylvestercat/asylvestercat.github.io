import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import LaptopSVG from "@/assets/laptop.svg";
import styles from "./page.module.css";

export const metadata = { title: "Museum Audio Guide — Disney" };

export default function MuseumAudioGuide() {
  return (
    <>
      <Hero>
        <div className={styles.laptopWrapper}>
          <LaptopSVG className={styles.laptop} />
          <div className={styles.screenContainer}>
            <Image
              src="/h-and-v/heros-and-villians.png"
              alt="Heroes and Villains audio guide app"
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
            <span className={styles.metaValue}>Walt Disney Archives</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>Frontend Developer</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Location</span>
            <span className={styles.metaValue}>Columbia, South Carolina</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Live</span>
            <Link
              href="https://exhibits.archives.disney.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.metaLink}
            >
              exhibits.archives.disney.com
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
              The Walt Disney Archives brought their <em>Heroes &amp; Villains</em> exhibit to Columbia, South Carolina — and needed a companion audio guide app that museum visitors could use to explore the exhibit on their own devices.
            </p>
            <p>
              The app gives visitors narrated context for each piece in the exhibit: character histories, behind-the-scenes details, and archival material that deepens the experience beyond what a placard can hold. I built it as a web app so visitors could access it without an app store download — just open a browser and go.
            </p>
            <p>
              The site is powered by <Link href="/work/disney/baymax" className={styles.inlineLink}>Baymax CMS</Link> — the same internal content management system built for The Walt Disney Company. We developed custom components specifically for this exhibit, and because it runs on the CMS, the Archives team can make content updates entirely on their own without any developer involvement.
            </p>
          </div>
        </div>
      </section>

      {/* Offline-first audio loading */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>02</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Built for the Museum Floor</h2>
            <p className={styles.lead}>
              Museums are notoriously bad environments for connectivity. Thick walls, crowds, and limited infrastructure mean cellular signal drops and WiFi is unreliable. Visitors shouldn&apos;t have to think about any of that.
            </p>
            <p>
              The app is designed to front-load as much as possible the moment the page first loads — before the visitor walks in. The majority of the audio content is fetched and cached upfront so that once inside the exhibit, playback works regardless of what the network is doing.
            </p>

            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>1</span>
                <div>
                  <h3 className={styles.stepTitle}>Preload on entry</h3>
                  <p>When the app first loads, audio files begin fetching immediately in the background. By the time a visitor reaches the first exhibit piece, the audio for it — and most of what follows — is already in the browser cache.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>2</span>
                <div>
                  <h3 className={styles.stepTitle}>No buffering mid-exhibit</h3>
                  <p>Because content is cached upfront rather than streamed on demand, visitors never hit a loading state mid-experience. Tapping play on any exhibit piece starts immediately, even with no network connection.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>3</span>
                <div>
                  <h3 className={styles.stepTitle}>No app store required</h3>
                  <p>Delivered as a web app, the guide is accessible the moment a visitor scans a QR code or types the URL. Nothing to install, no account required, no friction between walking in the door and starting the experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>03</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Accessibility First</h2>
            <p className={styles.lead}>
              Accessibility was not an afterthought on this project — it was a primary requirement. A museum audio guide serves a wide range of visitors, including people with visual impairments, motor limitations, and age-related accessibility needs.
            </p>
            <p>
              Every interaction in the app was built with this in mind. The goal was an experience that works just as well for someone using a screen reader or navigating entirely by keyboard as it does for the average visitor.
            </p>

            <div className={styles.scaleTable}>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>Screen reader support</span>
                <span className={styles.scaleDesc}>All interactive elements have descriptive ARIA labels. Audio player controls — play, pause, seek, track selection — are fully announced and operable via assistive technology.</span>
              </div>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>Keyboard navigation</span>
                <span className={styles.scaleDesc}>The entire app is navigable without a pointer. Focus order follows a logical reading sequence through the exhibit, and focus states are clearly visible at all times.</span>
              </div>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>Semantic HTML</span>
                <span className={styles.scaleDesc}>Landmarks, headings, and list structure are used correctly throughout so that screen readers can build an accurate document outline and users can jump to sections quickly.</span>
              </div>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>Touch targets</span>
                <span className={styles.scaleDesc}>Controls are sized and spaced for ease of use by visitors with motor limitations or who are simply moving through the exhibit while holding a device.</span>
              </div>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>Contrast</span>
                <span className={styles.scaleDesc}>Text and UI elements meet WCAG AA contrast requirements, ensuring readability across a range of lighting conditions — including the variable, often dim lighting of a museum gallery.</span>
              </div>
            </div>

            <div className={styles.callout}>
              An audio guide by definition serves visitors who may have difficulty reading exhibit text. Accessibility here wasn&apos;t a compliance checkbox — it was core to the product working as intended.
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>04</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>The App</h2>

            <div className={styles.screenshotGrid}>
              <div className={styles.screenshotWrapper}>
                <Image
                  src="/h-and-v/heros-and-villians-1.png"
                  alt="Heroes and Villains audio guide — exhibit listing"
                  width={800}
                  height={600}
                  className={styles.screenshot}
                  loading="eager"
                  unoptimized
                />
              </div>
              <div className={styles.screenshotWrapper}>
                <Image
                  src="/h-and-v/heros-and-villians-2.png"
                  alt="Heroes and Villains audio guide — character detail"
                  width={800}
                  height={600}
                  className={styles.screenshot}
                  unoptimized
                />
              </div>
              <div className={styles.screenshotWrapper}>
                <Image
                  src="/h-and-v/heros-and-villians-3.png"
                  alt="Heroes and Villains audio guide — audio player"
                  width={800}
                  height={600}
                  className={styles.screenshot}
                  unoptimized
                />
              </div>
              <div className={styles.screenshotWrapper}>
                <Image
                  src="/h-and-v/heros-and-villians-4.png"
                  alt="Heroes and Villains audio guide — exhibit navigation"
                  width={800}
                  height={600}
                  className={styles.screenshot}
                  unoptimized
                />
              </div>
              <div className={styles.screenshotWrapper}>
                <Image
                  src="/h-and-v/heros-and-villians-5.png"
                  alt="Heroes and Villains audio guide — exhibit detail"
                  width={800}
                  height={600}
                  className={styles.screenshot}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>05</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>In Use</h2>
            <p>The app running in the exhibit.</p>

            <div className={styles.videoWrapper}>
              <video
                className={styles.video}
                controls
                playsInline
                preload="metadata"
                aria-label="Screen recording of the Heroes and Villains audio guide app"
              >
                <source src="/h-and-v/heros-and-villians.mov" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
