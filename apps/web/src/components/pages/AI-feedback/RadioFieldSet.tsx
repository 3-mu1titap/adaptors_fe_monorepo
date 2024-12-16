import { Option } from '@repo/ui/types/components/RadioButtonType.ts';
import RadioButton from '../../ui/radio/RadioButton';
import ChevronText from '../../ui/Text/ChevronText';

export default function RadioFieldset({
  job = '',
  handleRadioChange,
  field,
  title,
}: {
  job?: string;
  handleRadioChange: (value: string) => void;
  field: Option[];
  title: string;
}) {
  return (
    <fieldset className="mr-0 mb-2">
      <ChevronText text={title} className="py-4 mb-4 sm:py-2 min-w-44" />
      <RadioButton
        name="gob"
        options={field}
        selectedValue={job}
        onChange={handleRadioChange}
        classname="flex-wrap justify-start gap-x-4 gap-y-4"
      />
    </fieldset>
  );
}
