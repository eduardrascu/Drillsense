import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';
import useMeasure from 'react-use-measure';

import { lightTheme } from '../../../themes';

// TODO: Implement color theme
const colors = lightTheme.colors;

interface DataItem {
  x: number;
  y: string;
}

interface LollipopInterface {
  data: DataItem[];
}

export const LollipopHorizontalChart = ({ data }: LollipopInterface) => {
  const [ref, bounds] = useMeasure();
  const margin = { top: 10, bottom: 25, left: 40, right: 20 };
  const width = bounds.width || 1084;
  const height = bounds.height || 163;

  const xScale = scaleLinear({
    range: [margin.left, width - margin.right],
    domain: [0, Math.max(...data.map(d => d.x)) * 1.1],
  });

  const yScale = scaleBand({
    range: [height - margin.bottom, margin.top],
    domain: data.map(d => d.y),
    padding: 0,
  });

  return (
    <svg width="100%" height="100%" ref={ref}>
      <Group>
        {xScale.ticks().map(value => (
          <line
            key={value}
            x1={xScale(value)}
            x2={xScale(value)}
            y1={margin.top}
            y2={height - margin.bottom}
            stroke={colors.neutral.border.default}
            strokeDasharray="1 2"
          />
        ))}
      </Group>
      <Group>
        {yScale.domain().map(value => (
          <line
            key={value}
            x1={margin.left}
            y1={yScale(value)}
            x2={width - margin.right}
            y2={yScale(value)}
            stroke={colors.neutral.border.default}
            strokeDasharray="1 2"
          />
        ))}
      </Group>
      <Group>
        {data.map(d => (
          <g key={d.x}>
            <line
              x1={margin.left}
              y1={yScale(d.y)! + yScale.bandwidth() / 2}
              x2={xScale(d.x)}
              y2={yScale(d.y)! + yScale.bandwidth() / 2}
              stroke={colors.dataViz.qualitative_12[0]}
              strokeOpacity="40%"
              strokeWidth={3}
            />
            <path
              d={`
                    M${xScale(d.x) + 5}, ${
                yScale(d.y)! + yScale.bandwidth() / 2
              }
                    L${xScale(d.x)}, ${
                yScale(d.y)! + yScale.bandwidth() / 2 + 5
              }
                    L${xScale(d.x) - 5}, ${
                yScale(d.y)! + yScale.bandwidth() / 2
              }
                    L${xScale(d.x)}, ${
                yScale(d.y)! + yScale.bandwidth() / 2 - 5
              }Z`}
              fill={colors.dataViz.qualitative_12[0]}
              stroke={colors.neutral.background.base}
              strokeWidth={1}
            />
          </g>
        ))}
        <AxisBottom
          top={height - margin.bottom}
          scale={xScale}
          hideTicks
          hideAxisLine
          tickLabelProps={{
            fill: colors.neutral.text.weak,
            fontSize: 11,
            textAnchor: 'middle',
          }}
        />
        <AxisLeft
          left={margin.left}
          scale={yScale}
          hideTicks
          hideAxisLine
          tickLabelProps={{
            fill: colors.neutral.text.weak,
            fontSize: 11,
          }}
        />
      </Group>
    </svg>
  );
};
