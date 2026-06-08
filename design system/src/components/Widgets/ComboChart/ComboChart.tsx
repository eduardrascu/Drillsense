import { CoreChartBase } from '../CoreChartBase';
import { ComboChartViz } from './ComboChartViz';
import { ComboChartProps } from './ComboChart.types';

export const ComboChart = (props: ComboChartProps) => {
  return (
    <CoreChartBase {...props}>
      <ComboChartViz />
      <ComboChartViz />
    </CoreChartBase>
  );
};
