'use client';
import { CommonLayout } from '@components/common/commomLayout';
import { Input } from '@components/ui/input/CommonInput';
import AIFeedbackInfo from '@components/ui/Text/AIFeedbackInfo';
import ChevronText from '@components/ui/Text/ChevronText';
import { Badge } from '@repo/ui/components/ui/badge';

export default function AIFeedbackSection() {
  return (
    <CommonLayout className="px-32">
      <AIFeedbackInfo />
      <Badge className="bg-adaptorsYellow text-xl">자기소개서</Badge>
      <ChevronText text="자기소개서 문항" />
      <Input placeholder="문항을 입력해주세요" />
      <textarea className="border-2 border-adaptorsYellow w-full"></textarea>
    </CommonLayout>
  );
}
