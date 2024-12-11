import { Button } from '@repo/ui/components/ui/button';
import SelectedFile from '@repo/web/components/pages/AI-feedback/SelectedFile';
import { feedbackResult } from '@repo/web/components/types/AI-feedback/requestTypes';
import { Upload } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { requestAIFeedback_pdf } from 'src/actions/AI-feedback/AI-feedback';

interface FileWithPreview extends File {
  preview: string;
}

export default function FileUploadForm({
  job,
  category,
  setFeedback,
}: {
  job: string;
  category: string;
  setFeedback: React.Dispatch<React.SetStateAction<feedbackResult | null>>;
}) {
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) {
      addFile(droppedFiles[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      addFile(selectedFile);
    }
  };

  const addFile = (newFile: File) => {
    if (newFile.size > 5 * 1024 * 1024) {
      return;
    }

    if (
      (newFile.type.startsWith('image/') ||
        newFile.type === 'application/pdf') &&
      newFile.size <= 5 * 1024 * 1024
    ) {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
      setFile(
        Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        })
      );
    }
  };

  const removeFile = () => {
    if (file) {
      URL.revokeObjectURL(file.preview);
      setFile(null);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadFiles = async () => {
    if (!file) {
      console.error('파일이 없습니다');
      return;
    }
    setUploading(true);

    try {
      // 서버 요청 및 진행률 동기화
      const base64File = await fileToBase64(file);
      const data = await requestAIFeedback_pdf({
        industryType: job,
        documentType: category,
        file: base64File,
      });

      setUploading(false);
      setFile(null);
      setFeedback(data);
    } catch (error) {
      console.error('업로드 중 오류 발생:', error);
      setUploading(false);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto px-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          파일 업로드
        </h2>
        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-200 ease-in-out ${
            isDragging
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInput}
            accept="image/*,.pdf"
            className="hidden"
          />
          <p className="text-gray-500">
            파일을 이곳에 드래그하거나 클릭하여 선택하세요
            <br />
            <span className="text-sm">(최대 5MB, 이미지 또는 PDF)</span>
          </p>
          <Upload className="mx-auto mt-4 text-gray-400" size={32} />
        </div>

        {file && (
          <>
            <SelectedFile fileName={file.name} removeFile={removeFile} />
            <Button
              onClick={uploadFiles}
              className="w-full mt-4 px-4 py-2 text-md bg-adaptorsYellow text-white rounded hover:bg-black transition-colors duration-200"
            >
              분석하기
            </Button>
          </>
        )}
        {uploading && (
          <div className="w-full h-full bg-black/40 absolute top-0 left-0">
            <div className="loading-spinner mx-auto mt-[200px]"></div>
          </div>
        )}
      </div>
    </>
  );
}
