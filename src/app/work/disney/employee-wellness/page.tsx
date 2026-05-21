import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import LaptopSVG from "@/assets/laptop.svg";
import styles from "./page.module.css";

export const metadata = { title: "Employee Wellness — Disney" };

export default function EmployeeWellness() {
  return (
    <>
      <Hero>
        <div className={styles.laptopWrapper}>
          <LaptopSVG className={styles.laptop} />
          <div className={styles.screenContainer}>
            <Image
              src="/employee-wellness/be-well.png"
              alt="Be Well — Disney Employee Wellness"
              width={1200}
              height={900}
              style={{ width: "100%", height: "auto", display: "block" }}
              unoptimized
            />
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
            <span className={styles.metaLabel}>Stack</span>
            <span className={styles.metaValue}>React</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Cadence</span>
            <span className={styles.metaValue}>Every 6 months</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Event</span>
            <span className={styles.metaValue}>Employee-only 5K at Disneyland</span>
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
              Every six months, Disney hosts an employee-only 5K run at Disneyland as part of its ongoing commitment to employee wellness. For each run, I built a dedicated web app that gave participants two things to take home: a custom race bib and a certificate of completion.
            </p>
            <p>
              The app was internal-only, built fresh each cycle for the event. Employees could personalize their bib with their name and download it to print before the run. After crossing the finish line, they could come back, enter their name and finish time, and download a certificate to keep. Simple tools, but ones that made the event feel personal and worth remembering.
            </p>
          </div>
        </div>
      </section>

      {/* Bib Builder */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>02</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Bib Builder</h2>
            <p>
              Before race day, employees could open the app and generate a personalized race bib. Enter your name, preview the result, download it as a print-ready file, and show up to the race with something that felt official. The bib was designed to be printed and worn on the shirt — no lanyards, no assembly required.
            </p>

            <div className={styles.screenshotWrapper}>
              <video
                src="/employee-wellness/bib-builder.mov"
                className={styles.screenshot}
                autoPlay
                loop
                muted
                playsInline
              />
              <p className={styles.caption}>
                The Bib Builder in action. Employees enter their name, see a live preview of the personalized race bib, and download a print-ready version to wear on the day of the run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Builder */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>03</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Certificate Builder</h2>
            <p>
              After the run, employees returned to the app to claim their certificate of completion. They entered their name and finish time, and the app generated a personalized certificate ready to download and print. A small thing, but one that gave the event a sense of accomplishment beyond just showing up.
            </p>

            <div className={styles.screenshotWrapper}>
              <video
                src="/employee-wellness/certificate-builder.mov"
                className={styles.screenshot}
                autoPlay
                loop
                muted
                playsInline
              />
              <p className={styles.caption}>
                The Certificate Builder. Employees enter their name and finish time post-run to generate and download a personalized certificate of completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>04</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Built to Be Used Once, Remembered Longer</h2>
            <p>
              The wellness app wasn't technically complex, but it was the kind of project that reminded me why the frontend layer matters. The experience of printing your own bib, running the race, and walking away with a certificate is a small loop — but a complete one. Good execution on simple ideas leaves a better impression than half-hearted execution on ambitious ones.
            </p>
            <p>
              Shipping it every six months also meant iterating on a known template: same concept, refined a little each time based on what worked the run before.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
