import React from 'react';
import MyPageSidebarCategories from '../../../../components/pages/mypages/sidebar/MyPageCategories';
function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col">
      <MyPageSidebarCategories />
      <main>{children}</main>
    </div>
  );
}

export default layout;
