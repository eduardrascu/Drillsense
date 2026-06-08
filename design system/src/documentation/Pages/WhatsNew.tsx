import React, { FC } from 'react';

import {
  FlexContainer,
  Title,
  Paragraph,
  InfoContainer,
  Chip,
  Link,
  FixedContainer,
  ListItem,
  UList,
  Separator,
} from '../blocks/styles';
import * as Tokens from '../../../tokens/tokens';

const WhatsNew: FC = () => {
  return (
    <FlexContainer $gap={128}>
      <FlexContainer $gap={16}>
        <Title>What’s new</Title>
        <Paragraph>
          Explore the latest enhancements and features in our design system
        </Paragraph>
      </FlexContainer>

      <FlexContainer $gap={64}>
        <InfoContainer $gap={64}>
          <FixedContainer>
            <FlexContainer $gap={10}>
              <Paragraph>Mar 6, 2024</Paragraph>
              <Chip color={Tokens.LightSystemInfoBackgroundTransparent}>
                Main DS file
              </Chip>
            </FlexContainer>
          </FixedContainer>
          <FlexContainer $gap={16}>
            <Title>Introducing the Templates!</Title>
            <Paragraph>
              We&apos;ve incorporated a dedicated section of templates crafted
              from existing components. Explore a variety of menus, collections
              of headers and footers, and pre-designed frequently used pages
              such as registration, login, pricing, sections of the landing
              page, and more. Accelerate your product creation process with
              these ready-made templates, making the journey from concept to
              realization even swifter!
            </Paragraph>
            <Link href="#">Learn more</Link>
          </FlexContainer>
        </InfoContainer>

        <Separator />

        <InfoContainer $gap={64}>
          <FixedContainer>
            <FlexContainer $gap={10}>
              <Paragraph>Mar 4, 2024</Paragraph>
              <Chip color={Tokens.LightSystemInfoBackgroundTransparent}>
                Main DS file
              </Chip>
              <Chip color={Tokens.LightSystemSuccessBackgroundTransparent}>
                Icons
              </Chip>
            </FlexContainer>
          </FixedContainer>

          <FlexContainer $gap={16}>
            <Title>Typography Overhaul + Enhanced Font Styles</Title>
            <UList>
              <ListItem>
                Revamped the entire typography system, introducing new and
                refined font styles.
              </ListItem>
              <ListItem>Streamlined Icons Library</ListItem>
              <ListItem>
                Say goodbye to clutter – we&apos;ve reorganized and optimized
                our icons library for a smoother browsing experience.
              </ListItem>
              <ListItem>
                Unveiling a refreshed color palette! Experience a harmonious
                blend of hues, ensuring a vibrant and cohesive visual language.
              </ListItem>
            </UList>
            <Link href="#">Learn more</Link>
          </FlexContainer>
        </InfoContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default WhatsNew;
