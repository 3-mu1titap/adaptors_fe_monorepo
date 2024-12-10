import { Mentoring } from '@repo/ui/types/MentoringListType.ts';
import MentoringItem from './MentoringItem';

export default function ListSection({
  mentoringListData,
}: {
  mentoringListData?: Mentoring[];
}) {
  if (!mentoringListData)
    return (
      <div
        className="min-w-64 min-h-svh mx-auto text-center"
        style={{ height: `calc(100% - 456.51px)` }}
      >
        {/* <FitImage
        src="https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1733400950295-image-removebg-preview.png"
        alt="볼팡이"
        className="w-40 h-40 "
      /> */}
        <h1>데이터가 없습니다.</h1>
      </div>
    );
  return (
    <section className="mx-auto mobile:w-full mobile:px-10 md:px-16 lg:px-36 grid mobile:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10">
      {mentoringListData.map((mentoring) => (
        <MentoringItem item={mentoring} key={mentoring.mentoringUuid} />
      ))}
    </section>
  );
}
