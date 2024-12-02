import TitleSection from '@components/common/TitleSection';
import RecommendMentoringItem from './RecommendMentoringItem';
import { CommonLayout } from '@components/common/commomLayout';
import { articles } from 'src/store/dummyStore';
export default function RecommendMentoring() {
  return (
    <CommonLayout
      type="section"
      reative="container"
      className="mx-auto my-4 px-4 md:px-8 xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[90%] relative"
    >
      <TitleSection title="추천멘토" subtitle="RECOMMEND MENTOR" />

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 rounded-lg">
        {articles.map((article, index) => (
          <article key={index} className="group cursor-pointer">
            <RecommendMentoringItem item={article} />
          </article>
        ))}
      </div>
    </CommonLayout>
  );
}
