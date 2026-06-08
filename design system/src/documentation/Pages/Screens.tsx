import React from 'react';

import Heading from '../blocks/Heading';

import { FlexContainer, InfoContainer } from '../blocks/styles';

import grids_type1_desktop from '../../assets/grids_type1_desktop.png';
import grids_type2_desktop from '../../assets/grids_type2_desktop.png';
import grids_type1_laptop from '../../assets/grids_type1_laptop.png';
import grids_type2_laptop from '../../assets/grids_type2_laptop.png';
import grids_type1_tablet from '../../assets/grids_type1_tablet.png';
import grids_type2_tablet from '../../assets/grids_type2_tablet.png';
import grids_type1_mobile from '../../assets/grids_type1_mobile.png';
import grids_type2_mobile from '../../assets/grids_type2_mobile.png';
import grids_examples from '../../assets/grids_examples.png';

const Screens = () => {
  return (
    <FlexContainer $gap={64}>
      <FlexContainer $gap={40}>
        <Heading titleWeight={400} size={30}>
          Desktop
        </Heading>

        <img src={grids_type1_desktop} alt="grids_type1_desktop" />
        <img
          width={'600px'}
          src={grids_type2_desktop}
          alt="grids_type2_desktop"
        />

        <Heading titleWeight={400} size={30}>
          Laptop
        </Heading>

        <img src={grids_type1_laptop} alt="grids_type1_laptop" />
        <img
          width={'600px'}
          src={grids_type2_laptop}
          alt="grids_type2_laptop"
        />

        <Heading titleWeight={400} size={30}>
          Tablet
        </Heading>

        <img src={grids_type1_tablet} alt="grids_type1_tablet" />
        <img
          width={'400px'}
          src={grids_type2_tablet}
          alt="grids_type2_tablet"
        />

        <Heading titleWeight={400} size={30}>
          Mobile
        </Heading>

        <InfoContainer>
          <img src={grids_type1_mobile} alt="grids_type1_mobile" />
          <img src={grids_type2_mobile} alt="grids_type2_mobile" />
        </InfoContainer>
      </FlexContainer>

      <FlexContainer $gap={40}>
        <Heading titleWeight={400} size={30} lineWidth={600}>
          Core numbers mode ex.
        </Heading>

        <img src={grids_examples} alt="grids_examples" />
      </FlexContainer>
    </FlexContainer>
  );
};

export default Screens;
