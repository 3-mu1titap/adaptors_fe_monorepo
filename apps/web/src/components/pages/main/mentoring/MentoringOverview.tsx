import { MentoringDataType } from '../../../types/mentoring/mentoringTypes';
import FitImage from '../../../ui/image/fit-image';

export default async function MentoringOverview({
  MentoringInfoData,
}: {
  MentoringInfoData: MentoringDataType;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold py-5">{MentoringInfoData?.name}</h1>

      <div className="relative w-full h-[400px] p-5 rounded-xl overflow-hidden bg-gray-200">
        <ul className="flex gap-3">
          {MentoringInfoData?.categoryList[0].topCategoryName && (
            <li className="bg-adaptorsYellow py-1 px-3 rounded-2xl">
              {MentoringInfoData?.categoryList[0].topCategoryName}
            </li>
          )}
          {MentoringInfoData?.categoryList[0].middleCategoryName && (
            <li className="bg-adaptorsYellow py-1 px-3 rounded-2xl">
              {MentoringInfoData?.categoryList[0].middleCategoryName}
            </li>
          )}
          {MentoringInfoData?.categoryList[0].bottomCategoryName && (
            <li className="bg-adaptorsYellow py-1 px-3 rounded-2xl">
              {MentoringInfoData?.categoryList[0].bottomCategoryName}
            </li>
          )}
        </ul>
        <FitImage
          src={`${MentoringInfoData?.thumbnailUrl}`}
          alt="Profile"
          className="object-contain"
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
    </div>
  );
}
