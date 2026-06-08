import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const Loss: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M123.434 125.35h14.131v23.4h-14.131v-23.4Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M98.336 92.594h14.131v56.156H98.336V92.594Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M73.236 105.369h14.132v43.381H73.236v-43.381Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M48.137 74.3h14.131v74.45H48.137V74.3Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M23.04 89.31h14.13v59.44H23.04V89.31Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M138.503 149.687H122.5v-25.275h16.006l-.003 25.275Zm-14.128-1.875h12.256v-21.525h-12.256v21.525ZM113.402 149.687H97.398v-58.03h16.004v58.03Zm-14.129-1.875h12.254v-54.28H99.273v54.28ZM88.305 149.688H72.3v-45.257h16.006v45.257Zm-14.131-1.875H86.43v-41.507H74.174v41.507ZM63.206 149.687H47.187V73.362h16.007l.012 76.325Zm-14.144-1.875H61.32V75.237H49.062v72.575ZM38.123 149.687H22.102V88.372h16.021v61.315Zm-14.13-1.875h12.255V90.247H23.977l.015 57.565Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M147.315 149.687H11.746V43.457h1.875v104.355h133.694v1.875Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="m128.933 102.643 12.331-12.33v12.33h-12.331Z"
      />
      <path fill="url(#a)" d="m128.933 102.643 12.331-12.33v12.33h-12.331Z" />
      <path
        fill={theme.colors.primary.background.stronger}
        fillRule="evenodd"
        d="M44.264 59.165H66.62l21.772 18.888h32.578l17.606 17.609-4.42 4.419-15.775-15.778H86.06L64.288 65.415H46.852L34.84 77.425h-11.8v-6.25h9.211l12.013-12.01Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#b)"
        fillRule="evenodd"
        d="M44.264 59.165H66.62l21.772 18.888h32.578l17.606 17.609-4.42 4.419-15.775-15.778H86.06L64.288 65.415H46.852L34.84 77.425h-11.8v-6.25h9.211l12.013-12.01Z"
        clipRule="evenodd"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M45.433 48.034a3.643 3.643 0 1 1 2.69-6.11 3.628 3.628 0 0 1-2.69 6.11Zm0-5.412a1.769 1.769 0 1 0-.003 3.537 1.769 1.769 0 0 0 .003-3.537ZM28.749 60.172a2.812 2.812 0 1 1 4.153-3.792 2.812 2.812 0 0 1-4.153 3.792Zm2.075-2.847a.937.937 0 1 0 .012 0h-.012Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M146.286 135.809h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.85l1.875-.053v1.903Zm-2.572-4.409a5.657 5.657 0 0 0-.965-1.284l1.328-1.325a7.532 7.532 0 0 1 1.281 1.703l-1.644.906Zm-3.228-2.672a5.74 5.74 0 0 0-1.581-.275l.056-1.875a7.48 7.48 0 0 1 2.103.363l-.578 1.787Zm-4.687-.275h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M120.625 63.21C132.43 63.21 142 53.64 142 41.835s-9.57-21.375-21.375-21.375S99.25 30.03 99.25 41.835s9.57 21.375 21.375 21.375Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M120.624 64.144a22.313 22.313 0 1 1 22.31-22.31 22.341 22.341 0 0 1-22.31 22.31Zm0-42.747a20.437 20.437 0 1 0 20.435 20.437 20.464 20.464 0 0 0-20.435-20.437Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M129.632 33.207a3.524 3.524 0 0 1-6.097-1.02 3.521 3.521 0 0 1 .056-2.462c-1.95-.48-3.987-.48-5.937 0a3.522 3.522 0 0 1-6.038 3.485 12.477 12.477 0 0 0-2.966 5.14 3.519 3.519 0 0 1 3.02 3.486 3.52 3.52 0 0 1-3.02 3.486 12.612 12.612 0 0 0 2.969 5.14 3.52 3.52 0 0 1 6.038 3.479c1.95.48 3.987.48 5.937 0a3.525 3.525 0 0 1 3.937-4.763c.831.16 1.577.614 2.101 1.279a12.425 12.425 0 0 0 2.962-5.144 3.524 3.524 0 0 1-3.02-3.486 3.52 3.52 0 0 1 3.02-3.486 12.607 12.607 0 0 0-2.962-5.134Zm-6.7 12.621a4.615 4.615 0 0 1-6.674-2.511 4.614 4.614 0 0 1 6.406-5.621 4.611 4.611 0 0 1 .268 8.133Z"
      />
      <path
        fill="url(#c)"
        d="M129.632 33.207a3.524 3.524 0 0 1-6.097-1.02 3.521 3.521 0 0 1 .056-2.462c-1.95-.48-3.987-.48-5.937 0a3.522 3.522 0 0 1-6.038 3.485 12.477 12.477 0 0 0-2.966 5.14 3.519 3.519 0 0 1 3.02 3.486 3.52 3.52 0 0 1-3.02 3.486 12.612 12.612 0 0 0 2.969 5.14 3.52 3.52 0 0 1 6.038 3.479c1.95.48 3.987.48 5.937 0a3.525 3.525 0 0 1 3.937-4.763c.831.16 1.577.614 2.101 1.279a12.425 12.425 0 0 0 2.962-5.144 3.524 3.524 0 0 1-3.02-3.486 3.52 3.52 0 0 1 3.02-3.486 12.607 12.607 0 0 0-2.962-5.134Zm-6.7 12.621a4.615 4.615 0 0 1-6.674-2.511 4.614 4.614 0 0 1 6.406-5.621 4.611 4.611 0 0 1 .268 8.133Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="matrix(.0012 0 0 .00326 0 -.52)" />
        </pattern>
        <pattern
          id="b"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="matrix(.0012 0 0 .00326 0 -.52)" />
        </pattern>
        <pattern
          id="c"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="matrix(.00166 0 0 .0016 -.195 0)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default Loss;
