import { TabItem, TabsContainer, TabLabel, TabBadge } from './styles';
import { TabsProps } from './types';

export const Tabs = ({
	tabs,
	activeTab,
	onTabChange,
	variant = 'default',
	size = 'md',
	isIconOnly = false,
	fullWidth = false,
	disabled = false,
}: TabsProps) => {
	return (
		<TabsContainer $fullWidth={fullWidth} $variant={variant} $size={size}>
			{tabs?.map((tab, index, tabs) => (
				<TabItem
					key={tab.id}
					$active={activeTab === tab.id}
					$variant={variant}
					$size={size}
					onClick={() => onTabChange(tab.id)}
					$fullWidth={fullWidth}
					$isIconOnly={isIconOnly}
					$disabled={disabled}
					$isFirstTab={index === 0}
					$isLastTab={index === tabs?.length - 1}
				>
					{tab?.leftIcon}
					<TabLabel
						$hasBadge={!!tab?.badgeCount && !isIconOnly}
						$active={activeTab === tab.id}
					>
						{tab?.label && <p>{tab?.label}</p>}
						{!!tab?.badgeCount && !isIconOnly && (
							<TabBadge
								$active={activeTab === tab.id}
								$size={size}
								$disabled={disabled}
							>
								{tab?.badgeCount}
							</TabBadge>
						)}
					</TabLabel>
					{tab?.rightIcon}
				</TabItem>
			))}
		</TabsContainer>
	);
};
