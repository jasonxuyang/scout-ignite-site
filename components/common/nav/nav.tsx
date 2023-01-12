import Link from "next/link";
import { useState } from "react";
import { BREAKPOINT } from "../../../helpers/types";
import useBreakpoint from "../../../helpers/useBreakpoint";
import ArrowDiagonal from "../../../icons/arrowDiagonal";
import Logo from "../../../icons/logo";
import styles from "./nav.module.scss";
import NavMobile from "./navMobile";

export default function Nav() {
  const breakpoint = useBreakpoint();
  if (breakpoint === BREAKPOINT.MOBILE) return <NavMobile />;
  return (
    <nav className={styles.navContainer}>
      <Link href="/">
        <Logo className={styles.logo} />
      </Link>
      <ul className={styles.navLinks}>
        <Link href="/about">
          <li>About</li>
        </Link>

        <Link href="/speakers">
          <li>Speakers </li>
        </Link>

        <Link href="/schedule">
          <li>Schedule</li>
        </Link>

        {breakpoint !== BREAKPOINT.MIDSIZE && (
          <Link href="/get-involved">
            <li>Get Involved </li>
          </Link>
        )}

        <Link href="/faq">
          <li>Faq</li>
        </Link>

        <Link href="/tickets">
          <li className={styles.tickets}>
            Tickets <ArrowDiagonal className={styles.arrowDiagonal} />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
