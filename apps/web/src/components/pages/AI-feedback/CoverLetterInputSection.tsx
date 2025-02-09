'use client';

import { useState } from 'react';
import { CommonLayout } from '../../common/commomLayout';
import ChevronText from '../../ui/Text/ChevronText';
import RadioButton from '../../ui/radio/RadioButton';

const industry = [
  { value: 'IT', label: 'IT' },
  { value: 'MARKETING', label: '마케팅' },
  { value: 'PROJECT_MANAGEMENT', label: 'PM' },
  { value: 'CONTENT_CREATION', label: '콘텐츠 제작' },
  { value: 'EDUCATION', label: '교육' },
];

export default function UploadSection({ category }: { category: string }) {
  const [job, setJob] = useState<string>('IT');
  const handleRadioChange = (value: string) => {
    setJob(value);
  };

  return (
    <>
      <CommonLayout type="section" className="w-full relative mb-10 flex-1">
        <fieldset className="md:flex items-start mb-10">
          <ChevronText text="산업군" className="py-4 sm:py-2 min-w-44" />
          <RadioButton
            name="gob"
            options={industry}
            selectedValue={job}
            onChange={handleRadioChange}
            classname="gap-4"
          />
        </fieldset>
        {/* {category === 'COVER_LETTER' && <UploadCoverLetterForm job={job} />} */}
        {/* {category === 'RESUME' && (
          <FileUploadForm job={job} category={category} />
        )}
        {category === 'PORTFOLIO' && (
          <FileUploadForm job={job} category={category} />
        )} */}
      </CommonLayout>
    </>
  );
}
