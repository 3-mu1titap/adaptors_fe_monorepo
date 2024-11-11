'use client';

import { ImageIcon, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import JoinStepButton from '../../ui/Button/JoinStepButton';

export default function FileUpload({
  handleButton,
}: {
  handleButton: () => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files && files[0]) {
      setFile(files[0]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
  };

  // const handleMentoringImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const { files } = e.target;
  //   if (!files || files.length === 0) return;
  //   try {
  //     const res = await uploadFileToS3(files[0], 'mentoring');
  //     console.log('이건 res', res);
  //     if (res) {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         thumbnailUrl: res,
  //       }));
  //     }
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };

  return (
    <>
      <div className="w-full max-w-md mx-auto p-4 h-full relative">
        {!preview ? (
          <label
            htmlFor="file-upload"
            className={`relative flex flex-col items-center justify-center w-full h-80 border-2 border-dashed rounded-lg cursor-pointer bg-[#fffcf3] transition-colors
              ${isDragging ? 'border-gray-500' : 'border-gray-300'}
              hover:bg-[#fff9e6]`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="bg-gray-800 rounded-full p-3 mb-4">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
              <p className="mb-2 text-xl text-gray-700">사진을 등록해주세요</p>
              <p className="text-lg text-gray-500">Drag and drop here</p>
            </div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleChange}
              accept="image/*"
            />
          </label>
        ) : (
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-80 object-cover rounded-lg"
            />
            <button
              onClick={handleRemove}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-900 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        )}
        <JoinStepButton
          onClick={handleButton} //파일 업로드 + onNextStep으로 수정
          disabled={false} //!validateForm2(formData)
        />
      </div>
    </>
  );
}
