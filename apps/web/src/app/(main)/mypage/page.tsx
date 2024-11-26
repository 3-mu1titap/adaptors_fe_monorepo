import React from 'react';
import CommonSidebar from '@components/aside/CommonSiderbar';
import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import { CommonLayout } from '@components/common/commomLayout';
import BlackListComponent from '@components/pages/main/mypage/blacklist/page';
function page() {
  return (
    <CommonLayout>
      <BlackListComponent />
    </CommonLayout>
  );
}

export default page;
