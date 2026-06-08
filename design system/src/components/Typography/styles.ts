import styled from 'styled-components';
import { TypographyProps } from './types';

export const TypographyText = styled.p<{
  $type?: TypographyProps<'body' | 'heading'>['type'];
  $variant?: TypographyProps<'body' | 'heading'>['variant'];
  $size: TypographyProps<'body' | 'heading'>['size'];
  $weight?: TypographyProps<'body' | 'heading'>['weight'];
  $textAlign?: TypographyProps<'body' | 'heading'>['textAlign'];
  $color?: TypographyProps<'body' | 'heading'>['color'];
}>`
  font-size: ${({ theme, $type, $size, $weight }) =>
    theme.typography[$type || 'body'][$size][
      $weight === 'medium' ? 'regular' : $weight || 'regular'
    ]['fontSize']};
  font-weight: ${({ theme, $type, $size, $weight }) =>
    $weight === 'medium'
      ? 500
      : theme.typography[$type || 'body'][$size][$weight || 'regular'][
          'fontWeight'
        ]};
  line-height: ${({ theme, $type, $size, $weight }) =>
    theme.typography[$type || 'body'][$size][
      $weight === 'medium' ? 'regular' : $weight || 'regular'
    ]['lineHeight']};
  margin: 0;
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
  color: ${({ theme, $variant, $color }) => {
    return theme.colors[$variant || 'neutral']['text'][$color || 'default'];
  }};
`;
