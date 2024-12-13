export interface MenteeProfileRequestType {
  occupationStatus: string;
  educationLevel: string;
  age: number;
  gender: 'FEMALE' | 'MALE' | 'ATC';
  jobExperience: string;
  jobType: string;
  jobApplicationCount: number;
}

export interface MentorProfileRequestType {
  mentoringField: string;
  age: number;
  gender: string;
  jobExperience: string;
}

//회원의 프로필 이미지,닉네임 Request
export interface userProfileType {
  nickName: string;
  profileImageUrl: string;
}

export interface MentorInfoType {
  mentorUuid: string;
  nickName: string;
  profileImageUrl: string;
}

export interface userIntroductionType {
  content: string;
}
