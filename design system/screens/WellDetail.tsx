import { useState, useRef, useLayoutEffect, useEffect, type JSX } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  darkTheme,
  spacing,
  space,
  radii,
  fontSizes,
  fontWeights,
  lineHeights,
  fontFamilies,
  sizes,
  shadows,
} from '@src/themes';
import { Breadcrumbs } from '@src/components/Breadcrumbs';
import { Typography } from '@src/components/Typography';
import { Button } from '@src/components/Button';
import { Badge } from '@src/components/Badge';
import { ProgressBar } from '@src/components/ProgressBar';
import { Tabs } from '@src/components/Tabs';
import { Avatar } from '@src/components/Avatar';
import { Toggle } from '@src/components/Toggle';
import { Divider } from '@src/components/Divider';
import { Icon } from '@src/components/Icon';
import { IconName } from '@src/components/Icon/types';
import { DrillsenseLogo } from '@/src/local components/DrillsenseLogo/DrillsenseLogo';
import avatarImg from '@src/assets/avatar.png';
import sampleImg0 from '@src/assets/sample images/Rectangle 1.jpg';
import sampleImg1 from '@src/assets/sample images/Rectangle 1-1.jpg';
import sampleImg2 from '@src/assets/sample images/Rectangle 1-2.jpg';
import sampleImg3 from '@src/assets/sample images/Rectangle 1-3.jpg';
import sampleImg4 from '@src/assets/sample images/Rectangle 1-4.jpg';
import sampleImg5 from '@src/assets/sample images/Rectangle 1-5.jpg';
import sampleImg6 from '@src/assets/sample images/Rectangle 1-6.jpg';
import sampleImg7 from '@src/assets/sample images/Rectangle 1-7.jpg';
import sampleImg8 from '@src/assets/sample images/Rectangle 1-8.jpg';
import sampleImg9 from '@src/assets/sample images/Rectangle 1-9.jpg';
import sampleImg10 from '@src/assets/sample images/Rectangle 1-10.jpg';
import sampleImg11 from '@src/assets/sample images/Rectangle 1-11.jpg';
const SAMPLE_IMAGES = [sampleImg0, sampleImg1, sampleImg2, sampleImg3, sampleImg4, sampleImg5, sampleImg6, sampleImg7, sampleImg8, sampleImg9, sampleImg10, sampleImg11];
import type { BagdeTypes } from '@src/components/Badge/types';
import { PieChart } from '@src/components/PieChart';
import { LineChartDS } from '@src/components/LineChart';
import { HBarChartDS } from '@src/components/HorizontalBarChart';
import { LegendContainer, LegendItem } from '@src/components/Legend/styles';
import SortDropdown from '@src/components/Sort';

/* ------------------------------------------------------------------ *
 * Well Detail
 * Single-well detail page — breadcrumb predecessor to WellComparison.
 * All sections from WellComparison adapted for a single well: no Pair
 * wrappers, single-series charts, single KPI grid, single-well AI summary.
 * ------------------------------------------------------------------ */

const d = darkTheme.colors;

// semantic roles only — all resolved through darkTheme, never from primitives
const t = {
  canvas: d.neutral.background.base,
  canvasInverted: d.neutral.background.baseInverted,
  surface: d.neutral.background.default,
  surface2: d.neutral.background.hover,
  surface3: d.neutral.background.active,
  border: d.neutral.background.transparent.weak,
  borderWeaker: d.neutral.background.transparent.weaker,
  borderStrong: d.neutral.background.transparent.default,
  ink: d.neutral.text.default,
  ink2: d.neutral.text.weak,
  ink3: d.neutral.text.weaker,
  ink4: d.neutral.text.weakest,
  teal: d.primary.background.strong,
  tealHi: d.primary.background.stronger,
  tealSoft: d.primary.background.transparent.weak,
  tealSoftHi: d.primary.background.transparent.default,
  panelTint: d.neutral.background.transparent.weaker,
  textOnBrand: d.neutral.text.static,
  borderWeakest: d.neutral.border.weakest,
  borderWeak: d.neutral.border.weak,
  borderDefault: d.neutral.border.default,
  borderStrongest: d.neutral.border.strong,
  // operational state semantics — system colors only
  stateTrip: d.system.warning.background.default,
  stateStable: d.system.success.background.default,
  stateAdjust: d.system.info.background.default,
  stateEvent: d.system.error.background.default,
};

const fmt = (n: number) => n.toLocaleString('en-US');

/* ============================= layout ============================= */

const Page = styled.div`
  min-height: 100vh;
  background: ${t.canvas};
  color: ${t.ink};
`;

const Shell = styled.div`
  width: 100%;
`;

/* ----------------------------- menu ------------------------------- */

const StickyTop = styled.div<{ $scrolled?: boolean }>`
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${t.canvas};
  box-shadow: ${p => p.$scrolled ? `0 ${spacing.sm} ${spacing.xl} ${spacing.sm} ${t.canvas}` : 'none'};
  transition: box-shadow 0.2s ease;
`;

const TopBar = styled.div`
  height: ${space['80px']};
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid ${t.borderWeakest};
  background: ${t.canvas};
`;

const TopBarLeft = styled.div`
  padding: 0 ${space['32px']};
  display: flex;
  align-items: center;
  flex: none;
`;

const TopBarMiddle = styled.div`
  flex: 1;
  min-width: 0;
  padding: 0 ${space['32px']};
  border-left: 1px solid ${t.borderWeakest};
  border-right: 1px solid ${t.borderWeakest};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopBarTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const TopBarRight = styled.div`
  padding: 0 ${space['32px']};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  flex: none;
`;

const TopBarActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;

const ChevronWrap = styled.span<{ $open?: boolean }>`
  display: inline-flex;
  color: ${p => p.$open ? d.primary.icon.default : d.neutral.icon.weaker};
  transition: color 0.15s ease;
  > span { color: inherit; }
`;

const WorkspaceChip = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover ${ChevronWrap} { color: ${d.primary.icon.default}; }
`;

const ChipUserBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  text-align: left;
`;

const ChipNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${space['8px']};
`;

/* ----------------------- workspace dropdown ----------------------- */

const WorkspaceMenuWrap = styled.div`
  position: relative;
`;

const WorkspaceDropdown = styled.div`
  position: absolute;
  top: calc(100% + ${spacing.xs});
  right: 0;
  width: ${space['288px']};
  padding: ${space['4px']} 0;
  background: ${t.surface};
  border: 1px solid ${t.borderWeakest};
  border-radius: ${radii.md};
  box-shadow: ${shadows.lg};
  z-index: 100;
  overflow: hidden;
`;

const DropdownSection = styled.div`
  padding: 0;
`;

const DropdownTabsWrap = styled.div`
  padding: ${spacing.xs} ${spacing.md};
`;

const DropdownMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  width: 100%;
  height: ${sizes.md};
  padding: 0 ${spacing.md};
  background: transparent;
  border: none;
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  line-height: ${lineHeights.m};
  font-weight: ${fontWeights.regular};
  color: ${t.ink2};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease-in-out, color 0.15s ease-in-out;

  svg path {
    fill: ${t.ink3};
  }

  &:hover {
    background: ${t.panelTint};
    color: ${t.ink};
    svg path { fill: ${t.ink2}; }
  }
`;

const DropdownMenuItemRight = styled.div`
  margin-left: auto;
`;

const DropdownSignOut = styled(DropdownMenuItem)`
  color: ${t.ink3};
`;

/* ----------------------- section kebab menu ----------------------- */

const SectionMenuWrap = styled.div`
  position: relative;
  display: inline-flex;
`;

const SectionMenuDropdown = styled.div`
  position: absolute;
  top: calc(100% + ${space['4px']});
  right: 0;
  width: ${space['176px']};
  padding: ${space['4px']} 0;
  background: ${t.surface};
  border: 1px solid ${t.borderWeakest};
  border-radius: ${radii.md};
  box-shadow: ${shadows.lg};
  z-index: 50;
  overflow: hidden;
`;

const SectionMenuDangerItem = styled(DropdownMenuItem)`
  color: ${t.stateEvent};
  svg path { fill: ${t.stateEvent}; }
  &:hover {
    color: ${t.stateEvent};
    svg path { fill: ${t.stateEvent}; }
  }
`;

/* ---------------------------- content ----------------------------- */

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xl};
  padding: 0 ${spacing.xl} ${spacing.xl};
`;

const Panel = styled.section`
  background: ${t.panelTint};
  border: 1px solid ${d.neutral.border.weaker};
  border-radius: ${radii.md};
  padding: ${spacing.md};
`;

const SectionHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.md};
  .title {
    display: flex;
    align-items: baseline;
    gap: ${spacing.xs};
  }
  .muted {
    color: ${t.ink4};
  }
`;

/* ----------------------- summary ----------------------- */

const CardBodyWrap = styled.div`
  b {
    font-weight: ${fontWeights.regular};
    color: ${t.ink};
  }
`;
const CardRow = styled.div`
  display: flex;
  gap: ${space['12px']};
  align-items: stretch;
  flex-wrap: wrap;
`;
const AICard = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1 0 0;
  min-width: ${space['224px']};
  display: flex;
  flex-direction: column;
  gap: ${space['16px']};
  padding: ${spacing.md};
  border: 1px solid ${d.neutral.border.weaker};
  border-radius: ${radii.md};
  background: ${d.neutral.background.transparent.weaker};
`;
const AICardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['8px']};
  min-width: 0;
