import styled, { keyframes, css } from 'styled-components';
import { space } from '../../themes';
import { SpinnerSizeType } from './index';

export const spinnerSize = {
  xs: `${space['16px']}`,
  sm: `${space['24px']}`,
  md: `${space['32px']}`,
  lg: `${space['40px']}`,
  xl: `${space['56px']}`,
};

export const spinnerBorderSize = {
  xs: `${space['2px']}`,
  sm: `${space['2px']}`,
  md: `${space['2px']}`,
  lg: `${space['4px']}`,
  xl: `${space['4px']}`,
};

export const dotSize = {
  xs: `${space['2px']}`,
  sm: `${space['2px']}`,
  md: `${space['2px']}`,
  lg: `${space['4px']}`,
  xl: `${space['4px']}`,
};

const Spinner = keyframes`
  0% {
		transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const SpinnerBox = styled.div`
  position: relative;
`;

export const SpinnerLoading = styled.div<{ $size: SpinnerSizeType }>`
  ${({ $size, theme }) => {
    const size =
      parseInt(spinnerSize[$size]) - parseInt(spinnerBorderSize[$size]);

    return css`
      width: ${size}px;
      height: ${size}px;
      border: ${spinnerBorderSize[$size]} solid
        ${theme.colors.neutral.background.transparent.strong};
      border-top: ${spinnerBorderSize[$size]} solid
        ${theme.colors.neutral.background.baseInverted};
      border-right: ${spinnerBorderSize[$size]} solid
        ${theme.colors.neutral.background.baseInverted};
      border-radius: 50%;
      animation: 1.5s ${Spinner} linear infinite;
    `;
  }}
`;

export const DotsAnimation = keyframes`
	0%, 80%, 100% {
		transform: scale(0.9);
		opacity: 1;
	}
	40% {
		transform: scale(1.2);
		opacity: 0.3;
	}
`;

export const SpinnerDots = styled.div<{ $size: SpinnerSizeType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  & > div {
    width: ${({ $size }) => dotSize[$size]};
    height: ${({ $size }) => dotSize[$size]};
    border-radius: 50%;
    background-color: ${({ theme }) =>
      theme.colors.primary.background.strongest};
    animation: ${DotsAnimation} 1.4s infinite ease-in-out;
  }

  div:nth-child(1) {
    animation-delay: 0s;
  }
  div:nth-child(2) {
    animation-delay: 0.2s;
  }
  div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const SpinnerFinishBox = styled.div<{ $size: SpinnerSizeType }>`
  ${({ $size, theme }) => {
    const size =
      parseInt(spinnerSize[$size]) - parseInt(spinnerBorderSize[$size]);

    return css`
      width: ${size}px;
      height: ${size}px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.primary.border.default};
      background-color: ${({ theme }) =>
        theme.colors.primary.background.default};
      color: ${theme.colors.primary.icon.default};
      border-radius: 50%;

      svg {
        color: ${theme.colors.primary.icon.default};
      }
    `;
  }}
`;
