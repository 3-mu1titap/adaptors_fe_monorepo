import MainFooter from '@components/footer/MainFooter';
import MainHeader from '@components/header/MainHeader';
import ScrollToTopButton from '@components/util/ScrollToTopButton';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
