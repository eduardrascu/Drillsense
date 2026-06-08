import { useMemo } from 'react';
import { Group } from '@visx/group';
import { Bar, BarStack } from '@visx/shape';
import { scaleOrdinal } from '@visx/scale';
import { useTheme } from 'styled-components';

import { LollipopChartStackedVizProps } from './LollipopChartStacked.types';
import { LollipopHeadStyled } from './LollipopChartStackedViz.styles';

export const LollipopChartStackedViz = ({
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
}: LollipopChartStackedVizProps) => {
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
      {lollipopStacks =>
        lollipopStacks.map((lolipopStack, i) =>
          lolipopStack.bars.map((lollipop, j) => (
            <Group
              key={`lollipopStack-${i}-${j}`}
              {...(handleMouseMove
                ? {
                    onMouseMove: event => {
                      handleMouseMove(event, {
                        color: lollipop.color,
                        data: {
                          key: data[lollipop.index][dataKeyX],
                          index: lollipop.key,
                          value: data[lollipop.index][lollipop.key],
                        },
                      });
                    },
                    onTouchMove: event => {
                      handleMouseMove(event, {
                        color: lollipop.color,
                        data: {
                          key: data[lollipop.index][dataKeyX],
                          index: lollipop.key,
                          value: data[lollipop.index][lollipop.key],
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
                  lollipop.x +
                  lollipop.width / 2 -
                  defaultChartParams.lollipop.stalk.width / 2
                }
                y={lollipop.y}
                height={lollipop.height}
                width={defaultChartParams.lollipop.stalk.width}
                fillOpacity={0.4}
                fill={lollipop.color}
              />

              <LollipopHeadStyled
                x={
                  lollipop.x +
                  lollipop.width / 2 -
                  defaultChartParams.lollipop.stalk.width / 2 -
                  defaultChartParams.lollipop.head.width / 2 +
                  defaultChartParams.lollipop.head.borderWidth
                }
                y={lollipop.y}
                width={defaultChartParams.lollipop.head.width}
                height={defaultChartParams.lollipop.head.height}
                fill={lollipop.color}
                stroke={theme['neutralBackgroundBase']}
                strokeWidth={defaultChartParams.lollipop.head.borderWidth}
                rx={defaultChartParams.lollipop.head.borderRadius}
                transform={`rotate(${defaultChartParams.lollipop.head.rotate})`}
              />
            </Group>
          ))
        )
      }
    </BarStack>
  );
};
