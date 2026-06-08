import { styled } from 'styled-components';

export const SankeyComponentWrapper = styled.div<{
  $width;
  $height;
}>`
  position: relative;
  line-height: 0;
  width: ${({ $width }) => ($width ? `${$width}px` : 'auto')};
  height: ${({ $height }) => ($height ? `${$height}px` : 'auto')};
`;

export const SankeyChartWrapper = styled.div<{
  $top: number;
}>`
  position: relative;
  top: ${({ $top }) => ($top ? `${$top}px` : 0)};
`;

export const SankeyHeader = styled.div<{
  $marginBottom: number;
}>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}px`};
`;

export const CategoryName = styled.div<{
  $lineHeight: number;
  $fontSize: number;
}>`
  line-height: ${({ $lineHeight }) => `${$lineHeight}px`};
  color: ${({ theme }) => theme['neutralText']};
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  font-weight: 600;
  font-style: normal;
`;

export const LinkValueLabelWrapper = styled.div`
  position: relative;
  opacity: 0.9;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(20, 28, 44, 0.06),
    0px 4px 8px 2px rgba(20, 28, 44, 0.06);
  background-color: ${({ theme }) => theme['neutralBackgroundBase']};
  padding: 2px 8px;
  width: fit-content;
  height: auto;
  line-height: 14px;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme['neutralText']};
  font-size: 10px;
  font-weight: 400;
  font-style: normal;
  translate: calc(-100% - 20px);
`;

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
