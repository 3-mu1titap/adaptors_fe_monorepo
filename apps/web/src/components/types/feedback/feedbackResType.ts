export interface ScoreType {
  element1: number;
  element2: number;
  element3: number;
  element4: number;
  element5: number;
  mentoringDate: string;
}

export interface FeedbackFirstLastScoreDto {
  id: string;
  firstScore: ScoreType;
  lastScore: ScoreType;
}

export interface FeedbackDto {
  feedbackFirstLastScoreDto: FeedbackFirstLastScoreDto;
  feedbackContent: string;
}

export interface MentoringFeedback {
  mentorNickName: string;
  mentoringSessionUuid: string;
  mentoringDate: string;
  categoryCode: string;
  element1: number;
  element2: number;
  element3: number;
  element4: number;
  element5: number;
  content: string;
}
