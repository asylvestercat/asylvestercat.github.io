"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const workDropdown = [
  { label: "Disney", href: "/work/disney" },
  { label: "BitPay", href: "/work/bitpay" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          ANNA SYLVESTER
        </Link>

        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
          >
            HOME
          </Link>

          <div className={styles.dropdown}>
            <Link
              href="/work"
              className={`${styles.navLink} ${pathname.startsWith("/work") ? styles.active : ""}`}
            >
              WORK
              <span className={styles.caret} aria-hidden="true" />
            </Link>
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownMenuInner}>
                {workDropdown.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`${styles.dropdownLink} ${pathname === href ? styles.dropdownLinkActive : ""}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/play"
            className={`${styles.navLink} ${pathname === "/play" ? styles.active : ""}`}
          >
            PLAY
          </Link>

          <Link
            href="/about"
            className={`${styles.navLink} ${pathname === "/about" ? styles.active : ""}`}
          >
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
}
