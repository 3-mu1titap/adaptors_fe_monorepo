import React from 'react';
import IntroCard from './IntroCard';

interface AuthFrameProps {
  children: React.ReactNode;
  style?: string;
  introCard?: boolean;
}

export default function AuthFrame({
  children,
  style = '',
  introCard = true,
}: AuthFrameProps) {
  return (
    <main
      className={`h-[100vh] flex flex-col sm:flex sm:flex-row sm:justify-center items-center px-6 gap-4 lg:gap-10 sm:my-auto my-0 sm:py-auto ${style} bg-[#F9F9F9]`}
    >
      {introCard && <IntroCard />}
      <section className="w-[90%] mt-[130px] sm:my-auto sm:max-w-[418px] sm:px-8 sm:py-10 sm:bg-white rounded-[5%] z-10">
        {children}
      </section>
    </main>
  );
}
