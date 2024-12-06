import { SessionUser } from '@repo/ui/types/CommonType.ts';
import CustomValueUnit from './CustomValueUnit.tsx';
import UserCount from './UserCount.tsx';
import UserProfile from './UserProfile.tsx';

function CustomReviewerItem({
  initialUserData,
  className,
  userCount,
  reviewCount,
}: {
  initialUserData: SessionUser[];
  className?: string;
  userCount?: number;
  reviewCount?: number;
}) {
  return (
    <div className={`flex justify-start items-center ${className}`}>
      <ul className="flex justify-start items-center">
        {initialUserData.map((user) => (
          <li>
            <UserProfile
              key={user.userUuid}
              profileImgUrl={user.menteeImageUrl}
              size={40}
              name={user.userUuid}
              className="mr-[-1.2rem] border-[2px] border-white ring-none"
            />
          </li>
        ))}
        {userCount && (
          <li>
            <UserCount
              size={40}
              count={userCount}
              className="border-[2px] border-white ring-none"
            />
          </li>
        )}
      </ul>
      {reviewCount && (
        <CustomValueUnit
          value={reviewCount}
          unit="Reviews"
          valueSize="text-[1.09rem]"
          unitSize="text-sm"
        />
      )}
    </div>
  );
}
export default CustomReviewerItem;
