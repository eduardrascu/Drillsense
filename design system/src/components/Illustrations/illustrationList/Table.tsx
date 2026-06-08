import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const Table: FC<SVGProps<SVGSVGElement>> = ({
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
        d="m130.668 22.77 4.204-4.204 1.326 1.325-4.204 4.205-1.326-1.326ZM125.506 14.356h1.875v5.947h-1.875v-5.947ZM134.625 27.028h5.947v1.875h-5.947v-1.875ZM93.456 137.097a3.559 3.559 0 0 1-3.51-4.106 3.553 3.553 0 0 1 4.597-2.837 3.555 3.555 0 0 1-1.087 6.943Zm-1.312-4.597a1.678 1.678 0 0 0 .144 2.251 1.68 1.68 0 1 0-.144-2.251ZM104.147 144.131a2.752 2.752 0 0 1 .963-2.414 2.743 2.743 0 0 1 2.542-.54 2.748 2.748 0 0 1 1.944 3.152 2.75 2.75 0 0 1-.559 1.218 2.742 2.742 0 0 1-2.922.939 2.747 2.747 0 0 1-1.968-2.355Zm1.875-.209a.886.886 0 0 0 .63.75.876.876 0 0 0 .934-.295.886.886 0 0 0 .084-.976.885.885 0 0 0-.87-.451.885.885 0 0 0-.778.972ZM12.188 50.563h-1.876v-1.876h1.876v1.876Zm0-5h-1.876v-1.876h1.876v1.876Zm0-5h-1.876v-1.876h1.876v1.876Zm0-5h-1.876v-1.876h1.876v1.876Zm0-5h-1.876c-.013-.682.04-1.364.16-2.035l1.844.335a8.851 8.851 0 0 0-.129 1.7Zm1.09-4.313-1.622-.938c.346-.596.752-1.155 1.213-1.668l1.397 1.25a8.177 8.177 0 0 0-.988 1.356Zm3.178-3.078-.89-1.653c.609-.326 1.25-.59 1.912-.785l.528 1.8a7.884 7.884 0 0 0-1.55.635v.003Zm6.25-.966h-1.875v-1.875h1.875v1.875Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M17.628 27.966H128.37v12.396H17.629V27.966Z"
      />
      <path
        fill={theme.colors.neutral.background.default}
        d="M17.628 40.362h27.684v82.691H17.628v-82.69Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M45.313 40.362h27.684v82.691H45.313v-82.69Z"
      />
      <path
        fill={theme.colors.neutral.background.default}
        d="M73 40.362h27.684v82.691H73v-82.69Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M100.684 40.362h27.685v82.691h-27.685v-82.69Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M100.684 40.36h27.688v82.693h-27.688V40.359Z"
      />
      <path
        fill={theme.colors.neutral.background.default}
        d="M17.628 40.362h27.684v11.325H17.628V40.362ZM45.313 40.362h27.684v11.325H45.313V40.362ZM73 40.362h27.684v11.325H73V40.362ZM100.684 40.362h27.685v11.325h-27.685V40.362Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M46.25 52.625H16.69v-13.2h29.56v13.2ZM18.566 50.75h25.809V41.3h-25.81v9.45Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M73.938 52.625H44.374v-13.2h29.563v13.2ZM46.25 50.75h25.813V41.3H46.25v9.45Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M101.622 52.625h-29.56v-13.2h29.56v13.2ZM73.938 50.75h25.809V41.3h-25.81v9.45Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M129.306 52.625h-29.56v-13.2h29.56v13.2Zm-27.684-1.875h25.809V41.3h-25.809v9.45Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M26.65 60.569h10.31v5.622H26.65v-5.622ZM81.353 60.569h10.31v5.622h-10.31v-5.622ZM108.706 60.569h10.31v5.622h-10.31v-5.622ZM54 76.034h10.31v5.622H54v-5.622ZM81.353 76.034h10.31v5.622h-10.31v-5.622ZM108.706 76.034h10.31v5.622h-10.31v-5.622ZM26.65 91.497h10.31v5.622H26.65v-5.622ZM54 91.497h10.31v5.622H54v-5.622ZM108.706 91.497h10.31v5.622h-10.31v-5.622ZM26.65 106.962h10.31v5.622H26.65v-5.622ZM54 106.962h10.31v5.622H54v-5.622ZM81.353 106.962h10.31v5.622h-10.31v-5.622Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M128.372 97.813v25.228h-25.228a25.25 25.25 0 0 1 25.228-25.228Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M129.306 123.991H16.691V27.028h112.615v96.963Zm-110.74-1.875H127.43V28.903H18.566v93.213Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M128.369 143.434c11.256 0 20.381-9.125 20.381-20.381s-9.125-20.381-20.381-20.381c-11.257 0-20.382 9.125-20.382 20.381s9.125 20.381 20.382 20.381Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M128.369 143.434c11.256 0 20.381-9.125 20.381-20.381s-9.125-20.381-20.381-20.381c-11.257 0-20.382 9.125-20.382 20.381s9.125 20.381 20.382 20.381Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M128.369 144.375a21.314 21.314 0 0 1-19.696-13.16 21.318 21.318 0 1 1 41.015-8.162 21.34 21.34 0 0 1-21.319 21.322Zm0-40.759a19.44 19.44 0 0 0-17.965 12.004 19.445 19.445 0 0 0 34.135 18.237 19.442 19.442 0 0 0 3.273-10.804 19.462 19.462 0 0 0-19.443-19.441v.004Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M136.284 112.566v20.975h-11.012l-4.819-4.697v-16.278h15.831Z"
      />
      <path
        fill="url(#a)"
        d="M136.284 112.566v20.975h-11.012l-4.819-4.697v-16.278h15.831Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M122.144 127.694h4.4v4.178l-4.4-4.178Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="matrix(.00212 0 0 .0016 -.384 0)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default Table;
