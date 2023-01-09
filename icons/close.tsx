import { IIconProps } from "./types";

export default function Close({ className }: IIconProps) {
  return (
    <div className={className}>
      <svg
        width="49"
        height="32"
        viewBox="0 0 49 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="2.79488"
          y1="1.80276"
          x2="47.4891"
          y2="29.7308"
          stroke="currentColor"
          strokeWidth="3"
        />
        <line
          x1="1.252"
          y1="29.6559"
          x2="45.9462"
          y2="1.72787"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
