import Share from '../../../assets/icons/Share';
import FitImage from '../../../ui/image/fit-image';
export default function MentoProfile({ mentorUuid }: { mentorUuid: string }) {
  //멘토 프로필 요청하기
  const mentorprofile = 1;
  return (
    <div className="space-y-4">
      <div className="hidden sm:block relative w-full aspect-square rounded-lg overflow-hidden">
        <FitImage
          src="/assets/images/intro1.svg"
          alt="Profile"
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold">@Jason Ahn</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>78K Reviews</span>
          <span>•</span>
          <span className="text-red-500">♥ 213K is Good</span>
        </div>
      </div>
      <button className="w-full px-4 py-3 sm:py-4 bg-gray-100 rounded-lg text-lg font-semibold flex gap-1 items-center justify-center">
        <Share />
        SHARE THIS MENTOR
      </button>
    </div>
  );
}
