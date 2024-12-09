'use client';
import React from 'react';
import { Category } from '../../../types/mypages/CategoryTypes/Category';
import CategoryuseFunnel from './CategoryuseFunnel';
import MypageCategoryies from './Categories';
import Funnel from '../../../common/Funnel/Funnel';
const steps: Category[] = [
  {
    Categoryname: '개인정보 수정',
    subcategory: [
      {
        name: '아이디 수정',
      },
    ],
  },

  {
    Categoryname: '나의 수강 정보',
    subcategory: [
      {
        name: '아이디 수정',
      },
    ],
  },

  {
    Categoryname: '평가 보기',
    subcategory: [
      {
        name: '면접',
      },
      { name: '포트폴리오' },
      { name: '이력서' },
      { name: '자기소개서' },
    ],
  },

  {
    Categoryname: '나의 리뷰',
    subcategory: [
      {
        name: '아이디 수정',
      },
    ],
  },

  {
    Categoryname: '블랙리스트 보기',
    subcategory: [
      {
        name: '아이디 수정',
      },
    ],
  },

  {
    Categoryname: '나의 관심멘토 보기',
    subcategory: [
      {
        name: '아이디 수정',
      },
    ],
  },
];

function MyPageNavLayout() {
  const { level, onSelectStep, substep, sublevel, onSubSelectStep } =
    CategoryuseFunnel({
      steps,
    });
  return (
    <main className="flex-col w-full h-[78px]">
      <MypageCategoryies
        level={level}
        sublevel={sublevel}
        onSelectStep={onSelectStep}
        onSelectSubStep={onSubSelectStep}
      />
      <div className="flex flex-col">
        {substep && substep.name ? (
          <Funnel step={substep.name}>
            <Funnel.Step name="아이디 수정">
              <div>아이디 찾기</div>
            </Funnel.Step>
            <Funnel.Step name="면접">
              <div>면접</div>
            </Funnel.Step>
            <Funnel.Step name="포트폴리오">
              <div>포트폴리오</div>
            </Funnel.Step>
          </Funnel>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}

export default MyPageNavLayout;
