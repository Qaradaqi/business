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
