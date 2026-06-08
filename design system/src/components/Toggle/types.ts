export type ToggleSize = 'sm' | 'md';

export interface ToggleProps {
  $disabled?: boolean;
  $size?: string;
  $isInvalid?: boolean;
  $labelPosition?: 'left' | 'right';
}

export interface LabelProps {
  $size?: string;
}

export enum ToggleFontSizeEnum {
  sm = 'xs',
  md = 's',
}

export enum ToggleWidthSizeEnum {
  sm = '26px',
  md = '28px',
}

export enum ToggleHeightSizeEnum {
  sm = '14px',
  md = '16px',
}
