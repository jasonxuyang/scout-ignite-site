import { useState } from "react";
import Faq from "../components/faq/faq";
import QuestionMark from "../illustrations/questionMark";
import Blob from "../illustrations/blob";
import styles from "./faq.module.scss";
import Spark from "../illustrations/spark";
import Parallax from "../components/common/parallax";
import Line from "../components/common/line";
import FaqLine from "../illustrations/lines/faqLine";

interface IFaqData {
  question: string;
  answer: string | JSX.Element;
  button?: JSX.Element;
  className?: string;
}

const faqData: IFaqData[] = [
  {
    question: "When and where is interventions 2023?",
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
        quam, rutrum eget tempus vitae, convallis at libero. Pellentesque
        tincidunt ipsum in pellentesque bibendum. Donec mattis scelerisque
        porttitor. Cras quis nulla at sapien luctus semper ac at massa. Donec
        maximus ipsum at nunc dapibus hendrerit. Donec non lacinia est. Nunc
        hendrerit dolor elit, nec suscipit libero facilisis eu.
      </p>
    ),
  },
  {
    question: "How long is the event?",
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
        quam, rutrum eget tempus vitae, convallis at libero. Pellentesque
        tincidunt ipsum in pellentesque bibendum. Donec mattis scelerisque
        porttitor. Cras quis nulla at sapien luctus semper ac at massa. Donec
        maximus ipsum at nunc dapibus hendrerit. Donec non lacinia est. Nunc
        hendrerit dolor elit, nec suscipit libero facilisis eu.
      </p>
    ),
  },
  {
    question: "What kind of sessions will there be?",
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
        quam, rutrum eget tempus vitae, convallis at libero. Pellentesque
        tincidunt ipsum in pellentesque bibendum. Donec mattis scelerisque
        porttitor. Cras quis nulla at sapien luctus semper ac at massa. Donec
        maximus ipsum at nunc dapibus hendrerit. Donec non lacinia est. Nunc
        hendrerit dolor elit, nec suscipit libero facilisis eu.
      </p>
    ),
  },
  {
    question: "Is there swag?",
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
        quam, rutrum eget tempus vitae, convallis at libero. Pellentesque
        tincidunt ipsum in pellentesque bibendum. Donec mattis scelerisque
        porttitor. Cras quis nulla at sapien luctus semper ac at massa. Donec
        maximus ipsum at nunc dapibus hendrerit. Donec non lacinia est. Nunc
        hendrerit dolor elit, nec suscipit libero facilisis eu.
      </p>
    ),
  },
  {
    question: "What kind of food will there be?",
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
        quam, rutrum eget tempus vitae, convallis at libero. Pellentesque
        tincidunt ipsum in pellentesque bibendum. Donec mattis scelerisque
        porttitor. Cras quis nulla at sapien luctus semper ac at massa. Donec
        maximus ipsum at nunc dapibus hendrerit. Donec non lacinia est. Nunc
        hendrerit dolor elit, nec suscipit libero facilisis eu.
      </p>
    ),
  },
  {
    question: "Venue Accessibility",
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
        quam, rutrum eget tempus vitae, convallis at libero. Pellentesque
        tincidunt ipsum in pellentesque bibendum. Donec mattis scelerisque
        porttitor. Cras quis nulla at sapien luctus semper ac at massa. Donec
        maximus ipsum at nunc dapibus hendrerit. Donec non lacinia est. Nunc
        hendrerit dolor elit, nec suscipit libero facilisis eu.
      </p>
    ),
    className: `${styles.accessibiltyFaq}`,
  },
];

export default function FAQ() {
  // Interaction Logic
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const expandFaq = (index: number) => {
    setExpandedFaq(index);
  };
  const minimizeFaq = () => {
    setExpandedFaq(null);
  };
  const handleFaqClick = (index: number) => {
    expandedFaq === index ? minimizeFaq() : expandFaq(index);
  };

  // Rendering Logic
  const renderFaqs = () => {
    return faqData.map((faq, index) => {
      return (
        <Faq
          key={index}
          question={faq.question}
          answer={faq.answer}
          button={faq?.button}
          isExpanded={expandedFaq === index}
          onClick={() => {
            handleFaqClick(index);
          }}
          className={faq?.className}
        />
      );
    });
  };

  const renderSplash = () => {
    return (
      <div className={styles.splash}>
        <h1>FAQ</h1>
        <p>
          You&apos;ve got (frequently asked) questions? We&apos;ve (hopefully)
          got answers.
        </p>
        <Parallax className={styles.line} parallaxFactor={1.1}>
          <Line svg={<FaqLine />} />
        </Parallax>
        <Parallax parallaxFactor={1} className={styles.questionMark1Wrapper}>
          <QuestionMark />
        </Parallax>
        <Parallax parallaxFactor={1.2} className={styles.questionMark2Wrapper}>
          <QuestionMark className={styles.questionMark2} />
        </Parallax>
        <Parallax parallaxFactor={1.2} className={styles.questionMark3Wrapper}>
          <QuestionMark className={styles.questionMark3} />
        </Parallax>
        <Parallax parallaxFactor={0.5} className={styles.redBlob}>
          <Blob dotted />
        </Parallax>
        <Parallax parallaxFactor={0.7} className={styles.blueSpark}>
          <Spark dotted />
        </Parallax>
      </div>
    );
  };

  return (
    <>
      {renderSplash()}
      {renderFaqs()}
    </>
  );
}
