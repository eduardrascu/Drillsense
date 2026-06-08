import React from 'react';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';
import { SpinnerSizeType } from '../Spinner/index';
import {
  SpinnerContainer,
  SpinnerDots,
  SpinnerBox,
  SpinnerFinishBox,
} from '../Spinner/styles';
import { LoaderCircle, loaderStrokeSize } from './styles';

export type LoaderProps = {
  size?: SpinnerSizeType;
  progress: number;
  isFinish?: boolean;
};

export const Loader = ({
  size = 'md',
  progress = 0,
  isFinish = false,
}: LoaderProps) => {
  const strokeWidth = parseInt(loaderStrokeSize[size]);
  const radius = 50 - strokeWidth / 2;

  return (
    <SpinnerContainer>
      {isFinish ? (
        <SpinnerFinishBox $size={size}>
          <Icon iconName={IconName.CHECK_SIMPLE} />
        </SpinnerFinishBox>
      ) : (
        <SpinnerBox>
          <LoaderCircle $size={size} $progress={progress}>
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r={radius} />
              <circle cx="50" cy="50" r={radius} />
            </svg>
          </LoaderCircle>
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
