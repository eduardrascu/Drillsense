import { fontSizes } from '../themes';

export const avatarSize = (size: string | undefined) => {
  switch (size) {
    case 'xs':
      return '20px';
    case 'sm':
      return '24px';
    case 'md':
      return '36px';
    case 'lg':
      return '44px';
    case 'xl':
      return '96px';
    default:
      return '36px';
  }
};

export const avatarTextSize = (size: string | undefined) => {
  switch (size) {
    case 'xs':
      return fontSizes['2xs'];

    case 'sm':
      return fontSizes.xs;

    case 'md':
      return fontSizes.m;

    case 'lg':
      return fontSizes.l;

    case 'xl':
      return fontSizes['5xl'];

    default:
      return fontSizes.xs;
  }
};

export const avatarTooltipPosition = (size: string | undefined) => {
  switch (size) {
    case 'xss':
      return '32px';
    case 'xs':
      return '36px';
    case 's':
      return '44px';
    case 'm':
      return '48px';
    case 'l':
      return '76px';
    case 'xl':
      return '108px';
    default:
      return '48px';
  }
};
