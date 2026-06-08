import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

const EmptyImage: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M7.697 19.485h144.046v120.51H7.697V19.485Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M7.693 19.488h144.05V140H7.693V19.489Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M7.693 19.488h144.05V140H7.693V19.489Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M16.885 29.331h124.869v85.957H16.884V29.331Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="m142.478 92.017-40.991-40.99-32.282 32.277-21.012-21.013L16.885 93.6v21.69h125.593V92.017Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M68.68 57.204a8.67 8.67 0 1 0 0-17.34 8.67 8.67 0 0 0 0 17.34Z"
      />
      <path
        fill="url(#a)"
        d="M68.68 57.204a8.67 8.67 0 1 0 0-17.34 8.67 8.67 0 0 0 0 17.34Z"
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

export default EmptyImage;
