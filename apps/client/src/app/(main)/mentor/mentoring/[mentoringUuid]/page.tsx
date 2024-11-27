import Link from 'next/link';
import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '../../../../../actions/mentoring/mentoringAction';
import MentoringSessionCard from '../../../../../components/pages/main/mentor/mentoring/MentoringSeesionCard';
import { MentoringSessionDataType } from '../../../../../components/types/main/mentor/mentoringTypes';
import PlusIcon from '../../../../../components/assets/icons/Plus';

export default async function Page({
  params,
}: {
  params: { mentoringUuid: string };
}) {
  const mentoringUuid = params.mentoringUuid;
  const mentoringInfo = await GetMentoringInfo(mentoringUuid);
  const mentoringSessionData: MentoringSessionDataType[] =
    await GetMentoringSessionList(mentoringUuid);

  return (
    <div className="w-full mx-4 mt-2">
      <header className="flex flex-row justify-between items-center ml-4 text-[0.7rem] text-slate-600 py-4 pl-1">
        <h1 className="text-2xl font-bold">멘토링 세션 목록</h1>
        <Link
          className="flex flex-row items-center bg-adaptorsGray text-md rounded-xl px-4 py-2 gap-x-2 text-white hover:bg-adaptorsBlue font-extrabold"
          href={`/mentor/mentoring/${mentoringUuid}/edit`}
        >
          <PlusIcon className="" />
          세션 추가하기
        </Link>
      </header>
      <main className="w-full p-4">
        {mentoringInfo.name}
        {mentoringInfo.detail}
        {mentoringSessionData?.length === 0 ? (
          <p>현재 등록된 멘토링 세션이 없습니다.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentoringSessionData.map((session, index) => (
              <MentoringSessionCard key={index} session={session} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
