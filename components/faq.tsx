import { useState } from "react";
import Expand from "../icons/expand";
import Minimize from "../icons/minimize";
import styles from "./faq.module.scss";

interface faqProps {
  question: string;
  answer: string | JSX.Element;
  button?: JSX.Element;
}

export default function Faq({ question, answer, button }: faqProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleFaq = () => {
    isExpanded ? setIsExpanded(false) : setIsExpanded(true);
  };

  return (
    <div className={`${styles.faqContainer} ${isExpanded && styles.expanded}`}>
      <h3>{question}</h3>
      {isExpanded && <p>{answer}</p>}
      {
        <div onClick={toggleFaq} className={styles.icon}>
          {isExpanded ? <Minimize /> : <Expand />}
        </div>
      }
    </div>
  );
}
