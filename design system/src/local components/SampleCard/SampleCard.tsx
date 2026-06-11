import React from 'react';
import styled from 'styled-components';
import { space, radii, fontFamilies, fontSizes, fontWeights } from '@src/themes';
import { Icon } from '@src/components/Icon';
import { IconName } from '@src/components/Icon/types';

/* ============================================================================
 * SampleCard — a single core-sample tile (thumbnail + depth + id + date/count)
 * used in the "Samples by depth" gallery. Colors resolve through the active
 * theme; layout scales come from tokens.
 * ==========================================================================*/

export interface SampleCardProps {
  /** image src for the core-sample thumbnail */
  image: string;
  /** measured depth in feet */
  depth: number;
  /** sample id, e.g. "84439" */
  id: string;
  /** captured-date label, e.g. "Dec 11, 11:17 AM" */
  date: string;
  /** particle / reading count */
  count: number;
  onClick?: () => void;
}

const fmt = (n: number) => n.toLocaleString('en-US');

const Tile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: ${space['12px']};
  border-radius: ${radii.sm};
  height: 100%;
  cursor: pointer;
  &:hover > *:first-child {
    border-color: ${({ theme }) => theme.colors.primary.background.stronger};
  }
  &:hover img {
    transform: scale(1.09);
  }
`;

const ImgWrap = styled.div`
  flex: none;
  width: ${space['96px']};
  align-self: stretch;
  border-radius: ${radii.sm};
  border: 1px solid transparent;
  overflow: hidden;
  transition: border-color 0.15s ease;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.2s ease;
`;

const Body = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${space['8px']};
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['4px']};
`;

const DepthRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${space['4px']};
`;

const DepthValue = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.m};
  font-weight: ${fontWeights.semibold};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-variant-numeric: tabular-nums;
`;

const IdRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${space['4px']};
  svg path {
    fill: ${({ theme }) => theme.colors.neutral.text.weak};
  }
`;

const IdLabel = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  font-weight: ${fontWeights.regular};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const DateRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${space['6px']};
  svg path {
    fill: ${({ theme }) => theme.colors.neutral.text.weakest};
  }
`;

const Small = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${({ theme }) => theme.colors.neutral.text.weakest};
`;

export const SampleCard: React.FC<SampleCardProps> = ({ image, depth, id, date, count, onClick }) => (
  <Tile onClick={onClick}>
    <ImgWrap>
      <Img src={image} alt="" />
    </ImgWrap>
    <Body>
      <TitleGroup>
        <DepthRow>
          <DepthValue>{fmt(depth)} ft</DepthValue>
        </DepthRow>
        <IdRow>
          <Icon iconName={IconName.UPC} width={20} height={20} />
          <IdLabel>{id}</IdLabel>
        </IdRow>
      </TitleGroup>
      <DateRow>
        <Small>{date}</Small>
        <Small>/</Small>
        <Small>#{count}</Small>
      </DateRow>
    </Body>
  </Tile>
);
