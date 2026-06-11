import { useState, useRef, useLayoutEffect, useEffect, type JSX } from 'react';
import styled from 'styled-components';
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
import gridBg from '@src/assets/Grid.svg';
const SAMPLE_IMAGES = [sampleImg0, sampleImg1, sampleImg2, sampleImg3, sampleImg4, sampleImg5, sampleImg6, sampleImg7, sampleImg8, sampleImg9, sampleImg10, sampleImg11];
import type { BagdeTypes } from '@src/components/Badge/types';
import { PieChart } from '@src/components/PieChart';
import { LineChartDS } from '@src/components/LineChart';
import { HBarChartDS } from '@src/components/HorizontalBarChart';
import { Legend } from '@src/components/Legend';
import { LegendContainer, LegendItem } from '@src/components/Legend/styles';
import SortDropdown from '@src/components/Sort';
import { KpiCard, KpiDetailItem, type KpiRange } from '@/src/local components/KpiCards/KpiCards';
import { SampleCard } from '@/src/local components/SampleCard/SampleCard';
import { AiChat, AiGradientIcon } from '@/src/local components/AiChat/AiChat';

/* ------------------------------------------------------------------ *
 * Comparison / Well vs Well
 * A faithful rebuild of the DrillSense comparison screen, composed from
 * FuseDash DS primitives (Typography, Button, Badge, ProgressBar, Tabs,
 * Avatar, Icon) on token-driven layout containers. Every color, padding,
 * gap and radius traces to src/themes/tokens.ts — no hardcoded values.
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
  // data viz — two-well comparison uses qualitative_2_1 per color-rules
  seriesA: d.dataViz.qualitative_2_1[0],
  seriesB: d.dataViz.qualitative_2_1[1],
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

/* ---------------------------- header ------------------------------ */
const SelectorRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.md};
  padding: ${spacing.xl} ${spacing.xl};
`;

const Selector = styled.button`
  flex: 1 0 0;
  width: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${space['12px']};
  padding: ${space['10px']} ${spacing.md};
  background: ${t.surface};
  border: 1px solid ${t.borderStrong};
  border-radius: ${radii.md};
  cursor: pointer;
  text-align: left;
  &:hover {
    border-color: ${t.teal};
  }
  &:disabled {
    cursor: default;
    border-color: ${t.border};
    &:hover { border-color: ${t.border}; }
  }
  .label {
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${fontSizes.m};
    font-weight: ${fontWeights.semibold};
    color: ${t.ink};
  }
  .divider {
    width: 1px;
    height: ${space['16px']};
    align-self: center;
    margin-left: auto;
    background: ${d.neutral.border.weaker};
  }
`;

const SelectorWrap = styled.div`
  flex: 1 0 0;
  min-width: 0;
  position: relative;
`;

const AiBadge = styled.span`
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: ${space['4px']};
  border-radius: ${radii.xl};
  background-color: ${d.neutral.background.baseInverted};
  background-image: radial-gradient(
    ellipse 130% 155% at 50% -22%,
    ${d.primary.background.strong} 0%,
    ${d.neutral.background.baseInverted} 88%
  );
  color: ${d.neutral.text.inverted.default};
  box-shadow:
    inset 0 1px 1px -0.5px ${d.transparent.white['72%']},
    0 0 0 1px ${d.transparent.white['12%']},
    0 0 16px 0 ${d.primary.background.transparent.default};
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.xs};
  line-height: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  white-space: nowrap;
`;

const WellDropdown = styled.div`
  position: absolute;
  top: calc(100% + ${spacing.xs});
  left: 0;
  right: 0;
  background: ${t.surface};
  border: 1px solid ${t.borderWeakest};
  border-radius: ${radii.md};
  box-shadow: ${shadows.lg};
  z-index: 100;
  overflow: hidden;
  padding: ${space['4px']} 0;
