import { BlackListType } from '../../../../types/mypage/blacklistType';
function BlackListCard({ CardItem }: { CardItem: BlackListType }) {
  return (
    // <li className="w-full space-x-14 flex min-w-[20rem] justify-between sm:space-x-5 sm:max-w-screen-sm sm:min-w-[40rem] md:min-w-[45rem] md:max-w-screen-md  lg:min-w-[65rem] lg:max-w-screen-xl py-3 space rounded-md p-2 max-w-screen-xl items-center hover:shadow-lg transition-shadow-md duration-200 ease-in-out">
    <li className="w-full">
      <div className="flex items-center justify-start space-x-4">
        <span className="w-[45px] h-[45px] bg-gray-400 rounded-full"></span>
        <span className=" text-2xl">{CardItem.mentorname}</span>
      </div>

      <div className="flex justify-end">
        <button className="p-2 rounded-md bg-slate-300">삭제</button>
      </div>
    </li>
  );
}

export default BlackListCard;
