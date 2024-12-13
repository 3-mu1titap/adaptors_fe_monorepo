import { getTopCategoryList } from '@repo/web/actions/category/getCategory';
import {
  getFeedbackElements,
  getFeedbackGraph,
  getFeedbackScore,
} from '@repo/web/actions/mypage/feedback';
import AdaptorsComment from '@repo/web/components/pages/feedback/AdaptorsComment';
import FeedbackHistory from '@repo/web/components/pages/feedback/FeedbackHistory';
import ScoreComparisonGraph from '@repo/web/components/pages/feedback/ScoreComparisonGraph';

async function fetchMentoringData(categoryCode: string) {
  const categorise = await getTopCategoryList();
  const element = await getFeedbackElements(categoryCode);
  const feedbackData = await getFeedbackScore(categoryCode); //멘토의 피드백
  const graphData = await getFeedbackGraph(categoryCode); //볼팡이 + 그
  return {
    element,
    feedbackData,
    graphData,
    categorise,
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const selectedCategory = searchParams.category;
  const { feedbackData, graphData, element, categorise } =
    await fetchMentoringData('TC-CD7877C0');

  return (
    <main className="mt-[7rem]">
      <FeedbackHistory feedbackData={feedbackData} />
      <div className="flex">
        <AdaptorsComment feedbackContent={graphData?.feedbackContent ?? ''} />
        <ScoreComparisonGraph
          graphData={graphData?.feedbackFirstLastScoreDto ?? null}
          elements={element}
        />
      </div>
    </main>
  );
}
