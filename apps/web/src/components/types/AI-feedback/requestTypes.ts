export type Industry_Type =
  | 'MARKETING'
  | 'IT'
  | 'PROJECT_MANAGEMENT'
  | 'CONTENT_CREATION'
  | 'EDUCATION';

export type Document_Type = 'RESUME' | 'PORTFOLIO' | 'COVER_LETTER';

export interface feedbackResult {
  improvements: string;
  strengths: string;
}
