import styled, { css } from 'styled-components';

import * as Tokens from '../../../tokens/tokens';
import header_decoration from '../../assets/title_header.png';

export const Header = styled.div`
  background-image: url(${header_decoration});
  background-repeat: no-repeat;
  background-size: contain;
  padding: 50px 55px;
  min-width: max-content;
  font-family: 'Roboto' !important;
  font-size: 56px !important;
  font-weight: 700 !important;
  line-height: 78.4px !important;
  color: #f1f3ff;
`;

export const FlexContainer = styled.div<{ $gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => ($gap ? $gap : 24)}px;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const Paragraph = styled.p`
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  font-family: 'Inter' !important;
  margin: 0 !important;
`;

export const Title = styled.p<{
  size?: number;
  weight?: number;
  $lineheight?: number;
}>`
  font-size: ${({ size }) => (size ? size : 36)}px !important;
  font-weight: ${({ weight }) => (weight ? weight : 400)} !important;
  line-height: ${({ $lineheight }) =>
    $lineheight ? $lineheight : 40}px !important;
  font-family: 'Inter' !important;
  margin: 0 0 8px 0 !important;
`;

export const InfoContainer = styled.div<{ $gap?: number; justify?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ $gap }) => ($gap ? $gap : 56)}px;
  width: 100%;
  ${({ justify }) =>
    justify &&
    css`
      justify-content: space-between;
    `}
`;

export const Link = styled.a``;

export const Bold = styled.span`
  font-weight: 600;
`;

export const IconsFootNote = styled(Paragraph)`
  opacity: 0.6;
  place-self: start end;
`;

export const Chip = styled.div<{ color?: string }>`
  border-radius: 32px;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 16px !important;
  font-family: 'Inter' !important;
  margin: 0 !important;
  width: fit-content;
  text-align: center;
  padding: ${Tokens.Spacing3xs} ${Tokens.Spacing2xs};

  background-color: ${({ color, theme }) =>
    color ? color : theme['infoBackgroundTransparent']};
`;

export const FixedContainer = styled.div`
  min-width: max-content;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme['neutralTextWeak']};
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  font-family: 'Inter' !important;
  margin: 0 !important;
`;

export const UList = styled.ul`
  font-family: 'Inter' !important;
  margin: 0 !important;
`;

export const OList = styled.ol`
  font-family: 'Inter' !important;
  margin: 0 !important;
`;

export const Separator = styled.div`
  height: 2px;
  background-color: ${Tokens.LightNeutralTextWeak};
  opacity: 0.2;
`;

export const HeadingText = styled.p<{ size?: number; weight?: number }>`
  font-family: 'Roboto' !important;
  margin: 0 !important;
  font-size: ${({ size }) => (size ? size : 32)}px !important;
  font-weight: ${({ weight }) => (weight ? weight : 500)} !important;
  line-height: 36px !important;
  letter-spacing: 0.1px;
`;

export const HeadingContainer = styled.div<{ $gap?: number }>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => ($gap ? $gap : 56)}px;
  width: 100%;
  justify-content: space-between;
`;

// -----------------------------------------------------

export const TyopographyContainer = styled.div<{ $gap?: number }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ $gap }) => ($gap ? $gap : 56)}px;
  width: 100%;
`;

export const TyopographyInfo = styled.div`
  min-width: max-content;
`;

export const TyopographySize = styled.p<{
  size?: number;
  fontFamily: string;
}>`
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : 'Inter'} !important;
  font-size: 32px !important;
  line-height: 38.73px !important;
  font-weight: 500 !important;
  letter-spacing: 0.1px !important;
  margin-top: 0 !important;
`;

export const TyopographyFont = styled.span<{
  size?: number;
  weight?: number;
  fontFamily: string;
}>`
  font-family: 'Inter' !important;
  font-size: 14px !important;
  font-weight: ${({ weight }) => (weight ? weight : 500)} !important;
  line-height: 16px !important;
  letter-spacing: 0.25px !important;
  margin-top: 0 !important;
`;

export const Devider = styled.span`
  color: ${({ theme }) => theme['neutralText']};
`;

export const TyopographyExample = styled.p<{
  size?: number;
  $lineheight?: number;
  fontFamily: string;
  weight?: number;
}>`
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : 'Inter'} !important;
  font-size: ${({ size }) => size} !important;
  line-height: ${({ $lineheight }) => $lineheight} !important;
  font-weight: ${({ weight }) => (weight ? weight : 400)} !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 0 !important;
  width: 80%;
`;

export const TyopographyData = styled.div<{ $gap?: number }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ $gap }) => ($gap ? $gap : 56)}px;
`;

export const NoteContainer = styled.div<{ type?: 'primary' | 'secondary' }>`
  padding: ${Tokens.SpacingMd};
  background: ${({ type }) => (type === 'primary' ? '#DAEAFF' : '#56596B0A')};
  border: 1px solid
    ${({ type }) => (type === 'primary' ? '#6DADFB' : '#D6DAEA')};
  border-radius: 4px;
`;

// -----------------------------------------------------

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Archivo' !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 16px !important;
`;

export const ColorContrastContainer = styled.div<{ $hex: string }>`
  display: flex;
  padding: 12px 8px;
  background: ${({ $hex }) => $hex};
  width: 76px;
  align-items: center;
  justify-content: space-between;
`;

export const ColorInfoContainer = styled.div<{ $theme: 'dark' | 'light' }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 11px 16px;
  color: ${({ $theme }) => ($theme === 'light' ? '#000' : '#fff')};
  border-bottom: 1px solid
    ${({ $theme }) =>
      $theme === 'light'
        ? Tokens.LightNeutralBorderWeakest
        : Tokens.DarkNeutralBorderWeakest};
`;

export const ColorWhite = styled.span`
  color: #fff;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`;

export const DynamicBG = styled.div<{ $background?: string }>`
  background: ${({ $background }) => ($background ? $background : '#fff')};
`;
