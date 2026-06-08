import styled, { css } from 'styled-components';

export const StyledLink = styled.a<{
  $size: 'md' | 'sm';
  $variant: 'default' | 'error' | 'empty';
  $disabled?: boolean;
  $selected?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  p { margin: 0; }
  opacity: ${({ $variant }) => ($variant === 'empty' ? 0 : 1)};
  ${({ theme, $size }) => {
    switch ($size) {
      case 'sm': {
        return css`
          font-size: ${theme.fontSizes?.['xs']};
          line-height: ${theme.lineHeights?.['s']};
          svg {
            width: ${theme.lineHeights?.['s']};
          }
        `;
      }
      case 'md': {
        return css`
          font-size: ${theme.fontSizes?.['s']};
          line-height: ${theme.lineHeights?.['m']};
          svg {
            width: ${theme.lineHeights?.['m']};
          }
        `;
      }
      default: {
        return css`
          font-size: '12px';
          line-height: '16px';
          svg {
            width: '16px';
          }
        `;
      }
    }
  }};
  color: ${({ theme }) => theme.colors.components.link.text.default};
  border-radius: ${({ theme }) => theme.spacing.xs};

  svg {
    path {
      fill: ${({ theme }) => theme.colors.components.link.text.default};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.components.link.text.hover};
    svg {
      path {
        fill: ${({ theme }) => theme.colors.components.link.text.hover};
      }
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.components.link.text.active};
    svg {
      path {
        fill: ${({ theme }) => theme.colors.components.link.text.active};
      }
    }
  }

  &:focus {
    color: ${({ theme }) => theme.colors.components.link.text.default};
    svg {
      path {
        fill: ${({ theme }) => theme.colors.components.link.text.default};
      }
    }
  }

  ${({ $variant }) =>
    $variant === 'error' &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.system.error.text.default};
      svg {
        path {
          fill: ${({ theme }) => theme.colors.system.error.text.default};
        }
      }
    `}

  ${({ $variant }) =>
    $variant === 'empty' &&
    css`
      background: ${({ theme }) => theme.colors.components.link.icon.default};
      p,
      svg {
        opacity: 100%;
      }
    `}

  ${({ $selected }) =>
    $selected &&
    css`
      box-shadow: ${({ theme }) => theme.shadows['focus']};
      color: ${({ theme }) => theme.colors.components.link.text.active};
      svg {
        path {
          fill: ${({ theme }) => theme.colors.components.link.text.active};
        }
      }
    `}

	${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.components.link.text.disabled};
      svg {
        path {
          fill: ${({ theme }) => theme.colors.components.link.text.disabled};
        }
      }
    `}
`;
