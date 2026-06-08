import React, { FC } from 'react';

import {
  InfoContainer,
  FlexContainer,
  Paragraph,
  Title,
} from '../blocks/styles';
import info from '../../assets/design-kits-info.png';
import schema from '../../assets/schema.png';

const DesignGetStarted: FC = () => {
  return (
    <FlexContainer $gap={128}>
      <FlexContainer $gap={16}>
        <Title>Get started</Title>
        <Paragraph>
          To commence your journey with our design system, it&apos;s essential
          to grasp the fundamental structure of the system&apos;s design.
          Familiarize yourself with the various states of elements, understand
          how component properties are organized, learn to navigate local
          variables, and discover the art of leveraging mods to dynamically
          alter the values of these variables. A foundational understanding of
          these key aspects will empower you to navigate and harness the full
          potential of our design system effectively.
        </Paragraph>
      </FlexContainer>

      <InfoContainer>
        <FlexContainer $gap={16}>
          <Title>Design kits</Title>
          <Paragraph>
            The design system is partitioned into several interlinked libraries
            that you can integrate into your primary file. Alternatively, you
            have the option to work directly within the main file. Each method
            carries its own set of advantages and drawbacks. Connecting the
            entire design system as an independent library can reduce the
            overall weight of your project. However, it comes with the caveat
            that any modification necessitates publication and updates.
          </Paragraph>
        </FlexContainer>
        <img src={info} alt="info" />
      </InfoContainer>

      <img src={schema} alt="schema" />
    </FlexContainer>
  );
};

export default DesignGetStarted;
