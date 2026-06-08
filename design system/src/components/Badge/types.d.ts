import { ReactNode } from 'react';

export type BagdeSizes = 'md' | 'sm' | 'xs';
export type BagdeBackground = 'fill' | 'muted' | 'none';
export type BagdeTypes =
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'default'
  | 'interactive';

export interface BadgeProps {
  label: ReactNode;
  icon?: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  size?: BagdeSizes;
  type: BagdeTypes;
  background?: BagdeBackground;
  disabled?: boolean;
}
