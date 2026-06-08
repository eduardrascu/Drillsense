import styled, { css } from 'styled-components';
import { TabsSizeType, TabsVariant } from './types';
import {
  flexGapTabs,
  fontSizeBadge,
  fontSizeTab,
  lineHeightBadge,
  lineHeightTab,
  paddingBadge,
  sizePaddingIconOnlyTab,
  sizePaddingTab,
  sizePaddingTabs,
} from './utils';

interface TabItemProps {
  $active: boolean;
  $variant: TabsVariant;
  $size: TabsSizeType;
  $isIconOnly: boolean;
  $disabled: boolean;
  $isFirstTab: boolean;
  $isLastTab: boolean;
  $fullWidth: boolean;
}

interface TabsContainerProps {
  $variant: TabsVariant;
  $size: TabsSizeType;
  $fullWidth: boolean;
}

export const TabsContainer = styled.div<TabsContainerProps>`
  display: flex;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  padding: ${({ $size, $variant }) => sizePaddingTabs[$variant][$size]};
  gap: ${({ $variant }) => flexGapTabs[$variant]};

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'underline':
        return css`
          background-color: transparent;
          border-bottom: 1px solid ${theme.colors.neutral.border.weaker};
        `;

      case 'button':
        return css`
          background-color: ${theme.colors.neutral.background.base};
          border: 1px solid ${theme.colors.neutral.border.weaker};
          border-radius: ${theme.radii['rounded']};
        `;

      case 'pills':
        return css`
          background-color: ${theme.colors.neutral.background.transparent
            .weaker};
          border: 1px solid ${theme.colors.neutral.border.weaker};
          border-radius: ${theme.radii['sm']};
        `;

      default:
        return css`
          background-color: transparent;
          border: none;
        `;
    }
  }}
`;

