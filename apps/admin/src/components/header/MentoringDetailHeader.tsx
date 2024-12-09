import Link from 'next/link';
import PlusIcon from '../assets/icons/Plus';

export default function MentoringDetailHeader({
  mentoringUuid,
}: {
  mentoringUuid: string;
}) {
  return (
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
  );
}
