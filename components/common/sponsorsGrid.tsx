import Link from "next/link";
import CustomImage from "./customImage";
import styles from "./sponsorsGrid.module.scss";

interface ISponsorData {
  logoUrl: string;
  name: string;
  href: string;
}
const sponsorsData: ISponsorData[] = [
  {
    logoUrl: "/img/Figma-Wordmark-White.svg",
    name: "Figma",
    href: "https://www.figma.com/",
  },
  {
    logoUrl: "/img/Figma-Wordmark-White.svg",
    name: "Figma",
    href: "https://www.figma.com/",
  },
  {
    logoUrl: "/img/Figma-Wordmark-White.svg",
    name: "Figma",
    href: "https://www.figma.com/",
  },
  {
    logoUrl: "/img/Figma-Wordmark-White.svg",
    name: "Figma",
    href: "https://www.figma.com/",
  },
  {
    logoUrl: "/img/Figma-Wordmark-White.svg",
    name: "Figma",
    href: "https://www.figma.com/",
  },
  {
    logoUrl: "/img/Figma-Wordmark-White.svg",
    name: "Figma",
    href: "https://www.figma.com/",
  },
  {
    logoUrl: "/img/Figma-Wordmark-White.svg",
    name: "Figma",
    href: "https://www.figma.com/",
  },
  {
    logoUrl: "/img/Figma-Wordmark-White.svg",
    name: "Figma",
    href: "https://www.figma.com/",
  },
  {
    logoUrl: "/img/Figma-Wordmark-White.svg",
    name: "Figma",
    href: "https://www.figma.com/",
  },
];

export default function SponsorsGrid() {
  return (
    <div className={styles.container}>
      <h3>Special Thanks to All our Partners</h3>
      <div className={styles.sponsorsGridContainer}>
        {sponsorsData.map((sponsorData, index) => {
          return (
            <Link href={sponsorData.href} passHref key={index}>
              <div className={styles.logo}>
                <CustomImage
                  src={sponsorData.logoUrl}
                  alt={sponsorData.name}
                  objectFit="contain"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
