import styled from 'styled-components';

import { Avatar } from '../Avatar';

import { avatarSize } from '../../helpers/avatar';
import { LightNeutralBackgroundBase } from '../../../tokens/tokens';

export const AvatarStack = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const AdditionalCount = styled.div<{
  $size?: 'l' | 'm' | 's';
}>`
  background: #fff;
  border-radius: 50%;
  width: ${({ $size }) => avatarSize($size)};
  height: ${({ $size }) => avatarSize($size)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #333;
  border: 2px solid #fff;
  position: absolute;
  left: ${4 * 13}px;
  z-index: 50;
`;

export const StyledAvatar = styled(Avatar)<{
  $offset: number;
  $size?: 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
}>`
  position: absolute;
  left: ${({ $offset }) => $offset * 13}px;
  border: 2px solid ${LightNeutralBackgroundBase};

  width: ${({ $size }) => avatarSize($size)};
  height: ${({ $size }) => avatarSize($size)};
`;
