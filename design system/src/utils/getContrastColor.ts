import { contrastColor } from 'contrast-color';

import convert from 'color-convert';

import * as Tokens from '../../tokens/tokens';

/**
 * Calculates the contrast color for a given background color.
 *
 * @param color - The background color in RGB or Hex format (optional, default: "rgb(255, 255, 255) or #ffffff").
 * @param defaultColor - Is returned if bgColor is determined to be invalid.
 * @param fgDarkColor - Is returned if bgColor is determined to be light
 * @param fgLightColor - Is returned if bgColor is determined to be dark
 * @param threshold - The threshold value used to adjust the variance (optional, default: 128).
 * @returns The contrast color in given format (e.g. "rgb(0, 0, 0) or #000000").
 */
export const getContrastColor = (
  color = '#ffffff',
  defaultColor = Tokens.LightNeutralTextDefault,
  fgDarkColor = Tokens.LightNeutralTextDefault,
  fgLightColor = Tokens.LightNeutralTextInverted,
  threshold = 128
): string => {
  let isInRgb = false;
  let colorHex = color;

  if (color.includes('rgb(')) {
    colorHex = `#${convert.rgb.hex(
      color.replace('rgb(', '').replace(')', '').split(', ')
    )}`;
    isInRgb = true;
  }

  const colorContrastHex = contrastColor({
    bgColor: colorHex,
    defaultColor,
    fgDarkColor,
    fgLightColor,
    threshold,
  });

  return !isInRgb
    ? colorContrastHex
    : `rgb(${convert.hex.rgb(colorContrastHex)})`;
};

/**
 * Converts a semi-transparent hex color (with alpha channel) into a fully opaque hex color.
 * The resulting color is visually equivalent to the semi-transparent one rendered on a given background.
 *
 * @param hexColor - A hex color string with alpha channel (e.g., "#6C75841F")
 * @param backgroundColor - The hex color of the background (default is white: "#FFFFFF")
 * @returns A new hex color string (without alpha) that visually matches the original with transparency.
 *
 * Example:
 *   hexToOpaque('#6C75841F') → "#F3F2F3"
 */
export const hexToOpaque = (
  hexColor: string,
  backgroundColor: string = '#FFFFFF'
): string => {
  // Remove '#' symbol if present
  const hex = hexColor.replace('#', '');
  const bg = backgroundColor.replace('#', '');

  // Extract RGBA from the 8-digit hex string
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = parseInt(hex.slice(6, 8), 16) / 255;

  // Extract RGB from background
  const rBg = parseInt(bg.slice(0, 2), 16);
  const gBg = parseInt(bg.slice(2, 4), 16);
  const bBg = parseInt(bg.slice(4, 6), 16);

  // Blend the transparent color with the background using alpha compositing formula
  const rOut = Math.round((1 - a) * rBg + a * r);
  const gOut = Math.round((1 - a) * gBg + a * g);
  const bOut = Math.round((1 - a) * bBg + a * b);

  // Return as a 6-digit uppercase hex string
  return (
    '#' +
    rOut.toString(16).padStart(2, '0') +
    gOut.toString(16).padStart(2, '0') +
    bOut.toString(16).padStart(2, '0')
  ).toUpperCase();
};
