import * as React from "react";

export const PlusIcon = ({
  height = "24px",
  width = "24px",
  color = "black",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    width="58"
    height="61"
    viewBox="0 0 58 61"
    fill="#dee2e6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.25" cx="29" cy="31.1484" r="29" />
    <path
      d="M27.2882 43.6484V33.7109H17.9132V30.2422H27.2882V20.3047H31.1086V30.2422H40.2961V33.7109H31.1086V43.6484H27.2882Z"
      fill="white"
    />
  </svg>
);
