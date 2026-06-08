import React, { FC } from 'react';

import Heading from '../blocks/Heading';

import { FlexContainer, Paragraph, Title } from '../blocks/styles';
import spacing_horizontal from '../../assets/spacing_horizontal.png';
import spacing_vertical from '../../assets/spacing_vertical.png';

const Spacing: FC = () => {
  return (
    <FlexContainer $gap={128}>
      <FlexContainer $gap={16}>
        <Title>Spacing</Title>
        <Paragraph>
          Unlock the power of versatility with our responsive layouts,
          seamlessly structured on 4-column, 8-column, and 12-column grids.
          These grids transcend screens, devices, and orientations, ensuring
          adaptability across the digital spectrum. Immerse yourself in the
          precision of our 4px spatial grid, where multiples of 4 become the
          guiding principles for enhanced user interface flexibility and precise
          element sizing.
        </Paragraph>
      </FlexContainer>

      <FlexContainer $gap={49}>
        <Heading titleWeight={300} gap={16} lineWidth={700}>
          Spacing examples
        </Heading>

        <FlexContainer $gap={32}>
          <Heading titleWeight={600} size={20} gap={16} lineWidth={800}>
            Horizontal
          </Heading>
          <img src={spacing_horizontal} alt="spacing_horizontal" />
        </FlexContainer>

        <FlexContainer $gap={32}>
          <Heading titleWeight={600} size={20} gap={16} lineWidth={800}>
            Vertical
          </Heading>
          <img src={spacing_vertical} alt="spacing_vertical" />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Spacing;
