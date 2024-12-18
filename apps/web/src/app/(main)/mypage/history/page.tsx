import { GetMentoringSessionHistoryList } from '@repo/web/actions/mentoring/mentoringAction';
import CourseMentoringListPage from '@repo/web/components/pages/course/CourseMentoringListPage';
import Link from 'next/link';

async function page() {
  const res = await GetMentoringSessionHistoryList(0);
  return (
    <div className="container mt-0 mx-auto lg:max-w-[64rem] md:max-w-[40rem] mobile:max-w-[400px] max-w-[300px] ">
      {Array.isArray(res) && res.content.length > 0 ? (
        <CourseMentoringListPage
          totalPages={res.totalPages}
          content={res.content}
        />
      ) : (
        <div className="flex flex-col mt-56 justify-center items-center">
          <span className="text-2xl text-black text-center">
            참가한 멘토링 내역이 없습니다.
          </span>
          <Link href={'/mentoring'}>멘토링 신청하기</Link>
        </div>
      )}
    </div>
  );
}

export default page;
