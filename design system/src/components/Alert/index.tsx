import {
  AlertContainer,
  AlertContent,
  AlertHeading,
  AlertText,
  IconWrapper,
} from './styles';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertMessageProps {
  type: AlertType;
  heading?: string;
  message: string;
  className?: string;
}

export function AlertMessage({
  type,
  heading,
  message,
  className,
}: AlertMessageProps) {
  return (
    <AlertContainer role="alert" $type={type} className={className}>
      <AlertContent>
        <IconWrapper>
          <Icon iconName={IconName.DANGER_INFO} />
        </IconWrapper>
        <div>
          {heading && <AlertHeading>{heading}</AlertHeading>}
          <AlertText>{message}</AlertText>
        </div>
      </AlertContent>
    </AlertContainer>
  );
}
