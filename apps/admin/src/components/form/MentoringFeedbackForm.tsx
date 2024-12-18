'use client';

import { postFeedback } from '@repo/admin/actions/meeting/meetingAction';
import {
  CategoryCodeType,
  CategoryElementsType,
  MentoringFeedbackType,
} from '@repo/admin/components/types/main/meeting/meetingTypes';
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
import { CircleAlert, NotebookPen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

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
      className=" p-6 my-2 rounded-lg max-h-[80vh] overflow-y-auto scrollable"
    >
      <div className="">
        <h2 className="text-3xl font-extrabold">🖋️ 멘토링 피드백</h2>
        <p className="text-lg text-gray-600 mb-4">
          멘티의 성장을 위한 소중한 피드백을 남겨주세요.
          <span className="text-sm text-gray-400">
            <br />
            남겨주신 피드백은 수치화되어 멘티에게 전송됩니다.
            <br /> 자세히 작성할 수록 멘티에게 정확한 분석이 전달되니, 애정을
            담아 상세히 작성해주세요🫶
          </span>
        </p>
      </div>

      <Select
        value={feedback.categoryCode}
        onValueChange={(value: CategoryCodeType) =>
          setFeedback({ ...feedback, categoryCode: value, elements: {} })
        }
      >
        <SelectTrigger className="bg-yellow-50 text-black font-semibold border-yellow-300 text-lg mb-4 focus:outline-none px-4">
          <SelectValue
            placeholder="카테고리 선택"
            className="focus:outline-none focus:ring-0 focus:border-none "
          />
        </SelectTrigger>
        <SelectContent className="mb-3">
          {Object.keys(categoryElements).map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="space-y-1">
        <label className="text-xl gap-2 font-semibold flex items-center">
          <CircleAlert size={16} />
          평가 요소
        </label>
        {categoryElements[
          feedback.categoryCode as keyof CategoryElementsType
        ].map((element) => (
          <div key={element} className="space-y-2">
            <label htmlFor={element} className="text-gray-500 text-md">
              {element}
            </label>
            <div className="flex items-center space-x-4 mb-2">
              <Slider
                id={element}
                min={0}
                max={10}
                step={1}
                value={[feedback.elements[element] || 0]}
                onValueChange={(value) => handleScoreChange(element, value)}
                className="flex-grow cursor-pointer bg-gray-100 rounded-xl w-full"
              />
              <span className=" font-semibold">
                {feedback.elements[element] || 0}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="my-3">
        <label className="text-xl gap-2 font-semibold flex items-center mt-8">
          <NotebookPen size={16} />
          Feedback
        </label>
        <Textarea
          ref={textareaRef}
          placeholder="피드백 내용"
          value={feedback.content}
          onChange={handleContentChange}
          className="bg-yellow-50  placeholder-adaptorsYellow border-yellow-300 min-h-[100px] resize-none mt-2"
          rows={4}
        />
        <div className="text-right text-md mt-2 text-gray-400">
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
