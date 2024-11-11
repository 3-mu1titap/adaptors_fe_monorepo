import React from 'react';
import ScrollToTopButton from '../../../components/util/ScrollToTopButton';
import MainFooter from '../../../components/footer/MainFooter';
import MainHeader from '../../../components/header/MainHeader';

async function Layout({ children }: { children: React.ReactNode }) {
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
