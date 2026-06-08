import { CSSProperties, PropsWithChildren, RefObject } from 'react';
import { IconName } from '@src/components/Icon/types';

export interface ActionItem {
  label: string;
  onClick: () => void;
  icon?: IconName;
  divider?: boolean;
  style?: CSSProperties;
}

export type SlideMenuPosition = 'bottom' | 'top' | 'left' | 'right';

export type SlideMenuDefaultPosition = { top?: number; left?: number };

export interface SlideMenuProps extends PropsWithChildren {
  items?: ActionItem[];
  isOpen: boolean;
  onClose: () => void;
  anchorRef: RefObject<HTMLElement>;
  position?: SlideMenuPosition;
  defaultPosition?: SlideMenuDefaultPosition;
  style?: CSSProperties;
}
