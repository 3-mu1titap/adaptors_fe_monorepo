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
  const [uploading, setuploading] = useState(false);
  const handleSubmitButton = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 제출 방지

    const formData = new FormData(e.currentTarget);
    const question = formData.get('question');
    const coverLetter = formData.get('coverLetter');
    if (typeof coverLetter === 'string') {
      setuploading(true);
      const data = await requestAIFeedback_coverletter({
        industryType: job,
        coverLetter: question + coverLetter,
      });
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
          {uploading ? `분석 중` : `분석하기`}
        </Button>
      </form>
      {uploading && (
        <div className="w-full h-full bg-black/40 absolute top-0 left-0">
          <div className="loading-spinner mx-auto mt-[200px]"></div>
        </div>
      )}
    </div>
  );
}
