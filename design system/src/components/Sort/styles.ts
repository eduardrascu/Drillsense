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

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme['neutralTextWeak']};
`;
export const Label = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

export const FilterWindow = styled.div<{ $reversed: boolean }>`
  position: absolute;
  left: 0;
  margin-top: 20px;
  ${({ $reversed }) =>
    $reversed
      ? css`
          bottom: 22px;
        `
      : css`
          top: 20px;
        `}
  background: ${({ theme }) => theme['neutralBackgroundBase']};
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(20, 28, 44, 0.06),
    0px 4px 8px 2px rgba(20, 28, 44, 0.06);
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: .3s all;
`;

export const Option = styled.div<{ $selected: boolean }>`
  padding: 7px;
  ${({ $selected }) =>
    $selected &&
    css`
      background: ${({ theme }) => theme['weakBorder']};
    `}

  &:hover {
    background: ${({ theme }) => theme['weakBorder']};
  }
`;
