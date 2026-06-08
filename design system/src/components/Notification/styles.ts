import styled, { css } from "styled-components";
import { NotificationVariant } from "./index";
import { hexToAlpha } from "../../utils/hexToAlpha";

export const ToastIconContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: ${({ theme }) => theme.spacing['3xs']};
	border-radius: ${({ theme }) => theme.radii['2xs']};
`;

export const ToastCloseButton = styled.button`
	position: absolute;
	top: ${({ theme }) => theme.spacing['sm']};
	right: ${({ theme }) => theme.spacing['sm']};
	width: ${({ theme }) => theme.spacing['md']};
	height: ${({ theme }) => theme.spacing['md']};
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const ToastContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing['2xs']};
`;

export const ToastTitle = styled.div`
	p{
		padding: 0;
		margin: 0;
	}
`;

export const ToastDescription = styled.div`
	p{
		padding: 0;
		margin: 0;
	}
`;

export const ToastTime = styled.div`
	p{
		padding: 0;
		margin: 0;
	}
`;

export const ToastNotificationContent = styled.div<{ $variant: NotificationVariant }>`
	display: flex;
	position: relative;
	gap: ${({ theme }) => theme.spacing['sm']};
	padding: ${({ theme }) => theme.spacing['sm']};
	border-radius: ${({ theme }) => theme.radii['sm']};
	width: 100%;
	height: 100%;
	border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
	background-color: ${({ theme }) => theme.colors.neutral.background.base};

	${({ $variant }) => $variant === 'success' && css`
		border-color: ${({ theme }) => theme.colors.system.success.border.default};
		& ${ToastIconContainer} {
			background-color: ${({ theme }) => theme.colors.system.success.background.transparent};
			svg {
				color: ${({ theme }) => theme.colors.system.success.icon.default};
			}
		}
	`}

	${({ $variant }) => $variant === 'error' && css`
		border-color: ${({ theme }) => theme.colors.system.error.border.default};
		& ${ToastIconContainer} {
			background-color: ${({ theme }) => theme.colors.system.error.background.transparent};
			svg {
				color: ${({ theme }) => theme.colors.system.error.icon.default};
			}
		}
	`}

	${({ $variant }) => $variant === 'warning' && css`
		border-color: ${({ theme }) => theme.colors.system.warning.border.default};
		& ${ToastIconContainer} {
			background-color: ${({ theme }) => theme.colors.system.warning.background.transparent};
			svg {
				color: ${({ theme }) => theme.colors.system.warning.icon.default};
			}
		}
	`}

	${({ $variant }) => $variant === 'info' && css`
		border-color: ${({ theme }) => theme.colors.system.info.border.default};
		& ${ToastIconContainer} {
			background-color: ${({ theme }) => theme.colors.system.info.background.transparent};
			svg {
				color: ${({ theme }) => theme.colors.system.info.icon.default};
			}
		}
	`}
`;

export const BannerIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ theme }) => theme.spacing['3xs']};
	border-radius: ${({ theme }) => theme.radii['2xs']};
`;

