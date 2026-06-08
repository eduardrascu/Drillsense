import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const Relational: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M88.856 13.412h42.413V27.5H88.856V13.412Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M88.856 27.503h42.413V77.82H88.856V27.503Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M30.753 123.894h29.11v11.24h-29.11v-11.24Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M30.753 135.137h29.11v15.779h-29.11v-15.779Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M95.51 123.894h29.109v11.24h-29.11v-11.24Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M95.51 135.137h29.109v15.779h-29.11v-15.779Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M132.206 28.438H87.919V12.475h44.287v15.963Zm-42.412-1.875h40.537V14.35H89.794v12.213Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M132.206 78.75H87.919V26.562h44.287V78.75Zm-42.412-1.875h40.537V28.437H89.794v48.438Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M60.8 136.075H29.816V122.95H60.8v13.125ZM31.69 134.2h27.235v-9.375H31.691v9.375Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M60.8 151.85H29.816V134.2H60.8v17.65Zm-29.11-1.875h27.235v-13.9H31.691v13.9ZM125.553 136.075H94.572V122.95h30.981v13.125ZM96.447 134.2h27.231v-9.375H96.447v9.375Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M125.553 151.85H94.572V134.2h30.981v17.65Zm-29.106-1.875h27.231v-13.9H96.447v13.9Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M61.506 30.106a7.215 7.215 0 0 1-12.368-7.147 25.827 25.827 0 0 0-12.157 0 7.215 7.215 0 0 1-12.369 7.15 25.466 25.466 0 0 0-6.084 10.516 7.209 7.209 0 0 1 0 14.278 25.545 25.545 0 0 0 6.088 10.535 7.216 7.216 0 0 1 12.365 7.15c3.995.967 8.162.967 12.157 0a7.216 7.216 0 0 1 12.371-7.15 25.735 25.735 0 0 0 6.085-10.532 7.21 7.21 0 0 1 0-14.278 25.845 25.845 0 0 0-6.088-10.522Zm-18.437 27.5a9.95 9.95 0 0 1-9.844-9.834 9.838 9.838 0 0 1 9.84-9.844c5.338 0 9.844 4.506 9.844 9.838a9.838 9.838 0 0 1-9.85 9.853l.01-.013Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        fillRule="evenodd"
        d="M36.76 22.048a26.765 26.765 0 0 1 12.598 0l1.053.255-.403 1.005a6.279 6.279 0 0 0 10.761 6.219l.669-.85.747.782a26.783 26.783 0 0 1 6.308 10.904l.308 1.042-1.077.151a6.272 6.272 0 0 0 0 12.422l1.075.151-.306 1.041a26.672 26.672 0 0 1-6.306 10.915l-.748.783-.668-.852a6.278 6.278 0 0 0-10.764 6.22l.406 1.007-1.055.256a26.767 26.767 0 0 1-12.597 0l-1.053-.255.403-1.005a6.279 6.279 0 0 0-10.759-6.221l-.667.846-.746-.778a26.48 26.48 0 0 1-6.31-10.92l-.304-1.04 1.073-.151a6.272 6.272 0 0 0 0-12.422l-1.073-.15.303-1.04a26.402 26.402 0 0 1 6.308-10.903l.748-.778.666.848a6.278 6.278 0 0 0 10.761-6.22l-.404-1.007 1.054-.255Zm1.431 1.604A8.154 8.154 0 0 1 24.605 31.5a24.527 24.527 0 0 0-4.874 8.422 8.147 8.147 0 0 1 0 15.684 24.608 24.608 0 0 0 4.88 8.441 8.153 8.153 0 0 1 13.579 7.847c3.214.641 6.523.642 9.737 0a8.153 8.153 0 0 1 13.588-7.85 24.797 24.797 0 0 0 4.874-8.435 8.147 8.147 0 0 1-.002-15.683 24.907 24.907 0 0 0-4.876-8.427 8.153 8.153 0 0 1-13.582-7.847 24.891 24.891 0 0 0-9.738 0Zm4.874 15.214a8.902 8.902 0 0 0-8.902 8.9 9.012 9.012 0 0 0 8.916 8.903l.38.004a8.9 8.9 0 0 0 8.513-8.906v-.001c0-4.813-4.086-8.9-8.906-8.9Zm-1.752 19.518a10.888 10.888 0 0 1-9.025-10.601v-.01A10.775 10.775 0 0 1 43.066 36.99m-1.753 21.393-.127.17 1.872.002a10.776 10.776 0 0 0 10.789-10.792c-.001-5.849-4.927-10.773-10.781-10.773"
        clipRule="evenodd"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M81.175 48.712H79.3v-1.875h1.875v1.875Zm-5 0H74.3v-1.875h1.875v1.875ZM46.25 117.831h-1.875v-1.875h1.875v1.875Zm0-4.981-1.875-.038c.015-.689.1-1.374.253-2.046l1.828.418a8.257 8.257 0 0 0-.206 1.666Zm1.278-4.244-1.59-1.003a9.97 9.97 0 0 1 1.274-1.619l1.347 1.303a8.332 8.332 0 0 0-1.034 1.319h.003Zm3.29-2.981-.84-1.678a10.096 10.096 0 0 1 1.931-.728l.479 1.812a8.228 8.228 0 0 0-1.57.594Zm56.304-.869h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875ZM112.6 114.759h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="m134.556 82.772 1.326-1.326 4.64 4.64-1.326 1.325-4.64-4.64ZM138.678 75.756h6.563v1.875h-6.563v-1.875ZM129.291 85.722h1.875v6.562h-1.875v-6.562ZM41.916 97.447a4.329 4.329 0 1 1 .013-8.658 4.329 4.329 0 0 1-.013 8.658Zm0-6.778a2.453 2.453 0 1 0 .003 0h-.003ZM26.484 112.244a2.876 2.876 0 1 1 2.668-1.768 2.872 2.872 0 0 1-1.565 1.553c-.35.143-.724.216-1.103.215Zm0-3.875a1.002 1.002 0 0 0-.912.626 1.001 1.001 0 0 0 1.31 1.298 1.002 1.002 0 0 0 .541-1.306 1.006 1.006 0 0 0-.939-.618Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M37.072 141.081h16.475v3.891H37.072v-3.891Z"
      />
      <path fill="url(#a)" d="M37.072 141.081h16.475v3.891H37.072v-3.891Z" />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M101.825 141.081H118.3v3.891h-16.475v-3.891Z"
      />
      <path fill="url(#b)" d="M101.825 141.081H118.3v3.891h-16.475v-3.891Z" />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M97.94 37.519h24.632v3.89H97.941v-3.89Z"
      />
      <path fill="url(#c)" d="M97.94 37.519h24.632v3.89H97.941v-3.89Z" />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M97.94 50.716h24.632v3.89H97.941v-3.89Z"
      />
      <path fill="url(#d)" d="M97.94 50.716h24.632v3.89H97.941v-3.89Z" />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M97.94 63.91h24.632v3.89H97.941v-3.89Z"
      />
      <path fill="url(#e)" d="M97.94 63.91h24.632v3.89H97.941v-3.89Z" />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#f" transform="matrix(.0012 0 0 .00507 0 -1.087)" />
        </pattern>
        <pattern
          id="b"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#f" transform="matrix(.0012 0 0 .00507 0 -1.087)" />
        </pattern>
        <pattern
          id="c"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#f" transform="matrix(.0012 0 0 .00758 0 -1.873)" />
        </pattern>
        <pattern
          id="d"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#f" transform="matrix(.0012 0 0 .00758 0 -1.873)" />
        </pattern>
        <pattern
          id="e"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#f" transform="matrix(.0012 0 0 .00758 0 -1.873)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default Relational;
