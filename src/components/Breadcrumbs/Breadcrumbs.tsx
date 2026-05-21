"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumbs.module.css";

const labelMap: Record<string, string> = {
  work: "Work",
  disney: "Disney",
  bitpay: "BitPay",
  baymax: "Baymax CMS",
  archives: "Walt Disney Archives",
  "html-emails": "HTML Emails",
  "employee-wellness": "Employee Wellness",
  website: "Website",
  about: "About",
  play: "Play",
};

function toLabel(segment: string): string {
  return (
    labelMap[segment] ??
    segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [
    { label: "Home", href: "/" },
    ...segments.map((segment, i) => ({
      label: toLabel(segment),
      href: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.href} className={styles.item}>
              {isLast ? (
                <span className={styles.current}>{crumb.label}</span>
              ) : (
                <>
                  <Link href={crumb.href} className={styles.link}>
                    {crumb.label}
                  </Link>
                  <span className={styles.separator} aria-hidden="true">&gt;</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
