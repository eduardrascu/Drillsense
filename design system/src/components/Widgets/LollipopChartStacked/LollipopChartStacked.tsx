import { CoreChartBase } from '../CoreChartBase';
import { LollipopChartStackedViz } from './LollipopChartStackedViz';
import { LollipopChartStackedProps } from './LollipopChartStacked.types';

export const LollipopChartStacked = (props: LollipopChartStackedProps) => {
  return (
    <CoreChartBase
      {...{
        ...props,
        ...{ isStackedChart: true },
      }}
    >
      <LollipopChartStackedViz />
    </CoreChartBase>
  );
};
