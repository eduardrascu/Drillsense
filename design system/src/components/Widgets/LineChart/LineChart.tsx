import { CoreChartBase } from '../CoreChartBase';
import { LineChartViz } from './LineChartViz';
import { LineChartProps } from './LineChart.types';

export const LineChart = (props: LineChartProps) => {
  return (
    <CoreChartBase {...props}>
      <LineChartViz />
    </CoreChartBase>
  );
};
