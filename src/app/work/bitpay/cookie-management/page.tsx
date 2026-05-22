import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import LaptopSVG from "@/assets/laptop.svg";
import styles from "./page.module.css";

export const metadata = { title: "Cookie Management — BitPay" };

const consentFields = [
  { key: "ad_storage", value: "granted" },
  { key: "ad_user_data", value: "granted" },
  { key: "ad_personalization", value: "granted" },
  { key: "analytics_storage", value: "granted" },
  { key: "functionality_storage", value: "denied" },
  { key: "personalization_storage", value: "denied" },
];

export default function BitPayCookieManagement() {
  return (
    <>
      <Hero>
        <div className={styles.laptopWrapper}>
          <LaptopSVG className={styles.laptop} />
          <div className={styles.screenContainer}>
            <Image
              src="/bitpay/bitpay-2.png"
              alt="BitPay cookie management screenshot"
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
            <span className={styles.metaValue}>Vanilla JS · IIFE · Cookie API</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Delivery</span>
            <span className={styles.metaValue}>Completed ahead of deadline</span>
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
              When GDPR came into force, cookie consent stopped being optional. BitPay needed a compliant cookie management system — fast. I owned the build end to end, from the banner UI to the consent storage mechanism.
            </p>
            <p>
              The requirement was clear: give users granular control over which cookie categories they accept, persist their choices, and propagate those choices to the rest of the page before anything else ran. The constraint was that this had to work independently of any framework — loading early, reliably, with no dependency on the React tree being mounted.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>02</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Vanilla JS + IIFE</h2>
            <p>
              The component was written in vanilla JavaScript and loaded via an immediately invoked function expression. The IIFE pattern was deliberate: it runs the moment the script tag is parsed, before the DOM is fully ready and before any framework code executes.
            </p>

            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>1</span>
                <div>
                  <h3 className={styles.stepTitle}>Early execution via IIFE</h3>
                  <p>The entire component is wrapped in an IIFE so consent state is read and applied at parse time. No waiting for <code>DOMContentLoaded</code> or React hydration — consent signals are available before any tracking or analytics scripts initialize.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>2</span>
                <div>
                  <h3 className={styles.stepTitle}>Banner UI injection</h3>
                  <p>If no <code>cookieConsent</code> cookie is found, the script builds and injects the banner directly into the DOM. The banner surfaces two paths: accept all, or open a custom preferences modal with per-category toggles.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>3</span>
                <div>
                  <h3 className={styles.stepTitle}>Choices persisted as a cookie</h3>
                  <p>When the user saves their preferences, the selections are serialized as JSON and written to a <code>cookieConsent</code> cookie. On subsequent page loads, the IIFE reads the cookie and skips the banner entirely — no flash, no re-prompt.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>4</span>
                <div>
                  <h3 className={styles.stepTitle}>Consent propagation</h3>
                  <p>The stored consent object is read synchronously and dispatched to <code>window.dataLayer</code> before GTM or any analytics scripts fire, ensuring tag behavior reflects the user&apos;s choices from the first page view.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consent data shape */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>03</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>The cookieConsent Object</h2>
            <p>
              User preferences are stored as a single JSON value inside the <code>cookieConsent</code> cookie. Each key maps directly to a Google Consent Mode v2 signal, keeping the stored shape consistent with what downstream tag managers expect to receive.
            </p>

            <div className={styles.consentTable}>
              {consentFields.map(({ key, value }) => (
                <div key={key} className={styles.consentRow}>
                  <span className={styles.consentKey}>{key}</span>
                  <span className={value === "granted" ? styles.consentGranted : styles.consentDenied}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.callout}>
              All categories default to granted. The denied values shown here illustrate what the object looks like when a user has toggled specific categories off in the preferences modal.
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>04</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>The Component</h2>

            <div className={styles.screenshotWrapper}>
              <Image
                src="/bitpay/bitpay-cookies-1.png"
                alt="BitPay cookie consent banner"
                width={1600}
                height={900}
                className={styles.screenshot}
                loading="eager"
                unoptimized
              />
              <p className={styles.caption}>
                The cookie consent banner as it appears on first visit. Users can accept all cookies or open the preferences panel to configure each category individually.
              </p>
            </div>

            <div className={styles.screenshotWrapper}>
              <Image
                src="/bitpay/bitpay-cookies-2.png"
                alt="BitPay cookie preferences modal"
                width={1600}
                height={900}
                className={styles.screenshot}
                unoptimized
              />
              <p className={styles.caption}>
                The custom preferences modal, showing per-category toggles. Each category maps to a key in the <code>cookieConsent</code> object stored in the browser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>05</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Time-Sensitive Delivery</h2>
            <p className={styles.lead}>
              Cookie compliance had a hard regulatory deadline. I completed the implementation early.
            </p>
            <p>
              Shipping ahead of a compliance deadline in fintech isn&apos;t just a nice-to-have — it creates buffer for QA, legal review, and any last-minute changes that come from stakeholders reading the final output for the first time. Delivering early meant the team could validate behavior across environments and make adjustments without the pressure of a hard cutoff bearing down.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
