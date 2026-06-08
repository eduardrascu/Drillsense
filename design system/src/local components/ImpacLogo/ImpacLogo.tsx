interface ImpacLogoProps {
  size?: number;
  className?: string;
}

export function ImpacLogo({ size = 32, className }: ImpacLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="IMPAC"
      role="img"
    >
      <g fill="#1565C0">
        {/* Center circle */}
        <circle cx="60" cy="60" r="25" />

        {/* Cardinal arms — overlap circle edge to create seamless join */}
        <rect x="52" y="5"  width="16" height="30" rx="4" /> {/* N */}
        <rect x="52" y="85" width="16" height="30" rx="4" /> {/* S */}
        <rect x="5"  y="52" width="30" height="16" rx="4" /> {/* W */}
        <rect x="85" y="52" width="30" height="16" rx="4" /> {/* E */}

        {/* Diagonal floating blocks */}
        <rect x="82" y="12" width="14" height="14" rx="3" /> {/* NE */}
        <rect x="14" y="12" width="14" height="14" rx="3" /> {/* NW */}
        <rect x="82" y="94" width="14" height="14" rx="3" /> {/* SE */}
        <rect x="14" y="94" width="14" height="14" rx="3" /> {/* SW */}
      </g>
    </svg>
  );
}
