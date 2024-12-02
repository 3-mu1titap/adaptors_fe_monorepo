import PlusIcon from '../assets/icons/Plus';
import Link from 'next/link';
import { MentoringDataType } from '../types/main/mentor/mentoringTypes';

export default function MentoringHeader({
  mentoringListData,
}: {
  mentoringListData: MentoringDataType[];
}) {
  return (
    <header className="flex flex-row justify-between items-center ml-4 text-[0.7rem] text-slate-600 py-4 pl-1 ">
      <h4>
        <span className="bg-slate-500 rounded-md py-1 px-2 text-white mr-2">
          안내
        </span>
        현재 {}님의 멘토링은{' '}
        {mentoringListData?.length ? mentoringListData.length : 0}개의 멘토링을
        개설하고 있습니다.
      </h4>
      <Link
        className="flex flex-row items-center bg-adaptorsGray text-md rounded-xl mr-2 px-4 py-2 gap-x-2 text-white hover:bg-adaptorsBlue font-extrabold"
        href={`/mentor/mentoring/add`}
      >
        <PlusIcon className="w-5 h-5" />
        <span className="text-md">멘토링 추가</span>
      </Link>
    </header>
  );
}
