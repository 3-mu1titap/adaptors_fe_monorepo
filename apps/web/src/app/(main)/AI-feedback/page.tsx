import { CommonLayout } from '@components/common/commomLayout';
import AIFeedbackSection from '@components/pages/AI-feedback/AIFeedbackSection';
import Category from '@components/pages/AI-feedback/Category';

export default function Page() {
  return (
    <CommonLayout type="main" className="mt-[7rem]">
      <Category />
      <AIFeedbackSection />
    </CommonLayout>
  );
}
