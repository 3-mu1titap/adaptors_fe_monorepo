import { mainIntroDataType } from '@repo/web/components/types/home/homeResponseType';
import FitImage from '../../../../ui/image/fit-image';

import { Button } from '@repo/ui/components/ui/button';
import Link from 'next/link';

function SwiperItemLayout({ item }: { item: mainIntroDataType }) {
  const mentoringUuId = item.mentoringUuid;
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 px-4 justify-between items-center">
      <div className="flex flex-col items-center md:items-start order-2 md:order-1">
        <div className="flex gap-x-1">
          {(item.categoryList && (
            <>
              {item?.categoryList?.map((category, index) => (
                <span
                  key={index}
                  className="max-w-[20rem] rounded-md text-md text-white bg-slate-400 px-3 py-1 overflow-hidden text-ellipsis whitespace-nowrap mb-5 cursor-default"
                >
                  {category.topCategoryName}
                </span>
              ))}
            </>
          )) ||
            null}
        </div>
        {/* 제목 */}
        <h2 className="text-center md:text-start text-ellipsis whitespace-pre-line text-[2rem] md:text-[3rem] font-extrabold leading-none max-w-[16ch]">
          {item.name}
        </h2>

        {/* 콘텐츠 */}
        <p className="max-w-[80%] text-gray-500 mt-8  md:text-md line-clamp-2 text-ellipsis whitespace-pre-wrap text-md">
          {item.description}
        </p>

        {/* 버튼들 */}
        <div className="flex flex-row gap-2 md:gap-4 mt-10 mb-10">
          <Link href={`/mentoring/${mentoringUuId}`}>
            <Button className="bg-[#FFD84D] text-white px-20 py-7 rounded-xl font-medium hover:bg-[#FFD84D]/90 text-xl">
              자세히보기
            </Button>
          </Link>
        </div>

        <div className="flex w-full gap-x-1 justify-center md:justify-start">
          {item?.hashTagList?.map((tag, index) => (
            <button
              key={index}
              className="md:px-2 py-1 rounded-full text-sm md:text-md text-gray-600 bg-slate-100 cursor-default"
            >
              {tag.hashtagName}
            </button>
          )) || null}
        </div>
      </div>
      {/* 이미지 */}
      <div className="flex justify-center relative py-10 order-1 md:order-2 mb-8 md:mb-0">
        <div className="w-[30%] max-w-[180px] aspect-square overflow-hidden rounded-2xl absolute top-0 right-0 md:right-5 ring-8 md:ring-[1rem] ring-white">
          <FitImage src={item.thumbnailUrl} alt={''} />
        </div>
        <div className="w-[90%] md:w-[80%] md:max-h-[400px] aspect-square overflow-hidden rounded-2xl">
          <FitImage src={item.thumbnailUrl} alt={''} />
        </div>
        <div className="w-[25%] max-w-[150px] aspect-square overflow-hidden rounded-2xl absolute bottom-3 left-0 md:left-3 ring-8 md:ring-[1rem] ring-white">
          <FitImage src={item.thumbnailUrl} alt={''} />
        </div>
      </div>
    </article>
  );
}

export default SwiperItemLayout;
