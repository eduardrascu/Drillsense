import { FC, SVGProps } from 'react';

const ArrowDown: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 14L13 9L12.295 8.295L8.5 12.086V2H7.5V12.086L3.705 8.295L3 9L8 14Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowDown;
