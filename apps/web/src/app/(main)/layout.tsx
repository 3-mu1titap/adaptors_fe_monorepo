import MainFooter from '@repo/web/components/footer/MainFooter';
import MainHeader from '@repo/web/components/header/MainHeader';
import AIChatBot from '@repo/web/components/ui/Button/AIChatBot';
import ScrollToTopButton from '@repo/web/components/util/ScrollToTopButton';
import { getServerSession } from 'next-auth/next';
import React from 'react';
import { options } from '../api/auth/[...nextauth]/options';

async function Layout({ children }: { children: React.ReactNode }) {
  const isAuth = await getServerSession(options);
  const profileImage = isAuth?.user.profileImageUrl;
  return (
    <>
      <MainHeader isAuth={isAuth ? true : false} profileImage={profileImage} />
      {children}
      <MainFooter />
      <AIChatBot />
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
