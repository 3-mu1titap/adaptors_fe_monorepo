import SearchIcon from '../../../assets/icons/Search';
import FitImage from '../../../ui/image/fit-image';

export default function MainIntro() {
  return (
    <section className="container mx-auto px-8 pt-4 pb-12 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm text-gray-600">
            [취업멘토] 아이돌 취업을 위한 첫걸음 멘토링
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            방탄과 함께하는
            <br />
            아이돌 멘토링
          </h1>
          <p className="text-gray-600 leading-relaxed">
            무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지
            메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을
            제공합니다. 그리고 꿈을 향해 한 걸음씩 나아가는 여정을 돕는 멘토링!
            데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어
            드립니다.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#FFD84D] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/90">
              Get Started
            </button>
            <button className="border-2 border-[#FFD84D] text-[#FFD84D] px-6 py-2 rounded-xl font-medium hover:bg-[#FFD84D]/10">
              Joint For Free
            </button>
          </div>
        </div>
        <div className="">
          <div className="p-2">
            <FitImage
              src="/assets/images/intro1.svg"
              alt="인트로1 이미지"
              className=""
            />
          </div>
        </div>

        <div className="md:col-span-2 mt-12">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search everything here..."
              className="w-full px-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD84D]"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hover:cursor-pointer group">
              <SearchIcon className="w-5 h-5 text-gray-400 group-hover:stroke-blue-500" />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            {['#멘토링', '#아이돌멘토링', '#오디션', '#케팝'].map((tag) => (
              <button
                key={tag}
                className="px-4 py-1 rounded-full text-sm text-gray-600 hover:bg-gray-100"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
