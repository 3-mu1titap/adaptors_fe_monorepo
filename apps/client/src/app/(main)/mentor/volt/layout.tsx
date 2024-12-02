import VoltHeader from '@repo/client/components/header/VoltHeader';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `Volt`,
};

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <VoltHeader />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">{children}</div>
      </main>
    </div>
  );
}
