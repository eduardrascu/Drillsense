export type colorPalette = keyof typeof lightTheme.colors.dataViz;

export interface DataItem {
  [key: string]: string;
}

export interface DataKeys {
  x: string;
  y: string[];
}

export interface PieChartProps {
  data: DataItem[];
  colorPalette?: colorPalette;
  dataKeys: DataKeys;
  height?: number;
  hasColorsOrderedByIndex?: boolean;
  isOrderedByIndex?: boolean;
  width?: number;
  hasLabels?: boolean;
  withTooltip?: boolean;
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

  tooltip: {
    width: 'fit-content',
    minWidth: 40,
    maxWidth: 80,
    leaveTimeout: 300,
  },
};
