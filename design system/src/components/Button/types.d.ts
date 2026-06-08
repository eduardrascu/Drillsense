import { ReactNode } from 'react';
import { TSize } from '../../types/common.types';

export type ButtonProps = {
	label: string;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	rightIcon?: ReactNode;
	leftIcon?: ReactNode;
	variant?:
	| 'primary'
	| 'primary-gray'
	| 'primary-dark'
	| 'secondary'
	| 'secondary-gray'
	| 'tertiary'
	| 'ghost'
	| 'ghost-gray'
	| 'error'
	| 'empty';
	size?: TSize;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	iconOnly?: boolean;
	fullWidth?: boolean;
	onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
	onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
};
