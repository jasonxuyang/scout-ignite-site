import { IIconProps } from "./types";

export default function Burger({ className }: IIconProps) {
  return (
    <div className={className}>
      <svg
        width="32"
        height="18"
        viewBox="0 0 32 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="1.5" x2="32" y2="1.5" stroke="currentColor" strokeWidth="3" />
        <line y1="8.5" x2="32" y2="8.5" stroke="currentColor" strokeWidth="3" />
        <line
          y1="16.5"
          x2="32"
          y2="16.5"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
