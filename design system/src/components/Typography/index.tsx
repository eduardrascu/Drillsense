import type { TypographyProps, TypographyHeadingSize } from './types';

import { TypographyText } from './styles';

enum TypographyHeadingSizeEnum {
  '4xl' = 'h1',
  '3xl' = 'h2',
  '2xl' = 'h3',
  'xl' = 'h4',
  'lg' = 'h5',
}

export function Typography<V extends 'body' | 'heading'>({
  children,
  type,
  size,
  variant = 'neutral',
  weight = 'regular',
  textAlign = 'left',
  color = 'default',
  as = undefined,
}: TypographyProps<V>) {
  return (
    <TypographyText
      as={
				as ||
        type === 'heading' &&
        TypographyHeadingSizeEnum[size as TypographyHeadingSize]
          ? TypographyHeadingSizeEnum[size as TypographyHeadingSize]
          : 'p'
      }
      $type={type}
      $size={size}
      $weight={weight}
      $textAlign={textAlign}
      $variant={variant}
      $color={color}
    >
      {children}
    </TypographyText>
  );
}
