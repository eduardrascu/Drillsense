import styled from 'styled-components';

export const LegendContainerStyled = styled.div<{
  $gap?: number;
}>`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 1.33;
  gap: ${({ $gap }) => `${$gap}px`};
  color: ${({ theme }) => theme['neutralText']};
`;

export const ColorRangeStyled = styled.div<{
  $colorRangeRange?: string[];
}>`
  background: linear-gradient(
    to right,
    ${({ $colorRangeRange }) =>
      $colorRangeRange
        ? `${$colorRangeRange[0]} 14%,
			${`color-mix(in srgb, ${$colorRangeRange[0]} 84%, ${$colorRangeRange[1]})`} 14% 28%,
			${`color-mix(in srgb, ${$colorRangeRange[0]} 70%, ${$colorRangeRange[1]})`} 28% 42%,
			${`color-mix(in srgb, ${$colorRangeRange[0]} 56%, ${$colorRangeRange[1]})`} 42% 56%,
			${`color-mix(in srgb, ${$colorRangeRange[0]} 42%, ${$colorRangeRange[1]})`} 56% 70%,
			${`color-mix(in srgb, ${$colorRangeRange[0]} 28%, ${$colorRangeRange[1]})`} 70% 84%,
			${$colorRangeRange[1]} 84%`
        : 'none'}
  );
  width: 100px;
  border-radius: 8px;
  height: 8px;
`;
