'use client';
import { CommonLayout } from '@components/common/commomLayout';
import FeedbackSubmitButton from '@components/ui/Button/FeedbackSubmitButton';
import { Input } from '@components/ui/input/CommonInput';
import ChevronText from '@components/ui/Text/ChevronText';
import FeedbackResult from './FeedbackResult';

export default function CoverLetterInputSection({
  categoryId,
}: {
  categoryId: string;
}) {
  const handleSubmitButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 제출 방지
    const formData = new FormData(e.currentTarget);
    const question = formData.get('question');
    const coverLetter = formData.get('coverLetter');

    console.log({ question, coverLetter });
  };
  console.log(categoryId);
  return (
    <div className="">
      <CommonLayout type="section" className="w-full relative mb-10 flex-1">
        <p className="text-red-600">{categoryId}</p>
        {categoryId == 'cover-letter' ? (
          <form onSubmit={handleSubmitButton}>
            <fieldset>
              <ChevronText text="자기소개서 문항" className="py-4" />
              <Input name="question" placeholder="문항을 입력해주세요" />
            </fieldset>
            <fieldset>
              <ChevronText text="자기소개서" className="py-4" />
              <textarea
                name="coverLetter"
                placeholder="작성한 자기소개서를 입력해주세요"
                maxLength={1500}
                className="text-md lg:text-lg leading-relaxed border-[1px] outline-adaptorsYellow outline-2 border-adaptorsGray rounded-lg focus:border-2 focus:border-adaptorsYellow w-full sm:h-[50vh] lg:min-h-[400px] p-6"
              ></textarea>
            </fieldset>
            <FeedbackSubmitButton handelSubmitButton={() => {}} />
          </form>
        ) : (
          <form>이력서 제출 폼..</form>
        )}
      </CommonLayout>
      <FeedbackResult />
    </div>
  );
}
