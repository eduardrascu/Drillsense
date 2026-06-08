import { useMemo } from 'react';
import { RadarChartVizWrapper } from './RadarChart.style';
import { RadarChartVizProps } from './RadarChart.types';
import { useTheme } from 'styled-components';
import { Group } from '@visx/group';

function genPolygonPoints<Datum>(
  dataArray: Datum[],
  scale: (n: number) => number,
  getValue: (d: Datum) => number
) {
  const step = (Math.PI * 2) / dataArray.length;
  const points: { x: number; y: number }[] = new Array(dataArray.length).fill({
    x: 0,
    y: 0,
  });
  const pointString: string = new Array(dataArray.length + 1)
    .fill('')
    .reduce((res, _, i) => {
      if (i > dataArray.length) return res;
      const xVal = scale(getValue(dataArray[i - 1])) * Math.sin((i - 1) * step);
      const yVal =
        scale(getValue(dataArray[i - 1])) * Math.cos((i - 1) * step) * -1;
      points[i - 1] = { x: xVal, y: yVal };
      res += `${xVal},${yVal} `;
      return res;
    });

  return { points, pointString };
}

export const RadarChartViz = ({
  data,
  colorPalette = 'qualitative_2_1',
  dataKeyX,
  dataKeysY,
  handleMouseLeave,
  handleMouseMove,
  pointerEvents = 'none',
  yScale,
}: RadarChartVizProps) => {
  const theme = useTheme();

  const polygonsPoints = useMemo(
    () =>
      dataKeysY.map(dataKeyY =>
        genPolygonPoints(
          data,
          d => yScale(d) ?? 0,
          d => d[dataKeyY]
        )
      ),
    [data, dataKeysY, yScale]
  );

  return (
    <>
      {polygonsPoints.map((polygonPoints, i) => (
        <RadarChartVizWrapper
          key={`polygon-group-${i}`}
          $pointerEvents={pointerEvents}
        >
          <polygon
            points={polygonPoints.pointString}
            fill={
              theme['colors']['dataViz'][colorPalette][i] ||
              theme['colors']['dataViz'][colorPalette][0]
            }
            fillOpacity={0.15}
            stroke={
              theme['colors']['dataViz'][colorPalette][i] ||
              theme['colors']['dataViz'][colorPalette][0]
            }
            strokeWidth={1}
          />
          {polygonPoints.points.map((point, j) => (
            <Group
              key={`polygon-points-group-${i}-${j}`}
              {...(handleMouseMove
                ? {
                    onMouseMove: event => {
                      handleMouseMove(event, {
                        color:
                          theme['colors']['dataViz'][colorPalette][i] ||
                          theme['colors']['dataViz'][colorPalette][0],
                        data: {
                          key: data[j][dataKeyX],
                          index: dataKeysY[i],
                          value: data[j][dataKeysY[i]],
                        },
                      });
                    },
                    onTouchMove: event => {
                      handleMouseMove(event, {
                        color:
                          theme['colors']['dataViz'][colorPalette][i] ||
                          theme['colors']['dataViz'][colorPalette][0],
                        data: {
                          key: data[j][dataKeyX],
                          index: dataKeysY[i],
                          value: data[j][dataKeysY[i]],
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
                cx={point.x}
                cy={point.y}
                r={6}
                fill="white"
                fillOpacity={1}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r={3}
                fill="white"
                stroke={
                  theme['colors']['dataViz'][colorPalette][i] ||
                  theme['colors']['dataViz'][colorPalette][0]
                }
                strokeWidth={2}
              />
            </Group>
          ))}
        </RadarChartVizWrapper>
      ))}
    </>
  );
};
