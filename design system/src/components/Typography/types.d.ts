type TypographyVariant =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error';
type TypographyHeadingSize = '4xl' | '3xl' | '2xl' | 'xl' | 'lg';
type TypographyBodySize = 'lg' | 'md' | 'sm' | 'xs' | '2xs';
type TypographyHeadingWeight = 'regular' | 'semibold' | 'medium';
type TypographyBodyWeight = 'regular' | 'semibold' | 'medium' | 'underline';
type TypographyType = 'body' | 'heading';
type TypographyColor = 'default' | 'weak' | 'weaker' | 'weakest';

export type TypographyProps<V extends TypographyType> = {
  as?: React.ElementType;
  children?: React.ReactNode | string | undefined;
  type: V;
  size: V extends 'heading' ? TypographyHeadingSize : TypographyBodySize;
  weight?: V extends 'heading' ? TypographyHeadingWeight : TypographyBodyWeight;
  textAlign?: 'left' | 'center' | 'right';
  variant?: TypographyVariant;
  color?: TypographyColor;
};
