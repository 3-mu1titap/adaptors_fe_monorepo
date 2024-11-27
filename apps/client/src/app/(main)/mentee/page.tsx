import React from 'react';
import { Metadata } from 'next';
import Meeting from '@repo/client/components/pages/main/mentor/meeting/Meeting';

export const metadata: Metadata = {
  title: `Mentoring Meeting`,
};

function page() {
  return (
    <main className="container mx-auto p-4">
      <Meeting />
    </main>
  );
}

export default page;
