import React, { FC } from 'react';

import {
  Bold,
  FlexContainer,
  InfoContainer,
  Link,
  Paragraph,
  Title,
} from '../blocks/styles';

import colors_visibility from '../../assets/colors_visibility.png';
import colors_modes from '../../assets/colors_modes.png';
import colors_tokens from '../../assets/colors_tokens.png';
import colors_tokens_ex from '../../assets/colors_tokens_ex.png';
import colors_demo from '../../assets/colors_demo.png';

const ColorsIntroduction: FC = () => {
  return (
    <FlexContainer $gap={128}>
      <FlexContainer $gap={24}>
        <FlexContainer $gap={16}>
          <Title>Color</Title>
          <Paragraph>
            To successfully work with colors in our design system you need to
            understand the basic principles of creating a color palette, how to
            use tokens, as well as understand how to use mods in Figma.
            <br />
            <Bold>
              Here are some useful articles and resources to help you with this:
            </Bold>
          </Paragraph>
        </FlexContainer>
        <FlexContainer $gap={40}>
          <InfoContainer $gap={124}>
            <FlexContainer $gap={8}>
              <Title size={20} $lineheight={28}>
                For designer:
              </Title>
              <Link>Creating your own color palette with Colorbox</Link>
              <Link>Modes in Figma</Link>
              <Link>Link</Link>
            </FlexContainer>
            <FlexContainer $gap={8}>
              <Title size={20} $lineheight={28}>
                For developer:
              </Title>
              <Link>How to use tokens</Link>
              <Link>Modes in Figma</Link>
              <Link>Link</Link>
            </FlexContainer>
          </InfoContainer>
          <Paragraph>
            Further you can find information that will help you understand how
            mods, palettes and tokens work and look like in our design system.
          </Paragraph>
        </FlexContainer>
      </FlexContainer>

      <InfoContainer>
        <FlexContainer $gap={16}>
          <Title>Visibility</Title>
          <Paragraph>
            Colors take the spotlight in our design ecosystem, exclusively
            showcased in the local variables editor for your ease. The mantra
            here is simple – avoid direct connections to your components;
            instead, harness the power of tokens. These dynamic tokens not only
            offer a spectrum of hues but also ensure flexibility, consistency,
            and a smooth visual experience across your design.
          </Paragraph>
        </FlexContainer>

        <img src={colors_visibility} alt="colors_visibility" />
      </InfoContainer>

      <InfoContainer>
        <FlexContainer $gap={16}>
          <Title>Modes</Title>
          <Paragraph>
            Your design will change depending on the mods applied to the layer.
            We have created for you a Light version that will be applied by
            default and 2 Dark themes with different approach, use the one that
            suits you and delete the one not in use. The 1st Dark theme connects
            to a custom palette created for it, while the 2nd Dark theme
            connects to the same palette as the Light one, but in reverse order.
            The wireframe mod simply replaces all colors with gray. <br />
            Don&apos;t hesitate to forge your own mods, tailoring your style to
            new heights, perhaps even crafting a unique brand theme. The design
            playground is yours to explore.
          </Paragraph>
        </FlexContainer>

        <img src={colors_modes} alt="colors_modes" />
      </InfoContainer>

      <FlexContainer $gap={40}>
        <FlexContainer $gap={16}>
          <Title>Token example</Title>
          <Paragraph>
            A token encapsulates a specific aspect of your design, typically
            represented by a name-value pair.Simple example: color-primary-text.
            <br />
            <br />
            <br />
            Element: Referring to the basic structural element or part of the UI
            that the token is associated with, such as backgrounds, text, or
            borders. <br />
            Role: The purpose or role of the token, whether it signifies an
            error state, success, or any other specific role within the design
            system.
            <br />
            Prominence: Indicating the level of importance or prominence of the
            color within the design hierarchy. <br /> State: Indicating how it
            behaves under different interactions like hover, focus, or active
            states.
          </Paragraph>
        </FlexContainer>
        <img src={colors_tokens} alt="colors_tokens" />
      </FlexContainer>

      <FlexContainer $gap={40}>
        <FlexContainer $gap={2}>
          <Title size={20} $lineheight={28}>
            Token and Palette connection example
          </Title>
          <Title size={12} $lineheight={16}>
            You can get up-to-date data in the Modes section of your project in
            Figma.
          </Title>
        </FlexContainer>
        <img src={colors_tokens_ex} alt="colors_tokens_ex" />
      </FlexContainer>

      <FlexContainer $gap={40}>
        <Title>Demo</Title>
        <img src={colors_demo} alt="colors_demo" />
      </FlexContainer>
    </FlexContainer>
  );
};

export default ColorsIntroduction;
