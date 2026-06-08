import { DividerContainer, DividerDot, DividerLine } from './styles';
import { FC } from 'react';

export interface DividerProps {
  withDot?: boolean;
  className?: string;
}

export const Divider: FC<DividerProps> = ({ withDot = false, className }) => {
  return (
    <DividerContainer className={className}>
      <DividerLine />
      {withDot && <DividerDot />}
      <DividerLine />
    </DividerContainer>
  );
};
