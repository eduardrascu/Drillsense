import React, { useEffect, useState } from 'react';
import { SwatchesPicker } from 'react-color';
import { colorBlocks, colors } from './colors';
import {
  CustomAlphaPicker,
  GradientsItem,
  GradientsItems,
  GradientsTitle,
  GradientsWrapper,
  HexInput,
  HexTitle,
  HexWrapper,
  StyledSketchPickerWrapper,
} from './styles';
import { hexToRGBA } from '../../helpers/hexToRgba';
import { useDebounce } from '../../hooks/useDebounce';

interface ColorPickerProps {
  callback: (color: any) => void;
  color: string;
  item: any;
}
export const ColorPicker = ({ color, callback, item }: ColorPickerProps) => {
  const [hexValue, setHexValue] = useState(item.backgroundColor);
  const [alphaColor, setAlphaColor] = useState(item.rgbaColor);
  const debouncedAlphaColor = useDebounce(alphaColor, 300);
  const debouncedHexColor = useDebounce(hexValue, 300);

  useEffect(() => {
    callback({
      ...item,
      rgbaColor: debouncedAlphaColor,
      backgroundColor: debouncedHexColor,
    });
  }, [debouncedAlphaColor, debouncedHexColor]);

  useEffect(() => {
    callback({
      ...item,
      backgroundColor: debouncedHexColor,
      rgbaColor: hexToRGBA(debouncedHexColor, 1),
    });
  }, [debouncedHexColor]);

  useEffect(() => {
    setAlphaColor(item.rgbaColor);
  }, [item.rgbaColor]);

  useEffect(() => {
    setHexValue(item.backgroundColor);
  }, [item.backgroundColor]);

  return (
    <StyledSketchPickerWrapper $backgroundColor={color}>
      <SwatchesPicker
        color={color}
        onChange={color => callback(color)}
        colors={colors}
      />

      <HexWrapper>
        <HexTitle>HEX</HexTitle>
        <HexInput
          value={hexValue}
          onChange={e => {
            callback({ ...item, backgroundColor: e.target.value });
          }}
        />
      </HexWrapper>

      <CustomAlphaPicker
        color={alphaColor}
        width="251"
        onChange={color =>
          setAlphaColor(
            `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
          )
        }
      />

      <GradientsWrapper>
        <GradientsTitle>GRADIENTS</GradientsTitle>
        <GradientsItems>
          {colorBlocks.map(el => (
            <GradientsItem
              key={el.id}
              $selectedItem={item.gradient === el.gradient}
              onClick={() =>
                callback({
                  ...item,
                  backgroundColor: '',
                  gradient: el.gradient,
                })
              }
            >
              {el.icon}
            </GradientsItem>
          ))}
        </GradientsItems>
      </GradientsWrapper>
    </StyledSketchPickerWrapper>
  );
};

export default ColorPicker;