`;
const IconChipOuter = styled.span`
  position: relative;
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  padding: ${space['4px']};
  border-radius: ${radii.sm};
  background: ${d.neutral.background.transparent.weaker};
  border: 1px solid ${t.borderWeak};
`;

const IconChip = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${space['8px']};
  border-radius: ${radii.xs};
  background: ${t.canvas};
`;

const InvertedIcon = styled(Icon)`
  path { fill: url(#ai-card-icon-grad); }
`;

const AICardTitle = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.m};
  font-weight: ${fontWeights.regular};
  color: ${d.primary.text.default};
`;

/* ------------------------ general details ------------------------- */

const InfoCard = styled.div`
  flex: 1 0 0;
  min-width: 0;
  padding: ${spacing.md};
  background: ${t.panelTint};
  border: 1px solid ${d.neutral.border.weaker};
  border-radius: ${radii.md};
`;
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.md};
  @media (min-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .k {
    color: ${t.ink4};
  }
  .v {
    color: ${t.ink};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cell {
    display: flex;
    flex-direction: column;
    gap: ${space['4px']};
  }
`;

/* --------------------------- offset well (tree) -------------------------- */

const WELL_CARD_H = 52; // px — must match rendered card height for SVG alignment
const WELL_CARD_GAP = 8; // px

const OffsetTreeWrap = styled.div`
  display: flex;
  align-items: stretch;
`;
const OffsetPadCol = styled.div`
  flex: none;
  width: auto;
  align-self: center;
`;
const OffsetPadChip = styled.button`
  display: inline-flex;
  flex-direction: column;
  gap: ${space['4px']};
  padding: ${spacing['2xs']};
  width: ${space['240px']};
  border: 1px solid ${t.borderStrong};
  border-radius: ${radii.md};
  background: transparent;
  cursor: default;
  text-align: left;
  svg path { fill: ${t.teal}; }
`;
const PadChipTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.xs};
  color: ${t.ink};
  font-size: ${fontSizes.s};
  font-weight: ${fontWeights.semibold};
  white-space: nowrap;
`;
const PadChipKpiRow = styled.div`
  display: flex;
  flex-direction: column;
  background: ${t.canvas};
  border-radius: ${radii.sm};
  overflow: hidden;
`;
const PadChipKpiItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.md};
  padding: ${spacing.xs};
  white-space: nowrap;
  & + & {
    border-top: 1px solid ${t.border};
  }
`;
const OffsetConnectorWrap = styled.div`
  flex: 1;
  min-width: 0;
  align-self: stretch;
`;
const OffsetWellsCol = styled.div`
  flex: none;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;
const OffsetWellCard = styled.div<{ $v: StageVariant }>`
  padding: ${spacing.sm};
  border-radius: ${radii.sm};
  border: 1px solid ${d.neutral.border.weaker};
  background: ${t.canvas};
  opacity: 1;
`;
const OffsetWellTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.sm};
  margin-bottom: ${space['6px']};
`;
const OffsetWellBottom = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;
const OffsetProgressWrap = styled.div<{ $success?: boolean }>`
  flex: 1;
  min-width: 0;
  ${p => p.$success && `div > div { background-color: ${t.stateStable}; }`}
`;
const OffsetWellPct = styled.span`
  flex: none;
  font-size: ${fontSizes.xs};
  font-variant-numeric: tabular-nums;
  color: ${t.ink3};
  min-width: ${space['32px']};
  text-align: right;
`;

/* --------------------------- correlation -------------------------- */

const ChartWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const ChartTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.md};
`;

const ChartTitle = styled.span`
  font-size: ${fontSizes.s};
  font-weight: ${fontWeights.semibold};
  color: ${t.ink};
  font-family: ${fontFamilies.body};
  flex: none;
`;

/* ------------------- trends — high confidence correlations -------- */

const HccPanelCard = styled(InfoCard)`
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const HccRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  min-height: 72px;
  padding: ${spacing.xs} ${spacing.sm};
  & + & {
    border-top: 1px solid ${d.neutral.border.weaker};
  }
`;

const HccChartCell = styled.div`
  flex: none;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HccDescCell = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${space['4px']};
  padding: ${spacing.xs} ${spacing.xs} ${spacing.xs} 0;
`;

const HccMetaCell = styled.div`
  flex: none;
  width: ${space['160px']};
  display: flex;
  flex-direction: column;
  gap: ${space['2px']};
  padding: ${spacing.xs} ${spacing.md};
`;

/* --------------------------- kpi summary -------------------------- */

const KpiSummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  padding: 0;
  @media (min-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const KpiInfoCard = styled(InfoCard)`
  padding: 0;
  overflow: hidden;
`;
const KpiSummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${spacing.lg};
  padding: ${spacing.md};
  background: transparent;
  border-right: 1px solid ${d.neutral.border.weaker};
  border-bottom: 1px solid ${d.neutral.border.weaker};

  /* 2-column rules (default) */
  &:nth-child(2n)                            { border-right: none; }
  &:last-child                               { border-right: 1px solid ${d.neutral.border.weaker}; border-bottom: none; }
  &:nth-last-child(-n+2):nth-child(2n+1)    { border-bottom: none; }

  /* 3-column rules */
  @media (min-width: 1800px) {
    &:nth-child(2n)                          { border-right: 1px solid ${d.neutral.border.weaker}; }
    &:nth-child(3n)                          { border-right: none; }
    &:nth-last-child(-n+2)                   { border-bottom: none; }
    &:last-child                             { border-bottom: none; }
  }
`;
const KpiSummaryTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const KpiSummaryLabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;
const KpiValueBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['4px']};
`;
const KpiValueRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${space['6px']};
`;
const KpiValueNum = styled.span`
  font-size: ${fontSizes['2xl']};
  font-weight: ${fontWeights.regular};
  color: ${t.ink};
  font-variant-numeric: tabular-nums;
  line-height: ${lineHeights['2xl']};
`;
const KpiCardBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${spacing.sm};
`;

const KpiDelta = styled.span`
  display: flex;
  align-items: center;
  gap: ${space['4px']};
  font-size: ${fontSizes.xs};
`;
const KpiDeltaUp = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${space['4px']};
  color: ${t.stateStable};
  svg path { fill: ${t.stateStable}; }
`;
const KpiDeltaLabel = styled.span`
  color: ${t.ink3};
`;

/* ------------------------- samples by depth ----------------------- */

const SampleWrap = styled.div<{ $fade: boolean; $fadeTop: boolean }>`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${space['64px']};
    background: linear-gradient(to top, transparent, ${t.surface});
    pointer-events: none;
    z-index: 1;
    opacity: ${p => p.$fadeTop ? 1 : 0};
    transition: opacity 0.2s ease;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${space['64px']};
    background: linear-gradient(to bottom, transparent, ${t.surface});
    pointer-events: none;
    z-index: 1;
    opacity: ${p => p.$fade ? 1 : 0};
    transition: opacity 0.2s ease;
  }
`;

const SampleScrollWrap = styled.div`
  max-height: 560px;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;
const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${space['16px']};
  padding: ${space['16px']};
`;
const Tile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: ${space['12px']};
  border-radius: ${radii.sm};
  height: 100%;
  cursor: pointer;
  &:hover > *:first-child {
    border-color: ${t.tealHi};
  }
  &:hover img {
    transform: scale(1.09);
  }
`;
const TileImgWrap = styled.div`
  flex: none;
  width: ${space['96px']};
  align-self: stretch;
  border-radius: ${radii.sm};
  border: 1px solid transparent;
  overflow: hidden;
  transition: border-color 0.15s ease;
`;
const TileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.2s ease;
`;
const TileBody = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${space['8px']};
`;

const TileDepthRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${space['4px']};
`;
const TileDepthValue = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.m};
  font-weight: ${fontWeights.semibold};
  color: ${t.ink};
  font-variant-numeric: tabular-nums;
`;
const TileSmall = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${t.ink4};
`;
const TileTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['4px']};
`;
const TileDateRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${space['6px']};
  svg path { fill: ${t.ink4}; }
`;
const TileIdRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${space['4px']};
  svg path { fill: ${t.ink2}; }
`;
const TileIdLabel = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  font-weight: ${fontWeights.regular};
  color: ${t.ink2};
`;


const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.md} ${spacing.xl};
  border-top: 1px solid ${t.border};
  color: ${t.ink4};
  font-size: ${fontSizes.xs};
`;

const FooterLink = styled.a`
  font-size: ${fontSizes.xs};
  color: ${darkTheme.colors.components.link.text.default};
  text-decoration: none;
  &:hover { color: ${darkTheme.colors.components.link.text.hover}; }
  &:active { color: ${darkTheme.colors.components.link.text.active}; }
`;

const AiFab = styled.button<{ $open?: boolean }>`
  width: ${space['48px']};
  height: ${space['48px']};
  border-radius: ${radii.xl} ${radii.xl} ${radii.sm} ${radii.xl};
  border: none;
  background: linear-gradient(135deg, ${d.neutral.background.baseInverted} 0%, ${t.teal} 55%, ${t.canvas} 100%);
  padding: ${space['4px']};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 -10px 28px 0 ${t.tealSoftHi}, 0 4px 16px 0 rgba(0, 0, 0, 0.36);
  height: ${p => p.$open ? '0' : space['48px']};
  overflow: hidden;
  opacity: ${p => p.$open ? 0 : 1};
  pointer-events: ${p => p.$open ? 'none' : 'all'};
  transition: opacity 0.15s ease, height 0.2s ease, box-shadow 0.18s ease-in-out;
  &:hover {
    box-shadow: 0 -14px 36px 0 ${t.tealSoftHi}, 0 6px 20px 0 rgba(0, 0, 0, 0.44);
  }
