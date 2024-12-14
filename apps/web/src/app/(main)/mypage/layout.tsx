import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import CommonSidebar from '@repo/web/components/aside/CommonSiderbar';
import { CommonLayout } from '@repo/web/components/common/commomLayout';
import React from 'react';
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CommonLayout className="h-full flex w-full container mx-auto">
      <div className="flex mbmx-auto lg:max-w-[80rem] md:max-w-[50rem] mobile:max-w-[400px] max-w-[300px]">
        {/* <Sidebar /> */}
        <SidebarProvider className="">
          <CommonSidebar />
          <main className="w-full h-auto overflow-y-auto transition-all duration-300 ml-2 ">
            <SidebarTrigger className="z-[1000] hidden md:!block md:fixed" />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </CommonLayout>
  );
}

export default Layout;
