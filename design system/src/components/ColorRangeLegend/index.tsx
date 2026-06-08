import React from 'react';

import {
  LegendContainerStyled,
  ColorRangeStyled,
} from './ColorRangeLegend.styles';
import { ColorRangeLegendProps } from './types';

export const ColorRangeLegend = ({
  colorScaleRange,
  gap = 8,
  leftLabel = 'Low',
  rightLabel = 'High',
}: ColorRangeLegendProps) =>
  colorScaleRange && (
    <LegendContainerStyled $gap={gap}>
      <span>{leftLabel}</span>
      <ColorRangeStyled $colorRangeRange={colorScaleRange}></ColorRangeStyled>
      <span>{rightLabel}</span>
    </LegendContainerStyled>
  );
