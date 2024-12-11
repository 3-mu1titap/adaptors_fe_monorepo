import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/web/components/ui/input/CommonInput';
import ChevronText from '@repo/web/components/ui/Text/ChevronText';
import { useState } from 'react';
import { requestAIFeedback_coverletter } from 'src/actions/AI-feedback/AI-feedback';
import { feedbackResult } from '../types/AI-feedback/requestTypes';

export default function UploadCoverLetterForm({
  job,
  setFeedback,
}: {
  job: string;
  setFeedback: React.Dispatch<React.SetStateAction<feedbackResult | null>>;
}) {
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
        <fieldset className=" mb-4 ">
          <ChevronText
            text="자기소개서 문항"
            className="py-4 sm:py-2 min-w-44"
          />
          <Input name="question" placeholder="문항을 입력해주세요" />
        </fieldset>
        <fieldset className="">
          <ChevronText text="자기소개서" className="py-4 sm:py-2 min-w-44" />
          <textarea
            name="coverLetter"
            placeholder="작성한 자기소개서를 입력해주세요"
            maxLength={1500}
            className="text-md lg:text-lg leading-relaxed border outline-adaptorsYellow outline-2 rounded-lg focus:border-2 focus:border-adaptorsYellow w-full sm:h-[40vh] p-6"
          ></textarea>
        </fieldset>
        <Button
          type="submit"
          variant={'adaptors'}
          className="text-lg my-2 block w-full"
        >
          {uploadProgress != 0 && uploadProgress != 100
            ? `분석 중`
            : `분석하기`}
        </Button>
      </form>
    </div>
  );
}
