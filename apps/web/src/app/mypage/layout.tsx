import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import CommonSidebar from '@repo/web/components/aside/CommonSiderbar';
import MyPageHeader from '@repo/web/components/header/MyPageHeader';
import { getServerSession } from 'next-auth';
import React from 'react';
import { options } from '../api/auth/[...nextauth]/options';
async function Layout({ children }: { children: React.ReactNode }) {
  const isAuth = await getServerSession(options);
  return (
    <div className="flex h-full w-full">
      {/* <Sidebar /> */}
      <SidebarProvider className="overflow-hidden m-0 w-[100vw]">
        <CommonSidebar />
        <main className="w-full h-auto overflow-y-auto transition-all duration-300 ml-[-5px] z-[1000000]">
          <SidebarTrigger className="z-[100000] hidden md:!block md:fixed" />
          <MyPageHeader isAuth={isAuth ? true : false} />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}

export default Layout;
