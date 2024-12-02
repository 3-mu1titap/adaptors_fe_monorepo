import { Tooltip } from '@components/ui/ToollTip/ToolTip';
import Image from 'next/image';
function UserProfile({ size }: { size?: number }) {
  const defaultSize = size || 40;
  return (
    <Tooltip text={'profile'}>
      <div
        className="rounded-full bg-gray-400 overflow-hidden ring-1 drop-shadow-md cursor-pointer"
        style={{
          width: `${defaultSize}px`,
          height: `${defaultSize}px`,
        }}
      >
        <Image
          src="https://i.pinimg.com/736x/6d/98/bd/6d98bd0a456e85177d8fbd65a54be284.jpg"
          alt="user"
          width={500}
          height={500}
          priority
        />
      </div>
    </Tooltip>
  );
}
export default UserProfile;
