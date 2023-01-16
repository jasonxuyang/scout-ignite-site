import { createRef, useEffect } from "react";
import styles from "./parallax.module.scss";

interface IParallaxProps {
  className?: string;
  children: JSX.Element;
  parallaxFactor: number;
}

export default function Parallax({
  children,
  parallaxFactor,
  className,
}: IParallaxProps) {
  const parallaxRef = createRef<any>();
  const handleParallax = () => {
    parallaxRef.current.style.transform = `translateY(${
      parallaxRef.current.getBoundingClientRect().y * parallaxFactor -
      parallaxRef.current.getBoundingClientRect().y
    }px)`;
  };

  useEffect(() => {
    handleParallax();
    window.addEventListener("scroll", handleParallax);
    return function cleanup() {
      window.removeEventListener("scroll", handleParallax);
    };
  });
  return (
    <div ref={parallaxRef} className={className}>
      {children}
    </div>
  );
}
