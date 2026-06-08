import type { TSize } from '@src/types/common.types';
import type { GroupBase, StylesConfig } from 'react-select';
import styled, { type DefaultTheme } from 'styled-components';
import { fontSizeInput, lineHeightInput } from '../Input/utils';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
`;

export const SelectContainer = styled.div<{
  $hasError?: boolean;
  $asLabelAttachment?: boolean;
  $isDisabled?: boolean;
}>`
  ${({ $isDisabled }) => $isDisabled && `cursor: not-allowed;`}
  ${({ $asLabelAttachment }) =>
    $asLabelAttachment &&
    `
    display: inline-block;

    .react-select__control {
      border: none !important;
      box-shadow: none !important;

      &:hover {
        border: none !important;
      }

      &.react-select__control--is-focused {
        border: none !important;
        box-shadow: none !important;
      }
    }

    .react-select__value-container--is-multi .react-select__input-container {
      display: none;
    }
  `}
`;

export const OptionBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.neutral.background.hover};
  color: ${({ theme }) => theme.colors.neutral.text.weaker};
  padding: ${({ theme }) => `${theme.radii['xs']} ${theme.radii['sm']}`};
  border-radius: ${({ theme }) => `${theme?.radii['rounded']}`} !important;
  font-size: ${({ theme }) => `${theme.fontSizes['xs']}`};
  line-height: ${({ theme }) =>
    `${theme.lineHeights['sm']}`}; // TO DO: change to sm
`;

export const OptionCheckbox = styled.div<{ $isSelected: boolean }>`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected
        ? theme.colors.primary.border.default
        : theme.colors.neutral.border.weak};
  border-radius: 2px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary.background.strong : 'transparent'};

  &:after {
    content: '';
    display: ${({ $isSelected }) => ($isSelected ? 'block' : 'none')};
    width: 8px;
    height: 5px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(-45deg) translate(0, -1px);
  }
`;

export const SelectAllOption = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 500;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 4px 0;
`;

export const customStyles = (
  $theme: DefaultTheme,
  $size: TSize,
  $hasError?: boolean,
  $asLabelAttachment?: boolean,
  $insideLabel?: boolean
): StylesConfig<any, boolean, GroupBase<any>> => ({
  control: (provided, state) => ({
    ...provided,
    minHeight: 'unset',
    height: $theme.sizes[$size],
    border: $asLabelAttachment ? 'none' : undefined,
    borderColor: $asLabelAttachment
      ? 'transparent'
      : $hasError
      ? $theme.colors.system.error.border.default
      : state.isFocused
      ? $theme.colors.primary.border.active
      : $theme.colors.neutral.border.weakest,
    borderRadius: $theme.radii['rounded'],
    justifyContent: $asLabelAttachment ? 'flex-start' : 'space-between',
    boxShadow: 'none',
    '&:hover': {
      borderColor: $asLabelAttachment
        ? 'transparent'
        : $hasError
        ? $theme.colors.system.error.border.default
        : $theme.colors.primary.border.hover,
    },
    padding: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: $asLabelAttachment ? `0` : $theme.components.inputs[$size].padding,
    height: $theme.sizes[$size],
    fontSize: $theme.fontSizes[fontSizeInput[$size]],
    lineHeight: $theme.lineHeights[lineHeightInput[$size]],
    flex: $asLabelAttachment ? undefined : 1,
    overflow: 'hidden',
  }),
  input: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
    height: '100%',
  }),
  placeholder: provided => ({
    ...provided,
    padding: $asLabelAttachment ? '0 16px 0 0' : 0,
    fontSize: $theme.fontSizes[fontSizeInput[$size]],
    lineHeight: $theme.lineHeights[lineHeightInput[$size]],
    color: $theme.colors.neutral.text.weaker,
    '&::after': {
      content: $hasError && $insideLabel ? '" *"' : '""',
      color: $theme.colors.system.error.text.default,
    },
  }),
  singleValue: provided => ({
    ...provided,
    margin: 0,
    color: $theme.colors.neutral.text.default,
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: $theme.colors.neutral.background.hover,
    borderRadius: $theme.radii.rounded,
    margin: `2px ${$theme.radii.xs} 2px 0`,
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: $theme.colors.neutral.text.default,
    fontSize: $theme.fontSizes.xs,
    padding: `0 ${$theme.radii.xs}`,
  }),
  multiValueRemove: provided => ({
    ...provided,
    color: $theme.colors.neutral.icon.weaker,
    ':hover': {
      backgroundColor: 'transparent',
      color: $theme.colors.neutral.icon.default,
    },
  }),
  menu: provided => ({
    ...provided,
    minWidth: $asLabelAttachment ? '320px' : undefined,
    maxWidth: '100%',
    marginTop: $theme.radii['sm'],
    borderRadius: $theme.radii['lg'],
    overflow: 'hidden',
    borderColor: $theme.colors.neutral.border.weakest,
    boxShadow: $theme.shadows['md'],
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'rgba(79, 70, 229, 0.1)' // Light purple/blue background for selected items
      : state.isFocused
      ? $theme.colors.neutral.background.transparent.default
      : $theme.colors.neutral.background.base,
    color: $theme.colors.neutral.text.default,
    fontWeight: state.isSelected
      ? $theme.fontWeights['semibold']
      : $theme.fontWeights['regular'],
    cursor: 'pointer',
    padding: `${$theme.radii['sm']} ${$theme.radii['xl']}`,
    whiteSpace: 'normal', // Allow text to wrap
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: $asLabelAttachment
      ? `0 ${$theme.radii.xs} 0 0`
      : `0 ${$theme.radii['xl']} 0 0`,
    cursor: 'pointer',
    color: $theme.colors.primary.icon.default,
  }),
  clearIndicator: provided => ({
    ...provided,
    padding: `0 ${$theme.radii['sm']}`,
    color: $theme.colors.neutral.icon.weaker,
    cursor: 'pointer',
    ':hover': {
      color: $theme.colors.neutral.icon.default,
    },
  }),
  menuPortal: base => ({
    ...base,
    zIndex: 999,
  }),
});
