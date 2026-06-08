import { css, DefaultTheme, styled } from 'styled-components';
import { PaginationSizes } from '../types';

const getItemSize = ($size: PaginationSizes) => {
  switch ($size) {
    case 'lg':
      return '44px';
    case 'md':
      return '36px';
    default:
      return '32px';
  }
};

export const getPaginationFontSize = (
  $size: PaginationSizes,
  theme: DefaultTheme
) => {
  switch ($size) {
    case 'sm':
      return theme.fontSizes.xs;

    default:
      return theme.fontSizes.sm;
  }
};

const activeTextAndIconColor = css`
  color: ${({ theme }) => theme.colors.primary.text.weak};

  svg {
    color: ${({ theme }) => theme.colors.primary.text.weak};
    fill: ${({ theme }) => theme.colors.primary.text.weak};
  }
`;

export const PageItemContainer = styled.div<{
  $size: PaginationSizes;
  $active: boolean;
}>`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme, $size }) => getPaginationFontSize($size, theme)};
  line-height: ${({ theme, $size }) => getPaginationFontSize($size, theme)};
  width: ${({ $size }) => getItemSize($size)};
  height: ${({ $size }) => getItemSize($size)};
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.neutral.text.default};
  border-radius: ${({ $size }) => ($size === 'sm' ? '4px' : '50%')};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.primary.background.transparent.weak};
    ${activeTextAndIconColor}
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.background.active};
    ${activeTextAndIconColor}
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.neutral.background.base};
    ${activeTextAndIconColor}
  }

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) =>
        theme.colors.primary.background.transparent.strong} !important;
    `}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const PageList = styled.div`
  position: absolute;
  top: 54px;
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    top: -11px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 14px solid
      ${({ theme }) => theme.colors.neutral.border.weakest};
  }

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    transform: translateX(-50%);
    left: 50%;
    top: -9px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid
      ${({ theme }) => theme.colors.neutral.background.base};
  }
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  flex-direction: column;
  padding: 8px 0;
  color: ${({ theme }) => theme.fontSizes.sm};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  overflow-y: auto;
  max-height: 150px;
  scrollbar-width: thin;
  position: relative;
`;

export const ListItem = styled.li`
  display: flex;
  font-weight: 400;
  padding: 6px 12px;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.primary.background.transparent.weak};
    ${activeTextAndIconColor}
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.background.active};
    ${activeTextAndIconColor}
  }
`;
