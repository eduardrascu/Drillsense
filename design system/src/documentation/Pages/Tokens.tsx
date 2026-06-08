import React from 'react';

import { darkTheme, lightTheme } from '../../themes';
import { DarkNeutralBackgroundBase } from '../../../tokens/tokens';

import Heading from '../blocks/Heading';
import Note from '../blocks/Note';
import ColorStrip from '../blocks/ColorStrip';

import { DynamicBG, FlexContainer, Paragraph } from '../blocks/styles';

const Tokens = () => {
  const tokenOrder = [
    'neutral',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
  ];

  const filterAndSortTokens = (
    tokens: Record<string, unknown>
  ): Record<string, unknown>[] => {
    const sortedTokens: Record<string, unknown>[] = [];

    tokenOrder.forEach(tokenType => {
      Object.entries(tokens).forEach(([key, value]) => {
        if (
          key.toLowerCase().includes(tokenType) &&
          typeof value !== 'object'
        ) {
          sortedTokens.push({ [key]: value });
        }
      });
    });

    return sortedTokens;
  };

  const sortedDarkTokens = filterAndSortTokens(darkTheme);
  const sortedLightTokens = filterAndSortTokens(lightTheme);

  const renderTokens = (
    tokens: Record<string, unknown>[],
    theme: 'light' | 'dark'
  ) => {
    return (
      <div>
        {tokens.map(item => {
          const key = Object.keys(item)[0];
          const value = item[key];

          return (
            <ColorStrip
              name={value as string}
              showContrast={false}
              key={key}
              index={key}
              hexCode={value as string}
              theme={theme}
            />
          );
        })}
      </div>
    );
  };

  return (
    <FlexContainer $gap={128}>
      <FlexContainer $gap={64}>
        <FlexContainer $gap={40}>
          <FlexContainer $gap={16}>
            <Note title={'Semantic color tokens'}>
              <Paragraph>
                Unlock the potential of our color tokens operating on two
                levels. Common tokens are your foundation, linked to the main
                color palette, while component-level tokens provide room for
                individual tweaks. Changes to the main tokens echo across
                component-level tokens, streamlining your color management with
                efficiency and cohesion.
              </Paragraph>
            </Note>
          </FlexContainer>

          <FlexContainer $gap={64}>
            <FlexContainer $gap={24}>
              <Heading titleWeight={400} gap={16} lineWidth={700} size={30}>
                Tokens [light mode]
              </Heading>

              <>{renderTokens(sortedLightTokens, 'light')}</>
            </FlexContainer>

            <FlexContainer $gap={24}>
              <Heading titleWeight={400} gap={16} lineWidth={700} size={30}>
                Tokens [dark mode]
              </Heading>

              <DynamicBG $background={DarkNeutralBackgroundBase}>
                {renderTokens(sortedDarkTokens, 'dark')}
              </DynamicBG>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Tokens;
