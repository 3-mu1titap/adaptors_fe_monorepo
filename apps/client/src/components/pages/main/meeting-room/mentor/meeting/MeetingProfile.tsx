import MoreIcon from '../../../../../assets/icons/More';
import FitImage from '../../../../../ui/image/fit-image';

function MeetingProfile() {
  return (
    <div className="w-10/12 grid grid-cols-8 items-center rounded-full h-[50px] bg-[#F5F5F5]">
      <div className="col-span-2 w-[40px] h-[40px] ml-[10px]">
        <FitImage
          className="w-full h-auto overflow-hidden rounded-full border-4 border-[#F5F5F5]"
          src="/assets/images/dummy.jpg"
          alt="dummy"
        />
      </div>
      <div className="col-span-5">
        <p className="text-sm">BTS 진</p>
        <p className="text-xs text-[#9E9E9E]">Moderator</p>
      </div>
      <MoreIcon />
    </div>
  );
}

export default MeetingProfile;
