import styled, { css } from 'styled-components';
import { sizes } from '../../themes';
import type { TSize } from '../../types/common.types';
import { hexToOpaque } from '../../utils/getContrastColor';
import {
  fontSizeInput,
  fontSizeInsideLabelWithValue,
  lineHeightInput,
  lineHeightInsideLabelWithValue,
  paddingWithValue,
  topPositionInsideLabelWithValue,
  padding,
  paddingPlaceholder,
} from './utils';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.radii['xs']};
  position: relative;
`;

export const InputContainer = styled.div<{
  $size: TSize;
  $isShowLabel?: boolean;
  $insideLabel?: boolean;
  $hasError?: boolean;
}>`
  height: ${({ $size }) => sizes[$size]};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError
        ? theme.colors.system.error.border.default
        : theme.colors.neutral.border.weakest};
  border-radius: ${({ theme }) => theme.radii['sm']};
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

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

    input:-webkit-autofill {
      box-shadow: 0 0 0 1000px
        ${({ theme }) => theme.colors.neutral.background.base} inset !important;
      -webkit-text-fill-color: inherit !important;
    }
  }

  &[data-focus-method='mouse']:focus-within {
    background-color: ${({ theme }) => theme.colors.neutral.background.base};

    input:-webkit-autofill {
      box-shadow: 0 0 0 1000px
        ${({ theme }) => theme.colors.neutral.background.base} inset !important;
      -webkit-text-fill-color: inherit !important;
    }
  }
`;

export const Input = styled.input<{
  $hasLabel: boolean;
  $isShowLabel: boolean;
  $size: TSize;
  $hasError?: boolean;
  $isHover?: boolean;
}>`
  width: 100%;
  padding: ${({ $size, $hasLabel, $isShowLabel }) =>
    $hasLabel && $isShowLabel ? paddingWithValue[$size] : padding[$size]};
  margin: 0;
  font-size: ${({ theme, $size }) => theme.fontSizes[fontSizeInput[$size]]};
  line-height: ${({ theme, $size }) =>
    theme.lineHeights[lineHeightInput[$size]]};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  border: none;
  background: transparent;
  transition: all 0.3s ease;

  &:hover,
  &:focus,
  &:active {
    border: none;
    outline: none;
    box-shadow: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 1000px
      ${({ theme, $isHover }) =>
        $isHover
          ? hexToOpaque(theme.colors.neutral.background.transparent.weak)
          : theme.colors.neutral.background.base}
      inset !important;
    -webkit-text-fill-color: inherit !important;
  }

  &[type='number'] {
    -moz-appearance: textfield;
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

export const InputLabel = styled.label<{
  $size: TSize;
  $isRequired: boolean;
}>`
  margin-left: ${({ theme }) => theme.radii['xs']};
  font-size: ${({ theme, $size }) => theme.fontSizes[fontSizeInput[$size]]};
  line-height: ${({ theme, $size }) =>
    theme.lineHeights[lineHeightInput[$size]]};
  color: ${({ theme }) => theme.colors.neutral.text.weaker};

  &::after {
    content: ${({ $isRequired }) => ($isRequired ? '" *"' : '""')};
    color: ${({ theme }) => theme.colors.system.error.text.default};
  }
`;

export const InputPlaceholder = styled.label<{
  $size: TSize;
  $isShowLabel?: boolean;
  $hasError?: boolean;
  $hasLeftContent?: boolean;
  $hasValue?: boolean;
}>`
  font-size: ${({ theme, $size }) => theme.fontSizes[fontSizeInput[$size]]};
  line-height: ${({ theme, $size }) =>
    theme.lineHeights[lineHeightInput[$size]]};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  position: absolute;
  left: ${({ $hasLeftContent = false }) =>
    $hasLeftContent && 'calc(8px + 24px)'};
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
      : css`
          top: 50%;
          transform: translateY(-50%);
        `};

  &::after {
    content: ${({ $hasError }) => ($hasError ? '" *"' : '""')};
    color: ${({ theme }) => theme.colors.system.error.text.default};
  }
`;

export const NumberControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: auto;
`;

export const NumberControlButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 6px;
  padding: 0;
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral.icon};

  &:hover {
    svg path {
      fill: ${({ theme }) => theme.colors.components.input.icon.hover};
    }
  }
`;

export const InfoText = styled.div<{ $hasError?: boolean }>`
  display: flex;
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSizes['xs']};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  color: ${({ theme, $hasError }) =>
    $hasError
      ? theme.colors.system.error.text.default
      : theme.colors.components.input.text.weak};
  position: absolute;
  bottom: -18px;

  svg {
    color: ${({ theme, $hasError }) =>
      $hasError
        ? theme.colors.system.error.text.default
        : theme.colors.components.input.text.weak};
  }
`;

export const PasswordToggleButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:hover {
    svg path {
      fill: ${({ theme }) => theme.colors.components.input.icon.hover};
    }
  }
`;

export const LeftContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

export const IconCancelContainer = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const LineBox = styled.div`
  height: 50%;
  width: 1px;
  margin-right: 4px;
  background-color: ${({ theme }) => theme.colors.neutral.border.weaker};
`;

export const RightContentContainer = styled.div<{ $hasValue?: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 12px;
`;
