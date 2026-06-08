import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const Report: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M121.959 29.572v109.847H34.637V18.459h76.212l11.11 11.113Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="m45.027 78.828 30.27-30.972L97.52 70.081l11.872-11.872v23.65H45.027v-3.03Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M121.959 29.572v5.8h-16.838V18.459h5.728l11.11 11.113Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M121.959 29.572v.769h-11.807V18.459h.697l11.11 11.113Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M122.896 140.356H33.699V17.522h77.535l11.656 11.662.006 111.172Zm-87.322-1.875h85.447V29.963l-10.559-10.566H35.574V138.48Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M122.896 31.278h-13.681v-13.75h2.019l11.656 11.663.006 2.087Zm-11.806-1.875h9.375l-9.375-9.375v9.375Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M43.867 113.628a16.09 16.09 0 0 0 16.091 16.091v-7.435a8.651 8.651 0 0 1-8.82-8.654 8.658 8.658 0 0 1 8.82-8.655v-7.431a16.09 16.09 0 0 0-16.09 16.084Z"
      />
      <path
        fill="url(#a)"
        d="M43.867 113.628a16.09 16.09 0 0 0 16.091 16.091v-7.435a8.651 8.651 0 0 1-8.82-8.654 8.658 8.658 0 0 1 8.82-8.655v-7.431a16.09 16.09 0 0 0-16.09 16.084Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="m64.357 121.087 3.75 6.413a16.072 16.072 0 0 0 7.925-13.863h-7.421a8.64 8.64 0 0 1-4.254 7.45Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M68.61 113.631h7.434a16.087 16.087 0 0 0-16.087-16.087v7.431a8.658 8.658 0 0 1 8.653 8.656Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M84.027 97.544h6.629v6.628h-6.629v-6.628Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M84.027 110.319h6.629v6.628h-6.629v-6.628Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M84.027 123.091h6.629v6.628h-6.629v-6.628Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M60.895 130.656h-.938a17.031 17.031 0 1 1 0-34.062h.938v9.306h-.938a7.722 7.722 0 0 0-7.272 4.728 7.715 7.715 0 0 0 4.27 10.164 7.704 7.704 0 0 0 3.002.542h.938v9.322Zm-1.876-32.147a15.15 15.15 0 0 0 0 30.244v-5.575a9.592 9.592 0 0 1-6.174-15.994 9.598 9.598 0 0 1 6.175-3.103v-5.572ZM67.795 128.778l-4.719-8.022.806-.478a7.733 7.733 0 0 0 3.8-6.647v-.937h9.3v.937a17.11 17.11 0 0 1-8.387 14.672l-.8.475Zm-2.188-7.397 2.829 4.803a15.241 15.241 0 0 0 6.643-11.615h-5.575a9.662 9.662 0 0 1-3.897 6.812Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M67.673 114.569v-.988a7.724 7.724 0 0 0-7.716-7.668h-.938v-9.307h.938a17.044 17.044 0 0 1 17.025 17.022v.938c-1.31.003.088.003-9.31.003Zm1.83-1.875h5.576a15.173 15.173 0 0 0-14.184-14.185v5.572a9.61 9.61 0 0 1 8.609 8.613ZM91.591 105.109h-8.503v-8.503h8.503v8.503Zm-6.628-1.875h4.753v-4.753h-4.753v4.753ZM91.591 117.881h-8.503v-8.506h8.503v8.506Zm-6.628-1.875h4.753v-4.756h-4.753v4.756ZM91.591 130.656h-8.503v-8.503h8.503v8.503Zm-6.628-1.875h4.753v-4.753h-4.753v4.753ZM96.53 99.922h15.493v1.875H96.529v-1.875ZM96.53 112.694h15.493v1.875H96.529v-1.875ZM96.53 125.466h15.493v1.875H96.529v-1.875ZM112.026 82.797H44.092V32.603h1.875v48.319h66.059v1.875Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="m126.77 28.21 3.956 3.953-33.11 33.109-22.321-22.325-22.14 22.14v9.816l22.14-22.14 22.322 22.321 38.015-38.012 4.022 4.022V28.209H126.77Z"
      />
      <path
        fill="url(#b)"
        d="m126.77 28.21 3.956 3.953-33.11 33.109-22.321-22.325-22.14 22.14v9.816l22.14-22.14 22.322 22.321 38.015-38.012 4.022 4.022V28.209H126.77Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M129.352 112.759h5.434v1.875h-5.434v-1.875ZM127.508 107.854l3.842-3.842 1.326 1.325-3.843 3.842-1.325-1.325ZM127.846 119.411l1.325-1.325 3.842 3.842-1.325 1.325-3.842-3.842ZM28.883 30.625h-1.875V28.75h1.875v1.875Zm0-5h-1.875V23.75h1.875v1.875Zm0-5h-1.875V18.75h1.875v1.875Zm.431-4.59-1.74-.694a7.938 7.938 0 0 1 1.037-1.844l1.497 1.125a6.228 6.228 0 0 0-.794 1.425v-.013Zm2.856-3.144-.875-1.66a7.928 7.928 0 0 1 1.991-.728l.406 1.828a6.186 6.186 0 0 0-1.522.56Zm6.291-.704h-1.875v-1.874h1.875v1.874ZM23.33 135.806a3.33 3.33 0 1 1 .003-6.662 3.33 3.33 0 0 1-.003 6.662Zm0-4.784a1.451 1.451 0 0 0-1.086.483 1.464 1.464 0 0 0-.364 1.132 1.456 1.456 0 1 0 1.45-1.615ZM37.404 149.688a2.596 2.596 0 0 1-2.569-3.002 2.6 2.6 0 0 1 5.154.114 2.602 2.602 0 0 1-2.585 2.888Zm0-3.322a.718.718 0 0 0-.718.803.728.728 0 0 0 .498.612.721.721 0 0 0 .763-.207.724.724 0 0 0-.543-1.208Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#c" transform="matrix(.0032 0 0 .0016 -.834 0)" />
        </pattern>
        <pattern
          id="b"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#c" transform="matrix(.0012 0 0 .00221 0 -.192)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default Report;
