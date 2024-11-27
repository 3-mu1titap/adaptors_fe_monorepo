import Link from 'next/link';
import { Metadata } from 'next';
import { MentoringDataType } from '../../../components/types/main/mentor/mentoringTypes';
import { GetMentoringList } from '../../../actions/mentoring/mentoringAction';
import Mentoring from '../../../components/pages/main/mentor/Mentoring';
import PlusIcon from '../../../components/assets/icons/Plus';

export const metadata: Metadata = {
  title: `Home`,
};

export default async function Page() {
  const mentoringListData: MentoringDataType[] = await GetMentoringList();
  console.log(mentoringListData);
  return (
    <main className="mx-4 mt-2">
      <header className="flex flex-row justify-between items-center ml-4 text-[0.7rem] text-slate-600 py-4 pl-1 ">
        <p>
          <span className="bg-slate-500 rounded-md py-1 px-2 text-white mr-2">
            안내
          </span>
          현재 {}님의 멘토링은{' '}
          {mentoringListData?.length ? mentoringListData.length : 0}개의
          멘토링을 개설하고 있습니다.
        </p>
        <Link
          className="flex flex-row items-center bg-adaptorsGray text-md rounded-xl mr-2 px-4 py-2 gap-x-2 text-white hover:bg-adaptorsBlue font-extrabold"
          href={`/mentor/mentoring/add`}
        >
          <PlusIcon className="w-5 h-5" />
          <span className="text-md">멘토링 추가</span>
        </Link>
      </header>
      <Mentoring mentoringListData={mentoringListData} />
    </main>
  );
}
