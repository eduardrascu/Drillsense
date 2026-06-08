import { CoreChartBase } from '../CoreChartBase';
import { LineChartStackedViz } from './LineChartStackedViz';
import { LineChartStackedProps } from './LineChartStacked.types';

export const LineChartStacked = (props: LineChartStackedProps) => {
  return (
    <CoreChartBase
      {...{
        ...props,
        ...{ isStackedChart: true },
      }}
    >
      <LineChartStackedViz />
    </CoreChartBase>
  );
};
