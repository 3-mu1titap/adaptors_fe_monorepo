'use client';

import { Card } from '@repo/ui/components/ui/card';

import ChevronText from '@components/ui/Text/ChevronText';
import Link from 'next/link';
import MentoringReview from './MentoringReview';
// import MentoringReview from './MentoringReview';
export default function MentoringReviewSection() {
  const comments = [
    {
      id: '1',
      author: {
        name: 'Daniel Amrabat',
        avatar: '/placeholder.svg',
        nickname: 'daniel',
      },
      content:
        '멘토링 세션에 참여하면서 많은 것을 배우고, 생각의 폭을 넓힐 수 있는 귀중한 시간을 가졌습니다. 이번 멘토링은 단순히 기술적 조언이나 지식을 얻는 자리가 아니라, 저의 고민을 공감해주고 방향성을 함께 모색하는 소중한 대화였습니다',
      timestamp: '9:25 AM',
    },
    {
      id: '2',
      author: {
        name: 'Daniel Amrabat',
        avatar: '/placeholder.svg',
        nickname: 'daniel',
      },
      content:
        'Praesent ultrices imperdiet lobortis. Vestibulum porttitor augue et mollis luctus. Aliquam et tortor lectus. Integer vitae dolor elementum, tempus ligula eu, eleifend nulla.',
      timestamp: '9:25 AM',
    },
    {
      id: '3',
      author: {
        name: 'Sophie Turner',
        avatar: '/placeholder.svg',
        nickname: 'sophie',
      },
      content:
        '멘토링을 통해 제가 부족했던 부분을 채울 수 있었고, 제 커리어와 개인적 목표에 대한 명확한 그림을 그릴 수 있었습니다. 멘토님의 따뜻한 조언 덕분에 성장할 자신감이 생겼습니다!',
      timestamp: '10:10 AM',
    },
    {
      id: '4',
      author: {
        name: 'John Doe',
        avatar: '/placeholder.svg',
        nickname: 'john',
      },
      content:
        'Nunc cursus risus at erat aliquam, in tincidunt nisl tristique. Aenean quis felis euismod, feugiat neque a, tincidunt libero. Curabitur vel risus et erat vehicula bibendum.',
      timestamp: '11:45 AM',
    },
  ];

  return (
    <Card className="w-full ">
      <div className="flex justify-between items-center px-7 py-4">
        <ChevronText text="수강후기" />
        <Link
          href={`/mentoring/1/review`}
          className="text-lg border border-adaptorsGray py-2.5 px-6 rounded-md"
        >
          Read more
        </Link>
      </div>
      <MentoringReview comments={comments} />
    </Card>
  );
}
