import styled, { css } from 'styled-components';
import { space } from '../../themes';
import { ProgressBarSizeType, ProgressBarType } from './index';

export const progressBarSize = {
  sm: `${space['4px']}`,
  md: `${space['8px']}`,
  lg: `${space['12px']}`,
};

export const ProgressBarContainer = styled.div`
  width: 100%;
`;

export const ProgressBarTitleBox = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProgressBarTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['s']};
  line-height: ${({ theme }) => theme.lineHeights['m']};
  font-weight: ${({ theme }) => theme.fontWeights['regular']};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

export const ProgressBarProgressPercent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['xs']};
  line-height: ${({ theme }) => theme.lineHeights['s']};
  font-weight: ${({ theme }) => theme.fontWeights['regular']};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

export const ProgressBarTrack = styled.div<{
  $type: ProgressBarType;
  $size: ProgressBarSizeType;
  $hasError?: boolean;
}>`
  width: 100%;
  height: ${({ $size }) => progressBarSize[$size]};
  border-radius: ${({ theme }) => theme.radii['rounded']};
  overflow: hidden;

  ${({ $type, $hasError, theme }) => {
    const backgroundColor = {
      default: theme.colors.neutral.background.transparent.strong,
      accent: theme.colors.neutral.background.transparent.strong,
      error: theme.colors.system.error.background.transparent,
    };

    return css`
      background-color: ${$hasError
        ? backgroundColor['error']
        : backgroundColor[$type]};
    `;
  }}
`;

export const ProgressBarFill = styled.div<{
  $progress: number;
  $type: ProgressBarType;
  $hasError?: boolean;
}>`
  height: 100%;
  width: ${({ $progress }) => `${$progress}%`};
  transition: width 0.3s ease-in-out;

  ${({ $type, $hasError, theme }) => {
    const backgroundColor = {
      default: theme.colors.neutral.background.baseInverted,
      accent: theme.colors.primary.background.strongest,
      error: theme.colors.system.error.background.default,
    };

    return css`
      background-color: ${$hasError
        ? backgroundColor['error']
        : backgroundColor[$type]};
    `;
  }}
`;

export const ProgressBarInfoText = styled.div<{
  $type: ProgressBarType;
  $hasError?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSizes['xs']};
  line-height: ${({ theme }) => theme.lineHeights['s']};
  font-weight: ${({ theme }) => theme.fontWeights['regular']};

  ${({ $type, $hasError, theme }) => {
    const backgroundColor = {
      default: theme.colors.neutral.background.baseInverted,
      accent: theme.colors.system.info.text.default,
      error: theme.colors.system.error.text.default,
    };

    return css`
      color: ${$hasError ? backgroundColor['error'] : backgroundColor[$type]};

      svg {
        color: ${$hasError ? backgroundColor['error'] : backgroundColor[$type]};
      }
    `;
  }}
`;
