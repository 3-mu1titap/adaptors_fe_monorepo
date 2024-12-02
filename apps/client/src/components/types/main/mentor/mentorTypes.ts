export interface MemberInfo {
  name: string;
  nickName: string;
  email: string;
  accountId: string;
  phoneNumber: string;
}

export interface MentorProfileInfo {
  mentoringField: string;
  age: number;
  gender: 'MALE' | 'FEMALE';
  jobExperience: string;
}

export interface Mentor {
  profileImageUrl: string;
  memberRequestDto: MemberInfo;
  mentorProfileRequestDto: MentorProfileInfo;
}

export interface MentoringSession {
  id: string;
  menteeId: string;
  menteeName: string;
  date: string;
  duration: number;
  topic: string;
}
