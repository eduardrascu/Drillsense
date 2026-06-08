import styled, { css } from 'styled-components';
import type { TSize } from '@src/types/common.types';

const getCorrectSize = (size: string) => {
  switch (size) {
    case 's':
      return 'sm';
    case 'm':
      return 'md';
    case 'l':
      return 'lg';
    default:
      return size;
  }
};

const getFontSize = (size: TSize) => {
  switch (size) {
    case 'xs':
    case 'sm':
      return 'xs';
    case 'md':
    case 'lg':
      return 's';
    default:
      return size;
  }
};
const getIconSize = (size: TSize) => {
  switch (size) {
    case 'xs':
    case 'sm':
      return 'm';
    case 'md':
    case 'lg':
      return 'xl';
    default:
      return size;
  }
};

const getLineHeight = (size: TSize) => {
  switch (size) {
    case 'xs':
    case 'sm':
      return 's';
    case 'md':
    case 'lg':
      return 'm';
    default:
      return size;
  }
};

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const CustomButton = styled.button<{
  $variant:
  | 'primary'
  | 'primary-gray'
  | 'primary-dark'
  | 'secondary'
  | 'secondary-gray'
  | 'tertiary'
  | 'ghost'
  | 'ghost-gray'
  | 'error'
  | 'empty';
  $size: TSize;
  $disabled?: boolean;
  $iconOnly?: boolean;
  $fullWidth?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  font-family: ${({ theme }) => theme['fontFamilies'].body};
  font-size: ${({ theme, $size }) => theme.fontSizes[getFontSize($size)]};
  line-height: ${({ theme, $size }) => theme.lineHeights[getLineHeight($size)]};
  font-weight: ${({ theme, $size }) =>
    $size === 'lg' ? 600 : theme.fontWeights.md};
  border-radius: ${({ theme }) =>
    theme.components.buttons.borderRadius.primary};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: ${({ theme, $size }) =>
    theme.components.buttons[getCorrectSize($size)].padding};

  ${({ $iconOnly, $size, $fullWidth }) =>
    $iconOnly &&
    css`
      aspect-ratio: 1/1;
      padding: 0;
      width: ${({ theme }) => ($fullWidth ? '100%' : theme.sizes[$size])};
      height: ${({ theme }) => theme.sizes[$size]};
    `}
  &:focus {
    /* This will be applied when the button is focused by any means */
    outline: none;
  }

  &:focus-visible {
    /* This will be applied when the button is focused by keyboard navigation (Tab) */
    box-shadow: ${({ theme }) => theme.shadows['focus']};
    outline: none;
  }

  ${({ theme, $variant, $disabled }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.components.button.background
            .primary};
          color: ${theme.colors.components.button.text.inverted};
          border: none;

          &:hover {
            background-color: ${theme.colors.components.button.background
            .primaryHover};
          }
          &:active {
            background-color: ${theme.colors.components.button.background
            .primaryActive};
          }
          ${$disabled &&
          css`
            background-color: ${theme.colors.neutral.background.transparent
              .weak};
            color: ${theme.colors.components.button.text.invertedDisabled};
            cursor: not-allowed;
            pointer-events: none;
          `}
        `;

      case 'primary-gray':
        return css`
          background-color: ${theme.colors.components.button.background
            .primaryGray};
          color: ${theme.colors.components.button.text.inverted};
          border: none;

          &:hover {
            background-color: ${theme.colors.components.button.background
            .primaryGrayHover};
          }
          &:active {
            background-color: ${theme.colors.components.button.background
            .primaryGrayActive};
          }
          ${$disabled &&
          css`
            background-color: ${theme.colors.neutral.background.transparent
              .weak};
            color: ${theme.colors.components.button.text.invertedDisabled};
            cursor: not-allowed;
            pointer-events: none;
          `}
        `;

      case 'primary-dark':
        return css`
          background-color: ${theme.colors.neutral.background.stronger};
          color: ${theme.colors.neutral.text.inverted.default};
          border: none;

          &:hover {
            background-color: ${theme.colors.neutral.background.strong};
          }
          &:active {
            background-color: ${theme.colors.components.button.background
            .primaryGrayActive};
          }
          ${$disabled &&
          css`
            background-color: ${theme.colors.neutral.background.transparent
              .weak};
            color: ${theme.colors.components.button.text.invertedDisabled};
            cursor: not-allowed;
            pointer-events: none;
          `}
        `;

      case 'secondary':
        return css`
          background-color: ${theme.colors.components.button.background
            .secondary};
          color: ${theme.colors.components.button.text.default};
          border: 1px solid ${theme.colors.components.button.border.default};

          &:hover {
            background-color: ${theme.colors.components.button.background
            .secondaryHover};
            border-color: ${theme.colors.components.button.border.hover};
          }
          &:active {
            background-color: ${theme.colors.components.button.background
            .secondaryActive};
            border-color: ${theme.colors.components.button.border.active};
          }
          ${$disabled &&
          css`
            background-color: ${theme.colors.neutral.background.transparent
              .weak};
            color: ${theme.colors.components.button.text.disabled};
            border-color: ${theme.colors.components.button.border.disabled};
            cursor: not-allowed;
            pointer-events: none;
          `}
        `;

      case 'secondary-gray':
        return css`
          background-color: ${theme.colors.neutral.background.default};
          color: ${theme.colors.neutral.text.default};
          border: 1px solid ${theme.colors.neutral.border.weaker};

          &:hover {
            background-color: ${theme.colors.neutral.background.hover};
          }
          &:active {
            background-color: ${theme.colors.neutral.background.active};
          }
          ${$disabled &&
          css`
            background-color: ${theme.colors.neutral.background.transparent
              .weak};
            color: ${theme.colors.components.button.text.disabled};
            border-color: ${theme.colors.neutral.border.weakest};
            cursor: not-allowed;
            pointer-events: none;
          `}
        `;

      case 'tertiary':
        return css`
          background-color: ${theme.colors.components.button.background
            .tertiary};
          color: ${theme.colors.components.button.text.default};
          border: 1px solid ${theme.colors.components.button.border.default};
          font-weight: 600;

          &:hover {
            background-color: ${theme.colors.components.button.background
            .tertiaryHover};
            border-color: ${theme.colors.components.button.border.hover};
          }
          &:active {
            background-color: ${theme.colors.components.button.background
            .tertiaryActive};
            border-color: ${theme.colors.components.button.border.active};
          }
          ${$disabled &&
          css`
            color: ${theme.colors.components.button.text.disabled};
            cursor: not-allowed;
            pointer-events: none;
          `}
        `;

      case 'ghost':
        return css`
          background-color: ${theme.colors.components.button.background.ghost};
          color: ${theme.colors.components.button.text.default};
          border: none;

          &:hover {
            background-color: ${theme.colors.components.button.background
            .secondaryHover};
          }
          &:active {
            background-color: ${theme.colors.components.button.background
            .secondaryActive};
          }
          ${$disabled &&
          css`
            color: ${theme.colors.components.button.text.disabled};
            cursor: not-allowed;
            pointer-events: none;
          `}
        `;

      case 'ghost-gray':
        return css`
          background-color: transparent;
          color: ${theme.colors.neutral.text.default};
          border: none;

          &:hover {
            background-color: ${theme.colors.components.button.background
            .secondaryGrayHover};
          }
          &:active {
            background-color: ${theme.colors.components.button.background
            .secondaryGrayActive};
          }
          ${$disabled &&
          css`
            color: ${theme.colors.components.button.text.disabled};
            cursor: not-allowed;
            pointer-events: none;
          `}
        `;

      case 'error':
        return css`
          background-color: ${theme.colors.components.button.background.error};
          color: ${theme.colors.components.button.text.inverted};
          border: none;

          &:hover {
            background-color: ${theme.colors.components.button.background
            .errorHover};
          }

          ${$disabled &&
          css`
            opacity: 0.6;
            cursor: not-allowed;
            pointer-events: none;
          `}
        `;

      case 'empty':
        return css`
          background-color: transparent;
          color: transparent;
          border: none;
          pointer-events: none;
        `;

      default:
        return css``;
    }
  }}
`;

export const IconWrapper = styled.div<{
  $size: TSize;
  $variant:
  | 'primary'
  | 'primary-gray'
  | 'primary-dark'
  | 'secondary'
  | 'secondary-gray'
  | 'tertiary'
  | 'ghost'
  | 'ghost-gray'
  | 'error'
  | 'empty';
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme, $size }) =>
    theme.components.buttons.sizes?.[getCorrectSize($size)]?.gap ||
    theme.spacing.xs};

  svg {
    width: ${({ theme, $size }) => theme.fontSizes[getIconSize($size)]};
    height: ${({ theme, $size }) => theme.fontSizes[getIconSize($size)]};
    path {
      ${({ theme, $variant, $disabled }) => {
    if ($disabled && $variant !== 'error') {
      return css`
            fill: ${theme.colors.components.button.text
          .invertedDisabled} !important;
          `;
    }

    switch ($variant) {
      case 'primary':
      case 'primary-gray':
      case 'primary-dark':
        return css`
              fill: ${theme.colors.components.button.icon.inverted};
            `;
      case 'error':
        return css`
              fill: ${theme.colors.components.button.icon.inverted};
            `;
      case 'secondary':
        return css`
              fill: ${theme.colors.components.button.icon.default};
            `;
      case 'secondary-gray':
        return css`
              fill: ${theme.colors.neutral.icon.default};
            `;
      case 'tertiary':
        return css`
              fill: ${theme.colors.components.button.icon.default};
            `;
      case 'ghost':
        return css`
              fill: ${theme.colors.components.button.icon.default};
            `;
      case 'ghost-gray':
        return css`
              fill: ${theme.colors.neutral.icon.default};
            `;
      case 'empty':
        return css`
              fill: transparent;
            `;
      default:
        return css``;
    }
  }}
    }
  }
`;
