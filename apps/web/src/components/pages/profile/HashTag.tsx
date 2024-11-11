import { useState } from 'react';
import JoinStepButton from '../../ui/Button/JoinStepButton';
import CheckboxButton from '../../ui/checkbox/CheckBox';

export default function HashTag({
  handleButton,
}: {
  handleButton: () => void;
}) {
  const handleRadioChange = () => {};
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
  return (
    <section className="px-6 py-2 space-y-1 h-full flex flex-col justify-between">
      <span>
        <h2 className="text-2xl font-bold">HashTag</h2>
        <h3 className="text-slate-500 text-lg mt-1 mb-8">최대 5개 선택</h3>
        <CheckboxButton
          name="hobbies"
          options={[
            { label: 'Music', value: 'music' },
            { label: 'Sports', value: 'sports' },
            { label: 'Reading', value: 'reading' },
            { label: 'Travel', value: 'travel' },
            { label: 'Cooking', value: 'cooking' },
            { label: 'Art', value: 'art' },
            { label: 'Gaming', value: 'gaming' },
            { label: 'Photography', value: 'photography' },
            { label: 'Technology', value: 'technology' },
            { label: 'Fitness', value: 'fitness' },
          ]}
          selectedValues={selectedValues}
          onChange={setSelectedValues}
        />
      </span>
      <JoinStepButton onClick={handleButton} text="완료하기" />
    </section>
  );
}
