import { useMemo } from 'react';
import { Group } from '@visx/group';
import { Bar, BarRounded, BarStack } from '@visx/shape';
import { scaleOrdinal } from '@visx/scale';
import { useTheme } from 'styled-components';

import { BarChartStackedVizProps } from './BarChartStacked.types';

export const BarChartStackedViz = ({
  data,
  getX,
  xScale,
  yScale,
  dataKeyX,
  dataKeysY,
  colorPalette,
  colorIndex,
  handleMouseMove,
  handleMouseLeave,
  defaultChartParams,
}: BarChartStackedVizProps) => {
  const theme = useTheme();
  const keys = dataKeysY;

  const colorRange = theme['colors']['dataViz'][colorPalette].slice(colorIndex);

  const colorScale = useMemo(
    () =>
      scaleOrdinal<string, string>({
        domain: keys,
        range: colorRange,
      }),
    [colorRange, keys]
  );

  return (
    <BarStack
      data={data}
      keys={keys}
      x={getX}
      xScale={xScale}
      yScale={yScale}
      color={colorScale}
    >
      {barStacks =>
        barStacks.map((barStack, i) =>
          barStack.bars.map((bar, j) => (
            <Group
              key={`barStack-${i}-${j}`}
              {...(handleMouseMove
                ? {
                    onMouseMove: event => {
                      handleMouseMove(event, {
                        color: bar.color,
                        data: {
                          key: data[bar.index][dataKeyX],
                          index: bar.key,
                          value: data[bar.index][bar.key],
                        },
                      });
                    },
                    onTouchMove: event => {
                      handleMouseMove(event, {
                        color: bar.color,
                        data: {
                          key: data[bar.index][dataKeyX],
                          index: bar.key,
                          value: data[bar.index][bar.key],
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
                x={bar.x + bar.width / 2 - defaultChartParams.bar.width / 2}
                y={bar.y}
                height={bar.height}
                width={defaultChartParams.bar.width}
                fillOpacity={0.4}
                fill={bar.color}
              />

              <BarRounded
                x={bar.x + bar.width / 2 - defaultChartParams.bar.width / 2}
                y={bar.y - 1}
                width={defaultChartParams.bar.width}
                height={2}
                radius={2}
                top={true}
                fill={bar.color}
              />
            </Group>
          ))
        )
      }
    </BarStack>
  );
};
