'use client';
import { FeedbackElements } from '@repo/ui/types/Feedback.js';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { FeedbackFirstLastScoreDto } from '../../types/feedback/feedbackResType';

interface ChartData {
  subject: string;
  firstScore: number;
  lastScore: number;
}

export default function ScoreComparisonGraph({
  graphData,
  elements,
}: {
  graphData: FeedbackFirstLastScoreDto | null;
  elements: FeedbackElements[];
}) {
  if (!elements || !graphData) {
    return <div></div>;
  }
  const { firstScore, lastScore } = graphData;
  const transformedData: ChartData[] = [
    {
      subject: elements[0]?.elementName,
      firstScore: firstScore.element1,
      lastScore: lastScore.element1,
    },
    {
      subject: elements[1]?.elementName,
      firstScore: firstScore.element2,
      lastScore: lastScore.element2,
    },
    {
      subject: elements[2]?.elementName,
      firstScore: firstScore.element3,
      lastScore: lastScore.element3,
    },
    {
      subject: elements[3]?.elementName,
      firstScore: firstScore.element4,
      lastScore: lastScore.element4,
    },
    {
      subject: elements[4]?.elementName,
      firstScore: firstScore.element5,
      lastScore: lastScore.element5,
    },
  ];
  return (
    <div className="h-[400px] p-4 flex-1">
      <h2 className="text-center text-xl font-semibold mb-4">세부 역량</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={transformedData}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#666', fontSize: 12 }}
          />
          <Radar
            name={graphData.firstScore.mentoringDate}
            dataKey="firstScore"
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={0.3}
          />
          <Radar
            name={graphData.lastScore.mentoringDate}
            dataKey="lastScore"
            stroke="#f97316"
            fill="#f97316"
            fillOpacity={0.3}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
