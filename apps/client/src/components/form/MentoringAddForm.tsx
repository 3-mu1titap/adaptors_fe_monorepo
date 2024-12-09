'use client';

import React, { useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Check, CheckCircle, CheckSquare2, X } from 'lucide-react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import color from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import {
  HashtagDataType,
  MentoringAddFormType,
  MentoringCategory,
  TopCategoryDataType,
} from '../types/main/mentor/mentoringTypes';
import { uploadFileToS3 } from '@repo/client/actions/common/awsMediaUploader';
import { PostMentoring } from '@repo/client/actions/mentoring/mentoringAction';

import { CustomFitImage } from '@repo/ui/components/ui/custom/index';

export default function MentoringAddForm({
  topCategories,
  hashtags,
}: {
  topCategories: TopCategoryDataType[];
  hashtags: HashtagDataType[];
}) {
  const [formData, setFormData] = useState<MentoringAddFormType>({
    name: '',
    description: '',
    detail: '',
    isReusable: false,
    thumbnailUrl: '',
    sessionList: [],
    categoryList: [],
    hashtagList: [],
  });

  const editorRef = useRef<Editor | null>(null);

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

  const handleMentoringImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { files } = e.target;
    if (!files || files.length === 0) return;
    try {
      const res = await uploadFileToS3(files[0], 'mentoring');
      console.log('이건 res', res);
      if (res) {
        setFormData((prevData) => ({
          ...prevData,
          thumbnailUrl: res,
        }));
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
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
      const isSelected = prevData.hashtagList.some(
        (cat) => cat.name === hashtag.name
      );

      const newHashtagList = isSelected
        ? prevData.hashtagList.filter((cat) => cat.name !== hashtag.name)
        : [...prevData.hashtagList, hashtag];

      return { ...prevData, hashtagList: newHashtagList };
    });
  };

  const handleEditorChange = () => {
    const description = editorRef.current?.getInstance().getHTML();
    setFormData((prevData) => ({
      ...prevData,
      detail: description || '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await PostMentoring(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full ">
      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">
          멘토링 이름을 입력해주세요
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-md"
          placeholder="예)프론트엔드 멘토링"
          value={formData.name}
          onChange={handleInputChange}
          required
          type="text"
          name="id"
        />
      </div>

      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">
          카테고리를 선택해주세요 (최소 1개)
        </label>
        <div className="flex flex-wrap gap-2">
          {topCategories &&
            topCategories.map((category, index) => {
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
        <label className="block text-sm font-medium text-gray-700 px-2 mt-3"></label>
      </div>

      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">
          해시태그를 선택해주세요 (최소 1개)
        </label>
        <div className="flex flex-wrap gap-2">
          {hashtags &&
            hashtags.map((hashtag, index) => {
              const isSelected = formData.hashtagList.some(
                (cat) => cat.name === hashtag.name
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
                  {hashtag.name}
                  {isSelected ? <X size={12} /> : <CheckSquare2 size={12} />}
                </button>
              );
            })}
        </div>
      </div>

      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">대표이미지</label>
        <input
          type="file"
          id="thumbnail"
          onChange={handleMentoringImg}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
        />
        {formData.thumbnailUrl && (
          <CustomFitImage
            src={`${formData.thumbnailUrl}`}
            alt="Thumbnail"
            className="mt-2 w-32 h-32 object-cover rounded"
          />
        )}
      </div>

      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">멘토링 간략 설명</label>
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

      <div className="flex flex-col space-y-3 mb-6">
        <label className="text-xl font-bold px-1">멘토링 상세</label>
        <div className="mb-4">
          <Editor
            ref={editorRef}
            placeholder="멘토링 내용을 작성해주세요"
            previewStyle="vertical"
            height="300px"
            initialEditType="wysiwyg"
            useCommandShortcut={false}
            hideModeSwitch={true}
            plugins={[color]}
            onChange={handleEditorChange}
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
          className="w-fit py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-extrabold text-white bg-adaptorsBlue hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          멘토링 생성
        </button>
      </div>
    </form>
  );
}
