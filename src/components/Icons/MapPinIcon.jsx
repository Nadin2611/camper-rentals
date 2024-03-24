const MapPinIcon = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 29 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        d="M26.4 13.333c0 9.333-12 17.333-12 17.333s-12-8-12-17.333c0-3.183 1.264-6.235 3.515-8.485s5.303-3.515 8.485-3.515c3.183 0 6.235 1.264 8.485 3.515s3.515 5.303 3.515 8.485z"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        d="M14.4 17.333c2.209 0 4-1.791 4-4s-1.791-4-4-4c-2.209 0-4 1.791-4 4s1.791 4 4 4z"
      ></path>
    </svg>
  );
};

export default MapPinIcon;