`;

const WellOption = styled.button<{ $selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  width: 100%;
  height: ${sizes.md};
  padding: 0 ${spacing.md};
  background: ${(p) => (p.$selected ? t.tealSoft : 'transparent')};
  border: none;
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  font-weight: ${(p) => (p.$selected ? fontWeights.semibold : fontWeights.regular)};
  color: ${(p) => (p.$selected ? t.ink : t.ink2)};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease-in-out, color 0.15s ease-in-out;
  &:hover {
    background: ${t.panelTint};
    color: ${t.ink};
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

/* ----------------------- comparison summary ----------------------- */


const CardBodyWrap = styled.div`
  b {
    font-weight: ${fontWeights.regular};
    color: ${t.ink};
  }
`;
const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${space['12px']};
  align-items: stretch;
`;
const AICard = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 0;
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

const Pair = styled.div`
  display: flex;
  gap: ${spacing.md};
  align-items: stretch;
`;
const InfoCard = styled.div`
  flex: 1 0 0;
  min-width: 0;
  padding: ${spacing.md};
  background: ${t.panelTint};
  border: 1px solid ${d.neutral.border.weaker};
  border-radius: ${radii.md};
`;
const OffsetCard = styled(InfoCard)`
  position: relative;
`;
const OffsetKpiRow = styled.div`
  position: absolute;
  left: ${spacing.md};
  bottom: ${spacing.md};
  display: flex;
  gap: ${spacing.md};
`;
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.md};
  @media (min-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
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
  align-self: flex-start;
`;
const OffsetPadChip = styled.button`
  display: inline-flex;
  flex-direction: column;
  gap: ${space['4px']};
  padding: ${spacing['2xs']};
  border: none;
  border-radius: ${radii.sm};
  background: ${t.canvas};
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
const OffsetConnectorWrap = styled.div`
  flex: 1;
  min-width: 0;
  align-self: stretch;
`;
const OffsetWellsCol = styled.div`
  flex: 1 1 0;
  min-width: 320px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;
const OffsetWellCard = styled.div<{ $v: StageVariant }>`
  padding: ${spacing.sm};
  border-radius: ${radii.sm};
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

/* ----------------------------- trends ----------------------------- */


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
  gap: ${space['12px']};
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
  flex: 2 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${space['4px']};
  padding: ${spacing.xs} ${spacing.xs} ${spacing.xs} 0;
  /* truncate copy on one line once it exceeds the available width */
  & > * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const HccMetaCell = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${space['2px']};
  padding: ${spacing.xs} ${spacing.md};
`;

const ValueUnitRow = styled.span`
  display: flex;
  align-items: baseline;
  gap: ${space['4px']};
  flex-wrap: wrap;
`;
const ValueUnitNum = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  font-weight: ${fontWeights.regular};
  color: ${t.ink};
  font-variant-numeric: tabular-nums;
`;
const ValueUnitLabel = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.xs};
  color: ${t.ink3};
