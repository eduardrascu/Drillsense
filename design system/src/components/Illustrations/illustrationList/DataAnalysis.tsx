import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

const DataAnalysis: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M132.277 41.54v69.198a3.54 3.54 0 0 1-3.468 3.615c-22.419 0 .953 0-107.597.044a3.544 3.544 0 0 1-3.544-3.541V41.481c.075-1.83 1.544-3.503 3.497-3.503 114 0 107.647-.022 108.09.04a3.593 3.593 0 0 1 3.022 3.523Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M23.898 44.219h102.513v55.565H23.898V44.22Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M67.952 66.916h-14.96l-2.215-2.228H38.405l-3.528 3.528v22.343h40.66V74.5c-2.76-2.756-1.32-1.316-7.585-7.584Z"
      />
      <path
        fill="url(#a)"
        d="M67.952 66.916h-14.96l-2.215-2.228H38.405l-3.528 3.528v22.343h40.66V74.5c-2.76-2.756-1.32-1.316-7.585-7.584Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M88.202 114.356H61.83l.016 14.544h26.356v-14.544Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="m91.127 134.666-32.188.034a2.899 2.899 0 1 1 0-5.8h32.188a2.886 2.886 0 0 1 0 5.766Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M58.931 135.625a3.836 3.836 0 1 1 0-7.675H91.12a3.826 3.826 0 0 1 3.712 3.821 3.821 3.821 0 0 1-3.712 3.82l-32.188.034Zm0-5.8a1.963 1.963 0 0 0 0 3.925l32.188-.034a1.957 1.957 0 0 0 1.427-.542 1.94 1.94 0 0 0 .442-2.167 1.94 1.94 0 0 0-1.1-1.057 1.957 1.957 0 0 0-.77-.125H58.932Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M61.83 114.356h26.372v7.507H61.84l-.01-7.507Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M37.643 133.744h76.318v1.875H37.643v-1.875ZM89.14 129.838H60.907v-16.419h28.247l-.016 16.419Zm-26.357-1.875h24.481v-12.669H62.772l.012 12.669Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M11.105 48.297v-1.875h1.875v1.875h-1.875Zm0-5v-1.875h1.875v1.875h-1.875Zm2.21-4.688-1.794-.54a9.87 9.87 0 0 1 .797-1.906l1.644.903a8.153 8.153 0 0 0-.65 1.537l.003.006Zm2.39-3.718-1.25-1.407a9.915 9.915 0 0 1 1.685-1.196l.922 1.63c-.486.275-.941.599-1.36.967l.004.006Zm3.982-1.9-.313-1.85a10.812 10.812 0 0 1 2.019-.135v1.875a9.108 9.108 0 0 0-1.706.11Zm4.84-.113v-1.875h1.875v1.875h-1.875Zm5 0v-1.875h1.875v1.875h-1.875Zm5 0v-1.875h1.875v1.875h-1.875Zm5 0v-1.875h1.875v1.875h-1.875ZM134.156 34.196l4.461-4.474 1.328 1.324-4.461 4.474-1.328-1.324ZM128.691 25.413h1.875v6.318h-1.875v-6.318ZM138.361 38.788h6.319v1.875h-6.319v-1.875Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M127.352 100.722H22.977v-57.44h104.375v57.44Zm-102.5-1.875h100.625v-53.69H24.852v53.69Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M69.596 84.066 64.18 78.65h-5.634l-1.972 1.972H44.208l-9.331 9.331v.619h40.66v-6.506h-5.941Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M80.392 76.769h-1.744v-1.875h1.744v1.875Zm-4.869 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M79.796 91.51H33.939V56.522h1.876v33.113h43.98v1.874Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M80.392 63.003h-1.744v-1.875h1.744v1.875Zm-4.869 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M95.688 52.953h20.218v4.644H95.687v-4.644Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M95.688 63.594h20.218v4.643H95.687v-4.643Z"
      />
      <path fill="url(#b)" d="M95.688 63.594h20.218v4.643H95.687v-4.643Z" />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M88.78 57.597a2.322 2.322 0 1 0 0-4.644 2.322 2.322 0 0 0 0 4.644Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M88.78 68.237a2.322 2.322 0 1 0 0-4.643 2.322 2.322 0 0 0 0 4.643Z"
      />
      <path
        fill="url(#c)"
        d="M88.78 68.237a2.322 2.322 0 1 0 0-4.643 2.322 2.322 0 0 0 0 4.643Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M87.219 75.831h28.687v15.64H87.219v-15.64Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M21.209 115.334a4.486 4.486 0 0 1-4.479-4.478V41.647c0-2.46 1.913-4.594 4.404-4.597h107.615a4.49 4.49 0 0 1 4.481 4.481v69.21a4.487 4.487 0 0 1-4.406 4.553l-107.615.04Zm-.072-76.409c-1.431 0-2.535 1.278-2.532 2.722v69.209a2.607 2.607 0 0 0 2.604 2.603l107.596-.04a2.616 2.616 0 0 0 2.535-2.678v-69.21a2.615 2.615 0 0 0-2.606-2.606H21.137Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="matrix(.0012 0 0 .00188 0 -.09)" />
        </pattern>
        <pattern
          id="b"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="matrix(.0012 0 0 .00521 0 -1.132)" />
        </pattern>
        <pattern
          id="c"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="matrix(.0016 0 0 .0016 -.167 0)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default DataAnalysis;
