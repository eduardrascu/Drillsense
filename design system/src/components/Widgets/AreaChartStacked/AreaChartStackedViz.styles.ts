import styled from 'styled-components';

export const AreaChartStackedVizWrapper = styled.g<{
  $pointerEvents: string;
}>`
  path {
    pointer-events: ${({ $pointerEvents }) => $pointerEvents};
  }
`;
