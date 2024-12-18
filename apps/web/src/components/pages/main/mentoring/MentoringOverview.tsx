import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';
import CustomSessionInfoTags from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import { MentoringDataType, SessionUser } from '@repo/ui/types/CommonType.ts';
import FitImage from '@repo/web/components/ui/image/fit-image';
import { BadgeDollarSign, MessageSquareCode } from 'lucide-react';

export default function MentoringOverview({
  MentoringInfoData,
  userData,
}: {
  MentoringInfoData: MentoringDataType;
  userData: SessionUser[];
}) {
  const SessionInfo = [
    {
      id: 1,
      infoName: 'Review',
      infoValue: MentoringInfoData.totalReviewCount,
      icon: <MessageSquareCode size={12} className="text-blue-500" />,
    },
    {
      id: 2,
      infoName: 'Students',
      infoValue: MentoringInfoData.totalSaleCount,
      icon: <BadgeDollarSign size={12} className="text-blue-500" />,
    },
  ];
  return (
    <div>
      <CustomSessionInfoTags SessionInfoProps={SessionInfo} />
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5 pb-3 pt-4">
        <div className="text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight border-l-[5px] border-l-adaptorsYellow pl-5">
          {MentoringInfoData?.name}
          <br />
          <h3 className="text-sm md:text-md lg:text-lg font-medium leading-tight">
            {MentoringInfoData.description}
          </h3>
        </div>
        <CustomReviewerItem
          initialUserData={userData}
          className="hidden lg:!flex"
          userCount={MentoringInfoData.totalReviewCount}
          reviewCount={MentoringInfoData.totalReviewCount}
        />
      </div>
      {/* //카테고리 */}
      <div className="relative sm:w-full mt-5 rounded-xl object-cover overflow-hidden bg-gray-200">
        {MentoringInfoData.categoryList && (
          <ul className="flex flex-wrap gap-3 absolute top-0 left-0 w-full text-adaptorsYellow">
            {MentoringInfoData.categoryList
              .filter(
                (x) =>
                  x.topCategoryCode != 'TC-B4CD8B59' &&
                  x.topCategoryCode != 'TC-2A97B0CF'
              )
              .map((item) => (
                <li
                  key={item.id}
                  className="bg-black text-sm font-semibold py-1 px-3 r min-w-fit"
                >
                  {item.topCategoryName}
                </li>
              ))}
          </ul>
        )}
        <FitImage src={`${MentoringInfoData?.thumbnailUrl}`} alt="Profile" />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <ul className="flex flex-wrap gap-y-1 py-1">
          {MentoringInfoData?.hashTagList?.map((item) => (
            <li
              key={item.hashtagId}
              className=" px-3 rounded-2xl text-adaptorsYellow text-sm mobile:text-md md:text-lg flex items-center"
            >
              #{item.hashtagName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
