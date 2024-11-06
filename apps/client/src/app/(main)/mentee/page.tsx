import React from 'react';
import NavbarLayout from '../../../components/pages/sidebar/NavbarLayout';
function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <NavbarLayout />
    </main>
  );
}

export default layout;
