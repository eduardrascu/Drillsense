import React from 'react';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';

import {
  SpinnerContainer,
  SpinnerLoading,
  SpinnerDots,
  SpinnerBox,
  SpinnerFinishBox,
} from './styles';

export type SpinnerSizeType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

type Props = {
  size?: SpinnerSizeType;
  isFinish?: boolean;
};

export const Spinner = ({ size = 'md', isFinish = false }: Props) => {
  return (
    <SpinnerContainer>
      {isFinish ? (
        <SpinnerFinishBox $size={size}>
          <Icon iconName={IconName.CHECK_SIMPLE} />
        </SpinnerFinishBox>
      ) : (
        <SpinnerBox>
          <SpinnerLoading $size={size} />
          <SpinnerDots $size={size}>
            <div />
            <div />
            <div />
          </SpinnerDots>
        </SpinnerBox>
      )}
    </SpinnerContainer>
  );
};