`;
function ValueUnit({ value, unit }: { value: React.ReactNode; unit?: string }) {
  return (
    <ValueUnitRow>
      <ValueUnitNum>{value}</ValueUnitNum>
      {unit && <ValueUnitLabel>{unit}</ValueUnitLabel>}
    </ValueUnitRow>
  );
}

/* --------------------------- kpi summary -------------------------- */

const KpiSummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  padding: 0;
  @media (min-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* dividers drawn on the cards (each child is an imported KpiCard root) */
  & > * {
    border-right: 1px solid ${d.neutral.border.weaker};
    border-bottom: 1px solid ${d.neutral.border.weaker};
  }

  /* 2-column rules (default) */
  & > *:nth-child(2n)                          { border-right: none; }
  & > *:last-child                             { border-right: 1px solid ${d.neutral.border.weaker}; border-bottom: none; }
  & > *:nth-last-child(-n+2):nth-child(2n+1)   { border-bottom: none; }

  /* 3-column rules */
  @media (min-width: 1800px) {
    & > *:nth-child(2n)                        { border-right: 1px solid ${d.neutral.border.weaker}; }
    & > *:nth-child(3n)                        { border-right: none; }
    & > *:nth-last-child(-n+2)                 { border-bottom: none; }
    & > *:last-child                           { border-bottom: none; }
  }
`;
const KpiInfoCard = styled(InfoCard)`
  padding: 0;
  overflow: hidden;
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

/* ============================== data ============================== */

const WELL_A = 'Beartooth 54-1-34 unit 23H';
const WELL_B = 'Silver Peak 58-1-22 unit 18H';
const WELLS = [
  'Silver Peak 58-1-22 unit 18H',
  'Coyote Ridge 42-3-11 unit 7H',
  'Mesa Verde 61-2-08 unit 5H',
  'Ironhorse 33-4-19 unit 12H',
  'Thunderbird 77-5-03 unit 9H',
];
const SERIES_CODE = '2-B-RO-S-X-1-CT-PR  1-5-RO-S-X-1-WT-PR 13  3-1-WT-S-X-O-BT-TD';

type AICardData = { icon: IconNameType; title: string; body: JSX.Element; active?: boolean };
type IconNameType = `${IconName}`;

const SUMMARY: AICardData[] = [
  {
    icon: IconName.GRAPH_UP_ARROW,
    title: 'ROP patterns',
    active: true,
    body: (
      <>
        <b>Beartooth 54-1-34</b> maintains consistently higher ROP vs. <b>Silver Peak 58-1-22</b> across 2,000–8,000 ft.
      </>
    ),
  },
  {
    icon: IconName.BAR_CHART_LINE,
    title: 'XRF ratios',
    body: (
      <>
        Zn/Mn is significantly higher, while K/Ti and Ca/Nd are moderately lower
        in <b>BEARTOOTH 54-1-34 UNIT 23H</b>.
      </>
    ),
  },
  {
    icon: IconName.TOOLS,
    title: 'Bit wear indices',
    body: (
      <>
        <b>SILVER PEAK 58-1-22 UNIT 18H</b> exhibits 25% higher average bit wear
        across all depths analyzed.
      </>
    ),
  },
  {
    icon: IconName.DIAGRAM_3,
    title: 'RPM vs VS correlation',
    body: (
      <>
        <b>BEARTOOTH 54-1-34 UNIT 23H</b> shows a stronger positive correlation
        between RPM and VS.
      </>
    ),
  },
  {
    icon: IconName.SPEEDOMETER_2,
    title: 'String weight variability',
    body: (
      <>
        <b>SILVER PEAK 58-1-22 UNIT 18H</b> sees higher fluctuations in string
        weight, primarily beyond 7,000 ft.
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
const GENERAL_B: InfoRow[] = [
  { k: 'Benchmark ID', v: '317' },
  { k: 'Operator', v: 'Silver Peak Energy' },
  { k: 'API number', v: '35-039-00118' },
  { k: 'Target formation', v: 'Redfork' },
  { k: 'Location', v: '35.6021500, -98.9114700' },
  { k: 'County/state', v: 'Custer, OK' },
];

type StageVariant = 'active' | 'completed' | 'drilling' | 'planned';
type StageRow = { name: string; status: BagdeTypes; statusLabel: string; pct: number; bar: 'accent' | 'default'; icon: IconNameType; variant: StageVariant };
type OffsetPad = { name: string; spacing: string; formationDepth: string; currentStage: string };

const OFFSET_PAD_A: OffsetPad = { name: 'Wolfcamp B', spacing: '325 ft', formationDepth: `${fmt(9350)} ft`, currentStage: 'Curve' };
const OFFSET_STAGES_A: StageRow[] = [
  { name: 'Well 1', status: 'info', statusLabel: 'Active', pct: 5, bar: 'accent', icon: IconName.POWER, variant: 'active' },
  { name: 'Well 2', status: 'success', statusLabel: 'Completed', pct: 100, bar: 'default', icon: IconName.CHECK_SIMPLE, variant: 'completed' },
  { name: 'Well 3', status: 'info', statusLabel: 'Drilling', pct: 34, bar: 'accent', icon: IconName.ARROW_CLOCKWISE, variant: 'drilling' },
  { name: 'Offset A', status: 'default', statusLabel: 'Planned', pct: 0, bar: 'default', icon: IconName.CLOCK, variant: 'planned' },
];

const OFFSET_PAD_B: OffsetPad = { name: 'Spraberry 4', spacing: '410 ft', formationDepth: `${fmt(9820)} ft`, currentStage: 'Lateral' };
const OFFSET_STAGES_B: StageRow[] = [
  { name: 'Well 1', status: 'success', statusLabel: 'Completed', pct: 100, bar: 'default', icon: IconName.CHECK_SIMPLE, variant: 'completed' },
  { name: 'Well 2', status: 'info', statusLabel: 'Drilling', pct: 62, bar: 'accent', icon: IconName.ARROW_CLOCKWISE, variant: 'drilling' },
  { name: 'Well 3', status: 'info', statusLabel: 'Active', pct: 18, bar: 'accent', icon: IconName.POWER, variant: 'active' },
  { name: 'Offset B', status: 'default', statusLabel: 'Planned', pct: 0, bar: 'default', icon: IconName.CLOCK, variant: 'planned' },
];

type KpiSummary = { label: string; unit: string; value: number; delta: number; icon: IconNameType };
const KPI_SUMMARY: KpiSummary[] = [
  { label: 'ROP', unit: 'ft/hr', value: 182.0, delta: 5.4, icon: IconName.SPEEDOMETER_2 },        // above band
  { label: 'WOB', unit: 'klbs', value: 38.2, delta: -3.2, icon: IconName.ARROW_DOWN_CIRCLE },
  { label: 'RPM', unit: 'rpm', value: 205.0, delta: 2.8, icon: IconName.ARROW_CLOCKWISE },          // above band
  { label: 'String Wt', unit: 'klbs', value: 486.0, delta: -1.6, icon: IconName.DIAGRAM_3 },
  { label: 'SPP', unit: 'psi', value: 8650.0, delta: 4.1, icon: IconName.SPEEDOMETER },             // above band
  { label: 'Diff Press', unit: 'psi', value: 640.0, delta: -7.3, icon: IconName.BAR_CHART_LINE },
  { label: 'Torque', unit: 'kft-lb', value: 68.0, delta: 6.2, icon: IconName.WRENCH_ADJUSTABLE },   // above band
  { label: 'Flow Rate', unit: 'gpm', value: 620.0, delta: -2.4, icon: IconName.DROPLET },
  { label: 'MSE', unit: 'ksi', value: 168.0, delta: 3.5, icon: IconName.LIGHTNING },
];
const KPI_SUMMARY_B: KpiSummary[] = [
  { label: 'ROP', unit: 'ft/hr', value: 98.7, delta: -2.1, icon: IconName.SPEEDOMETER_2 },
  { label: 'WOB', unit: 'klbs', value: 64.0, delta: 8.3, icon: IconName.ARROW_DOWN_CIRCLE },        // above band
  { label: 'RPM', unit: 'rpm', value: 128.3, delta: -1.7, icon: IconName.ARROW_CLOCKWISE },
  { label: 'String Wt', unit: 'klbs', value: 812.0, delta: 7.2, icon: IconName.DIAGRAM_3 },         // above band
  { label: 'SPP', unit: 'psi', value: 4890.0, delta: -3.8, icon: IconName.SPEEDOMETER },
  { label: 'Diff Press', unit: 'psi', value: 1280.0, delta: 12.6, icon: IconName.BAR_CHART_LINE },  // above band
  { label: 'Torque', unit: 'kft-lb', value: 38.4, delta: -6.4, icon: IconName.WRENCH_ADJUSTABLE },
  { label: 'Flow Rate', unit: 'gpm', value: 240.0, delta: 4.9, icon: IconName.DROPLET },            // below band
  { label: 'MSE', unit: 'ksi', value: 142.0, delta: -9.2, icon: IconName.LIGHTNING },
];

// chart range (track extent) + suggested normal/working band (success region) per metric
const KPI_RANGES: Record<string, KpiRange> = {
  'ROP':        { max: 250,   bandLow: 20,   bandHigh: 150 },
  'WOB':        { max: 80,    bandLow: 10,   bandHigh: 50 },
  'RPM':        { max: 250,   bandLow: 60,   bandHigh: 180 },
  'String Wt':  { max: 1000,  bandLow: 100,  bandHigh: 700 },
  'SPP':        { max: 10000, bandLow: 2000, bandHigh: 7500 },
  'Diff Press': { max: 1500,  bandLow: 200,  bandHigh: 1000 },
  'Torque':     { max: 80,    bandLow: 5,    bandHigh: 50 },
  'Flow Rate':  { max: 1200,  bandLow: 300,  bandHigh: 900 },
  'MSE':        { max: 500,   bandLow: 20,   bandHigh: 250 },
};


// ---- correlation chart data (deterministic, generated once) ----
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const N = 500;
const DEPTHS = Array.from({ length: N }, (_, i) => (i * 10000) / (N - 1));

// Well A: starts high, drops through a hard formation mid-section, recovers late
const SERIES_A = DEPTHS.map((d, i) => {
  const t = d / 10000;
  const trend = 3.4 - t * 1.2 + Math.pow(t - 0.55, 2) * 2.8 - Math.pow(t - 0.8, 2) * 1.4;
  const slow = Math.sin(i / 18) * 0.22 + Math.sin(i / 11 + 0.7) * 0.14;
  const mid = Math.sin(i / 4.2 + 1.1) * 0.09 + Math.sin(i / 2.3) * 0.06;
  const noise = Math.sin(i / 0.9 + 0.3) * 0.05 + Math.sin(i / 0.45) * 0.03;
  return clamp(trend + slow + mid + noise, 0.4, 4.6);
});

// Well B: lower baseline, rises through mid, plateaus, drops sharply at end
const SERIES_B = DEPTHS.map((d, i) => {
  const t = d / 10000;
  const trend = 1.6 + t * 0.9 - Math.pow(t - 0.65, 2) * 3.1 + Math.pow(t - 0.4, 2) * 1.2;
  const slow = Math.sin(i / 22 + 2.1) * 0.18 + Math.sin(i / 13 + 1.4) * 0.11;
  const mid = Math.sin(i / 5.1 + 2.9) * 0.08 + Math.sin(i / 2.7 + 1.8) * 0.05;
  const noise = Math.sin(i / 1.1 + 1.5) * 0.045 + Math.sin(i / 0.5 + 0.9) * 0.025;
  return clamp(trend + slow + mid + noise, 0.12, 3.8);
});

const CHART_DATA = DEPTHS.map((depth, i) => ({
  depth: Math.round(depth),
  wellA: parseFloat(SERIES_A[i].toFixed(2)),
  wellB: parseFloat(SERIES_B[i].toFixed(2)),
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
const AR_SERIES_B = AR_DEPTHS_RAW.map((_, i) => {
  const tn = i / (N_AR - 1);
  const trend = 8 + tn * 58;
  const slow = Math.sin(i / 28 + 2.3) * 4.5 + Math.sin(i / 16 + 0.8) * 3;
  const mid  = Math.sin(i / 7 + 2.1) * 1.8;
  return clamp(trend + slow + mid, 5, 95);
});
const AR_CHART_DATA = AR_DEPTHS_RAW.map((depth, i) => ({
  depth: Math.round(depth),
  wellA: parseFloat(AR_SERIES_A[i].toFixed(2)),
  wellB: parseFloat(AR_SERIES_B[i].toFixed(2)),
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

const HCC_ROWS_A: HccCorr[] = [
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

const HCC_ROWS_B: HccCorr[] = [
  {
    kpi: 'ROP',
    desc: 'Drops as differential pressure exceeds 110 psi',
    pct: 24,
    pctPrefix: '~',
    depth: '6,050–6,480',
    depthUnit: 'ft',
    confidence: 89,
    confidenceUnit: '%',
  },
  {
    kpi: 'Bit wear',
    desc: 'Rises sharply through the lateral interval',
    pct: 27,
    pctPrefix: '>',
    depth: '7,200–8,100',
    depthUnit: 'ft',
    confidence: 'Lateral',
    confidenceUnit: '',
    confidenceLabel: 'Affects',
  },
  {
    kpi: 'Zn/Mn ratio',
    desc: 'Leads formation transition signal',
    pct: 9,
    displayPct: '0.09',
    pctPrefix: '~',
    depth: '180',
    depthUnit: 'ft ahead',
    confidence: 83,
    confidenceUnit: '%',
  },
];

type StateKey = 'trip' | 'stable' | 'adjust' | 'event';
const BAND_A: [StateKey, number][] = [
  ['trip', 5], ['stable', 12], ['trip', 3], ['stable', 9], ['adjust', 6], ['stable', 11],
  ['trip', 4], ['event', 5], ['stable', 8], ['trip', 3], ['adjust', 7], ['stable', 13],
  ['event', 4], ['stable', 10],
];
const BAND_B: [StateKey, number][] = [
  ['stable', 11], ['trip', 7], ['stable', 16], ['event', 5], ['adjust', 9],
  ['stable', 12], ['trip', 6], ['stable', 14], ['event', 6], ['adjust', 8], ['stable', 6],
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
  { label: 'Well 1', name: WELL_A, bands: toDepthBands(BAND_A) },
  { label: 'Well 2', name: WELL_B, bands: toDepthBands(BAND_B) },
];

const SECTION_IDS = ['summary', 'general', 'offset', 'trends', 'kpi', 'correlation', 'samples', 'ar'] as const;
type SectionId = typeof SECTION_IDS[number];

const SECTION_META: Record<SectionId, { title: string; desc: string }> = {
  summary:     { title: 'Comparison summary',   desc: 'AI-generated comparison highlights' },
  general:     { title: 'General details',       desc: 'Well metadata and operator info' },
  offset:      { title: 'Offset well',           desc: 'Pad order and well stages' },
  trends:      { title: 'Trends',                desc: 'High confidence correlations' },
  kpi:         { title: 'KPI summary',           desc: 'Rate of penetration, WOB, RPM and more' },
  correlation: { title: 'Drilling performance',  desc: 'Correlation view charts' },
  samples:     { title: 'Samples by depth',      desc: 'Core sample gallery by depth' },
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
            <ValueUnit value={row.depth} unit={row.depthUnit} />
          </HccMetaCell>

          {/* confidence column */}
          <HccMetaCell>
            <Typography type="body" size="md" weight="regular" color="weaker">
              {row.confidenceLabel ?? 'Confidence'}
            </Typography>
            <ValueUnit value={row.confidence} unit={row.confidenceUnit} />
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
          <KpiDetailItem key={r.k} label={r.k} value={r.v} />
        ))}
        <KpiDetailItem label="Status" value="Active" emphasis />
        <KpiDetailItem label="Created at" value="12/08/2025 - 16:49" />
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
        const d = `M 0 ${padY} C ${W * 0.5} ${padY}, ${W * 0.5} ${y}, ${W} ${y}`;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={`url(#cg-${i})`} strokeWidth={1} />
            <circle cx={W} cy={y} r={4} fill={t.borderWeakest} stroke={t.canvas} strokeWidth={2} />
          </g>
        );
      })}
      {/* origin dot rendered once so it matches terminal dots visually */}
      <circle cx={0} cy={padY} r={4} fill={t.borderWeakest} stroke={t.canvas} strokeWidth={2} />
    </svg>
  );
}

