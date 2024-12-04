import { AlertCircle, CheckCircle } from 'lucide-react';

export default function Status({ uploadStatus }: { uploadStatus: string }) {
  console.log(uploadStatus);
  if (uploadStatus === 'idle') return;
  return uploadStatus === 'success' ? (
    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
      <CheckCircle className="mr-2" />
      분석 완료!
    </div>
  ) : (
    <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg flex items-center justify-center">
      <AlertCircle className="mr-2" />
      {uploadStatus === 'fileSizeError'
        ? `PDF 파일 5MB 이하만 업로드 가능합니다`
        : `업로드 실패. 다시 시도해주세요.`}
    </div>
  );
}
