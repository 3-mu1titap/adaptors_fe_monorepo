'use client';
import { Sidebar } from '@components/common/Sidebar';
import React from 'react';
import MainHeaderGNB from './MainHeaderGNB';
import MainHeaderLogo from './MainHeaderLogo';
import MainHeaderRightMenu from './MainHeaderRightMenu';

export default function MainHeader() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="w-full fixed top-0 backdrop-blur-lg z-20">
      <header className="container mx-auto flex flex-row justify-between items-center py-5 px-4">
        <MainHeaderLogo />
        <MainHeaderGNB />
        <MainHeaderRightMenu openSideBar={() => setSidebarOpen(true)} />
      </header>
      <div className={`flex flex-1 ${sidebarOpen} ? : overflow-auto`}>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
    </div>
  );
}
