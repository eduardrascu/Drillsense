import { FC, SVGProps } from 'react';

const Folder: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15.5 10.502H8.5V11.502H15.5V10.502Z" fill="currentColor" />
      <path d="M15.5 12.502H8.5V13.502H15.5V12.502Z" fill="currentColor" />
      <path d="M12 14.502H8.5V15.502H12V14.502Z" fill="currentColor" />
      <path
        d="M7.5 13.502H2.5V3.50195H6.085L7.795 5.20695L8.085 5.50195H14.5V9.50195H15.5V5.50195C15.5 5.23674 15.3946 4.98238 15.2071 4.79485C15.0196 4.60731 14.7652 4.50195 14.5 4.50195H8.5L6.795 2.79695C6.70197 2.70337 6.59134 2.62912 6.46948 2.57849C6.34763 2.52786 6.21696 2.50185 6.085 2.50195H2.5C2.23478 2.50195 1.98043 2.60731 1.79289 2.79485C1.60536 2.98238 1.5 3.23674 1.5 3.50195V13.502C1.5 13.7672 1.60536 14.0215 1.79289 14.2091C1.98043 14.3966 2.23478 14.502 2.5 14.502H7.5V13.502Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Folder;
