import React from 'react';
import AuthImage from '../../assets/images/AuthImage';

interface AuthFrameProps {
  children: React.ReactNode;
  style?: string;
}

export default function AuthFrame({ children, style = '' }: AuthFrameProps) {
  return (
    <main
      className={`w-full flex absolute justify-center items-center px-6 gap-4 lg:gap-10   top-[50%] translate-y-[-50%] ${style}`}
    >
      <AuthImage className="h-0 w-0 sm:h-[60vh] sm:max-w-[400px] sm:w-full lg:max-w-[500px] lg:h-[70vh]" />
      <section className="w-[100%] tablet:max-w-[100px] md:max-w-[418px] p-8 bg-white rounded-[5%]">
        {children}
      </section>
    </main>
  );
}
