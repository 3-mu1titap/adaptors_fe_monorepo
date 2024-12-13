export interface mainIntroDataType {
  category: CategoryType[];
  title: string;
  mentoringUuid: string;
  content: string;
  thumbNailImages: {
    id: number;
    src: string;
    description: string;
  }[];
}

export interface CategoryType {
  id: number;
  categoryName: string;
}
