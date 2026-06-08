import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const Success: FC<SVGProps<SVGSVGElement>> = ({
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
        fill={theme.colors.neutral.background.base}
        d="M141.903 32.744v94.225a5.565 5.565 0 0 1-5.562 5.562H29.291a5.566 5.566 0 0 1-5.563-5.562V32.744a5.565 5.565 0 0 1 5.563-5.556h107.05a5.566 5.566 0 0 1 5.562 5.556Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M142.178 32.556v94.225a5.569 5.569 0 0 1-5.569 5.56H29.562a5.568 5.568 0 0 1-5.562-5.56V32.556A5.566 5.566 0 0 1 29.563 27h107.046a5.564 5.564 0 0 1 5.569 5.556Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M53 74h15v25H53V74Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M100 59h13v40h-13V59Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M77 66h14v33H77V66Z"
      />
      <path fill={theme.colors.neutral.border.strong} d="M53 110h60v4H53v-4Z" />
      <path
        fill={theme.colors.neutral.border.default}
        d="M141.903 32.744v6.828H23.731v-6.828a5.562 5.562 0 0 1 5.563-5.556H136.34a5.563 5.563 0 0 1 5.562 5.556Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M32.11 35.788a2.41 2.41 0 1 0 0-4.82 2.41 2.41 0 0 0 0 4.82ZM41.225 35.788a2.41 2.41 0 1 0 0-4.82 2.41 2.41 0 0 0 0 4.82Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M104.03 120.374a29.896 29.896 0 0 1 4.381-14.285 29.592 29.592 0 0 1 10.727-10.329 29.322 29.322 0 0 1 14.36-3.76c2.907.004 5.769.439 8.502 1.27v39.23h-35.993a29.92 29.92 0 0 1-1.977-12.126Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="m16.36 21.144 1.325-1.326 3.8 3.8-1.325 1.326-3.8-3.8ZM24.322 16.09h1.875v5.376h-1.875V16.09ZM12.49 27.45h5.376v1.875H12.49V27.45Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M136.341 133.469H29.291a6.506 6.506 0 0 1-6.5-6.5V32.744a6.506 6.506 0 0 1 6.5-6.494h107.05a6.507 6.507 0 0 1 6.5 6.5v94.219a6.507 6.507 0 0 1-6.5 6.5ZM29.291 28.125a4.631 4.631 0 0 0-4.625 4.625v94.219a4.63 4.63 0 0 0 4.625 4.625h107.05a4.632 4.632 0 0 0 4.625-4.625V32.744a4.634 4.634 0 0 0-4.625-4.619H29.291Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M134 142c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Z"
      />
      <path
        fill="url(#a)"
        d="M134 142c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="m130.515 132.428-9.706-9.703 3.031-3.031 6.675 6.675 12.99-12.994 3.032 3.031-16.022 16.022Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M13.975 133.547a3.658 3.658 0 0 1-3.31-2.092 3.66 3.66 0 0 1 4.184-5.127 3.662 3.662 0 0 1 2.68 4.43 3.663 3.663 0 0 1-1.985 2.433 3.67 3.67 0 0 1-1.569.356Zm0-5.453a1.781 1.781 0 0 0-1.534.87 1.787 1.787 0 1 0 1.534-.87ZM26.728 144.847a2.826 2.826 0 0 1-2.806-3.169 2.826 2.826 0 0 1 3.483-2.406 2.828 2.828 0 0 1-.677 5.575Zm-.79-3.356a.956.956 0 1 0 1.595 1.055.956.956 0 0 0-1.596-1.055Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="matrix(.0016 0 0 .0016 -.167 0)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default Success;
