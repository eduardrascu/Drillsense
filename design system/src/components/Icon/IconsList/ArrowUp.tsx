import { FC, SVGProps } from 'react';

const ArrowUp: FC<SVGProps<SVGSVGElement>> = props => {
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
        d="M8 2.00098L3 7.00098L3.705 7.70598L7.5 3.91598V14.001H8.5V3.91598L12.295 7.70598L13 7.00098L8 2.00098Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowUp;
