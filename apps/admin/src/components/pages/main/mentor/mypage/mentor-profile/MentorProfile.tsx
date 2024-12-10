import { Mentor } from '@repo/admin/components/types/main/mentor/mentorTypes';
import MentorProfileContent from './MentorProfileContent';

interface MentorProfileProps {
  mentor: Mentor;
}

export default function MentorProfile({ mentor }: MentorProfileProps) {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
      {mentor && (
        <MentorProfileContent
          profileImageUrl={mentor.profileImageUrl}
          memberRequestDto={mentor.memberRequestDto}
          mentorProfileRequestDto={mentor.mentorProfileRequestDto}
        />
      )}
    </div>
  );
}
