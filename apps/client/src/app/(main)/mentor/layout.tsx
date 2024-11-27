import React from 'react';
import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import CommonSidebar from '../../../components/aside/metting-room/CommonSidebar';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <CommonSidebar />
      <SidebarTrigger />
      {children}
    </SidebarProvider>
  );
}
