import React, { FC, PropsWithChildren } from 'react';
import { HeadingContainer, HeadingText } from './styles';

import Line from '../../assets/Line';

type Props = {
  gap?: number;
  lineWidth?: number;
  titleWeight?: number;
  size?: number;
};

const Heading: FC<PropsWithChildren<Props>> = ({
  gap,
  lineWidth,
  children,
  titleWeight,
  size,
}) => {
  return (
    <HeadingContainer $gap={gap}>
      <HeadingText size={size} weight={titleWeight}>
        {children}
      </HeadingText>
      <Line width={lineWidth} />
    </HeadingContainer>
  );
};

export default Heading;
