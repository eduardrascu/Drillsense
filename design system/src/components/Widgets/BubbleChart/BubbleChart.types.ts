import {
  CoreChartVizBaseProps,
  DataItem,
  LegendPosition,
  ColorPalette,
  XScaleType,
} from '../CoreChartBase/CoreChartBase.types';

export interface DataKeys {
  x: string;
  y: string[];
  z: string;
}

export interface BubbleChartProps {
  data: DataItem[];

  children?: JSX.Element | JSX.Element[];

  dataKeys: DataKeys;
  xScaleType?: XScaleType;
  colorPalette?: ColorPalette;

  width?: number;
  height?: number;

  legendPosition?: LegendPosition;

  topAxisLabel?: string;
  rightAxisLabel?: string;
  bottomAxisLabel?: string;
  leftAxisLabel?: string;

  showTopAxis?: boolean;
  showRightAxis?: boolean;
  showBottomAxis?: boolean;
  showLeftAxis?: boolean;

  showVerticalAxesLine?: boolean;
  showVerticalAxesTicks?: boolean;
  showHorizontalAxesTicks?: boolean;

  widerLeftTrick?: boolean;
  widerRightTrick?: boolean;

  hasGridColumnsPadding?: boolean;
  hasGridColumnsOffset?: boolean;

  roundScale?: boolean;
  niceScale?: boolean;

  withTooltip?: boolean;

  topAxisTickFormatter?: (value: any) => string | undefined;
  rightAxisTickFormatter?: (value: any) => string | undefined;
  bottomAxisTickFormatter?: (value: any) => string | undefined;
  leftAxisTickFormatter?: (value: any) => string | undefined;
}

export interface BubbleChartVizProps extends CoreChartVizBaseProps {
  dataKeyZ: string;
}

export const defaultChartParams = {
  bubble: {
    minRadius: 2,
    maxRadius: 20,

    text: {
      hideOnRadius: 10,
      fontSize: 12,
    },
  },
};
