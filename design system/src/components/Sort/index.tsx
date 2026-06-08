import { FC, ReactNode, useState } from 'react';
import { FilterWindow, LabelWrapper, Option, SortWrapper } from './styles';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

type Filter = {
  label: string;
  value: string;
};

export type SortDropdownProps = {
  options: Filter[];
  selectedOption: Filter;
  disabled?: boolean;
  reversed?: boolean;
  size: 'md' | 'sm';
  title?: string;
  onSelect?: (option: Filter) => void;
  customDropdown?: ReactNode;
};

const SortDropdown: FC<SortDropdownProps> = ({
  options,
  disabled,
  reversed = false,
  size = 'md',
  title = 'Sort',
  selectedOption,
  onSelect,
  customDropdown,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleOptionChange = (option: Filter) => {
    if (onSelect) onSelect(option);
    setShowDropdown(false);
  };

  return (
    <SortWrapper $size={size} $disabled={disabled}>
      <LabelWrapper
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onClick={() => setShowDropdown(prev => !prev)}
      >
        <Typography variant="neutral" type="body" color={disabled ? 'weakest' : 'weak'} size={size}>
          {title}
        </Typography>
        <Typography
          variant={isActive ? 'primary' : 'neutral'}
          color={disabled ? 'weakest' : 'default'}
          type="body"
          weight="semibold"
          size={size}
        >
          {selectedOption.label}
        </Typography>
        <Icon iconName={showDropdown ? 'ChevronUp' : 'ChevronDown'} color={disabled ? 'weakest' : 'default'} />
      </LabelWrapper>

      {showDropdown && (
        customDropdown ?? (
          <FilterWindow $reversed={reversed}>
            {options.map(option => (
              <Option
                key={option.value}
                $selected={selectedOption.value === option.value}
                onClick={() => handleOptionChange(option)}
              >
                {option.label}
              </Option>
            ))}
          </FilterWindow>
        )
      )}
    </SortWrapper>
  );
};

export default SortDropdown;
