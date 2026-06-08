import { ReactNode } from 'react';

export type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type AvatarProps = {
  size?: AvatarSizes;
  disabled?: boolean;
  selected?: boolean;
  tooltip?: ReactNode;
  picture?: string;
  defaultPicture?: string;
  pictureAlt: string;
  userName: string;
  className?: string;
  onClick?: () => void;
};
