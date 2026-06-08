import styled, { css } from 'styled-components';

export const SortWrapper = styled.div<{
  $disabled?: boolean;
  $size: 'md' | 'sm';
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s all;
`;

export const FilterWindow = styled.div<{ $reversed: boolean }>`
  position: absolute;
  left: 0;
  z-index: 100;
  min-width: 160px;
  margin-top: ${({ theme }) => theme.radii['sm']};
  ${({ $reversed }) =>
    $reversed
      ? css`
          bottom: 22px;
        `
      : css`
          top: 20px;
        `}
  background: ${({ theme }) => theme.colors.neutral.background.base};
  border-radius: ${({ theme }) => theme.radii['lg']};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  box-shadow: ${({ theme }) => theme.shadows['md']};
  overflow: hidden;
`;

export const Option = styled.div<{ $selected: boolean }>`
  padding: ${({ theme }) => `${theme.radii['sm']} ${theme.radii['xl']}`};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  cursor: pointer;

  ${({ $selected, theme }) =>
    $selected &&
    css`
      background-color: ${theme.colors.neutral.background.transparent.default};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.background.transparent.default};
  }
`;
