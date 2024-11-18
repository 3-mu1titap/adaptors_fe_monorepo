import React from 'react';
import Sidebar from '../../../components/aside/metting-room/Sidebar';
import NavbarLayout from '../../../components/pages/main/sidebar/NavbarLayout';
export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-full min-h-screen">
      <Sidebar />
      <main className="pr-[1.25rem] lg:ml-[16rem] lg:pr-[1.5rem] w-full h-[100vh] overflow-y-auto transition-all duration-500">
        {children}
      </main>
    </div>
  );
}
