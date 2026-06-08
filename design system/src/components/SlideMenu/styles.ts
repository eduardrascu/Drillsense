import styled, { keyframes } from 'styled-components';

export const animateMenuOpen = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const SlideMenuContainer = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  z-index: 1000;
  min-width: 160px;
  max-width: 280px;
  box-shadow: ${({ theme }) => theme.shadows['md']};
  border-radius: ${({ theme }) => theme.radii['md']};
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  overflow: hidden;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  animation: 0.3s ${({ $isOpen }) => $isOpen && animateMenuOpen} ease forwards;
`;

export const SlideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 320px;
  overflow-y: auto;
`;

export const SlideMenuItem = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.background.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.neutral.background.active};
  }
`;

export const SlideMenuItemIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 12px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const SlideMenuDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.neutral.border.weakest} !important;
`;
