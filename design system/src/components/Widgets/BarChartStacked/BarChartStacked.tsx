import { CoreChartBase } from '../CoreChartBase';
import { BarChartStackedViz } from './BarChartStackedViz';
import { BarChartStackedProps } from './BarChartStacked.types';

export const BarChartStacked = (props: BarChartStackedProps) => {
  return (
    <CoreChartBase {...{ ...props, ...{ isStackedChart: true } }}>
      <BarChartStackedViz />
    </CoreChartBase>
  );
};
