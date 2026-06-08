import React, { ChangeEvent, FC } from 'react';
import { StyledMapInput } from './styles';

type MapElementInputProps = {
  onChange?: (e: ChangeEvent) => void;
  placeholder: string;
  value: string;
  disabled?: boolean;
};

const MapElementInput: FC<MapElementInputProps> = ({
  placeholder = '100%',
  disabled,
  value,
  onChange,
}) => {
  return (
    <StyledMapInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      $disabled={disabled}
    />
  );
};

export default MapElementInput;
