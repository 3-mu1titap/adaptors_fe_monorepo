export interface SidebarType {
  icon: any;
  label: string;
  isActive: boolean;
  href: string;
  onClick?: () => Promise<undefined>;
}
