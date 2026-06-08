import styled, { css } from 'styled-components';

import { avatarSize, avatarTextSize } from '../../helpers/avatar';
import { AvatarSizes } from './types';

export const AvatarWrapper = styled.div<{
  $size: AvatarSizes;
  $selected?: boolean;
  $disabled?: boolean;
}>`
  width: ${({ $size }) => avatarSize($size)};
  height: ${({ $size }) => avatarSize($size)};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  position: relative;

  ${({ $selected }) =>
    $selected &&
    css`
      border-color: ${({ theme }) => theme.colors.primary.border.active};
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      filter: grayscale(100);
      pointer-events: none;
    `};

  &:hover {
    border-color: ${({ theme }) => theme.colors.neutral.border.weak};
    cursor: pointer;
    z-index: 1;
  }
`;

export const StyledImage = styled.img<{
  $size: AvatarSizes;
}>`
  width: ${({ $size }) => avatarSize($size)};
  height: ${({ $size }) => avatarSize($size)};
  border-radius: 8px;
`;

export const StyledInitials = styled.div<{
  $defaultPicture?: string;
  $size: AvatarSizes;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.background.default};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-size: ${({ $size }) => avatarTextSize($size)};

  width: ${({ $size }) => avatarSize($size)};
  height: ${({ $size }) => avatarSize($size)};

  border-radius: 8px;
`;
