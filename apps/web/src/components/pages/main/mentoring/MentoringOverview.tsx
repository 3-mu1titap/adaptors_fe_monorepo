import { GetMentoringInfo } from '../../../../actions/mentoring/mentoringAction';
import { MentoringDataType } from '../../../types/mentoring/mentoringTypes';
import FitImage from '../../../ui/image/fit-image';

export default async function MentoringOverview() {
  const data: MentoringDataType | null = await GetMentoringInfo();
  return (
    <div>
      <h1 className="text-2xl font-bold py-5">{data?.name}</h1>

      <div className="relative w-full h-[400px] p-5 rounded-xl overflow-hidden bg-gray-200">
        <ul className="flex gap-3">
          {data?.categoryList[0].topCategoryName && (
            <li className="bg-adaptorsYellow py-1 px-3 rounded-2xl">
              {data?.categoryList[0].topCategoryName}
            </li>
          )}
          {data?.categoryList[0].middleCategoryName && (
            <li className="bg-adaptorsYellow py-1 px-3 rounded-2xl">
              {data?.categoryList[0].middleCategoryName}
            </li>
          )}
          {data?.categoryList[0].bottomCategoryName && (
            <li className="bg-adaptorsYellow py-1 px-3 rounded-2xl">
              {data?.categoryList[0].bottomCategoryName}
            </li>
          )}
        </ul>
        <FitImage
          src={`${data?.thumbnailUrl}`}
          alt="Profile"
          className="object-contain"
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[#FF922E] text-12">50% 할인</span>
            <span className="text-sm text-gray-500 line-through">300V</span>
          </div>
          <span className="text-2xl font-bold">150V</span>
        </div>
        <div className="text-sm text-gray-500 mt-2">2024.11.12</div>
      </div>
    </div>
  );
}
