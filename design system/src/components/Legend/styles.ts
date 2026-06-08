import styled from 'styled-components';

export const LegendContainer = styled.div<{
  $direction: string;
  $height: string;
  $width: string;
}>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'vertical' ? 'column' : 'row'};
  gap: 8px;
  position: relative;

  overflow-x: ${({ $direction }) =>
    $direction === 'vertical' ? 'scroll' : 'unset'};
  overflow-y: ${({ $direction }) =>
    $direction === 'horizontal' ? 'scroll' : 'unset'};

  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};

  &::-webkit-scrollbar {
    width: ${({ $direction }) => ($direction === 'vertical' ? '4px' : '0')};
    height: ${({ $direction }) => ($direction === 'horizontal' ? '4px' : '0')};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.neutral.background.default};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.neutral.background.active};
    border-radius: 4px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.neutral.background.hover};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.neutral.border.default};
  }

  &::-webkit-scrollbar-button,
  &::-webkit-scrollbar-corner,
  &::-webkit-resizer {
    display: none;
  }
`;

export const LegendItem = styled.div<{
  $color: string;
}>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-size: 12px;
  font-weight: 400;
  font-style: normal;

  &::before {
    content: '';
    display: inline-block;
    left: 0;
    border-radius: 50%;
    background-color: ${({ $color }) => $color};
    width: 9px;
    height: 9px;
    margin-inline: 2.5px;
  }
`;
