import React from 'react';

import Heading from '../blocks/Heading';

import { FlexContainer, Bold, Paragraph, Title } from '../blocks/styles';
import spacing_dependencies from '../../assets/spacing_dependencies.png';
import spacing_exceptions from '../../assets/spacing_exceptions.png';
import spacing_core from '../../assets/spacing_core.png';
import spacing_screens from '../../assets/spacing_screens.png';
import spacing_table from '../../assets/spacing_table.png';

const SpacingVariables = () => {
  return (
    <FlexContainer $gap={128}>
      <FlexContainer $gap={16}>
        <Title>🔢 Core numbers</Title>
        <Paragraph>
          <Bold>
            This collection contains everything related to the dimensions of the
            design system. Here you will find individual numbers related to
            spacing and corner radius.
          </Bold>
          <br />
          <br />
          Here you can also redistribute the base distances throughout the
          system depending on your needs. Includes 3 mods that redistribute the
          base numbers if required to add more or less distance to a layout or
          elements. Can help us in a situation where we need to add air.
          <br />
          Example: we can have different sizes for corporate website (default),
          landing page (wide) and dashboard (compressed)
        </Paragraph>
      </FlexContainer>

      <FlexContainer $gap={16}>
        <Title>Screen</Title>
        <Paragraph>
          <Bold>
            In this collection you will find mods to change the design depending
            on the screens.
          </Bold>
          <br />
          <br />
          Inside you will find many relationships with our core, also groups in
          the Components tab can refer to groups in the same collection, for
          example Button.
        </Paragraph>
      </FlexContainer>

      <FlexContainer $gap={40}>
        <FlexContainer $gap={2}>
          <Title size={20} $lineheight={28}>
            Core numbers and Screen connection example
          </Title>
          <Title size={12} $lineheight={16}>
            You can get up-to-date data in the variables of your project in
            Figma.
          </Title>
        </FlexContainer>
        <img src={spacing_screens} alt="spacing_screens" />
        <img src={spacing_table} alt="spacing_table" />
      </FlexContainer>

      <FlexContainer $gap={40}>
        <Heading titleWeight={300} gap={16} lineWidth={600}>
          Core numbers mode ex.
        </Heading>
        <img src={spacing_core} alt="spacing_core" />
      </FlexContainer>

      <FlexContainer $gap={56}>
        <FlexContainer $gap={16}>
          <Title>Dependencies</Title>
          <Paragraph>
            Distances and radius are individually specified in the Core Numbers
            collection and linked to the Screen collection. It&apos;s important
            to note that the radius and space may differ based on the selected
            mode. If you prefer a consistent behavior, adjust the values
            accordingly. You also have the option to unlink dependencies and
            delete the group entirely if you&apos;ve consistently used the
            values correctly. If needed, you can easily remove both the mods and
            the entire collection, relying solely on the Screen collection.
            Always be mindful of potential conflicts between mods from both
            collections that impact the same parameters and verify the outcome.
          </Paragraph>
        </FlexContainer>
        <img src={spacing_dependencies} alt="spacing_dependencies" />
      </FlexContainer>

      <FlexContainer $gap={56}>
        <FlexContainer $gap={16}>
          <Title>Exception groups.</Title>
          <FlexContainer $gap={32}>
            <Paragraph>
              Exception groups serve specific needs within the design system. In
              certain scenarios, you might require a departure from the general
              spacing logic within the space group. For instance, if the
              standard group follows a sequence like 2,4,0, but you need a
              different sequence like 2,6,2, the group --space-exception comes
              to your aid. It&apos;s worth noting that this group is created as
              an example and is not currently utilized in the design system.
            </Paragraph>
            <Paragraph>
              Another useful group is --resize-element, where you can define
              unique behaviors for specific elements. Within this group, you
              have the flexibility to modify properties for a specific list of
              elements. For instance, if you have a non-standard item that needs
              to be entirely replaced based on the mod used, or if you need to
              alter its size, you can create such cases here. To illustrate,
              consider a scenario with two pages – a Landing page (using the
              Wide mode) and a Dashboard (using Condensed). If you need to
              adjust distances and also alter the size of buttons, you can
              simply attach the desired property value for each mode and modify
              it as needed for each case.
            </Paragraph>
            <Paragraph>
              Furthermore, you have the freedom to craft a dedicated section for
              personalized alterations, naming it in alignment with your logic.
              This provides you the opportunity to replace elements not just
              based on size and distance but also, for instance, on appearance
              dictated by the context. This personalized section becomes your
              canvas for introducing tailored changes that extend beyond the
              conventional dimensions, offering a nuanced approach to element
              customization within specific contextual scenarios.
            </Paragraph>
          </FlexContainer>
        </FlexContainer>
        <img src={spacing_exceptions} alt="spacing_exceptions" />
      </FlexContainer>
    </FlexContainer>
  );
};

export default SpacingVariables;
