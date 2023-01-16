import { IIconProps } from "../icons/types";

export default function Scout({ className }: IIconProps) {
  return (
    <div className={className}>
      <div
        style={{
          position: "relative",
          height: "0",
          width: "100%",
          paddingBottom: "196%",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 392"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute" }}
        >
          <path
            d="M24.7196 294.051L58.8007 256.409L163.482 294.819L59.884 361.013L24.7196 294.051ZM74.507 238.997L139.42 167.34L172.07 274.889L74.507 238.997ZM28.0853 116.041L125.455 151.848L60.4644 223.547L28.0853 116.041ZM36.4798 95.9827L140.155 29.8746L174.971 96.879L141.122 134.564L36.4798 95.9827ZM147.428 0L0.425593 93.8915L44.8743 241.088L0 290.594L52.6113 391.143L199.613 297.252L155.126 150.098L200 100.549L147.428 0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
