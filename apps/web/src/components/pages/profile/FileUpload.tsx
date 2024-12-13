import { uploadProfileIamge } from '@repo/web/actions/profile/profile';
import { ImageIcon, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { uploadFileToS3 } from '../../../actions/common/awsMediaUploader';
import useUserStore from '../../../store/uuidStore';
import NextButton from '../../ui/Button/NextButton';
import FitImage from '../../ui/image/fit-image';

export default function FileUpload({
  handleButton,
}: {
  handleButton: () => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string>();
  const { uuid } = useUserStore();

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

  // const handleMentoringImg = async () => {
  //   if (!file) return;
  //   try {
  //     const res = await uploadFileToS3(file, 'profile');
  //     if (res) {
  //       setThumbnailUrl(res);
  //       console.log(res);
  //     }
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };
  const handleNextButton = async () => {
    if (file) {
      try {
        const imageUrl = await uploadFileToS3(file, 'profile');
        await uploadProfileIamge({
          uuid,
          profileImage: imageUrl,
        });
        handleButton();
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div className="py-2 h-full flex flex-col justify-between w-full max-w-md mx-auto relative">
      {!preview ? (
        <label
          htmlFor="file-upload"
          className={`relative flex flex-col items-center justify-center w-full h-full min-h-[300px] border-2 border-dashed rounded-lg cursor-pointer bg-[#FFF9DF] transition-colors
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
        <span className="relative h-full flex items-center justify-center">
          <div className="h-[100%] max-h-[560px] sm:max-h-[400px] overflow-hidden py-auto">
            <FitImage src={preview} alt="Preview" />
          </div>
          <button
            onClick={handleRemove}
            className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-900 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </span>
      )}
      {/* <NextButton
        onClick={handleMentoringImg}
        text="프로필 이미지 등록"
        colorType="secondary"
        textColor="text-white"
        disabled={!file}
        className={`${file ? `` : `bg-gray-200 hover:bg-gray-200`}`}
      /> */}
      <NextButton onClick={handleNextButton} disabled={false} text="next" />
    </div>
  );
}
