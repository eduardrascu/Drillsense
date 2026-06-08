import { AvatarProps } from '../Avatar/types';

export type AvatarGroupProps = {
  avatars: AvatarProps[];
  size?: 'l' | 'm' | 's';
  onMouseOver?: () => void;
  onMouseOut?: () => void;
};
