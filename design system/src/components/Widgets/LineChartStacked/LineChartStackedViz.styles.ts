import styled from 'styled-components';

export const LineChartStackedVizWrapper = styled.g<{
  $pointerEvents: string;
}>`
  path {
    pointer-events: ${({ $pointerEvents }) => $pointerEvents};
  }
`;
