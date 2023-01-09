import { IIconProps } from "./types";
import styles from "./logoScout.module.scss";

export default function LogoScout({ className }: IIconProps) {
  return (
    <div className={`${styles.default} ${className}`}>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <svg
          width="100%"
          height="100$"
          viewBox="0 0 56 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          style={{ position: "absolute" }}
        >
          <path
            d="M13.531 49.7608L19.9026 43.3909L39.4731 49.8908L20.1051 61.0924L13.531 49.7608ZM22.8389 40.4442L34.9747 28.3182L41.0787 46.5181L22.8389 40.4442ZM14.1602 19.6371L32.3638 25.6965L20.2136 37.8298L14.1602 19.6371ZM15.7296 16.2427L35.1121 5.05553L41.6211 16.3944L35.2929 22.7715L15.7296 16.2427ZM36.4717 0L8.98911 15.8888L17.299 40.7981L8.90955 49.1758L18.7454 66.1913L46.2281 50.3025L37.911 25.4004L46.3004 17.0155L36.4717 0Z"
            fill="currentColor"
          />
          <path
            d="M7.28288 82.8672C7.01895 82.4767 6.65684 82.1624 6.23287 81.9557C5.80889 81.7491 5.33795 81.6575 4.8673 81.69C4.63758 81.6617 4.40447 81.6835 4.18394 81.7536C3.96341 81.8238 3.76067 81.9407 3.58963 82.0964C3.41859 82.2522 3.28329 82.443 3.19299 82.6558C3.10269 82.8686 3.05953 83.0984 3.06648 83.3294C3.06648 84.1022 3.44256 84.5861 4.38275 84.8966L5.99554 85.3949C8.25924 86.1172 9.08373 87.3233 9.08373 89.006C9.08373 91.5338 7.1744 92.9999 4.52739 92.9999C1.73573 92.9999 0.520723 91.6277 0 90.6094L1.68511 89.1649C1.91852 89.7091 2.3206 90.1641 2.83221 90.4631C3.34383 90.7621 3.93799 90.8893 4.52739 90.826C5.82196 90.826 6.53796 90.1688 6.53796 89.1866C6.53796 88.3705 6.06786 87.9083 5.0915 87.6049L3.50042 87.0994C1.28734 86.3772 0.499028 85.1133 0.499028 83.4883C0.499028 81.4589 1.73575 79.5305 4.83839 79.5305C5.63047 79.471 6.42448 79.6173 7.1431 79.9553C7.86173 80.2932 8.48046 80.8112 8.93908 81.4588L7.28288 82.8672Z"
            fill="currentColor"
          />
          <path
            d="M15.9971 90.7967C16.4972 90.7805 16.9834 90.6279 17.4028 90.3554C17.8222 90.083 18.159 89.7011 18.3765 89.2511L20.2497 90.4717C19.84 91.2568 19.2135 91.9081 18.4443 92.3485C17.6752 92.7888 16.7958 92.9997 15.9104 92.9561C12.2219 92.9561 10.3849 90.45 10.3849 86.2467C10.3849 82.0434 12.2219 79.5301 15.9104 79.5301C16.7967 79.4863 17.6771 79.6978 18.4464 80.1396C19.2158 80.5814 19.8417 81.2347 20.2497 82.0217L18.3765 83.2351C18.159 82.7851 17.8222 82.4032 17.4028 82.1308C16.9834 81.8583 16.4972 81.7057 15.9971 81.6895C13.8853 81.6895 12.9234 83.3867 12.9234 86.2611C12.9234 89.1356 13.8853 90.7967 15.9971 90.7967Z"
            fill="currentColor"
          />
          <path
            d="M26.9769 92.9566C23.0208 92.9566 21.5816 90.0677 21.5816 86.2616C21.5816 82.4555 23.0281 79.5305 26.9914 79.5305C30.9547 79.5305 32.3939 82.4194 32.3939 86.2616C32.3939 90.1038 30.8896 92.9566 26.9769 92.9566ZM26.9769 90.7899C29.2261 90.7899 29.8698 88.941 29.8698 86.2544C29.8698 83.5677 29.2551 81.6827 27.0203 81.6827C24.7855 81.6827 24.1274 83.5533 24.1274 86.2544C24.1274 88.9555 24.6915 90.7899 26.9769 90.7899Z"
            fill="currentColor"
          />
          <path
            d="M34.1515 87.7853V79.7253H36.6249V87.7275C36.6249 89.8147 37.3481 90.7969 39.0477 90.7969C40.7473 90.7969 41.4633 89.8147 41.4633 87.7275V79.7253H43.9729V87.7853C43.9729 91.3964 41.9623 92.9564 39.0839 92.9564C36.2054 92.9564 34.1876 91.4108 34.1876 87.7853"
            fill="currentColor"
          />
          <path
            d="M45.9531 79.7253V81.8053H49.3305V92.7614H51.7967V81.8053H55.1887V79.7253H45.9531Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
