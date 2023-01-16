import { createRef, useEffect, useState } from "react";
import styles from "./line.module.scss";

interface ILineProps {
  svg: JSX.Element;
  className?: string;
  reverse?: boolean;
  triggerFromTop?: boolean;
}

export default function Line({
  svg,
  className,
  reverse = false,
  triggerFromTop = false,
}: ILineProps) {
  const line = createRef<any>();
  const [isInView, setIsInView] = useState<boolean>(false);

  const checkInView = (element: any) => {
    let bounding = element.current.getBoundingClientRect();
    console.log(bounding);
    if (triggerFromTop) return bounding.top <= 0;
    else return bounding.bottom >= 0;
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
    <div ref={line} className={className}>
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
        className={`${styles.lineDefault} ${reverse && styles.reverse} ${
          isInView && styles.completed
        }`}
      >
        {svg}
      </div>
    </div>
  );
}
