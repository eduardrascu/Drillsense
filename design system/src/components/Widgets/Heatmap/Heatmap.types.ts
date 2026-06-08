import { lightTheme } from '../../../themes';

export type ColorPalette = keyof typeof lightTheme.colors.dataViz;

export interface DataItem {
  bin: string;
  bins: {
    bin: string;
    count: number;
  }[];
}

export interface DataKeys {
  x: string;
  y: string;
  z: string;
}

export type LegendPosition = 'top' | 'bottom';

export interface TooltipData {
  data: {
    column: string;
    row: string;
    value: string;
  };
  color?: string;
}

export interface HeatmapProps {
  data: DataItem[];
  dataKeys: DataKeys;

  width?: number;
  height?: number;

  colorPalette?: ColorPalette;

  showLeftAxis?: boolean;
  showBottomAxis?: boolean;
  widerLeftTrick?: boolean;

  legendPosition?: LegendPosition;

  withTooltip?: boolean;

  leftAxisTickFormatter?: (value: any) => string | undefined;
  bottomAxisTickFormatter?: (value: any) => string | undefined;
}

export const defaultChartParams = {
  width: 800,
  height: 600,

  bin: {
    borderRadius: 2,
    borderWidth: 1,
  },

  axis: {
    bottom: {
      trick: {
        height: 24,
      },
    },
    left: {
      trick: {
        width: 32,
      },
      largeTrick: {
        width: 96,
      },
    },
  },

  legend: {
    horizontal: {
      height: 24,
      gap: 8,
    },
  },

  tooltip: {
    width: 'fit-content',
    minWidth: 40,
    maxWidth: 200,
    leaveTimeout: 300,
  },
};
