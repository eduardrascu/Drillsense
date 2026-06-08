import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { useTheme } from 'styled-components';

import { LollipopChartVizProps } from './LollipopChart.types';
import { LollipopHeadStyled } from './LollipopChartViz.styles';

export const LollipopChartViz = ({
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
}: LollipopChartVizProps) => {
  const theme = useTheme();

  return (
    <Group>
      {data.map((d, i) => (
        <Group
          key={`lollipop-${i}-${getX(d)}-${getY(d)}`}
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
                      key: getX(d),
                      index: dataKeysY,
                      value: getY(d),
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
              defaultChartParams.lollipop.stalk.width / 2
            }
            y={
              defaultChartParams.bar.minimalHeight > yScale(getY(d))
                ? yScale(getY(d))
                : yScale(getY(d)) - defaultChartParams.bar.minimalHeight
            }
            width={defaultChartParams.lollipop.stalk.width}
            height={
              gridProps.height + calculatedMargins.top - yScale(getY(d) + 0)
            }
            fill={theme['colors']['dataViz'][colorPalette][colorIndex]}
            opacity={0.4}
          />

          <LollipopHeadStyled
            x={
              (xScale(getX(d)) ?? 0) +
              xScale.bandwidth() / 2 -
              defaultChartParams.lollipop.stalk.width / 2 -
              defaultChartParams.lollipop.head.width / 2 +
              defaultChartParams.lollipop.head.borderWidth
            }
            y={
              defaultChartParams.bar.minimalHeight > yScale(getY(d))
                ? yScale(getY(d))
                : yScale(getY(d)) -
                  defaultChartParams.bar.minimalHeight -
                  defaultChartParams.lollipop.head.height / 2 +
                  defaultChartParams.lollipop.head.borderWidth
            }
            width={defaultChartParams.lollipop.head.width}
            height={defaultChartParams.lollipop.head.height}
            fill={theme['colors']['dataViz'][colorPalette][colorIndex]}
            stroke={theme['neutralBackgroundBase']}
            strokeWidth={defaultChartParams.lollipop.head.borderWidth}
            rx={defaultChartParams.lollipop.head.borderRadius}
            transform={`rotate(${defaultChartParams.lollipop.head.rotate})`}
          />
        </Group>
      ))}
    </Group>
  );
};
