import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import { darkTheme, fontFamilies, fontSizes, lineHeights, typography } from '@src/themes';

const c = darkTheme.colors;
const ink1       = c.neutral.text.default;
const ink4       = c.neutral.text.weakest;
const ink3       = c.neutral.text.weaker;
const canvasBg   = c.neutral.background.base;
const surfaceBg  = c.neutral.background.default;
const borderWeak    = c.neutral.background.transparent.weak;
const borderStrong  = c.neutral.border.strong;
const borderDefault = c.neutral.border.default;
const borderWeakest = c.neutral.border.weakest;

// numeric DS values used in imperative SVG layout
const xsFs  = parseInt(fontSizes.xs);           // 12 — axis labels
const smFs  = parseInt(fontSizes.s);             // 14 — tooltip body
const smLh  = parseInt(lineHeights.m);           // 20 — body.sm line-height
const xsLh  = parseInt(lineHeights.s);           // 16 — body.xs line-height
const fwReg = typography.body.sm.regular.fontWeight;
const fwSem = typography.body.sm.semibold.fontWeight;

export interface LineChartDSProps {
  data: Record<string, number>[];
  xKey: string;
  yKeys: string[];
  colors?: string[];
  height?: number;
  xLabel?: string;
  yLabel?: string;
  xTickFormatter?: (v: number) => string;
  yTickFormatter?: (v: number) => string;
  className?: string;
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  svg { display: block; }
`;

export function LineChartDS({
  data,
  xKey,
  yKeys,
  colors,
  height = 300,
  xLabel,
  yLabel,
  xTickFormatter,
  yTickFormatter,
  className,
}: LineChartDSProps) {
  const wrapRef      = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const el   = containerRef.current;
    if (!wrap || !el || !data.length) return;

    const palette = colors ?? yKeys.map((_, i) => c.dataViz.qualitative_2_1[i] ?? '#888');

    const render = (W: number) => {
      const mT = 16, mR = 20, mB = xLabel ? 44 : 30, mL = 48;

      const x = d3.scaleLinear()
        .domain(d3.extent(data, d => d[xKey]) as [number, number])
        .range([mL, W - mR]);

      const allY = data.flatMap(row => yKeys.map(k => row[k]));
      const y = d3.scaleLinear()
        .domain([0, d3.max(allY) ?? 1])
        .nice()
        .range([height - mB, mT]);

      const svg = d3.create('svg')
        .attr('width', W)
        .attr('height', height)
        .style('font', `${xsFs}px ${fontFamilies.body}`)
        .style('-webkit-tap-highlight-color', 'transparent')
        .style('overflow', 'visible')
        .on('pointerenter pointermove', pointermoved)
        .on('pointerleave', pointerleft)
        .on('touchstart', (e: TouchEvent) => e.preventDefault());

      // y-axis + grid
      svg.append('g')
        .attr('transform', `translate(${mL},0)`)
        .call(d3.axisLeft(y).ticks(height / 50))
        .call(g => g.select('.domain').remove())
        .call(g => g.selectAll<SVGLineElement, unknown>('.tick line').clone()
          .attr('x2', W - mL - mR)
          .attr('stroke', borderWeak)
          .attr('stroke-opacity', 1))
        .call(g => g.selectAll('text').attr('fill', ink4).attr('font-size', xsFs).attr('font-family', fontFamilies.body))
        .call(g => { if (yLabel) g.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('x', -(mT + (height - mB - mT) / 2))
            .attr('y', -mL + xsLh)
            .attr('fill', ink3).attr('text-anchor', 'middle')
            .attr('font-size', xsFs).attr('font-family', fontFamilies.body).attr('font-weight', fwReg)
            .text(yLabel); });

      // x-axis
      const bottomAxis = d3.axisBottom(x).ticks(W / 100).tickSizeOuter(0);
      if (xTickFormatter) bottomAxis.tickFormat((v) => xTickFormatter(+v));
      svg.append('g')
        .attr('transform', `translate(0,${height - mB})`)
        .call(bottomAxis)
        .call(g => g.select('.domain').attr('stroke', borderWeak))
        .call(g => g.selectAll('.tick line').attr('stroke', borderWeak))
        .call(g => g.selectAll('text').attr('fill', ink4).attr('font-size', xsFs).attr('font-family', fontFamilies.body))
        .call(g => { if (xLabel) g.append('text')
            .attr('x', W - mR).attr('y', mB - 4)
            .attr('fill', ink3).attr('text-anchor', 'end')
            .attr('font-size', xsFs).attr('font-family', fontFamilies.body).attr('font-weight', fwReg)
            .text(xLabel); });

      const titlePadV = 8;
      const titlePadH = 12;
      const titleH    = titlePadV * 2 + smLh;  // 8 top + 20 (body.sm line-height) + 8 bottom = 36
      const legendPadV = 8;
      const legendPadH = 12;
      const rowH      = 28;
      const barW      = 4;
      const barH      = 16;
      const barGap    = 8;
      const tipW      = 200;

      // lines
      yKeys.forEach((key, i) => {
        svg.append('path')
          .datum(data)
          .attr('fill', 'none')
          .attr('stroke', palette[i])
          .attr('stroke-width', 1.5)
          .attr('d', d3.line<Record<string, number>>()
            .x(d => x(d[xKey]))
            .y(d => y(d[key]))
            .curve(d3.curveCatmullRom));
      });

      // crosshair rule
      const rule = svg.append('line')
        .attr('y1', mT).attr('y2', height - mB)
        .attr('stroke', borderDefault).attr('stroke-width', 1).attr('stroke-dasharray', '3,3')
        .style('display', 'none');


      // hover dots
      const dots = yKeys.map((_, i) =>
        svg.append('circle')
          .attr('r', 4)
          .attr('fill', palette[i])
          .attr('stroke', canvasBg).attr('stroke-width', 1.5)
          .style('display', 'none')
      );

      const tooltip = svg.append('g').style('display', 'none');
      const bisect  = d3.bisector((d: Record<string, number>) => d[xKey]).center;

      function pointermoved(event: PointerEvent) {
        const i   = bisect(data, x.invert(d3.pointer(event)[0]));
        const row = data[i];
        if (!row) return;

        const xPos = x(row[xKey]);
        rule.attr('x1', xPos).attr('x2', xPos).style('display', null);
        dots.forEach((dot, di) =>
          dot.attr('cx', xPos).attr('cy', y(row[yKeys[di]])).style('display', null));

        const xFmt = xTickFormatter ? xTickFormatter(row[xKey]) : String(row[xKey]);

        // build row data
        const rows = yKeys.map((k, ri) => ({
          label: k,
          value: yTickFormatter
            ? yTickFormatter(row[k])
            : (typeof row[k] === 'number' ? (row[k] as number).toFixed(2) : String(row[k])),
          color: palette[ri],
        }));
        const tipH = titleH + 1 + legendPadV + rows.length * rowH + legendPadV;

        // position tooltip — flip left if it would overflow right edge
        const flip = xPos + tipW + 12 > W - mR;
        const tx   = flip ? xPos - tipW - 8 : xPos + 8;
        const ty   = Math.min(mT + 8, height - mB - tipH - 4);
        tooltip.attr('transform', `translate(${tx},${ty})`).style('display', null);

        tooltip.selectAll('*').remove();

        // background rect
        tooltip.append('rect')
          .attr('width', tipW).attr('height', tipH)
          .attr('rx', 8)
          .attr('fill', surfaceBg)
          .attr('stroke', borderWeakest);

        // title — 8px top/bottom, 12px left/right
        tooltip.append('text')
          .attr('x', titlePadH)
          .attr('y', titlePadV + smLh / 2)
          .attr('dominant-baseline', 'middle')
          .attr('fill', ink1)
          .attr('font-size', smFs)
          .attr('line-height', smLh)
          .attr('font-family', fontFamilies.body)
          .attr('font-weight', fwReg)
          .text(xFmt);

        // full-width divider between title and legend
        tooltip.append('line')
          .attr('x1', 0).attr('x2', tipW)
          .attr('y1', titleH).attr('y2', titleH)
          .attr('stroke', borderWeakest).attr('stroke-width', 1);

        // legend items — 12px all-around padding
        rows.forEach(({ label, value, color }, ri) => {
          const gy = titleH + 1 + legendPadV + ri * rowH + rowH / 2;
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
            .text(label);

          g.append('text')
            .attr('x', tipW - legendPadH * 2).attr('y', 0)
            .attr('dominant-baseline', 'central')
            .attr('text-anchor', 'end')
            .attr('fill', ink1)
            .attr('font-size', smFs)
            .attr('line-height', smLh)
            .attr('font-family', fontFamilies.body)
            .attr('font-weight', fwReg)
            .text(value);
        });
      }

      function pointerleft() {
        tooltip.style('display', 'none');
        rule.style('display', 'none');
        dots.forEach(d => d.style('display', 'none'));
      }

      el.innerHTML = '';
      el.appendChild(svg.node()!);
    };

    render(wrap.getBoundingClientRect().width || 928);

    const ro = new ResizeObserver(entries => render(entries[0].contentRect.width));
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [data, xKey, JSON.stringify(yKeys), JSON.stringify(colors), height, xLabel, yLabel]);

  return (
    <Wrap ref={wrapRef} className={className}>
      <div ref={containerRef} />
    </Wrap>
  );
}
