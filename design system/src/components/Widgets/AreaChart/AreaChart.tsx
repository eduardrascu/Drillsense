import { CoreChartBase } from '../CoreChartBase';
import { AreaChartViz } from './AreaChartViz';
import { AreaChartProps } from './AreaChart.types';

export const AreaChart = (props: AreaChartProps) => {
  return (
    <CoreChartBase {...props}>
      <AreaChartViz />
    </CoreChartBase>
  );
};
