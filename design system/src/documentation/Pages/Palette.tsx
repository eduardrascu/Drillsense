import React, { useMemo } from 'react';

import Heading from '../blocks/Heading';
import Note from '../blocks/Note';
import ColorStrip from '../blocks/ColorStrip';

import { FlexContainer, Grid, Link, Paragraph, Title } from '../blocks/styles';
import paletteData from '../../../tokens/pallete.json';
import { lightTheme } from '../../themes';

const Palette = () => {
  const colorsArray = Object.entries(paletteData.color).map(
    ([key, valueObj]) => ({
      key,
      value: valueObj.value,
    })
  );

  const palletes = useMemo(() => {
    return Object.keys(lightTheme.colors);
  }, []);

  const palleteSize = useMemo(() => {
    return Object.keys(lightTheme.colors).length;
  }, []);

  const renderColumns = (
    data: {
      key: string;
      value: string;
    }[]
  ) => {
    const columns: JSX.Element[] = [];

    for (
      let i = 0, j = 0;
      i < data.length, j < palletes.length;
      i += palleteSize, j++
    ) {
      const columnData = data.slice(i, i + palleteSize);
      columns.push(
        <FlexContainer $gap={24} key={i}>
          <Title size={20} $lineheight={28}>
            {palletes[j]}
          </Title>
          <div>
            {columnData.map(({ key, value }, index) => (
              <ColorStrip
                name={value}
                key={key}
                index={index < 9 ? '0' + (index + 1) : index + 1}
                hexCode={value}
              />
            ))}
          </div>
        </FlexContainer>
      );
    }
    return columns;
  };

  return (
    <FlexContainer $gap={128}>
      <FlexContainer $gap={64}>
        <FlexContainer $gap={40}>
          <FlexContainer $gap={16}>
            <Note title={'Base colors structure'}>
              <Paragraph>
                Dive into the core of our design canvas, where the main color
                palette unfolds into key segments: the default palette, a dark
                theme palette intricately linked to the main dark theme mod in
                tokens, a transparency group, and a vibrant palette exclusively
                crafted for data visualization.
              </Paragraph>
            </Note>
            <Note
              title={'How to create your own color palette.'}
              type="secondary"
            >
              <Paragraph>
                To create your own color palette, you can use many online tools,
                such as <Link href="https://colorbox.io/">Colorbox </Link> or
                <Link href="https://leonardocolor.io/"> Leonardo</Link>, after
                learning how to use them. You can also find ready-made palettes
                or create your own based on one specific color. For example to
                get lighter shades you can decrease steps by 10% opacity from
                the base color, and to get darker shades you can increase steps
                by 10% with multiply additional layer. Experiment and you will
                get a palette that satisfies you in every way! It&apos;s also
                worth keeping in mind that you don&apos;t have to use a palette
                of 14 colors and stick to their names, see how the colors are
                connected to the tokens and replace the palette with any you
                need.
              </Paragraph>
            </Note>
          </FlexContainer>

          <FlexContainer $gap={24}>
            <Heading titleWeight={400} gap={16} lineWidth={800} size={30}>
              Pallete
            </Heading>

            <Grid>{renderColumns(colorsArray)}</Grid>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Palette;
