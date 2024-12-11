import { Mentee } from '@repo/web/components/types/mentee/MenteeType';
import MenteeProfileContent from './MenteeProfileContext';

interface MenteeProfileProps {
  mentee: Mentee;
}

export default function MenteeProfile({ mentee }: MenteeProfileProps) {
  const { profileImageUrl, memberRequestDto, menteeProfileRequestDto } = mentee;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
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
