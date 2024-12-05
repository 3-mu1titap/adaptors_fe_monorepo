export interface SidebarType {
  icon: any;
  label: string;
  isActive: boolean;
  href: string;
}

export interface MyPageSidebarType {
  id: number;
  label: string;
  isActive: boolean;
  href: string;
  subcategory: SubCategoryType[];
}

export interface SubCategoryType {
  label: string;
  isActive: boolean;
  href: string;
}
