import styled from 'styled-components';

export const VerticalAxisStyledWrapper = styled.g`
  & .visx-axis-line {
    stroke: ${({ theme }) => theme['borderDefault'] || theme['neutralBorder']};
  }
  & .visx-axis-tick:first-of-type {
    transform: translate(0, -0.25em);
  }
  & .visx-axis-tick:first-of-type line {
    transform: translate(0, 0.25em);
  }
  & .visx-axis-tick:last-of-type {
    transform: translate(0, 0.25em);
  }
  & .visx-axis-tick:last-of-type line {
    transform: translate(0, -0.25em);
  }
`;

export const HorizontalAxisStyledWrapper = styled.g<{
  $hasGridColumnsPadding?: boolean;
}>`
  & .visx-axis-line {
    stroke: ${({ theme }) => theme['borderDefault'] || theme['neutralBorder']};
  }
  & .visx-axis-tick:first-of-type text {
    ${props => !props.$hasGridColumnsPadding && 'text-anchor: start'};
  }
  & .visx-axis-tick:last-of-type text {
    ${props => !props.$hasGridColumnsPadding && 'text-anchor: end'};
  }
`;
