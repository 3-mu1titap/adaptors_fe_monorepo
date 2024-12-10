import { CommonLayout } from '@repo/web/components/common/commomLayout';
import { AnimatedCategories } from '@repo/web/components/pages/AI-feedback/Category';
import UploadSection from '@repo/web/components/pages/AI-feedback/CoverLetterInputSection';
import AIFeedbackInfo from '@repo/web/components/ui/Text/AIFeedbackInfo';
const categories = [
  { id: 'COVER_LETTER', name: '자기소개서' },
  { id: 'RESUME', name: '이력서' },
  { id: 'PORTFOLIO', name: '포트폴리오' },
];

export default function Page({ params }: { params: { type: string } }) {
  return (
    <CommonLayout
      type="main"
      className="mt-[7rem] px-4 sm:px-28 md:px-20 xl:px-44"
    >
      <AIFeedbackInfo />
      <AnimatedCategories categories={categories} categoryParam={params.type} />
      <UploadSection category={params.type} />
    </CommonLayout>
  );
}
