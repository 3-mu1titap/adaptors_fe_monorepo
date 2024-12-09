import MentoringReview from '@components/pages/main/mentoring/review/MentoringReview';

import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { MentoringDataType } from '@repo/ui/types/CommonType.js';
import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from 'src/actions/mentoring/mentoringAction';

export default async function page() {
  const mentoringSessionList = await GetMentoringSessionList(
    '05b8b889-9798-4f31-88e5-f6b967cb069d'
  );
  const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
    '05b8b889-9798-4f31-88e5-f6b967cb069d'
  );
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
    {
      id: '5',
      author: {
        name: 'Emily Clark',
        avatar: '/placeholder.svg',
        nickname: 'emily',
      },
      content:
        '가장 기억에 남는 부분은 멘토님의 실질적인 팁이었어요. 바로 적용할 수 있는 조언 덕분에 더 나아갈 용기를 얻을 수 있었습니다. 감사합니다!',
      timestamp: '1:30 PM',
    },
    {
      id: '6',
      author: {
        name: 'Mark Smith',
        avatar: '/placeholder.svg',
        nickname: 'mark',
      },
      content:
        'Sed consequat ligula non tortor cursus, vel lacinia nunc varius. Integer quis ex vel lorem hendrerit dignissim a at justo. Nullam feugiat felis non risus lacinia mollis.',
      timestamp: '2:15 PM',
    },
    {
      id: '7',
      author: {
        name: 'Alice Johnson',
        avatar: '/placeholder.svg',
        nickname: 'alice',
      },
      content:
        '멘토링에서 받은 조언 덕분에 제가 놓치고 있던 부분을 명확히 볼 수 있었습니다. 멘토님과의 대화는 항상 유익하고 영감을 줍니다!',
      timestamp: '3:05 PM',
    },
  ];
  return (
    <CommonLayout className="flex">
      {/* <MentorSection
        mentorUuid={
          MentoringInfoData?.mentorUuid ? MentoringInfoData?.mentorUuid : ''
        }
        mentoringSessionList={mentoringSessionList}
      /> */}
      <MentoringReview comments={comments} />
    </CommonLayout>
  );
}
