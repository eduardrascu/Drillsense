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

export const TreeOption = styled.div<{
  $level: number;
  $isSelected: boolean;
  $isFocused: boolean;
}>`
  margin-left: ${({ $level }) => $level * 32}px;
  background-color: ${({ theme, $isSelected, $isFocused }) =>
    $isSelected
      ? theme.colors.primary.background.transparent.weak
      : $isFocused
      ? theme.colors.neutral.background.transparent.default
      : theme.colors.neutral.background.base};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-weight: ${({ theme, $isSelected }) =>
    $isSelected ? theme.fontWeights['semibold'] : theme.fontWeights['regular']};
  cursor: pointer;
  padding: ${({ theme }) => `${theme.radii['sm']} ${theme.radii['xl']}`};
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ theme, $isSelected }) =>
      $isSelected
        ? theme.colors.primary.background.transparent.default
        : theme.colors.primary.background.transparent.weak};
  }
`;

export const TreeOptionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TreeOptionLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0; /* Allow flex item to shrink below content size */
`;

export const TreeOptionIcon = styled.div<{
  $isExpanded: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: color 0.2s ease;
  color: ${({ theme }) => theme.colors.neutral.icon.weaker};

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.icon.default};
  }
`;

export const TreeOptionChildren = styled.div`
  margin-left: 16px;
  border-left: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  margin-top: 4px;
  padding-left: 8px;
`;

export const TreeOptionLabelContent = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex: 1;
  min-width: 0; /* Allow flex item to shrink below content size */

  /* Ensure text wraps properly */
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
`;

export const CheckboxContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectAllContainer = styled.div`
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

export const Text = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.text.default};
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
  valueContainer: (provided, state) => ({
    ...provided,
    padding: $asLabelAttachment ? `0` : $theme.components.inputs[$size].padding,
    height: $theme.sizes[$size],
    maxHeight: $theme.sizes[$size],
    fontSize: $theme.fontSizes[fontSizeInput[$size]],
    lineHeight: $theme.lineHeights[lineHeightInput[$size]],
    flex: $asLabelAttachment ? undefined : 1,
    overflow: state.selectProps.isMulti ? 'auto' : 'hidden',
    overflowY: state.selectProps.isMulti ? 'auto' : 'hidden',
    overflowX: 'hidden',
    display: 'flex',
    flexWrap: state.selectProps.isMulti ? 'wrap' : 'nowrap',
    alignItems: 'center',
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
    backgroundColor: 'transparent !important',
    ':hover': {
      backgroundColor: 'transparent !important',
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
    background: $theme.colors.neutral.background.base,
  }),
  option: provided => ({
    ...provided,
    backgroundColor: 'transparent', // We handle this in TreeOption component
    color: $theme.colors.neutral.text.default,
    cursor: 'pointer',
    padding: 0, // We handle padding in TreeOption component
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
