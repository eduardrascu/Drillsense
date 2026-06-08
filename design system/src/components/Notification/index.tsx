import {
  toast,
  ToastContainer,
  ToastContainerProps,
  ToastOptions,
  ToastContent,
  Id,
} from 'react-toastify';
import React from 'react';
import {
  BannerIconContainer,
  BannerNotificationContent,
  BannerNotificationText,
  InlineContentContainer,
  InlineDescription,
  InlineIconContainer,
  InlineNotificationContent,
  ToastCloseButton,
  ToastContentContainer,
  ToastDescription,
  ToastIconContainer,
  ToastNotificationContent,
  ToastTime,
  ToastTitle,
  InlineTitle,
  InlineTime,
} from './styles';
// import 'react-toastify/dist/ReactToastify.css';
import { Icon } from '../Icon';
import { IconNameType } from '../Icon/types';
import { Typography } from '../Typography';

export type NotificationVariant =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'neutral';

export type NotificationType = 'toast' | 'inline' | 'banner';

export interface NotificationContainerProps extends ToastContainerProps {}

export interface CustomNotificationProps {
  // display?: 'absolute' | 'static';
  title?: string;
  description?: string;
  time?: string;
  action?: React.ReactNode;
  withoutCloseButton?: boolean;
}

export interface CustomToastProps extends CustomNotificationProps {
  closeToast?: () => void;
  variant: NotificationVariant;
  type: NotificationType;
}
export interface CustomInlineProps extends CustomNotificationProps {
  closeToast?: () => void;
  variant: NotificationVariant;
  type: NotificationType;
}
export interface CustomBannerProps extends CustomNotificationProps {
  closeToast?: () => void;
  variant: NotificationVariant;
  type: NotificationType;
}

export interface NotificationProps extends CustomNotificationProps {
  content?: ToastContent<unknown>;
  variant: NotificationVariant;
  type: NotificationType;
  options?: ToastOptions<unknown> | undefined;
}

export interface UpdateNotificationProps
  extends Partial<CustomNotificationProps> {
  content?: ToastContent<unknown>;
  variant?: NotificationVariant;
  type?: NotificationType;
  options?: Partial<ToastOptions<unknown>>;
}

export function NotificationContainer(props: NotificationContainerProps) {
  return (
    <>
      <style>
        {`
					
				`}
      </style>
      <ToastContainer
        {...props}
        position="bottom-left"
        // containerId="V2"
        draggable
        style={{ height: 'auto' }}
      />
    </>
  );
}

export const CustomToast = (props: CustomToastProps) => {
  const { title, description, time, action, withoutCloseButton } = props;
  const getIcon = (): IconNameType => {
    switch (props.variant) {
      case 'success':
        return 'CheckMarkFilled';
      case 'error':
        return 'WarningFilled';
      case 'warning':
        return 'WarningFilled';
      case 'info':
        return 'InfoFilled';
      default:
        return 'InfoFilled';
    }
  };
  return (
    <ToastNotificationContent $variant={props.variant}>
      <ToastIconContainer>
        <Icon iconName={getIcon()} />
      </ToastIconContainer>
      <ToastContentContainer>
        {title && (
          <ToastTitle>
            <Typography
              type="body"
              variant="neutral"
              size="md"
              weight="semibold"
            >
              {title}
            </Typography>
          </ToastTitle>
        )}
        {description && (
          <ToastDescription>
            <Typography
              type="body"
              variant="neutral"
              size="sm"
              weight="regular"
            >
              {description}
            </Typography>
          </ToastDescription>
        )}
        {time && (
          <ToastTime>
            <Typography
              type="body"
              color="weak"
              variant="neutral"
              size="sm"
              weight="regular"
            >
              {time}
            </Typography>
          </ToastTime>
        )}
        {action && action}
      </ToastContentContainer>
      {!withoutCloseButton && (
        <ToastCloseButton onClick={props.closeToast}>
          <Icon iconName="X" width={8} height={8} />
        </ToastCloseButton>
      )}
    </ToastNotificationContent>
  );
};

