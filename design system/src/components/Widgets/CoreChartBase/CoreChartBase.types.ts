import * as allCurves from '@visx/curve';
import { lightTheme } from '../../../themes';

import { ScaleBand, ScaleLinear, ScaleTime } from 'd3';

export type CurveType = keyof typeof allCurves;

export type ColorPalette = keyof typeof lightTheme.colors.dataViz;

export interface DataItem {
  [key: string]: number;
}

export enum ChartType {
  AreaChart = 'areaChart',
  BarChart = 'barChart',
  BarChartGrouped = 'barChartGrouped',
  BarChartStacked = 'barChartStacked',
  LineChart = 'lineChart',
  LollipopChart = 'lollipopChart',
  LollipopChartGrouped = 'lollipopChartGrouped',
  LollipopChartStacked = 'lollipopChartStacked',
}

export type XScaleType = 'band' | 'linear' | 'time';

export interface TooltipData {
  data: {
    key: string;
    index: string;
    value: string;
  };
  color?: string;
}

export interface DataKeys {
  x: string;
  y: string[];
}

export type LegendPosition = 'top' | 'right' | 'bottom';

export type GridProps = {
  width: number;
  height: number;
};

export type CalculatedMargins = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

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

export type XScale =
  | ScaleBand<string>
  | ScaleTime<number, number, never>
  | ScaleLinear<number, number, never>;

export interface CoreChartBaseProps {
  data: DataItem[];

  children?: JSX.Element | JSX.Element[];

  chartType?: ChartType;
  xScaleType?: XScaleType;
  isStackedChart?: boolean;

  dataKeys: DataKeys;
  colorPalette?: ColorPalette;

  curveType?: CurveType;

  chartType2?: ChartType;
  isStackedChart2?: boolean;
  dataKeys2?: Partial<DataKeys>;
  curveType2?: CurveType;

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

  xAxisNumTicks?: number;
  yAxisNumTicks?: number;

  topAxisTickFormatter?: (value: any) => string | undefined;
  rightAxisTickFormatter?: (value: any) => string | undefined;
  bottomAxisTickFormatter?: (value: any) => string | undefined;
  leftAxisTickFormatter?: (value: any) => string | undefined;
}

export interface CoreChartVizBaseProps {
  data: DataItem[];
  getX: (d: any) => any;
  xScale: XScale;
  yScale: ScaleLinear<number, number, never>;
  dataKeyX: string;
  dataKeysY: string[];
  xScaleType?: XScaleType;
  colorPalette: ColorPalette;
  colorIndex: number;
  handleMouseMove?;
  handleMouseLeave?;
  pointerEvents?: PointerEvents;
  defaultChartParams: typeof defaultChartParams;
}

export interface CoreChartVizProps extends CoreChartVizBaseProps {
  chartType: ChartType;
  getY: (d: any) => any;
  curveType?: CurveType;
  calculatedMargins: CalculatedMargins;
  gridProps: GridProps;
}

export interface CoreChartGridProps {
  gridProps: GridProps;
  gridRowsScale: ScaleLinear<number, number, never>;
  calculatedMargins: CalculatedMargins;
  xScale: XScale;
  yScale: ScaleLinear<number, number, never>;
  x2Scale: XScale;
  y2Scale: ScaleLinear<number, number, never>;
  chartHeight: number;
  chartWidth: number;

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

  xAxisNumTicks?: number;
  yAxisNumTicks?: number;

  topAxisTickFormatter?: (value: any) => string | undefined;
  rightAxisTickFormatter?: (value: any) => string | undefined;
  bottomAxisTickFormatter?: (value: any) => string | undefined;
  leftAxisTickFormatter?: (value: any) => string | undefined;
}

export interface CoreChartPlaceholderProps {
  calculatedMargins: CalculatedMargins;
  gridProps: GridProps;
}

export interface CoreChartLegendProps {
  calculatedMargins: CalculatedMargins;
  chartHeight: number;
  chartWidth: number;
  colorPalette: ColorPalette;
  legendLabels: string[];
  legendPosition: LegendPosition;
  legendProps;
}

export const defaultChartParams = {
  width: 800,
  height: 600,

  axis: {
    top: {
      label: {
        height: 24,
      },
      trick: {
        height: 24,
      },
    },
    right: {
      label: {
        width: 24,
      },
      trick: {
        width: 32,
      },
      largeTrick: {
        width: 72,
      },
    },
    bottom: {
      label: {
        height: 24,
      },
      trick: {
        height: 24,
      },
    },
    left: {
      label: {
        width: 24,
      },
      trick: {
        width: 32,
      },
      largeTrick: {
        width: 72,
      },
    },
  },

  bar: {
    width: 16,
    minimalHeight: 2,
  },

  grid: {
    rows: {
      minHeight: 0,
      minWidth: 0,
    },
    columns: {
      valuesOffsetPercent: 0,
    },
  },

  legend: {
    horizontal: {
      height: 16,
      margin: 8,
    },
    vertical: {
      width: 100,
      margin: 16,
    },
  },

  lollipop: {
    head: {
      width: 10,
      height: 10,
      borderWidth: 1,
      borderRadius: 1,
      rotate: '-45',
    },
    stalk: {
      width: 2,
    },
  },

  tooltip: {
    width: 'fit-content',
    minWidth: 40,
    maxWidth: 80,
    leaveTimeout: 300,
  },
};
