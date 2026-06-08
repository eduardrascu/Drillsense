import { CoreChartBase } from '../CoreChartBase';
import { BubbleChartViz } from './BubbleChartViz';
import { BubbleChartProps } from './BubbleChart.types';

export const BubbleChart = (props: BubbleChartProps) => {
  return (
    <CoreChartBase {...props}>
      <BubbleChartViz
        {...{
          dataKeyZ: props.dataKeys.z,
        }}
      />
    </CoreChartBase>
  );
};
