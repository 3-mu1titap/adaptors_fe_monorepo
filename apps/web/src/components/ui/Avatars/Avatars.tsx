import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import { SessionUser } from '@repo/ui/types/CommonType.ts';

export default function Avatars({
  participate,
  remainingCount = 0,
  size = '10',
}: {
  participate: SessionUser[];
  remainingCount?: number;
  size?: string;
}) {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-4">
        {participate?.map((reviewer, index) => (
          <Avatar
            key={index}
            className={`h-${size} w-${size} border-4 border-background hover:border-none hover:w-18 hover:h-18 `}
          >
            {reviewer.menteeImageUrl ? (
              <AvatarImage
                src={reviewer.menteeImageUrl}
                alt={'reviewerImage'}
              />
            ) : (
              <AvatarFallback></AvatarFallback>
            )}
          </Avatar>
        ))}
        {remainingCount > 0 && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-blue-50 text-blue-500 font-medium z-10">
            +{remainingCount}
          </div>
        )}
      </div>
    </div>
  );
}