`;

const AiFabMiddle = styled.span<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: ${t.canvas};
  border: 1.5px solid ${p => p.$open ? t.canvas : d.neutral.background.transparent.backdrop};
  position: relative;
  overflow: hidden;
  transition: border-color 0.15s ease;
  > svg { position: relative; z-index: 1; }
`;


/* ============================== data ============================== */

const WELL_A = 'Beartooth 54-1-34 unit 23H';

type AICardData = { icon: IconNameType; title: string; body: JSX.Element; active?: boolean };
type IconNameType = `${IconName}`;

const SUMMARY: AICardData[] = [
  {
    icon: IconName.GRAPH_UP_ARROW,
    title: 'ROP patterns',
    active: true,
    body: (
      <>
        <b>Beartooth 54-1-34</b> maintains consistently strong ROP across 2,000–8,000 ft, peaking in the Redfork formation interval.
      </>
    ),
  },
  {
    icon: IconName.BAR_CHART_LINE,
    title: 'XRF ratios',
    body: (
      <>
        Elevated Zn/Mn and reduced K/Ti ratios are consistent with the target lithology in <b>BEARTOOTH 54-1-34 UNIT 23H</b>.
      </>
    ),
  },
  {
    icon: IconName.TOOLS,
    title: 'Bit wear indices',
    body: (
      <>
        Bit wear is within expected range for the Redfork; no abnormal wear detected below 7,000 ft.
      </>
    ),
  },
  {
    icon: IconName.DIAGRAM_3,
    title: 'RPM vs VS correlation',
    body: (
      <>
        <b>BEARTOOTH 54-1-34 UNIT 23H</b> shows a strong positive RPM-to-vertical-section correlation across all analyzed depths.
      </>
    ),
  },
  {
    icon: IconName.SPEEDOMETER_2,
    title: 'String weight variability',
    body: (
      <>
        Moderate string weight fluctuations beyond 7,000 ft align with the expected lateral transition zone behavior.
      </>
    ),
  },
];

type InfoRow = { k: string; v: string };
const GENERAL_A: InfoRow[] = [
  { k: 'Benchmark ID', v: '281' },
  { k: 'Operator', v: 'Arnold Oil Properties' },
  { k: 'API number', v: '35-039-00004' },
  { k: 'Target formation', v: 'Redfork' },
  { k: 'Location', v: '35.5799400, -98.8795200' },
  { k: 'County/state', v: 'Custer, OK' },
];

type StageVariant = 'active' | 'completed' | 'drilling' | 'planned';
type StageRow = { name: string; status: BagdeTypes; statusLabel: string; pct: number; bar: 'accent' | 'default'; icon: IconNameType; variant: StageVariant };
const OFFSET_STAGES: StageRow[] = [
  { name: 'Well 1', status: 'info', statusLabel: 'Active', pct: 5, bar: 'accent', icon: IconName.POWER, variant: 'active' },
  { name: 'Well 2', status: 'success', statusLabel: 'Completed', pct: 100, bar: 'default', icon: IconName.CHECK_SIMPLE, variant: 'completed' },
  { name: 'Well 3', status: 'info', statusLabel: 'Drilling', pct: 34, bar: 'accent', icon: IconName.ARROW_CLOCKWISE, variant: 'drilling' },
  { name: 'Offset A', status: 'default', statusLabel: 'Planned', pct: 0, bar: 'default', icon: IconName.CLOCK, variant: 'planned' },
];

type KpiSummary = { label: string; unit: string; value: number; delta: number; icon: IconNameType };
const KPI_SUMMARY: KpiSummary[] = [
  { label: 'ROP', unit: 'ft/hr', value: 38.78, delta: 5.4, icon: IconName.SPEEDOMETER_2 },
  { label: 'WOB', unit: 'klbs', value: 24.23, delta: 5.4, icon: IconName.ARROW_DOWN_CIRCLE },
  { label: 'RPM', unit: 'rpm', value: 312.56, delta: 5.4, icon: IconName.ARROW_CLOCKWISE },
  { label: 'String Wt', unit: 'klbs', value: 347.81, delta: 5.4, icon: IconName.DIAGRAM_3 },
  { label: 'SPP', unit: 'psi', value: 6008.21, delta: 5.4, icon: IconName.SPEEDOMETER },
  { label: 'Diff Press', unit: 'psi', value: 90.69, delta: 5.4, icon: IconName.BAR_CHART_LINE },
  { label: 'Torque', unit: 'kft-lb', value: 38.78, delta: 5.4, icon: IconName.WRENCH_ADJUSTABLE },
  { label: 'Flow Rate', unit: 'gpm', value: 24.23, delta: 5.4, icon: IconName.DROPLET },
  { label: 'MSE', unit: 'ksi', value: 312.56, delta: 5.4, icon: IconName.LIGHTNING },
];

// ---- correlation chart data (deterministic, generated once) ----
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const N = 500;
const DEPTHS = Array.from({ length: N }, (_, i) => (i * 10000) / (N - 1));

// Well A: starts high, drops through a hard formation mid-section, recovers late
const SERIES_A = DEPTHS.map((_, i) => {
  const tn = i / (N - 1) * 10000 / 10000;
  const trend = 3.4 - tn * 1.2 + Math.pow(tn - 0.55, 2) * 2.8 - Math.pow(tn - 0.8, 2) * 1.4;
  const slow = Math.sin(i / 18) * 0.22 + Math.sin(i / 11 + 0.7) * 0.14;
  const mid = Math.sin(i / 4.2 + 1.1) * 0.09 + Math.sin(i / 2.3) * 0.06;
  const noise = Math.sin(i / 0.9 + 0.3) * 0.05 + Math.sin(i / 0.45) * 0.03;
  return clamp(trend + slow + mid + noise, 0.4, 4.6);
});

const CHART_DATA = DEPTHS.map((depth, i) => ({
  depth: Math.round(depth),
  well: parseFloat(SERIES_A[i].toFixed(2)),
}));

const N_AR = 400;
const AR_DEPTHS_RAW = Array.from({ length: N_AR }, (_, i) => 10000 + (i * 14000) / (N_AR - 1));
const AR_SERIES_A = AR_DEPTHS_RAW.map((_, i) => {
  const tn = i / (N_AR - 1);
  const trend = 12 + tn * 53;
  const slow = Math.sin(i / 25 + 0.5) * 4 + Math.sin(i / 14 + 1.3) * 2.5;
  const mid  = Math.sin(i / 6 + 0.9) * 1.5;
  return clamp(trend + slow + mid, 5, 95);
});
const AR_CHART_DATA = AR_DEPTHS_RAW.map((depth, i) => ({
  depth: Math.round(depth),
  well: parseFloat(AR_SERIES_A[i].toFixed(2)),
}));

const CORR_TABS = [
  { id: 'rop', label: 'ROP vs. VS' },
  { id: 'bitwear', label: 'Bit_Wear_Metric vs. VS' },
  { id: 'bitrpm', label: 'BitRPM vs. VS' },
  { id: 'stringwt', label: 'StringWT vs. VS' },
];

type HccCorr = {
  kpi: string;
  desc: string;
  pct: number;
  pctPrefix: string;
  displayPct?: string;
  depth: string;
  depthUnit: string;
  confidence: number | string;
  confidenceUnit: string;
  confidenceLabel?: string;
};

const HCC_ROWS: HccCorr[] = [
  {
    kpi: 'ROP',
    desc: 'Decreases shortly after Mn concentration spikes',
    pct: 18,
    pctPrefix: '~',
    depth: '4,320–4,610',
    depthUnit: 'ft',
    confidence: 92,
    confidenceUnit: '%',
  },
  {
    kpi: 'ROP',
    desc: 'Accelerates when torque drops below threshold',
    pct: 31,
    pctPrefix: '>',
    depth: '5,100–5,850',
    depthUnit: 'ft',
    confidence: 'Curve + Lateral',
    confidenceUnit: '',
    confidenceLabel: 'Affects',
  },
  {
    kpi: 'Fe/K ratio',
    desc: 'Strongly predicts formation transition',
    pct: 11,
    displayPct: '0.11',
    pctPrefix: '~',
    depth: '210',
    depthUnit: 'ft ahead',
    confidence: 87,
    confidenceUnit: '%',
  },
];

type StateKey = 'trip' | 'stable' | 'adjust' | 'event';
const BAND_A: [StateKey, number][] = [
  ['trip', 5], ['stable', 12], ['trip', 3], ['stable', 9], ['adjust', 6], ['stable', 11],
  ['trip', 4], ['event', 5], ['stable', 8], ['trip', 3], ['adjust', 7], ['stable', 13],
  ['event', 4], ['stable', 10],
];
const toDepthBands = (bands: [StateKey, number][]) => {
  let cursor = 0;
  return bands.map(([state, pct]) => {
    const start = Math.round(cursor);
    cursor += (pct / 100) * 10000;
    return { state, start, end: Math.round(cursor) };
  });
};
const STATE_META: Record<StateKey, { label: string; c: string }> = {
  trip:   { label: 'Tripping / transitional',              c: d.neutral.icon.weakest             },
  stable: { label: 'Rotary drilling (stable)',              c: d.dataViz.qualitative_4[1]         },
  adjust: { label: 'Rotary drilling (adjusted parameters)', c: d.dataViz.qualitative_12[8]        },
  event:  { label: 'Event / anomaly',                      c: d.dataViz.qualitative_2_1[1]       },
};
const STATE_COLORS: Record<string, string> = {
  trip:   d.neutral.icon.weakest,
  stable: d.dataViz.qualitative_4[1],
  adjust: d.dataViz.qualitative_12[8],
  event:  d.dataViz.qualitative_2_1[1],
};
const VERTICAL_SECTION_ROWS = [
  { label: WELL_A, bands: toDepthBands(BAND_A) },
];

