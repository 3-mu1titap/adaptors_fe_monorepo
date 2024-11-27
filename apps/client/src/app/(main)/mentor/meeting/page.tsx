import { Metadata } from 'next';
import Meeting from '../../../../components/pages/main/mentor/meeting/Meeting';

export const metadata: Metadata = {
  title: `Meeting`,
};

export default async function Page() {
  return <Meeting />;
}
