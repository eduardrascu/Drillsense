import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const PaperPlane: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M35.294 127.588a14.293 14.293 0 0 1-10.107-24.401A14.293 14.293 0 0 1 35.293 99H46.23v5.759H35.294a8.537 8.537 0 0 0-8.535 8.535 8.533 8.533 0 0 0 8.535 8.534H89v5.76H35.294Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M127.519 35.675 62.034 69.988 41.931 56.283l84.613-21.034.975.425ZM128.641 36.181 99.919 99.144l-23.572-18.8 51.372-44.581.922.418Z"
      />
      <path
        fill={theme.colors.neutral.background.default}
        d="M127.719 35.763c-56.694 49.2-51.003 44.268-52.235 45.312l-12.612 18.84h-.838V69.988l65.485-34.312.2.088Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M63.331 99.912 84.078 86.51l-7.731-6.165-.863.731L62.87 99.912h.462Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M61.972 71.081 39.675 55.875l86.95-21.612 3.062 1.334L61.972 71.08ZM44.187 56.687l17.907 12.21 60.497-31.7-78.403 19.49Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="m100.272 100.628-25.39-20.256c1.493-1.297 51.277-44.497 52.677-45.713l2.325 1.06-29.612 64.909Zm-22.46-20.312 21.75 17.35L126.92 37.7 77.813 80.316Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M63.372 100.85h-2.275V69.422l66.384-34.797 1.972.866-53.262 46.212-12.82 19.147Zm-.4-30.287v27.521l11.81-17.634c1.374-1.166-4.166 3.631 46.812-40.606L62.972 70.562Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M115.197 145.425c11.935 0 21.61-9.675 21.61-21.609 0-11.935-9.675-21.61-21.61-21.61-11.934 0-21.61 9.675-21.61 21.61 0 11.934 9.676 21.609 21.61 21.609Z"
      />
      <path
        fill="url(#a)"
        d="M115.197 145.425c11.935 0 21.61-9.675 21.61-21.609 0-11.935-9.675-21.61-21.61-21.61-11.934 0-21.61 9.675-21.61 21.61 0 11.934 9.676 21.609 21.61 21.609Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="m112.103 134.634-9.707-9.703 3.032-3.031 6.675 6.675 12.99-12.994 3.032 3.031-16.022 16.022Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M121.025 89.213a3.699 3.699 0 1 1 6.469-2.207 3.714 3.714 0 0 1-2.503 3.249 3.708 3.708 0 0 1-3.966-1.042Zm2.781-4.27a1.824 1.824 0 1 0 1.713 1.21 1.827 1.827 0 0 0-1.713-1.21ZM140.353 99.969a2.853 2.853 0 0 1-2.847-3.04 2.859 2.859 0 0 1 3.522-2.593 2.86 2.86 0 0 1 2.143 2.29 2.856 2.856 0 0 1-2.818 3.343Zm-.978-2.906a.983.983 0 0 0 .82 1.032.984.984 0 0 0 .876-.299.977.977 0 0 0 .238-.894.988.988 0 0 0-1.273-.71.98.98 0 0 0-.661.87ZM30.932 48.867l1.325-1.325 3.995 3.994-1.326 1.326-3.994-3.995ZM26.984 55.919h5.65v1.875h-5.65v-1.875ZM38.975 43.434h1.875v5.65h-1.875v-5.65ZM63.331 99.912 84.078 86.51l-7.731-6.165-.863.731L62.87 99.912h.462Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M63.606 100.85h-2.5L74.77 80.444l1.562-1.316 9.356 7.463-22.08 14.259Zm2.219-3.662 16.65-10.757-6.1-4.875c-.272.222.603-1.025-10.55 15.632Z"
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

export default PaperPlane;
