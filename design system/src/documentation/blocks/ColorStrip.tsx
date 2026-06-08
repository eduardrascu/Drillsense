import React, { FC } from 'react';

import {
  ColorContainer,
  ColorContrastContainer,
  ColorInfoContainer,
  ColorWhite,
} from './styles';

type Props = {
  index: string | number;
  hexCode: string;
  name: string;
  showContrast?: boolean;
  theme?: 'dark' | 'light';
};

const ColorStrip: FC<Props> = ({
  index,
  hexCode,
  showContrast = true,
  name,
  theme = 'light',
}) => {
  return (
    <ColorContainer>
      <ColorContrastContainer $hex={hexCode}>
        {showContrast ? (
          <>
            <ColorWhite>0</ColorWhite>
            <span>0</span>
          </>
        ) : (
          <span>‎ </span>
        )}
      </ColorContrastContainer>
      <ColorInfoContainer $theme={theme}>
        <span>{index}</span>
        <span>{name}</span>
      </ColorInfoContainer>
    </ColorContainer>
  );
};

export default ColorStrip;
