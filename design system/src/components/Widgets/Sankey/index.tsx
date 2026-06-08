import {
  Fragment,
  MouseEvent,
  TouchEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import useMeasure from 'react-use-measure';
import { sankey } from 'd3-sankey';
import { Bar, LinkHorizontal } from '@visx/shape';
import { Text } from '@visx/text';
import { localPoint } from '@visx/event';
import {
  defaultStyles as defaultTooltipStyles,
  TooltipWithBounds,
  useTooltip,
} from '@visx/tooltip';
import { ColorRangeLegend } from '../../../components/ColorRangeLegend';
import { useTheme } from 'styled-components';
import { hexToRGBA } from '../../../helpers/hexToRgba';
import convert from 'color-convert';
import { scaleLinear } from '@visx/scale';

import {
  DataItem,
  defaultChartParams,
  Link,
  Node,
  SankeyProps,
  TooltipData,
} from './Sankey.types';
import {
  CategoryName,
  LegendStyledWrapper,
  LinkValueLabelWrapper,
  SankeyChartWrapper,
  SankeyComponentWrapper,
  SankeyHeader,
} from './Sankey.styles';

let tooltipTimeout: string | number | NodeJS.Timeout | undefined;

export const SankeyPlot = ({
  data,
  dataLabels,
  width,
  height,
  colorPalette = 'sequential_7_1',
  legendPosition,
  withTooltip,
  valueFormatter,
}: SankeyProps) => {
  const [ref, bounds] = useMeasure();
  const theme = useTheme();
  const [selected, setSelected] = useState('');

  const links: DataItem[] = data;

  const nodes: Node[] = useMemo(
    () =>
      [
        ...links.reduce((group, link) => {
          group.add(link.source), group.add(link.target);
          return group;
        }, new Set()),
      ].map(name => ({ name: name as string })),
    [links]
  );

  const linksLabels: JSX.Element[] = [];

  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  } = useTooltip<TooltipData>();

  const tooltipStyles = {
    ...defaultTooltipStyles,
    width: defaultChartParams.tooltip.width,
    minWidth: defaultChartParams.tooltip.minWidth,
    maxWidth: defaultChartParams.tooltip.maxWidth,
    backgroundColor: theme['neutralBackgroundBase'],
    color: theme['neutralText'],
    fontSize: 12,
    border: `1px solid ${theme['neutralBorder']}`,
    borderRadius: 6,
    boxShadow:
      '0px 2px 4px 0px rgba(20, 28, 44, 0.06),0px 4px 8px 2px rgba(20, 28, 44, 0.06)',
  };

  const chartWidth = width ?? (bounds.width || defaultChartParams.width);
  const chartHeight = height ?? (bounds.height || defaultChartParams.height);

  const calculatedMargins = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  if (dataLabels) {
    calculatedMargins.top +=
      defaultChartParams.header.marginBottom +
      defaultChartParams.header.categoryName.lineHeight;
  }

  if (legendPosition === 'top') {
    calculatedMargins.top +=
      defaultChartParams.legend.horizontal.height +
      defaultChartParams.legend.horizontal.gap;
  }

  if (legendPosition === 'bottom') {
    calculatedMargins.bottom +=
      defaultChartParams.legend.horizontal.height +
      defaultChartParams.legend.horizontal.gap;
  }

  const graphWidth =
    chartWidth - calculatedMargins.left - calculatedMargins.right;
  const graphHeight =
    chartHeight - calculatedMargins.top - calculatedMargins.bottom;

  const layout = sankey<Node, Link>().nodeId((d: any) => d.name);

  const graphPadding = 0;
  const graph = useMemo(
    () =>
      layout.extent([
        [graphPadding, graphPadding],
        [graphWidth - graphPadding * 2, graphHeight - graphPadding * 2],
      ])({
        nodes,
        links: links.map(l => ({ ...l, value: Number(l.value) })),
      }),
    [graphHeight, graphWidth, layout, links, nodes]
  );

  const maxDepth = useMemo(
    () => Math.max(...graph.nodes.map((n: any) => n.depth!)),
    [graph]
  );

  const activeLinks = useMemo(() => {
    if (selected === '') return new Set();
    return new Set(
      graph.links.filter(
        (l: any) =>
          layout.nodeId()(l.source) === selected ||
          layout.nodeId()(l.target) === selected
      )
    );
  }, [selected, graph.links, layout]);

  const colorScaleRange = useMemo(
    () => [
      theme['colors']['dataViz'][colorPalette].at(0),
      theme['colors']['dataViz'][colorPalette].at(-1),
    ],
    [colorPalette, theme]
  );

  const getNodeMaxValue = (node: any) =>
    Math.max(
      ...(node?.sourceLinks?.length
        ? node.sourceLinks.map((_: Link) => _.value)
        : [])
    );

  const getNodeIsActive = (node: any) => {
    const links = node?.sourceLinks?.length
      ? node?.sourceLinks
      : node?.targetLinks;

    const actives = [] as boolean[];
    for (const link of links) {
      if (activeLinks.has(link)) {
        actives.push(true);
      }
    }
    return links?.length === actives?.length;
  };

  const handleSelect = useCallback(
    (node: any) => {
      const id = layout.nodeId()(node) as string;
      if (selected === id) setSelected('');
      else setSelected(id);
    },
    [layout, selected]
  );

  const handleMouseMove = useCallback(
    (event: MouseEvent | TouchEvent, { data, color }) => {
      if (tooltipTimeout) clearTimeout(tooltipTimeout);

      if (!data) return;

      const point = localPoint(event) || { x: 0, y: 0 };
      if (!point) return;

      const { x, y } = point || {
        x: 0,
        y: 0,
      };

      showTooltip({
        tooltipLeft: x,
        tooltipTop: y,
        tooltipData: {
          data,
          color,
        },
      });
    },
    [showTooltip]
  );

  const handleMouseLeave = useCallback(() => {
    tooltipTimeout = window.setTimeout(() => {
      hideTooltip();
    }, defaultChartParams.tooltip.leaveTimeout);
  }, [hideTooltip]);

  return (
    <SankeyComponentWrapper ref={ref} $width={chartWidth} $height={chartHeight}>
      <SankeyChartWrapper
        $top={
          legendPosition === 'top'
            ? defaultChartParams.legend.horizontal.height +
              defaultChartParams.legend.horizontal.gap
            : 0
        }
      >
        <SankeyHeader $marginBottom={defaultChartParams.header.marginBottom}>
          <CategoryName
            $lineHeight={defaultChartParams.header.categoryName.lineHeight}
            $fontSize={defaultChartParams.header.categoryName.fontSize}
          >
            {dataLabels.source}
          </CategoryName>
          <CategoryName
            $lineHeight={defaultChartParams.header.categoryName.lineHeight}
            $fontSize={defaultChartParams.header.categoryName.fontSize}
          >
            {dataLabels.target}
          </CategoryName>
        </SankeyHeader>

        <svg width={graphWidth} height={graphHeight}>
          {graph?.nodes?.map((node: any) => {
            const isActive = getNodeIsActive(node);
            const fillColor = isActive
              ? theme['neutralText']
              : theme['neutralTextWeaker'];
            const strokeColor = isActive
              ? theme['neutralBorder']
              : theme['neutralBorderWeakest'];
            const lineHeight = 16;
            const yPadding = 4;
            const xCoord =
              node.depth === maxDepth ? node.x0 + 23 : node.x1 - 24;
            const yCoord = node.y0 + yPadding;

            const nodeMaxValue = getNodeMaxValue(node);
            const colorScale = scaleLinear<string>({
              range: colorScaleRange,
              domain: [0, nodeMaxValue],
            });

            return (
              <Fragment key={node.name}>
                {/* Node Axis Line */}
                <line
                  x1={node.x0 + (node?.sourceLinks?.length ? 0 : -22)}
                  y1={node.y0}
                  x2={node.x1 + (node?.sourceLinks?.length ? 24 : 2)}
                  y2={node.y0}
                  stroke={strokeColor}
                />

                {/* Node Label */}
                <Text
                  dx={xCoord}
                  dy={yCoord}
                  fill={fillColor}
                  fontSize={12}
                  lineHeight={lineHeight}
                  onClick={() => handleSelect(node)}
                  style={{
                    userSelect: 'none',
                    fontWeight: isActive ? 600 : 400,
                  }}
                  textAnchor={node.depth === maxDepth ? 'end' : 'start'}
                  verticalAnchor="start"
                >
                  {node.name}
                </Text>

                {/* Links & Bars */}
                {node?.sourceLinks.map((link: any, linkIndex: number) => {
                  const nodeData = link.source.sourceLinks.find(
                    _ => _.index === link.index
                  );
                  const sourceNode = nodeData.source;
                  const targetNode = nodeData.target;
                  const sourceYGap = linkIndex ? 2 : 0;
                  const targetYGap =
                    targetNode.targetLinks
                      .map(_ => _.index)
                      .indexOf(link.index) !== 0
                      ? 1
                      : 0;

                  const mainColor = colorScale(link.value);
                  const mainColorHex = convert.rgb.hex(
                    mainColor.replace('rgb(', '').replace(')', '').split(', ')
                  );
                  const strokeColor = activeLinks.has(link)
                    ? hexToRGBA(mainColorHex, 1)
                    : hexToRGBA(mainColorHex, 0.5);

                  const sourceNodeXCoord = sourceNode.x0 + 52;
                  const sourceNodeYCoord =
                    link.y0 - link.width / 2 + sourceYGap;
                  const targetNodeXCoord = targetNode.x0 - 38;
                  const targetNodeYCoord =
                    link.y1 - link.width / 2 + targetYGap;

                  return (
                    <Fragment
                      key={`${link.source.name?.trim()}-${link.target.name?.trim()}-${linkIndex}`}
                    >
                      {/* Source Bar */}
                      <Bar
                        x={sourceNodeXCoord as number}
                        y={sourceNodeYCoord as number}
                        height={link.width}
                        width={node.x1 - node.x0 - 12}
                        onClick={() => handleSelect(node)}
                        fill={strokeColor}
                      />

                      {/* Link */}
                      <LinkHorizontal
                        data={link}
                        source={(l: any) => ({
                          x: l.source.x1 + 42,
                          y: l.y0 + sourceYGap,
                        })}
                        target={(l: any) => ({
                          x: l.target.x0 - 40,
                          y: l.y1 + targetYGap,
                        })}
                        name={link.value}
                        x={n => n.x}
                        y={n => n.y}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth={link.width}
                        onClick={() => handleSelect(node)}
                        {...(handleMouseMove
                          ? {
                              onMouseMove: event => {
                                handleMouseMove(event, {
                                  color: mainColor,
                                  data: {
                                    source: link?.source?.name,
                                    target: link?.target?.name,
                                    value: link.value,
                                  },
                                });
                              },
                              onTouchMove: event => {
                                handleMouseMove(event, {
                                  color: mainColor,
                                  data: {
                                    source: link?.source?.name,
                                    target: link?.target?.name,
                                    value: link.value,
                                  },
                                });
                              },
                            }
                          : {})}
                        {...(handleMouseLeave
                          ? {
                              onMouseLeave: handleMouseLeave,
                              onTouchEnd: handleMouseLeave,
                            }
                          : {})}
                      />

                      {/* Target Bar */}
                      <Bar
                        x={targetNodeXCoord as number}
                        y={targetNodeYCoord as number}
                        height={link.width}
                        width={node.x1 - node.x0 - 12}
                        onClick={() => handleSelect(node)}
                        fill={strokeColor}
                      />

                      {/* Link Label */}
                      {activeLinks.has(link) &&
                        linksLabels.push(
                          <foreignObject
                            x={targetNodeXCoord as number}
                            y={targetNodeYCoord as number}
                            width="0"
                            height="0"
                            style={{
                              position: 'relative',
                              overflow: 'visible',
                              pointerEvents: 'none',
                              userSelect: 'none',
                            }}
                          >
                            <LinkValueLabelWrapper>
                              {(valueFormatter && valueFormatter(link.value)) ??
                                link.value}
                            </LinkValueLabelWrapper>
                          </foreignObject>
                        )}
                    </Fragment>
                  );
                })}
              </Fragment>
            );
          })}

          {linksLabels.map(component => component)}
        </svg>
      </SankeyChartWrapper>

      {legendPosition && (
        <LegendStyledWrapper
          {...(legendPosition === 'top'
            ? {
                $top: 0,
                $left: 0,
                $width: chartWidth,
              }
            : {})}
          {...(legendPosition === 'bottom'
            ? {
                $bottom: 0,
                $left: 0,
                $width: chartWidth,
              }
            : {})}
        >
          <ColorRangeLegend
            colorScaleRange={colorScaleRange}
            gap={defaultChartParams.legend.horizontal.gap}
          />
        </LegendStyledWrapper>
      )}

      {withTooltip && tooltipOpen && tooltipData && (
        <TooltipWithBounds
          top={tooltipTop}
          left={tooltipLeft}
          style={tooltipStyles}
        >
          <div>
            {dataLabels.source}: <b>{tooltipData.data.source}</b>
          </div>
          <div>
            {dataLabels.target}: <b>{tooltipData.data.target}</b>
          </div>
          <div>
            {dataLabels.value}:{' '}
            <b>
              {(valueFormatter && valueFormatter(tooltipData.data.value)) ??
                tooltipData.data.value}
            </b>
          </div>
        </TooltipWithBounds>
      )}
    </SankeyComponentWrapper>
  );
};
