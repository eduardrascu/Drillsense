import styled, { css, DefaultTheme } from 'styled-components';
import { BagdeBackground, BagdeSizes, BagdeTypes } from './types';

interface BadgeContainerProps {
  $size: BagdeSizes;
  $selected: boolean;
  $disabled?: boolean;
  $type: BagdeTypes;
  $background: BagdeBackground;
}

const getPadding = (size: BagdeSizes) => {
  switch (size) {
    case 'xs':
      return '2px';
    case 'sm':
      return '2px 4px';
    case 'md':
      return '4px';
  }
};

const getFontSize = (size: BagdeSizes, theme: DefaultTheme) => {
  switch (size) {
    case 'xs':
      return theme.fontSizes['2xs'];
    case 'sm':
    case 'md':
      return theme.fontSizes.xs;
  }
};

const getBackgroundColor = (
  theme: DefaultTheme,
  $type: BagdeTypes,
  $background: BagdeBackground
) => {
  if ($type === 'default') {
    switch ($background) {
      case 'fill':
        return theme.colors.neutral.background.strongest;
      case 'muted':
        return theme.colors.neutral.background.transparent.default;
      default:
        return 'transparent';
    }
  }
  switch ($background) {
    case 'fill':
      return theme.colors.system[$type].background.default;
    case 'muted':
      return theme.colors.system[$type].background.transparent;
    default:
      return 'transparent';
  }
};

const getTextColor = (
  theme: DefaultTheme,
  $type: BagdeTypes,
  $background: BagdeBackground
) => {
  if ($type === 'default') {
    switch ($background) {
      case 'fill':
        return theme.colors.neutral.text.inverted.default;
      case 'muted':
        return theme.colors.neutral.text.weak;
      default:
        return theme.colors.neutral.text.weak;
    }
  }

  if ($background === 'fill') return theme.colors.neutral.text.static;
  if ($background === 'muted') return theme.colors.system[$type].text.default;
};

const getDotIconColor = (theme: DefaultTheme, $type: BagdeTypes) => {
  if ($type === 'default') {
    return theme.colors.neutral.icon.weak;
  }

  return theme.colors.system[$type].icon.weak;
};

const getIconColor = (
  theme: DefaultTheme,
  $type: BagdeTypes,
  $background: BagdeBackground
) => {
  if ($type === 'default') {
    switch ($background) {
      case 'fill':
        return theme.colors.neutral.icon.inverted.default;
      default:
        return theme.colors.neutral.icon.weak;
    }
  }
  switch ($background) {
    case 'fill':
      return theme.colors.system[$type].icon.inverted;
    default:
      return theme.colors.system[$type].icon.default;
  }
};

export const BadgeContainer = styled.div<BadgeContainerProps>`
  display: flex;
  align-items: center;
  border-radius: 24px;
  transition: 0.3s;
  user-select: none;
  padding: ${({ $size }) => getPadding($size)};
  max-width: fit-content;

  .badge-icon {
    display: flex;
    align-items: center;

    svg {
      transition: 0.3s;
    }
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  ${({ $size, $type, theme, $selected, $disabled, $background }) =>
    $type === 'interactive'
      ? css`
          gap: 2px;
          font-size: ${getFontSize($size, theme)};
          line-height: ${getFontSize($size, theme)};
          background-color: ${theme.colors.neutral.background.transparent.weak};
          color: ${theme.colors.neutral.text.weak};
          cursor: pointer;

          .badge-icon svg {
            color: ${theme.colors.neutral.text.weak};
            fill: ${theme.colors.neutral.text.weak};
          }

          &:hover {
            background-color: ${theme.colors.neutral.background.transparent
              .default};
            color: ${theme.colors.neutral.text.default};

            .badge-icon svg {
              color: ${theme.colors.neutral.text.default};
              fill: ${theme.colors.neutral.text.default};
            }
          }

          &:active {
            background-color: ${theme.colors.neutral.background.transparent
              .strong};
            color: ${theme.colors.neutral.text.default};

            .badge-icon svg {
              color: ${theme.colors.neutral.text.default};
              fill: ${theme.colors.neutral.text.default};
            }
          }

          $: focus {
            box-shadow: 0px 0px 0px 2px ${theme.colors.ui.indigo['07']};
          }
          ${$selected &&
          css`
            background-color: ${theme.colors.primary.background
              .strong} !important;
            color: ${theme.colors.neutral.text.inverted.default} !important;

            .badge-icon svg {
              color: ${theme.colors.neutral.text.inverted.default} !important;
              fill: ${theme.colors.neutral.text.inverted.default} !important;
            }
          `}

          ${$disabled &&
          css`
            background-color: ${theme.colors.neutral.background.transparent
              .weaker} !important;
            color: ${theme.colors.neutral.text.weakest} !important;

            .badge-icon svg {
              color: ${theme.colors.neutral.text.weakest} !important;
              fill: ${theme.colors.neutral.text.weakest} !important;
            }
          `}
        `
      : css`
          gap: 3px;
          font-size: ${theme.fontSizes.xs};
          line-height: ${theme.fontSizes.xs};
          background-color: ${getBackgroundColor(theme, $type, $background)};
          color: ${getTextColor(theme, $type, $background)};

          .dot {
            background-color: ${getDotIconColor(theme, $type)};
          }

          .badge-icon {
            svg {
              color: ${$background === 'fill'
                ? theme.colors.neutral.text.static
                : getIconColor(theme, $type, $background)};
              fill: ${$background === 'fill'
                ? theme.colors.neutral.text.static
                : getIconColor(theme, $type, $background)};
            }
          }
        `}
`;

export const BadgeLabel = styled.div``;
