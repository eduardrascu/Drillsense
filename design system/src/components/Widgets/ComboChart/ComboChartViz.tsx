import { ChartType } from '../CoreChartBase/CoreChartBase.types';
import { ComboChartVizProps } from './ComboChart.types';

import { AreaChartViz } from '../AreaChart';
import { BarChartGroupedViz } from '../BarChartGrouped';
import { BarChartStackedViz } from '../BarChartStacked';
import { BarChartViz } from '../BarChart';
import { LineChartViz } from '../LineChart';
import { LollipopChartGroupedViz } from '../LollipopChartGrouped';
import { LollipopChartStackedViz } from '../LollipopChartStacked';
import { LollipopChartViz } from '../LollipopChart';

export const ComboChartViz = (props: ComboChartVizProps) => {
  return (
    <>
      {props.chartType === ChartType.AreaChart && <AreaChartViz {...props} />}

      {props.chartType === ChartType.BarChart && <BarChartViz {...props} />}

      {props.chartType === ChartType.BarChartGrouped && (
        <BarChartGroupedViz {...props} />
      )}

      {props.chartType === ChartType.BarChartStacked && (
        <BarChartStackedViz {...props} />
      )}

      {props.chartType === ChartType.LineChart && <LineChartViz {...props} />}

      {props.chartType === ChartType.LollipopChart && (
        <LollipopChartViz {...props} />
      )}

      {props.chartType === ChartType.LollipopChartGrouped && (
        <LollipopChartGroupedViz {...props} />
      )}

      {props.chartType === ChartType.LollipopChartStacked && (
        <LollipopChartStackedViz {...props} />
      )}
    </>
  );
};
