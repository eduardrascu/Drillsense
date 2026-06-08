import React, { FC } from 'react';

import {
  Devider,
  TyopographyContainer,
  TyopographyData,
  TyopographyExample,
  TyopographyFont,
  TyopographyInfo,
  TyopographySize,
} from './styles';

type Props = {
  tokenName: string;
  type?: string;
  size: number;
  lineheight: number;
  fontFamily?: string;
  sample?: string;
};

const TypograhyBlock: FC<Props> = ({
  tokenName,
  size,
  lineheight,
  type = 'Semibold / Regular',
  fontFamily = 'Inter',
  sample = 'The quick brown fox jumps over the lazy dog.',
}) => {
  return (
    <TyopographyContainer $gap={52}>
      <TyopographyInfo>
        <TyopographySize fontFamily={fontFamily}>{tokenName}</TyopographySize>
        <TyopographyData $gap={52}>
          <div>
            <div>
              <TyopographyFont weight={300} fontFamily={fontFamily}>
                <TyopographyFont fontFamily={fontFamily}>
                  {fontFamily + ' '}
                </TyopographyFont>
                {type}
              </TyopographyFont>
            </div>
            <TyopographyFont weight={300} fontFamily={fontFamily}>
              <TyopographyFont fontFamily={fontFamily}>{size}</TyopographyFont>
              <Devider>{' ' + '/' + ' '}</Devider>
              <TyopographyFont fontFamily={fontFamily}>
                {lineheight}
              </TyopographyFont>
            </TyopographyFont>
          </div>

          <div>
            <TyopographyExample
              fontFamily={fontFamily}
              size={size}
              $lineheight={lineheight}
            >
              {sample}
            </TyopographyExample>
            <TyopographyExample
              weight={600}
              fontFamily={fontFamily}
              size={size}
              $lineheight={lineheight}
            >
              {sample}
            </TyopographyExample>
          </div>
        </TyopographyData>
      </TyopographyInfo>
    </TyopographyContainer>
  );
};

export default TypograhyBlock;
