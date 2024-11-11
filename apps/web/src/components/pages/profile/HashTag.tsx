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
    <section className="">
      <h2 className="text-slate-500 my-3">최대 5개 선택</h2>
      <CheckboxButton
        name="hobbies"
        options={[
          { label: 'Music', value: 'music' },
          { label: 'Sports', value: 'sports' },
          { label: 'Reading', value: 'reading' },
          { label: 'Travel', value: 'travel' },
          { label: 'Cooking', value: 'cooking' },
          { label: 'Gaming', value: 'gaming' },
          { label: 'Photography', value: 'photography' },
          { label: 'Art', value: 'art' },
          { label: 'Technology', value: 'technology' },
          { label: 'Fitness', value: 'fitness' },
        ]}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
      />
      <JoinStepButton onClick={handleButton} />
    </section>
  );
}
