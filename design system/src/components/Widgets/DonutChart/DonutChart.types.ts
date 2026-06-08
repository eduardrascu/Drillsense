export type colorPalette = keyof typeof lightTheme.colors.dataViz;

export interface DataItem {
  [key: string]: string;
}

export interface DataKeys {
  x: string;
  y: string[];
}

export interface DonutChartProps {
  data: DataItem[];
  children?: string | JSX.Element | JSX.Element[];
  colorPalette?: colorPalette;
  dataKeys: DataKeys;
  hasColorsOrderedByIndex?: boolean;
  hasLabels?: boolean;
  height?: number;
  isOrderedByIndex?: boolean;
  thicknessPercent?: number;
  width?: number;
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

  thicknessPercent: 20,

  tooltip: {
    width: 'fit-content',
    minWidth: 40,
    maxWidth: 80,
    leaveTimeout: 300,
  },
};
