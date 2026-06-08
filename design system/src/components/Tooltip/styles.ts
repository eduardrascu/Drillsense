import styled from 'styled-components';

type TooltipPosition = "top" | "bottom";
interface StyledTooltipProps {
	$triangleLeft: string;
	$triangleTop: string;
	$triangleSide: TooltipPosition;
}

const getTooltipTriangle = (position: TooltipPosition) => {
	switch (position) {
		case "top":
			return `
        border-right: 5px solid transparent;
        border-bottom: 8px solid white;
        border-left: 5px solid transparent;
      `;
		case "bottom":
		default:
			return `
        border-right: 5px solid transparent;
        border-top: 8px solid white;
        border-left: 5px solid transparent;
      `;
	}
};

const getTooltipTriangleShadow = (position: TooltipPosition) => {
	switch (position) {
		case "top":
			return `
        border-right: 7px solid transparent;
        border-bottom: 8px solid black;
        border-left: 7px solid transparent;
      `;
		case "bottom":
		default:
			return `
        border-right: 7px solid transparent;
        border-top: 8px solid black;
        border-left: 7px solid transparent;
      `;
	}
};

export const StyledTooltip = styled.div<StyledTooltipProps>`
  background: ${({ theme }) => theme.colors.neutral.background.base};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  padding: 8px 12px;
  border-radius: 8px;
  position: absolute;
	display: flex;
	flex-direction: column;
	gap: 8px;
  box-shadow: 0px 2px 4px 0px rgba(20, 28, 44, 0.06),
    0px 4px 8px 2px rgba(20, 28, 44, 0.06);
  color: ${({ theme }) => theme.colors.neutral.text.default};
  pointer-events: none;
  opacity: 0;
  scale: 0.8;
  animation: tooltipAnimation 0.2s forwards;
  z-index: 1000;

	&:after {
    content: "";
    position: absolute;
    top: ${({ $triangleTop }) => $triangleTop ?? "100%"};
    left: ${({ $triangleLeft }) => $triangleLeft};
    width: 0;
    height: 0;
    ${({ $triangleSide }) => getTooltipTriangle($triangleSide)};
    translate: -50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: ${({ $triangleTop }) => $triangleTop ?? "100%"};
    left: ${({ $triangleLeft }) => $triangleLeft};
    opacity: 0.1;
    width: 0;
    height: 0;
    ${({ $triangleSide }) => getTooltipTriangleShadow($triangleSide)};
    translate: -50%;
  }

  @keyframes tooltipAnimation {
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;

export const TooltipContent = styled.div`
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['l']};
  line-height: ${({ theme }) => theme.lineHeights['xl']};
	font-weight: ${({ theme }) => theme.fontWeights['semibold']};
	color: ${({ theme }) => theme.colors.neutral.text.default};
	margin: 0;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights['s']};
	color: ${({ theme }) => theme.colors.neutral.text.weak};
	margin: 0;
`;
