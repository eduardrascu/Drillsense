import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import { darkTheme, fontSizes, fontWeights, fontFamilies } from '@src/themes';

/* DS tokens */
const PALETTE = darkTheme.colors.dataViz.qualitative_12;
const ink  = darkTheme.colors.neutral.text.default;
const ink3 = darkTheme.colors.neutral.text.weaker;

/* ------------------------------------------------------------------ */

export interface PieSlice {
  label: string;
  value: number;
}

export interface PieChartProps {
  data: PieSlice[];
  /** Container width in px. Height = min(500, width/2) unless square=true. Default 500. */
  width?: number;
  /** Donut hole ratio 0–1. 0 = solid pie. Default 0.72. */
  innerRatio?: number;
  /** Override the default qualitative_12 palette. Length must be ≥ data.length. */
  colors?: string[];
  /** Render with a 1:1 aspect ratio (height = width). Use for compact square contexts. */
  square?: boolean;
  /** Main text shown in the donut centre (e.g. "~18"). Only visible when innerRatio > 0. */
  centerLabel?: string;
  /** Small muted text below centerLabel (e.g. "%"). */
  centerSub?: string;
  /** Font size for centerLabel. Defaults to fontSizes.m (16px). */
  centerLabelFontSize?: string;
  className?: string;
}

/* ------------------------------------------------------------------ */

type ArcDatum = d3.PieArcDatum<PieSlice>;

interface ChartState {
  path: d3.Selection<SVGPathElement, ArcDatum, SVGGElement, unknown>;
  pie: d3.Pie<unknown, PieSlice>;
  arc: d3.Arc<unknown, ArcDatum>;
}

/* ------------------------------------------------------------------ */

const Wrap = styled.div`
  position: relative;
  width: 100%;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const Center = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  line-height: 1;
  gap: 2px;
`;

/* ------------------------------------------------------------------ */

export function PieChart({
  data,
  width = 500,
  innerRatio = 0.72,
  colors,
  square = false,
  centerLabel,
  centerSub,
  centerLabelFontSize,
  className,
}: PieChartProps) {
  /* D3 owns svgRef — React owns the rest of Wrap (Center overlay) */
  const svgRef   = useRef<HTMLDivElement>(null);
  const stateRef = useRef<ChartState | null>(null);

  /* ---- initial mount: build the SVG ---- */
  useEffect(() => {
    const el = svgRef.current;
    if (!el || !data.length) return;

    const h      = square ? width : Math.min(500, width / 2);
    const outerR = (square ? width : h) / 2 - (square ? 4 : 10);
    const innerR = outerR * innerRatio;

    const color = d3.scaleOrdinal<string>().range(colors ?? PALETTE);

    const svg = d3.create('svg')
      .attr('viewBox', `${-width / 2} ${-h / 2} ${width} ${h}`);

    const arc = d3.arc<ArcDatum>()
      .innerRadius(innerR)
      .outerRadius(outerR);

    const pie = d3.pie<PieSlice>()
      .sort(null)
      .value(d => d.value);

    const g = svg.append('g');

    const path = g
      .selectAll<SVGPathElement, ArcDatum>('path')
      .data(pie(data))
      .join('path')
        .attr('fill', (_, i) => color(String(i)))
        .attr('d', arc)
        .each(function(d) { (this as any)._current = d; });

    el.innerHTML = '';
    el.appendChild(svg.node()!);
    stateRef.current = { path, pie, arc };

    return () => {
      el.innerHTML = '';
      stateRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, innerRatio, square]);

  /* ---- animated update when data changes ---- */
  useEffect(() => {
    const s = stateRef.current;
    if (!s || !data.length) return;

    s.pie.value(d => d.value);
    s.path.data(s.pie(data));
    s.path
      .transition()
      .duration(750)
      .attrTween('d', function(a) {
        const i = d3.interpolate((this as any)._current, a);
        (this as any)._current = i(0);
        return (t: number) => s.arc(i(t)) ?? '';
      });
  }, [data]);

  return (
    <Wrap className={className}>
      <div ref={svgRef} />
      {centerLabel && (
        <Center>
          <span style={{
            fontFamily: fontFamilies.body,
            fontSize: centerLabelFontSize ?? fontSizes.m,
            fontWeight: fontWeights.semibold,
            color: ink,
          }}>
            {centerLabel}
          </span>
          {centerSub && (
            <span style={{
              fontFamily: fontFamilies.body,
              fontSize: fontSizes.xs,
              color: ink3,
            }}>
              {centerSub}
            </span>
          )}
        </Center>
      )}
    </Wrap>
  );
}
