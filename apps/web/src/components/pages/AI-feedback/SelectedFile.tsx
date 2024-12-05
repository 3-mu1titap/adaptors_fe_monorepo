import { Button } from '@repo/ui/components/ui/button';
import { X } from 'lucide-react';

export default function SelectedFile({
  fileName,
  removeFile,
}: {
  fileName: string;
  removeFile: () => void;
}) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">선택된 파일:</h3>
      <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
        <span
          className="text-sm text-gray-600 truncate"
          style={{ maxWidth: '200px' }}
        >
          {fileName}
        </span>
        <Button
          onClick={removeFile}
          className="text-red-500 hover:text-red-700 transition-colors duration-200"
        >
          <X size={18} />
        </Button>
      </div>
    </div>
  );
}
