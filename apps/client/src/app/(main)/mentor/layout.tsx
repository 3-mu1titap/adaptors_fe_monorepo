import React from 'react';
import Sidebar from '../../../components/aside/metting-room/Sidebar';
import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import CommonSidebar from '../../../components/aside/metting-room/CommonSidebar';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-full min-h-screen">
      {/* <Sidebar /> */}
      <SidebarProvider>
        <CommonSidebar />
        <main className="w-full h-[100vh] overflow-y-auto transition-all duration-300 ml-2">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
