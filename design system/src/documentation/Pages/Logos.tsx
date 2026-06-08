import React, { FC } from 'react';

import Heading from '../blocks/Heading';

import {
  Bold,
  FlexContainer,
  InfoContainer,
  ListItem,
  Paragraph,
  Title,
  OList,
} from '../blocks/styles';

import logos from '../../assets/logos.png';
import logos_props from '../../assets/logos_properties.png';
import logos_bg_light from '../../assets/logos_bg_light.png';
import logos_bg_dark from '../../assets/logos_bg_dark.png';
import logos_guidelines from '../../assets/logos_guidelines.png';
import logos_vertical from '../../assets/logos_vertical.png';
import logos_horizontal from '../../assets/logos_horizontal.png';
import logos_symbol from '../../assets/logos_symbols.png';

const Logos: FC = () => {
  return (
    <FlexContainer $gap={128}>
      <InfoContainer $gap={60}>
        <FlexContainer $gap={8}>
          <Title>Logos</Title>
          <FlexContainer>
            <Paragraph>
              Logos are important in design for several reasons:
            </Paragraph>
            <OList>
              <ListItem>
                <Bold>Brand Identity:</Bold> Logos help establish and reinforce
                a brand&apos;s identity. They are often the first thing users
                see and can create a strong visual connection to the brand.
              </ListItem>
              <ListItem>
                <Bold>Recognition: Logos</Bold>
                help users quickly identify and recognize a brand. A
                well-designed logo can make a brand memorable and stand out from
                competitors.
              </ListItem>
              <ListItem>
                <Bold>Trust and Credibility:</Bold> A professional and
                well-designed logo can convey trust and credibility to users. It
                shows that the brand is established and takes its image
                seriously.
              </ListItem>
              <ListItem>
                <Bold>Consistency:</Bold> Logos provide a consistent visual
                element across different platforms and touchpoints. They help
                create a cohesive and unified brand experience for users.
              </ListItem>
              <ListItem>
                <Bold>Navigation:</Bold> Logos can also serve as a navigation
                element, allowing users to easily return to the homepage or main
                section of a website or app.
              </ListItem>
            </OList>
            <Paragraph>
              In summary, logos play a crucial role in UI/UX design by helping
              to establish brand identity, increase recognition, build trust,
              ensure consistency, and aid in navigation.
            </Paragraph>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer $gap={32} style={{ minWidth: '20%' }}>
          <img src={logos} alt="logos" />
        </FlexContainer>
      </InfoContainer>

      <FlexContainer $gap={56}>
        <FlexContainer $gap={8}>
          <Title>Accessibility and Responsiveness</Title>
          <Paragraph>
            Logos in a design system should be designed with accessibility and
            responsiveness in mind. They need to be legible, recognizable, and
            adaptable to different screen sizes and devices to provide a
            seamless user experience.
          </Paragraph>
        </FlexContainer>

        <FlexContainer $gap={32}>
          <Heading titleWeight={300} gap={16} lineWidth={800}>
            Properties
          </Heading>
          <img src={logos_props} alt="logos_props" />
        </FlexContainer>

        <FlexContainer $gap={32}>
          <Heading titleWeight={300} gap={16} lineWidth={400}>
            Colors (for different backround use)
          </Heading>
          <InfoContainer>
            <img src={logos_bg_light} alt="logos_bg_light" />
            <img src={logos_bg_dark} alt="logos_bg_dark" />
          </InfoContainer>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer $gap={56}>
        <FlexContainer $gap={8}>
          <Title>Guidelines and Usage</Title>
          <Paragraph>
            Design systems often include guidelines for logo usage, specifying
            how the logo should be displayed, its minimum size, clear space
            requirements, and rules for placement. These guidelines help ensure
            that the logo is used correctly and consistently across all
            applications.
          </Paragraph>
        </FlexContainer>
        <FlexContainer $gap={32}>
          <Heading titleWeight={300} gap={16} lineWidth={800}>
            Guidelines
          </Heading>
          <img src={logos_guidelines} alt="logos_guidelines" />
        </FlexContainer>
      </FlexContainer>

      <FlexContainer $gap={56}>
        <FlexContainer $gap={8}>
          <Title>Scalability and Adaptability</Title>
          <Paragraph>
            Logos need to be designed in a way that allows for scalability and
            adaptability across various digital and print mediums. In a design
            system, logos are typically provided in different formats and sizes
            to ensure they look good and maintain brand consistency across all
            touchpoints.
          </Paragraph>
        </FlexContainer>
        <FlexContainer $gap={32}>
          <Heading titleWeight={600} size={20} gap={16} lineWidth={800}>
            Vertical
          </Heading>
          <img src={logos_vertical} alt="logos_vertical" />
        </FlexContainer>
        <FlexContainer $gap={32}>
          <Heading titleWeight={600} size={20} gap={16} lineWidth={800}>
            Horizontal
          </Heading>
          <img src={logos_horizontal} alt="logos_horizontal" />
        </FlexContainer>
        <FlexContainer $gap={32}>
          <Heading titleWeight={600} size={20} gap={16} lineWidth={800}>
            Symbol
          </Heading>
          <img src={logos_symbol} alt="logos_symbols" />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Logos;
