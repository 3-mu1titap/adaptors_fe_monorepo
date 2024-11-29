'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@repo/ui/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/ui/select';
import { Slider } from '@repo/ui/components/ui/slider';
import { Textarea } from '@repo/ui/components/ui/textarea';
import {
  CategoryCodeType,
  CategoryElementsType,
  MentoringFeedbackType,
} from '@repo/client/components/types/main/meeting/meetingTypes';
import { postFeedback } from '@repo/client/actions/meeting/meetingAction';

const categoryElements: CategoryElementsType = {
  면접: ['발음', '태도', '내용', '자세', '?'],
  자기소개서: ['문장력', '내용', '구성', '?', '??'],
  이력서: ['형식', '내용', '가독성', '?', '??'],
  포트폴리오: ['프로젝트 다양성', '기술 스택', '문서화', '디자인', '?'],
};

const MAX_CONTENT_LENGTH = 2000;

export default function MentoringFeedbackForm() {
  const router = useRouter();
  const [feedback, setFeedback] = useState<MentoringFeedbackType>({
    mentorNickName: '',
    mentoringSessionUuid: '',
    categoryCode: '면접',
    elements: {},
    content: '',
  });
  const [charCount, setCharCount] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, 100)}px`;
    }
  }, [feedback.content]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postFeedback(feedback);
  };

  const handleScoreChange = (element: string, value: number[]) => {
    setFeedback((prev) => ({
      ...prev,
      elements: {
        ...prev.elements,
        [element]: value[0],
      },
    }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    const newCharCount = Array.from(newContent).reduce((count, char) => {
      const code = char.charCodeAt(0);
      return count + (code > 127 && code !== 0x3000 ? 2 : 1);
    }, 0);

    if (newCharCount <= MAX_CONTENT_LENGTH) {
      setFeedback((prev) => ({ ...prev, content: newContent }));
      setCharCount(newCharCount);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-1 p-8 bg-gradient-to-r from-yellow-300/60 via-yellow-300/80 to-yellow-300/100 rounded-lg shadow-2xl"
    >
      <div className="space-y-1">
        <h2 className="text-4xl font-extrabold text-yellow-700">
          멘토링 피드백
        </h2>
        <p className="text-xl text-yellow-600">
          멘티의 성장을 위한 소중한 피드백을 남겨주세요.
        </p>
      </div>

      <Select
        value={feedback.categoryCode}
        onValueChange={(value: CategoryCodeType) =>
          setFeedback({ ...feedback, categoryCode: value, elements: {} })
        }
      >
        <SelectTrigger className="bg-yellow-50 text-yellow-800 border-yellow-300 text-lg">
          <SelectValue placeholder="카테고리 선택" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(categoryElements).map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="space-y-1">
        <label className="text-2xl font-semibold text-yellow-700">
          평가 요소
        </label>
        {categoryElements[
          feedback.categoryCode as keyof CategoryElementsType
        ].map((element) => (
          <div key={element} className="space-y-1">
            <label htmlFor={element} className="text-yellow-600">
              {element}
            </label>
            <div className="flex items-center space-x-4">
              <Slider
                id={element}
                min={0}
                max={10}
                step={1}
                value={[feedback.elements[element] || 0]}
                onValueChange={(value) => handleScoreChange(element, value)}
                className="flex-grow cursor-pointer "
              />
              <span className="text-yellow-700 font-semibold">
                {feedback.elements[element] || 0}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-1">
        <Textarea
          ref={textareaRef}
          placeholder="피드백 내용"
          value={feedback.content}
          onChange={handleContentChange}
          className="bg-yellow-50 text-yellow-800 placeholder-adaptorsYellow border-yellow-300 min-h-[100px] resize-none"
          rows={4}
        />
        <div className="text-right text-yellow-600">
          {charCount}/{MAX_CONTENT_LENGTH}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-adaptorsYellow text-xl text-white hover:bg-yellow-500"
      >
        피드백 제출
      </Button>
    </form>
  );
}
