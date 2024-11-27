export interface mainIntroDataType {
  subtitle: string;
  title: string;
  mentoringUuid: string;
  content: string;
  thumbNailImages: {
    id: number;
    src: string;
    description: string;
  }[];
}
