export interface SignInInputType {
  text: React.ReactNode;
  value: string;
  name: string;
  setValue: (value: string) => void;
  clearValue: () => void;
}
