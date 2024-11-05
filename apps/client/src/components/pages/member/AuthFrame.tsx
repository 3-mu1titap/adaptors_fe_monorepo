import React from 'react';
import AuthImage from '../../assets/images/AuthImage';

interface AuthFrameProps {
  children: React.ReactNode;
  style?: string;
}

export default function AuthFrame({ children, style = '' }: AuthFrameProps) {
  return (
    <section
      className={`w-full flex absolute justify-center top-[10%] gap-10 ${style}`}
    >
      <AuthImage className="h-[80vh]" />
      {children}
    </section>
  );
}
