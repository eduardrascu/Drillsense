import { CoreChartBase } from '../CoreChartBase';
import { AreaChartStackedViz } from './AreaChartStackedViz';
import { AreaChartStackedProps } from './AreaChartStacked.types';

export const AreaChartStacked = (props: AreaChartStackedProps) => {
  return (
    <CoreChartBase
      {...{
        ...props,
        ...{
          hasGridColumnsPadding: false,
          isStackedChart: true,
        },
      }}
    >
      <AreaChartStackedViz />
    </CoreChartBase>
  );
};
