import { IIconProps } from "../../icons/types";

export default function QuestionMark({ className }: IIconProps) {
  return (
    <div className={className}>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 23 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          style={{ position: "absolute" }}
        >
          <path
            d="M2 2C7.89559 2 25.4366 4.09896 19.8583 15.2556C18.0833 18.8056 13.3907 18.6126 11.5735 21.8835C9.67514 25.3005 6.96942 28.5142 5.31391 31.8252"
            stroke="#FAFAFA"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M5.31394 59.9934C5.58964 57.7878 6.80289 58.3364 3.65698 58.3364"
            stroke="#FAFAFA"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
