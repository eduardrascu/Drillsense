import { CoreChartBase } from '../CoreChartBase';
import { LollipopChartGroupedViz } from './LollipopChartGroupedViz';
import { LollipopChartGroupedProps } from './LollipopChartGrouped.types';

export const LollipopChartGrouped = (props: LollipopChartGroupedProps) => {
  return (
    <CoreChartBase {...props}>
      <LollipopChartGroupedViz />
    </CoreChartBase>
  );
};
