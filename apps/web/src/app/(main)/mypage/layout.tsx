import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import CommonSidebar from '@repo/web/components/aside/CommonSiderbar';
import React from 'react';
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full">
      {/* <Sidebar /> */}
      <SidebarProvider className="">
        <CommonSidebar />
        <main className="w-full h-auto overflow-y-auto transition-all duration-300 ml-2 ">
          <SidebarTrigger className="" />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}

export default Layout;
