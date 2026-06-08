import {
  CalculatedMargins,
  ColorPalette,
  CoreChartVizBaseProps,
  CurveType,
  DataItem,
  DataKeys,
  LegendPosition,
} from '../CoreChartBase/CoreChartBase.types';

export interface AreaChartStackedProps {
  data: DataItem[];

  children?: JSX.Element | JSX.Element[];

  dataKeys: DataKeys;
  colorPalette?: ColorPalette;

  curveType?: CurveType;

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

export interface AreaChartStackedVizProps extends CoreChartVizBaseProps {
  calculatedMargins: CalculatedMargins;
  curveType?: CurveType;
}
