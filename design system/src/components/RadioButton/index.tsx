import { InputHTMLAttributes, ReactNode } from 'react';

import { Checkmark, Container, Input, Label } from './styles';
import { RadioButtonSize } from './types';

interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size: RadioButtonSize;
  isInvalid?: boolean;
  label?: ReactNode;
}

export const RadioButton = ({
  size,
  label,
  disabled = false,
  isInvalid = false,
  ...props
}: RadioButtonProps) => {
  return (
    <Container $isInvalid={isInvalid} $disabled={disabled} $size={size}>
      <Input {...props} type="radio" aria-invalid={isInvalid} />
      <Checkmark />
      {label && <Label $size={size}>{label}</Label>}
    </Container>
  );
};
