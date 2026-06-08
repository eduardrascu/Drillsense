import styled from 'styled-components';

export const RadarChartVizWrapper = styled.g<{
  $pointerEvents: string;
}>`
  polygon {
    pointer-events: ${({ $pointerEvents }) => $pointerEvents};
  }
`;
