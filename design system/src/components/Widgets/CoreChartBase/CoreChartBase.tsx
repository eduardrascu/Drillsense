import React, { useCallback, useMemo } from 'react';
import { scaleBand, scaleLinear, scaleTime } from '@visx/scale';
import {
  defaultStyles as defaultTooltipStyles,
  TooltipWithBounds,
  useTooltip,
} from '@visx/tooltip';
import { localPoint } from '@visx/event';

import useMeasure from 'react-use-measure';

import { useTheme } from 'styled-components';

import { CoreChartGrid } from './CoreChartGrid';
import { CoreChartLegend } from './CoreChartLegend';
import { CoreChartPlaceholder } from './CoreChartPlaceholder';
import {
  CoreChartBaseProps,
  CoreChartVizProps,
  defaultChartParams,
  TooltipData,
} from './CoreChartBase.types';

let tooltipTimeout: number;

export const CoreChartBase = ({
  data,
  chartType,
  xScaleType = 'band',
  isStackedChart = false,
  children,
  dataKeys,
  curveType = 'curveLinear',
  colorPalette = 'qualitative_2_1',
  chartType2,
  isStackedChart2 = false,
  dataKeys2,
  curveType2,
  width,
  height,
  legendPosition,
  topAxisLabel,
  rightAxisLabel,
  bottomAxisLabel,
  leftAxisLabel,
  showTopAxis,
  showRightAxis,
  showBottomAxis = true,
  showLeftAxis = true,
  showVerticalAxesLine,
  showVerticalAxesTicks,
  showHorizontalAxesTicks,
  widerLeftTrick,
  widerRightTrick,
  hasGridColumnsPadding = true,
  hasGridColumnsOffset = true,
  withSecondScaleGridColumns,
  topAxisTickFormatter,
  rightAxisTickFormatter,
  bottomAxisTickFormatter,
  leftAxisTickFormatter,
  roundScale = true,
  niceScale = true,
  withTooltip,
  xAxisNumTicks,
  yAxisNumTicks,
}: CoreChartBaseProps) => {
  const [ref, bounds] = useMeasure();
  const theme = useTheme();

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

  const calculatedMargins = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  if (showLeftAxis) {
    if (widerLeftTrick) {
      calculatedMargins.left += defaultChartParams.axis.left.largeTrick.width;
    } else {
      calculatedMargins.left += defaultChartParams.axis.left.trick.width;
    }

    if (leftAxisLabel) {
      calculatedMargins.left += defaultChartParams.axis.left.label.width;
    }
  }

  if (showBottomAxis) {
    calculatedMargins.bottom += defaultChartParams.axis.bottom.trick.height;

    if (bottomAxisLabel) {
      calculatedMargins.bottom += defaultChartParams.axis.bottom.label.height;
    }
  }

  if (showRightAxis) {
    if (widerRightTrick) {
      calculatedMargins.right += defaultChartParams.axis.right.largeTrick.width;
    } else {
      calculatedMargins.right += defaultChartParams.axis.right.trick.width;
    }

    if (rightAxisLabel) {
      calculatedMargins.right += defaultChartParams.axis.right.label.width;
    }
  }

  if (showTopAxis) {
    calculatedMargins.top += defaultChartParams.axis.top.trick.height;

    if (topAxisLabel) {
      calculatedMargins.top += defaultChartParams.axis.top.label.height;
    }
  }

  const legendProps = {
    height: '100%',
    width: '100%',
  };

  if (legendPosition === 'top') {
    calculatedMargins.top += defaultChartParams.legend.horizontal.height;
    calculatedMargins.top += defaultChartParams.legend.horizontal.margin;

    legendProps.height = `${defaultChartParams.legend.horizontal.height}px`;
  }

  if (legendPosition === 'bottom') {
    calculatedMargins.bottom += defaultChartParams.legend.horizontal.height;
    calculatedMargins.bottom += defaultChartParams.legend.horizontal.margin;

    legendProps.height = `${defaultChartParams.legend.horizontal.height}px`;
  }

  if (legendPosition === 'right') {
    calculatedMargins.right += defaultChartParams.legend.vertical.width;
    calculatedMargins.right += defaultChartParams.legend.vertical.margin;

    legendProps.width = `${defaultChartParams.legend.vertical.width}px`;
  }

  const gridProps = {
    width: chartWidth - calculatedMargins.left - calculatedMargins.right,
    height: chartHeight - calculatedMargins.top - calculatedMargins.bottom,
  };

  const dataKeyX = dataKeys.x;
  const dataKeysY = dataKeys.y;

  const getX = useCallback(
    d => {
      switch (xScaleType) {
        case 'time':
          return new Date(d[dataKeyX]).valueOf();

        case 'band':
        case 'linear':
        default:
          return d[dataKeyX];
      }
    },
    [dataKeyX, xScaleType]
  );
  const getY = useCallback(d => d[dataKeysY[0]], [dataKeysY]);

  const xScale = useMemo(() => {
    switch (xScaleType) {
      case 'linear':
        return scaleLinear<number>({
          domain: [Math.min(...data.map(getX)), Math.max(...data.map(getX))],
          range: [calculatedMargins.left, chartWidth - calculatedMargins.right],
          round: roundScale,
          nice: niceScale,
          clamp: true,
        });

      case 'time':
        return scaleTime<number>({
          domain: [Math.min(...data.map(getX)), Math.max(...data.map(getX))],
          range: [calculatedMargins.left, chartWidth - calculatedMargins.right],
          round: roundScale,
          nice: niceScale,
          clamp: true,
        });

      case 'band':
      default:
        return scaleBand<string>({
          domain: data.map(d => getX(d)),
          range: [calculatedMargins.left, chartWidth - calculatedMargins.right],
          round: roundScale,
          padding: hasGridColumnsPadding ? 0 : -1,
        });
    }
  }, [
    xScaleType,
    data,
    getX,
    calculatedMargins.left,
    calculatedMargins.right,
    chartWidth,
    roundScale,
    niceScale,
    hasGridColumnsPadding,
  ]);

  const maxValueYScale = useMemo(
    () =>
      Math.max(
        ...data.map(dataItem =>
          Math.max(...dataKeysY.map(key => (dataItem[key] ? dataItem[key] : 0)))
        )
      ),
    [data, dataKeysY]
  );

  const stackedMaxValueYScale = useMemo(
    () =>
      Math.max(
        ...data.reduce((allTotals, currentKey) => {
          const keyTotal = dataKeysY.reduce((segmentTotal, k) => {
            segmentTotal += Number(currentKey[k]);
            return segmentTotal;
          }, 0);
          allTotals.push(keyTotal);
          return allTotals;
        }, [] as number[])
      ) *
      (1 + defaultChartParams.grid.columns.valuesOffsetPercent / 100),
    [data, dataKeysY]
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [0, isStackedChart ? stackedMaxValueYScale : maxValueYScale],
        range: [chartHeight - calculatedMargins.bottom, calculatedMargins.top],
        nice: niceScale,
      }),
    [
      isStackedChart,
      stackedMaxValueYScale,
      maxValueYScale,
      chartHeight,
      calculatedMargins.bottom,
      calculatedMargins.top,
      niceScale,
    ]
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

  const legendLabels = [...dataKeys.y];

  let gridRowsScale = yScale;

  const dataKeyX2 = dataKeys2?.x ?? dataKeyX;
  const dataKeysY2 = dataKeys2?.y ?? dataKeysY;

  const getX2 = useCallback(
    d => {
      switch (xScaleType) {
        case 'time':
          return new Date(d[dataKeyX2]).valueOf();

        case 'band':
        case 'linear':
        default:
          return d[dataKeyX2];
      }
    },
    [dataKeyX2, xScaleType]
  );
  const getY2 = useCallback(d => d[dataKeysY2[0]], [dataKeysY2]);

  const x2Scale = useMemo(() => {
    switch (xScaleType) {
      case 'linear':
        return scaleLinear<number>({
          domain: [Math.min(...data.map(getX2)), Math.max(...data.map(getX2))],
          range: [calculatedMargins.left, chartWidth - calculatedMargins.right],
          round: roundScale,
          nice: niceScale,
          clamp: true,
        });

      case 'time':
        return scaleTime<number>({
          domain: [Math.min(...data.map(getX2)), Math.max(...data.map(getX2))],
          range: [calculatedMargins.left, chartWidth - calculatedMargins.right],
          round: roundScale,
          nice: niceScale,
          clamp: true,
        });

      case 'band':
      default:
        return scaleBand<string>({
          domain: data.map(d => getX2(d)),
          range: [calculatedMargins.left, chartWidth - calculatedMargins.right],
          round: roundScale,
          padding: hasGridColumnsPadding ? 0 : -1,
        });
    }
  }, [
    xScaleType,
    data,
    calculatedMargins.left,
    calculatedMargins.right,
    chartWidth,
    roundScale,
    hasGridColumnsPadding,
    getX2,
    niceScale,
  ]);

  const maxValueY2Scale = useMemo(
    () =>
      Math.max(
        ...data.map(dataItem =>
          Math.max(...dataKeysY2.map(key => dataItem[key]))
        )
      ),
    [data, dataKeysY2]
  );

  const stackedMaxValueY2Scale = useMemo(
    () =>
      Math.max(
        ...data.reduce((allTotals, currentKey) => {
          const keyTotal = dataKeysY2.reduce((segmentTotal, k) => {
            segmentTotal += Number(currentKey[k]);
            return segmentTotal;
          }, 0);
          allTotals.push(keyTotal);
          return allTotals;
        }, [] as number[])
      ) *
      (1 + defaultChartParams.grid.columns.valuesOffsetPercent / 100),
    [data, dataKeysY2]
  );

  const y2Scale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [0, isStackedChart2 ? stackedMaxValueY2Scale : maxValueY2Scale],
        range: [chartHeight - calculatedMargins.bottom, calculatedMargins.top],
        nice: niceScale,
      }),
    [
      isStackedChart2,
      stackedMaxValueY2Scale,
      maxValueY2Scale,
      chartHeight,
      calculatedMargins.bottom,
      calculatedMargins.top,
      niceScale,
    ]
  );

  if (dataKeys2?.y) {
    legendLabels.push(...dataKeys2.y);
  }

  if (withSecondScaleGridColumns && dataKeys2?.y) {
    gridRowsScale = y2Scale;
  }

  const commonChartOptions = {
    calculatedMargins: calculatedMargins,
    colorPalette: colorPalette,
    data: data,
    defaultChartParams: defaultChartParams,
    gridProps: gridProps,
    handleMouseLeave: handleMouseLeave,
    handleMouseMove: handleMouseMove,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, i) => {
      if (i === 0 && React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...commonChartOptions,
          chartType: chartType,
          colorIndex: 0,
          curveType: curveType,
          dataKeyX: dataKeyX,
          dataKeysY: dataKeysY,
          getX: getX,
          getY: getY,
          xScale: xScale,
          yScale: yScale,
          xScaleType: xScaleType,
        } as CoreChartVizProps);
      }

      // For second Chart
      if (i === 1 && React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...commonChartOptions,
          chartType: chartType2,
          colorIndex: dataKeysY.length,
          curveType: curveType2 ?? curveType,
          dataKeyX: dataKeyX2,
          dataKeysY: dataKeysY2,
          getX: getX2,
          getY: getY2,
          xScale: x2Scale,
          yScale: y2Scale,
          xScaleType: xScaleType,
        } as CoreChartVizProps);
      }

      return child;
    });
  };

  return (
    <div style={{ position: 'relative', lineHeight: 0 }}>
      <svg ref={ref} width={chartWidth} height={chartHeight}>
        <CoreChartGrid
          {...{
            bottomAxisLabel,
            bottomAxisTickFormatter,
            calculatedMargins,
            chartHeight,
            chartWidth,
            gridProps,
            gridRowsScale,
            hasGridColumnsOffset,
            hasGridColumnsPadding,
            leftAxisLabel,
            leftAxisTickFormatter,
            legendPosition,
            rightAxisLabel,
            rightAxisTickFormatter,
            showBottomAxis,
            showHorizontalAxesTicks,
            showLeftAxis,
            showRightAxis,
            showTopAxis,
            showVerticalAxesLine,
            showVerticalAxesTicks,
            topAxisLabel,
            topAxisTickFormatter,
            withSecondScaleGridColumns,
            widerLeftTrick,
            widerRightTrick,
            x2Scale,
            xScale,
            y2Scale,
            yScale,
            xAxisNumTicks,
            yAxisNumTicks,
          }}
        />

        {children ? (
          renderChildren()
        ) : (
          <CoreChartPlaceholder {...{ calculatedMargins, gridProps }} />
        )}
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

      {legendPosition && (
        <CoreChartLegend
          {...{
            chartWidth,
            legendPosition,
            calculatedMargins,
            chartHeight,
            legendLabels,
            legendProps,
            colorPalette,
          }}
        />
      )}
    </div>
  );
};