const SECTION_IDS = ['summary', 'general', 'offset', 'trends', 'kpi', 'correlation', 'samples', 'ar'] as const;
type SectionId = typeof SECTION_IDS[number];

const SECTION_META: Record<SectionId, { title: string; desc: string }> = {
  summary:     { title: 'Well summary',          desc: 'AI-generated well highlights' },
  general:     { title: 'General details',        desc: 'Well metadata and operator info' },
  offset:      { title: 'Offset well',            desc: 'Pad order and well stages' },
  trends:      { title: 'Trends',                 desc: 'High confidence correlations' },
  kpi:         { title: 'KPI summary',            desc: 'Rate of penetration, WOB, RPM and more' },
  correlation: { title: 'Drilling performance',   desc: 'Correlation view charts' },
  samples:     { title: 'Samples by depth',       desc: 'Core sample gallery by depth' },
  ar:          { title: 'Particle shape analyses', desc: 'Amplitude-to-reflectance ratio by depth' },
};

const SAMPLE_SORT_OPTIONS = [
  { label: 'Depth', value: 'depth' },
  { label: 'Quality', value: 'quality' },
  { label: 'Date', value: 'date' },
];

const DEPTH_RANGE_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: '0–3,000 ft', value: '0-3000' },
  { label: '3,000–6,000 ft', value: '3000-6000' },
  { label: '6,000–10,000 ft', value: '6000-10000' },
];

const TIME_WINDOW_OPTIONS = [
  { label: 'This week', value: 'this-week' },
  { label: 'Last week', value: 'last-week' },
  { label: 'This month', value: 'this-month' },
  { label: 'Last month', value: 'last-month' },
];

/* ============================ sub-views =========================== */

function HccPanelRows({ rows }: { rows: HccCorr[] }) {
  return (
    <HccPanelCard>
      {rows.map((row, i) => (
        <HccRow key={i}>
          {/* ring chart */}
          <HccChartCell>
            <PieChart
              data={[
                { label: 'value', value: row.pct },
                { label: 'remaining', value: 100 - row.pct },
              ]}
              colors={[t.teal, t.surface3]}
              width={72}
              square
              innerRatio={0.85}
              centerLabel={`${row.pctPrefix}${row.displayPct ?? row.pct}%`}
              centerLabelFontSize={fontSizes.xs}
            />
          </HccChartCell>

          {/* description column */}
          <HccDescCell>
            <Typography type="body" size="md" weight="regular" color="weaker">
              {row.kpi}
            </Typography>
            <Typography type="body" size="md">
              {row.desc}
            </Typography>
          </HccDescCell>

          {/* depth column */}
          <HccMetaCell>
            <Typography type="body" size="md" weight="regular" color="weaker">
              Depth
            </Typography>
            <span style={{ display: 'flex', alignItems: 'baseline', gap: space['4px'] }}>
              <span style={{
                fontFamily: fontFamilies.body,
                fontSize: fontSizes.s,
                fontWeight: fontWeights.regular,
                color: t.ink,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {row.depth}
              </span>
              {row.depthUnit && (
                <span style={{
                  fontFamily: fontFamilies.body,
                  fontSize: fontSizes.xs,
                  color: t.ink3,
                }}>
                  {row.depthUnit}
                </span>
              )}
            </span>
          </HccMetaCell>

          {/* confidence column */}
          <HccMetaCell>
            <Typography type="body" size="md" weight="regular" color="weaker">
              {row.confidenceLabel ?? 'Confidence'}
            </Typography>
            <span style={{ display: 'flex', alignItems: 'baseline', gap: space['4px'], flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: fontFamilies.body,
                fontSize: fontSizes.s,
                fontWeight: fontWeights.regular,
                color: t.ink,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {row.confidence}
              </span>
              {row.confidenceUnit && (
                <span style={{
                  fontFamily: fontFamilies.body,
                  fontSize: fontSizes.xs,
                  color: t.ink3,
                }}>
                  {row.confidenceUnit}
                </span>
              )}
            </span>
          </HccMetaCell>
        </HccRow>
      ))}
    </HccPanelCard>
  );
}

function SectionMenu({ onRemove }: { onRemove?: () => void }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <SectionMenuWrap ref={wrapRef}>
      <Button
        label="More options"
        variant="secondary-gray"
        size="sm"
        iconOnly
        rightIcon={<Icon iconName={IconName.THREE_DOTS} width={16} height={16} />}
        onClick={() => setOpen(o => !o)}
      />
      {open && (
        <SectionMenuDropdown>
          <DropdownMenuItem onClick={() => setOpen(false)}>
            <Icon iconName={IconName.STARS} width={16} height={16} />
            Ask a question
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(false)}>
            <Icon iconName={IconName.BOX_ARROW_UP} width={16} height={16} />
            Export
          </DropdownMenuItem>
          <Divider />
          <SectionMenuDangerItem onClick={() => { onRemove?.(); setOpen(false); }}>
            <Icon iconName={IconName.TRASH} width={16} height={16} />
            Remove
          </SectionMenuDangerItem>
        </SectionMenuDropdown>
      )}
    </SectionMenuWrap>
  );
}

const SectionFlowBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: ${space['80px']};
  flex: none;
`;

const SectionContentWrap = styled.div<{ $dim?: boolean }>`
  opacity: ${p => p.$dim ? 0.45 : 1};
  pointer-events: ${p => p.$dim ? 'none' : 'all'};
  transition: opacity 0.3s ease;
`;

function AccordionSection({
  title,
  hint,
  actions,
  children,
  dimContent,
}: {
  title: string;
  hint?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  dimContent?: boolean;
}) {
  return (
    <section>
      <SectionHead>
        <div className="title">
          <Typography type="heading" size="lg" weight="semibold">
            {title}
          </Typography>
          {hint && (
            <Typography type="heading" size="lg" weight="semibold" color="weaker">
              {hint}
            </Typography>
          )}
        </div>
        {actions}
      </SectionHead>
      <SectionContentWrap $dim={dimContent}>
        {children}
      </SectionContentWrap>
    </section>
  );
}

function InfoColumn({ rows }: { rows: InfoRow[] }) {
  return (
    <InfoCard>
      <InfoGrid>
        {rows.map((r) => (
          <div className="cell" key={r.k}>
            <Typography type="body" size="md" color="weaker">
              <span className="k">{r.k}</span>
            </Typography>
            <Typography type="body" size="md" as="div">
              <span className="v">{r.v}</span>
            </Typography>
          </div>
        ))}
        <div className="cell">
          <Typography type="body" size="md" color="weaker">
            <span className="k">Status</span>
          </Typography>
          <Typography type="body" size="md" variant="primary">
            Active
          </Typography>
        </div>
        <div className="cell">
          <Typography type="body" size="md" color="weaker">
            <span className="k">Created at</span>
          </Typography>
          <Typography type="body" size="md" as="div">
            <span className="v">12/08/2025 - 16:49</span>
          </Typography>
        </div>
      </InfoGrid>
    </InfoCard>
  );
}

function OffsetConnectorSVG({ totalH, ys, W, padY }: { totalH: number; ys: number[]; W: number; padY: number }) {
  return (
    <svg width={W} height={totalH} style={{ display: 'block', width: '100%', height: totalH }}>
      <defs>
        {ys.map((_, i) => (
          <linearGradient key={i} id={`cg-${i}`} x1="0" y1="0" x2={W} y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={t.borderWeakest} />
            <stop offset="50%" stopColor={t.borderWeak} />
            <stop offset="100%" stopColor={t.borderWeakest} />
          </linearGradient>
        ))}
      </defs>
      {ys.map((y, i) => {
        const pd = `M 0 ${padY} C ${W * 0.5} ${padY}, ${W * 0.5} ${y}, ${W} ${y}`;
        return (
          <g key={i}>
            <path d={pd} fill="none" stroke={`url(#cg-${i})`} strokeWidth={1} />
            <circle cx={W} cy={y} r={4} fill={t.canvas} stroke={t.borderWeak} strokeWidth={1} />
          </g>
        );
      })}
      {/* origin dot rendered once so it matches terminal dots visually */}
      <circle cx={0} cy={padY} r={4} fill={t.canvas} stroke={t.borderWeak} strokeWidth={1} />
    </svg>
  );
}

