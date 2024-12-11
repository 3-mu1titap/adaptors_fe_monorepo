export interface Option {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  options: Option[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
  classname?: string;
}
