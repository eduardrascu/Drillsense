import React from 'react';

import { FlexContainer, Paragraph, Title } from '../blocks/styles';

import grids_settings from '../../assets/grids_settings.png';
import grids_additional_info from '../../assets/grids_additional_info.png';

const GridsIntroduction = () => {
  return (
    <FlexContainer $gap={128}>
      <FlexContainer $gap={16}>
        <Title>Grids</Title>
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

      <FlexContainer $gap={32}>
        <FlexContainer $gap={16}>
          <Title>Settings</Title>
          <Paragraph>
            Our design system offers the ability to use fixed or flexible grid,
            also called fluid. <br />
            Grid settings depends on the mod you are using - it adjusts margin,
            gutter, width, min-width, max-width of the layout. Reconfigure all
            values depending on your needs. You can also manage the grid styles,
            which will also adapt to the changes and show the correct settings,
            don&apos;t forget to set the required number of columns to display
            the grid style correctly.
          </Paragraph>
        </FlexContainer>

        <img src={grids_settings} alt="grids_settings" />
      </FlexContainer>

      <FlexContainer $gap={32}>
        <FlexContainer $gap={16}>
          <Title>Additional information:</Title>
          <Paragraph>
            - Some numeric values are connected to strings in the documentation,
            allowing you to pull up-to-date values from variables. <br />- If
            your design will have full-width containers inside - just disable
            margin and gutter binding to the common layer and create multiple
            bound wrappers when needed. Find an example in the demo.
          </Paragraph>
        </FlexContainer>

        <img src={grids_additional_info} alt="grids_additional_info" />
      </FlexContainer>
    </FlexContainer>
  );
};

export default GridsIntroduction;
