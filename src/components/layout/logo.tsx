import React from "react";

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <g transform="translate(4, 4)">
      <ellipse
        cx="8"
        cy="8"
        rx="6"
        ry="9"
        fill="#1677FF"
        transform="rotate(-45 8 8)"
      />
      <ellipse
        cx="8"
        cy="8"
        rx="6"
        ry="9"
        fill="#1677FF"
        transform="rotate(45 8 8)"
      />
    </g>
  </svg>
);

export default Logo;
