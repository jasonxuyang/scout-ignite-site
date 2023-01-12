import { useState } from "react";
import Faq from "../components/faq/faq";
import Footer from "../components/common/footer/footer";
import QuestionMark from "../illustrations/faq/questionMark";
import RedBlob from "../illustrations/faq/redBlob";
import styles from "./faq.module.scss";

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
        <QuestionMark className={styles.questionMark} />
        <RedBlob className={styles.redBlob} />
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
