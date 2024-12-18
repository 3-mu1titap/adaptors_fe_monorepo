import { Mentee } from '@repo/web/components/types/mentee/MenteeType';
import MenteeProfileContent from './MenteeProfileContext';

interface MenteeProfileProps {
  mentee: Mentee;
}

export default function MenteeProfile({ mentee }: MenteeProfileProps) {
  const { profileImageUrl, memberRequestDto, menteeProfileRequestDto } = mentee;

  return (
    <div className="max-w-4xl overflow-hidden w-full sm:mx-auto mt-10 bg-white shadow-md rounded-lg">
      {mentee && (
        <MenteeProfileContent
          profileImageUrl={profileImageUrl}
          memberRequestDto={memberRequestDto}
          menteeProfileRequestDto={menteeProfileRequestDto}
        />
      )}
    </div>
  );
}
