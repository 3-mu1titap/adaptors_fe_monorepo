import React from 'react';
import MentorTitleSection from './compoent/MentorTitleSection';
function MentorIntro() {
  return (
    <div className="flex flex-col space-y-4 max-w-[55rem] mt-4 p-8 py-5 bg-white rounded-xl max-h-[350px]">
      <MentorTitleSection title="소개글" subtitle="intro" />
      <span className="text-black text-lg text-wrap">
        안녕하십니까 네이버에서 프론트엔드 직무로 4년간 일을 했습니다. 제가 만든
        UI가 사용자와 상호작용을 하는 것을 좋아합니다 {''} 앞으로도 고도화된
        기술과 UX의 역량을 쌓아 사용자와 상호작용할 수 있는 프론트엔드가 되고
        싶습니다 직업이라는 것은 자신의 일을 나타내는 것이고, 일이라는 것은
        재미있고, 도움이 되는 일이면 좋겠다는 생각을 가지고 있습니다. 누구나 다
        원하는대로 일을 하며 살수는 없지만, 저는 제가 하는 있는 이 일을 좋아하는
        있고, 잘하고 싶어하는 사람입니다. 개발자로써, 강사로써, 컨설턴트로써의
        역할을 해 오면서, 매번 새롭게 출시되고 변화하는 IT 신기술을 따라가기에
        급급하지만, 그래도, 남들보다 조금이라도 먼저 접하고, 전파하고, 사용하고
        싶은 사람 중 한명입니다.
      </span>
    </div>
  );
}

export default MentorIntro;
