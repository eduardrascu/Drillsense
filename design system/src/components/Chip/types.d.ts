import { ReactNode } from 'react';

export interface ChipProps {
  disabled?: boolean;
  avatar?: ReactNode;
  icon?: ReactNode;
  iconLeft?: ReactNode;
  onClick: (event?: any) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  selected?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'disabled' | 'empty';
  label?: ReactNode;
  value?: string;
}
