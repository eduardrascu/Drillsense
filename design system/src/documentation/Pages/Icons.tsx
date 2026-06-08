import React, { FC } from 'react';

import {
  Bold,
  FlexContainer,
  IconsFootNote,
  InfoContainer,
  Link,
  Paragraph,
  Title,
} from '../blocks/styles';

import iconPackInfo from '../../assets/icon-pack-info.png';
import iconHowTo from '../../assets/icon-how-to.png';
import iconPrinciple from '../../assets/icon-principle.png';
import iconAlsoIncluded from '../../assets/icons-also-included.png';
import iconLabeling from '../../assets/icon-labels.png';
import iconInteractive from '../../assets/icons-interactive.png';

const Icons: FC = () => {
  return (
    <FlexContainer $gap={128}>
      <FlexContainer $gap={16}>
        <Title>Icons</Title>
        <Paragraph>
          Icons are visual symbols used to represent ideas, objects, or actions.
          They communicate messages at a glance, afford interactivity, and draw
          attention to important information.
        </Paragraph>
      </FlexContainer>

      <InfoContainer>
        <FlexContainer $gap={16}>
          <Title>Icon pack</Title>
          <Paragraph>
            We use <Link href="#">Carbon Icons</Link> and pictograms in our
            design system, but you can replace them with the package you need.
            For easy replacement of design system icons - we have marked the
            icons you need to replace, check the Icons labeling section below
          </Paragraph>
        </FlexContainer>

        <img src={iconPackInfo} alt="icon-pack-info" />
      </InfoContainer>

      <InfoContainer>
        <FlexContainer $gap={16}>
          <Title>How to add icons?</Title>
          <Paragraph>
            You need to find an icon in the Full Icons Pack file. Then edit the
            icon according to the principle of basic icons and paste it next to
            another basic icons.
          </Paragraph>
        </FlexContainer>

        <img src={iconHowTo} alt="icon-how-to" />
      </InfoContainer>

      <InfoContainer>
        <FlexContainer $gap={16}>
          <Title>The principle of basic icons</Title>
          <Paragraph>
            We use single-color icons. Usually there is one shape in each icon.
            To keep all icons functional, we need to rename all shapes inside
            the icon to &quot;Vector&quot;, then all colors will be applied
            automatically when we change any icon inside the project.
          </Paragraph>
        </FlexContainer>

        <img src={iconPrinciple} alt="icon-principle" />
      </InfoContainer>

      <InfoContainer>
        <FlexContainer $gap={16}>
          <Title>Icons labeling</Title>
          <div>
            <Paragraph>
              For your convenience we have created labeling which is divided
              into 3 types:
            </Paragraph>
            <Paragraph>
              <Bold>1.</Bold> icons that were used in the design system, if you
              want to change the set to another, first update the content of
              these icons, the rest of the icons can simply copy from your
              chosen library.
            </Paragraph>
            <Paragraph>
              <Bold>2.</Bold> custom icons that are not included in this icon
              library (in our case Carbon), will make it clear to the developer
              that these icons can not be found in the official library and that
              they were created manually or added from other libraries.
            </Paragraph>
            <Paragraph>
              <Bold>3.</Bold> icons that belong to both types at once
            </Paragraph>
          </div>

          <IconsFootNote>
            For an easy search you can use a plugin to find instances
          </IconsFootNote>
        </FlexContainer>

        <img src={iconLabeling} alt="icon-labeling" />
      </InfoContainer>

      <InfoContainer justify>
        <FlexContainer $gap={16}>
          <Title>Also included</Title>
          <Paragraph>
            Icons pack also contains pictograms library and flags
          </Paragraph>
        </FlexContainer>

        <img src={iconAlsoIncluded} alt="icon-also-included" />
      </InfoContainer>

      <InfoContainer justify>
        <FlexContainer $gap={16}>
          <Title>Interactive icons</Title>
          <Paragraph>
            These icons used as information icons with state and size
            properties.
          </Paragraph>
        </FlexContainer>

        <img src={iconInteractive} alt="icon-interactive" />
      </InfoContainer>
    </FlexContainer>
  );
};

export default Icons;
