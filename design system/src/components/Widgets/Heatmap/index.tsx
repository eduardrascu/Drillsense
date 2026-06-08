import { useCallback, useMemo } from 'react';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { Group } from '@visx/group';
import { HeatmapRect } from '@visx/heatmap';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Text } from '@visx/text';
import useMeasure from 'react-use-measure';
import { useTheme } from 'styled-components';
import {
  defaultStyles as defaultTooltipStyles,
  TooltipWithBounds,
  useTooltip,
} from '@visx/tooltip';
import { localPoint } from '@visx/event';

import { getContrastColor } from '../../../utils/getContrastColor';
import { ColorRangeLegend } from '../../../components/ColorRangeLegend';
import { defaultChartParams, HeatmapProps, TooltipData } from './Heatmap.types';
import {
  HorizontalAxisStyledWrapper,
  LegendStyledWrapper,
  VerticalAxisStyledWrapper,
} from './Heatmap.styles';

function max<Datum>(data: Datum[], value: (d: Datum) => number): number {
  return Math.max(...data.map(value));
}

const valueFormatter = ({ count: value }: any): string =>
  Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 3,
  }).format(value);

let tooltipTimeout: number;

const structureData = (unstructuredData, dataKeys) => {
  const { x: dataKeyX, y: dataKeyY, z: dataKeyZ } = dataKeys;

  const xBins = new Set(unstructuredData.map(item => item[dataKeyX]));

  const bins = Object.assign(
    {},
    ...Array.from(xBins, item => ({ [item as string]: { bins: [] } }))
  );

  unstructuredData.forEach(item => {
    bins[item[dataKeyX]].bins.push({
      bin: item[dataKeyY],
      count: item[dataKeyZ],
    });
  });

  const structuredData = Object.keys(bins).map(key => {
    return {
      bin: key,
      bins: bins[key].bins,
    };
  });

  return structuredData;
};

