import Link from 'next/link';
import { GetMentoringList } from '../../../actions/mentoring/mentoringAction';
import PlusIcon from '../../../components/assets/icons/Plus';
import Mentoring from '../../../components/pages/main/mentor/Mentoring';
import { MentoringDataType } from '../../../components/types/main/mentor/mentoringTypes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Home`,
};

export default async function Page() {
  const mentoringListData: MentoringDataType[] = await GetMentoringList();
  return (
    <>
      <div className="flex flex-row justify-between items-center ml-4 text-[0.7rem] text-slate-600 py-4 pl-1 ">
        <p>
          <span className="bg-slate-500 rounded-md py-1 px-2 text-white mr-2">
            안내
          </span>
          현재 {}님의 멘토링은 {mentoringListData.length}개의 멘토링을 개설하고
          있습니다.
        </p>
        <Link
          className="flex flex-row items-center bg-adaptorsGray text-md rounded-xl px-4 py-2 gap-x-2 text-white hover:bg-adaptorsBlue font-extrabold"
          href={`/mentoring/add`}
        >
          <PlusIcon className="w-[18px] h-[18px]" />
          <span>멘토링 추가</span>
        </Link>
      </div>
      <Mentoring mentoringListData={mentoringListData} />
    </>
  );
}
