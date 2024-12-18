'use client';
import { MenuIcon } from 'lucide-react';
import React from 'react';
export default function SideBarButton() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <li className="block lg:hidden">
      <MenuIcon size={24} onClick={() => setSidebarOpen((prev) => !prev)} />
      <div className={`flex flex-1 ${sidebarOpen} ? : overflow-auto`}>
        {/* <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} /> */}
      </div>
    </li>
  );
}
