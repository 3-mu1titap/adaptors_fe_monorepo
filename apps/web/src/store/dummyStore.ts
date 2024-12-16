import { Option } from '@repo/ui/types/components/RadioButtonType.ts';
// export const mainIntroDatas = [
//   {
//     category: [
//       { id: 1, categoryName: 'It' },
//       { id: 2, categoryName: '디자인' },
//       { id: 3, categoryName: '개발' },
//     ],
//     title: '방탄과 함께하는\n아이돌 멘토링',
//     mentoringUuid: '1',
//     content:
//       '무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지 메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을 제공합니다. 데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어 드립니다.',
//     thumbNailImages: [
//       {
//         id: 1,
//         src: 'https://i.pinimg.com/736x/3a/66/4d/3a664d14e04258c619eeca87e5140af3.jpg',
//         description: '방탄과 함께하는 아이돌 멘토링',
//       },
//       {
//         id: 2,
//         src: 'https://i.pinimg.com/736x/bc/68/bf/bc68bf073f4bda8d5090b04e309e5ec7.jpg',
//         description: '방탄과 함께하는 아이돌 멘토링',
//       },
//       {
//         id: 3,
//         src: 'https://i.pinimg.com/736x/c5/3f/2c/c53f2c71f809c49e9ec7631c23b7364a.jpg',
//         description: '방탄과 함께하는 아이돌 멘토링',
//       },
//     ],
//   },
//   {
//     category: [
//       { id: 1, categoryName: '의료 보건' },
//       { id: 2, categoryName: '프론트' },
//       { id: 3, categoryName: '개발' },
//     ],
//     title: '삼성과 함께하는\n취업 전략',
//     mentoringUuid: '2',
//     content:
//       '삼성 인사 담당자가 직접 알려주는 취업 비법! 이력서 작성부터 면접 준비까지, 삼성 취업을 목표로 하는 모든 분들께 실질적인 도움을 드립니다.',
//     thumbNailImages: [
//       {
//         id: 1,
//         src: 'https://i.pinimg.com/736x/bc/ce/bd/bccebdb8b5d2b1c68cb72f3ccc1376c8.jpg',
//         description: '삼성과 함께하는 취업 전략',
//       },
//       {
//         id: 2,
//         src: 'https://i.pinimg.com/736x/bb/d6/a0/bbd6a03918fd0e7cf0b605d22812d596.jpg',
//         description: '삼성과 함께하는 취업 전략',
//       },
//       {
//         id: 3,
//         src: 'https://i.pinimg.com/736x/80/68/ce/8068ce8f02097283c45c97f91d65381a.jpg',
//         description: '삼성과 함께하는 취업 전략',
//       },
//     ],
//   },
//   {
//     category: [
//       { id: 1, categoryName: '의료 보건' },
//       { id: 2, categoryName: '프론트' },
//       { id: 3, categoryName: '개발' },
//     ],
//     title: '구글과 함께하는\n글로벌 취업 멘토링',
//     mentoringUuid: '3',
//     content:
//       '구글 채용 담당자와 함께하는 취업 워크샵! 글로벌 기업 취업의 문을 여는 실질적인 노하우를 제공합니다.',
//     thumbNailImages: [
//       {
//         id: 1,
//         src: 'https://i.pinimg.com/736x/96/51/55/96515537a7402eb3e150f996d3ca44af.jpg',
//         description: '구글과 함께하는 글로벌 취업 멘토링',
//       },
//       {
//         id: 2,
//         src: 'https://i.pinimg.com/736x/20/a0/97/20a0977a893a7a55be3d9126caf59dd0.jpg',
//         description: '구글과 함께하는 글로벌 취업 멘토링',
//       },
//       {
//         id: 3,
//         src: 'https://i.pinimg.com/736x/06/e2/2b/06e22b324e9a2ac6c4263572a4aeded6.jpg',
//         description: '구글과 함께하는 글로벌 취업 멘토링',
//       },
//     ],
//   },
//   {
//     category: [
//       { id: 1, categoryName: '의료 보건' },
//       { id: 2, categoryName: '프론트' },
//       { id: 3, categoryName: '개발' },
//     ],
//     title: '카카오와 함께하는\nIT 취업 멘토링',
//     mentoringUuid: '4',
//     content:
//       '카카오 개발자들과 함께하는 심층 멘토링! 코딩 테스트 준비와 기술 면접 노하우를 공유합니다.',
//     thumbNailImages: [
//       {
//         id: 1,
//         src: 'https://i.pinimg.com/736x/cc/05/f4/cc05f4ed903f45820b843ad59944343b.jpg',
//         description: '카카오와 함께하는 IT 취업 멘토링',
//       },
//       {
//         id: 2,
//         src: 'https://i.pinimg.com/736x/a9/3e/96/a93e960bfaf36cde4b218fd7f642df0b.jpg',
//         description: '카카오와 함께하는 IT 취업 멘토링',
//       },
//       {
//         id: 3,
//         src: 'https://i.pinimg.com/736x/8c/e6/65/8ce66582dd6e66a983b5b35cd18c9119.jpg',
//         description: '카카오와 함께하는 IT 취업 멘토링',
//       },
//     ],
//   },
//   {
//     category: [
//       { id: 1, categoryName: '의료 보건' },
//       { id: 2, categoryName: '프론트' },
//       { id: 3, categoryName: '개발' },
//     ],
//     title: '예술과 함께하는\n창작 멘토링',
//     mentoringUuid: '5',
//     content:
//       '창작의 길을 걷는 예술가들을 위한 멘토링! 포트폴리오 구성과 예술적 표현력을 극대화하는 방법을 배워보세요.',
//     thumbNailImages: [
//       {
//         id: 1,
//         src: 'https://i.pinimg.com/736x/02/b5/ce/02b5ce2d9d37f9958ec933aac0d00baa.jpg',
//         description: '예술과 함께하는 창작 멘토링',
//       },
//       {
//         id: 2,
//         src: 'https://i.pinimg.com/736x/d6/52/f5/d652f5d7c1107f5b9e4f75dc0a88e6ab.jpg',
//         description: '예술과 함께하는 창작 멘토링',
//       },
//       {
//         id: 3,
//         src: 'https://i.pinimg.com/736x/8d/36/c0/8d36c0f5a5211f6be439c06df446abfd.jpg',
//         description: '예술과 함께하는 창작 멘토링',
//       },
//     ],
//   },
// ];

