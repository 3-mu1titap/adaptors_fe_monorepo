import UserProfile from '@repo/ui/components/ui/custom/UserProfile';
import AdaptorsLogoIcon from '../assets/icons/AdaptorsLogo';
import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';

const initialUserData = [
  {
    userUuid: '389d459sssc8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=14',
  },
  {
    userUuid: '389d45sd9c8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=23',
  },
  {
    userUuid: '389d459c8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=56',
  },
  {
    userUuid: '389d459dsc8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=78',
  },
];

export default function MentoringHeader() {
  return (
    <header className="fixed top-0 left-0 w-full py-6 px-10 border-b-[1px] border-[#F3F3F3] bg-white z-[10]">
      <div className="flex justify-between items-center">
        <AdaptorsLogoIcon className="w-[180px] mt-0 flex items-center gap-2" />
        <div className="flex justify-center items-center gap-5">
          <CustomReviewerItem
            initialUserData={initialUserData}
            className="flex lg:!hidden"
            userCount={30}
            reviewCount={293938}
          />
          <UserProfile size={40} />
        </div>
      </div>
    </header>
  );
}
