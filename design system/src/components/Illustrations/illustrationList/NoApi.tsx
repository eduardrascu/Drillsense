import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const NoApi: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M141.906 32.744v94.225a5.562 5.562 0 0 1-5.569 5.559H29.291a5.568 5.568 0 0 1-5.563-5.559V32.744a5.566 5.566 0 0 1 5.563-5.556h107.046a5.566 5.566 0 0 1 5.569 5.556Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M141.903 32.744v6.828H23.731v-6.828a5.56 5.56 0 0 1 5.563-5.556H136.34a5.563 5.563 0 0 1 5.562 5.556Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M32.11 35.788a2.41 2.41 0 1 0 0-4.82 2.41 2.41 0 0 0 0 4.82ZM41.225 35.788a2.41 2.41 0 1 0 0-4.82 2.41 2.41 0 0 0 0 4.82Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M132.45 95.804c0 8.913-7.656 16.619-16.619 16.619H56.144C43.534 112.423 33 101.867 33 89.279a23.126 23.126 0 0 1 25.722-22.996 31.716 31.716 0 0 1 59.931 13.159 16.616 16.616 0 0 1 13.797 16.362Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M106.85 121.9a23.315 23.315 0 0 1-2.475 10.494H62.303a23.51 23.51 0 0 1 21.035-34.01A23.542 23.542 0 0 1 106.85 121.9Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="m59.778 91.247 6.697-20.553h3.2l6.694 20.553h-3.213l-5.081-15.61-5.084 15.61h-3.213Z"
      />
      <path
        fill="url(#a)"
        d="m59.778 91.247 6.697-20.553h3.2l6.694 20.553h-3.213l-5.081-15.61-5.084 15.61h-3.213Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M80.372 70.694V91.25h3.066v-7.71h5.971a6.425 6.425 0 0 0 0-12.846h-9.037Zm3.066 9.793V73.75h5.971a3.368 3.368 0 1 1 0 6.737h-5.972Z"
      />
      <path
        fill="url(#b)"
        d="M80.372 70.694V91.25h3.066v-7.71h5.971a6.425 6.425 0 0 0 0-12.846h-9.037Zm3.066 9.793V73.75h5.971a3.368 3.368 0 1 1 0 6.737h-5.972Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M63.462 83.603h9.266v2.716h-9.265v-2.716Z"
      />
      <path fill="url(#c)" d="M63.462 83.603h9.266v2.716h-9.265v-2.716Z" />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M100.138 70.694h3.053v20.553h-3.053V70.694Z"
      />
      <path fill="url(#d)" d="M100.138 70.694h3.053v20.553h-3.053V70.694Z" />
      <path
        fill={theme.colors.neutral.background.active}
        d="m16.36 21.144 1.325-1.326 3.8 3.8-1.325 1.326-3.8-3.8ZM24.322 16.09h1.875v5.376h-1.875V16.09ZM12.49 27.45h5.376v1.875H12.49V27.45ZM134.422 140.841h-1.875v-1.875h1.875v1.875Zm3.228-.085-.213-1.875a12.016 12.016 0 0 0 1.704-.312l.484 1.809c-.648.176-1.308.303-1.975.378Zm5.078-1.634-.912-1.622c.504-.285.987-.604 1.447-.956l1.146 1.481c-.532.407-1.094.773-1.681 1.097Zm4.063-3.466-1.478-1.159c.357-.455.68-.936.968-1.438l1.628.938a13.106 13.106 0 0 1-1.125 1.659h.007Zm2.412-4.756-1.806-.503c.154-.558.266-1.126.334-1.7l1.875.228a13.71 13.71 0 0 1-.409 1.975h.006Zm.485-5.209h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M136.341 133.469H29.291a6.506 6.506 0 0 1-6.5-6.5V32.744a6.506 6.506 0 0 1 6.5-6.494h107.05a6.507 6.507 0 0 1 6.5 6.5v94.219a6.507 6.507 0 0 1-6.5 6.5ZM29.291 28.125a4.631 4.631 0 0 0-4.625 4.625v94.219a4.63 4.63 0 0 0 4.625 4.625h107.05a4.632 4.632 0 0 0 4.625-4.625V32.744a4.634 4.634 0 0 0-4.625-4.619H29.291Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M83.338 140.516c10.282 0 18.618-8.336 18.618-18.619s-8.336-18.619-18.618-18.619c-10.283 0-18.62 8.336-18.62 18.619s8.337 18.619 18.62 18.619Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M85.105 126h-4.207c0-1.376.339-2.731.986-3.956a8.784 8.784 0 0 1 2.739-3.089c.389-.27.7-.632.902-1.052a2.633 2.633 0 0 0-.202-2.64 2.772 2.772 0 0 0-1.054-.912 2.871 2.871 0 0 0-2.734.097 2.74 2.74 0 0 0-.981.985 2.635 2.635 0 0 0-.358 1.323H76a6.602 6.602 0 0 1 .902-3.309 6.882 6.882 0 0 1 2.46-2.46 7.193 7.193 0 0 1 6.84-.237 6.922 6.922 0 0 1 2.634 2.283 6.582 6.582 0 0 1 .508 6.604 6.829 6.829 0 0 1-2.257 2.635 4.663 4.663 0 0 0-1.454 1.634 4.495 4.495 0 0 0-.528 2.094Z"
      />
      <path
        fill="url(#e)"
        d="M85.105 126h-4.207c0-1.376.339-2.731.986-3.956a8.784 8.784 0 0 1 2.739-3.089c.389-.27.7-.632.902-1.052a2.633 2.633 0 0 0-.202-2.64 2.772 2.772 0 0 0-1.054-.912 2.871 2.871 0 0 0-2.734.097 2.74 2.74 0 0 0-.981.985 2.635 2.635 0 0 0-.358 1.323H76a6.602 6.602 0 0 1 .902-3.309 6.882 6.882 0 0 1 2.46-2.46 7.193 7.193 0 0 1 6.84-.237 6.922 6.922 0 0 1 2.634 2.283 6.582 6.582 0 0 1 .508 6.604 6.829 6.829 0 0 1-2.257 2.635 4.663 4.663 0 0 0-1.454 1.634 4.495 4.495 0 0 0-.528 2.094Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M81 130h4v4h-4v-4Z"
      />
      <path fill="url(#f)" d="M81 130h4v4h-4v-4Z" />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M83.338 141.453a19.555 19.555 0 1 1 19.556-19.556 19.578 19.578 0 0 1-19.556 19.556Zm0-37.237a17.683 17.683 0 0 0-12.503 30.183 17.677 17.677 0 0 0 19.269 3.833 17.677 17.677 0 0 0 10.915-16.335 17.702 17.702 0 0 0-17.681-17.681Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M13.975 133.547a3.658 3.658 0 0 1-3.31-2.092 3.66 3.66 0 0 1 4.184-5.127 3.662 3.662 0 0 1 2.68 4.43 3.663 3.663 0 0 1-1.985 2.433 3.67 3.67 0 0 1-1.569.356Zm0-5.453a1.781 1.781 0 0 0-1.534.87 1.786 1.786 0 0 0 2.344 2.511 1.791 1.791 0 0 0 .976-1.511 1.79 1.79 0 0 0-.868-1.617 1.787 1.787 0 0 0-.918-.253ZM26.728 144.847a2.826 2.826 0 0 1-2.806-3.169 2.826 2.826 0 0 1 3.483-2.406 2.828 2.828 0 0 1-.677 5.575Zm-.79-3.356a.956.956 0 1 0 1.595 1.055.956.956 0 0 0-1.596-1.055Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#g" transform="matrix(.0012 0 0 .00253 0 -.292)" />
        </pattern>
        <pattern
          id="b"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#g" transform="matrix(.0012 0 0 .00253 0 -.292)" />
        </pattern>
        <pattern
          id="c"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#g" transform="matrix(.0012 0 0 .00253 0 -.292)" />
        </pattern>
        <pattern
          id="d"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#g" transform="matrix(.0012 0 0 .00253 0 -.292)" />
        </pattern>
        <pattern
          id="e"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#g" transform="matrix(.00274 0 0 .0016 -.643 0)" />
        </pattern>
        <pattern
          id="f"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#g" transform="matrix(.00274 0 0 .0016 -.643 0)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default NoApi;
