import { useState } from "react";
import styles from "./customImage.module.scss";
import Image from "next/image";

interface ICustomImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function CustomImage({
  src,
  alt,
  className,
}: ICustomImageProps) {
  return (
    <div className={`${styles.customImageDefault} ${className}`}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </div>
  );
}
