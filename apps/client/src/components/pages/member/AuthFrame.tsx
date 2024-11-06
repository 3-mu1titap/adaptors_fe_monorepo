import React from 'react';
import AuthImage from '../../assets/images/AuthImage';

interface AuthFrameProps {
  children: React.ReactNode;
  style?: string;
}

export default function AuthFrame({ children, style = '' }: AuthFrameProps) {
  return (
    <section
      className={`w-full flex absolute justify-center items-center top-[10%] px-6 gap-4 lg:gap-10 ${style}`}
    >
      <AuthImage className="h-0 w-0 sm:h-[60vh] sm:max-w-[400px] sm:w-full lg:max-w-[500px] lg:h-[70vh]" />
      {children}
    </section>
  );
}
