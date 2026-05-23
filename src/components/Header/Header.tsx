"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const workDropdown = [
  { label: "Disney", href: "/work/disney" },
  { label: "BitPay", href: "/work/bitpay" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setWorkOpen(false);
  }, [pathname]);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          ANNA SYLVESTER
        </Link>

        {/* Desktop nav */}
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

          {/*<Link*/}
          {/*  href="/play"*/}
          {/*  className={`${styles.navLink} ${pathname === "/play" ? styles.active : ""}`}*/}
          {/*>*/}
          {/*  PLAY*/}
          {/*</Link>*/}

          <Link
            href="/about"
            className={`${styles.navLink} ${pathname === "/about" ? styles.active : ""}`}
          >
            ABOUT
          </Link>
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Full-page mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className={styles.mobileNav}>
          <Link
            href="/"
            className={`${styles.mobileLink} ${pathname === "/" ? styles.active : ""}`}
          >
            HOME
          </Link>

          {/* Work with nested dropdown */}
          <div className={styles.mobileDropdown}>
            <div className={styles.mobileDropdownRow}>
              <Link
                href="/work"
                className={`${styles.mobileLink} ${pathname.startsWith("/work") ? styles.active : ""}`}
              >
                WORK
              </Link>
              <button
                className={`${styles.mobileCaret} ${workOpen ? styles.mobileCaretOpen : ""}`}
                onClick={() => setWorkOpen(v => !v)}
                aria-label="Toggle work submenu"
              >
                <span />
              </button>
            </div>

            <div className={`${styles.mobileSubmenu} ${workOpen ? styles.mobileSubmenuOpen : ""}`}>
              {workDropdown.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${styles.mobileSubLink} ${pathname === href ? styles.active : ""}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/*<Link*/}
          {/*  href="/play"*/}
          {/*  className={`${styles.mobileLink} ${pathname === "/play" ? styles.active : ""}`}*/}
          {/*>*/}
          {/*  PLAY*/}
          {/*</Link>*/}

          <Link
            href="/about"
            className={`${styles.mobileLink} ${pathname === "/about" ? styles.active : ""}`}
          >
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
}
