import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { ImageIcon, X } from 'lucide-react';
import { Input } from '../ui/input/CommonInput';
import RadioButton from '../ui/radio/RadioButton';
import FitImage from '../ui/image/fit-image';
import { MentorProfileEditFormType } from '../types/main/mypage/myPageTypes';

interface MentorProfileEditFormProps {
  formData: MentorProfileEditFormType;
  setFormData: React.Dispatch<React.SetStateAction<MentorProfileEditFormType>>;
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
}

export default function MentorProfileEditForm({
  formData,
  setFormData,
  file,
  setFile,
}: MentorProfileEditFormProps) {
  const [preview, setPreview] = useState<string | null>(
    formData.profileImageUrl
  );
  const [isDragging, setIsDragging] = useState(false);

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

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }));
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  return (
    <>
      <fieldset className="relative flex justify-center items-center w-full rounded-xl bg-white focus-within:ring-2 focus-within:ring-yellow-300 mb-2">
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
              onChange={handleImageChange}
              accept="image/*"
            />
          </label>
        ) : (
          <span className="relative h-full flex items-center justify-center">
            <div className="h-[100%] max-h-auto max-w-[400px] overflow-hidden py-auto">
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
      </fieldset>
      <fieldset className="space-y-1">
        <label
          htmlFor="nickName"
          className="block text-lg font-medium text-gray-700"
        >
          닉네임
        </label>
        <Input
          name="nickName"
          id="nickName"
          value={formData.nickName}
          type="text"
          placeholder="닉네임을 입력하세요"
          className="custom-input"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="space-y-1">
        <label
          htmlFor="phoneNumber"
          className="block text-lg font-medium text-gray-700"
        >
          전화번호
        </label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          type="tel"
          placeholder="전화번호를 입력하세요"
          className="custom-input"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="space-y-2">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          멘토링 분야
        </label>
        <div className="grid grid-cols-2 gap-2 text-center">
          {['면접', '이력서', '포트폴리오', '자소서'].map((field) => (
            <div
              key={field}
              onClick={() =>
                setFormData((prev) => ({ ...prev, mentoringField: field }))
              }
              className={`px-3 py-2 rounded-md text-md font-medium transition-colors cursor-pointer
                    ${
                      formData.mentoringField === field
                        ? 'bg-[#F8D448] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
            >
              {field}
            </div>
          ))}
        </div>
      </fieldset>
      <fieldset className="space-y-2">
        <label
          htmlFor="age"
          className="block text-lg font-medium text-gray-700"
        >
          출생년도
        </label>
        <Input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="출생년도를 입력해주세요 ex)2000"
          className="custom-div number"
        />
      </fieldset>
      <fieldset className="space-y-2">
        <label
          htmlFor="gender"
          className="block text-lg font-medium text-gray-700"
        >
          성별
        </label>
        <RadioButton
          name="gender"
          options={[
            { label: '남성', value: 'MALE' },
            { label: '여성', value: 'FEMALE' },
            { label: '기타', value: 'OTHERS' },
          ]}
          selectedValue={formData.gender}
          onChange={handleRadioChange}
        />
      </fieldset>
      <fieldset className="space-y-2">
        <label
          htmlFor="jobExperience"
          className="block text-lg font-medium text-gray-700"
        >
          경력
        </label>
        <Input
          id="jobExperience"
          name="jobExperience"
          type="text"
          value={formData.jobExperience}
          onChange={handleChange}
          placeholder="(예: 3년)"
          className="custom-div"
        />
      </fieldset>
    </>
  );
}
