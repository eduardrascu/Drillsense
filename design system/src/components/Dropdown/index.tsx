import React, { type FC, type ReactNode, useCallback, useMemo } from 'react';
import Select, { components, Props as ReactSelectProps } from 'react-select';
import { useTheme } from 'styled-components';
import type { TSize } from '../../types/common.types';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';
import { InfoText, InputLabel } from '../Input/styles';
import {
  customStyles,
  Divider,
  OptionCheckbox,
  SelectAllOption,
  SelectContainer,
  SelectWrapper,
} from './styles';

export interface DropdownOption {
  label: ReactNode;
  value: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

export interface DropdownProps
  extends Omit<
    ReactSelectProps<DropdownOption, boolean>,
    'value' | 'onChange' | 'options'
  > {
  options: DropdownOption[];
  value: string | string[] | null;
  onChange: (value: string | string[] | null) => void;
  placeholder?: string;
  hasError?: boolean;
  size?: TSize;
  infoText?: string;
  errorText?: string;
  multiSelect?: boolean;
  asLabelAttachment?: boolean;
  selectAllLabel?: string;
  required?: boolean;
  label?: string;
  insideLabel?: boolean;
  isDisabled?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const SELECT_ALL_VALUE = '__select_all__';

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon
        iconName={
          props.selectProps.menuIsOpen
            ? IconName.CHEVRON_UP
            : IconName.CHEVRON_DOWN
        }
      />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: any) => {
  return (
    <components.ClearIndicator {...props}>
      <Icon iconName={IconName.X} />
    </components.ClearIndicator>
  );
};

const Option = (props: any) => (
  <components.Option {...props}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: 0, // Allow flex item to shrink below content size
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flex: 1,
          minWidth: 0, // Allow flex item to shrink below content size
          wordWrap: 'break-word',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        {(props.data as DropdownOption).leftContent}
        {(props.data as DropdownOption).label}
      </div>
      {(props.data as DropdownOption).rightContent}
    </div>
  </components.Option>
);

const MultiSelectOption = (props: any) => {
  const isSelectAll = props.data.value === SELECT_ALL_VALUE;

  return (
    <>
      <components.Option {...props}>
        {isSelectAll ? (
          <SelectAllOption>
            <OptionCheckbox $isSelected={props.isSelected} />
            {props.data.label}
          </SelectAllOption>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minWidth: 0, // Allow flex item to shrink below content size
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                flex: 1,
                minWidth: 0, // Allow flex item to shrink below content size
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              <OptionCheckbox $isSelected={props.isSelected} />
              {(props.data as DropdownOption).leftContent}
              {(props.data as DropdownOption).label}
            </div>
            {(props.data as DropdownOption).rightContent}
          </div>
        )}
      </components.Option>
      {isSelectAll && <Divider />}
    </>
  );
};

export const Dropdown: FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select',
  hasError,
  size = 'md',
  infoText,
  errorText,
  multiSelect = false,
  asLabelAttachment = false,
  selectAllLabel = 'Show all',
  required = false,
  label,
  insideLabel = false,
  isDisabled = false,
  onBlur,
  ...props
}) => {
  const theme = useTheme();

  const showAsError = useMemo(() => {
    return hasError || !!errorText;
  }, [hasError, errorText]);

  // Add select all option for multiselect
  const optionsWithSelectAll = multiSelect
    ? [
        {
          label: selectAllLabel,
          value: SELECT_ALL_VALUE,
        },
        ...options,
      ]
    : options;

  const handleChange = useCallback(
    (option: any) => {
      if (multiSelect) {
        const selectedOptions = option as DropdownOption[];

        if (selectedOptions) {
          const selectedValues = selectedOptions.map(opt => opt.value);

          // Check if select all was clicked
          const hasSelectAll = selectedValues.includes(SELECT_ALL_VALUE);
          const currentValues = Array.isArray(value) ? value : [];
          const wasSelectAllPreviously =
            currentValues.length === options.length;

          if (hasSelectAll && !wasSelectAllPreviously) {
            // Select all was clicked - select all options
            onChange(options.map(opt => opt.value));
          } else if (!hasSelectAll && wasSelectAllPreviously) {
            // Select all was unchecked - deselect all
            onChange([]);
          } else {
            // Regular option selection - filter out select all value
            const regularValues = selectedValues.filter(
              val => val !== SELECT_ALL_VALUE
            );

            onChange(regularValues);
          }
        } else {
          onChange([]);
        }
      } else {
        if (option === null) {
          onChange(null);
        } else {
          onChange((option as DropdownOption).value);
        }
      }
    },
    [onChange, multiSelect, options, value]
  );

  const getSelectedValue = () => {
    if (multiSelect) {
      const selectedValues = Array.isArray(value) ? value : [];
      const selectedOptions = optionsWithSelectAll.filter(option => {
        if (option.value === SELECT_ALL_VALUE) {
          // Show select all as selected if all regular options are selected
          return selectedValues.length === options.length;
        }
        return selectedValues.includes(option.value);
      });
      return selectedOptions;
    } else {
      return options.find(option => option.value === value) || null;
    }
  };

  const ValueContainer = (props: any) => {
    const { children, hasValue, selectProps } = props;
    const { placeholder } = selectProps;

    if (asLabelAttachment && hasValue) {
      const childNodes = React.Children.toArray(children);
      const input = childNodes[childNodes.length - 1];
      return (
        <components.ValueContainer {...props}>
          <components.Placeholder {...props} isFocused={props.isFocused}>
            {placeholder}
          </components.Placeholder>
          {input}
        </components.ValueContainer>
      );
    }

    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    );
  };

  return (
    <SelectWrapper>
      {!insideLabel && label && (
        <InputLabel $isRequired={required} $size={size}>
          {label}
        </InputLabel>
      )}
      <SelectContainer
        $hasError={showAsError}
        $asLabelAttachment={asLabelAttachment}
        $isDisabled={isDisabled}
      >
        <Select
          options={optionsWithSelectAll}
          value={getSelectedValue()}
          onChange={handleChange}
          placeholder={insideLabel && !!label ? label : placeholder}
          isMulti={multiSelect}
          components={{
            DropdownIndicator,
            ClearIndicator,
            Option: multiSelect ? MultiSelectOption : Option,
            IndicatorSeparator: null,
            ValueContainer,
          }}
          styles={customStyles(
            theme,
            size,
            showAsError,
            asLabelAttachment,
            insideLabel
          )}
          menuPortalTarget={document.body}
          isClearable={!asLabelAttachment}
          closeMenuOnSelect={!multiSelect}
          hideSelectedOptions={false}
          isSearchable={!asLabelAttachment}
          classNamePrefix="react-select"
          isDisabled={isDisabled}
          onBlur={onBlur}
          {...props}
        />
      </SelectContainer>
      {(infoText || errorText) && (
        <InfoText $hasError={showAsError}>
          {errorText ? (
            <Icon iconName={IconName.DANGER_INFO} />
          ) : (
            <Icon iconName={IconName.SYSTEM_INFO} />
          )}{' '}
          {errorText || infoText}
        </InfoText>
      )}
    </SelectWrapper>
  );
};
