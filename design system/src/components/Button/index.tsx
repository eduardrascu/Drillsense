import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import { ButtonWrapper, CustomButton, IconWrapper } from './styles';
import type { ButtonProps } from './types';

export const Button: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonProps> & RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      onClick,
      rightIcon,
      leftIcon,
      variant = 'primary',
      type = 'button',
      size = 'md',
      disabled,
      iconOnly = false,
      fullWidth = false,
      onMouseEnter = () => {},
      onMouseLeave = () => {},
    }: ButtonProps,
    ref
  ) => {
    return (
      <ButtonWrapper>
        <CustomButton
          ref={ref}
          $variant={variant}
          $size={size}
          type={type}
          $fullWidth={fullWidth}
          onClick={onClick}
          $disabled={disabled}
          disabled={disabled}
          $iconOnly={iconOnly}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <IconWrapper $size={size} $variant={variant} $disabled={disabled}>
            {!iconOnly && leftIcon}
            {!iconOnly && label}
            {rightIcon}
          </IconWrapper>
        </CustomButton>
      </ButtonWrapper>
    );
  }
);

Button.displayName = 'Button';
