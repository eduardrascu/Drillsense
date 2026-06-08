import styled, { css } from 'styled-components';
import { space } from '../../themes';
import { SpinnerSizeType } from '../Spinner/index';
import { spinnerSize } from '../Spinner/styles';

export const loaderStrokeSize = {
  xs: `${space['8px']}`,
  sm: `${space['8px']}`,
  md: `${space['6px']}`,
  lg: `${space['6px']}`,
  xl: `${space['6px']}`,
};

export const LoaderCircle = styled.div<{
  $size: SpinnerSizeType;
  $progress: number;
}>`
  ${({ $size, $progress, theme }) => {
    const strokeWidth = parseInt(loaderStrokeSize[$size]);
    const radius = 50 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (circumference * $progress) / 100;

    return css`
      width: ${spinnerSize[$size]};
      height: ${spinnerSize[$size]};
      position: relative;

      svg {
        transform: rotate(-90deg);
        width: 100%;
        height: 100%;

        & > circle:first-child {
          fill: none;
          stroke: ${theme.colors.neutral.background.transparent.strong};
          stroke-width: ${strokeWidth};
        }

        & > circle:last-child {
          fill: none;
          stroke: ${theme.colors.neutral.background.baseInverted};
          stroke-width: ${strokeWidth};
          stroke-dasharray: ${circumference};
          stroke-dashoffset: ${offset};
          transition: stroke-dashoffset 0.4s ease;
          stroke-linecap: round;
        }
      }
    `;
  }}
`;
