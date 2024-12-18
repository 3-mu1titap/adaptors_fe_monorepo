import { Share2Icon } from 'lucide-react';
import { CustomToolTip } from './index';

function CustomShareButton() {
  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert('주소가 복사되었습니다.');
      })
      .catch((err) => {});
  };

  return (
    <CustomToolTip text="Share MY PAGE">
      <button
        className="w-full px-4 py-3 sm:py-4 bg-gray-100 hover:bg-adaptorsYellow hover:border-adaptorsYellow hover:text-white transition-all rounded-lg text-md font-semibold flex gap-4 items-center justify-center border-[1px] border-slate-300"
        onClick={handleShareClick} // 클릭 시 핸들러 호출
      >
        <Share2Icon />
        SHARE MY PAGE
      </button>
    </CustomToolTip>
  );
}

export default CustomShareButton;
