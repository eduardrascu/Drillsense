import * as React from 'react';
import { ProgressBar } from '../ProgressBar';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';

import { FileDots, FileErrorIconBox, FileListBox } from './styles';

type Props = {
  file: File;
  progress: number;
  onCancel?: () => void;
  isError?: boolean;
};

export const FileProgressBar = ({
  file,
  progress = 0,
  onCancel,
  isError = false,
}: Props) => {
  return (
    <FileListBox>
      {isError ? (
        <FileErrorIconBox>
          <Icon iconName={IconName.DANGER_INFO} />
        </FileErrorIconBox>
      ) : (
        <FileDots>
          <div />
          <div />
          <div />
        </FileDots>
      )}
      <ProgressBar
        type={isError ? 'error' : 'accent'}
        progress={progress}
        title={file?.name}
      />

      {onCancel && <Icon iconName={IconName.X} onClick={onCancel} />}
    </FileListBox>
  );
};
