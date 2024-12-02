import { CommonLayout } from '@components/common/commomLayout';
import { Badge } from '@repo/ui/components/ui/badge';

export default function FeedbackResult() {
  return (
    <CommonLayout type="section">
      <div>
        <Badge>good</Badge>
        <p></p>
      </div>
      <div>
        <Badge>고칠점</Badge>
        <p></p>
      </div>
    </CommonLayout>
  );
}
