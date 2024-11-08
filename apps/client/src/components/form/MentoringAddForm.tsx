'use client';

import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TopCategoryDataType } from '../types/main/mentor/mentoringTypes';
import {
  GetTopCategoryList,
  PostMentoring,
} from '../../actions/mentoring/mentoringAction';
import { ko } from 'date-fns/locale';
import { uploadFileToS3 } from '../../actions/common/awsMediaUploader';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import color from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

export interface MentoringCategory {
  topCategoryName: string;
  topCategoryCode: string;
}

export interface MentoringSession {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  deadlineDate: Date;
  minHeadCount: number;
  maxHeadCount: number;
  price: number;
}

export interface MentoringAddForm {
  name: string;
  detail: string;
  mentorUuid: string;
  isReusable: boolean;
  thumbnailUrl: string;
  sessionList: MentoringSession[];
  categoryList: MentoringCategory[];
}

export default function MentoringForm({
  topCategories,
}: {
  topCategories: TopCategoryDataType[];
}) {
  const [formData, setFormData] = useState<MentoringAddForm>({
    name: '',
    detail: '',
    mentorUuid: '671a55ae-2346-407f-85e3-9cd39f4e3d10',
    isReusable: false,
    thumbnailUrl: '',
    sessionList: [],
    categoryList: [],
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(Date.now() + 24 * 60 * 60 * 1000)
  );
  const [startTime, setStartTime] = useState<string>('00:00');
  const [endTime, setEndTime] = useState<string>('00:00');
  const [deadlineDate, setDeadlineDate] = useState<Date | null>(new Date());

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

  const handleSelectedDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const deadline = new Date(date);
      deadline.setDate(deadline.getDate() - 1);
      setDeadlineDate(deadline);
    } else {
      setDeadlineDate(null);
    }
  };

  const handleStartTimeChange = (time: string) => {
    setStartTime(time);

    if (time) {
      const [hours, minutes] = time.split(':').map(Number);
      const endDate = new Date();
      endDate.setHours(hours);
      endDate.setMinutes(minutes + 30);

      const formattedEndTime = `${String(endDate.getHours()).padStart(2, '0')}:${String(endDate.getMinutes()).padStart(2, '0')}`;
      setEndTime(formattedEndTime);
    }
  };

  const handleEndTimeChange = (time: string) => {
    if (time && startTime) {
      const [startHours, startMinutes] = startTime.split(':').map(Number);
      const [endHours, endMinutes] = time.split(':').map(Number);

      const startDate = new Date();
      startDate.setHours(startHours, startMinutes);

      const endDate = new Date();
      endDate.setHours(endHours, endMinutes);

      if (endDate < new Date(startDate.getTime() + 30 * 60 * 1000)) {
        alert('종료 시간은 시작 시간 30분 이후여야 합니다.');
        return;
      }
    }
    setEndTime(time);
  };

  const handleSessionAdd = () => {
    if (selectedDate && startTime && endTime && deadlineDate) {
      const newSession: MentoringSession = {
        startDate: selectedDate,
        endDate: selectedDate,
        startTime,
        endTime,
        deadlineDate: deadlineDate,
        minHeadCount: 2,
        maxHeadCount: 5,
        price: 100,
      };
      setFormData((prevData) => ({
        ...prevData,
        sessionList: [...prevData.sessionList, newSession],
      }));
      setStartTime('');
      setEndTime('');
      setDeadlineDate(new Date());
    }
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
    <form
      onSubmit={handleSubmit}
      className="w-[600px] mx-auto my-10 p-6 bg-white rounded-lg border-2 shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          멘토링 이름
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          카테고리 선택 (최소 1개)
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2">
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
                  className={`py-2 px-4 rounded ${
                    isSelected
                      ? 'bg-adaptorsBlue text-white'
                      : 'bg-gray-100 text-gray-700'
                  } hover:bg-gray-200`}
                >
                  {category.topCategoryName}
                </button>
              );
            })}
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="thumbnail"
          className="block text-sm font-medium text-gray-700"
        >
          썸네일
        </label>
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
          <img
            src={`${formData.thumbnailUrl}`}
            alt="Thumbnail"
            className="mt-2 w-32 h-32 object-cover rounded"
          />
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          세션 선택
        </label>
        <div className="flex mt-2">
          <div className="w-1/2 pr-2">
            <DatePicker
              locale={ko}
              selected={selectedDate}
              onChange={handleSelectedDateChange}
              minDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
              maxDate={new Date(Date.now() + 31 * 24 * 60 * 60 * 1000)}
              inline
            />
          </div>
          <div className="w-1/2 pl-2">
            <div className="mb-2">
              <label
                htmlFor="startTime"
                className="block text-sm font-medium text-gray-700"
              >
                시작 시간
              </label>
              <input
                type="time"
                id="startTime"
                value={startTime}
                onChange={(e) => handleStartTimeChange(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="endTime"
                className="block text-sm font-medium text-gray-700"
              >
                종료 시간
              </label>
              <input
                type="time"
                id="endTime"
                value={endTime}
                onChange={(e) => handleEndTimeChange(e.target.value)}
                min={startTime}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="deadlineDate"
                className="block text-sm font-medium text-gray-700"
              >
                마감 시간
              </label>
              <input
                type="date"
                id="deadlineDate"
                value={
                  deadlineDate ? deadlineDate.toISOString().split('T')[0] : ''
                }
                onChange={(e) => setDeadlineDate(new Date(e.target.value))}
                min={
                  selectedDate
                    ? new Date().toISOString().split('T')[0]
                    : undefined
                }
                max={
                  selectedDate
                    ? new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000)
                        .toISOString()
                        .split('T')[0]
                    : undefined
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <button
              type="button"
              onClick={handleSessionAdd}
              className="mt-2 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-adaptorsBlue hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              세션 추가
            </button>
          </div>
        </div>
        {formData.sessionList.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">선택된 세션</h3>
            <ul className="mt-2 divide-y divide-gray-200">
              {formData.sessionList.map((session, index) => (
                <li key={index} className="py-2">
                  {session.startDate.toLocaleDateString()} {session.startTime} -{' '}
                  {session.endTime}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mb-4">
        <Editor
          ref={editorRef}
          initialValue="멘토링 내용을 작성해주세요"
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={false}
          hideModeSwitch={true}
          plugins={[color]}
          onChange={handleEditorChange}
        />
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="isReusable"
            checked={formData.isReusable}
            onChange={handleInputChange}
            className="rounded border-gray-300 text-adaptorsBlue shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-sm text-gray-700">재사용 가능</span>
        </label>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-adaptorsBlue hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          멘토링 생성
        </button>
      </div>
    </form>
  );
}
