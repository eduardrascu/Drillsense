import { useCallback, useMemo } from 'react';
import {
  defaultStyles as defaultTooltipStyles,
  TooltipWithBounds,
  useTooltip,
} from '@visx/tooltip';
import { Group } from '@visx/group';
import { localPoint } from '@visx/event';
import { scaleLinear } from '@visx/scale';
import useMeasure from 'react-use-measure';
import { useTheme } from 'styled-components';

import { RadarChartGrid } from './RadarChartGrid';

import {
  defaultChartParams,
  RadarChartBaseProps,
  RadarChartVizProps,
  TooltipData,
} from './RadarChart.types';

let tooltipTimeout: number;

export function RadarChartBase({
  data,
  children,
  colorPalette = 'qualitative_2_1',
  dataKeys,
  height,
  levels = 5,
  niceScale = true,
  pointerEvents = 'none',
  width,
  withTooltip = true,
}: RadarChartBaseProps) {
  const [ref, bounds] = useMeasure();
  const theme = useTheme();

  const dataKeyX = dataKeys.x;
  const dataKeysY = dataKeys.y;

  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  } = useTooltip<TooltipData>();

  const tooltipStyles = {
    ...defaultTooltipStyles,
    width: defaultChartParams.tooltip.width,
    minWidth: defaultChartParams.tooltip.minWidth,
    maxWidth: defaultChartParams.tooltip.maxWidth,
    backgroundColor: theme['neutralBackgroundBase'],
    color: theme['neutralText'],
    border: `1px solid ${theme['neutralBorder']}`,
    borderRadius: 6,
    boxShadow:
      '0px 2px 4px 0px rgba(20, 28, 44, 0.06),0px 4px 8px 2px rgba(20, 28, 44, 0.06)',
  };

  const chartWidth = width ?? (bounds.width || defaultChartParams.width);
  const chartHeight = height ?? (bounds.height || defaultChartParams.height);

  const gridProps = {
    width:
      chartWidth -
      defaultChartParams.padding.left -
      defaultChartParams.padding.right,
    height:
      chartHeight -
      defaultChartParams.padding.top -
      defaultChartParams.padding.bottom,
  };

  const chartRadius = useMemo(
    () => Math.min(gridProps.width, gridProps.height) / 2,
    [gridProps.height, gridProps.width]
  );

  const maxValueYScale = useMemo(
    () =>
      Math.max(
        ...data.map(dataItem =>
          Math.max(...dataKeysY.map(key => dataItem[key]))
        )
      ),
    [data, dataKeysY]
  );

  const levelsLabelFormatter = (value: number): string =>
    Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [0, chartRadius],
        domain: [0, maxValueYScale],
        nice: niceScale,
      }),
    [chartRadius, maxValueYScale, niceScale]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent | React.TouchEvent, { data, color }) => {
      if (tooltipTimeout) clearTimeout(tooltipTimeout);

      if (!data) return;

      const point = localPoint(event) || { x: 0, y: 0 };
      if (!point) return;

      const { x, y } = point || {
        x: 0,
        y: 0,
      };

      showTooltip({
        tooltipLeft: x,
        tooltipTop: y,
        tooltipData: {
          data,
          color,
        },
      });
    },
    [showTooltip]
  );

  const handleMouseLeave = useCallback(() => {
    tooltipTimeout = window.setTimeout(() => {
      hideTooltip();
    }, defaultChartParams.tooltip.leaveTimeout);
  }, [hideTooltip]);

  const renderChildren = () => {
    return React.Children.map(children, (child, i) => {
      if (i === 0 && React.isValidElement(child)) {
        return React.cloneElement(child, {
          data,
          colorPalette,
          dataKeyX,
          dataKeysY,
          handleMouseLeave,
          handleMouseMove,
          pointerEvents,
          yScale,
        } as RadarChartVizProps);
      }
      return child;
    });
  };

  return (
    <div style={{ position: 'relative', lineHeight: 0 }}>
      <svg ref={ref} width={chartWidth} height={chartHeight}>
        <Group top={chartHeight / 2} left={chartWidth / 2}>
          <RadarChartGrid
            {...{
              data,
              chartRadius,
              dataKeyX,
              levels,
              levelsLabelFormatter,
              maxValueYScale,
            }}
          />

          {children && renderChildren()}
        </Group>
      </svg>

      {withTooltip && tooltipOpen && tooltipData && (
        <TooltipWithBounds
          top={tooltipTop}
          left={tooltipLeft}
          style={tooltipStyles}
        >
          <div style={{ color: tooltipData.color }}>
            <strong>{tooltipData.data.key}</strong>
          </div>
          <div>
            <small>
              {tooltipData.data.value} {tooltipData.data.index}
            </small>
          </div>
        </TooltipWithBounds>
      )}
    </div>
  );
}
