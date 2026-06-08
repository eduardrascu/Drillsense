import { ScaleLinear } from 'd3';
import { lightTheme } from '../../../themes';

export type colorPalette = keyof typeof lightTheme.colors.dataViz;

export interface DataItem {
  [key: string]: number;
}

export interface DataKeys {
  x: string;
  y: string[];
}

export type PointerEvents =
  | 'auto'
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all';

export interface RadarChartProps {
  data: DataItem[];
  colorPalette?: colorPalette;
  dataKeys: DataKeys;
  height?: number;
  levels?: number;
  niceScale?: boolean;
  pointerEvents?: PointerEvents;
  width?: number;
  withTooltip?: boolean;
}

export interface RadarChartBaseProps extends RadarChartProps {
  children?: JSX.Element | JSX.Element[];
}

export interface RadarChartGridProps {
  data: DataItem[];
  chartRadius: number;
  dataKeyX: string;
  levels: number;
  levelsLabelFormatter?: (value: unknown) => string | undefined;
  maxValueYScale: number;
}

export interface RadarChartVizProps {
  data: DataItem[];
  colorPalette?: colorPalette;
  dataKeyX: string;
  dataKeysY: string[];
  handleMouseMove?;
  handleMouseLeave?;
  pointerEvents?: PointerEvents;
  yScale: ScaleLinear<number, number, never>;
}

export interface TooltipData {
  data: {
    key: string;
    index: string;
    value: string;
  };
  color?: string;
}

export const defaultChartParams = {
  width: 400,
  height: 400,

  padding: {
    top: 20,
    right: 40,
    bottom: 40,
    left: 20,
  },

  tooltip: {
    width: 'fit-content',
    minWidth: 40,
    maxWidth: 80,
    leaveTimeout: 300,
  },
};
