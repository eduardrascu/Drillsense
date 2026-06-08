import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';

import { Description, StyledTooltip, Title, TooltipContent } from './styles';

export interface TooltipProps {
	title?: string;
	description?: string;
	event?: React.MouseEvent;
	data?: Record<string, string>;
}

export const Tooltip = ({
	event,
	title,
	description,
	children,
}: PropsWithChildren<TooltipProps>) => {
	const tooltipRef = useRef<HTMLDivElement>(null);
	const tooltipWidth = tooltipRef.current?.clientWidth || 0;
	const tooltipHeight = tooltipRef.current?.clientHeight || 0;

	const { pageX = 0, pageY = 0, clientX = 0, clientY = 0 } = event || {};

	const triangleHeight = 8;
	const triangleWidth = 6;
	const defaultTriangleOffsetX = 25;
	const defaultTriangleOffsetY = "100%";
	const defaultTriangleSide = "bottom";

	const offsetX = defaultTriangleOffsetX;
	const offsetY = triangleHeight;
	const tooltipEdgeSpacing = 5;

	const [position, setPosition] = useState({
		top: pageY,
		left: pageX - offsetX,
	});
	const [trianglePosition, setTrianglePosition] = useState({
		left: `${defaultTriangleOffsetX}px`,
		top: defaultTriangleOffsetY,
		side: defaultTriangleSide,
	} as any);

	const calcPointerPosition = useCallback(() => {
		let newX = pageX - offsetX;
		let newY = pageY - tooltipHeight - offsetY;
		let isAtEdge = false;
		let triangleLeftPosition = defaultTriangleOffsetX;
		let triangleTopPosition = defaultTriangleOffsetY;
		let triangleSide = defaultTriangleSide;

		// Horizontal edge detection
		if (clientX + tooltipWidth + tooltipEdgeSpacing >= window.innerWidth) {
			newX = window.innerWidth - tooltipWidth - tooltipEdgeSpacing - offsetX;
			isAtEdge = true;
		} else if (clientX - offsetX <= tooltipEdgeSpacing) {
			newX = tooltipEdgeSpacing;
			isAtEdge = true;
		}

		// Vertical edge detection
		if (tooltipHeight + triangleHeight + tooltipEdgeSpacing >= clientY) {
			newY = pageY + triangleHeight;
			triangleTopPosition = `${-triangleHeight}px`;
			triangleSide = "top";
		}

		// Triangle edge detection
		if (isAtEdge) {
			triangleLeftPosition = Math.min(
				Math.max(clientX - newX, tooltipEdgeSpacing + triangleWidth / 2),
				tooltipWidth - tooltipEdgeSpacing - triangleWidth / 2
			);
		}

		setTrianglePosition({
			left: `${triangleLeftPosition}px`,
			top: triangleTopPosition,
			side: triangleSide,
		});

		setPosition({ top: newY, left: newX });
	}, [
		pageX,
		offsetX,
		pageY,
		tooltipHeight,
		offsetY,
		clientX,
		tooltipWidth,
		clientY,
	]);

	useEffect(() => {
		calcPointerPosition();
	}, [calcPointerPosition]);

	return (
		<StyledTooltip
			ref={tooltipRef}
			style={{ top: position.top, left: position.left }}
			$triangleLeft={trianglePosition.left}
			$triangleTop={trianglePosition.top}
			$triangleSide={trianglePosition.side}
		>
			<TooltipContent>
				{title && <Title>{title}</Title>}
				{description && <Description>{description}</Description>}
			</TooltipContent>
			{children}
		</StyledTooltip>
	);
};
