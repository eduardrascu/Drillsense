import { useTheme } from 'styled-components';

import { LegendContainer, LegendItem } from './styles';

type DataVizPalette = 'sequential_7_1' | 'qualitative_2_1' | 'qualitative_2_2' | 'qualitative_4' | 'qualitative_12';

export interface LegendProps {
  labels: string[];
  colorPalette?: DataVizPalette;
  direction?: 'horizontal' | 'vertical';
  height?: string;
  width?: string;
}

export const Legend = ({
  labels,
  colorPalette = 'qualitative_2_1',
  direction = 'horizontal',
  height = '100%',
  width = '100%',
}: LegendProps) => {
  const theme = useTheme();

  return (
    <LegendContainer $direction={direction} $height={height} $width={width}>
      {labels.map((label, index) => (
        <LegendItem
          key={index}
          $color={
            theme.colors.dataViz[colorPalette][index] ??
            theme.colors.dataViz[colorPalette][0]
          }
        >
          {label}
        </LegendItem>
      ))}
    </LegendContainer>
  );
};
