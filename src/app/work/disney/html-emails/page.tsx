import styles from "./page.module.css";

export const metadata = { title: "HTML Emails — Disney" };

function Tag({ children }: { children: string }) {
  return <span className={styles.tag}>{children}</span>;
}

function Attr({ name, value }: { name: string; value: string }) {
  return (
    <span className={styles.attr}>
      {" "}{name}=<span className={styles.attrVal}>&quot;{value}&quot;</span>
    </span>
  );
}

function B({ children }: { children: string }) {
  return (
    <>
      <Tag>&lt;b&gt;</Tag>
      <b className={styles.bold}>{children}</b>
      <Tag>&lt;/b&gt;</Tag>
    </>
  );
}

export default function HtmlEmails() {
  return (
    <div className={styles.page}>

      {/* Email client header */}
      <div className={styles.emailHeader}>
        <div className={styles.emailMeta}>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>FROM</span>
            <span className={styles.metaValue}>anna.sylvester@disney.com</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>TO</span>
            <span className={styles.metaValue}>all-staff@disney.com</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>SUBJECT</span>
            <span className={styles.metaValue}>You&apos;ve got mail (×60)</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>VIA</span>
            <span className={styles.metaValue}>Litmus · Salesforce Marketing Cloud</span>
          </div>
        </div>
      </div>

      {/* HTML source body */}
      <div className={styles.source}>

        <div className={styles.line}><Tag>&lt;html&gt;</Tag></div>
        <div className={styles.line}><Tag>&lt;body&gt;</Tag></div>

        <div className={`${styles.line} ${styles.indent1}`}>
          <Tag>&lt;table</Tag>
          <Attr name="width" value="600" />
          <Attr name="cellpadding" value="0" />
          <Attr name="cellspacing" value="0" />
          <Tag>&gt;</Tag>
        </div>

        {/* Row 1 — stat */}
        <div className={`${styles.line} ${styles.indent2}`}><Tag>&lt;tr&gt;</Tag></div>
        <div className={`${styles.line} ${styles.indent3}`}>
          <Tag>&lt;td</Tag><Attr name="class" value="hero" /><Tag>&gt;</Tag>
        </div>
        <div className={`${styles.line} ${styles.indent4}`}>
          <B>60+</B> emails crafted &amp; deployed
        </div>
        <div className={`${styles.line} ${styles.indent3}`}><Tag>&lt;/td&gt;</Tag></div>
        <div className={`${styles.line} ${styles.indent2}`}><Tag>&lt;/tr&gt;</Tag></div>

        {/* Row 2 — tools */}
        <div className={`${styles.line} ${styles.indent2}`}><Tag>&lt;tr&gt;</Tag></div>
        <div className={`${styles.line} ${styles.indent3}`}>
          <Tag>&lt;td</Tag><Attr name="class" value="tools" /><Tag>&gt;</Tag>
        </div>
        <div className={`${styles.line} ${styles.indent4}`}>
          Built with <B>Litmus</B> for cross-client testing
          and <B>Salesforce Marketing Cloud</B> for deployment.
        </div>
        <div className={`${styles.line} ${styles.indent3}`}><Tag>&lt;/td&gt;</Tag></div>
        <div className={`${styles.line} ${styles.indent2}`}><Tag>&lt;/tr&gt;</Tag></div>

        {/* Row 3 — purpose */}
        <div className={`${styles.line} ${styles.indent2}`}><Tag>&lt;tr&gt;</Tag></div>
        <div className={`${styles.line} ${styles.indent3}`}>
          <Tag>&lt;td</Tag><Attr name="class" value="purpose" /><Tag>&gt;</Tag>
        </div>
        <div className={`${styles.line} ${styles.indent4}`}>
          Designed for <B>internal communications</B> across
          The Walt Disney Company — ensuring high engagement
          and consistent messaging at scale.
        </div>
        <div className={`${styles.line} ${styles.indent3}`}><Tag>&lt;/td&gt;</Tag></div>
        <div className={`${styles.line} ${styles.indent2}`}><Tag>&lt;/tr&gt;</Tag></div>

        <div className={`${styles.line} ${styles.indent1}`}><Tag>&lt;/table&gt;</Tag></div>
        <div className={styles.line}><Tag>&lt;/body&gt;</Tag></div>
        <div className={styles.line}><Tag>&lt;/html&gt;</Tag></div>

      </div>
    </div>
  );
}
