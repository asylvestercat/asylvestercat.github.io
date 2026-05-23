import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.resumeBlock}>
          <p className={styles.resumeLabel}>Check out my resume</p>
          <a href="/Anna_Sylvester_Resume_052026.pdf" download className={styles.downloadBtn}>
            Download
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 4h14v-2H5v2z"/>
            </svg>
          </a>
        </div>

        <h2 className={styles.heading}>Let&apos;s connect</h2>
        <p className={styles.sub}>Get in touch for opportunities or just to say hi!</p>

        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/annasylvester/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452H17.01v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.589V9h3.303v1.561h.046c.46-.872 1.583-1.791 3.257-1.791 3.485 0 4.129 2.294 4.129 5.278v6.404zM5.337 7.433a1.917 1.917 0 1 1 0-3.834 1.917 1.917 0 0 1 0 3.834zm1.652 13.019H3.685V9h3.304v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <a
            href="mailto:annaleesylvester@gmail.com"
            className={styles.iconLink}
            aria-label="Email"
          >
            <svg width="30" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8.868l8 5 8-5V18z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
