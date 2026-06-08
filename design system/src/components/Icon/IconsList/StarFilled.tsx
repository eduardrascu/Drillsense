import { FC, SVGProps } from 'react';

const StarFilled: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="16"
    height="16"
    {...props}
  >
    <path d="M12 .587l3.668 7.431 8.2 1.194-5.934 5.785 1.4 8.162L12 18.896l-7.334 3.863 1.4-8.162-5.934-5.785 8.2-1.194L12 .587z" />
  </svg>
);

export default StarFilled;