function OffsetColumn({ pad, stages }: { pad: OffsetPad; stages: StageRow[] }) {
  const colRef = useRef<HTMLDivElement>(null);
  const connWrapRef = useRef<HTMLDivElement>(null);
  const padRef = useRef<HTMLButtonElement>(null);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [conn, setConn] = useState<{ h: number; ys: number[]; W: number; padY: number }>({
    h: stages.length * WELL_CARD_H + (stages.length - 1) * WELL_CARD_GAP,
    ys: stages.map((_, i) => i * (WELL_CARD_H + WELL_CARD_GAP) + 18),
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
    <OffsetCard>
      <OffsetTreeWrap>
        <OffsetPadCol>
          <OffsetPadChip ref={padRef}>
            <PadChipTitle>
              <Icon iconName={IconName.GRID_3_X_3} width={14} height={14} />
              PAD: "{pad.name}"
            </PadChipTitle>
          </OffsetPadChip>
        </OffsetPadCol>
        <OffsetConnectorWrap ref={connWrapRef}>
          <OffsetConnectorSVG totalH={conn.h} ys={conn.ys} W={conn.W} padY={conn.padY} />
        </OffsetConnectorWrap>
        <OffsetWellsCol ref={colRef}>
          {stages.map((s, i) => (
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

      <OffsetKpiRow>
        <KpiDetailItem label="Spacing" value={pad.spacing} />
        <KpiDetailItem label="Formation depth" value={pad.formationDepth} />
        <KpiDetailItem label="Current stage" value={pad.currentStage} />
      </OffsetKpiRow>
    </OffsetCard>
  );
}

function KpiSummarySection() {
  return (
    <Pair>
      <KpiInfoCard>
        <KpiSummaryGrid>
          {KPI_SUMMARY.map((kpi, i) => (
            <KpiCard
              key={kpi.label}
              icon={kpi.icon}
              label={kpi.label}
              value={kpi.value}
              unit={kpi.unit}
              delta={kpi.delta}
              compare={KPI_SUMMARY_B[i].value}
              range={KPI_RANGES[kpi.label]}
            />
          ))}
        </KpiSummaryGrid>
      </KpiInfoCard>
      <KpiInfoCard>
        <KpiSummaryGrid>
          {KPI_SUMMARY_B.map((kpi, i) => (
            <KpiCard
              key={`b-${kpi.label}`}
              icon={kpi.icon}
              label={kpi.label}
              value={kpi.value}
              unit={kpi.unit}
              delta={kpi.delta}
              compare={KPI_SUMMARY[i].value}
              range={KPI_RANGES[kpi.label]}
            />
          ))}
        </KpiSummaryGrid>
      </KpiInfoCard>
    </Pair>
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
            <Legend labels={[WELL_A, WELL_B]} width="auto" />
          </ChartTitleRow>

          <LineChartDS
            data={CHART_DATA}
            xKey="depth"
            yKeys={['wellA', 'wellB']}
            colors={[t.seriesA, t.seriesB]}
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
          {depths.map((d, i) => {
            const meta = SAMPLE_META[i % SAMPLE_META.length];
            return (
              <SampleCard
                key={d}
                image={SAMPLE_IMAGES[(seedOffset + i) % 12] as unknown as string}
                depth={d}
                id={meta.id.replace('#', '')}
                date={meta.date}
                count={meta.count}
              />
            );
          })}
        </TileGrid>
      </SampleScrollWrap>
    </SampleWrap>
  );
}

/* ============================== view ============================== */


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

export default function WellComparison() {
  const [pageScrolled, setPageScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setPageScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState('dark');
  const [showcaseMode, setShowcaseMode] = useState(false);
  const [wellSelectorOpen, setWellSelectorOpen] = useState(false);
  const [selectedWell, setSelectedWell] = useState(WELL_B);

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
  const hideSection = (id: SectionId) =>
    setHiddenSections(prev => new Set([...Array.from(prev), id]));

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
        {/* ---- sticky top (top bar + selector row) ---- */}
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
                    {
                      label: WELL_A,
                      href: '#',
                    },
                    { label: 'Comparison' },
                  ]}
                />
                <Typography type="heading" size="lg" weight="semibold">Comparison</Typography>
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

          <SelectorRow>
            <Selector disabled>
              <span className="label">{WELL_A}</span>
            </Selector>
            <SelectorWrap>
              <Selector onClick={() => setWellSelectorOpen(o => !o)}>
                <span className="label">{selectedWell}</span>
                {selectedWell === WELL_B && (
                  <AiBadge>Best match</AiBadge>
                )}
                <span className="divider" />
                <Icon iconName={IconName.CHEVRON_DOWN} width={16} height={16} />
              </Selector>
              {wellSelectorOpen && (
                <WellDropdown>
                  {WELLS.map(w => (
                    <WellOption
                      key={w}
                      $selected={w === selectedWell}
                      onClick={() => { setSelectedWell(w); setWellSelectorOpen(false); }}
                    >
                      <Icon iconName={IconName.GEO_ALT} width={14} height={14} />
                      {w}
                    </WellOption>
                  ))}
                </WellDropdown>
              )}
            </SelectorWrap>
          </SelectorRow>
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
                        hideSection(id);
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
                <AccordionSection title={SECTION_META.summary.title} dimContent={toHideSections.has('summary') || hiddenSections.has('summary')} actions={addFlowActive ? getFlowAction('summary') : <SectionMenu onRemove={() => hideSection('summary')} />}>
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
                <AccordionSection title={SECTION_META.general.title} dimContent={toHideSections.has('general') || hiddenSections.has('general')} actions={addFlowActive ? getFlowAction('general') : <SectionMenu onRemove={() => hideSection('general')} />}>
                  <Pair>
                    <InfoColumn rows={GENERAL_A} />
                    <InfoColumn rows={GENERAL_B} />
                  </Pair>
                </AccordionSection>
              ),
              offset: (
                <AccordionSection title={SECTION_META.offset.title} dimContent={toHideSections.has('offset') || hiddenSections.has('offset')} actions={addFlowActive ? getFlowAction('offset') : <SectionMenu onRemove={() => hideSection('offset')} />}>
                  <Pair>
                    <OffsetColumn pad={OFFSET_PAD_A} stages={OFFSET_STAGES_A} />
                    <OffsetColumn pad={OFFSET_PAD_B} stages={OFFSET_STAGES_B} />
                  </Pair>
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
                      <SectionMenu onRemove={() => hideSection('trends')} />
                    </div>
                  )}
                >
                  <Pair>
                    <HccPanelRows rows={HCC_ROWS_A} />
                    <HccPanelRows rows={HCC_ROWS_B} />
                  </Pair>
                </AccordionSection>
              ),
              kpi: (
                <AccordionSection title={SECTION_META.kpi.title} dimContent={toHideSections.has('kpi') || hiddenSections.has('kpi')} actions={addFlowActive ? getFlowAction('kpi') : <SectionMenu onRemove={() => hideSection('kpi')} />}>
                  <KpiSummarySection />
                </AccordionSection>
              ),
              correlation: (
                <CorrelationChart
                  flowAction={addFlowActive ? getFlowAction('correlation') : undefined}
                  dimContent={toHideSections.has('correlation') || hiddenSections.has('correlation')}
                  onRemove={() => hideSection('correlation')}
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
                      <SectionMenu onRemove={() => hideSection('samples')} />
                    </div>
                  )}
                >
                  <Pair>
                    <InfoCard style={{ padding: 0, overflow: 'hidden' }}>
                      <SampleColumn seedOffset={0} count={25} />
                    </InfoCard>
                    <InfoCard style={{ padding: 0, overflow: 'hidden' }}>
                      <SampleColumn seedOffset={6} count={10} />
                    </InfoCard>
                  </Pair>
                </AccordionSection>
              ),
              ar: (
                <AccordionSection
                  title={SECTION_META.ar.title}
                  dimContent={toHideSections.has('ar') || hiddenSections.has('ar')}
                  actions={addFlowActive ? getFlowAction('ar') : <SectionMenu onRemove={() => hideSection('ar')} />}
                >
                  <Panel>
                    <ChartWrap>
                      <ChartTitleRow>
                        <Legend labels={[WELL_A, WELL_B]} width="auto" />
                      </ChartTitleRow>
                      <LineChartDS
                        data={AR_CHART_DATA}
                        xKey="depth"
                        yKeys={['wellA', 'wellB']}
                        colors={[t.seriesA, t.seriesB]}
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

      <AiChat
        prompts={['Summarize well differences', 'Compare ROP patterns', 'Identify formation anomalies']}
      />

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
