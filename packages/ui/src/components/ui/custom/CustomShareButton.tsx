import { Share2Icon } from 'lucide-react';
import { CustomTooltip } from './CustomTooltip';

function CustomShareButton() {
  return (
    <CustomTooltip text="Share MY PAGE">
      <button className="w-full px-4 py-3 sm:py-4 bg-gray-100 hover:bg-adaptorsYellow hover:border-adaptorsYellow hover:text-white transition-all rounded-lg text-md font-semibold flex gap-4 items-center justify-center border-[1px] border-slate-300">
        <Share2Icon />
        SHARE MY PAGE
      </button>
    </CustomTooltip>
  );
}
export default CustomShareButton;
