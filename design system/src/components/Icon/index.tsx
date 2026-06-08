import { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { IconProps } from './types';
import * as Icons from './IconsList';

const IconWrapper = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.neutral.icon.weaker};

  &.icon--clickable:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.icon.default || '#2C33C8'};
  }

  svg {
    display: block;
  }
`;

export const Icon: FC<IconProps> = ({
  className = '',
  iconName,
  onClick,
  ...args
}) => {
  const SvgIcon = Icons[iconName];

  return (
    <IconWrapper
      className={`${className} ${onClick ? 'icon--clickable' : ''}`}
      onClick={onClick as unknown as MouseEventHandler<HTMLSpanElement>}
    >
      <SvgIcon {...args} />
    </IconWrapper>
  );
};
