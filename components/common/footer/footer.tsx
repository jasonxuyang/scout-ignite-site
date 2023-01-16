import LogoScout from "../../../icons/logoScout";
import EmailInput from "./emailInput";
import styles from "./footer.module.scss";
import { SocialIcon } from "react-social-icons";
import Spark from "../../../illustrations/spark";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.socialIconsMobile}>
        <SocialIcon
          aria-label="Instagram"
          url="https://www.instagram.com/neuscout/?hl=en"
          bgColor="transparent"
          fgColor="#1b1b1b"
          className={styles.socialIcon}
          style={{ height: 64, width: 64 }}
        />
        <SocialIcon
          aria-label="LinkedIn"
          url="https://www.linkedin.com/company/scout-studio/"
          bgColor="transparent"
          fgColor="#1b1b1b"
          className={styles.socialIcon}
          style={{ height: 64, width: 64 }}
        />
        <SocialIcon
          aria-label="Twitter"
          url="https://twitter.com/neuscout?lang=en"
          bgColor="transparent"
          fgColor="#1b1b1b"
          className={styles.socialIcon}
          style={{ height: 64, width: 64 }}
        />
        <SocialIcon
          aria-label="Facebook"
          url="https://www.facebook.com/neuscout"
          bgColor="transparent"
          fgColor="#1b1b1b"
          className={styles.socialIcon}
          style={{ height: 64, width: 64 }}
        />
      </div>
      <div className={styles.leftBlock}>
        <div className={styles.universityInfo}>
          <p>
            Northeastern University Interdisciplinary Science & Engineering
            Complex
          </p>
          <p>805 Columbus Ave Boston, MA 02118 United States</p>
        </div>
        <LogoScout className={styles.logoScout} />
      </div>
      <div className={styles.middleBlock}>
        <Spark className={styles.spark} />
        <h4>
          April 8 <br /> 9am - 5pm
        </h4>
      </div>
      <div className={styles.rightBlock}>
        <h3>
          Sign up for conference updates, speaker news, and more from Scout
        </h3>
        <EmailInput onSubmit={(email) => {}} />
        <div className={styles.socialIcons}>
          <SocialIcon
            aria-label="Instagram"
            url="https://www.instagram.com/neuscout/?hl=en"
            bgColor="transparent"
            fgColor="#1b1b1b"
            className={styles.socialIcon}
            style={{ height: 64, width: 64 }}
          />
          <SocialIcon
            aria-label="LinkedIn"
            url="https://www.linkedin.com/company/scout-studio/"
            bgColor="transparent"
            fgColor="#1b1b1b"
            className={styles.socialIcon}
            style={{ height: 64, width: 64 }}
          />
          <SocialIcon
            aria-label="Twitter"
            url="https://twitter.com/neuscout?lang=en"
            bgColor="transparent"
            fgColor="#1b1b1b"
            className={styles.socialIcon}
            style={{ height: 64, width: 64 }}
          />
          <SocialIcon
            aria-label="Facebook"
            url="https://www.facebook.com/neuscout"
            bgColor="transparent"
            fgColor="#1b1b1b"
            className={styles.socialIcon}
            style={{ height: 64, width: 64 }}
          />
        </div>
      </div>
    </footer>
  );
}
