import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../';
import { Icon } from '../../Icon';

const meta: Meta<typeof Breadcrumbs> = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
	args: {
		items: [
			{ label: 'Home', icon: <Icon iconName="Code" />, href: '/' },
			{ label: '...', href: '#' },
			{ label: 'Breadcrumb1', href: '/breadcrumb1' },
			{ label: 'Breadcrumb2', href: '/breadcrumb2' },
			{ label: 'Breadcrumb3', href: '/breadcrumb3' },
			{ label: 'Breadcrumb4', href: '/breadcrumb4' },
			{ label: 'Breadcrumb5', href: '/breadcrumb5' },
			{ label: 'Breadcrumb6', href: '/breadcrumb6' },
			{ label: 'Breadcrumb7', href: '/breadcrumb7' },
			{ label: 'Breadcrumb8', href: '/breadcrumb8' },
		],
		maxItems: 6,
	},
};
