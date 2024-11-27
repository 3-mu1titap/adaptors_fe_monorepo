import React from 'react';
import FrameIcon from '../../assets/icons/Frame';
function MainIntro() {
  return (
    <div className="flex flex-row my-4">
      <div className="flex flex-col w-[52rem]">
        <FrameIcon />

        <span className="text-bigTextSize w-[52rem] h-[180px] font-bold leading-[1.1] mt-10">
          방탄과 함께하는 아이돌 멘토링
        </span>

        <span className="mt-32 text-text18 text-[#757575]">
          무대 위의 별이 되고 싶다면 여기서 시작하세요! 실력 향상, 이미지
          메이킹, 그리고 아이돌로서의 커리어 구축을 위한 체계적인 멘토링을
          제공합니다. 그리고 꿈을 향해 한 걸음씩 나아가는 여정을 돕는 멘토링!
          데뷔 준비부터 자신감 있는 퍼포먼스까지 아이돌의 꿈을 현실로 만들어
          드립니다.
        </span>
      </div>
    </div>
  );
}

export default MainIntro;
