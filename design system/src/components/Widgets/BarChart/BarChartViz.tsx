import { Group } from '@visx/group';
import { PatternLines } from '@visx/pattern';
import { Bar, BarRounded } from '@visx/shape';
import { useTheme } from 'styled-components';

import { BarChartVizProps } from './BarChart.types';

export const BarChartViz = ({
  data,
  getX,
  getY,
  xScale,
  yScale,
  dataKeysY,
  colorPalette,
  colorIndex,
  handleMouseMove,
  handleMouseLeave,
  gridProps,
  calculatedMargins,
  defaultChartParams,
}: BarChartVizProps) => {
  const theme = useTheme();

  const patternId = `bar-lines-${colorPalette}-${colorIndex}`;
  const barColor  = theme['colors']['dataViz'][colorPalette][colorIndex];

  return (
    <Group>
      <PatternLines
        id={patternId}
        height={6}
        width={6}
        stroke={barColor}
        strokeWidth={1.5}
        orientation={['diagonal']}
      />
      {data.map(d => (
        <Group
          key={`${getX(d)}-${getY(d)}`}
          {...(handleMouseMove
            ? {
                onMouseMove: event => {
                  handleMouseMove(event, {
                    color: theme['colors']['dataViz'][colorPalette][colorIndex],
                    data: {
                      key: getX(d),
                      index: dataKeysY,
                      value: getY(d),
                    },
                  });
                },
                onTouchMove: event => {
                  handleMouseMove(event, {
                    color: theme['colors']['dataViz'][colorPalette][colorIndex],
                    data: {
                      key: xScale(getX(d)),
                      index: dataKeysY,
                      value: yScale(getY(d)),
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
          <Bar
            x={
              (xScale(getX(d)) ?? 0) +
              xScale.bandwidth() / 2 -
              defaultChartParams.bar.width / 2
            }
            y={yScale(getY(d))}
            width={defaultChartParams.bar.width}
            height={
              gridProps.height + calculatedMargins.top - yScale(getY(d) + 0)
            }
            fill={`url(#${patternId})`}
            opacity={0.6}
          />
          <BarRounded
            x={
              (xScale(getX(d)) ?? 0) +
              xScale.bandwidth() / 2 -
              defaultChartParams.bar.width / 2
            }
            y={
              defaultChartParams.bar.minimalHeight > yScale(getY(d))
                ? yScale(getY(d))
                : yScale(getY(d)) - defaultChartParams.bar.minimalHeight
            }
            width={defaultChartParams.bar.width}
            height={2}
            radius={2}
            top={true}
            fill={theme['colors']['dataViz'][colorPalette][colorIndex]}
            opacity={1}
          />
        </Group>
      ))}
    </Group>
  );
};