export const Heatmap = ({
  data: unstructuredData,
  dataKeys,
  colorPalette = 'sequential_7_1',
  width,
  height,
  showLeftAxis = true,
  showBottomAxis = true,
  legendPosition,
  widerLeftTrick = true,
  withTooltip = true,
  leftAxisTickFormatter,
  bottomAxisTickFormatter,
}: HeatmapProps) => {
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

  const { x: dataKeyX, y: dataKeyY, z: dataKeyZ } = dataKeys;

  const data = useMemo(
    () => structureData(unstructuredData, dataKeys),
    [dataKeys, unstructuredData]
  );

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
  }

  if (showBottomAxis) {
    calculatedMargins.bottom += defaultChartParams.axis.bottom.trick.height;
  }

  const legendProps = {
    height: '100%',
    width: '100%',
  };

  if (legendPosition === 'top') {
    calculatedMargins.top += defaultChartParams.legend.horizontal.height;

    legendProps.height = `${defaultChartParams.legend.horizontal.height}px`;
  }

  if (legendPosition === 'bottom') {
    calculatedMargins.bottom += defaultChartParams.legend.horizontal.height;

    legendProps.height = `${defaultChartParams.legend.horizontal.height}px`;
  }

  const gridProps = {
    width: chartWidth - calculatedMargins.left - calculatedMargins.right,
    height: chartHeight - calculatedMargins.top - calculatedMargins.bottom,
  };

  const bins = d => d.bins;
  const count = d => d.count;

  const colorMax = max(data, d => max(bins(d), count));
  const bucketSizeMax = Math.max(...data.map(d => bins(d).length));

  const xScale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [0, data.length],
        range: [0, gridProps.width],
        nice: true,
      }),
    [data.length, gridProps.width]
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [0, bucketSizeMax],
        range: [gridProps.height, 0],
      }),
    [bucketSizeMax, gridProps.height]
  );

  const axisLeftValues = useMemo(() => new Set<string>(), []);
  data.forEach(dataGroup =>
    dataGroup.bins.map(binItem => axisLeftValues.add(binItem.bin))
  );

  const axisLeftScale = useMemo(
    () =>
      scaleBand({
        domain: [...axisLeftValues],
        range: [gridProps.height, 0],
      }),
    [axisLeftValues, gridProps.height]
  );

  const axisBottomScale = useMemo(
    () =>
      scaleBand({
        domain: data.map(item => item['bin']),
        range: [0, gridProps.width - calculatedMargins.right],
      }),
    [calculatedMargins.right, data, gridProps.width]
  );

  const colorScaleRange = useMemo(
    () => [
      theme['colors']['dataViz'][colorPalette].at(0),
      theme['colors']['dataViz'][colorPalette].at(-1),
    ],
    [colorPalette, theme]
  );

  const colorScale = useMemo(
    () =>
      scaleLinear<string>({
        range: colorScaleRange,
        domain: [0, colorMax],
      }),
    [colorMax, colorScaleRange]
  );

  const opacityScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [0.1, 1],
        domain: [0, colorMax],
      }),
    [colorMax]
  );

  const binWidth = gridProps.width / data.length;
  const binHeight = gridProps.height / bucketSizeMax;

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
    <div style={{ position: 'relative', lineHeight: 0 }}>
      <svg ref={ref} width={chartWidth} height={chartHeight}>
        <Group left={calculatedMargins.left} top={calculatedMargins.top}>
          <HeatmapRect
            data={data}
            xScale={d => xScale(d) ?? 0}
            yScale={d => yScale(d) ?? 0}
            colorScale={colorScale}
            opacityScale={opacityScale}
            binWidth={binWidth}
            binHeight={binHeight}
            gap={defaultChartParams.bin.borderWidth}
          >
            {heatmap =>
              heatmap.map(heatmapBins =>
                heatmapBins.map(bin => (
                  <Group
                    key={`bin-${bin.row}-${bin.column}`}
                    {...(handleMouseMove
                      ? {
                          onMouseMove: event => {
                            handleMouseMove(event, {
                              color: bin.color,
                              data: {
                                column: `${dataKeyX}: ${bin.datum.bin}`,
                                row: `${dataKeyY}: ${bin.bin.bin}`,
                                value: `${dataKeyZ}: ${bin.count}`,
                              },
                            });
                          },
                          onTouchMove: event => {
                            handleMouseMove(event, {
                              color: bin.color,
                              data: {
                                column: `${dataKeyX}: ${bin.datum.bin}`,
                                row: `${dataKeyY}: ${bin.bin.bin}`,
                                value: `${dataKeyZ}: ${bin.count}`,
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
                    <rect
                      width={bin.width}
                      height={bin.height}
                      x={bin.x}
                      y={bin.y - bin.height}
                      rx={defaultChartParams.bin.borderRadius}
                      fill={bin.color}
                      fillOpacity={1}
                    />
                    <Text
                      x={bin.x}
                      y={bin.y - bin.height}
                      dx={bin.width / 2}
                      dy={bin.height / 2}
                      verticalAnchor="middle"
                      textAnchor="middle"
                      fontSize={12}
                      fill={getContrastColor(bin.color, 144)}
                    >
                      {valueFormatter(bin.bin)}
                    </Text>
                  </Group>
                ))
              )
            }
          </HeatmapRect>
        </Group>

        {showLeftAxis && (
          <VerticalAxisStyledWrapper>
            <AxisLeft
              scale={axisLeftScale}
              left={12}
              top={calculatedMargins.top}
              hideAxisLine
              hideTicks
              numTicks={bucketSizeMax}
              {...(leftAxisTickFormatter
                ? { tickFormat: leftAxisTickFormatter }
                : {})}
              tickLabelProps={{
                fill: theme['neutralTextWeak'],
                fontSize: 10,
                lineHeight: 1.4,
                letterSpacing: '0.2px',
                textAnchor: 'start',
              }}
            />
          </VerticalAxisStyledWrapper>
        )}

        {showBottomAxis && (
          <HorizontalAxisStyledWrapper>
            <AxisBottom
              scale={axisBottomScale}
              top={chartHeight - calculatedMargins.bottom - 6}
              left={calculatedMargins.left}
              hideAxisLine
              hideTicks
              numTicks={data.length}
              {...(bottomAxisTickFormatter
                ? { tickFormat: bottomAxisTickFormatter }
                : {})}
              tickLabelProps={{
                fill: theme['neutralTextWeak'],
                fontSize: 10,
                lineHeight: 1.4,
                letterSpacing: '0.2px',
                textAnchor: 'middle',
                transform: `translate(0 6)`,
              }}
            />
          </HorizontalAxisStyledWrapper>
        )}
      </svg>

      {withTooltip && tooltipOpen && tooltipData && (
        <TooltipWithBounds
          top={tooltipTop}
          left={tooltipLeft}
          style={tooltipStyles}
        >
          <div>
            <strong>{tooltipData.data.column}</strong>
          </div>
          <div>{tooltipData.data.row}</div>
          <div>
            <small>{tooltipData.data.value}</small>
          </div>
        </TooltipWithBounds>
      )}

      {legendPosition && (
        <LegendStyledWrapper
          {...(legendPosition === 'top'
            ? {
                $top: 0,
                $left: 0,
                $width: chartWidth,
              }
            : {})}
          {...(legendPosition === 'bottom'
            ? {
                $bottom: 0,
                $left: 0,
                $width: chartWidth,
              }
            : {})}
        >
          <ColorRangeLegend
            colorScaleRange={colorScaleRange}
            gap={defaultChartParams.legend.horizontal.gap}
          />
        </LegendStyledWrapper>
      )}
    </div>
  );
};
