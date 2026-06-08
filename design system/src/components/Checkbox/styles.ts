import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  gap: 8px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{
  $checked: boolean;
  $disabled: boolean;
  $hasError?: boolean;
}>`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.neutral.text.static};
  background: ${({ theme, $checked, $disabled }) =>
    $checked
      ? $disabled
        ? theme.colors.neutral.border.default
        : theme.colors.primary.icon.weaker
      : theme.colors.neutral.background.base};
  border: 2px solid
    ${({ theme, $checked, $hasError, $disabled }) =>
      $hasError
        ? theme.colors.system.error.border.default
        : $checked
        ? $disabled
          ? theme.colors.neutral.border.default
          : theme.colors.primary.icon.weaker
        : $disabled
        ? theme.colors.neutral.border.weak
        : theme.colors.neutral.border.default};
  border-radius: ${({ theme }) => theme.radii['xs']};
  transition: all 150ms;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $disabled, theme, $hasError, $checked }) =>
    !$disabled &&
    `
    &:hover {
      border-color: ${
        $hasError
          ? theme.colors.system.error.border.default
          : $checked
          ? theme.colors.primary.icon.weaker
          : theme.colors.neutral.icon.default
      };
      background-color: ${
        $hasError
          ? theme.colors.system.error.border.default
          : $checked
          ? theme.colors.primary.icon.weaker
          : theme.colors.neutral.background.hover
      };
    }
      &:active {
        border-color: ${
          $hasError
            ? theme.colors.system.error.border.default
            : $checked
            ? theme.colors.primary.icon.weaker
            : theme.colors.neutral.icon.default
        };
      background-color: ${
        $hasError
          ? theme.colors.system.error.border.default
          : $checked
          ? theme.colors.primary.icon.weaker
          : theme.colors.neutral.background.active
      };
  `}

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const LabelText = styled.span<{ disabled: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.md};
  color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.neutral.text.weak
      : theme.colors.neutral.text.default};
`;
