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
