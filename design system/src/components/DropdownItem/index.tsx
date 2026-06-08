import React, { ChangeEvent } from 'react';
import { AvatarProps } from '../Avatar/types';
import { BadgeProps } from '../Badge/types';
import { Checkbox, CheckboxProps } from '../Checkbox';
import { DropdownItemContainer, DropdownItemTextContainer } from './styles';
import { Typography } from '../Typography';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { IconNameType } from '../Icon/types';
import { Icon } from '../Icon';

export interface DropdownItemProps extends CheckboxProps {
  title: string;
  description: string;
  iconLeft?: IconNameType;
  iconRight?: IconNameType;
  avatar?: AvatarProps
  badge?: BadgeProps;
  pallete?: React.ReactNode;
  variant: 'basic' | 'pallete' | 'timestamp'
}

export const BasicDropdownItem = (props: DropdownItemProps) => {
  const { title, description, iconLeft, iconRight, avatar, checked, badge, disabled, ...checkboxProps } = props;
  return (
    <DropdownItemContainer $disabled={disabled ?? false} $checked={checked ?? false} onClick={() => !disabled && checkboxProps.onChange?.({ target: { checked: !checked } } as ChangeEvent<HTMLInputElement>)}>
      {!!iconLeft && <Icon iconName={iconLeft} color={disabled ? 'weakest' : 'default'} />}
      <Checkbox {...props} disabled={disabled} checked={checked} />
      {!!avatar && <Avatar {...avatar} disabled={disabled} selected={checked} />}
      <DropdownItemTextContainer>
        {!!title && <Typography variant="neutral" color={disabled ? 'weakest' : 'default'} type="body" weight={checked ? 'semibold' : 'regular'} size="md">{title}</Typography>}
        {!!description && <Typography variant="neutral" color={disabled ? 'weakest' : 'default'} type="body" size="sm">{description}</Typography>}
      </DropdownItemTextContainer>
      {!!badge && <Badge {...badge} selected={checked} disabled={disabled} />}
      {!!iconRight && <Icon iconName={iconRight} color={disabled ? 'weakest' : 'default'} />}
    </DropdownItemContainer>
  );
}

export const PalleteDropdownItem = (props: DropdownItemProps) => {
  const { title, description, pallete, iconLeft, checked, iconRight, disabled, ...checkboxProps } = props;
  return (
    <DropdownItemContainer $disabled={disabled ?? false} $checked={checked ?? false} onClick={() => !disabled && checkboxProps.onChange?.({ target: { checked: !checked } } as ChangeEvent<HTMLInputElement>)}>
      {!!iconLeft && <Icon iconName={iconLeft} color={disabled ? 'weakest' : 'default'} />}
      <DropdownItemTextContainer>
        {!!title && <Typography variant="neutral" type="body" color={disabled ? 'weakest' : 'default'} weight={checked ? 'semibold' : 'regular'} size="md">{title}</Typography>}
        {!!description && <Typography variant="neutral" type="body" color={disabled ? 'weakest' : 'default'} size="sm">{description}</Typography>}
      </DropdownItemTextContainer>
      {/* <PalleteContainer> */}
      {!!pallete && pallete}
      {!!iconRight && <Icon iconName={iconRight} color={disabled ? 'weakest' : 'default'} />}
      {/* </PalleteContainer> */}
    </DropdownItemContainer>
  )
}
export const TimestampDropdownItem = (props: DropdownItemProps) => {
  const { title, description, iconLeft, iconRight, checked, disabled, ...checkboxProps } = props;
  return (
    <DropdownItemContainer $disabled={disabled ?? false} $checked={checked ?? false} onClick={() => !disabled && checkboxProps.onChange?.({ target: { checked: !checked } } as ChangeEvent<HTMLInputElement>)}>
      {!!iconLeft && <Icon iconName={iconLeft} color={disabled ? 'weakest' : 'default'} />}
      <Checkbox {...props} checked={checked} />
      <DropdownItemTextContainer>
        {!!title && <Typography variant="neutral" type="body" color={disabled ? 'weakest' : 'default'} weight={checked ? 'semibold' : 'regular'} size="md">{title}</Typography>}
      </DropdownItemTextContainer>
      {!!description && <Typography variant="neutral" type="body" color={disabled ? 'weakest' : 'default'} size="sm">{description}</Typography>}
      {!!iconRight && <Icon iconName={iconRight} color={disabled ? 'weakest' : 'default'} />}
    </DropdownItemContainer>
  )
}

const variants = {
  basic: BasicDropdownItem,
  pallete: PalleteDropdownItem,
  timestamp: TimestampDropdownItem,
}

export const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  const Variant = variants[props.variant];

  return <Variant {...props} />;
};
