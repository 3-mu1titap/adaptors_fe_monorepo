import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import CommonSidebar from '@repo/web/components/aside/CommonSiderbar';
import ScrollToTopButton from '@repo/web/components/util/ScrollToTopButton';
import React from 'react';
import MypageNav from '@repo/web/components/header/MypageNav';

async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-auto w-full ">
      <SidebarProvider className="h-hull overflow-y-auto m-0 w-[100vw]">
        <CommonSidebar />
        <SidebarTrigger className="z-[1000] hidden md:!block md:fixed" />
        <main className="w-full h-auto overflow-y-auto transition-all duration-300 md:mt-[5rem]">
          <nav className="fixed mt-[5rem] md:hidden py-3 bg-white w-full">
            <MypageNav />
          </nav>
          {children}
        </main>
      </SidebarProvider>
      <ScrollToTopButton />
    </div>
  );
}

export default Layout;
