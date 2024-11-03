import React from 'react';

interface AuthFrameProps {
  children: React.ReactNode;
  title: string;
  style?: string;
}

export default function AuthFrame({
  children,
  title,
  style = '',
}: AuthFrameProps) {
  return (
    <section
      className={`min-w-[400px] w-[50%] absolute right-8 top-[10%] overflow-y-scroll scrollbar-hide ${style}`}
    >
      <h1 className="font-extrabold text-4xl text-center">{title}</h1>
      {children}
    </section>
  );
}
