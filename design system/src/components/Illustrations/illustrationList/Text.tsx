import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const Text: FC<SVGProps<SVGSVGElement>> = ({
  width = 160,
  height = 160,
  ...props
}) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 160 160"
      fill="none"
      {...props}
    >
      <path
        fill={theme.colors.neutral.background.active}
        d="M24.902 129.994H60.87v10.284H24.902v-10.284ZM75.902 129.994h64.781v10.284h-64.78v-10.284ZM105 78h36v10h-36V78Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M26.744 20.679H90.29v67.774H26.744V20.679Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M67.18 20.679H49.944l-23.199 67.77H44.51l4.899-16.4h18.944l4.899 16.4h17.13c-13.144-38.387-7.917-23.124-23.2-67.77ZM54.145 56.206l4.747-15.853 4.728 15.853h-9.475Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M91.578 89.305H72.615l-4.89-16.4H50.058l-4.902 16.4H25.551l23.786-69.48h17.847v1.709h-16.63l-22.615 66.06H43.87l4.902-16.399h20.215l4.902 16.4h15.294L78.865 57.45l1.616-.553 11.097 32.407ZM64.767 57.06h-11.77l5.894-19.694 5.876 19.694Zm-9.475-1.71h7.178L58.89 43.34l-3.598 12.01Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M25.89 13.002h1.71V96.13h-1.71V13.002ZM89.434 13.002h1.71V96.13h-1.71V13.002Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M19.355 19.824h78.646v1.71H19.356v-1.71ZM19.355 87.595h78.646v1.71H19.356v-1.71Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="m77.557 53.641-.553-1.616 1.618-.555.553 1.618-1.618.553Zm-1.477-4.314-.552-1.616 1.615-.553.556 1.61-1.619.559Zm-1.476-4.312-.552-1.633 1.615-.553.553 1.616-1.616.57Zm-1.464-4.32-.57-1.619 1.618-.553.553 1.62-1.601.552Zm-1.48-4.314-.552-1.619 1.618-.553.553 1.619-1.618.553Zm-1.475-4.315-.553-1.616 1.618-.57.553 1.62-1.618.566Zm-1.477-4.311-.552-1.619 1.615-.553.556 1.616-1.619.556Zm-1.487-4.32-.553-1.62 1.627-.546.57 1.618-1.644.547ZM64.765 57.06H52.996l5.896-19.694 5.873 19.694Zm-9.472-1.71h7.178l-3.579-12.01-3.6 12.01Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M105 52h36v9h-36v-9Z"
      />
      <path fill="url(#a)" d="M105 52h36v9h-36v-9Z" />
      <path
        fill={theme.colors.neutral.background.active}
        d="M25.025 104.497h115.658v9.542H25.025v-9.542Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="matrix(.0012 0 0 .00479 0 -1)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default Text;
