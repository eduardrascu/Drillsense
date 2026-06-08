import type { Meta, StoryObj } from '@storybook/react';
import { showNotification } from '../';
import { NotificationContainer } from '../';

const meta: Meta<typeof showNotification> = {
	title: 'Components/Notification',
	component: showNotification,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return (
				<>
					<NotificationContainer hideProgressBar/>
					<button onClick={() => {
						showNotification({
							title: 'Success' + Math.random(),
							description: 'Operation completed successfully!',
							time: 'Just now',
							variant: 'success',
							type: 'inline',
							action: <div>
								<button>Click me</button>
								<button>Click me</button>
							</div>,
							options: {
								toastId: '123',
								updateId: '123',
								autoClose: 2500,
							},
						});
					}}>Click me</button>
					<Story />
				</>
			);
		},
	],
};

export default meta;
type Story = StoryObj<typeof showNotification>;

export const SuccessToast: Story = {
	args: {
		title: 'Success',
		description: 'Operation completed successfully!',
		time: 'Just now',
		variant: 'success',
		type: 'toast',
		action: <div>
			<button>Click me</button>
			<button>Click me</button>
		</div>
	},
};

export const ErrorToast: Story = {
	args: {
		title: 'Error',
		description: 'Something went wrong. Please try again.',
		time: 'Just now',
		variant: 'error',
		type: 'toast',
	},
};

export const WarningToast: Story = {
	args: {
		title: 'Warning',
		description: 'Please review your changes before proceeding.',
		time: 'Just now',
		variant: 'warning',
		type: 'toast',
	},
};

export const InfoToast: Story = {
	args: {
		title: 'Information',
		description: 'New features are available in the latest update.',
		time: 'Just now',
		variant: 'info',
		type: 'toast',
	},
};

export const WarningInline: Story = {
	args: {
		title: 'Warning',
		description: 'Please review your changes before proceeding.',
		time: 'Just now',
		variant: 'warning',
		type: 'inline',
	},
};

export const InfoBanner: Story = {
	args: {
		title: 'Information',
		description: 'New features are available in the latest update.',
		time: 'Just now',
		variant: 'info',
		type: 'banner',
	},
};
