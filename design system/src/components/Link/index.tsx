import { ReactNode } from 'react';

import { StyledLink } from './styles';

export type LinkProps = {
	size: 'md' | 'sm';
	disabled?: boolean;
	href?: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	variant: 'default' | 'error' | 'empty';
	leftIcon?: ReactNode;
	icon?: ReactNode;
	label?: string;
	selected?: boolean;
};

export const Link = ({
	label,
	size = 'md',
	variant = 'default',
	disabled,
	href,
	leftIcon,
	icon,
	onClick,
	selected,
}: LinkProps) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (disabled || !onClick) {
			return;
		}
		onClick(e);
	};

	return (
		<StyledLink
			$size={size}
			$variant={variant}
			$disabled={disabled}
			$selected={selected}
			onClick={handleClick}
			href={disabled ? undefined : href}
		>
			{icon}
			{label && <p>{label}</p>}
			{leftIcon}
		</StyledLink>
	);
};
