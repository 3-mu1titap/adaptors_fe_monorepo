'use client';

import { AlertTriangle, CheckSquare2, ImageIcon, X } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Editor } from '@toast-ui/react-editor';
// import '@toast-ui/editor/toastui-editor.css';
// import color from '@toast-ui/editor-plugin-color-syntax';
import { uploadFileToS3 } from '@repo/admin/actions/common/awsMediaUploader';
import { PostMentoring } from '@repo/admin/actions/mentoring/mentoringAction';
// import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// import 'tui-color-picker/dist/tui-color-picker.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  HashtagDataType,
  MentoringAddFormType,
  MentoringCategory,
  TopCategoryDataType,
} from '../types/main/mentor/mentoringTypes';

import FitImage from '../ui/image/fit-image';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
  'size',
  'h1',
];

export default function MentoringAddForm({
  topCategories,
  hashtags,
}: {
  topCategories: TopCategoryDataType[];
  hashtags: HashtagDataType[];
}) {
  const router = useRouter();

  const [formData, setFormData] = useState<MentoringAddFormType>({
    name: '',
    description: '',
    detail: '',
    isReusable: false,
    thumbnailUrl: '',
    sessionList: [],
    categoryList: [],
    hashTagList: [],
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(formData.thumbnailUrl);
  const [isDragging, setIsDragging] = useState(false);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  // const editorRef = useRef<Editor | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleCategorySelect = (category: TopCategoryDataType) => {
    // 대략적으로 해놓음
    const newCategory: MentoringCategory = {
      topCategoryName: category.topCategoryName,
      topCategoryCode: category.topCategoryCode,
    };

    setFormData((prevData) => {
      const isSelected = prevData.categoryList.some(
        (cat) => cat.topCategoryName === newCategory.topCategoryName
      );

      const newCategoryList = isSelected
        ? prevData.categoryList.filter(
            (cat) => cat.topCategoryName !== newCategory.topCategoryName
          )
        : [...prevData.categoryList, newCategory];

      return { ...prevData, categoryList: newCategoryList };
    });
  };

  const handleHashtagSelect = (hashtag: HashtagDataType) => {
    setFormData((prevData) => {
      const isSelected = prevData.hashTagList.some(
        (cat) => cat.hashtagId === hashtag.hashtagId
      );

      const newHashtagList = isSelected
        ? prevData.hashTagList.filter(
            (cat) => cat.hashtagId !== hashtag.hashtagId
          )
        : [...prevData.hashTagList, hashtag];

      return { ...prevData, hashTagList: newHashtagList };
    });
  };

  const handleEditorChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      detail: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      try {
        const imageUrl = await uploadFileToS3(file, 'mentoring');
        const payload = {
          ...formData,
          thumbnailUrl: imageUrl,
        };
        const res = await PostMentoring({ payload });
        if (res) {
          router.push('/mentor/mentoring');
        } else {
          alert(
            '예상치 못한 에러로 멘토링이 생성되지 않았습니다. 다시 시도해주세요.'
          );
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      Swal.fire({
        toast: true,
        icon: 'info',
        title: `썸네일을 넣어주세요.`,
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: '확인',
        customClass: {
          title: 'text-lg font-semibold text-gray-800 text-center',
          confirmButton:
            'col-span-3 bg-adaptorsYellow text-white py-2 px-4 rounded hover:bg-amber-500 !text-md',
          actions: '!grid !grid-cols-4 !justify-center',
        },
      });
    }
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  return (
    <form onSubmit={handleSubmit} className="w-full ">
      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">
          멘토링 제목을 입력해주세요
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-md"
          placeholder="예)프론트엔드 멘토링"
          value={formData.name}
          onChange={handleInputChange}
          required
          type="text"
          id="name"
          name="name"
        />
      </div>

      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">
          받고 싶은 멘토링을 선택해주세요
        </label>
        <div className="flex flex-wrap gap-2">
          {topCategories
            .filter((category) => category.categoryType === 'DOMAIN')
            .map((category, index) => {
              const isSelected = formData.categoryList.some(
                (cat) => cat.topCategoryName === category.topCategoryName
              );

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleCategorySelect(category)}
                  className={`flex items-center gap-2 py-2 px-2 rounded-md w-fit text-md ${
                    isSelected
                      ? '!bg-adaptorsYellow !text-black border-[1px] border-adaptorsYellow'
                      : '!bg-slate-200 border-[1px] border-slate-500 text-slate-700'
                  } hover:bg-gray-200`}
                >
                  {category.topCategoryName}
                  {isSelected ? <X size={12} /> : <CheckSquare2 size={12} />}
                </button>
              );
            })}
        </div>
      </div>

      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">
          직무 카테고리를 선택해주세요
        </label>
        <div className="flex flex-wrap gap-2">
          {topCategories
            .filter((category) => category.categoryType === 'JOB')
            .map((category, index) => {
              const isSelected = formData.categoryList.some(
                (cat) => cat.topCategoryName === category.topCategoryName
              );

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleCategorySelect(category)}
                  className={`flex items-center gap-2 py-2 px-2 rounded-md w-fit text-md ${
                    isSelected
                      ? '!bg-adaptorsYellow !text-black border-[1px] border-adaptorsYellow'
                      : '!bg-slate-200 border-[1px] border-slate-500 text-slate-700'
                  } hover:bg-gray-200`}
                >
                  {category.topCategoryName}
                  {isSelected ? <X size={12} /> : <CheckSquare2 size={12} />}
                </button>
              );
            })}
        </div>
      </div>

      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">
          해시태그를 선택해주세요
        </label>
        <div className="flex flex-wrap gap-2">
          {hashtags &&
            hashtags.map((hashtag, index) => {
              const isSelected = formData.hashTagList.some(
                (cat) => cat.hashtagId === hashtag.hashtagId
              );

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleHashtagSelect(hashtag)}
                  className={`flex items-center gap-2 py-2 px-2 rounded-md w-fit text-md ${
                    isSelected
                      ? '!bg-adaptorsYellow !text-black border-[1px] border-adaptorsYellow'
                      : '!bg-slate-200 border-[1px] border-slate-500 text-slate-700'
                  } hover:bg-gray-200`}
                >
                  {hashtag.hashtagName}
                  {isSelected ? <X size={12} /> : <CheckSquare2 size={12} />}
                </button>
              );
            })}
        </div>
      </div>

      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">대표이미지</label>
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
      </div>

      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">멘토링 한 줄 설명</label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-md"
          placeholder="예) 프론트엔드 멘토링을 위한 기초부터 심화까지"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="flex flex-col space-y-3 mb-16">
        <label className="text-xl font-bold px-1">멘토링 상세 설명</label>
        <div className="mb-4">
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={handleEditorChange}
            style={{ height: '450px' }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="isReusable"
            className="size-4 appearance-none rounded-sm border border-slate-300 accent-[#FEAA00] bg-white checked:bg-adaptorsYellow checked:border-transparent"
            checked={formData.isReusable}
            onChange={handleInputChange}
          />
          <span className="ml-2 text-md text-gray-700">
            템플릿으로 등록하기
          </span>
        </label>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-fit py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-extrabold text-white bg-adaptorsYellow hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          멘토링 생성
        </button>
      </div>
    </form>
  );
}
