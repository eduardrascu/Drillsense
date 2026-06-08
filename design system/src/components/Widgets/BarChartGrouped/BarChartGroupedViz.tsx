import { useMemo } from 'react';
import { Group } from '@visx/group';
import { Bar, BarGroup, BarRounded } from '@visx/shape';
import { useTheme } from 'styled-components';

import { BarChartGroupedVizProps } from './BarChartGrouped.types';
import { scaleBand, scaleOrdinal } from '@visx/scale';

export const BarChartGroupedViz = ({
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
  gridProps,
  calculatedMargins,
  defaultChartParams,
}: BarChartGroupedVizProps) => {
  const theme = useTheme();

  const colorRange = theme['colors']['dataViz'][colorPalette].slice(colorIndex);

  const colorScale = useMemo(
    () =>
      scaleOrdinal<string, string>({
        domain: dataKeysY,
        range: colorRange,
      }),
    [colorRange, dataKeysY]
  );

  const barScale = useMemo(
    () =>
      scaleBand<string>({
        domain: dataKeysY,
        padding: 0.1,
      }),
    [dataKeysY]
  );
  barScale.rangeRound([0, xScale.bandwidth()]);

  return (
    <BarGroup
      data={data}
      keys={dataKeysY}
      height={gridProps.height}
      x0={getX}
      x0Scale={xScale}
      x1Scale={barScale}
      yScale={yScale}
      color={colorScale}
    >
      {barGroups =>
        barGroups.map(barGroup => (
          <Group
            key={`bar-groups-${barGroup.index}-${barGroup.x0}`}
            left={barGroup.x0}
          >
            {barGroup.bars.map(bar => (
              <Group
                key={`bar-group-${barGroup.index}-${barGroup.x0}-${bar.index}`}
                {...(handleMouseMove
                  ? {
                      onMouseMove: event => {
                        handleMouseMove(event, {
                          color: bar.color,
                          data: {
                            key: data[barGroup.index][dataKeyX],
                            index: bar.key,
                            value: bar.value,
                          },
                        });
                      },
                      onTouchMove: event => {
                        handleMouseMove(event, {
                          color: bar.color,
                          data: {
                            key: data[barGroup.index][dataKeyX],
                            index: dataKeysY,
                            value: bar.value,
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
                    bar.x +
                    (bar.width > defaultChartParams.bar.width
                      ? (bar.width - defaultChartParams.bar.width) / 2
                      : 0)
                  }
                  y={bar.y}
                  width={
                    bar.width < defaultChartParams.bar.width
                      ? bar.width
                      : defaultChartParams.bar.width
                  }
                  height={
                    gridProps.height +
                    calculatedMargins.top -
                    yScale(bar.value + 0)
                  }
                  fill={bar.color}
                  opacity={0.4}
                />
                <BarRounded
                  x={
                    bar.x +
                    (bar.width > defaultChartParams.bar.width
                      ? (bar.width - defaultChartParams.bar.width) / 2
                      : 0)
                  }
                  y={
                    defaultChartParams.bar.minimalHeight > bar.y
                      ? bar.y
                      : bar.y - defaultChartParams.bar.minimalHeight
                  }
                  width={
                    bar.width < defaultChartParams.bar.width
                      ? bar.width
                      : defaultChartParams.bar.width
                  }
                  height={2}
                  radius={2}
                  top={true}
                  fill={bar.color}
                  opacity={1}
                />
              </Group>
            ))}
          </Group>
        ))
      }
    </BarGroup>
  );
};
