import { useState } from 'react';
import { Bar } from '@visx/shape';
import { scaleBand, scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { Group } from '@visx/group';
import useMeasure from 'react-use-measure';

import { lightTheme } from '../../../themes';

const colors = lightTheme.colors;

type Tooltip = {
  year: number | null;
  month: number | null;
  users: number | null;
};

interface DataItem {
  year: number;
  month: number;
  users: number;
}

interface BarChartHorizontalInterface {
  data: DataItem[];
  title?: string;
  storytelling?: boolean;
  interactivity?: boolean;
  onSettingsClick?: () => void;
}

export const BarChartHorizontal = ({
  data,
  interactivity,
}: BarChartHorizontalInterface) => {
  const [tooltipData, setTooltipData] = useState<Tooltip | null>({
    year: null,
    month: null,
    users: null,
  });
  const [ref, bounds] = useMeasure();

  const margin = { top: 10, right: 0, bottom: 25, left: 40 };

  const width = bounds.width || 1084;
  const height = bounds.height || 163;

  const xScale = scaleLinear({
    domain: [0, Math.max(...data.map(d => d.users))],
    range: [margin.left, width - margin.right],
    nice: true,
  });

  const yScale = scaleBand({
    domain: data.map(d => `${d.year}-${d.month}`),
    range: [height - margin.bottom, margin.top],
    padding: 0.01,
  });

  return (
    <svg ref={ref} width="100%" height="100%">
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
        {yScale
          .domain()
          .filter(value => value.endsWith('-1'))
          .map(value => (
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
          <Bar
            key={`${d.year}-${d.month}`}
            x={margin.left}
            y={yScale(`${d.year}-${d.month}`)}
            height={yScale.bandwidth()}
            width={xScale(d.users) - margin.left}
            fill={colors.dataViz.qualitative_12[0]}
            onMouseEnter={() => setTooltipData(d)}
            onMouseLeave={() => setTooltipData(null)}
          />
        ))}
      </Group>

      <AxisBottom
        scale={xScale}
        top={height - margin.bottom}
        hideAxisLine
        hideTicks
        tickFormat={(value: any) => {
          if (value >= 1000000) {
            return `${value / 1000000}M`;
          } else if (value >= 1000) {
            return `${value / 1000}K`;
          } else {
            return value.toString();
          }
        }}
        tickLabelProps={{
          fill: colors.neutral.text.weak,
          fontSize: 11,
          textAnchor: 'middle',
        }}
      />
      <AxisLeft
        scale={yScale}
        left={margin.left}
        hideAxisLine
        hideTicks
        label=""
        rangePadding={{ start: 10, end: 13 }}
        tickValues={yScale.domain().filter(value => value.endsWith('-1'))}
        tickFormat={tick => tick.split('-')[0]}
        tickLabelProps={{
          fill: colors.neutral.text.weak,
          fontSize: 11,
        }}
      />

      {yScale(`${tooltipData?.year}-${tooltipData?.month}`) !== undefined &&
        interactivity && (
          <text
            x={
              tooltipData?.users !== null ? xScale(tooltipData!.users) - 10 : 0
            }
            y={
              yScale(`${tooltipData?.year}-${tooltipData?.month}`)! +
              yScale.bandwidth() / 2
            }
            fill={colors.neutral.text.weak}
            textAnchor="middle"
            fontSize={12}
          >
            Users: {tooltipData?.users !== null ? tooltipData?.users : 'N/A'}
          </text>
        )}
    </svg>
  );
};
