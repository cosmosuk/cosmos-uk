export function PressReleaseIcon({ className = "h-[108px] w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 165"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      {/* Drop shadow behind document */}
      <path d="M14 14 H114 L134 34 V159 H14 Z" fill="#07111f" fillOpacity="0.45" />

      {/* White document body */}
      <path d="M10 10 H110 L130 30 V155 H10 Z" fill="white" />

      {/* Folded corner */}
      <path d="M110 10 L130 30 H110 Z" fill="#c2cfdf" />

      {/* "Press" heading */}
      <text
        x="18"
        y="50"
        fontSize="20"
        fontWeight="800"
        fill="#0f1f3d"
        fontFamily="Inter, -apple-system, sans-serif"
        letterSpacing="1"
      >
        PRESS
      </text>

      {/* "RELEASE" heading */}
      <text
        x="18"
        y="74"
        fontSize="20"
        fontWeight="800"
        fill="#0f1f3d"
        fontFamily="Inter, -apple-system, sans-serif"
      >
        RELEASE
      </text>

      {/* Gold separator line */}
      <rect x="18" y="84" width="102" height="3.5" rx="1.75" fill="#b5892a" />

      {/* Gold image placeholder box */}
      <rect x="18" y="94" width="42" height="37" rx="3" fill="#b5892a" />

      {/* Text lines — right of image box */}
      <rect x="66" y="98"  width="52" height="5.5" rx="2.75" fill="#bfcbdb" />
      <rect x="66" y="110" width="46" height="5.5" rx="2.75" fill="#bfcbdb" />
      <rect x="66" y="122" width="52" height="5.5" rx="2.75" fill="#bfcbdb" />

      {/* Full-width text lines */}
      <rect x="18" y="138" width="102" height="5" rx="2.5" fill="#bfcbdb" />
      <rect x="18" y="149" width="80"  height="5" rx="2.5" fill="#bfcbdb" />

      {/* Megaphone circle badge — overlaps bottom-right of document */}
      <circle cx="115" cy="149" r="25" fill="#b5892a" />

      {/* Megaphone cone */}
      <path d="M101 145 L116 136 L116 160 L101 151 Z" fill="white" />

      {/* Mouthpiece cap */}
      <rect x="95" y="144" width="7" height="8" rx="1.5" fill="white" />

      {/* Handle */}
      <rect x="97" y="152" width="4.5" height="7" rx="2.25" fill="white" fillOpacity="0.82" />

      {/* Sound effect dashes */}
      <line x1="118" y1="139" x2="123" y2="135" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="120" y1="148" x2="126" y2="148" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="118" y1="157" x2="123" y2="162" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
