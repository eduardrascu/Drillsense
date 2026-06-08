import { Legend } from '../../Legend';

import { CoreChartLegendProps } from './CoreChartBase.types';
import { LegendStyledWrapper } from './CoreChartLegend.styles';

export const CoreChartLegend = ({
  calculatedMargins,
  chartHeight,
  chartWidth,
  colorPalette,
  legendLabels,
  legendPosition,
  legendProps,
}: CoreChartLegendProps) => {
  return (
    <LegendStyledWrapper
      {...(legendPosition === 'top'
        ? {
            $top: 0,
            $left: 0,
            $width: chartWidth,
          }
        : {})}
      {...(legendPosition === 'bottom'
        ? {
            $bottom: 0,
            $left: 0,
            $width: chartWidth,
          }
        : {})}
      {...(legendPosition === 'right'
        ? {
            $right: 0,
            $top: calculatedMargins.top,
            $height:
              chartHeight - calculatedMargins.top - calculatedMargins.bottom,
          }
        : {})}
    >
      <Legend
        labels={legendLabels}
        height={legendProps.height}
        width={legendProps.width}
        colorPalette={colorPalette}
        {...(legendPosition === 'right'
          ? { direction: 'vertical' }
          : { direction: 'horizontal' })}
      ></Legend>
    </LegendStyledWrapper>
  );
};
