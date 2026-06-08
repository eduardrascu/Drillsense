import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import {
  CheckboxContainer,
  HiddenCheckbox,
  LabelText,
  StyledCheckbox,
} from './styles';

const CheckIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 3L4.5 8.5L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IntermediateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="2"
    viewBox="0 0 10 2"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H9C9.41421 0.25 9.75 0.585786 9.75 1C9.75 1.41421 9.41421 1.75 9 1.75H1C0.585786 1.75 0.25 1.41421 0.25 1Z"
      fill="currentColor"
    />
  </svg>
);

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  checked?: boolean;
  intermediate?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: ReactNode;
  hasError?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { checked, onChange, disabled, label, hasError, intermediate, ...props },
    ref
  ) => (
    <CheckboxContainer
      onMouseDown={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <HiddenCheckbox
        ref={ref}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <StyledCheckbox
        $checked={checked || intermediate || false}
        $disabled={disabled || false}
        $hasError={hasError}
      >
        {checked ? <CheckIcon /> : intermediate ? <IntermediateIcon /> : null}
      </StyledCheckbox>
      {label && <LabelText disabled={disabled || false}>{label}</LabelText>}
    </CheckboxContainer>
  )
);

Checkbox.displayName = 'Checkbox';
