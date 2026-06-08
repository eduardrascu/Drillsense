import { Group } from '@visx/group';
import { useTheme } from 'styled-components';

import { ScatterPlotVizProps } from './ScatterPlot.types';
import { ScatterPlotPointFigure } from './ScatterPlotPointFigure';

export const ScatterPlotViz = ({
  data,
  getX,
  xScale,
  yScale,
  dataKeysY,
  colorPalette,
  colorIndex,
  handleMouseMove,
  handleMouseLeave,
  xScaleType,
}: ScatterPlotVizProps) => {
  const theme = useTheme();

  return dataKeysY.map((dataKey, index) => (
    <Group key={`point-type-groups-${dataKey}-${index}`}>
      {data.map(
        (d, i) =>
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
                          index: dataKey,
                          value: d[dataKey],
                        },
                      });
                    },
                    onTouchMove: event => {
                      handleMouseMove(event, {
                        color:
                          theme['colors']['dataViz'][colorPalette][colorIndex + index],
                        data: {
                          key: new Date(getX(d)).toLocaleDateString(),
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
                cx={xScale(getX(d))}
                cy={yScale(d[dataKey])}
                r={8}
                fill={'transparent'}
                fillOpacity={0}
              />

              <Group
                transform={`translate(${xScale(getX(d))}, ${yScale(
                  d[dataKey]
                )})`}
              >
                <ScatterPlotPointFigure
                  index={index}
                  fill={theme['colors']['dataViz'][colorPalette][colorIndex + index]}
                />
              </Group>
            </Group>
          )
      )}
    </Group>
  ));
};
