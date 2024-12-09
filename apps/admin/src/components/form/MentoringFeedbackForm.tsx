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
  면접: [
    '논리적 사고 및 문제 해결 능력',
    '자신감 및 태도',
    '의사소통 및 표현력',
    '적응력 및 유연성',
    '직무 적합성 및 회사에 대한 이해',
  ],
  자기소개서: [
    '구성 및  논리적 흐름',
    '자기소개 및 강점 강조',
    '지원 동기 및 직무 적합성',
    '글의 표현력 및 문법',
    '성취 및 경험 사례',
  ],
  이력서: [
    '경력 및 학력 사항의 명확성',
    '기술 및 자격증',
    '업무 성과 중심의 경력 기술',
    '맞춤화 및 직무 연관성',
    '가독성 및 디자인',
  ],
  포트폴리오: [
    '프로젝트 다양성 및 깊이',
    '결과와 성과',
    '기술적 능력과 활용',
    'UI/UX 디자인 및 가독성',
    '자기소개 및 목표의 일관성',
  ],
};

const MAX_CONTENT_LENGTH = 2000;

export default function MentoringFeedbackForm({
  sessionUuid,
}: {
  sessionUuid: string;
}) {
  const router = useRouter();
  const [feedback, setFeedback] = useState<MentoringFeedbackType>({
    mentorNickName: '',
    mentoringSessionUuid: sessionUuid,
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
    console.log(feedback);
    // await postFeedback(feedback);
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
