import styled, { DefaultTheme } from 'styled-components';

const chipBackgroundColor = (
  theme: DefaultTheme,
  type: string | undefined,
  $selected?: boolean
) => {
  const typeToColorMap: Record<string, string> = {
    primary: theme.colors.components.chip.background.default,
    empty: theme.colors.components.chip.background.disabled,
    disabled: theme.colors.components.chip.background.disabled,
  };

  return $selected
    ? theme.colors.components.chip.background.selected
    : typeToColorMap[type || 'primary'] || theme.colors.ui.indigo['07'];
};

const chipTextColor = (theme: DefaultTheme, type: string | undefined) => {
  const typeToColorMap: Record<string, string> = {
    primary: theme.colors.components.chip.text.default,
    disabled: theme.colors.components.chip.text.default,
  };

  return typeToColorMap[type || 'primary'] || theme.colors.ui.indigo['07'];
};

const chipLabelColor = (theme: DefaultTheme, type: string | undefined) => {
  const typeToColorMap: Record<string, string> = {
    primary: theme.colors.components.chip.text.weak,
    disabled: theme.colors.components.chip.text.disabled,
  };

  return typeToColorMap[type || 'primary'] || theme.colors.ui.indigo['07'];
};

const chipSize = (size?: 'small' | 'medium' | 'large') => {
  const sizeMap: Record<string, string> = {
    small: '16px',
    medium: '24px',
    large: '32px',
  };

  return sizeMap[size || 'medium'];
};

export const ChipIconWrapper = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $selected?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  width: ${({ $size }) => ($size === 'small' ? '16px' : '20px')};
  color: ${({ theme, $selected }) =>
    $selected
      ? theme.colors.components.chip.icon.active
      : theme.colors.components.chip.icon.default};
`;

export const ChipTextContainer = styled.div`
  display: flex;
  line-height: 16px;
  font-size: 12px;
  font-weight: 400;
  padding-inline: 4px;
  gap: 4px;
`;

export const ChipTextWrapper = styled.p<{
  $variant?: 'primary' | 'disabled' | 'empty';
}>`
  color: ${({ theme, $variant }) => chipTextColor(theme, $variant)};
  white-space: nowrap;
`;

export const ChipLabelWrapper = styled.p<{
  $variant?: 'primary' | 'disabled' | 'empty';
}>`
  color: ${({ theme, $variant }) => chipLabelColor(theme, $variant)};
`;

export const ChipContainer = styled.div<{
  $variant?: 'primary' | 'disabled' | 'empty';
  $size?: 'small' | 'medium' | 'large';
  $selected?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  transition: color 0.35s ease;
  border-width: 1px;
  border-radius: ${({ $size }) => chipSize($size)};
  border-style: solid;
  border-color: ${({ theme, $selected, $variant }) =>
    $variant === 'empty'
      ? 'transparent'
      : $selected
      ? theme.colors.primary.border.active
      : theme.colors.neutral.border.weakest};
  background-color: ${({ theme, $variant, $selected }) =>
    chipBackgroundColor(theme, $variant, $selected)};
  cursor: pointer;
  min-width: ${({ $size }) => chipSize($size)};
  height: ${({ $size }) => chipSize($size)};
  padding-inline: 4px;
  transition: background-color 0.35s ease;

  &:hover {
    background-color: ${({ theme, $variant, $selected }) =>
      !$selected &&
      $variant === 'primary' &&
      theme.colors.components.chip.background.hover};
    border-color: ${({ theme, $variant, $selected }) =>
      !$selected &&
      $variant === 'primary' &&
      theme.colors.neutral.border.weaker};
  }

  &:active {
    background-color: ${({ theme, $variant, $selected }) =>
      !$selected &&
      $variant === 'primary' &&
      theme.colors.components.chip.background.active};
    border-color: ${({ theme, $variant, $selected }) =>
      !$selected && $variant === 'primary' && theme.colors.neutral.border.weak};
  }
`;
