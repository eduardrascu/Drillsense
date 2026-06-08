import { useTheme } from 'styled-components';
import { Group } from '@visx/group';
import { Line } from '@visx/shape';
import { AxisBottom, AxisLeft, AxisRight, AxisTop } from '@visx/axis';
import { GridColumns, GridRows } from '@visx/grid';

import { CoreChartGridProps, defaultChartParams } from './CoreChartBase.types';

import {
  HorizontalAxisStyledWrapper,
  VerticalAxisStyledWrapper,
} from './CoreChartGrid.styles';

export const CoreChartGrid = ({
  legendPosition,
  topAxisLabel,
  rightAxisLabel,
  bottomAxisLabel,
  leftAxisLabel,
  showTopAxis,
  showRightAxis,
  showBottomAxis,
  showLeftAxis,
  showVerticalAxesLine,
  showVerticalAxesTicks,
  showHorizontalAxesTicks,
  widerLeftTrick,
  widerRightTrick,
  hasGridColumnsPadding,
  hasGridColumnsOffset,
  topAxisTickFormatter,
  rightAxisTickFormatter,
  bottomAxisTickFormatter,
  leftAxisTickFormatter,
  gridProps,
  gridRowsScale,
  calculatedMargins,
  xScale,
  yScale,
  x2Scale,
  y2Scale,
  chartHeight,
  chartWidth,
  xAxisNumTicks,
  yAxisNumTicks,
}: CoreChartGridProps) => {
  const theme = useTheme();

  return (
    <>
      <Group>
        <GridRows
          scale={gridRowsScale}
          width={gridProps.width}
          height={gridProps.height}
          {...(yAxisNumTicks
            ? {
                numTicks: yAxisNumTicks,
              }
            : defaultChartParams.grid.rows.minHeight
            ? {
                numTicks: Math.floor(
                  gridProps.height / defaultChartParams.grid.rows.minHeight
                ),
              }
            : {})}
          top={0}
          left={calculatedMargins.left}
          stroke={theme['neutralBorder']}
          strokeDasharray="1 2"
        />
        {calculatedMargins.top === 0 && (
          <Line
            className="visx-line"
            height={gridProps.height}
            from={{
              x: calculatedMargins.left,
              y: 1,
            }}
            to={{
              x: gridProps.width + calculatedMargins.left,
              y: 1,
            }}
            stroke={theme['neutralBorder']}
            strokeDasharray="1 2"
          />
        )}
      </Group>
      <Group>
        <GridColumns
          scale={xScale}
          width={gridProps.width}
          height={gridProps.height}
          {...(xAxisNumTicks
            ? {
                numTicks: xAxisNumTicks,
              }
            : defaultChartParams.grid.rows.minWidth
            ? {
                numTicks: Math.floor(
                  gridProps.width / defaultChartParams.grid.rows.minWidth
                ),
              }
            : {})}
          top={calculatedMargins.top}
          left={0}
          stroke={theme['neutralBorder']}
          strokeDasharray="1 2"
          {...(hasGridColumnsOffset &&
          hasGridColumnsPadding &&
          'bandwidth' in xScale &&
          typeof xScale!.bandwidth !== 'undefined'
            ? { offset: xScale.bandwidth() / -2 }
            : {})}
        />
        {calculatedMargins.left === 0 && (
          <Line
            className="visx-line"
            height={gridProps.height}
            from={{
              x: 1,
              y: gridProps.height + calculatedMargins.top,
            }}
            to={{
              x: 1,
              y: calculatedMargins.top,
            }}
            stroke={theme['neutralBorder']}
            strokeDasharray="1 2"
          />
        )}
        {hasGridColumnsOffset && hasGridColumnsPadding && (
          <Line
            className="visx-line"
            height={gridProps.height}
            from={{
              x: gridProps.width + calculatedMargins.left,
              y: gridProps.height + calculatedMargins.top,
            }}
            to={{
              x: gridProps.width + calculatedMargins.left + 1,
              y: calculatedMargins.top,
            }}
            stroke={theme['neutralBorder']}
            strokeDasharray="1 2"
          />
        )}
      </Group>

      {showLeftAxis && (
        <VerticalAxisStyledWrapper>
          <AxisLeft
            scale={yScale}
            left={calculatedMargins.left}
            top={0}
            numTicks={yAxisNumTicks ?? 10}
            {...(showVerticalAxesLine ? {} : { hideAxisLine: true })}
            {...(showVerticalAxesTicks ? {} : { hideTicks: true })}
            label={leftAxisLabel}
            labelOffset={calculatedMargins.left - 12}
            labelProps={{
              fill: theme['neutralTextWeak'],
              fontSize: 12,
              transform: 'rotate(-90) translate(0 2)',
              lineHeight: 1.33,
            }}
            {...(leftAxisTickFormatter
              ? { tickFormat: leftAxisTickFormatter }
              : {})}
            tickLabelProps={{
              fill: theme['neutralTextWeak'],
              fontSize: 10,
              lineHeight: 1.4,
              letterSpacing: '0.2px',
              transform: `translate(${
                (widerLeftTrick
                  ? defaultChartParams.axis.left.largeTrick.width
                  : defaultChartParams.axis.left.trick.width) *
                  -1 +
                6.5
              })`,
              textAnchor: 'start',
            }}
            tickLength={4}
            tickLineProps={{
              stroke: theme['neutralBorder'],
            }}
          />
        </VerticalAxisStyledWrapper>
      )}

      {showBottomAxis && (
        <HorizontalAxisStyledWrapper
          $hasGridColumnsPadding={hasGridColumnsPadding}
        >
          <AxisBottom
            scale={xScale}
            left={0}
            top={chartHeight - calculatedMargins.bottom}
            {...(showHorizontalAxesTicks ? {} : { hideTicks: true })}
            label={bottomAxisLabel}
            labelProps={{
              fill: theme['neutralTextWeak'],
              fontSize: 12,
              lineHeight: 1.33,
              transform: `translate(0 12)`,
            }}
            {...(bottomAxisTickFormatter
              ? { tickFormat: bottomAxisTickFormatter }
              : {})}
            tickLabelProps={{
              fill: theme['neutralTextWeak'],
              fontSize: 10,
              lineHeight: 1.4,
              letterSpacing: '0.2px',
              textAnchor: 'middle',
              transform: `translate(0 4.5)`,
            }}
            tickLength={4}
            tickLineProps={{
              stroke: theme['neutralBorder'],
            }}
          />
        </HorizontalAxisStyledWrapper>
      )}

      {showRightAxis && (
        <VerticalAxisStyledWrapper>
          <AxisRight
            scale={y2Scale}
            left={chartWidth - calculatedMargins.right}
            top={0}
            numTicks={yAxisNumTicks ?? 10}
            {...(showVerticalAxesLine ? {} : { hideAxisLine: true })}
            {...(showVerticalAxesTicks ? {} : { hideTicks: true })}
            label={rightAxisLabel}
            labelOffset={
              legendPosition === 'right'
                ? calculatedMargins.right -
                  (defaultChartParams.legend.vertical.width +
                    defaultChartParams.legend.vertical.margin) -
                  14
                : calculatedMargins.right - 14
            }
            labelProps={{
              fill: theme['neutralTextWeak'],
              fontSize: 12,
              lineHeight: 1.33,
            }}
            {...(rightAxisTickFormatter
              ? { tickFormat: rightAxisTickFormatter }
              : {})}
            tickLabelProps={{
              fill: theme['neutralTextWeak'],
              fontSize: 10,
              lineHeight: 1.4,
              letterSpacing: '0.2px',
              transform: `translate(${
                (widerRightTrick
                  ? defaultChartParams.axis.right.largeTrick.width
                  : defaultChartParams.axis.right.trick.width) - 6.5
              })`,
              textAnchor: 'end',
            }}
            tickLength={4}
            tickLineProps={{
              stroke: theme['neutralBorder'],
            }}
          />
        </VerticalAxisStyledWrapper>
      )}

      {showTopAxis && (
        <HorizontalAxisStyledWrapper
          $hasGridColumnsPadding={hasGridColumnsPadding}
        >
          <AxisTop
            scale={x2Scale}
            left={0}
            top={calculatedMargins.top}
            hideAxisLine
            {...(showHorizontalAxesTicks ? {} : { hideTicks: true })}
            label={topAxisLabel}
            labelProps={{
              fill: theme['neutralTextWeak'],
              fontSize: 12,
              lineHeight: 1.33,
              transform: `translate(0 -15)`,
            }}
            {...(topAxisTickFormatter
              ? { tickFormat: topAxisTickFormatter }
              : {})}
            tickLabelProps={{
              fill: theme['neutralTextWeak'],
              fontSize: 10,
              lineHeight: 1.4,
              letterSpacing: '0.2px',
              textAnchor: 'middle',
              transform: `translate(0 -3.5)`,
            }}
            tickLength={4}
            tickLineProps={{
              stroke: theme['neutralBorder'],
            }}
          />
        </HorizontalAxisStyledWrapper>
      )}
    </>
  );
};
