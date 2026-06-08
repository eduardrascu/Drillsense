export type RadioButtonSize = 'sm' | 'md';

export interface RadioButtonProps {
  $disabled?: boolean;
  $size?: string;
  $isInvalid?: boolean;
}

export interface LabelProps {
  $disabled?: boolean;
  $size?: string;
}

export enum ContainerSizeEnum {
  sm = '16px',
  md = '20px',
}

export enum RadioButtonSizeEnum {
  sm = '12px',
  md = '16px',
}

export enum RadioCheckmarkSizeEnum {
  sm = '6px',
  md = '8px',
}

export enum RadioButtonFontSizeEnum {
  sm = 's',
  md = 'm',
}
