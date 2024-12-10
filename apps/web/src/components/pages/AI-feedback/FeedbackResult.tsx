import { Badge } from '@repo/ui/components/ui/badge';
import { CommonLayout } from '../../common/commomLayout';
import { feedbackResult } from '../../types/AI-feedback/requestTypes';
import BadgeAndFeedback from './BadgeAndFeedback';

import { Smile } from 'lucide-react';
import Terrified from '../../assets/icons/Terrified';

export default function FeedbackResult({
  feedback,
}: {
  feedback: feedbackResult;
}) {
  return (
    <CommonLayout type="section" className="w-full flex-1 xl:flex gap-5 mb-10">
      <BadgeAndFeedback feedbackText={feedback.strengths}>
        <Badge className="bg-adaptorsBlue/30 px-4 text-lg hover:bg-adaptorsBlue/30">
          <Smile className="mr-2" color="#0060FF" /> 잘 작성했어요
        </Badge>
      </BadgeAndFeedback>
      <BadgeAndFeedback feedbackText={feedback.improvements}>
        <Badge className="bg-[#ff3f3f]/30 px-4 text-lg hover:bg-[#ff3f3f]/30">
          <Terrified className="mr-2" color="#ff3f3f" />
          보완이 필요해요
        </Badge>
      </BadgeAndFeedback>
    </CommonLayout>
  );
}
