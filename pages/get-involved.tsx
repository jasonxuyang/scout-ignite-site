import { useState } from "react";
import WhoAreWe from "../components/about/whoAreWe";
import Button from "../components/common/button";
import ContentBlock from "../components/common/contentBlock";
import CustomImage from "../components/common/customImage";
import ScrollingBanner from "../components/common/scrollingBanner";
import SponsorsGrid from "../components/common/sponsorsGrid";
import styles from "./get-involved.module.scss";

export default function GetInvolved() {
  const renderSplash = () => {
    return (
      <section className={styles.splash}>
        <h1>Get Involved</h1>
      </section>
    );
  };

  const renderGraySection = () => {
    return (
      <section className={styles.graySection}>
        <div className={styles.grid}>
          <ContentBlock
            title="Spread the Word"
            body={
              <>
                Interventions: Ignite is a one-day design experience where new
                ideas come ablaze. Through a series of presentations, panels,
                and workshops, we seek to kindle connections and illuminate our
                hidden potential. You&apos;ll for sure don&apos;t want to miss
                this exciting event! Download some branded social posts, stories
                and email banner from our press kit to spread the word!
              </>
            }
            button={<Button text="Press Kit" color="black" />}
          />
          <CustomImage
            src="/img/img-spread-the-word.jpg"
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.grid}>
          <ContentBlock
            title="Student Speakers"
            body={
              <>
                We are looking for student speakers to participate in a
                lightning talk event, where speakers will speak for 5 minutes
                about their subject of choice. Volunteer as a student speaker
                with the form below.
              </>
            }
            button={<Button text="Form" color="black" />}
            className={styles.reverse}
          />
          <CustomImage
            src="/img/img-student-speakers.jpg"
            alt=""
            className={styles.image}
          />
        </div>
      </section>
    );
  };

  const renderBlackSection = () => {
    return (
      <section className={styles.blackSection}>
        <div className={styles.grid}>
          <ContentBlock
            title="Volunteer"
            body={
              <>
                Help us run this conference by becoming a volunteer. We are only
                able to execute this conference with the help from a committed
                team of student volunteers. Fill out the form below to become a
                part of an amazing team.
              </>
            }
            button={<Button text="Form" color="white" />}
          />
          <CustomImage
            src="/img/img-volunteer.jpg"
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.grid}>
          <ContentBlock
            title="Sponsor"
            body={
              <>
                Interventions: Ignite is presented by Scout, a student-run
                non-profit club that relies on the generosity of donors to make
                this annual conference a reality. We thank all sponsors who make
                this event possible and invite you to join us to support this
                community event and relevant the design conversation in Boston.
              </>
            }
            button={<Button text="Form" color="white" />}
            className={styles.reverse}
          />
          <CustomImage
            src="/img/img-sponsor.jpg"
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.grid}>
          <ContentBlock
            title="Stay in Touch"
            body={
              <>
                Sign up for our newsletter to be the first to get updates about
                our speakers, tickets sales and more information about the
                event.
              </>
            }
            button={<Button text="Form" color="white" />}
          />
          <CustomImage
            src="/img/img-spread-the-word.jpg"
            alt=""
            className={styles.image}
          />
        </div>
      </section>
    );
  };

  return (
    <>
      {renderSplash()}
      {renderGraySection()}
      {renderBlackSection()}
      <div className={styles.scrollingBannerWrapper}>
        <ScrollingBanner text="Get Involved" color="yellow" />
      </div>
      <SponsorsGrid />
    </>
  );
}
