import { CoreChartBase } from '../CoreChartBase';
import { ScatterPlotViz } from './ScatterPlotViz';
import { ScatterPlotProps } from './ScatterPlot.types';

export const ScatterPlot = (props: ScatterPlotProps) => {
  return (
    <CoreChartBase {...props}>
      <ScatterPlotViz />
    </CoreChartBase>
  );
};
