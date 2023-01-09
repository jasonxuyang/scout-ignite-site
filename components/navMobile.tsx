import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BREAKPOINT } from "../helpers/types";
import useBreakpoint from "../helpers/useBreakpoint";
import ArrowDiagonal from "../icons/arrowDiagonal";
import ArrowDiagonalMobile from "../icons/arrowDiagonalMobile";
import Burger from "../icons/burger";
import Close from "../icons/close";
import Logo from "../icons/logo";
import styles from "./navMobile.module.scss";

interface INavProps {}

export default function NavMobile({}: INavProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const open = () => {
    setScrollY(window.scrollY);
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    }
  }, [isOpen, scrollY]);

  return (
    <>
      <nav className={`${styles.navWrapper} ${isOpen && styles.open}`}>
        <div
          className={`${styles.navMobileOpenContainer} ${
            isOpen && styles.open
          }`}
        >
          <div className={styles.navMobileContainer}>
            <ul className={styles.navMobileLinks}>
              <li onClick={!isOpen ? open : close}>
                <Close />
              </li>
            </ul>
          </div>
          <ul className={styles.navMobileOpenLinks}>
            <Link href="/about">
              <li>About</li>
            </Link>

            <Link href="/speakers">
              <li>Speakers </li>
            </Link>

            <Link href="/schedule">
              <li>Schedule</li>
            </Link>

            <Link href="/get-involved">
              <li>Get Involved </li>
            </Link>

            <Link href="/faq">
              <li>Faq</li>
            </Link>

            <Link href="/tickets">
              <li className={styles.tickets}>
                Tickets
                <div className={styles.closeIcon}>
                  <ArrowDiagonalMobile />
                </div>
              </li>
            </Link>
          </ul>
        </div>

        <div className={`${styles.navMobileContainer}`}>
          <Logo className={styles.logo} />
          <ul className={styles.navMobileLinks}>
            {!isOpen && (
              <Link href="/tickets">
                <li className={styles.tickets}>
                  Tickets <ArrowDiagonal />
                </li>
              </Link>
            )}
            <li onClick={!isOpen ? open : close}>
              <Burger />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
