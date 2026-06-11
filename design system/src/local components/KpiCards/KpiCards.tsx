import React from 'react';
import styled from 'styled-components';
import { space, radii, spacing, fontFamilies, fontSizes, fontWeights, lineHeights } from '@src/themes';
import { Typography } from '@src/components/Typography';
import { Icon } from '@src/components/Icon';
import { IconName } from '@src/components/Icon/types';

/* ============================================================================
 * KpiCards — two reusable KPI pieces extracted from the DrillSense screens:
 *   • KpiDetailItem  — a single label/value pair (as used in "General details")
 *   • KpiCard        — the summary card (icon, label, value with optional
 *                      prefix/unit affix labels, trend delta, range bar)
 * Colors resolve through the active theme; layout scales come from tokens.
 * ==========================================================================*/

/* ----------------------------- detail item ------------------------------ */

export interface KpiDetailItemProps {
  /** muted key, e.g. "Operator" */
  label: string;
  /** value shown beneath the label */
  value: React.ReactNode;
  /** render the value in the primary/brand color (e.g. an active status) */
  emphasis?: boolean;
}

const DetailCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['4px']};
  min-width: 0;
`;

const DetailValue = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const KpiDetailItem: React.FC<KpiDetailItemProps> = ({ label, value, emphasis }) => (
  <DetailCell>
    <Typography type="body" size="md" color="weakest">
      {label}
    </Typography>
    <Typography
      type="body"
      size="md"
      as="div"
      variant={emphasis ? 'primary' : 'neutral'}
    >
      <DetailValue>{value}</DetailValue>
    </Typography>
  </DetailCell>
);

/* ------------------------------ summary card ---------------------------- */

/** chart range (track extent) + suggested working band (success region) */
export type KpiRange = { max: number; bandLow: number; bandHigh: number };

export interface KpiCardProps {
  icon: `${IconName}`;
  label: string;
  value: number;
  /** suffix label after the value, e.g. "ft/hr" */
  unit: string;
  /** toggle the suffix (unit) label */
  showUnit?: boolean;
  /** prefix label before the value, e.g. "$" */
  prefix?: string;
  /** toggle the prefix label */
  showPrefix?: boolean;
  /** signed trend; negative renders a down caret in the error color */
  delta: number;
  /** caption next to the delta */
  deltaLabel?: string;
  /** comparison well value (outline dot); the card's own `value` is the solid dot */
  compare?: number;
  /** when provided, renders the range bar */
  range?: KpiRange;
}

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${space['16px']};
  padding: ${space['16px']};
  background: transparent;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;

const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${spacing.sm};
`;

const ValueBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['4px']};
`;

const ValueRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${space['6px']};
`;

const ValueNum = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes['2xl']};
  line-height: ${lineHeights['2xl']};
  font-weight: ${fontWeights.regular};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-variant-numeric: tabular-nums;
`;

const AffixLabel = styled.span`
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  color: ${({ theme }) => theme.colors.neutral.text.weakest};
`;

const Delta = styled.span`
  display: flex;
  align-items: center;
  gap: ${space['4px']};
  font-size: ${fontSizes.xs};
`;

const DeltaUp = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${space['4px']};
  color: ${({ theme }) => theme.colors.system.success.text.default};
  svg path {
    fill: ${({ theme }) => theme.colors.system.success.icon.default};
  }
`;

const DeltaDown = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${space['4px']};
  color: ${({ theme }) => theme.colors.system.error.text.default};
  svg path {
    fill: ${({ theme }) => theme.colors.system.error.icon.default};
  }
`;

const DeltaLabel = styled.span`
  color: ${({ theme }) => theme.colors.neutral.text.weaker};
`;

/* range bar — full chart range is the track, success band marks the suggested
   working range; solid dot = this card's well, outline dot = comparison */
const RangeTrack = styled.div`
  position: relative;
  flex: none;
  width: ${space['96px']};
  height: ${space['6px']};
  background: ${({ theme }) => theme.colors.neutral.background.active};
  border-radius: ${radii.sm};
`;

const RangeBand = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.system.success.background.default};
  border-radius: ${radii.sm};
`;

const RangeDot = styled.span<{ $outline?: boolean }>`
  position: absolute;
  top: 50%;
  width: ${space['8px']};
  height: ${space['8px']};
  box-sizing: border-box;
  border-radius: ${radii.rounded};
  transform: translate(-50%, -50%);
  z-index: ${(p) => (p.$outline ? 1 : 2)};
  background: ${({ theme, $outline }) => ($outline ? 'transparent' : theme.colors.neutral.text.default)};
  border: ${({ theme, $outline }) => ($outline ? `1.5px solid ${theme.colors.neutral.text.default}` : 'none')};
  box-shadow: ${({ theme, $outline }) => ($outline ? 'none' : `0 0 0 1.5px ${theme.colors.neutral.background.hover}`)};
`;

function RangeBar({ value, compare, range }: { value: number; compare?: number; range: KpiRange }) {
  const pos = (v: number) => `${clamp((v / range.max) * 100, 0, 100)}%`;
  const bandLeft = clamp((range.bandLow / range.max) * 100, 0, 100);
  const bandRight = clamp((range.bandHigh / range.max) * 100, 0, 100);
  return (
    <RangeTrack>
      <RangeBand style={{ left: `${bandLeft}%`, width: `${bandRight - bandLeft}%` }} />
      {/* outline dot = comparison well; omitted on single-well screens */}
      {compare !== undefined && <RangeDot $outline style={{ left: pos(compare) }} />}
      <RangeDot style={{ left: pos(value) }} />
    </RangeTrack>
  );
}

export const KpiCard: React.FC<KpiCardProps> = ({
  icon,
  label,
  value,
  unit,
  showUnit = true,
  prefix,
  showPrefix = false,
  delta,
  deltaLabel = 'vs prev mo',
  compare,
  range,
}) => (
  <Card>
    <Top>
      <LabelRow>
        <Icon iconName={icon as IconName} width={14} height={14} />
        <Typography type="body" size="md" color="weaker">
          {label}
        </Typography>
      </LabelRow>
    </Top>
    <Bottom>
      <ValueBlock>
        <ValueRow>
          {showPrefix && prefix && <AffixLabel>{prefix}</AffixLabel>}
          <ValueNum>{value.toLocaleString('en-US')}</ValueNum>
          {showUnit && unit && <AffixLabel>{unit}</AffixLabel>}
        </ValueRow>
        <Delta>
          {delta < 0 ? (
            <DeltaDown>
              <Icon iconName={IconName.CARET_DOWN_FILL} width={14} height={14} />
              {Math.abs(delta)}%
            </DeltaDown>
          ) : (
            <DeltaUp>
              <Icon iconName={IconName.CARET_UP_FILL} width={14} height={14} />
              {delta}%
            </DeltaUp>
          )}
          <DeltaLabel>{deltaLabel}</DeltaLabel>
        </Delta>
      </ValueBlock>
      {range && (
        <RangeBar value={value} compare={compare} range={range} />
      )}
    </Bottom>
  </Card>
);
