import { IIconProps } from "./types";

export default function Expand({ className }: IIconProps) {
  return (
    <div className={className}>
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="20" y="3" width="3" height="37" fill="currentColor" />
        <rect
          x="40"
          y="20"
          width="3"
          height="37"
          transform="rotate(90 40 20)"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
