'use server';

import { feedbackResult } from '@components/types/AI-feedback/requestTypes';
import { commonResType } from '@components/types/ResponseTypes';

export const requestAIFeedback_coverletter = async ({
  industryType,
  coverLetter,
}: {
  industryType: string;
  coverLetter: string;
}): Promise<any> => {
  'use server';
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AI_FEEDBACK}/text?industryType=${industryType}&documentType=RESUME`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        coverLetter: coverLetter,
      }),
    }
  );
  // 서버 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post hash tags');
  }

  // 서버에서 받은 데이터 반환
  const data = (await response.json()) as commonResType<feedbackResult>;
  console.log(data.result);
  return data.result;
};

export const requestAIFeedback_pdf = async ({
  industryType,
  documentType,
  file,
}: {
  industryType: string;
  documentType: string;
  file: string; // Base64 encoded string
}): Promise<any> => {
  'use server';

  const formData = new FormData();
  formData.append('industryType', industryType);
  formData.append('documentType', documentType);

  // Decode base64 to binary and append as file
  const binaryData = Buffer.from(file.split(',')[1], 'base64');
  const blob = new Blob([binaryData], { type: 'application/pdf' });
  formData.append('file', blob, 'uploaded.pdf');

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 300000); // 5 minutes timeout
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_AI_FEEDBACK}/pdf`, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to upload file');
    }

    const data = (await response.json()) as commonResType<feedbackResult>;
    console.log(data);
    return data.result;
  } catch (error) {
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};
