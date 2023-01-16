import { useState } from "react";
import styles from "./customImage.module.scss";
import Image from "next/image";

interface ICustomImageProps {
  src: string;
  alt: string;
  className?: string;
  objectFit?: "cover" | "contain";
}

export default function CustomImage({
  src,
  alt,
  className,
  objectFit = "cover",
}: ICustomImageProps) {
  return (
    <div className={`${styles.customImageDefault} ${className}`}>
      <Image src={src} alt={alt} fill style={{ objectFit: objectFit }} />
    </div>
  );
}
