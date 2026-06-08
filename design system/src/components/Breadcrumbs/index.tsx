import React, { ReactNode, useState, useMemo } from "react";
import {
	BreadcrumbsContainer,
	BreadcrumbList,
	BreadcrumbItemLi,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
} from "./styles";
import { Link } from "../Link";
import { Tooltip, TooltipProps } from "../Tooltip";
import { createPortal } from "react-dom";

export interface BreadcrumbItem {
	label: string;
	href?: string;
	icon?: ReactNode;
	items?: BreadcrumbItem[];
}

export interface BreadcrumbsProps {
	items: BreadcrumbItem[];
	maxItems?: number; // How many items to show before collapsing
	onItemClick?: (item: BreadcrumbItem, index: number) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
	items,
	maxItems = 5,
	onItemClick,
}) => {
	const [tooltip, setTooltip] = useState<TooltipProps | undefined>(undefined);

	const { displayItems, collapsedItems } = useMemo(() => {
		if (!items || items.length === 0) {
			return {
				displayItems: [],
				collapsedItems: []
			};
		}

		if (items.length > maxItems) {
			const collapsed = items.slice(1, items.length - (maxItems - 2));
			return {
				displayItems: [
					items[0],
					{ label: "...", icon: null, items: collapsed },
					...items.slice(items.length - (maxItems - 2)),
				],
				collapsedItems: collapsed
			};
		}
		return {
			displayItems: items,
			collapsedItems: []
		};
	}, [items, maxItems]);

	if (!items || items.length === 0) return null;

	const handleEllipsisClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setTooltip({
			event: e,
		});
	};

	const handleModalItemClick = (item: BreadcrumbItem, index: number) => {
		if (onItemClick) {
			onItemClick(item, index + 1); // +1 because we skip the first item
		}
		setTooltip(undefined);
	};

	return (
		<>
			<BreadcrumbsContainer aria-label="Breadcrumb">
				<BreadcrumbList>
					{displayItems.map((item, idx) => {
						const isLast = idx === displayItems.length - 1;
						const isEllipsis = item.label === "...";

						return (
							<React.Fragment key={idx}>
								<BreadcrumbItemLi
									$isCurrent={isLast && !isEllipsis}
									as={isLast && !isEllipsis ? "span" : "li"}
									onClick={
										isEllipsis
											? handleEllipsisClick
											: !isLast && onItemClick
												? () => onItemClick(item, idx)
												: undefined
									}
									aria-current={isLast && !isEllipsis ? "page" : undefined}
									style={{
										pointerEvents:
											isLast ? "none" : "auto",
									}}
								>
									{isEllipsis ? (
										<BreadcrumbEllipsis>...</BreadcrumbEllipsis>
									) : (
										<Link
											size="md"
											icon={item.icon}
											label={item.label}
											variant="default"
											disabled={isLast}
											href={!isLast ? item.href : undefined}
										/>
									)}
								</BreadcrumbItemLi>
								{!isLast && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
							</React.Fragment>
						);
					})}
				</BreadcrumbList>
			</BreadcrumbsContainer>
			{
				tooltip &&
				createPortal(
					<Tooltip {...tooltip}>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							{collapsedItems.filter(item => item.label !== "...").map((item, idx) => (
								<BreadcrumbItemLi
									key={idx}
									style={{ display: 'flex', maxHeight: '32px', padding: '0 6px' }}
									onClick={() => handleModalItemClick(item, idx)}
								>
									<Link
										size="md"
										icon={item.icon}
										label={item.label}
										variant="default"
										href={item.href}
									/>
								</BreadcrumbItemLi>
							))}

						</div>
					</Tooltip>,
					document.body
				)}
		</>
	);
};