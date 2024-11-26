import MentoringReview from '@components/pages/review/MentoringReview';
import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '../../../../actions/mentoring/mentoringAction';
import { MentoringDataType } from '../../../types/mentoring/mentoringTypes';
import Calendar from './Calendar';
import MentoProfile from './MentoProfile';
import MentoringOverview from './MentoringOverview';
import NowDate from './NowDate';
import SessionList from './SessionList';
const reviews = [
  {
    reviewerId: 'user123',
    title: 'Great product!',
    comment:
      "This product exceeded my expectations. It's well-made and does exactly what it promises.",
    score: 4.7,
  },
  {
    reviewerId: 'jane_doe',
    title: 'Good, but could be better',
    comment:
      "The product is good overall, but there's room for improvement in terms of durability.",
    score: 3.5,
  },
  {
    reviewerId: 'tech_enthusiast',
    title: '실망시키지않네요....',
    comment:
      '항목별로 하나하나 꼼꼼히 살펴보고 피드백 해주십니다! 멘토링 전과 비교해서 정말 완성도 높은 자기소개서가 완성됐어요. 좋은 점과 부족한 점을 정확히 분석해주시니 저도 안목이 생겨 단점 보완에 집중할 수 있었습니다. ',
    score: 2.3,
  },
];
export default async function MentoringCalendar({
  mentoringDate,
}: {
  mentoringDate: string;
}) {
  const mentoringSessionList = await GetMentoringSessionList(
    'f2a5b181-f1c3-4ad9-aa73-3d1bca4f5ad3'
  );
  const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
    'f2a5b181-f1c3-4ad9-aa73-3d1bca4f5ad3'
  );
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 sm:flex-row">
      {/* Left Section */}
      <section className="w-[350px] p-6 bg-white border-r border-gray-200">
        <div className="space-y-6">
          <MentoProfile
            mentorUuid={
              MentoringInfoData?.mentorUuid ? MentoringInfoData?.mentorUuid : ''
            }
          />
          <NowDate />
          <Calendar mentoringSessionList={mentoringSessionList} />
        </div>
      </section>

      {/* Right Section */}
      <section className="flex-1 mt-6 sm:p-6 w-full">
        <div className="max-w-4xl mx-auto space-y-6">
          {MentoringInfoData && (
            <MentoringOverview MentoringInfoData={MentoringInfoData} />
          )}
          <MentoringReview reviews={reviews} />
          <SessionList
            mentoringSessionList={mentoringSessionList}
            mentoringName={MentoringInfoData?.name}
            mentoringDate={mentoringDate}
          />
        </div>
      </section>
    </div>
  );
}
