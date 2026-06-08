import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip, TooltipProps } from '../index';
import { PropsWithChildren, useState } from 'react';

type Story = StoryObj<typeof meta>;

const StoryChild = () => {
	return (
		<div>
			<span>TEST</span>
		</div>
	);
};

const meta: Meta<typeof Tooltip> = {
	title: 'Components/Tooltip',
	component: Tooltip,
	argTypes: {
		title: { control: 'text' },
		description: { control: 'text' }
	},
	decorators: [(Story) => <Story />],
	parameters: {

	},
	tags: ['autodocs'],
};

export const Hover: Story = (args: PropsWithChildren<TooltipProps>) => {
	const [event, setEvent] = useState<React.MouseEvent | null>(null);

	const handleMouseMove = (e: React.MouseEvent) => {
		setEvent(e);
	};

	const handleMouseLeave = () => {
		setEvent(null);
	};

	return (
		<div id="tooltip-container" style={{ position: 'relative' }}>
			<div
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					padding: '20px',
					border: '1px solid #ccc',
					display: 'inline-block'
				}}
			>
				Hover me
			</div>
			{event && (
				<Tooltip
					title={args.title}
					description={args.description}
					event={event}
				>
					<StoryChild />
				</Tooltip>
			)}
		</div>
	);
};

Hover.args = {
	title: 'Tooltip Title',
	description: 'Tooltip Description'
};

export const Default: Story = {
	args: {
		title: 'Tooltip Title',
		description: 'Tooltip Description',
		children: <StoryChild />
	},
};

export default meta;
