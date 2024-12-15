'use client';

import { Button } from '@repo/ui/components/ui/button';
import { FeedbackElements } from '@repo/ui/types/Feedback.ts';
import { format, parseISO } from 'date-fns';
import { ChevronLeft, ChevronRight, NotebookPen } from 'lucide-react';
import { useMemo, useState } from 'react';
import { MentoringFeedback } from '../../types/feedback/feedbackResType';
import Score from '../../ui/Score/Score';
import IconByCategoryAndName from './IconByCategoryAndName';
import Progress from './Progress';

interface FeedbackItemProps {
  title: string;
  score: number;
  num: number;
  iconColor?: string;
  content: string;
}

const FeedbackItem = ({ title, score, content, num }: FeedbackItemProps) => {
  return (
    <div className="flex flex-col gap-2 py-3">
      <div className="flex items-center gap-2">
        <IconByCategoryAndName num={num} />
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <h4 className="text-[0.66rem] font-medium text-gray-400">
            {content}
          </h4>
        </div>
      </div>
      <Progress value={score} max={5} className="mb-1 bg-[#FFF3BE]" />
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{score}/5점</span>
      </div>
    </div>
  );
};

export default function FeedbackHistory({
  feedbackData,
  element,
  categoryCode,
}: {
  feedbackData: MentoringFeedback[];
  element: FeedbackElements[];
  categoryCode: string;
}) {
  const sortedFeedbackData = useMemo(() => {
    return [...feedbackData].sort(
      (a, b) =>
        new Date(b.mentoringDate).getTime() -
        new Date(a.mentoringDate).getTime()
    );
  }, [feedbackData]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentFeedback = sortedFeedbackData[currentIndex];
  console.log('currentFeedback: ', currentFeedback);

  const handlePrevDay = () => {
    if (currentIndex < sortedFeedbackData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleNextDay = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const metrics = [
    {
      name: element[0].elementName,
      content: element[0].elementContent,
      score: currentFeedback.element1,
      icon: 'user' as const,
    },
    {
      name: element[1].elementName,
      content: element[1].elementContent,
      score: currentFeedback.element2,
      icon: 'circle' as const,
    },
    {
      name: element[2].elementName,
      content: element[2].elementContent,
      score: currentFeedback.element3,
      icon: 'circle' as const,
    },
    {
      name: element[3].elementName,
      content: element[3].elementContent,
      score: currentFeedback.element4,
      icon: 'circle' as const,
    },
    {
      name: element[4].elementName,
      content: element[4].elementContent,
      score: currentFeedback.element5,
      icon: 'circle' as const,
    },
  ];
  const averageScore =
    (currentFeedback.element1 +
      currentFeedback.element2 +
      currentFeedback.element3 +
      currentFeedback.element4 +
      currentFeedback.element5) /
    5;

  return (
    <section className="mb-20">
      <div className="flex items-center justify-center gap-4 mt-8 mb-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevDay}
          disabled={currentIndex >= sortedFeedbackData.length - 1}
          className="bg-adaptorsYellow/70 rounded-md hover:bg-adaptorsYellow"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth="4" />
        </Button>
        <span className="text-xl font-medium">
          {format(parseISO(currentFeedback.mentoringDate), 'yyyy-MM-dd')}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextDay}
          disabled={currentIndex <= 0}
          className="bg-adaptorsYellow/70 rounded-md hover:bg-adaptorsYellow"
        >
          <ChevronRight className="h-4 w-4" strokeWidth="4" />
        </Button>
      </div>
      <div className="flex items-center px-8 gap-5">
        <div>
          <Score
            score={averageScore}
            maxScore={5}
            fillColor="#FFD700"
            strokeColor="black"
            size={200}
          />
          <p className="text-center w-full">{averageScore}/5.0</p>
        </div>
        <div className="w-full max-w-4xl mx-auto p-4 flex-3 px-10">
          <div className="space-y-2">
            {metrics.map((metric, index) => (
              <FeedbackItem
                num={index}
                key={metric.name}
                title={metric.name}
                score={metric.score}
                content={metric.content}
                iconColor={index === 0 ? 'text-gray-400' : 'text-pink-500'}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="m-6 border rounded-lg ">
        <h3 className="font-medium mb-2 flex items-center gap-2 bg-gray-100 p-4">
          <NotebookPen size={20} />
          {currentFeedback.mentorNickName} 멘토의 Comment
        </h3>
        <p className="p-4">{currentFeedback.content}</p>
      </div>
    </section>
  );
}
