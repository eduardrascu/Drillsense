import { useMemo } from 'react';
import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { useTheme } from 'styled-components';

import { BubbleChartVizProps, defaultChartParams } from './BubbleChart.types';
import { scaleLinear } from '@visx/scale';

export const BubbleChartViz = ({
  data,
  getX,
  xScale,
  yScale,
  dataKeysY,
  dataKeyZ,
  colorPalette,
  colorIndex,
  handleMouseMove,
  handleMouseLeave,
  xScaleType,
}: BubbleChartVizProps) => {
  const theme = useTheme();

  const maxValue = useMemo(
    () => Math.max(...data.map(d => (d[dataKeyZ] ? d[dataKeyZ] : 0))),
    [data, dataKeyZ]
  );

  const bubbleRadius = useMemo(
    () =>
      scaleLinear<number>({
        domain: [0, maxValue],
        range: [
          defaultChartParams.bubble.minRadius,
          defaultChartParams.bubble.maxRadius,
        ],
        nice: true,
      }),
    [maxValue]
  );

  return dataKeysY.map((dataKey, index) => (
    <Group key={`point-type-groups-${dataKey}-${index}`}>
      {data.map((d, i) => {
        const radius = bubbleRadius(d[dataKeyZ]);

        return (
          d[dataKey] && (
            <Group
              key={`point-group-${dataKey}-${index}-${i}`}
              {...(handleMouseMove
                ? {
                    onMouseMove: event => {
                      handleMouseMove(event, {
                        color:
                          theme['colors']['dataViz'][colorPalette][colorIndex + index],
                        data: {
                          key:
                            xScaleType === 'time'
                              ? new Date(getX(d)).toLocaleDateString()
                              : getX(d),
                          index: dataKeyZ,
                          value: d[dataKeyZ],
                        },
                      });
                    },
                    onTouchMove: event => {
                      handleMouseMove(event, {
                        color:
                          theme['colors']['dataViz'][colorPalette][colorIndex + index],
                        data: {
                          key:
                            xScaleType === 'time'
                              ? new Date(getX(d)).toLocaleDateString()
                              : getX(d),
                          index: dataKeyZ,
                          value: d[dataKeyZ],
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
              {radius <= defaultChartParams.bubble.text.hideOnRadius && (
                <circle
                  cx={xScale(getX(d))}
                  cy={yScale(d[dataKey])}
                  r={radius + 8}
                  fill={'transparent'}
                  fillOpacity={0}
                />
              )}
              <circle
                cx={xScale(getX(d))}
                cy={yScale(d[dataKey])}
                r={radius}
                fill={theme['colors']['dataViz'][colorPalette][colorIndex + index]}
                fillOpacity={0.2}
                stroke={theme['colors']['dataViz'][colorPalette][colorIndex + index]}
                strokeWidth={1}
              />
              {radius >= defaultChartParams.bubble.text.hideOnRadius && (
                <Text
                  x={xScale(getX(d))}
                  y={yScale(d[dataKey])}
                  fill={theme['neutralText']}
                  fontSize={defaultChartParams.bubble.text.fontSize}
                  textAnchor="middle"
                  verticalAnchor="middle"
                >
                  {d[dataKeyZ]}
                </Text>
              )}
            </Group>
          )
        );
      })}
    </Group>
  ));
};
