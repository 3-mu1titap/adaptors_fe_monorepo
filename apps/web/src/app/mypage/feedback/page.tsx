import {
  getFeedbackElements,
  getFeedbackGraph,
  getFeedbackScore,
} from '@repo/web/actions/mypage/feedback';
import AdaptorsComment from '@repo/web/components/pages/feedback/AdaptorsComment';
import FeedbackHistory from '@repo/web/components/pages/feedback/FeedbackHistory';
import FeedbackHistoryIcon from '@repo/web/components/pages/feedback/FeedbackHistoryIcon';
import ScoreComparisonGraph from '@repo/web/components/pages/feedback/ScoreComparisonGraph';
import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';

async function fetchMentoringData(categoryCode: string) {
  const element = await getFeedbackElements('TC-CD7877C0');
  const feedbackData = await getFeedbackScore(categoryCode); //멘토의 피드백
  const graphData = await getFeedbackGraph(categoryCode); //볼팡이 + 그
  return {
    element,
    feedbackData,
    graphData,
  };
}
//TC-CD7877C0 이력서
// TC-8C93C5F5,자소서
// TC-0489394A,면접
// TC-8E506504,포트폴리오

export default async function Page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const session = await getServerSession(options);
  const user = session?.user.nickName;
  const { feedbackData, graphData, element } =
    await fetchMentoringData('RESUME');
  console.log(feedbackData);
  return (
    <main className="mt-[7rem]">
      <FeedbackHistory feedbackData={feedbackData} element={element} />
      <FeedbackHistoryIcon feedbackData={feedbackData} element={element} />
      <div className="flex px-6">
        <AdaptorsComment
          feedbackContent={graphData?.feedbackContent ?? ''}
          nickname={user}
        />
        <ScoreComparisonGraph
          graphData={graphData?.feedbackFirstLastScoreDto ?? null}
          elements={element}
        />
      </div>
    </main>
  );
}
