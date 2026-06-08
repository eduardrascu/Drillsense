import { FC, SVGProps } from 'react';

const ThreeDots: FC<SVGProps<SVGSVGElement>> = props => {
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
        d="M4 9.00098C4.55228 9.00098 5 8.55326 5 8.00098C5 7.44869 4.55228 7.00098 4 7.00098C3.44772 7.00098 3 7.44869 3 8.00098C3 8.55326 3.44772 9.00098 4 9.00098Z"
        fill="currentColor"
      />
      <path
        d="M8 9.00098C8.55228 9.00098 9 8.55326 9 8.00098C9 7.44869 8.55228 7.00098 8 7.00098C7.44772 7.00098 7 7.44869 7 8.00098C7 8.55326 7.44772 9.00098 8 9.00098Z"
        fill="currentColor"
      />
      <path
        d="M12 9.00098C12.5523 9.00098 13 8.55326 13 8.00098C13 7.44869 12.5523 7.00098 12 7.00098C11.4477 7.00098 11 7.44869 11 8.00098C11 8.55326 11.4477 9.00098 12 9.00098Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ThreeDots;
