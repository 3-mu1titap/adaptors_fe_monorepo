import { mainIntroDataType } from '@components/types/home/homeResponseType';
import FitImage from '../../../../ui/image/fit-image';

function SwiperItemLayout({ item }: { item: mainIntroDataType }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 px-4 justify-between items-center">
      <div className="flex flex-col items-center md:items-start order-2 md:order-1">
        {/* 버튼 */}
        <div className="max-w-[20rem] rounded-md text-md text-white bg-slate-400 px-3 py-1 overflow-hidden text-ellipsis whitespace-nowrap mb-5">
          {item.subtitle}
        </div>

        {/* 제목 */}
        <h2 className="text-center md:text-start text-ellipsis whitespace-pre-line text-[2rem] md:text-[3rem] font-extrabold leading-none">
          {item.title}
        </h2>

        {/* 콘텐츠 */}
        <p className="max-w-[80%] text-gray-500 mt-8  md:text-md line-clamp-2 text-ellipsis whitespace-pre-wrap text-md">
          {item.content}
        </p>

        {/* 버튼들 */}
        <div className="flex flex-row gap-2 md:gap-4 mt-14 mb-10">
          <button className="bg-[#FFD84D] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/90 text-md">
            Get Mentoring
          </button>
          <button className="border-2 border-[#FFD84D] text-[#FFD84D] px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/10 text-md">
            More Info
          </button>
        </div>
      </div>

      {/* 이미지 */}
      <div className="flex justify-center relative py-10 order-1 md:order-2 mb-8 md:mb-0">
        <div className="w-[30%] max-w-[180px] aspect-square overflow-hidden rounded-2xl absolute top-0 right-0 md:right-5 ring-8 md:ring-[1rem] ring-white">
          <FitImage
            src={item.thumbNailImages[1].src}
            alt={item.thumbNailImages[1].description}
          />
        </div>
        <div className="w-[90%] md:w-[80%] md:max-h-[400px] aspect-square overflow-hidden rounded-2xl">
          <FitImage
            src={item.thumbNailImages[0].src}
            alt={item.thumbNailImages[0].description}
          />
        </div>
        <div className="w-[25%] max-w-[150px] aspect-square overflow-hidden rounded-2xl absolute bottom-3 left-0 md:left-3 ring-8 md:ring-[1rem] ring-white">
          <FitImage
            src={item.thumbNailImages[2].src}
            alt={item.thumbNailImages[2].description}
          />
        </div>
      </div>
    </article>
  );
}

export default SwiperItemLayout;
