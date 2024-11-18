export interface PopularMentoringType {
  id: number;
  PopularItem: PopluarItemType;
}

export interface PopluarItemType {
  title: string;
  duration: string;
  rating: number;
  reviews: number;
  instructor: string;
}
