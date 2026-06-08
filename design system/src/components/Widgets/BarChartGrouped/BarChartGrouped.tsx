import { CoreChartBase } from '../CoreChartBase';
import { BarChartGroupedViz } from './BarChartGroupedViz';
import { BarChartGroupedProps } from './BarChartGrouped.types';

export const BarChartGrouped = (props: BarChartGroupedProps) => {
  return (
    <CoreChartBase {...props}>
      <BarChartGroupedViz />
    </CoreChartBase>
  );
};
