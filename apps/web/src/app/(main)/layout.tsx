import MainFooter from '@repo/web/components/footer/MainFooter';
import MainHeader from '@repo/web/components/header/MainHeader';
import AIChatBot from '@repo/web/components/ui/Button/AIChatBot';
import ScrollToTopButton from '@repo/web/components/util/ScrollToTopButton';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
      <AIChatBot />
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
