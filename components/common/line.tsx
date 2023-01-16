import { createRef, useEffect, useState } from "react";
import styles from "./line.module.scss";

interface ILineProps {
  svg: JSX.Element;
  className?: string;
}

export default function Line({ svg, className }: ILineProps) {
  const line = createRef<any>();
  const [isInView, setIsInView] = useState<boolean>(false);

  const checkInView = (element: any) => {
    let bounding = element.current.getBoundingClientRect();
    console.log(bounding);
    return bounding.bottom >= 0;
  };

  const handleAnimateLine = () => {
    if (checkInView(line)) {
      setIsInView(true);
      window.removeEventListener("scroll", handleAnimateLine);
    }
  };

  useEffect(() => {
    handleAnimateLine();
    window.addEventListener("scroll", handleAnimateLine);
    return function cleanup() {
      window.removeEventListener("scroll", handleAnimateLine);
    };
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
      ref={line}
      className={`${styles.lineDefault} ${
        isInView && styles.completed
      } ${className}`}
    >
      {svg}
    </div>
  );
}
