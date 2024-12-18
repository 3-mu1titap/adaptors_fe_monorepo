import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import CommonSidebar from '@repo/web/components/aside/CommonSiderbar';
import MypageNav from '@repo/web/components/header/MypageNav';
import ScrollToTopButton from '@repo/web/components/util/ScrollToTopButton';
import React from 'react';

async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-auto w-full ">
      <SidebarProvider className="h-hull overflow-y-auto m-0 w-[100vw]">
        <CommonSidebar />
        <SidebarTrigger className="z-[100] hidden md:!block md:fixed" />
        <main className="w-full h-auto overflow-y-auto transition-all duration-300 md:mt-[5rem]">
          <nav className="mt-[5rem] z-20 md:hidden py-3 backdrop-blur-lg w-full">
            <MypageNav />
          </nav>
          <div className="mt-6">{children}</div>
        </main>
      </SidebarProvider>
      <ScrollToTopButton />
    </div>
  );
}

export default Layout;
