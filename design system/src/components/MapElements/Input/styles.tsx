import styled, { css } from 'styled-components';

export const StyledMapInput = styled.input<{ $disabled?: boolean }>`
  border: none;
  width: 48px;
  padding: 6px;
  text-align: center;
  outline: none;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme['neutralBackgroundHover']};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;

      &:hover {
        background: transparent;
      }
    `}
`;
