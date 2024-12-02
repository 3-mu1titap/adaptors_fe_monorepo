import { Mentor } from '@repo/client/components/types/main/mentor/mentorTypes';
import MentorProfileContent from './MentorProfileContent';

interface MentorProfileProps {
  mentor: Mentor;
}

export default function MentorProfile({ mentor }: MentorProfileProps) {
  const { profileImageUrl, memberRequestDto, mentorProfileRequestDto } = mentor;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
      <MentorProfileContent
        profileImageUrl={profileImageUrl}
        memberRequestDto={memberRequestDto}
        mentorProfileRequestDto={mentorProfileRequestDto}
      />
    </div>
  );
}
