import Image from 'next/image';
import { MentoringDataType } from '../../../types/mentoring/mentoringTypes';
export default async function MentoringOverview({
  MentoringInfoData,
}: {
  MentoringInfoData: MentoringDataType;
}) {
  console.log(MentoringInfoData);
  return (
    <div>
      <h1 className="text-2xl font-bold py-5">{MentoringInfoData?.name}</h1>

      <div className="relative w-full h-auto rounded-xl object-cover overflow-hidden bg-gray-200">
        {MentoringInfoData.categoryList && (
          <ul className="flex gap-3 absolute top-5 left-5">
            {MentoringInfoData?.categoryList[0]?.topCategoryName && (
              <li className="bg-adaptorsYellow/70 py-1 px-3 rounded-2xl ring-2 ring-white">
                {MentoringInfoData?.categoryList[0].topCategoryName}
              </li>
            )}
            {MentoringInfoData?.categoryList[0]?.middleCategoryName && (
              <li className="bg-adaptorsYellow/70 py-1 px-3 rounded-2xl ring-2 ring-white">
                {MentoringInfoData?.categoryList[0].middleCategoryName}
              </li>
            )}
            {MentoringInfoData?.categoryList[0]?.bottomCategoryName && (
              <li className="bg-adaptorsYellow/70 py-1 px-3 rounded-2xl ring-2 ring-white">
                {MentoringInfoData?.categoryList[0].bottomCategoryName}
              </li>
            )}
          </ul>
        )}
        <Image
          src={`${MentoringInfoData?.thumbnailUrl}`}
          alt="Profile"
          layout="intrinsic" // 원본 비율에 맞춰 조정
          objectFit="contain" // 이미지의 비율 유지
          width={2000}
          height={0}
          priority
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <ul className="flex gap-3 py-3">
          <li className="bg-adaptorsBlue py-2 px-3 rounded-2xl text-white text-md ">
            #해시태그1
          </li>
          <li className="bg-adaptorsBlue py-2 px-3 rounded-2xl text-white text-md">
            #해시태그2
          </li>
          <li className="bg-adaptorsBlue py-2 px-3 rounded-2xl text-white text-md">
            #해시태그32398
          </li>
        </ul>
      </div>
      <div className="py-4 px-6 leading-relaxed">
        {MentoringInfoData.detail}
      </div>
    </div>
  );
}
