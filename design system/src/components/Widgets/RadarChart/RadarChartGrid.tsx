import { Fragment, useMemo } from 'react';
import { Group } from '@visx/group';
import { Point } from '@visx/point';
import { Line, LineRadial } from '@visx/shape';
import { useTheme } from 'styled-components';
import { RadarChartGridProps } from './RadarChart.types';
import { scaleLinear } from '@visx/scale';

const degrees = 360;

const genAngles = (length: number) =>
  [...new Array(length + 1)].map((_, i) => ({
    angle: i * (degrees / length) + (length % 2 === 0 ? 0 : degrees / length),
  }));

const genPoints = (length: number, radius: number) => {
  const step = (Math.PI * 2) / length;
  return [...new Array(length)].map((_, i) => ({
    x: radius * Math.sin(i * step),
    y: radius * Math.cos(i * step) * -1,
  }));
};

export const RadarChartGrid = ({
  data,
  chartRadius,
  dataKeyX,
  levels = 1,
  levelsLabelFormatter,
  maxValueYScale,
}: RadarChartGridProps) => {
  const theme = useTheme();

  const zeroPoint = new Point({ x: 0, y: 0 });

  const radialScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [0, Math.PI * 2],
        domain: [degrees, 0],
      }),
    []
  );

  const webs = useMemo(() => genAngles(data.length), [data.length]);

  const points = useMemo(
    () => genPoints(data.length, chartRadius),
    [chartRadius, data.length]
  );

  const axleLabelPoints = useMemo(
    () => genPoints(data.length, chartRadius + 20),
    [chartRadius, data.length]
  );

  return (
    <>
      {[...new Array(data.length)].map((_, i) => (
        <Group key={`radar-grid-line-group-${data[i][dataKeyX]}`}>
          <Line
            from={zeroPoint}
            to={points[i]}
            stroke={theme['neutralBorder']}
            strokeDasharray="2,2"
          />
          <circle
            cx={points[i].x}
            cy={points[i].y}
            r={3}
            fill={theme['neutralBorder']}
          />
          <text
            x={axleLabelPoints[i].x}
            y={axleLabelPoints[i].y}
            fill={theme['neutralTextWeak']}
            fontSize="12"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {data[i][dataKeyX]}
          </text>
        </Group>
      ))}

      {[...new Array(levels)].map((_, i) => (
        <Fragment key={`web-group-${i}`}>
          <LineRadial
            data={webs}
            angle={d => radialScale(d.angle) ?? 0}
            radius={((i + 1) * chartRadius) / levels}
            fill="none"
            stroke={theme['neutralBorder']}
            strokeWidth={1}
            strokeOpacity={1}
            strokeLinecap="round"
          />
          <rect
            x={0}
            y={((i + 1) * chartRadius * -1) / levels}
            transform="translate(-14 -10)"
            width="28"
            height="16"
            rx="4"
            fill={theme['neutralBackground']}
          />
          <text
            x={0}
            y={((i + 1) * chartRadius * -1) / levels}
            fill={theme['neutralTextWeak']}
            fontSize="12"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {levelsLabelFormatter
              ? levelsLabelFormatter((maxValueYScale / levels) * (i + 1))
              : (maxValueYScale / levels) * (i + 1)}
          </text>
        </Fragment>
      ))}
    </>
  );
};
