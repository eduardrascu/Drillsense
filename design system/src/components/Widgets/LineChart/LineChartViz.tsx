import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { useTheme } from 'styled-components';
import * as allCurves from '@visx/curve';

import { LineChartVizProps } from './LineChart.types';
import { LineChartVizWrapper } from './LineChartViz.styles';

export const LineChartViz = ({
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
}: LineChartVizProps) => {
  const theme = useTheme();

  return dataKeysY.map((dataKey, index) => (
    <LineChartVizWrapper
      key={`lineChartPath-${dataKey}`}
      $pointerEvents={pointerEvents}
    >
      <LinePath
        curve={allCurves[curveType]}
        data={data}
        x={d => (xScale(getX(d)) ?? 0) + xScale.bandwidth() / 2}
        y={d => yScale(d[dataKey]) ?? 0}
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
            cy={yScale(d[dataKey])}
            r={8}
            fill={'transparent'}
            fillOpacity={0}
          />
          <circle
            key={`point-bg-2-${i}-${getX(d)}-${d[dataKey]}`}
            cx={(xScale(getX(d)) ?? 0) + xScale.bandwidth() / 2}
            cy={yScale(d[dataKey])}
            r={6}
            fill={theme['neutralBackgroundBase']}
            fillOpacity={1}
          />
          <circle
            key={`point-${i}-${getX(d)}-${d[dataKey]}`}
            cx={(xScale(getX(d)) ?? 0) + xScale.bandwidth() / 2}
            cy={yScale(d[dataKey])}
            r={3}
            fill={theme['neutralBackgroundBase']}
            stroke={theme['colors']['dataViz'][colorPalette][colorIndex + index]}
            strokeWidth={2}
          />
        </Group>
      ))}
    </LineChartVizWrapper>
  ));
};
