import { IIconProps } from "./types";

export default function ArrowDiagonal({ className }: IIconProps) {
  return (
    <div className={className}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6051 1.97593C14.6051 1.42615 14.1554 0.980465 13.6006 0.980465L4.55995 0.980465C4.00517 0.980465 3.55543 1.42615 3.55543 1.97593C3.55543 2.52571 4.00517 2.97139 4.55995 2.97139H12.5961V10.9351C12.5961 11.4849 13.0458 11.9306 13.6006 11.9306C14.1554 11.9306 14.6051 11.4849 14.6051 10.9351L14.6051 1.97593ZM2.02475 14.8553L14.3109 2.67983L12.8903 1.27203L0.604154 13.4475L2.02475 14.8553Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
