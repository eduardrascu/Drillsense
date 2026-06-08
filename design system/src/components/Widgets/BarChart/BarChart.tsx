import { CoreChartBase } from '../CoreChartBase';
import { BarChartViz } from './BarChartViz';
import { BarChartProps } from './BarChart.types';

export const BarChart = (props: BarChartProps) => {
  return (
    <CoreChartBase {...props}>
      <BarChartViz />
    </CoreChartBase>
  );
};
