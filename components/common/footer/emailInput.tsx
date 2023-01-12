import { BaseSyntheticEvent, useState } from "react";
import ArrowDiagonal from "../../../icons/arrowDiagonal";
import styles from "./emailInput.module.scss";

interface IEmailInputProps {
  onSubmit: (email: string) => void;
  className?: string;
}

export default function Faq({ onSubmit }: IEmailInputProps) {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: BaseSyntheticEvent) => {
    setEmail(e.target.value);
  };

  // TODO: Maybe add email validation?
  return (
    <form
      className={styles.emailInput}
      onSubmit={(e: any) => {
        e.preventDefault();
        console.log(email);
      }}
    >
      <input
        type="email"
        value={email}
        placeholder="Your Email"
        className={styles.active}
        onChange={handleChange}
      />
      <div
        className={styles.submitButton}
        onClick={() => {
          console.log(email);
          onSubmit(email);
        }}
      >
        <h4>Submit</h4>
        <ArrowDiagonal className={styles.arrowDiagonal} />
      </div>
    </form>
  );
}
