/* eslint-disable @typescript-eslint/no-use-before-define */
import { useCallback, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import { useTheme } from 'styled-components';
import Pie from '@visx/shape/lib/shapes/Pie';
import { scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';
import { localPoint } from '@visx/event';
import {
  defaultStyles as defaultTooltipStyles,
  TooltipWithBounds,
  useTooltip,
} from '@visx/tooltip';

import {
  defaultChartParams,
  DonutChartProps,
  TooltipData,
} from './DonutChart.types';
import { ChartWrapper, ChildrenWrapper } from './DonutChart.style';

let tooltipTimeout: number;

export function DonutChart({
  data,
  children,
  colorPalette = 'qualitative_12',
  dataKeys,
  hasColorsOrderedByIndex = false,
  hasLabels = false,
  height,
  isOrderedByIndex = false,
  thicknessPercent,
  width,
  withTooltip = true,
}: DonutChartProps) {
  const [ref, bounds] = useMeasure();
  const theme = useTheme();

  const dataKeyX = dataKeys.x;
  const dataKeyY = dataKeys.y[0];

  const donutThicknessPercent =
    thicknessPercent ?? defaultChartParams.thicknessPercent;

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

  const chartWidth = useMemo(
    () => width ?? (bounds.width || defaultChartParams.width),
    [bounds.width, width]
  );
  const chartHeight = useMemo(
    () => height ?? (bounds.height || defaultChartParams.height),
    [bounds.height, height]
  );

  const donutRadius = useMemo(
    () => Math.min(chartWidth, chartHeight) / 2,
    [chartHeight, chartWidth]
  );

  const innerRadius = useMemo(
    () => donutRadius - (donutRadius * donutThicknessPercent) / 100,
    [donutRadius, donutThicknessPercent]
  );

  const getPieValue = d => d[dataKeyY];

  const getFillColor = useMemo(
    () =>
      scaleOrdinal({
        domain: data.map(d => d[dataKeyX]),
        range: [...theme['colors']['dataViz'][colorPalette]],
      }),
    [colorPalette, data, dataKeyX, theme]
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

  return (
    <ChartWrapper>
      <div style={{ position: 'relative', lineHeight: 0 }}>
        <svg ref={ref} width={chartWidth} height={chartHeight}>
          <Group top={chartWidth / 2} left={chartHeight / 2}>
            <Pie
              data={data}
              outerRadius={donutRadius}
              innerRadius={innerRadius}
              {...(isOrderedByIndex && { pieSortValues: () => 1 })}
              pieValue={getPieValue}
              startAngle={0}
            >
              {pie =>
                pie.arcs.map(arc => {
                  const [centroidX, centroidY] = pie.path.centroid(arc);
                  const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

                  return (
                    <g
                      key={`pie-arc-${arc.index}`}
                      {...(handleMouseMove
                        ? {
                            onMouseMove: event => {
                              handleMouseMove(event, {
                                color: hasColorsOrderedByIndex
                                  ? theme['colors']['dataViz'][colorPalette][arc.index]
                                  : getFillColor(arc.data[dataKeyX]),
                                data: {
                                  key: arc.data[dataKeyX],
                                  index: dataKeyY,
                                  value: arc.data[dataKeyY],
                                },
                              });
                            },
                            onTouchMove: event => {
                              handleMouseMove(event, {
                                color: hasColorsOrderedByIndex
                                  ? theme['colors']['dataViz'][colorPalette][arc.index]
                                  : getFillColor(arc.data[dataKeyX]),
                                data: {
                                  key: arc.data[dataKeyX],
                                  index: dataKeyY,
                                  value: arc.data[dataKeyY],
                                },
                              });
                            },
                          }
                        : {})}
                      {...(handleMouseLeave
                        ? {
                            onMouseLeave: handleMouseLeave,
                            onTouchEnd: handleMouseLeave,
                          }
                        : {})}
                    >
                      <path
                        d={pie.path(arc) ?? ''}
                        fill={
                          hasColorsOrderedByIndex
                            ? theme['colors']['dataViz'][colorPalette][arc.index]
                            : getFillColor(arc.data[dataKeyX])
                        }
                        fillOpacity={0.8}
                        stroke={theme['neutralBackgroundBase']}
                        strokeLinecap="round"
                        strokeWidth={2}
                      />
                      <g>
                        {hasLabels && hasSpaceForLabel && (
                          <text
                            dy=".33em"
                            fill={theme['neutralTextInverted']}
                            fontSize={12}
                            pointerEvents="none"
                            textAnchor="middle"
                            x={centroidX}
                            y={centroidY}
                          >
                            {arc.data[dataKeyX]}
                          </text>
                        )}
                      </g>
                    </g>
                  );
                })
              }
            </Pie>
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

      {children && (
        <ChildrenWrapper
          $color={theme['neutralText']}
          $left={0}
          $radius={innerRadius}
          $top={0}
        >
          {children}
        </ChildrenWrapper>
      )}
    </ChartWrapper>
  );
}
