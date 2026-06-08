import { Group } from '@visx/group';
import { AreaStack, LinePath } from '@visx/shape';
import { useTheme } from 'styled-components';
import * as allCurves from '@visx/curve';

import { AreaChartStackedVizProps } from './AreaChartStacked.types';
import { AreaChartStackedVizWrapper } from './AreaChartStackedViz.styles';

export const AreaChartStackedViz = ({
  data,
  getX,
  xScale,
  yScale,
  dataKeysY,
  colorPalette,
  colorIndex,
  handleMouseMove,
  handleMouseLeave,
  curveType = 'curveLinear',
  pointerEvents = 'none',
  calculatedMargins,
}: AreaChartStackedVizProps) => {
  const theme = useTheme();

  return dataKeysY.map((dataKey, index) => (
    <AreaChartStackedVizWrapper
      key={`areaChartPath-${dataKey}`}
      $pointerEvents={pointerEvents}
    >
      <AreaStack
        top={calculatedMargins.top}
        left={calculatedMargins.left}
        keys={dataKeysY}
        data={data}
        x={d => (xScale(getX(d.data)) ?? 0) + xScale.bandwidth() / 2}
        y0={d => yScale(d[0]) ?? 0}
        y1={d => yScale(d[1]) ?? 0}
      >
        {({ stacks, path }) =>
          stacks.map((stack, index) => (
            <path
              key={`stack-${stack.key}`}
              d={path(stack) ?? ''}
              stroke="transparent"
              fill={theme['colors']['dataViz'][colorPalette][colorIndex + index]}
              fillOpacity={0.1}
              strokeWidth={1}
              strokeOpacity={1}
              shapeRendering="geometricPrecision"
            />
          ))
        }
      </AreaStack>
      <LinePath
        curve={allCurves[curveType]}
        data={data}
        x={d => (xScale(getX(d)) ?? 0) + xScale.bandwidth() / 2}
        y={d =>
          yScale(d[dataKeysY[index]] + (d[dataKeysY[index - 1]] ?? 0)) ?? 0
        }
        stroke={theme['colors']['dataViz'][colorPalette][colorIndex + index]}
        strokeWidth={1}
        strokeOpacity={1}
        shapeRendering="geometricPrecision"
      />

      {data.map((d, i) => (
        <Group
          key={`point-${i}-${getX(d)}-${d[dataKey]}`}
          {...(handleMouseMove
            ? {
                onMouseMove: event => {
                  handleMouseMove(event, {
                    color: theme['colors']['dataViz'][colorPalette][colorIndex + index],
                    data: {
                      key: getX(d),
                      index: dataKey,
                      value: d[dataKey],
                    },
                  });
                },
                onTouchMove: event => {
                  handleMouseMove(event, {
                    color: theme['colors']['dataViz'][colorPalette][colorIndex + index],
                    data: {
                      key: getX(d),
                      index: dataKey,
                      value: d[dataKey],
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
          <circle
            key={`point-bg-1-${i}-${getX(d)}-${d[dataKey]}`}
            cx={(xScale(getX(d)) ?? 0) + xScale.bandwidth() / 2}
            cy={
              yScale(d[dataKeysY[index]] + (d[dataKeysY[index - 1]] ?? 0)) ?? 0
            }
            r={8}
            fill={'transparent'}
            fillOpacity={0}
          />
          <circle
            key={`point-bg-2-${i}-${getX(d)}-${d[dataKey]}`}
            cx={(xScale(getX(d)) ?? 0) + xScale.bandwidth() / 2}
            cy={
              yScale(d[dataKeysY[index]] + (d[dataKeysY[index - 1]] ?? 0)) ?? 0
            }
            r={6}
            fill={theme['neutralBackgroundBase']}
            fillOpacity={1}
          />
          <circle
            key={`point-${i}-${getX(d)}-${d[dataKey]}`}
            cx={(xScale(getX(d)) ?? 0) + xScale.bandwidth() / 2}
            cy={
              yScale(d[dataKeysY[index]] + (d[dataKeysY[index - 1]] ?? 0)) ?? 0
            }
            r={3}
            fill={theme['neutralBackgroundBase']}
            stroke={theme['colors']['dataViz'][colorPalette][colorIndex + index]}
            strokeWidth={2}
          />
        </Group>
      ))}
    </AreaChartStackedVizWrapper>
  ));
};
