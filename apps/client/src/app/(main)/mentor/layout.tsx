import React from 'react';
import Sidebar from '../../../components/aside/metting-room/Sidebar';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-full min-h-screen">
      <Sidebar />
      <main className="w-full h-[100vh] overflow-y-auto transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
