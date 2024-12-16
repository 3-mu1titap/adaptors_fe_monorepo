export interface MenteeInfo {
  name: string;
  nickName: string;
  email: string;
  accountId: string;
  phoneNumber: string;
}

export interface MenteeProfileInfo {
  mentoringField: string;
  occupationStatus: string;
  educationLevel: string;
  age: number;
  gender: 'MALE' | 'FEMALE';
  jobExperience: string;
  jobType: string;
  jobApplicationCount: number;
}

export interface Mentee {
  profileImageUrl: string;
  memberRequestDto: MenteeInfo;
  menteeProfileRequestDto: MenteeProfileInfo;
}

//멘티 프로필 수정 res
export interface MenteeProfileEditFormType {
  profileImageUrl: string;
  nickName: string;
  phoneNumber: string;
  gender: string;
  age: number;
  occupationStatus: string;
  educationLevel: string;
  jobExperience: string;
  jobType: string;
  jobApplicationCount: number;
}
