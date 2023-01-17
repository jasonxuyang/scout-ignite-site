import { useState } from "react";
import WhoAreWe from "../components/about/whoAreWe";
import Button from "../components/common/button";
import Line from "../components/common/line";
import Parallax from "../components/common/parallax";
import Blob from "../illustrations/blob";
import AboutLine from "../illustrations/lines/aboutLine";
import AboutLine1 from "../illustrations/lines/aboutLine1";
import AboutLine2 from "../illustrations/lines/aboutLine2";
import Scout from "../illustrations/scout";
import Spark from "../illustrations/spark";
import styles from "./about.module.scss";

export default function About() {
  const renderSplash = () => {
    return (
      <section className={styles.splash}>
        <h1>What is Ignite?</h1>
        <p>
          Interventions: Ignite is Northeastern Scout&apos;s sixth annual
          one-day design experience where new ideas come ablaze. Through a
          series of presentations, panels, and workshops, we seek to illuminate
          our hidden potential while burning away rigid approaches to design. We
          strive to surpass existing expectations, kindling connections and
          breakthroughs in our practice. Interventions: Ignite is a showcase
          that will spark passion, connection, and discovery among creatives new
          and seasoned.
        </p>

        <Line svg={<AboutLine />} className={styles.line} />
        <Line svg={<AboutLine1 />} className={styles.line1} />
        <Parallax parallaxFactor={0.8} className={styles.blueBlobContainer}>
          <Blob dotted className={styles.blueBlob} />
        </Parallax>
        <Parallax parallaxFactor={0.8} className={styles.blueBlobContainer}>
          <Blob dotted className={styles.blueBlob} />
        </Parallax>
        <Parallax parallaxFactor={0.5} className={styles.blueBlobContainer1}>
          <Blob dotted className={styles.blueBlob1} />
        </Parallax>
      </section>
    );
  };

  const renderPreviousConferences = () => {
    return (
      <section className={styles.previousConferences}>
        <h2>Our Previous Conferences</h2>
      </section>
    );
  };

  const renderWhoIsScout = () => {
    return (
      <section className={styles.whoIsScout}>
        <div>
          <h2>
            Who is <strong>Scout</strong>?
          </h2>
          <p>
            We&apos;re Scout, Northeastern&apos;s student-led design
            organization, and we&apos;ll be your gracious hosts this April 9th!
            We are a group of 77 students who work with real-world clients each
            semester and plan bi-weekly events for the Northeastern design
            community. We also practice design thinking for community partners
            through our Scout Labs arm, work on animation, photo and video
            projects with Scout Production, as well as plan and execute our
            annual design conference, Interventions, for the greater Boston
            creative community.
          </p>
          <Button
            text="Learn More"
            color="white"
            href="https://scout.camd.northeastern.edu/"
          />
        </div>
        <Scout className={styles.scoutLogo} />
        <Parallax parallaxFactor={1.1} className={styles.redSparkContainer}>
          <Spark dotted />
        </Parallax>
        <Parallax className={styles.aboutLine2} parallaxFactor={0.8}>
          <Line svg={<AboutLine2 />} reverse triggerFromTop />
        </Parallax>
      </section>
    );
  };

  return (
    <div className={styles.about}>
      {renderSplash()}
      {renderPreviousConferences()}
      {renderWhoIsScout()}
      {<WhoAreWe />}
    </div>
  );
}
