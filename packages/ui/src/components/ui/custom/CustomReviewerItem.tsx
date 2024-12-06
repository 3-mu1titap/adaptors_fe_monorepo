import CustomValueUnit from './CustomValueUnit.tsx';
import UserCount from './UserCount.tsx';
import UserProfile from './UserProfile.tsx';

interface UserProfileProps {
  id: number;
  profileImgUrl: string;
  name: string;
}
function CustomReviewerItem({
  initialUserData,
  className,
}: {
  initialUserData: UserProfileProps[];
  className?: string;
}) {
  return (
    <div className={`flex justify-start items-center ${className}`}>
      <ul className="flex justify-start items-center">
        {initialUserData.map((user) => (
          <li>
            <UserProfile
              key={user.id}
              profileImgUrl={user.profileImgUrl}
              size={40}
              name={user.name}
              className="mr-[-1.2rem] border-[2px] border-white ring-none"
            />
          </li>
        ))}
        <li>
          <UserCount
            size={40}
            count={13}
            className="border-[2px] border-white ring-none"
          />
        </li>
      </ul>
      <CustomValueUnit
        value={200823}
        unit="Reviews"
        valueSize="text-[1.09rem]"
        unitSize="text-sm"
      />
    </div>
  );
}
export default CustomReviewerItem;
