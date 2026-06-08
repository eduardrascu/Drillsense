import React, { FC, SVGProps } from 'react';

const ChevronUp: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 0L10 5L9.3 5.7L5 1.4L0.7 5.7L0 5L5 0Z" fill="currentColor" />
    </svg>
  );
};

export default ChevronUp;
