import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import AutoMentoringField from '../../../../../components/pages/main/mentor/auto-generated/AutoMentoringFeild';
import WeeklyTimeSlotSelector from '../../../../../components/pages/main/mentor/auto-generated/WeeklyTimeSlot';

export default function page() {
  return (
    <CommonLayout>
      <AutoMentoringField />
      <WeeklyTimeSlotSelector />
    </CommonLayout>
  );
}
