import Meeting from '@repo/client/components/pages/main/mentor/meeting/Meeting';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Mentoring Meeting`,
};

export default async function Page() {
  return (
    <main className="container mx-auto p-4">
      <Meeting />
    </main>
  );
}