function OffsetColumn() {
  const colRef = useRef<HTMLDivElement>(null);
  const connWrapRef = useRef<HTMLDivElement>(null);
  const padRef = useRef<HTMLButtonElement>(null);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [conn, setConn] = useState<{ h: number; ys: number[]; W: number; padY: number }>({
    h: OFFSET_STAGES.length * WELL_CARD_H + (OFFSET_STAGES.length - 1) * WELL_CARD_GAP,
    ys: OFFSET_STAGES.map((_, i) => i * (WELL_CARD_H + WELL_CARD_GAP) + 18),
    W: 60,
    padY: 18,
  });

  useLayoutEffect(() => {
    const measure = () => {
      const col = colRef.current;
      const wrap = connWrapRef.current;
      if (!col || !wrap) return;
      const wrapRect = wrap.getBoundingClientRect();
      const ys = titleRefs.current.map(el => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        return r.top - wrapRect.top + r.height / 2;
      });
      const padEl = padRef.current;
      let padY = ys[0] ?? 0;
      if (padEl) {
        const pr = padEl.getBoundingClientRect();
        padY = pr.top - wrapRect.top + pr.height / 2;
      }
      setConn({ h: wrapRect.height, ys, W: wrapRect.width, padY });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (colRef.current) ro.observe(colRef.current);
    if (connWrapRef.current) ro.observe(connWrapRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <InfoCard>
      <OffsetTreeWrap>
        <OffsetPadCol>
          <OffsetPadChip ref={padRef}>
            <PadChipTitle>
              <Icon iconName={IconName.GRID_3_X_3} width={14} height={14} />
              PAD: "Wolfcamp B"
            </PadChipTitle>
            <PadChipKpiRow>
              <PadChipKpiItem>
                <Typography type="body" size="md" color="weaker">Spacing</Typography>
                <Typography type="body" size="md">325 ft</Typography>
              </PadChipKpiItem>
              <PadChipKpiItem>
                <Typography type="body" size="md" color="weaker">Formation depth</Typography>
                <Typography type="body" size="md">{fmt(9350)} ft</Typography>
              </PadChipKpiItem>
              <PadChipKpiItem>
                <Typography type="body" size="md" color="weaker">Current stage</Typography>
                <Typography type="body" size="md">Curve</Typography>
              </PadChipKpiItem>
            </PadChipKpiRow>
          </OffsetPadChip>
        </OffsetPadCol>
        <OffsetConnectorWrap ref={connWrapRef}>
          <OffsetConnectorSVG totalH={conn.h} ys={conn.ys} W={conn.W} padY={conn.padY} />
        </OffsetConnectorWrap>
        <OffsetWellsCol ref={colRef}>
          {OFFSET_STAGES.map((s, i) => (
            <OffsetWellCard key={s.name} $v={s.variant} ref={(el) => { titleRefs.current[i] = el; }}>
              <OffsetWellTop>
                <Typography type="body" size="md" weight="semibold">{s.name}</Typography>
                <Badge
                  label={s.statusLabel}
                  type={s.status}
                  background={s.variant === 'drilling' ? 'fill' : 'muted'}
                  size="sm"
                  icon={<Icon iconName={s.icon} width={12} height={12} />}
                />
              </OffsetWellTop>
              <OffsetWellBottom>
                <OffsetProgressWrap $success={s.status === 'success'}>
                  <ProgressBar progress={s.pct} type={s.bar} size="sm" />
                </OffsetProgressWrap>
                <OffsetWellPct>{s.pct}%</OffsetWellPct>
              </OffsetWellBottom>
            </OffsetWellCard>
          ))}
        </OffsetWellsCol>
      </OffsetTreeWrap>
    </InfoCard>
  );
}

function SingleKpiCard({ kpi }: { kpi: KpiSummary }) {
  return (
    <KpiSummaryCard>
      <KpiSummaryTop>
        <KpiSummaryLabelRow>
          <Icon iconName={kpi.icon as IconName} width={14} height={14} />
          <Typography type="body" size="md" color="weaker">{kpi.label}</Typography>
        </KpiSummaryLabelRow>
      </KpiSummaryTop>
      <KpiCardBottom>
        <KpiValueBlock>
          <KpiValueRow>
            <KpiValueNum>{kpi.value.toLocaleString('en-US')}</KpiValueNum>
            <span style={{ fontFamily: fontFamilies.body, fontSize: fontSizes.s, color: t.ink4 }}>
              {kpi.unit}
            </span>
          </KpiValueRow>
          <KpiDelta>
            <KpiDeltaUp>
              <Icon iconName={IconName.CARET_UP_FILL} width={14} height={14} />
              {kpi.delta}%
            </KpiDeltaUp>
            <KpiDeltaLabel>vs prev mo</KpiDeltaLabel>
          </KpiDelta>
        </KpiValueBlock>
      </KpiCardBottom>
    </KpiSummaryCard>
  );
}

function KpiSummarySection() {
  return (
    <KpiInfoCard>
      <KpiSummaryGrid>
        {KPI_SUMMARY.map((kpi) => (
          <SingleKpiCard key={kpi.label} kpi={kpi} />
        ))}
      </KpiSummaryGrid>
    </KpiInfoCard>
  );
}

function CorrelationChart({ flowAction, dimContent, onRemove }: { flowAction?: React.ReactNode; dimContent?: boolean; onRemove?: () => void }) {
  const [tab, setTab] = useState('rop');
  return (
    <section>
      <SectionHead>
        <div className="title">
          <Typography type="heading" size="lg" weight="semibold">
            Drilling performance
          </Typography>
          <Typography type="heading" size="lg" weight="semibold" color="weaker">
            - Correlation view
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
          {flowAction ?? (
            <>
              <Tabs tabs={CORR_TABS} activeTab={tab} onTabChange={setTab} variant="pills" size="sm" />
              <SectionMenu onRemove={onRemove} />
            </>
          )}
        </div>
      </SectionHead>
      <SectionContentWrap $dim={dimContent}>
        <Panel>
          <ChartWrap>
            <ChartTitleRow>
              <ChartTitle>Rate of penetration</ChartTitle>
            </ChartTitleRow>

            <LineChartDS
              data={CHART_DATA}
              xKey="depth"
              yKeys={['well']}
              colors={[t.teal]}
              height={300}
              yLabel="ROP (ft/h)"
              xLabel="Depth (ft)"
              xTickFormatter={(v) => v === 0 ? '0' : `${v / 1000}K`}
            />

            <ChartWrap>
              <ChartTitleRow>
                <ChartTitle>Vertical section</ChartTitle>
                <LegendContainer $direction="horizontal" $height="auto" $width="auto">
                  {(Object.keys(STATE_META) as StateKey[]).map((k) => (
                    <LegendItem key={k} $color={STATE_META[k].c}>
                      {STATE_META[k].label}
                    </LegendItem>
                  ))}
                </LegendContainer>
              </ChartTitleRow>
              <HBarChartDS
                rows={VERTICAL_SECTION_ROWS}
                domain={[0, 10000]}
                colors={STATE_COLORS}
                height={96}
                xTickFormatter={(v) => v === 0 ? '0' : `${v / 1000}K`}
              />
            </ChartWrap>
          </ChartWrap>
        </Panel>
      </SectionContentWrap>
    </section>
  );
}

const SAMPLE_META = [
  { id: '#84439', date: 'Dec 11, 11:17 AM', count: 246 },
  { id: '#84212', date: 'Dec 11, 2:43 PM', count: 183 },
  { id: '#84801', date: 'Dec 12, 9:05 AM', count: 312 },
  { id: '#83975', date: 'Dec 12, 3:22 PM', count: 195 },
  { id: '#85124', date: 'Dec 13, 8:31 AM', count: 278 },
  { id: '#84567', date: 'Dec 13, 1:15 PM', count: 221 },
  { id: '#85389', date: 'Dec 14, 10:48 AM', count: 347 },
  { id: '#84023', date: 'Dec 14, 4:07 PM', count: 189 },
  { id: '#85678', date: 'Dec 15, 7:55 AM', count: 263 },
  { id: '#84891', date: 'Dec 15, 12:30 PM', count: 308 },
  { id: '#86012', date: 'Dec 16, 8:14 AM', count: 291 },
  { id: '#85743', date: 'Dec 16, 1:40 PM', count: 174 },
  { id: '#86234', date: 'Dec 17, 9:22 AM', count: 335 },
  { id: '#85901', date: 'Dec 17, 3:55 PM', count: 208 },
  { id: '#86478', date: 'Dec 18, 7:48 AM', count: 252 },
  { id: '#86103', date: 'Dec 18, 12:11 PM', count: 319 },
  { id: '#86712', date: 'Dec 19, 10:03 AM', count: 187 },
  { id: '#86345', date: 'Dec 19, 2:37 PM', count: 274 },
  { id: '#86956', date: 'Dec 20, 8:59 AM', count: 341 },
  { id: '#86589', date: 'Dec 20, 1:25 PM', count: 196 },
];

function SampleColumn({ seedOffset, count = 10 }: { seedOffset: number; count?: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState(true);
  const [fadeTop, setFadeTop] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setFade(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
    setFadeTop(el.scrollTop > 0);
  };

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    setFade(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  }, [count]);

  const depths = Array.from({ length: count }, (_, i) => 2000 + i * 600);
  return (
    <SampleWrap $fade={fade} $fadeTop={fadeTop}>
      <SampleScrollWrap ref={scrollRef} onScroll={checkScroll}>
        <TileGrid>
          {depths.map((dp, i) => {
            const meta = SAMPLE_META[i % SAMPLE_META.length];
            return (
              <Tile key={dp}>
                <TileImgWrap>
                  <TileImg src={SAMPLE_IMAGES[(seedOffset + i) % 12] as unknown as string} alt="" />
                </TileImgWrap>
                <TileBody>
                  <TileTitleGroup>
                    <TileDepthRow>
                      <TileDepthValue>{fmt(dp)} ft</TileDepthValue>
                    </TileDepthRow>
                    <TileIdRow>
                      <Icon iconName={IconName.UPC} width={20} height={20} />
                      <TileIdLabel>{meta.id.replace('#', '')}</TileIdLabel>
                    </TileIdRow>
                  </TileTitleGroup>
                  <TileDateRow>
                    <TileSmall>{meta.date}</TileSmall>
                    <TileSmall>/</TileSmall>
                    <TileSmall>#{meta.count}</TileSmall>
                  </TileDateRow>
                </TileBody>
              </Tile>
            );
          })}
        </TileGrid>
      </SampleScrollWrap>
    </SampleWrap>
  );
}

/* ============================== view ============================== */

const AiFabWrap = styled.div`
  position: fixed;
  bottom: ${spacing.md};
  right: ${spacing.md};
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: ${radii.lg};
  transition: filter 0.2s ease;
  &:hover {
    filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.48));
  }
`;

const AiPanel = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${space['6px']};
  width: ${space['320px']};
  max-height: ${p => p.$open ? space['384px'] : '0'};
  overflow: hidden;
  opacity: ${p => p.$open ? 1 : 0};
  pointer-events: ${p => p.$open ? 'all' : 'none'};
  transition: max-height 0.25s ease, opacity 0.2s ease;
`;

const AiChip = styled.button`
  display: flex;
  align-items: center;
  height: ${sizes.sm};
  padding: 0 ${spacing.xs};
  background: ${t.surface};
  border: 1px solid ${t.border};
  border-radius: ${radii.md};
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  font-weight: ${fontWeights.regular};
  color: ${t.ink2};
  cursor: pointer;
  white-space: nowrap;
  box-shadow: ${shadows.xl};
  transition: border-color 0.15s ease, color 0.15s ease;
  &:hover { border-color: ${t.teal}; color: ${t.ink}; }
`;

const beamSpin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const AiInputBorder = styled.div`
  position: relative;
  align-self: stretch;
  border-radius: ${radii.md};
  box-shadow: ${shadows.xl};
  margin-top: ${spacing.xs};
`;

const AiAnimRing = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  border-radius: ${radii.md};
  padding: 1px;
  overflow: hidden;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  &::before {
    content: '';
    position: absolute;
    inset: -150%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      ${t.teal} 50deg,
      transparent 90deg,
      transparent 360deg
    );
    animation: ${beamSpin} 6s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    inset: -150%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      ${d.transparent.white['72%']} 50deg,
      transparent 90deg,
      transparent 360deg
    );
    animation: ${beamSpin} 6s linear infinite;
    animation-delay: -3s;
  }
`;

const AiInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${space['4px']};
  padding: ${space['4px']};
  background: ${t.surface};
  border: 1px solid ${t.borderWeaker};
  border-radius: ${radii.md};
`;

const AiIconBtn = styled.button`
  flex: none;
  width: ${sizes.md};
  height: ${sizes.md};
  padding: 0;
  border: none;
  background: transparent;
  border-radius: ${radii.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg path { fill: ${t.ink3}; }
  &:hover { background: ${t.panelTint}; svg path { fill: ${t.ink2}; } }
`;

const AiInputEl = styled.input`
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  color: ${t.ink};
  &::placeholder { color: ${t.ink4}; }
`;

const AiSendBtn = styled.button`
  flex: none;
  width: ${sizes.md};
  height: ${sizes.md};
  padding: 0;
  border: none;
  border-radius: ${radii.sm};
  background: linear-gradient(135deg, ${t.teal} 0%, ${t.tealHi} 100%);
  opacity: 0.4;
  cursor: not-allowed;
  display: flex;
  align-items: center;
  justify-content: center;
  svg path { fill: ${t.textOnBrand}; }
`;


/* ========================= floating add panel ========================== */

const FloatingAddBar = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: ${space['16px']};
  left: 50%;
  transform: translateX(-50%) translateY(${p => p.$visible ? '0' : '12px'});
  z-index: 150;
  display: flex;
  align-items: center;
  gap: 0;
  padding: ${space['4px']};
  background: ${t.canvas};
  border: 1px solid ${t.borderWeaker};
  border-radius: 12px;
  box-shadow: ${shadows.lg};
  opacity: ${p => p.$visible ? 1 : 0};
  pointer-events: ${p => p.$visible ? 'all' : 'none'};
  transition: opacity 0.2s ease, transform 0.25s ease;
`;

const FloatingAiIconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
`;

const FloatingInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${space['8px']};
  padding: 0 ${space['8px']};
`;

const FloatingBarInput = styled.input`
  width: 240px;
  height: ${sizes.md};
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  color: ${t.ink};
  &::placeholder { color: ${t.ink4}; }
`;

const FloatingBarDivider = styled.div`
  width: 1px;
  align-self: stretch;
  margin-top: -${space['4px']};
  margin-bottom: -${space['4px']};
  background: ${t.border};
  flex: none;
  margin-left: ${space['4px']};
  margin-right: ${space['4px']};
`;

/* ==================== drag-and-drop section wrappers ==================== */

const SectionDragHandle = styled.div`
  position: absolute;
  top: 0; left: -${spacing.lg};
  display: flex; align-items: center; justify-content: center;
  width: ${space['20px']}; height: ${sizes.sm};
  cursor: grab;
  pointer-events: all;
  opacity: 0;
  transition: opacity 0.15s ease;
  svg path { fill: ${t.ink4}; }
  &:hover svg path { fill: ${t.ink2}; }
`;

const SectionEditOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 10;
  pointer-events: none;
  border-radius: ${radii.md};
`;

const SectionWrapper = styled.div<{ $isTarget?: boolean }>`
  position: relative;
  border-radius: ${radii.md};
  outline: ${p => p.$isTarget ? `1px dashed ${t.teal}` : 'none'};
  outline-offset: 8px;
  &:hover ${SectionDragHandle} { opacity: 1; }
`;

const Placeholder = styled.div<{ $h: number }>`
  height: ${p => p.$h}px;
  border: 2px dashed ${t.border};
  border-radius: ${radii.md};
`;

function DraggableSection({ index, isSrc, isTarget, isPending, srcHeight, onDragStart, onDragOver, onDragEnd, onDrop, children }: {
  index: number;
  isSrc: boolean;
  isTarget: boolean;
  isPending?: boolean;
  srcHeight: number;
  onDragStart: (i: number, h: number) => void;
  onDragOver: (e: React.DragEvent, i: number) => void;
  onDragEnd: () => void;
  onDrop: (e: React.DragEvent, i: number) => void;
  children: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const setupDragImage = (e: React.DragEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const PAD = 8;
    const ghost = document.createElement('div');
    ghost.style.cssText = `position:fixed;top:-9999px;left:-9999px;width:${rect.width + PAD * 2}px;padding:${PAD}px;background:${t.surface};border:1px solid ${t.teal};border-radius:${radii.md};box-sizing:border-box;opacity:1;`;
    ghost.appendChild(el.cloneNode(true));
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, e.clientX - rect.left + PAD, e.clientY - rect.top + PAD);
    setTimeout(() => { if (document.body.contains(ghost)) document.body.removeChild(ghost); }, 0);
  };

  return (
    <SectionWrapper
      ref={wrapRef}
      $isTarget={isTarget}
      draggable={!isPending}
      onDragStart={isPending ? undefined : e => { setupDragImage(e); onDragStart(index, wrapRef.current?.offsetHeight ?? 80); }}
      onDragOver={isPending ? undefined : e => onDragOver(e, index)}
      onDragEnd={isPending ? undefined : onDragEnd}
      onDrop={isPending ? undefined : e => onDrop(e, index)}
    >
      {isSrc ? <Placeholder $h={srcHeight} /> : (
        <>
          {!isPending && (
            <SectionEditOverlay>
              <SectionDragHandle>
                <Icon iconName={IconName.GRIP_VERTICAL} width={16} height={16} />
              </SectionDragHandle>
            </SectionEditOverlay>
          )}
          {children}
        </>
      )}
    </SectionWrapper>
  );
}

function AiGradientIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ai-fab-icon-grad" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={d.neutral.text.static} />
          <stop offset="100%" stopColor={t.teal} />
        </linearGradient>
      </defs>
      <path
        fill="url(#ai-fab-icon-grad)"
        d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"
      />
    </svg>
  );
}

export default function WellDetail() {
  const [pageScrolled, setPageScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setPageScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState('dark');
  const [showcaseMode, setShowcaseMode] = useState(false);
  const [aiFabOpen, setAiFabOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const aiInputRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    if (aiFabOpen) aiInputRef.current?.focus();
  }, [aiFabOpen]);

  const [depthRange, setDepthRange] = useState(DEPTH_RANGE_OPTIONS[0]);
  const [timeWindow, setTimeWindow] = useState(TIME_WINDOW_OPTIONS[0]);
  const [analyzedOnly, setAnalyzedOnly] = useState(true);
  const [sampleType, setSampleType] = useState('gas');
  const [sampleSort, setSampleSort] = useState(SAMPLE_SORT_OPTIONS[0]);
  const [trendDepth, setTrendDepth] = useState(DEPTH_RANGE_OPTIONS[0]);
  const [sectionOrder, setSectionOrder] = useState<SectionId[]>([...SECTION_IDS]);
  const [hiddenSections, setHiddenSections] = useState<Set<SectionId>>(new Set<SectionId>(['ar']));

  const [pendingSections, setPendingSections] = useState<Set<SectionId>>(new Set<SectionId>());
  const [toHideSections, setToHideSections] = useState<Set<SectionId>>(new Set<SectionId>());
  const [addFlowActive, setAddFlowActive] = useState(false);
  const [addDescription, setAddDescription] = useState('');
  const [dragSrcIdx, setDragSrcIdx] = useState<number | null>(null);
  const [dragSrcHeight, setDragSrcHeight] = useState(80);
  const [dragTargetIdx, setDragTargetIdx] = useState<number | null>(null);
  const dragSrcRef = useRef<number | null>(null);
  const justOpenedAddFlow = useRef(false);

  // suppress unused variable warnings for controlled inputs
  void depthRange; void setDepthRange;

  function handleSectionDragStart(index: number, height: number) {
    dragSrcRef.current = index;
    setTimeout(() => { setDragSrcIdx(index); setDragSrcHeight(height); }, 0);
  }
  function handleSectionDragOver(e: React.DragEvent, index: number) {
    e.preventDefault();
    if (dragSrcRef.current === index) return;
    setDragTargetIdx(index);
  }
  function handleSectionDragEnd() {
    setDragSrcIdx(null);
    setDragTargetIdx(null);
    dragSrcRef.current = null;
  }
  function handleSectionDrop(e: React.DragEvent, index: number) {
    e.preventDefault();
    setDragSrcIdx(null);
    setDragTargetIdx(null);
    const src = dragSrcRef.current;
    if (src === null || src === index) return;
    setSectionOrder(prev => {
      const next = [...prev];
      const [moved] = next.splice(src, 1);
      next.splice(index, 0, moved);
      return next;
    });
    dragSrcRef.current = null;
  }
  function restoreSection(id: SectionId) {
    const nextHidden = new Set(hiddenSections);
    nextHidden.delete(id);
    setSectionOrder(prev => {
      const visible = prev.filter(s => !nextHidden.has(s) && s !== id);
      const stillHidden = prev.filter(s => nextHidden.has(s));
      return [...visible, id, ...stillHidden];
    });
    setHiddenSections(nextHidden);
    setPendingSections(prev => new Set(Array.from(prev).concat(id)));
  }

  function handleApply() {
    setHiddenSections(prev => new Set([...Array.from(prev), ...Array.from(toHideSections)]));
    setPendingSections(new Set<SectionId>());
    setToHideSections(new Set<SectionId>());
    setAddFlowActive(false);
  }

  function handleCloseAddFlow() {
    setHiddenSections(prev => new Set([...Array.from(prev), ...Array.from(pendingSections)]));
    setPendingSections(new Set<SectionId>());
    setToHideSections(new Set<SectionId>());
    setAddFlowActive(false);
    setAddDescription('');
  }

  useEffect(() => {
    if (!addFlowActive || !justOpenedAddFlow.current) return;
    justOpenedAddFlow.current = false;
    const firstHidden = sectionOrder.find(id => hiddenSections.has(id));
    if (firstHidden) {
      setTimeout(() => {
        document.getElementById(`section-${firstHidden}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addFlowActive]);

  return (
    <Page>
      <Shell>
        {/* ---- sticky top (top bar only — no selector row) ---- */}
        <StickyTop $scrolled={pageScrolled}>
          <TopBar>
            <TopBarLeft>
              <DrillsenseLogo />
            </TopBarLeft>

            <TopBarMiddle>
              <TopBarTitleBlock>
                <Breadcrumbs
                  items={[
                    {
                      label: '',
                      icon: <Icon iconName={IconName.HOUSE_DOOR} width={16} height={16} />,
                      href: '#',
                    },
                    { label: WELL_A },
                  ]}
                />
                <Typography type="heading" size="lg" weight="semibold">{WELL_A}</Typography>
              </TopBarTitleBlock>
              <TopBarActions>
                <Button
                  label="More"
                  variant="secondary-gray"
                  size="md"
                  iconOnly
                  rightIcon={<Icon iconName={IconName.THREE_DOTS} width={20} height={20} />}
                />
                {!addFlowActive && (
                  <Button
                    label="Add"
                    variant="secondary-gray"
                    size="md"
                    rightIcon={<Icon iconName={IconName.PLUS_LG} width={20} height={20} />}
                    onClick={() => { justOpenedAddFlow.current = true; setAddFlowActive(true); }}
                  />
                )}
                <Button
                  label="Share"
                  variant="secondary"
                  size="md"
                  rightIcon={<Icon iconName={IconName.SHARE} width={20} height={20} />}
                />
              </TopBarActions>
            </TopBarMiddle>

            <TopBarRight>
              <WorkspaceMenuWrap>
                <WorkspaceChip onClick={() => setMenuOpen(o => !o)}>
                  <Avatar picture={avatarImg as unknown as string} pictureAlt="George Railean" userName="George Railean" size="md" />
                  <ChipUserBlock>
                    <ChipNameRow>
                      <Typography type="body" size="md" weight="semibold">George Railean</Typography>
                      <ChevronWrap $open={menuOpen}>
                        <Icon
                          iconName={menuOpen ? IconName.CHEVRON_UP : IconName.CHEVRON_DOWN}
                          width={12}
                          height={12}
                        />
                      </ChevronWrap>
                    </ChipNameRow>
                    <Typography type="body" size="sm" color="weaker">IMPAC</Typography>
                  </ChipUserBlock>
                </WorkspaceChip>

                {menuOpen && (
                  <WorkspaceDropdown>
                    <DropdownSection>
                      <DropdownTabsWrap>
                        <Tabs
                          tabs={[
                            { id: 'light', label: 'Light' },
                            { id: 'dark', label: 'Dark' },
                            { id: 'system', label: 'System' },
                          ]}
                          activeTab={themeMode}
                          onTabChange={setThemeMode}
                          variant="pills"
                          size="sm"
                          fullWidth
                        />
                      </DropdownTabsWrap>
                    </DropdownSection>

                    <Divider />

                    <DropdownSection>
                      <DropdownMenuItem>
                        <Icon iconName={IconName.GEAR} width={16} height={16} />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon iconName={IconName.CLIPBOARD_CHECK} width={16} height={16} />
                        QC audit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon iconName={IconName.DISPLAY} width={16} height={16} />
                        Showcase mode
                        <DropdownMenuItemRight>
                          <Toggle
                            size="sm"
                            checked={showcaseMode}
                            onChange={e => setShowcaseMode(e.target.checked)}
                          />
                        </DropdownMenuItemRight>
                      </DropdownMenuItem>
                    </DropdownSection>

                    <Divider />

                    <DropdownSection>
                      <DropdownMenuItem>
                        <Icon iconName={IconName.SHARE} width={16} height={16} />
                        Share profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon iconName={IconName.QUESTION_CIRCLE} width={16} height={16} />
                        Help
                      </DropdownMenuItem>
                    </DropdownSection>

                    <Divider />

                    <DropdownSection>
                      <DropdownSignOut>
                        <Icon iconName={IconName.BOX_ARROW_LEFT} width={16} height={16} />
                        Sign out
                      </DropdownSignOut>
                    </DropdownSection>
                  </WorkspaceDropdown>
                )}
              </WorkspaceMenuWrap>
            </TopBarRight>
          </TopBar>
        </StickyTop>

        <Main>
          {(() => {
            const getFlowAction = (id: SectionId) => {
              if (hiddenSections.has(id)) {
                return (
                  <SectionFlowBtnWrap>
                    <Button
                      label="Add"
                      variant="secondary"
                      size="sm"
                      rightIcon={<Icon iconName={IconName.PLUS_LG} width={16} height={16} />}
                      onClick={() => restoreSection(id)}
                    />
                  </SectionFlowBtnWrap>
                );
              }
              if (toHideSections.has(id)) {
                return (
                  <SectionFlowBtnWrap>
                    <Button
                      label="Add"
                      variant="secondary"
                      size="sm"
                      rightIcon={<Icon iconName={IconName.PLUS_LG} width={16} height={16} />}
                      onClick={() => setToHideSections(prev => { const n = new Set(prev); n.delete(id); return n; })}
                    />
                  </SectionFlowBtnWrap>
                );
              }
              if (pendingSections.has(id)) {
                return (
                  <SectionFlowBtnWrap>
                    <Button
                      label="Added"
                      variant="primary"
                      size="sm"
                      rightIcon={<Icon iconName={IconName.CHECK_SIMPLE} width={16} height={16} />}
                      onClick={() => {
                        setPendingSections(prev => { const n = new Set(prev); n.delete(id); return n; });
                        setHiddenSections(prev => new Set([...Array.from(prev), id]));
                      }}
                    />
                  </SectionFlowBtnWrap>
                );
              }
              return (
                <SectionFlowBtnWrap>
                  <Button
                    label="Added"
                    variant="primary"
                    size="sm"
                    rightIcon={<Icon iconName={IconName.CHECK_SIMPLE} width={16} height={16} />}
                    onClick={() => setToHideSections(prev => new Set([...Array.from(prev), id]))}
                  />
                </SectionFlowBtnWrap>
              );
            };

            const SECTION_CONTENT: Record<SectionId, JSX.Element> = {
              summary: (
                <AccordionSection title={SECTION_META.summary.title} dimContent={toHideSections.has('summary') || hiddenSections.has('summary')} actions={addFlowActive ? getFlowAction('summary') : <SectionMenu onRemove={() => setHiddenSections(prev => new Set([...Array.from(prev), 'summary' as SectionId]))} />}>
                  <CardRow>
                    {SUMMARY.map((card) => (
                      <AICard key={card.title}>
                        <svg width={0} height={0} style={{ position: 'absolute' }}>
                          <defs>
                            <linearGradient id="ai-card-icon-grad" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor={d.neutral.text.static} stopOpacity={0.9} />
                              <stop offset="100%" stopColor={t.teal} />
                            </linearGradient>
                          </defs>
                        </svg>
                        <IconChipOuter>
                          <IconChip>
                            <InvertedIcon iconName={card.icon as IconName} width={16} height={16} />
                          </IconChip>
                        </IconChipOuter>
                        <AICardContent>
                          <AICardTitle>{card.title}</AICardTitle>
                          <CardBodyWrap>
                            <Typography type="body" size="md" color="weaker">
                              {card.body}
                            </Typography>
                          </CardBodyWrap>
                        </AICardContent>
                      </AICard>
                    ))}
                  </CardRow>
                </AccordionSection>
              ),
              general: (
                <AccordionSection title={SECTION_META.general.title} dimContent={toHideSections.has('general') || hiddenSections.has('general')} actions={addFlowActive ? getFlowAction('general') : <SectionMenu onRemove={() => setHiddenSections(prev => new Set([...Array.from(prev), 'general' as SectionId]))} />}>
                  <InfoColumn rows={GENERAL_A} />
                </AccordionSection>
              ),
              offset: (
                <AccordionSection title={SECTION_META.offset.title} dimContent={toHideSections.has('offset') || hiddenSections.has('offset')} actions={addFlowActive ? getFlowAction('offset') : <SectionMenu onRemove={() => setHiddenSections(prev => new Set([...Array.from(prev), 'offset' as SectionId]))} />}>
                  <OffsetColumn />
                </AccordionSection>
              ),
              trends: (
                <AccordionSection
                  title="Trends"
                  hint="- High confidence correlations"
                  dimContent={toHideSections.has('trends') || hiddenSections.has('trends')}
                  actions={addFlowActive ? getFlowAction('trends') : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: space['12px'] }}>
                      <SortDropdown
                        options={DEPTH_RANGE_OPTIONS}
                        selectedOption={trendDepth}
                        onSelect={setTrendDepth}
                        title="Depth range"
                        size="md"
                      />
                      <SortDropdown
                        options={TIME_WINDOW_OPTIONS}
                        selectedOption={timeWindow}
                        onSelect={setTimeWindow}
                        title="Time window"
                        size="md"
                      />
                      <SectionMenu onRemove={() => setHiddenSections(prev => new Set([...Array.from(prev), 'trends' as SectionId]))} />
                    </div>
                  )}
                >
                  <HccPanelRows rows={HCC_ROWS} />
                </AccordionSection>
              ),
              kpi: (
                <AccordionSection title={SECTION_META.kpi.title} dimContent={toHideSections.has('kpi') || hiddenSections.has('kpi')} actions={addFlowActive ? getFlowAction('kpi') : <SectionMenu onRemove={() => setHiddenSections(prev => new Set([...Array.from(prev), 'kpi' as SectionId]))} />}>
                  <KpiSummarySection />
                </AccordionSection>
              ),
              correlation: (
                <CorrelationChart
                  flowAction={addFlowActive ? getFlowAction('correlation') : undefined}
                  dimContent={toHideSections.has('correlation') || hiddenSections.has('correlation')}
                  onRemove={() => setHiddenSections(prev => new Set([...Array.from(prev), 'correlation' as SectionId]))}
                />
              ),
              samples: (
                <AccordionSection
                  title={SECTION_META.samples.title}
                  dimContent={toHideSections.has('samples') || hiddenSections.has('samples')}
                  actions={addFlowActive ? getFlowAction('samples') : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
                        <Toggle
                          size="md"
                          label="Analyzed only"
                          labelPosition="left"
                          checked={analyzedOnly}
                          onChange={e => setAnalyzedOnly(e.target.checked)}
                        />
                      </div>
                      <SortDropdown
                        options={SAMPLE_SORT_OPTIONS}
                        selectedOption={sampleSort}
                        onSelect={setSampleSort}
                        title="Sort by"
                        size="md"
                      />
                      <Tabs
                        tabs={[
                          { id: 'gas', label: 'Gas', leftIcon: <Icon iconName={IconName.WIND} width={16} height={16} /> },
                          { id: 'liquid', label: 'Liquid', leftIcon: <Icon iconName={IconName.DROPLET} width={16} height={16} /> },
                        ]}
                        activeTab={sampleType}
                        onTabChange={setSampleType}
                        variant="pills"
                        size="sm"
                      />
                      <SectionMenu onRemove={() => setHiddenSections(prev => new Set([...Array.from(prev), 'samples' as SectionId]))} />
                    </div>
                  )}
                >
                  <InfoCard style={{ padding: 0, overflow: 'hidden' }}>
                    <SampleColumn seedOffset={0} count={25} />
                  </InfoCard>
                </AccordionSection>
              ),
              ar: (
                <AccordionSection
                  title={SECTION_META.ar.title}
                  dimContent={toHideSections.has('ar') || hiddenSections.has('ar')}
                  actions={addFlowActive ? getFlowAction('ar') : <SectionMenu onRemove={() => setHiddenSections(prev => new Set([...Array.from(prev), 'ar' as SectionId]))} />}
                >
                  <Panel>
                    <ChartWrap>
                      <ChartTitleRow>
                        <ChartTitle>A/R Ratio by depth</ChartTitle>
                      </ChartTitleRow>
                      <LineChartDS
                        data={AR_CHART_DATA}
                        xKey="depth"
                        yKeys={['well']}
                        colors={[t.teal]}
                        height={300}
                        yLabel="A/R Ratio"
                        xLabel="Depth (ft)"
                        xTickFormatter={(v) => `${fmt(v)} ft`}
                      />
                    </ChartWrap>
                  </Panel>
                </AccordionSection>
              ),
            };

            const orderedIds = addFlowActive
              ? [
                  ...sectionOrder.filter(id => !hiddenSections.has(id)),
                  ...sectionOrder.filter(id => hiddenSections.has(id)),
                ]
              : sectionOrder.filter(id => !hiddenSections.has(id));

            return orderedIds.map((id, index) => (
                <div key={id} id={`section-${id}`}>
                  <DraggableSection
                    index={index}
                    isSrc={dragSrcIdx === index}
                    isTarget={dragTargetIdx === index}
                    srcHeight={dragSrcHeight}
                    isPending={addFlowActive || pendingSections.has(id) || hiddenSections.has(id)}
                    onDragStart={handleSectionDragStart}
                    onDragOver={handleSectionDragOver}
                    onDragEnd={handleSectionDragEnd}
                    onDrop={handleSectionDrop}
                  >
                    {SECTION_CONTENT[id]}
                  </DraggableSection>
                </div>
              ));
          })()}
        </Main>

        <Footer>
          <span>© 2025 DATUM DrillSense – Intelligent Drilling Analytics Platform</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
            <FooterLink href="#">Privacy policy</FooterLink>
            <FooterLink href="#">Terms of service</FooterLink>
            <span style={{ fontSize: fontSizes.xs, color: t.ink4 }}>Version 2.42.0</span>
          </div>
        </Footer>
      </Shell>

      <AiFabWrap
        onMouseEnter={() => setAiFabOpen(true)}
        onMouseLeave={() => setAiFabOpen(false)}
      >
        <AiPanel $open={aiFabOpen}>
          {['Summarize well performance', 'Identify drilling anomalies', 'Compare to offset wells'].map((s) => (
            <AiChip key={s}>{s}</AiChip>
          ))}
          <AiInputBorder>
            <AiAnimRing />
            <AiInputRow>
              <AiIconBtn aria-label="Add">
                <Icon iconName={IconName.PLUS_LG} width={16} height={16} />
              </AiIconBtn>
              <AiInputEl
                ref={aiInputRef}
                placeholder="Ask anything"
                value={aiMessage}
                onChange={e => setAiMessage(e.target.value)}
              />
              <AiIconBtn aria-label="Voice">
                <Icon iconName={IconName.MIC} width={16} height={16} />
              </AiIconBtn>
              <AiSendBtn disabled aria-label="Send">
                <Icon iconName={IconName.SEND_FILL} width={16} height={16} />
              </AiSendBtn>
            </AiInputRow>
          </AiInputBorder>
        </AiPanel>
        <AiFab $open={aiFabOpen} aria-label="AI assistant">
          <AiFabMiddle $open={aiFabOpen}>
            <AiGradientIcon />
          </AiFabMiddle>
        </AiFab>
      </AiFabWrap>

      <FloatingAddBar $visible={addFlowActive}>
        <Button
          label="Close"
          variant="ghost-gray"
          size="md"
          iconOnly
          rightIcon={<Icon iconName={IconName.X} width={16} height={16} />}
          onClick={handleCloseAddFlow}
        />
        <FloatingBarDivider />
        <FloatingInputGroup>
          <FloatingAiIconWrap>
            <AiGradientIcon />
          </FloatingAiIconWrap>
          <FloatingBarInput
            placeholder="Describe what you want to add"
            value={addDescription}
            onChange={e => setAddDescription(e.target.value)}
          />
        </FloatingInputGroup>
        <FloatingBarDivider />
        <Button
          label="Apply"
          variant="primary"
          size="md"
          disabled={toHideSections.size === 0 && pendingSections.size === 0}
          onClick={handleApply}
        />
      </FloatingAddBar>

    </Page>
  );
}
