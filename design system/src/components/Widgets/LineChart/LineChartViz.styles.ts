import styled from 'styled-components';

export const LineChartVizWrapper = styled.g<{
  $pointerEvents: string;
}>`
  path {
    pointer-events: ${({ $pointerEvents }) => $pointerEvents};
  }
`;
