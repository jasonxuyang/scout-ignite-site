import { useState } from "react";
import Expand from "../../icons/expand";
import Minimize from "../../icons/minimize";
import styles from "./faq.module.scss";

interface IFaqProps {
  question: string;
  answer: string | JSX.Element;
  button?: JSX.Element;
  isExpanded: boolean;
  onClick: () => void;
  className?: string;
}

export default function Faq({
  question,
  answer,
  isExpanded,
  onClick,
  button,
  className,
}: IFaqProps) {
  return (
    <div
      className={`${styles.faqContainer} ${className} ${
        isExpanded && styles.expanded
      }`}
      onClick={onClick}
    >
      <h3>{question}</h3>
      {isExpanded && <p>{answer}</p>}
      {
        <div onClick={onClick} className={styles.icon}>
          {isExpanded ? <Minimize /> : <Expand />}
        </div>
      }
    </div>
  );
}
