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
  //   const feedbackExample = {
  //     improvements:
  //       '작성자는 구체적인 경험을 통해 본인의 역량과 성장 과정을 명확히 드러냈습니다. 특히, 문제 해결 능력을 강조하며 이를 뒷받침하는 사례를 제시해 신뢰를 높였습니다. 협업 경험과 성과를 언급해 팀워크의 중요성을 이해하고 이를 실천할 수 있는 인재임을 잘 나타냈습니다. 또한, 지원 동기와 목표가 회사와 잘 맞아 떨어지는 점은 긍정적으로 평가됩니다. 문장이 간결하면서도 명확해 읽는 이로 하여금 설득력을 느끼게 합니다.',
  //     strengths:
  //       '지원자의 강점이 잘 드러난 반면, 글의 구조가 다소 평면적이라 흥미를 유발하는 요소가 부족했습니다. 첫 문장을 더 강렬하거나 인상적으로 시작하면 관심을 끌기 좋을 것입니다. 또한, 기술적 역량이나 구체적인 데이터를 통해 성과를 수치화하면 더 설득력이 높아질 것입니다. 마지막으로, 지원 회사에 대한 깊은 이해를 바탕으로 해당 직무에서 어떻게 기여할 것인지 구체적인 로드맵을 추가하면 더욱 차별화될 수 있을 것입니다.',
  //   };
  return (
    <Funnel step={step}>
      <Funnel.Step name={`jobAndCategory`}>
        <section className=" ">
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
          className="bg-adaptorsYellow text-md font-semibold text-black hover:bg-black hover:text-white"
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
