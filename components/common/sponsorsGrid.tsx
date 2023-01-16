import CustomImage from "./customImage";
import styles from "./sponsorsGrid.module.scss";

interface ISponsorData {
  logoUrl: string;
  name: string;
}
const sponsorsData: ISponsorData[] = [
  { logoUrl: "/img/Figma-Wordmark-White.svg", name: "Figma" },
  { logoUrl: "/img/Figma-Wordmark-White.svg", name: "Figma" },
  { logoUrl: "/img/Figma-Wordmark-White.svg", name: "Figma" },
  { logoUrl: "/img/Figma-Wordmark-White.svg", name: "Figma" },
  { logoUrl: "/img/Figma-Wordmark-White.svg", name: "Figma" },
  { logoUrl: "/img/Figma-Wordmark-White.svg", name: "Figma" },
  { logoUrl: "/img/Figma-Wordmark-White.svg", name: "Figma" },
  { logoUrl: "/img/Figma-Wordmark-White.svg", name: "Figma" },
  { logoUrl: "/img/Figma-Wordmark-White.svg", name: "Figma" },
];

export default function SponsorsGrid() {
  return (
    <div className={styles.container}>
      <h3>Special Thanks to All our Partners</h3>
      <div className={styles.sponsorsGridContainer}>
        {sponsorsData.map((sponsorData, index) => {
          return (
            <div key={index} className={styles.logo}>
              <CustomImage
                src={sponsorData.logoUrl}
                alt={sponsorData.name}
                objectFit="contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
