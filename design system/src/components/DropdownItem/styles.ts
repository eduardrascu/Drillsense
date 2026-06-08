import styled, { css } from "styled-components";

export const DropdownItemContainer = styled.div<{ $checked: boolean, $disabled: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.sm};
  padding-right: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing['2xs']};
  padding-bottom: ${({ theme }) => theme.spacing['2xs']};
  align-items: center;
  background-color: ${({ theme, $checked }) => $checked ? theme.colors.primary.background.transparent.weak : 'transparent'};
  p {
    margin: 0;
  }
  transition: all .15s;
  &:hover {
    background-color: ${({ theme, $checked }) => $checked ? theme.colors.primary.background.transparent.default : theme.colors.neutral.background.transparent.default};
  }
  &:active {
    background-color: ${({ theme, $checked }) => $checked ? theme.colors.primary.background.transparent.strong : theme.colors.neutral.background.transparent.strong};
  }
  ${({ $disabled }) => $disabled && css`
    background-color: transparent;
    pointer-events: none;
    user-select: none;
  `}
`;

export const DropdownItemTextContainer = styled.div`
  width: 100%;
  max-height: 36px;
`;

// export const PalleteContainer = styled.div`
//   display: flex;
//   gap: ${({ theme }) => theme.spacing['2xs']};
//   align-items: center;
// `;