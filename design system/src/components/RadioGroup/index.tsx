import React, { ReactNode, useState } from 'react';
import {
  RadioButton,
  RadioGroupContainer,
  RadioGroupHeading,
  RadioGroupWrapper,
  RadioInput,
  RadioLabel,
} from './styles';
import type { TSize } from '@src/types/common.types';

export interface RadioOption {
  value: string;
  label: ReactNode;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  label?: ReactNode;
  name: string;
  hasError?: boolean;
  size?: TSize;
  disabled?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  label,
  name,
  hasError,
  size = 'md',
  disabled = false,
}) => {
  const [focusedValue, setFocusedValue] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event.target.value);
    }
  };

  const handleFocus = (optionValue: string) => {
    setFocusedValue(optionValue);
  };

  const handleBlur = () => {
    setFocusedValue(null);
  };

  return (
    <RadioGroupWrapper>
      {label && <RadioGroupHeading>{label}</RadioGroupHeading>}
      <RadioGroupContainer>
        {options.map(option => (
          <RadioLabel key={option.value}>
            <RadioInput
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              onFocus={() => handleFocus(option.value)}
              onBlur={handleBlur}
              disabled={disabled}
            />
            <RadioButton
              $size={size}
              $hasError={hasError}
              $isFocused={focusedValue === option.value}
            />
            {option.label}
          </RadioLabel>
        ))}
      </RadioGroupContainer>
    </RadioGroupWrapper>
  );
};
