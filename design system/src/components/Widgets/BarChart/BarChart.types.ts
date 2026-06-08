import {
  CalculatedMargins,
  ColorPalette,
  CoreChartVizBaseProps,
  DataItem,
  DataKeys,
  GridProps,
  LegendPosition,
} from '../CoreChartBase/CoreChartBase.types';

export interface BarChartProps {
  data: DataItem[];

  children?: JSX.Element | JSX.Element[];

  dataKeys: DataKeys;
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
  withSecondScaleGridColumns?: boolean;

  roundScale?: boolean;
  niceScale?: boolean;

  withTooltip?: boolean;

  topAxisTickFormatter?: (value: any) => string | undefined;
  rightAxisTickFormatter?: (value: any) => string | undefined;
  bottomAxisTickFormatter?: (value: any) => string | undefined;
  leftAxisTickFormatter?: (value: any) => string | undefined;
}

export interface BarChartVizProps extends CoreChartVizBaseProps {
  calculatedMargins: CalculatedMargins;
  getY: (d: any) => any;
  gridProps: GridProps;
}
