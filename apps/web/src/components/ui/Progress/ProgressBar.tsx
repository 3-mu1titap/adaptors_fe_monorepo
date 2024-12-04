export default function ProgressBar({
  uploadProgress,
  className = '',
}: {
  uploadProgress: number;
  className?: string;
}) {
  return (
    <div className={`mt-4 relative pt-1 className`}>
      {/* 위에글자 */}
      <div className="flex mb-2 items-center justify-between">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
          분석 중
        </span>
        <span className="text-xs font-semibold inline-block text-blue-600">
          {uploadProgress}%
        </span>
      </div>
      {/* 프로그래스바 */}
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
        <div
          style={{ width: `${uploadProgress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
        />
      </div>
    </div>
  );
}