export const TabItem = styled.div<TabItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  gap: ${({ $isIconOnly }) => ($isIconOnly ? '0px' : '8px')};
  padding: ${({ $size, $variant, $isIconOnly }) =>
    $isIconOnly
      ? sizePaddingIconOnlyTab[$variant][$size]
      : sizePaddingTab[$variant][$size]};
  font-size: ${({ theme, $variant, $size }) =>
    theme.fontSizes[fontSizeTab[$variant][$size]]};
  line-height: ${({ theme, $size, $variant }) =>
    theme.lineHeights[lineHeightTab[$variant][$size]]};
  font-weight: ${({ theme, $active }) =>
    theme.fontWeights[$active ? 'semibold' : 'regular']};

  cursor: pointer;
  position: relative;
  transition: color 0.3s linear;
  transition: background-color 0.3s linear;

  svg {
    width: ${({ theme, $variant, $size }) =>
      theme.fontSizes[fontSizeTab[$variant][$size]]};
    height: ${({ theme, $variant, $size }) =>
      theme.fontSizes[fontSizeTab[$variant][$size]]};
  }

  ${({
    theme,
    $variant,
    $disabled,
    $active,
    $isIconOnly,
    $isFirstTab = false,
    $isLastTab = false,
  }) => {
    switch ($variant) {
      case 'underline':
        return css`
          background-color: transparent;
          color: ${$active
            ? theme.colors.primary.text.weak
            : theme.colors.neutral.text.weak};

          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 1px;
            background-color: ${$active
              ? theme.colors.primary.border.active
              : theme.colors.neutral.border.weaker};
            transition: background-color 0.1s;
          }

          svg {
            path {
              fill: ${$active
                ? theme.colors.primary.text.weak
                : theme.colors.neutral.text.weak};
            }
          }

          &:hover,
          &:focus {
            background-color: ${theme.colors.primary.background.transparent
              .weak};

            &::after {
              background-color: ${theme.colors.primary.border.hover};
            }
          }

          &:active {
            background-color: ${theme.colors.primary.background.transparent
              .strong};

            &::after {
              background-color: ${theme.colors.primary.border.active};
            }
          }

          ${$disabled &&
          css`
            font-weight: ${theme.fontWeights['regular']};
            background-color: transparent;
            color: ${theme.colors.primary.text.weakest};
            cursor: not-allowed;
            pointer-events: none;

            &::after {
              background-color: ${theme.colors.primary.border.disabled};
            }

            svg {
              path {
                fill: ${theme.colors.primary.text.weakest} !important;
              }
            }
          `}
        `;

      case 'button':
        return css`
          background-color: ${$active
            ? theme.colors.neutral.background.base
            : theme.colors.neutral.background.transparent.weaker};
          color: ${$active
            ? theme.colors.primary.text.weak
            : theme.colors.neutral.text.weak};

          ${$isFirstTab &&
          css`
            border-bottom-left-radius: ${theme.radii['rounded']};
            border-top-left-radius: ${theme.radii['rounded']};
          `}
          ${$isLastTab &&
          css`
            border-bottom-right-radius: ${theme.radii['rounded']};
            border-top-right-radius: ${theme.radii['rounded']};
          `}

          ${$active &&
          css`
            ${$isFirstTab &&
            css`
              border-right: 1px solid ${theme.colors.neutral.border.weaker};
            `}
            ${$isLastTab &&
            css`
              border-left: 1px solid ${theme.colors.neutral.border.weaker};
            `}
      ${!$isFirstTab &&
            !$isLastTab &&
            css`
              border-left: 1px solid ${theme.colors.neutral.border.weaker};
              border-right: 1px solid ${theme.colors.neutral.border.weaker};
            `}
          `};

          svg {
            path {
              fill: ${$active
                ? theme.colors.primary.text.weak
                : theme.colors.neutral.text.weak} !important;
            }
          }

          &:hover,
          &:focus {
            background-color: ${theme.colors.primary.background.transparent
              .weak};
          }
          &:active {
            background-color: ${theme.colors.primary.background.transparent
              .strong};
          }
          ${$disabled &&
          css`
            font-weight: ${theme.fontWeights['regular']};
            background-color: ${theme.colors.neutral.background.base};
            color: ${theme.colors.primary.text.weakest};
            cursor: not-allowed;
            pointer-events: none;

            svg {
              path {
                fill: ${theme.colors.primary.text.weakest} !important;
              }
            }
          `}
        `;

      case 'pills':
        return css`
          background-color: ${$active
            ? theme.colors.neutral.background.base
            : 'transparent'};
          color: ${$active
            ? theme.colors.primary.text.weak
            : theme.colors.neutral.text.weak};
          border-radius: ${$isIconOnly ? '50%' : theme.radii['sm']};
          box-shadow: ${$active ? theme.shadows['xs'] : 'none'};

          svg {
            path {
              fill: ${$active
                ? theme.colors.primary.text.weak
                : theme.colors.neutral.text.weak} !important;
            }
          }

          &:hover,
          &:focus {
            background-color: ${theme.colors.primary.background.transparent
              .weak};
          }

          &:active {
            background-color: ${theme.colors.primary.background.transparent
              .strong};
          }
          ${$disabled &&
          css`
            font-weight: ${theme.fontWeights['regular']};
            background-color: ${theme.colors.neutral.background.base};
            color: ${theme.colors.primary.text.weakest};
            cursor: not-allowed;
            pointer-events: none;

            svg {
              path {
                fill: ${theme.colors.primary.text.weakest} !important;
              }
            }
          `}
        `;

      default:
        return css`
          background-color: transparent;
          color: ${$active
            ? theme.colors.neutral.text.default
            : theme.colors.neutral.text.weak};
          border: none;

          svg {
            path {
              fill: ${$active
                ? theme.colors.primary.text.weak
                : theme.colors.neutral.text.weak} !important;
            }
          }

          ${$disabled &&
          css`
            font-weight: ${theme.fontWeights['regular']};
            background-color: transparent;
            color: ${theme.colors.primary.text.weakest};
            cursor: not-allowed;
            pointer-events: none;

            svg {
              path {
                fill: ${theme.colors.primary.text.weakest} !important;
              }
            }
          `}
        `;
    }
  }}
`;

export const TabLabel = styled.div<{
  $hasBadge?: boolean;
  $active: boolean;
}>`
  display: flex;
  align-items: baseline;
  gap: ${({ $hasBadge = false }) => ($hasBadge ? '4px' : '0px')};

  p {
    margin: ${({ $active }) => ($active ? `0` : '0 1.5px')};
  }
`;

export const TabBadge = styled.div<{
  $active: boolean;
  $size: TabsSizeType;
  $disabled: boolean;
}>`
  transition: all 0.3s linear;
  padding: ${({ $size }) => paddingBadge[$size]};
  font-size: ${({ theme, $size }) => theme.lineHeights[fontSizeBadge[$size]]};
  line-height: ${({ theme, $size }) =>
    theme.lineHeights[lineHeightBadge[$size]]};
  font-weight: ${({ theme }) => theme.fontWeights['regular']};
  background-color: ${({ theme, $active, $disabled }) =>
    $active
      ? theme.colors.primary.text.weak
      : $disabled
      ? theme.colors.neutral.background.transparent.weaker
      : theme.colors.neutral.background.transparent.weak};
  color: ${({ theme, $active, $disabled }) =>
    $active
      ? theme.colors.white
      : $disabled
      ? theme.colors.neutral.text.weakest
      : theme.colors.neutral.text.weak};
  border-radius: ${({ theme }) => theme.radii['xl']};
`;
