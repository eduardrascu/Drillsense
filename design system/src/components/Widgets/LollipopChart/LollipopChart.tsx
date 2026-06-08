import { CoreChartBase } from '../CoreChartBase';
import { LollipopChartViz } from './LollipopChartViz';
import { LollipopChartProps } from './LollipopChart.types';

export const LollipopChart = (props: LollipopChartProps) => {
  return (
    <CoreChartBase {...props}>
      <LollipopChartViz />
    </CoreChartBase>
  );
};
