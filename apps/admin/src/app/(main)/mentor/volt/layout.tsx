import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `Volt`,
};

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-w-7xl mx-auto min-h-screen w-full bg-gray-100">
      <main className=" mx-auto p-4">{children}</main>
    </div>
  );
}
