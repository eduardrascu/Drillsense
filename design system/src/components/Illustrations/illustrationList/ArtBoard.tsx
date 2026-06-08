import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

const ArtBoard: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M42.019 48.04h82.568v82.569H42.019V48.041Z"
      />
      <path
        fill={theme.colors.neutral.background.default}
        d="M50.288 56.178h65.946v66.094H50.287V56.178ZM24.472 48.04h17.547v82.569H24.472V48.041ZM42.019 30.494h82.568v17.544H42.019V30.494Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M123.65 135.706h1.875v7.741h-1.875v-7.741ZM41.081 16.556h1.875v7.74h-1.875v-7.74ZM129.672 129.672h7.74v1.875h-7.74v-1.875ZM11.25 47.103h7.74v1.875h-7.74v-1.875Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M24.472 30.494h17.547V48.04H24.472V30.494Z"
      />
      <path fill="url(#a)" d="M24.472 30.494h17.547V48.04H24.472V30.494Z" />
      <path
        fill={theme.colors.neutral.border.default}
        d="M42.956 131.563H23.534v-84.46h19.422v84.46Zm-17.547-1.875h15.672v-80.71H25.41v80.71Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M42.956 48.978H23.534V29.556h19.422v19.422ZM25.41 47.103h15.672V31.431H25.41v15.672ZM36.928 56.36h5.09v1.874h-5.09V56.36ZM36.928 66.688h5.09v1.874h-5.09v-1.874ZM36.928 77.019h5.09v1.875h-5.09v-1.875ZM36.928 87.347h5.09v1.875h-5.09v-1.875ZM36.928 97.678h5.09v1.875h-5.09v-1.875ZM36.928 108.006h5.09v1.875h-5.09v-1.875ZM36.928 118.338h5.09v1.875h-5.09v-1.875ZM112.953 42.95h1.875v5.09h-1.875v-5.09ZM102.622 42.95h1.875v5.09h-1.875v-5.09ZM92.294 42.95h1.875v5.09h-1.875v-5.09ZM81.963 42.95h1.875v5.09h-1.875v-5.09ZM71.634 42.95h1.875v5.09h-1.875v-5.09ZM61.303 42.95h1.875v5.09h-1.875v-5.09ZM50.975 42.95h1.875v5.09h-1.875v-5.09ZM51.225 70.575H49.35V55.241h15.331v1.875H51.225v13.459ZM117.172 70.575h-1.875v-13.46h-13.46v-1.874h15.335v15.334ZM64.681 123.209H49.35v-15.331h1.875v13.456h13.456v1.875ZM117.172 123.209h-15.335v-1.875h13.46v-13.456h1.875v15.331Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M125.525 131.563H41.081v-84.46h84.444v84.46Zm-82.569-1.875h80.694v-80.71H42.956v80.71Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M124.588 30.494v22.16h-20.525a8.895 8.895 0 0 1-8.885-8.885V30.494h29.41Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M41.081 48.978V29.556h84.444v19.422H41.081Zm1.875-17.547v15.672h80.694V31.431H42.956Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M130.847 17.694h-26.781a4.272 4.272 0 0 0-4.272 4.272v21.803a4.272 4.272 0 0 0 4.272 4.272h26.781a4.272 4.272 0 0 0 4.272-4.272V21.966a4.272 4.272 0 0 0-4.272-4.272Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M130.85 48.978h-26.788a5.213 5.213 0 0 1-5.209-5.21V21.967a5.215 5.215 0 0 1 5.209-5.21h26.785a5.214 5.214 0 0 1 5.206 5.21v21.803a5.215 5.215 0 0 1-5.203 5.21Zm-26.788-30.347a3.335 3.335 0 0 0-3.334 3.335v21.803a3.342 3.342 0 0 0 3.334 3.334h26.785a3.34 3.34 0 0 0 3.331-3.334V21.966a3.337 3.337 0 0 0-3.331-3.335h-26.785Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M122.503 29.206a2.213 2.213 0 1 0 0-4.425 2.213 2.213 0 0 0 0 4.425Z"
      />
      <path
        fill="url(#b)"
        d="M122.503 29.206a2.213 2.213 0 1 0 0-4.425 2.213 2.213 0 0 0 0 4.425Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M131.95 35.366v8.403a1.104 1.104 0 0 1-1.1 1.103h-26.787a1.105 1.105 0 0 1-1.104-1.103v-8.485l9.229-9.212 10.581 10.581 5.237-5.24 3.944 3.953Z"
      />
      <path
        fill="url(#c)"
        d="M131.95 35.366v8.403a1.104 1.104 0 0 1-1.1 1.103h-26.787a1.105 1.105 0 0 1-1.104-1.103v-8.485l9.229-9.212 10.581 10.581 5.237-5.24 3.944 3.953Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M52.778 137.984h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5.19-.172a6.985 6.985 0 0 1-2.013-.793l.956-1.616c.454.269.948.464 1.463.578l-.407 1.831Zm-4.51-3.337a6.757 6.757 0 0 1-.753-2.028l1.84-.366c.103.517.287 1.015.544 1.475l-1.63.919Zm.985-5.328h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875ZM145.878 45.938a3.804 3.804 0 0 1-3.791-4.087 3.803 3.803 0 0 1 2.307-3.223 3.806 3.806 0 1 1 1.484 7.31Zm-1.728-4.66a1.926 1.926 0 0 0 .714 2.495 1.934 1.934 0 0 0 2.553-.469 1.929 1.929 0 1 0-3.267-2.02v-.006ZM131.95 58.497a2.71 2.71 0 0 1 .774-2.914 2.711 2.711 0 1 1-.774 2.914Zm1.775-.606a.837.837 0 0 0 .579.542.842.842 0 0 0 1.004-.518.835.835 0 0 0-.417-1.05.843.843 0 0 0-1.182.538.842.842 0 0 0 .016.488Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="matrix(.0016 0 0 .0016 -.167 0)" />
        </pattern>
        <pattern
          id="b"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="matrix(.0016 0 0 .0016 -.167 0)" />
        </pattern>
        <pattern
          id="c"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="matrix(.0012 0 0 .00185 0 -.078)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default ArtBoard;
