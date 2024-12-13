'use client';
import { MentoringFeedback } from '../../types/feedback/feedbackResType';

import { Button } from '@repo/ui/components/ui/button';
import { Progress } from '@repo/ui/components/ui/progress';
import { addDays, format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const sampleData = [
  {
    category: '개인정량성',
    metrics: [
      { name: '성실성', score: 94, percentage: 29.37 },
      { name: '지신감', score: 91, percentage: 23.69 },
      { name: '인내/집중성', score: 103, percentage: 56.16 },
      { name: '책임감', score: 101, percentage: 52.64 },
      { name: '우전/공극성', score: 111, percentage: 78.27 },
    ],
  },
];

export default function FeedbackHistory({
  feedbackData,
}: {
  feedbackData: MentoringFeedback[];
}) {
  const [currentDate, setCurrentDate] = useState(new Date('2024-11-13'));

  const handlePrevDay = () => {
    setCurrentDate((prev) => addDays(prev, -1));
  };

  const handleNextDay = () => {
    setCurrentDate((prev) => addDays(prev, 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Date Navigation */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={handlePrevDay}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-xl font-medium">
          {format(currentDate, 'yyyy-MM-dd')}
        </span>
        <Button variant="ghost" size="icon" onClick={handleNextDay}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Metrics Table */}
      <div className="border rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-4 font-medium text-gray-600">연성</th>
              <th className="text-center p-4 font-medium text-gray-600">
                표준점수
              </th>
              <th className="p-4 font-medium text-gray-600">백분위점수</th>
              <th className="text-center p-4 font-medium text-gray-600">
                수준
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((category) =>
              category.metrics.map((metric, index) => (
                <tr key={metric.name} className="border-b last:border-b-0">
                  {index === 0 && (
                    <td
                      rowSpan={category.metrics.length}
                      className="p-4 align-top font-medium"
                    >
                      {category.category}
                    </td>
                  )}
                  <td className="p-4">{metric.name}</td>
                  <td className="text-center text-blue-600">{metric.score}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <Progress value={metric.percentage} className="h-2" />
                      <span className="text-blue-600 w-16">
                        {metric.percentage.toFixed(2)}
                      </span>
                    </div>
                  </td>
                  <td className="text-center p-4">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600">
                      중
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
