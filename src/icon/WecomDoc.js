import React from "react";
import "./index.css";

export default ({fill = "rgba(0,0,0,0.65)", style = {}, className = "icon", viewBox = "0 0 40 40"}) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <path
        fill="#2B7CE9"
        d="M8,4 L24,4 L32,12 L32,34 C32,35.1 31.1,36 30,36 L10,36 C8.9,36 8,35.1 8,34 L8,6 C8,4.9 8.9,4 10,4 Z"
      />
      <path
        fill="#1A5CBD"
        d="M24,4 L24,12 L32,12 Z"
      />
      <rect fill="#FFFFFF" x="13" y="17" width="14" height="2" rx="1" />
      <rect fill="#FFFFFF" x="13" y="22" width="10" height="2" rx="1" />
      <rect fill="#FFFFFF" x="13" y="27" width="12" height="2" rx="1" />
    </g>
  </svg>
);
