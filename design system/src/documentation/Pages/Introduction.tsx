import React, { FC } from 'react';

import { Item, FlexContainer, Title, Paragraph } from '../blocks/styles';

import robot from '../../assets/icons/robot.png';
import code from '../../assets/icons/code.png';
import chart from '../../assets/icons/chart.svg';
import settings from '../../assets/icons/settings.png';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import video from '../../assets/introduction.mp4';

export const Introduction: FC = () => {
  const Paragraphs = [
    {
      icon: robot,
      text: 'Embark on a design journey like never before with our cutting-edge system. Unleash the power of AI to effortlessly generate pages aligned with your vision. Imagine a design assistant that not only understands your prompts but crafts entire pages using our extensive range of components and styles.',
    },
    {
      icon: code,
      text: "But that's not all – dive into the world of variables and customization. Tailor components to fit your brand seamlessly. Change input sizes, tweak colors – all with the flexibility to enhance without overhauling. The interconnected nature of our system ensures changes ripple through, maintaining visual harmony.",
    },
    {
      icon: chart,
      text: 'Take it a step further with our exclusive charts and graphs library, a masterpiece by our data design specialists. Elevate your data representation, seamlessly integrated and ready for use.',
    },
    {
      icon: settings,
      text: 'Use mods that allow you to dynamically control distance and change colors. From different screen sizes to different design needs (e.g. landing pages, dashboards), mods allow you to tweak the spacing so your design can easily fit into any scenario. Welcome to a design system that empowers innovation and personalization because your design should be as unique as your imagination.',
    },
  ];

  return (
    <FlexContainer $gap={64}>
      <FlexContainer $gap={16}>
        <Title>
          Welcome to FuseStudio <br /> -where creativity meets precision
        </Title>
        <Paragraph>
          In the realm of variables and customization, FuseStudio stands out as
          a paragon of adaptability. Personalize components to mirror your brand
          identity effortlessly – from the subtle nuances of input sizes to the
          vibrancy of color palettes. The interconnected architecture of our
          system ensures that your design modifications cascade harmoniously,
          maintaining a visual symphony that resonates with your brand ethos.
        </Paragraph>
      </FlexContainer>

      <video muted autoPlay loop controls width="100%">
        <source src={video} type="video/mp4" />
      </video>

      <FlexContainer $gap={24}>
        <Title>Innovate & personalize</Title>
        <FlexContainer>
          {Paragraphs.map(p => (
            <Item key={p.icon}>
              <img src={p.icon} alt="icon" />
              <Paragraph>{p.text}</Paragraph>
            </Item>
          ))}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Introduction;
