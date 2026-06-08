import { useTheme } from 'styled-components';

import { ScatterPlotPointFigureProps } from './ScatterPlot.types';

export const ScatterPlotPointFigure = ({
  index,
  fill,
}: ScatterPlotPointFigureProps) => {
  const theme = useTheme();

  switch (index) {
    case 1:
      return (
        <g>
          <path
            opacity="0.8"
            d="M6.75355 5L8.67678 3.07678L8.85355 2.9L8.67678 2.72322L7.27678 1.32322L7.1 1.14645L6.92322 1.32322L5 3.24645L3.07678 1.32322L2.9 1.14645L2.72322 1.32322L1.32322 2.72322L1.14645 2.9L1.32322 3.07678L3.24645 5L1.32322 6.92322L1.14645 7.1L1.32322 7.27678L2.72322 8.67678L2.9 8.85355L3.07678 8.67678L5 6.75355L6.92322 8.67678L7.1 8.85355L7.27678 8.67678L8.67678 7.27678L8.85355 7.1L8.67678 6.92322L6.75355 5Z"
            stroke={theme['neutralBackground']}
            strokeWidth="0.5"
          />
          <path
            d="M5 6.4L7.1 8.5L8.5 7.1L6.4 5L8.5 2.9L7.1 1.5L5 3.6L2.9 1.5L1.5 2.9L3.6 5L1.5 7.1L2.9 8.5L5 6.4Z"
            fill={fill}
          />
        </g>
      );

    case 2:
      return (
        <g>
          <circle
            cx="4"
            cy="4"
            r="3.75"
            stroke={theme['neutralBackground']}
            strokeWidth="0.5"
          />
          <circle cx="4" cy="4" r="3.5" fill={fill} />
          <circle cx="4" cy="4" r="1.5" fill={theme['neutralBackgroundBase']} />
        </g>
      );

    case 3:
      return (
        <g>
          <path
            d="M7.25 1V0.75H7L1 0.75H0.75L0.75 1L0.75 7V7.25H1H7H7.25V7L7.25 1Z"
            stroke={theme['neutralBackground']}
            strokeWidth="0.5"
          />
          <path d="M7 1L7 7H1L1 1L7 1Z" fill={fill} />
        </g>
      );

    case 4:
      return (
        <g>
          <path
            opacity="0.8"
            d="M5.17678 0.823223L5 0.646447L4.82322 0.823223L0.823223 4.82322L0.646447 5L0.823223 5.17678L4.82322 9.17678L5 9.35355L5.17678 9.17678L9.17678 5.17678L9.35355 5L9.17678 4.82322L5.17678 0.823223Z"
            stroke={theme['neutralBackground']}
            strokeWidth="0.5"
          />
          <path d="M5 1L9 5L5 9L1 5L5 1Z" fill={fill} />
        </g>
      );

    case 0:
    default:
      return (
        <g>
          <circle
            cx="4"
            cy="4"
            r="3.75"
            stroke={theme['neutralBackground']}
            strokeWidth="0.5"
          />
          <circle cx="4" cy="4" r="3.5" fill={fill} />
        </g>
      );
  }
};
