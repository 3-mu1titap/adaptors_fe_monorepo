import MentoringHeader from '@repo/client/components/header/MentoringHeader';
import React from 'react';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full relative bg-slate-50">
      <MentoringHeader />
      {children}
    </main>
  );
}
