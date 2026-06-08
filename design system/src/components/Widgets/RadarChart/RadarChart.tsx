import { RadarChartBase } from './RadarChartBase';
import { RadarChartViz } from './RadarChartViz';
import { RadarChartBaseProps } from './RadarChart.types';

export const RadarChart = (props: RadarChartBaseProps) => {
  return (
    <RadarChartBase {...props}>
      <RadarChartViz />
    </RadarChartBase>
  );
};
