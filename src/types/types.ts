
export interface TopMenuItemType {
  icon: React.JSX.Element;
  title: string;
  content: string;
}
export interface BottomMenuItemType {
  icon?: string;
  title: string;
  href: string;
}

export interface CardType {
  imageUrl: string;
  title: string;
  body: string;
  href: string;
}

export interface ButtonType {
  type: 'default' | 'primary' | 'dark' | 'ghost' | 'secondary';
  href: string;
  children: React.ReactNode;
  leftIcon?: string;
  rightICon?: string;
  size: 'small' | 'middle' | 'large';
}

export interface ProjectType {
  id: number;
  title: string;
  body: string;
  category: string;
  href: string;
  image: string;
}
export interface StrategyType {
  id: number;
  icon: React.ReactNode;
  title: string;
  body: string;
  href: string;
}
export interface ProjectStepType {
  id: number;
  icon: React.ReactNode;
  title: string;
  arrow?: React.ReactNode,
}
export interface FooterColItemType {
  id: number;
  title: string;
  href: string;
}

export interface SidebarContactType {
  handleOpen: (item: boolean) => void;
  isOpen: boolean;
}