export const CustomInline = (props: CustomInlineProps) => {
  const { title, description, time, action, variant } = props;
  const getIcon = (): IconNameType => {
    switch (variant) {
      case 'success':
        return 'CheckMarkFilled';
      case 'error':
        return 'WarningFilled';
      case 'warning':
        return 'WarningFilled';
      case 'info':
        return 'InfoFilled';
      default:
        return 'InfoFilled';
    }
  };
  return (
    <InlineNotificationContent $variant={variant}>
      <InlineIconContainer>
        <Icon iconName={getIcon()} />
      </InlineIconContainer>
      <InlineContentContainer>
        {title && (
          <InlineTitle>
            <Typography
              type="body"
              variant="neutral"
              size="md"
              weight="semibold"
            >
              {title}
            </Typography>
          </InlineTitle>
        )}
        {description && (
          <InlineDescription>
            <Typography
              type="body"
              variant="neutral"
              size="sm"
              weight="regular"
            >
              {description}
            </Typography>
          </InlineDescription>
        )}
        {time && (
          <InlineTime>
            <Typography
              type="body"
              color="weak"
              variant="neutral"
              size="sm"
              weight="regular"
            >
              {time}
            </Typography>
          </InlineTime>
        )}
        {action && action}
      </InlineContentContainer>
    </InlineNotificationContent>
  );
};

const CustomBanner = (props: CustomBannerProps) => {
  const { title, withoutCloseButton } = props; //, description, time, action
  const getIcon = (): IconNameType => {
    switch (props.variant) {
      case 'success':
        return 'CheckMarkFilled';
      case 'error':
        return 'WarningFilled';
      case 'warning':
        return 'WarningFilled';
      case 'info':
        return 'InfoFilled';
      default:
        return 'InfoFilled';
    }
  };
  return (
    <BannerNotificationContent $variant={props.variant}>
      <BannerIconContainer>
        <Icon iconName={getIcon()} />
      </BannerIconContainer>
      <BannerNotificationText>
        <Typography
          type="body"
          variant="neutral"
          color="weakest"
          size="md"
          weight="regular"
        >
          {title}
        </Typography>
      </BannerNotificationText>
      {!withoutCloseButton && (
        <ToastCloseButton onClick={props.closeToast}>
          <Icon iconName="X" width={8} height={8} />
        </ToastCloseButton>
      )}
    </BannerNotificationContent>
  );
};

const NotificationComponents = {
  toast: CustomToast,
  inline: CustomInline,
  banner: CustomBanner,
};

export const CustomNotification = ({
  closeToast,
  title,
  description,
  time,
  action,
  variant,
  type,
  withoutCloseButton,
}: CustomToastProps) => {
  const Component = NotificationComponents[type];
  return (
    <Component
      // display={display}
      withoutCloseButton={withoutCloseButton}
      closeToast={closeToast}
      title={title}
      description={description}
      time={time}
      action={action}
      variant={variant}
      type={type}
    />
  );
};

export const showNotification = (props: NotificationProps): Id => {
  return toast(
    toastProps => {
      if (props.content) {
        return typeof props.content === 'function'
          ? props.content(toastProps)
          : props.content;
      }
      return (
        <CustomNotification
          {...props}
          withoutCloseButton={props.withoutCloseButton}
          variant={props.variant}
          type={props.type}
          closeToast={toastProps.toastProps.closeToast ?? toastProps.closeToast}
          title={props.title}
          description={props.description}
          time={props.time}
          action={props.action}
        />
      );
    },
    {
      ...props.options,
      style: {
        padding: 0,
        opacity: 1,
      },
    }
  );
};

export const updateNotification = (toastId: string, updateProps: any): void => {
  const renderContent = (toastProps: any) => {
    if (updateProps.content) {
      return typeof updateProps.content === 'function'
        ? updateProps.content(toastProps)
        : updateProps.content;
    }
    return (
      <CustomNotification
        variant={updateProps.variant || 'info'}
        type={updateProps.type || 'toast'}
        {...updateProps}
        closeToast={toastProps.closeToast}
      />
    );
  };

  toast.update(toastId, {
    ...updateProps.options,
    render: renderContent,
    style: {
      padding: 0,
      opacity: 1,
    },
  });
};
