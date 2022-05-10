import * as React from "react";

export const CloseIcon = ({
  height = "24px",
  width = "24px",
  color = "black",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    width="84"
    height="84"
    viewBox="0 0 84 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      opacity="0.25"
      cx="42.7599"
      cy="42.8336"
      r="29"
      transform="rotate(-45 42.7599 42.8336)"
      fill="#dee2e6"
    />
    <path
      d="M50.1887 53.0824L43.1619 46.0555L36.5327 52.6847L34.08 50.2319L40.7091 43.6028L33.6822 36.5759L36.3836 33.8745L43.4104 40.9014L49.907 34.4049L52.3598 36.8576L45.8632 43.3542L52.8901 50.3811L50.1887 53.0824Z"
      fill="white"
    />
  </svg>
);
