import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';
import CustomSessionInfoTags from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import { MentoringDataType, SessionUser } from '@repo/ui/types/CommonType.ts';
import { File, User } from 'lucide-react';
import Image from 'next/image';

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
      infoName: 'Session',
      infoValue: 8,
      icon: <File size={12} className="text-blue-500" />,
    },
    {
      id: 2,
      infoName: 'Students',
      infoValue: 68,
      icon: <User size={12} className="text-blue-500" />,
    },
  ];
  return (
    <div>
      <CustomSessionInfoTags />
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5 pb-3 pt-5">
        <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight">
          {MentoringInfoData?.name}
        </h2>
        <CustomReviewerItem
          initialUserData={userData}
          className="hidden lg:!flex"
          userCount={30}
          reviewCount={293938}
        />
      </div>
      <div className="relative w-full h-[400px] p-5 mt-8 rounded-xl object-cover overflow-hidden bg-gray-200">
        {MentoringInfoData.categoryList && (
          <ul className="flex gap-3 absolute top-5 left-5">
            {MentoringInfoData.categoryList[0]?.topCategoryName && (
              <li className="bg-adaptorsYellow/70 py-1 px-3 rounded-2xl ring-2 ring-white">
                {MentoringInfoData.categoryList[0].topCategoryName}
              </li>
            )}
            {MentoringInfoData.categoryList[0]?.middleCategoryName && (
              <li className="bg-adaptorsYellow/70 py-1 px-3 rounded-2xl ring-2 ring-white">
                {MentoringInfoData.categoryList[0].middleCategoryName}
              </li>
            )}
            {MentoringInfoData.categoryList[0]?.bottomCategoryName && (
              <li className="bg-adaptorsYellow/70 py-1 px-3 rounded-2xl ring-2 ring-white">
                {MentoringInfoData.categoryList[0].bottomCategoryName}
              </li>
            )}
          </ul>
        )}
        <Image
          src={`${MentoringInfoData?.thumbnailUrl}`}
          alt="Profile"
          layout="fill"
          objectFit="contain"
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
      <div dangerouslySetInnerHTML={{ __html: MentoringInfoData.detail }} />
    </div>
  );
}
