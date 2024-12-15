'use client';

import { Button } from '@repo/ui/components/ui/button';
import { FeedbackElements } from '@repo/ui/types/Feedback.ts';
import { format, parseISO } from 'date-fns';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { useMemo, useState } from 'react';
import Progress from './Progress';

export interface ScoreType {
  element1: number;
  element2: number;
  element3: number;
  element4: number;
  element5: number;
  mentoringDate: string;
}

export interface FeedbackFirstLastScoreDto {
  id: string;
  firstScore: ScoreType;
  lastScore: ScoreType;
}

export interface FeedbackDto {
  feedbackFirstLastScoreDto: FeedbackFirstLastScoreDto;
  feedbackContent: string;
}

export interface MentoringFeedback {
  mentorNickName: string;
  mentoringSessionUuid: string;
  mentoringDate: string;
  categoryCode: string;
  element1: number;
  element2: number;
  element3: number;
  element4: number;
  element5: number;
  content: string;
}

export default function FeedbackHistory({
  feedbackData,
  element,
}: {
  feedbackData: MentoringFeedback[];
  element: FeedbackElements[];
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
    { name: element[0].elementName, score: currentFeedback.element1 },
    { name: element[1].elementName, score: currentFeedback.element2 },
    { name: element[2].elementName, score: currentFeedback.element3 },
    { name: element[3].elementName, score: currentFeedback.element4 },
    { name: element[4].elementName, score: currentFeedback.element5 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Date Navigation */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevDay}
          disabled={currentIndex >= sortedFeedbackData.length - 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-xl font-medium">
          {format(parseISO(currentFeedback.mentoringDate), 'yyyy-MM-dd')}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextDay}
          disabled={currentIndex <= 0}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Metrics Table */}
      <div className="border rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-4 font-medium text-gray-600">
                카테고리
              </th>
              <th className="text-center p-4 font-medium text-gray-600">
                평가요소
              </th>
              <th className="text-center p-4 font-medium text-gray-600">
                점수
              </th>
              <th className="p-4 font-medium text-gray-600">그래프</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric, index) => {
              return (
                <tr key={metric.name} className="border-b last:border-b-0">
                  {index === 0 && (
                    <td
                      rowSpan={metrics.length}
                      className="p-4 align-top font-medium border-r text-center mt-10"
                    >
                      {currentFeedback.categoryCode}
                    </td>
                  )}
                  <td className="p-4 border-r text-center">{metric.name}</td>
                  <td className="p-4 border-r">
                    <Progress value={metric.score} max={5} />
                  </td>
                  <td className="text-center text-blue-600">{metric.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Feedback Content */}
      <div className="mt-6 p-4 border rounded-lg">
        <h3 className="font-medium mb-2 flex items-center gap-2">
          <Circle size={10} />
          {currentFeedback.mentorNickName}멘토의 Comment
        </h3>
        <p>{currentFeedback.content}</p>
      </div>
    </div>
  );
}
