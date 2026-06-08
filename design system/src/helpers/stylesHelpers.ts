import { css } from 'styled-components';

export const handleLinkSize = (size: string | undefined) => {
	switch (size) {
		case 'small':
			return 14;
		case 'medium':
			return 16;
		default:
			return 16;
	}
};

export const searchBarWidth = (size: string | undefined) => {
	switch (size) {
		case 'xs':
			return '200px';
		case 'small':
			return '240px';
		case 'medium':
			return '280px';
		case 'large':
			return '320px';
		default:
			return '100%';
	}
};

const borders = {
	right: {
		topRight: '100%',
		bottomRight: '100%',
		topLeft: '0%',
		bottomLeft: '0%',
	},
	left: {
		topRight: '0%',
		bottomRight: '0%',
		topLeft: '100%',
		bottomLeft: '100%',
	},
	top: {
		topRight: '100%',
		bottomRight: '0%',
		topLeft: '100%',
		bottomLeft: '0%',
	},
	bottom: {
		topRight: '0%',
		bottomRight: '100%',
		topLeft: '0%',
		bottomLeft: '100%',
	},
};

export const mapButtonOrientation = (position: string | undefined) => {
	switch (position) {
		case 'left':
			return borders.left;
		case 'right':
			return borders.right;
		case 'top':
			return borders.top;
		case 'bottom':
			return borders.bottom;
		default:
			return borders.left;
	}
};

export const chipSizes = (size: string | undefined) => {
	switch (size) {
		case 'l': {
			return {
				padding: '10px',
				gap: '10px',
			};
		}
		case 'm': {
			return {
				padding: '9px',
				gap: '8px',
			};
		}
		case 's': {
			return {
				padding: '5px',
				gap: '6px',
			};
		}
		case 'xs': {
			return {
				padding: '3px',
				gap: '4px',
			};
		}
		case '2xs': {
			return {
				padding: '0px',
				gap: '4px',
			};
		}
		default: {
			return {
				padding: '5px',
				gap: '6px',
			};
		}
	}
};

export const chipTextSizes = (size: string | undefined) => {
	switch (size) {
		case 'l':
			return '14px';
		case 'm':
		case 's':
		case 'xs':
			return '12px';
		case '2xs':
			return '11px';
		default:
			return '12px';
	}
};

export const positionYStyles = (position: string, size: string) => {
	switch (position) {
		case 'bottom-left':
		case 'bottom-middle':
		case 'bottom-right': {
			return css`
        rotate: 180deg;
        bottom: -${size};
      `;
		}
		case 'top-left':
		case 'top-middle':
		case 'top-right': {
			return css`
        top: -${size};
      `;
		}
		case 'left-top': {
			return css`
        rotate: -90deg;
        top: ${size};
      `;
		}
		case 'left-middle': {
			return css`
        rotate: -90deg;
        top: 43%;
      `;
		}
		case 'left-bottom': {
			return css`
        rotate: -90deg;
        bottom: ${size};
      `;
		}
		case 'right-top': {
			return css`
        rotate: 90deg;
        top: ${size};
      `;
		}
		case 'right-middle': {
			return css`
        rotate: 90deg;
        top: 45%;
      `;
		}
		case 'right-bottom': {
			return css`
        rotate: 90deg;
        bottom: ${size};
      `;
		}
		default:
			return null;
	}
};

export const positionBeforeStyles = (position: string) => {
	switch (position) {
		case 'left-top': {
			return css`
        left: -8px;
        width: 13px;
        top: 10px;
      `;
		}
		case 'left-middle': {
			return css`
        left: -8px;
        width: 13px;
        top: 43%;
      `;
		}
		case 'left-bottom': {
			return css`
        left: -8px;
        width: 13px;
        bottom: 10px;
      `;
		}
		case 'right-top': {
			return css`
        top: 10px;
        right: -8px;
        width: 13px;
      `;
		}
		case 'right-middle': {
			return css`
        right: -8px;
        width: 13px;
        top: 45%;
      `;
		}
		case 'right-bottom': {
			return css`
        right: -8px;
        width: 13px;
        bottom: 10px;
      `;
		}
		default:
			return null;
	}
};

export const positionBeforeAndAfterStyles = (position: string) => {
	switch (position) {
		case 'top-left': {
			return css`
        left: 15px;
        transform: translateX(-50%);
      `;
		}
		case 'top-middle': {
			return css`
        left: 50%;
        transform: translateX(-50%);
      `;
		}
		case 'top-right': {
			return css`
        right: 5px;
        transform: translateX(-50%);
      `;
		}
		case 'bottom-left': {
			return css`
        left: 5px;
        transform: translateX(-50%);
      `;
		}
		case 'bottom-middle': {
			return css`
        right: 50%;
        transform: translateX(-50%);
      `;
		}
		case 'bottom-right': {
			return css`
        right: 17px;
        transform: translateX(-50%);
      `;
		}
		case 'left-top':
		case 'left-middle':
		case 'left-bottom': {
			return css`
        left: -6px;
        transform: translateY(-50%);
      `;
		}
		case 'right-top':
		case 'right-middle':
		case 'right-bottom': {
			return css`
        right: -6px;
        transform: translateY(-50%);
      `;
		}
		default:
			return null;
	}
};

export const positionTooltipStyles = (position: string) => {
	switch (position) {
		case 'top-left': {
			return css`
        transform: translateX(40%) translateY(50%);
      `;
		}
		case 'top-middle': {
			return css`
        transform: translateX(0) translateY(50%);
      `;
		}
		case 'top-right': {
			return css`
        transform: translateX(-35%) translateY(50%);
      `;
		}
		case 'bottom-left': {
			return css`
        transform: translateX(40%) translateY(-50%);
      `;
		}
		case 'bottom-middle': {
			return css`
        transform: translateX(0%) translateY(-50%);
      `;
		}
		case 'bottom-right': {
			return css`
        transform: translateX(-35%) translateY(-50%);
      `;
		}
		case 'left-top': {
			return css`
        transform: translateX(50%) translateY(30%);
      `;
		}
		case 'left-middle': {
			return css`
        transform: translateX(50%) translateY(0);
      `;
		}
		case 'left-bottom': {
			return css`
        transform: translateX(50%) translateY(-30%);
      `;
		}
		case 'right-top': {
			return css`
        transform: translateX(-50%) translateY(30%);
      `;
		}
		case 'right-middle': {
			return css`
        transform: translateX(-50%) translateY(0);
      `;
		}
		case 'right-bottom': {
			return css`
        transform: translateX(-50%) translateY(-30%);
      `;
		}
		default:
			return null;
	}
};