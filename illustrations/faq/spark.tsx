import { IIconProps } from "../../icons/types";
import styles from "./defaults.module.scss";

export default function Spark({ className }: IIconProps) {
  return (
    <div className={`${styles.spark} ${className}`}>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 756 549"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute" }}
        >
          <path
            d="M82.6979 45.66L153.11 139.244L28.9387 142.331L157.072 207.219L0.377625 239.003L198.693 277.596L30.1364 375.863L190.401 340.374L71.665 493.306L203.691 418.229L174.922 505.638L312.66 390.751L325.72 546.359L432.778 397.938L516.872 549L523.045 440.305L669.811 516.239L591.476 392.638L718.411 418.229L577.403 326.223L718.688 295.28L595.207 250.186L755.471 182.125L605.895 189.192L723.432 99.8961L629.158 124.236L667.831 15.6431L538.914 151.611L502.614 43.3272L456.318 160.908L388.646 0L347.486 148.078L243.354 39.4679L247.384 152.949L82.6979 45.66Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
