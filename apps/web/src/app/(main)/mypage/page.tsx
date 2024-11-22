import React from 'react';
import Sidebar from '@components/pages/main/mypage/sidebar/sidebar';
import { CommonLayout } from '@components/common/commomLayout';
function page() {
  return (
    <CommonLayout>
      <Sidebar />
    </CommonLayout>
  );
}

export default page;
