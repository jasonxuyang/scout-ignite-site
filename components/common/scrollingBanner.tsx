import styles from "./scrollingBanner.module.scss";

interface IScrollingBannerProps {
  text: string;
  color: "blue" | "yellow";
}

export default function ScrollingBanner({
  text,
  color,
}: IScrollingBannerProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.scrollingBannerWrapperBackground}`}>
        <div className={`${styles.scrollingBannerContainerDefault}`}>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
        </div>
      </div>
      <div className={`${styles.scrollingBannerWrapper}`}>
        <div
          className={`${styles.scrollingBannerContainerDefault} ${styles.animate}`}
        >
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
          <h4>{text}</h4>
        </div>
      </div>
    </div>
  );
}
