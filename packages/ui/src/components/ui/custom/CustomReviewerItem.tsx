import { SessionUser } from '@repo/ui/types/CommonType.ts';
import CustomValueUnit from './CustomValueUnit.tsx';
import UserCount from './UserCount.tsx';
import UserProfile from './UserProfile.tsx';

function CustomReviewerItem({
  initialUserData,
  className,
  userCount = 0,
  reviewCount = 0,
  text = 'Reviews',
}: {
  initialUserData: SessionUser[];
  className?: string;
  userCount?: number;
  reviewCount?: number;
  text?: string;
}) {
  console.log(initialUserData);
  // if (!initialUserData||!initialUserData[0].userImageUrl) return;
  return (
    <div className={`flex justify-start items-center ${className}`}>
      <ul
        className={`flex justify-start items-center ${userCount > 4 ? 'mr-1' : ''}`}
      >
        {initialUserData?.map((user, idx) => (
          <li key={idx}>
            <UserProfile
              profileImgUrl={initialUserData[idx].menteeImageUrl}
              size={40}
              name={user.nick ? user.nick : ''}
              className={`mr-[-1.2rem] border-[2px] border-white ring-none`}
            />
          </li>
        ))}
        <li className={`${userCount > 4 ? 'block' : 'invisible'}`}>
          <UserCount
            size={40}
            count={userCount}
            className="border-[2px] border-white ring-none"
          />
        </li>
      </ul>
      {reviewCount >= 0 && (
        <CustomValueUnit
          value={userCount}
          unit={text}
          valueSize="text-[1.09rem]"
          unitSize="text-sm"
        />
      )}
    </div>
  );
}
export default CustomReviewerItem;
