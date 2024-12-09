import React from 'react';

import MentoringHeader from '@repo/client/components/header/MentoringHeader';
import ClientContainer from '@repo/client/components/common/layouts/ClientContainer';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full relative bg-slate-50">
      <MentoringHeader />
      <ClientContainer>{children}</ClientContainer>
    </main>
  );
}