export const mainIntroDatas = [
  {
    categoryList: [
      { topCategoryCode: '1', topCategoryName: '포트폴리오' },
      { topCategoryCode: '2', topCategoryName: '자기소개서' },
      { topCategoryCode: '3', topCategoryName: '이력서' },
    ],
    name: '삼성과 함께하는\n취업 전략',
    mentoringUuid: '2',
    description:
      '삼성 인사 담당자가 직접 알려주는 취업 비법! 이력서 작성부터 면접 준비까지, 삼성 취업을 목표로 하는 모든 분들께 실질적인 도움을 드립니다.',
    thumbnailUrl:
      'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734363592221-01.png',
    mainImageList: [
      {
        url: 'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734363592221-01.png',
      },
      {
        url: 'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734363617563-02.png',
      },
      {
        url: 'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734363633757-03.png',
      },
    ],
  },
  {
    categoryList: [
      { topCategoryCode: '1', topCategoryName: 'IT개발·데이터' },
      { topCategoryCode: '2', topCategoryName: '이력서' },
    ],
    name: '구글과 함께하는\n글로벌 취업 멘토링',
    mentoringUuid: '3',
    description:
      '구글 채용 담당자와 함께하는 취업 워크샵! 글로벌 기업 취업의 문을 여는 실질적인 노하우를 제공합니다.',
    thumbnailUrl:
      'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734363307195-09.png',
    mainImageList: [
      {
        url: 'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734363307195-09.png',
      },
      {
        url: 'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734363449268-3737.png',
      },
      {
        url: 'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734362987957-2.png',
      },
      // {
      //   url: 'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734363019812-4.png',
      // },
    ],
  },
];

export const categories = [
  { id: 0, icon: '💻', name: 'Web Development', courses: '206 Courses' },
  { id: 1, icon: '📱', name: 'Digital Marketing', courses: '206 Courses' },
  { id: 2, icon: '🎨', name: 'UI/UX Design', courses: '206 Courses' },
  { id: 3, icon: '📊', name: 'FrontEnd Development', courses: '206 Courses' },
  { id: 4, icon: '📈', name: 'Graph', courses: '206 Courses' },
  { id: 5, icon: '📊', name: 'Android Development', courses: '206 Courses' },
  { id: 6, icon: '📈', name: 'Backend Development', courses: '206 Courses' },
  { id: 7, icon: '📈', name: 'Backend Development', courses: '206 Courses' },
  { id: 8, icon: '📈', name: 'Backend Development', courses: '206 Courses' },
  { id: 9, icon: '📈', name: 'Backend Development', courses: '206 Courses' },
  { id: 10, icon: '📈', name: 'Backend Development', courses: '206 Courses' },
];

