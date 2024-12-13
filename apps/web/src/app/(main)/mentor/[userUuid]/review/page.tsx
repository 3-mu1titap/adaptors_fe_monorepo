import React from 'react';

function page({ params }: { params: { userUuid: string } }) {
  const userUuid = params.userUuid;

  return <div>리뷰 페이지 입니다</div>;
}

export default page;
