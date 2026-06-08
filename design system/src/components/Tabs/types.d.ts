import { ReactNode } from 'react';

type TabsSizeType = 'lg' | 'md' | 'sm' | 'xs';
type TabsVariant = 'default' | 'button' | 'pills' | 'underline';

interface Tab {
  id: string;
  label?: string;
  badgeCount?: number;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  variant?: TabsVariant;
  size?: TabsSizeType;
  isIconOnly?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}
