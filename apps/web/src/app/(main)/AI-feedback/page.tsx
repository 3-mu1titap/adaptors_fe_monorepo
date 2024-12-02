import { CommonLayout } from '@components/common/commomLayout';
import { AnimatedCategories } from '@components/pages/AI-feedback/Category';
import CoverLetterInputSection from '@components/pages/AI-feedback/CoverLetterInputSection';
import AIFeedbackInfo from '@components/ui/Text/AIFeedbackInfo';
const categories = [
  { id: 'cover-letter', name: '자기소개서' },
  { id: 'all', name: '이력서 & 포트폴리오' },
];

export default function Page({
  searchParams,
}: {
  searchParams: { selectedDate: string };
}) {
  return (
    <CommonLayout type="main" className="mt-[7rem] px-4 sm:px-32 lg:px-64">
      <AIFeedbackInfo />
      <AnimatedCategories categories={categories} />
      <CoverLetterInputSection />
    </CommonLayout>
  );
}
