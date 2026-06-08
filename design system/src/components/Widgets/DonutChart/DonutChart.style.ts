import styled from 'styled-components';

export const ChartWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const ChildrenWrapper = styled.div<{
  $radius: number;
  $top: number;
  $left: number;
  $color?: string;
}>`
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: ${({ $radius }) => `${$radius * 2}px`};
  height: ${({ $radius }) => `${$radius * 2}px`};
  border-radius: 50%;
  overflow: hidden;
  margin-top: ${({ $top }) => `${$top}px`};
  margin-left: ${({ $left }) => `${$left}px`};
`;