export const courses = [
  {
    mentorUuId: 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb',
    id: 0,
    title: 'Education Software and PHP and JS System Script',
    duration: '55 WEEKS',
    rating: 4.5,
    reviews: 142,
    instructor: 'Max Alexis',
  },

  {
    mentorUuId: '1',
    id: 0,
    title: 'Education Software and PHP and JS System Script',
    duration: '55 WEEKS',
    rating: 4.5,
    reviews: 142,
    instructor: 'Max Alexis',
  },

  {
    mentorUuId: '2',
    id: 0,
    title: 'Education Software and PHP and JS System Script',
    duration: '55 WEEKS',
    rating: 4.5,
    reviews: 142,
    instructor: 'Max Alexis',
  },

  {
    mentorUuId: '3',
    id: 0,
    title: 'Education Software and PHP and JS System Script',
    duration: '55 WEEKS',
    rating: 4.5,
    reviews: 142,
    instructor: 'Max Alexis',
  },

  {
    mentorUuId: '3',
    id: 1,
    title: 'Learn Figma — UI/UX Design Essential Training',
    duration: '55 WEEKS',
    rating: 4.8,
    reviews: 171,
    instructor: 'Max Alexis',
  },

  {
    mentorUuId: '5',
    id: 1,
    title: 'Learn Figma — UI/UX Design Essential Training',
    duration: '55 WEEKS',
    rating: 4.8,
    reviews: 171,
    instructor: 'Max Alexis',
  },

  {
    mentorUuId: '6',
    id: 1,
    title: 'Learn Figma — UI/UX Design Essential Training',
    duration: '55 WEEKS',
    rating: 4.8,
    reviews: 171,
    instructor: 'Max Alexis',
  },

  {
    mentorUuId: '7',
    id: 1,
    title: 'Learn Figma — UI/UX Design Essential Training',
    duration: '55 WEEKS',
    rating: 4.8,
    reviews: 171,
    instructor: 'Max Alexis',
  },

  {
    mentorUuId: '8',
    id: 2,
    title: 'Advanced Android 12 & Kotlin Development Course',
    duration: '55 WEEKS',
    rating: 4.6,
    reviews: 163,
    instructor: 'Max Alexis',
  },
  {
    mentorUuId: '9',
    id: 3,
    title: 'IT Statistics Data Science and Business Analysis',
    duration: '55 WEEKS',
    rating: 4.7,
    reviews: 157,
    instructor: 'Max Alexis',
  },
  {
    mentorUuId: '9',
    id: 4,
    title: 'IT Statistics Data Science and Business Analysis',
    duration: '55 WEEKS',
    rating: 4.7,
    reviews: 157,
    instructor: 'Max Alexis',
  },
  {
    mentorUuId: '9',
    id: 5,
    title: 'IT Statistics Data Science and Business Analysis',
    duration: '55 WEEKS',
    rating: 4.7,
    reviews: 157,
    instructor: 'Max Alexis',
  },
  {
    mentorUuId: '9',
    id: 6,
    title: 'IT Statistics Data Science and Business Analysis',
    duration: '55 WEEKS',
    rating: 4.7,
    reviews: 157,
    instructor: 'Max Alexis',
  },
];

export const articles = [
  {
    author: 'Emily Johnson',
    title: 'The Future of Online Learning Trends to Watch in 2024',
    date: 'July 15, 2024',
    views: 20,
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    author: 'Michael Lee',
    title: 'Top 10 Tips for Staying Motivated in Online Courses',
    date: 'August 3, 2024',
    views: 19,
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    author: 'Sarah Thompson',
    title: 'How to Choose the Right Online Course for Your Career Goals',
    date: 'September 10, 2024',
    views: 10,
    image: '/placeholder.svg?height=200&width=400',
  },

  {
    author: 'Sarah Thompson',
    title: 'How to Choose the Right Online Course for Your Career Goals',
    date: 'September 10, 2024',
    views: 10,
    image: '/placeholder.svg?height=200&width=400',
  },
];

export const categoryOptions: Option[] = [
  { value: 'COVER_LETTER', label: '자기소개서' },
  { value: 'RESUME', label: '이력서' },
  { value: 'PORTFOLIO', label: '포트폴리오' },
];
export const industryOptions: Option[] = [
  { value: 'IT', label: 'IT' },
  { value: 'MARKETING', label: '마케팅' },
  { value: 'CONTENT_CREATION', label: '콘텐츠 제작' },
  { value: 'PROJECT_MANAGEMENT', label: 'PM' },
  { value: 'EDUCATION', label: '교육' },
];
