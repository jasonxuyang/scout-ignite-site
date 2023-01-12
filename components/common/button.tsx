import Link from "next/link";
import styles from "./button.module.scss";

interface IButtonProps {
  text: string | JSX.Element;
  color: "black" | "white" | "pink";
  onClick?: () => void;
  href?: string;
}

export default function Button({ text, color, onClick, href }: IButtonProps) {
  const buildClassName = () => {
    if (color === "black") return `${styles.default} ${styles.black}`;
    if (color === "white") return `${styles.default} ${styles.white}`;
    return `${styles.default} ${styles.pink}`;
  };
  if (href)
    return (
      <Link href={href} passHref>
        <div className={buildClassName()} onClick={onClick} role="button">
          {text}
        </div>
      </Link>
    );
  return (
    <div className={buildClassName()} onClick={onClick} role="button">
      {text}
    </div>
  );
}
