export interface SidebarType {
  id: number;
  icon: any;
  label: string;
  isActive: boolean;
  href: string;
  state: boolean;
  subcategory: SubCategoryType[];
}

export interface SubCategoryType {
  id: number;
  label: string;
}
