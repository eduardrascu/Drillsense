import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import { darkTheme, fontFamilies, fontSizes, lineHeights, typography } from '@src/themes';

const c = darkTheme.colors;
const ink1          = c.neutral.text.default;
const ink4          = c.neutral.text.weakest;
const ink3          = c.neutral.text.weaker;
const surfaceBg     = c.neutral.background.default;
const borderWeak    = c.neutral.background.transparent.weak;
const borderWeakest = c.neutral.border.weakest;

const xsFs  = parseInt(fontSizes.xs);
const smFs  = parseInt(fontSizes.s);
const smLh  = parseInt(lineHeights.m);
const xsLh  = parseInt(lineHeights.s);
const fwReg = typography.body.sm.regular.fontWeight;

export interface DepthBand {
  state: string;
  start: number;
  end: number;
}

export interface DepthBandRow {
  label: string;
  bands: DepthBand[];
}

export interface HBarChartDSProps {
  rows: DepthBandRow[];
  domain: [number, number];
  colors: Record<string, string>;
  height?: number;
  /** Left margin in px — set to match the line chart above (LineChartDS uses 48) */
  mL?: number;
  /** Right margin in px — set to match the line chart above (LineChartDS uses 20) */
  mR?: number;
  xTickFormatter?: (v: number) => string;
  className?: string;
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  svg { display: block; }
`;

export function HBarChartDS({
  rows,
  domain,
  colors,
  height = 72,
  mL = 48,
  mR = 20,
  xTickFormatter,
  className,
}: HBarChartDSProps) {
  const wrapRef      = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const uid          = useRef(`hbar-${Math.random().toString(36).slice(2, 7)}`);

  useEffect(() => {
    const wrap = wrapRef.current;
    const el   = containerRef.current;
    if (!wrap || !el || !rows.length) return;

    const render = (W: number) => {
      const mT = 4, mB = 30;

      const x = d3.scaleLinear()
        .domain(domain)
        .range([mL, W - mR]);

      const y = d3.scaleBand()
        .domain(rows.map(r => r.label))
        .range([mT, height - mB])
        .padding(0.2);

      const svg = d3.create('svg')
        .attr('width', W)
        .attr('height', height)
        .style('font', `${xsFs}px ${fontFamilies.body}`)
        .style('overflow', 'visible');

      // diagonal stripe patterns — one per state color
      const defs = svg.append('defs');
      Object.entries(colors).forEach(([state, color]) => {
        const pat = defs.append('pattern')
          .attr('id', `${uid.current}-${state}`)
          .attr('patternUnits', 'userSpaceOnUse')
          .attr('width', 6).attr('height', 6)
          .attr('patternTransform', 'rotate(45)');
        pat.append('rect')
          .attr('width', 6).attr('height', 6)
          .attr('fill', color).attr('opacity', 0.25);
        pat.append('line')
          .attr('x1', 0).attr('y1', 0)
          .attr('x2', 0).attr('y2', 6)
          .attr('stroke', color).attr('stroke-width', 1.5);
      });

      // y-axis labels
      svg.append('g')
        .attr('transform', `translate(${mL},0)`)
        .call(
          d3.axisLeft(y)
            .tickSizeOuter(0)
            .tickSizeInner(0)
        )
        .call(g => g.select('.domain').remove())
        .call(g => g.selectAll('.tick line').remove())
        .call(g => g.selectAll('text')
          .attr('fill', ink3)
          .attr('font-size', xsFs)
          .attr('font-family', fontFamilies.body)
          .attr('font-weight', fwReg)
          .attr('dx', '-8')
        );

      // tooltip layout — same geometry as LineChartDS
      const titlePadV = 8;
      const titlePadH = 12;
      const titleH    = titlePadV * 2 + smLh;
      const legendPadV = 8;
      const legendPadH = 12;
      const rowH      = smLh + 8;
      const barW = 4, barH = 16, barGap = 8;
      const tipW = 200;

      // tooltip group — created before bands but raised to top after
      const tooltip = svg.append('g').style('display', 'none').style('pointer-events', 'none');

      function showTooltip(event: PointerEvent, row: DepthBandRow, band: DepthBand) {
        const [mx, my] = d3.pointer(event);
        const color      = colors[band.state] ?? '#888';
        const depthLabel = `${band.start.toLocaleString()}–${band.end.toLocaleString()} ft`;
        const tipH       = titleH + 1 + legendPadV + rowH + legendPadV;

        const flip = mx + tipW + 12 > W - mR;
        const tx   = flip ? mx - tipW - 8 : mx + 8;
        const ty   = Math.max(mT, my - tipH / 2);
        tooltip.attr('transform', `translate(${tx},${ty})`).style('display', null);
        tooltip.selectAll('*').remove();

        // background
        tooltip.append('rect')
          .attr('width', tipW).attr('height', tipH)
          .attr('rx', 8)
          .attr('fill', surfaceBg)
          .attr('stroke', borderWeakest);

        // title — state name
        tooltip.append('text')
          .attr('x', titlePadH)
          .attr('y', titlePadV + smLh / 2)
          .attr('dominant-baseline', 'middle')
          .attr('fill', ink1)
          .attr('font-size', smFs)
          .attr('line-height', smLh)
          .attr('font-family', fontFamilies.body)
          .attr('font-weight', fwReg)
          .text(band.state);

        // divider
        tooltip.append('line')
          .attr('x1', 0).attr('x2', tipW)
          .attr('y1', titleH).attr('y2', titleH)
          .attr('stroke', borderWeakest).attr('stroke-width', 1);

        // legend row — row label + depth range
        const gy = titleH + 1 + legendPadV + rowH / 2;
        const g  = tooltip.append('g').attr('transform', `translate(${legendPadH},${gy})`);

        g.append('rect')
          .attr('x', 0).attr('y', -barH / 2)
          .attr('width', barW).attr('height', barH)
          .attr('rx', 2)
          .attr('fill', color);

        g.append('text')
          .attr('x', barW + barGap).attr('y', 0)
          .attr('dominant-baseline', 'central')
          .attr('fill', ink4)
          .attr('font-size', smFs)
          .attr('line-height', smLh)
          .attr('font-family', fontFamilies.body)
          .attr('font-weight', fwReg)
          .text(row.label);

        g.append('text')
          .attr('x', tipW - legendPadH * 2).attr('y', 0)
          .attr('dominant-baseline', 'central')
          .attr('text-anchor', 'end')
          .attr('fill', ink1)
          .attr('font-size', smFs)
          .attr('line-height', smLh)
          .attr('font-family', fontFamilies.body)
          .attr('font-weight', fwReg)
          .text(depthLabel);
      }

      // band segments
      rows.forEach(row => {
        row.bands.forEach(band => {
          const bx = x(band.start);
          const bw = Math.max(0, x(band.end) - bx);
          if (bw === 0) return;

          svg.append('rect')
            .attr('x', bx)
            .attr('y', y(row.label)!)
            .attr('width', bw)
            .attr('height', y.bandwidth())
            .attr('rx', 2)
            .attr('fill', `url(#${uid.current}-${band.state})`)
            .style('cursor', 'default')
            .on('pointerenter', (event: PointerEvent) => showTooltip(event, row, band))
            .on('pointermove',  (event: PointerEvent) => showTooltip(event, row, band))
            .on('pointerleave', () => tooltip.style('display', 'none'));
        });
      });

      // x-axis
      const bottomAxis = d3.axisBottom(x).ticks(W / 100).tickSizeOuter(0);
      if (xTickFormatter) bottomAxis.tickFormat((v) => xTickFormatter(+v));
      svg.append('g')
        .attr('transform', `translate(0,${height - mB})`)
        .call(bottomAxis)
        .call(g => g.select('.domain').attr('stroke', borderWeak))
        .call(g => g.selectAll('.tick line').attr('stroke', borderWeak))
        .call(g => g.selectAll('text')
          .attr('fill', ink4)
          .attr('font-size', xsFs)
          .attr('font-family', fontFamilies.body)
        );

      // raise tooltip above all other elements
      tooltip.raise();

      el.innerHTML = '';
      el.appendChild(svg.node()!);
    };

    render(wrap.getBoundingClientRect().width || 928);
    const ro = new ResizeObserver(entries => render(entries[0].contentRect.width));
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [JSON.stringify(rows), JSON.stringify(domain), JSON.stringify(colors), height, mL, mR]);

  return (
    <Wrap ref={wrapRef} className={className}>
      <div ref={containerRef} />
    </Wrap>
  );
}
