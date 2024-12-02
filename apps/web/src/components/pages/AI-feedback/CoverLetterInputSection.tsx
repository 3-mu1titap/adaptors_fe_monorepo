'use client';
import { CommonLayout } from '@components/common/commomLayout';
import { Input } from '@components/ui/input/CommonInput';
import ChevronText from '@components/ui/Text/ChevronText';
import { Button } from '@repo/ui/components/ui/button';
import FeedbackResult from './FeedbackResult';
export default function CoverLetterInputSection() {
  return (
    <CommonLayout type="section" className="">
      <ChevronText text="자기소개서 문항" className="py-4" />
      <Input placeholder="문항을 입력해주세요" />
      <ChevronText text="자기소개서" className="py-4" />
      <textarea
        placeholder="작성한 자기소개서를 입력해주세요"
        maxLength={1500}
        className="text-md lg:text-lg leading-relaxed border-[1px] outline-adaptorsYellow outline-2 border-adaptorsGray rounded-lg focus:border-2 focus:border-adaptorsYellow w-full sm:h-[50vh] lg:min-h-[400px] p-6"
      ></textarea>
      <Button>입력완료</Button>
      <FeedbackResult />
    </CommonLayout>
  );
}
