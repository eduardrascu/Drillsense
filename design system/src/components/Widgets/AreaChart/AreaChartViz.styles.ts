import styled from 'styled-components';

export const AreaChartVizWrapper = styled.g<{
  $pointerEvents: string;
}>`
  path {
    pointer-events: ${({ $pointerEvents }) => $pointerEvents};
  }
`;
