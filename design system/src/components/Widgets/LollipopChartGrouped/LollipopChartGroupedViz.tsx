import { useMemo } from 'react';
import { Group } from '@visx/group';
import { Bar, BarGroup } from '@visx/shape';
import { useTheme } from 'styled-components';

import { LollipopChartGroupedVizProps } from './LollipopChartGrouped.types';
import { scaleBand, scaleOrdinal } from '@visx/scale';
import { LollipopHeadStyled } from '../LollipopChart/LollipopChartViz.styles';

export const LollipopChartGroupedViz = ({
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
}: LollipopChartGroupedVizProps) => {
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
      {lollipopGroups =>
        lollipopGroups.map(lollipopGroup => (
          <Group
            key={`lollipop-groups-${lollipopGroup.index}-${lollipopGroup.x0}`}
            left={lollipopGroup.x0}
          >
            {lollipopGroup.bars.map(lollipop => (
              <Group
                key={`lollipop-group-${lollipopGroup.index}-${lollipopGroup.x0}-${lollipop.key}`}
                {...(handleMouseMove
                  ? {
                      onMouseMove: event => {
                        handleMouseMove(event, {
                          color: lollipop.color,
                          data: {
                            key: data[lollipopGroup.index][dataKeyX],
                            index: lollipop.key,
                            value: lollipop.value,
                          },
                        });
                      },
                      onTouchMove: event => {
                        handleMouseMove(event, {
                          color: lollipop.color,
                          data: {
                            key: data[lollipopGroup.index][dataKeyX],
                            index: dataKeysY,
                            value: lollipop.value,
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
                    (lollipop.width - defaultChartParams.lollipop.stalk.width) /
                      2
                  }
                  y={lollipop.y}
                  width={defaultChartParams.lollipop.stalk.width}
                  height={
                    gridProps.height +
                    calculatedMargins.top -
                    yScale(lollipop.value + 0)
                  }
                  fill={lollipop.color}
                  opacity={0.4}
                />
                <LollipopHeadStyled
                  x={
                    lollipop.x +
                    (lollipop.width - defaultChartParams.lollipop.stalk.width) /
                      2 -
                    defaultChartParams.lollipop.head.width / 2 +
                    defaultChartParams.lollipop.head.borderWidth
                  }
                  y={
                    defaultChartParams.bar.minimalHeight > lollipop.y
                      ? lollipop.y
                      : lollipop.y -
                        defaultChartParams.bar.minimalHeight -
                        defaultChartParams.lollipop.head.height / 2 +
                        defaultChartParams.lollipop.head.borderWidth
                  }
                  width={defaultChartParams.lollipop.head.width}
                  height={defaultChartParams.lollipop.head.height}
                  fill={lollipop.color}
                  stroke={theme['neutralBackgroundBase']}
                  strokeWidth={defaultChartParams.lollipop.head.borderWidth}
                  rx={defaultChartParams.lollipop.head.borderRadius}
                  transform={`rotate(${defaultChartParams.lollipop.head.rotate})`}
                />
              </Group>
            ))}
          </Group>
        ))
      }
    </BarGroup>
  );
};
