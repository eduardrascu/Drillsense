import { InputHTMLAttributes } from 'react';
import { ToggleSwitchWrapper, ToggleInput, Slider, Label } from './styles';
import { ToggleSize } from './types';

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	size: ToggleSize;
	isInvalid?: boolean;
	label?: string;
	disabled?: boolean;
	labelPosition?: 'left' | 'right';
}

export const Toggle= ({
	size,
	isInvalid,
	label,
	labelPosition = 'right',
	...props
}: ToggleProps) => {
	return (
		<ToggleSwitchWrapper $isInvalid={isInvalid} $disabled={props.disabled} $size={size} $labelPosition={labelPosition}>
			{label && labelPosition === 'left' && <Label $size={size}>{label}</Label>}
			<ToggleInput {...props} type="checkbox" />
			<Slider />
			{label && labelPosition === 'right' && <Label $size={size}>{label}</Label>}
		</ToggleSwitchWrapper>
	);
};
