import styled, { css } from 'styled-components';
import type { TSize } from '@src/types/common.types';
import {
  fontSizeInput,
  fontSizeInsideLabelWithValue,
  lineHeightInput,
  lineHeightInsideLabelWithValue,
  paddingWithValue,
} from '../Input/utils';

interface TextareaContainerProps {
  $size: TSize;
  $isShowLabel?: boolean;
  $insideLabel?: boolean;
  $hasError?: boolean;
}

export const topPositionInsideLabelWithValue = {
  lg: '4px',
  md: '4px',
  sm: '4px',
};

export const padding = {
  lg: '12px',
  md: '12px',
  sm: '12px',
};

export const paddingPlaceholder = {
  lg: '0px 12px',
  md: '0px 8px',
  sm: '0px 8px',
};

export const TextareaContainer = styled.div<TextareaContainerProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError
        ? theme.colors.system.error.border.default
        : theme.colors.neutral.border.weakest};
  border-radius: ${({ theme }) => theme.radii['sm']};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: ${({ $hasError, theme }) =>
      $hasError
        ? theme.colors.system.error.border.default
        : theme.colors.neutral.border.weak};
    background-color: ${({ theme }) =>
      theme.colors.neutral.background.transparent.weak};
  }

  &:focus-within {
    border-color: ${({ $hasError, theme }) =>
      $hasError
        ? theme.colors.system.error.border.default
        : theme.colors.primary.border.active};
    background-color: ${({ theme }) => theme.colors.neutral.background.base};
  }

  &[data-focus-method='keyboard']:focus-within {
    box-shadow: ${({ theme }) => theme.shadows['focus']};
    background-color: ${({ theme }) => theme.colors.neutral.background.base};
  }

  &[data-focus-method='mouse']:focus-within {
    background-color: ${({ theme }) => theme.colors.neutral.background.base};
  }
`;

export const Textarea = styled.textarea<{
  $hasLabel: boolean;
  $isShowLabel: boolean;
  $size: TSize;
  $hasError?: boolean;
}>`
  width: 100%;
  margin: 0;
  padding: ${({ $size, $hasLabel, $isShowLabel }) =>
    $hasLabel && $isShowLabel ? paddingWithValue[$size] : padding[$size]};
  font-family: inherit;
  font-size: ${({ theme, $size }) => theme.fontSizes[fontSizeInput[$size]]};
  line-height: ${({ theme, $size }) =>
    theme.lineHeights[lineHeightInput[$size]]};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  border: none;
  background: transparent;

  resize: vertical;
  box-sizing: border-box;

  &:hover,
  &:focus,
  &:active {
    border: none;
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.text.weak};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral.background.hover};
    color: ${({ theme }) => theme.colors.neutral.text.weaker};
    cursor: not-allowed;
  }
`;

export const TextareaPlaceholder = styled.label<{
  $size: TSize;
  $isShowLabel?: boolean;
  $hasError?: boolean;
  $hasLeftContent?: boolean;
  $hasValue?: boolean;
}>`
  font-family: inherit;
  font-size: ${({ theme, $size }) => theme.fontSizes[fontSizeInput[$size]]};
  line-height: ${({ theme, $size }) =>
    theme.lineHeights[lineHeightInput[$size]]};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  position: absolute;
  transition: all 0.3s ease;
  pointer-events: none;
  padding: ${({ $size, $hasValue }) =>
    $hasValue ? paddingPlaceholder[$size] : padding[$size]};

  ${({ $isShowLabel, $size, theme }) =>
    $isShowLabel
      ? css`
          font-size: ${theme.fontSizes[fontSizeInsideLabelWithValue[$size]]};
          line-height: ${theme.lineHeights[
            lineHeightInsideLabelWithValue[$size]
          ]};
          top: ${topPositionInsideLabelWithValue[$size]};
        `
      : css``};

  &::after {
    content: ${({ $hasError }) => ($hasError ? '" *"' : '""')};
    color: ${({ theme }) => theme.colors.system.error.text.default};
  }
`;
