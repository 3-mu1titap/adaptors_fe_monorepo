import FeedbackResult from '@components/pages/AI-feedback/FeedbackResult';
import { feedbackResult } from '@components/types/AI-feedback/requestTypes';
import { Input } from '@components/ui/input/CommonInput';
import ProgressBar from '@components/ui/Progress/ProgressBar';
import ChevronText from '@components/ui/Text/ChevronText';
import { Button } from '@repo/ui/components/ui/button';
import { useState } from 'react';
import { requestAIFeedback_coverletter } from 'src/actions/AI-feedback/AI-feedback';

export default function UploadCoverLetterForm({ job }: { job: string }) {
  const [feedback, setFeedback] = useState<feedbackResult | ''>();
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleSubmitButton = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 제출 방지
    const uploadStartTime = Date.now();

    const formData = new FormData(e.currentTarget);
    const question = formData.get('question');
    const coverLetter = formData.get('coverLetter');
    if (typeof coverLetter === 'string') {
      const uploadInterval = setInterval(() => {
        const elapsedTime = Date.now() - uploadStartTime;
        const estimatedUploadTime = 5000;
        const progress = Math.min(
          Math.floor((elapsedTime / estimatedUploadTime) * 100),
          99
        );
        setUploadProgress(progress);
      }, 300);
      const data = await requestAIFeedback_coverletter({
        industryType: job,
        coverLetter: question + coverLetter,
      });
      clearInterval(uploadInterval);
      setUploadProgress(100);
      setFeedback(data);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmitButton} className="">
        <fieldset className="md:flex items-start mb-10 lg:pr-20">
          <ChevronText
            text="자기소개서 문항"
            className="py-4 sm:py-2 min-w-44"
          />
          <Input name="question" placeholder="문항을 입력해주세요" />
        </fieldset>
        <fieldset className="md:flex items-start lg:pr-20">
          <ChevronText text="자기소개서" className="py-4 sm:py-2 min-w-44" />
          <textarea
            name="coverLetter"
            placeholder="작성한 자기소개서를 입력해주세요"
            maxLength={1500}
            className="text-md lg:text-lg leading-relaxed border outline-adaptorsYellow outline-2 rounded-lg focus:border-2 focus:border-adaptorsYellow w-full sm:h-[50vh] lg:min-h-[400px] p-6"
          ></textarea>
        </fieldset>
        <Button
          type="submit"
          variant={'adaptors'}
          size={'xl'}
          className="text-lg mx-auto my-4 block"
        >
          {uploadProgress != 0 && uploadProgress != 100
            ? `분석 중`
            : `분석하기`}
        </Button>
      </form>
      {uploadProgress > 1 && uploadProgress < 100 && (
        <ProgressBar uploadProgress={uploadProgress} />
      )}
      <div className="w-full flex">
        {feedback && <FeedbackResult feedback={feedback} />}
      </div>
    </div>
  );
}
