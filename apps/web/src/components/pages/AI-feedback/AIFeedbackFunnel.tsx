import { Button } from '@repo/ui/components/ui/button';
import { categoryOptions, industryOptions } from '@repo/web/store/dummyStore';
import { useEffect, useState } from 'react';
import Funnel from '../../common/Funnel/Funnel';
import useFunnel from '../../common/Funnel/useFunnel';
import FileUploadForm from '../../form/FileUploadForm';
import UploadCoverLetterForm from '../../form/UploadCoverLetterForm';
import { feedbackResult } from '../../types/AI-feedback/requestTypes';
import FeedbackResult from './FeedbackResult';
import RadioFieldset from './RadioFieldSet';

const steps = [`jobAndCategory`, 'form', 'result'];
export default function AIFeedbackFunnel() {
  const { step, onNextStep, onSelectStep } = useFunnel({ steps });
  const [job, setJob] = useState<string>('');
  const [feedback, setFeedback] = useState<feedbackResult | null>(null);
  const [selectedCateogory, setSelectedCateogory] = useState<string>('');

  const handleJobChange = (value: string) => {
    setJob(value);
  };
  const handleCategoryChange = (value: string) => {
    setSelectedCateogory(value);
  };
  useEffect(() => {
    if (feedback) onNextStep();
  }, [feedback]);
  return (
    <Funnel step={step}>
      <Funnel.Step name={`jobAndCategory`}>
        <section className="px-4">
          <RadioFieldset
            job={job}
            handleRadioChange={handleJobChange}
            field={industryOptions}
            title="산업군"
          />
          <div
            className={`transition-container ${
              !job ? 'ai-category-hidden' : 'ai-category-visible'
            }`}
          >
            <RadioFieldset
              job={selectedCateogory}
              handleRadioChange={handleCategoryChange}
              field={categoryOptions}
              title="카테고리"
            />
          </div>
        </section>
        <Button
          onClick={onNextStep}
          disabled={!job || !selectedCateogory}
          className="bg-adaptorsYellow text-md font-semibold text-black hover:bg-black hover:text-white mx-4"
        >
          다음
        </Button>
      </Funnel.Step>
      <Funnel.Step name={`form`}>
        {selectedCateogory == 'COVER_LETTER' ? (
          <UploadCoverLetterForm job={job} setFeedback={setFeedback} />
        ) : (
          <FileUploadForm
            job={job}
            category={selectedCateogory}
            setFeedback={setFeedback}
          />
        )}
      </Funnel.Step>
      <Funnel.Step name="result">
        <FeedbackResult feedback={feedback} />
        <Button
          onClick={() => onSelectStep(0)}
          className="bg-adaptorsYellow hover:bg-black"
        >
          다시하기
        </Button>
      </Funnel.Step>
    </Funnel>
  );
}
