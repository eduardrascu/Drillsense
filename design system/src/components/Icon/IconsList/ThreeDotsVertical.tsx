import { FC, SVGProps } from 'react';

const ThreeDotsVertical: FC<SVGProps<SVGSVGElement>> = props => {
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
        d="M9.00098 4C9.00098 4.55228 8.55326 5 8.00098 5C7.44869 5 7.00098 4.55228 7.00098 4C7.00098 3.44772 7.44869 3 8.00098 3C8.55326 3 9.00098 3.44772 9.00098 4Z"
        fill="currentColor"
      />
      <path
        d="M9.00098 8C9.00098 8.55228 8.55326 9 8.00098 9C7.44869 9 7.00098 8.55228 7.00098 8C7.00098 7.44772 7.44869 7 8.00098 7C8.55326 7 9.00098 7.44772 9.00098 8Z"
        fill="currentColor"
      />
      <path
        d="M9.00098 12C9.00098 12.5523 8.55326 13 8.00098 13C7.44869 13 7.00098 12.5523 7.00098 12C7.00098 11.4477 7.44869 11 8.00098 11C8.55326 11 9.00098 11.4477 9.00098 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ThreeDotsVertical;
