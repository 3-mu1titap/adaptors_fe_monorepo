import { Metadata } from 'next';
import CalendarContent from '../../../../components/pages/main/mentor/Calendar/CalendarContent';
import CalendarHeader from '../../../../components/pages/main/mentor/Calendar/CalendarHeader';

export const metadata: Metadata = {
  title: `Schedule`,
};

export default async function Page() {
  return (
    <div className="w-full">
      <CalendarHeader />
      <div className="w-full h-full">
        <div className="h-full pl-4 mb-6 bg-[#FAFAFE]">
          <CalendarContent />
        </div>
      </div>
    </div>
  );
}
