import styled from 'styled-components';

export const LegendStyledWrapper = styled.div<{
  $top?: number;
  $right?: number;
  $bottom?: number;
  $left?: number;
  $width?: number;
  $height?: number;
}>`
  position: absolute;
  top: ${({ $top }) => ($top !== undefined ? `${$top}px` : 'unset')};
  right: ${({ $right }) => ($right !== undefined ? `${$right}px` : 'unset')};
  bottom: ${({ $bottom }) =>
    $bottom !== undefined ? `${$bottom}px` : 'unset'};
  left: ${({ $left }) => ($left !== undefined ? `${$left}px` : 'unset')};
  width: ${({ $width }) => ($width !== undefined ? `${$width}px` : 'auto')};
  height: ${({ $height }) => ($height !== undefined ? `${$height}px` : 'auto')};
`;
