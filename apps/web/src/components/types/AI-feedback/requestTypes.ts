export type Industry_Type =
  | 'MARKETING'
  | 'IT'
  | 'PROJECT_MANAGEMENT'
  | 'CONTENT_CREATION'
  | 'EDUCATION';

export type Document_Type = 'RESUME' | 'PORTFOLIO' | 'COVER_LETTER';

// interface AIFeedback {
//   industryType: Industry_Type;
//   documentType:Document_Type;

// }

export interface feedbackResult {
  improvements: string;
  strengths: string;
}
