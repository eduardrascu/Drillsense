import styled, { css } from 'styled-components';

import { mapButtonOrientation } from '../../../helpers/stylesHelpers';

export const StyledMapButton = styled.div<{
  $rounded?: boolean;
  $disabled?: boolean;
  $position?: 'left' | 'right' | 'bottom' | 'top';
}>`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top-left-radius: ${({ $position }) =>
    mapButtonOrientation($position)?.topLeft};
  border-top-right-radius: ${({ $position }) =>
    mapButtonOrientation($position)?.topRight};
  border-bottom-left-radius: ${({ $position }) =>
    mapButtonOrientation($position)?.bottomLeft};
  border-bottom-right-radius: ${({ $position }) =>
    mapButtonOrientation($position)?.bottomRight};

  &:hover {
    background: ${({ theme }) => theme['neutralBackgroundHover']};
    cursor: pointer;
  }

  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 100%;
    `}

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
