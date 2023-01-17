import { IIconProps } from "../icons/types";

export default function Blob({ className }: IIconProps) {
  return (
    <div className={className}>
      <div
        style={{
          position: "relative",
          height: "0",
          paddingBottom: "86.607%",
          width: "100%",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 224 194"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute" }}
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M22.2415 25.2904C38.699 9.55953 61.3435 0.207587 75.9464 0.873695C93.4572 1.6658 122.292 20.0575 135.402 39.1454C152.749 64.401 128.71 109.896 128.71 109.896C128.71 109.896 169.796 72.6631 197.052 90.588C198.25 91.3833 221.227 105.448 223.576 135.209C225.926 164.97 176.321 197.921 140.234 192.87C110.473 188.701 82.7882 169.205 77.1478 135.018C70.6114 95.4236 76.5627 71.0668 76.5627 71.0668C76.5627 71.0668 57.947 118.787 16.4223 93.3711C-0.358856 83.0865 -10.0848 56.1595 22.2415 25.2904Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
