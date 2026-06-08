import React, { FC } from 'react';

import Heading from '../blocks/Heading';

import {
  FlexContainer,
  InfoContainer,
  Link,
  Paragraph,
  Title,
} from '../blocks/styles';

import * as Tokens from '../../../tokens/tokens';

import FontSizeReference from '../../assets/font-size-reference.png';
import TypograhyBlock from '../blocks/TypograhyBlock';

const Typography: FC = () => {
  const HeadingFontData = [
    {
      tokenName: '4xl',
      size: Tokens.HeadingFontSize4xl,
      lineHeight: Tokens.HeadingLineHeight4xl,
    },
    {
      tokenName: '3xl',
      size: Tokens.HeadingFontSize3xl,
      lineHeight: Tokens.HeadingLineHeight3xl,
    },
    {
      tokenName: '2xl',
      size: Tokens.HeadingFontSize2xl,
      lineHeight: Tokens.HeadingLineHeight2xl,
    },
    {
      tokenName: 'xl',
      size: Tokens.HeadingFontSizeXl,
      lineHeight: Tokens.HeadingLineHeightXl,
    },
    {
      tokenName: 'lg',
      size: Tokens.HeadingFontSizeLg,
      lineHeight: Tokens.HeadingLineHeightLg,
    },
    {
      tokenName: 'md',
      size: Tokens.HeadingFontSizeMd,
      lineHeight: Tokens.HeadingLineHeightMd,
    },
    {
      tokenName: 'sm',
      size: Tokens.HeadingFontSizeSm,
      lineHeight: Tokens.HeadingLineHeightSm,
    },
  ];

  const BodyFontData = [
    {
      tokenName: 'lg',
      size: Tokens.BodyFontSizeLg,
      lineHeight: Tokens.BodyLineHeightLg,
    },
    {
      tokenName: 'md',
      size: Tokens.BodyFontSizeMd,
      lineHeight: Tokens.BodyLineHeightMd,
    },
    {
      tokenName: 'sm',
      size: Tokens.BodyFontSizeSm,
      lineHeight: Tokens.BodyLineHeightSm,
    },
    {
      tokenName: 'xs',
      size: Tokens.BodyFontSizeXs,
      lineHeight: Tokens.BodyLineHeightXs,
    },
  ];

  return (
    <FlexContainer $gap={128}>
      <InfoContainer $gap={40}>
        <FlexContainer $gap={16}>
          <Title>Typography</Title>
          <Paragraph>
            We use <Link href="#">Inter</Link> as our main font for both
            headlines and body text. It can be easily customized based on the
            fonts representing your brand.
            <br />
            <br />
            In this project, we&apos;ve embraced a distinctive approach to
            naming fonts, fostering a conditionally independent system.
            <br />
            For sizes you can use both pixel (px) and relative em (rem) values.
          </Paragraph>
        </FlexContainer>
        <img src={FontSizeReference} alt="reference.png" />
      </InfoContainer>

      <FlexContainer $gap={54}>
        <Heading gap={16} lineWidth={800}>
          heading
        </Heading>
        <FlexContainer $gap={32}>
          {HeadingFontData.map(font => (
            <TypograhyBlock
              key={font.lineHeight + font.size}
              tokenName={font.tokenName}
              size={font.size}
              lineheight={font.lineHeight}
            ></TypograhyBlock>
          ))}
        </FlexContainer>
      </FlexContainer>

      <FlexContainer $gap={54}>
        <Heading gap={16} lineWidth={800}>
          body
        </Heading>
        <FlexContainer $gap={32}>
          {BodyFontData.map(font => (
            <TypograhyBlock
              key={font.lineHeight + font.size}
              tokenName={font.tokenName}
              size={font.size}
              lineheight={font.lineHeight}
            ></TypograhyBlock>
          ))}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Typography;
