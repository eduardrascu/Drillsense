import React from 'react';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';

import {
  ProgressBarFill,
  ProgressBarTrack,
  ProgressBarContainer,
  ProgressBarTitleBox,
  ProgressBarTitle,
  ProgressBarProgressPercent,
  ProgressBarInfoText,
} from './styles';

export type ProgressBarSizeType = 'lg' | 'md' | 'sm';
export type ProgressBarType = 'default' | 'accent' | 'error';

export interface ProgressBarProps {
  progress: number;
  type?: ProgressBarType;
  size?: ProgressBarSizeType;
  title?: string;
  infoText?: string;
  errorText?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  type = 'default',
  size = 'md',
  title,
  infoText,
  errorText,
}) => {
  return (
    <ProgressBarContainer>
      {title && (
        <ProgressBarTitleBox>
          <ProgressBarTitle>{title}</ProgressBarTitle>
          <ProgressBarProgressPercent>{progress}%</ProgressBarProgressPercent>
        </ProgressBarTitleBox>
      )}
      <ProgressBarTrack
        $type={type}
        $size={size}
        $hasError={!!errorText || type === 'error'}
      >
        <ProgressBarFill
          $type={type}
          $progress={progress}
          $hasError={!!errorText || type === 'error'}
        />
      </ProgressBarTrack>
      {(infoText || errorText) && (
        <ProgressBarInfoText
          $type={type}
          $hasError={!!errorText || type === 'error'}
        >
          {!!errorText || type === 'error' ? (
            <Icon iconName={IconName.DANGER_INFO} />
          ) : (
            <Icon iconName={IconName.SYSTEM_INFO} />
          )}{' '}
          {errorText || infoText}
        </ProgressBarInfoText>
      )}
    </ProgressBarContainer>
  );
};