export const BannerNotificationContent = styled.div<{ $variant: NotificationVariant }>`
	display: flex;
	position: relative;
	gap: ${({ theme }) => theme.spacing['sm']};
	padding: ${({ theme }) => theme.spacing['sm']};
	/* border-radius: ${({ theme }) => theme.radii['sm']}; */
	width: 100%;
	height: 100%;
	border-left: 3px solid ${({ theme }) => theme.colors.neutral.background.default};
	background-color: ${({ theme }) => theme.colors.neutral.background.baseInverted};
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		width: 32px;
	}
	${({ $variant }) => $variant === 'success' && css`
		border-color: ${({ theme }) => theme.colors.system.success.background.default};
		&::before {
			background:${({ theme }) => `linear-gradient(90deg,${hexToAlpha(theme.colors.system.success.icon.inverted, 20)} 0%, ${hexToAlpha(theme.colors.system.success.icon.inverted, 0)} 100%);`}
		}
		& ${BannerIconContainer} {
			svg {
				color: ${({ theme }) => theme.colors.system.success.icon.inverted};
			}
		}
	`}

	${({ $variant }) => $variant === 'error' && css`
		border-color: ${({ theme }) => theme.colors.system.error.background.default};
		&::before {
			background:${({ theme }) => `linear-gradient(90deg,${hexToAlpha(theme.colors.system.error.icon.inverted, 20)} 0%, ${hexToAlpha(theme.colors.system.error.icon.inverted, 0)} 100%);`}
		}
		& ${BannerIconContainer} {
			svg {
				color: ${({ theme }) => theme.colors.system.error.icon.inverted};
			}
		}
	`}

	${({ $variant }) => $variant === 'warning' && css`
		border-color: ${({ theme }) => theme.colors.system.warning.background.default};
		&::before {
			background:${({ theme }) => `linear-gradient(90deg,${hexToAlpha(theme.colors.system.warning.icon.inverted, 20)} 0%, ${hexToAlpha(theme.colors.system.warning.icon.inverted, 0)} 100%);`}
		}
		& ${BannerIconContainer} {
			svg {
				color: ${({ theme }) => theme.colors.system.warning.icon.inverted};
			}
		}
	`}

	${({ $variant }) => $variant === 'info' && css`
		border-color: ${({ theme }) => theme.colors.system.info.background.default};
		&::before {
			background:${({ theme }) => `linear-gradient(90deg,${hexToAlpha(theme.colors.system.info.icon.inverted, 20)} 0%, ${hexToAlpha(theme.colors.system.info.icon.inverted, 0)} 100%);`}
		}
		& ${BannerIconContainer} {
			svg {
				color: ${({ theme }) => theme.colors.system.info.icon.inverted};
			}
		}
	`}
`;

export const BannerCloseButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: ${({ theme }) => theme.spacing['sm']};
	width: ${({ theme }) => theme.spacing['md']};
	height: ${({ theme }) => theme.spacing['md']};
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;


export const BannerNotificationText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	p{
		padding: 0;
		margin: 0;
		text-align: center;
		color: ${({ theme }) => theme.colors.neutral.text.inverted.default}!important;
	}
`;

export const InlineNotificationContent = styled.div<{ $variant: NotificationVariant }>`
	display: flex;
	position: relative;
	gap: ${({ theme }) => theme.spacing['sm']};
	padding: ${({ theme }) => theme.spacing['sm']};
	border-radius: ${({ theme }) => theme.radii['sm']};
	width: 100%;
	height: 100%;

	${({ $variant }) => $variant === 'success' && css`
			background-color: ${({ theme }) => theme.colors.system.success.background.transparent};
			svg {
				color: ${({ theme }) => theme.colors.system.success.icon.default};
			}
	`}

	${({ $variant }) => $variant === 'error' && css`
			background-color: ${({ theme }) => theme.colors.system.error.background.transparent};
			svg {
				color: ${({ theme }) => theme.colors.system.error.icon.default};
			}
	`}

	${({ $variant }) => $variant === 'warning' && css`
			background-color: ${({ theme }) => theme.colors.system.warning.background.transparent};
			svg {
				color: ${({ theme }) => theme.colors.system.warning.icon.default};
			}
	`}

	${({ $variant }) => $variant === 'info' && css`
			background-color: ${({ theme }) => theme.colors.system.info.background.transparent};
			svg {
				color: ${({ theme }) => theme.colors.system.info.icon.default};
			}
	`}
`;

export const InlineIconContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: ${({ theme }) => theme.spacing['3xs']};
	border-radius: ${({ theme }) => theme.radii['2xs']};
`;

export const InlineContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing['2xs']};
`;

export const InlineTitle = styled.div`
	p{
		padding: 0;
		margin: 0;
	}
`;

export const InlineDescription = styled.div`
	p{
		padding: 0;
		margin: 0;
	}
`;
export const InlineTime = styled.div`
	p{
		padding: 0;
		margin: 0;
	}
`;