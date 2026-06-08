import { lightTheme } from '../../../themes';

export type ColorPalette = keyof typeof lightTheme.colors.dataViz;

export interface Node {
  name: string;
}

export interface Link {
  source: string;
  target: string;
  value: number;
}

export interface DataItem {
  source: string;
  target: string;
  value: string;
}

export interface DataLabels {
  source: string;
  target: string;
  value: string;
}

export interface SankeyProps {
  data: DataItem[];

  dataLabels: DataLabels;

  width?: number;
  height?: number;

  colorPalette?: ColorPalette;

  legendPosition?: LegendPosition;

  withTooltip?: boolean;

  valueFormatter?: (value: unknown) => string | undefined;
}

export type LegendPosition = 'top' | 'bottom';

export interface TooltipData {
  data: {
    source: string;
    target: string;
    value: string;
  };
  color?: string;
}

export const defaultChartParams = {
  width: 800,
  height: 600,

  header: {
    categoryName: {
      lineHeight: 16,
      fontSize: 12,
    },
    marginBottom: 16,
  },

  axis: {
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
