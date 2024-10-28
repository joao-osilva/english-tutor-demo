export default function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main circle background */}
      <circle cx="16" cy="16" r="16" fill="url(#gradient)" />
      
      {/* Simplified speech bubble / brain combination */}
      <path
        d="M10 14C10 11.7909 11.7909 10 14 10H18C20.2091 10 22 11.7909 22 14V16C22 18.2091 20.2091 20 18 20H16L13 23V20H14C11.7909 20 10 18.2091 10 16V14Z"
        fill="white"
        fillOpacity="0.9"
      />
      
      {/* Neural network dots */}
      <circle cx="14" cy="15" r="1" fill="url(#gradient)" />
      <circle cx="18" cy="15" r="1" fill="url(#gradient)" />
      <circle cx="16" cy="17" r="1" fill="url(#gradient)" />
      
      {/* Connection lines */}
      <path
        d="M14 15L16 17L18 15"
        stroke="url(#gradient)"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}