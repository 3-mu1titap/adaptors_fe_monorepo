import ClientContainer from '@repo/admin/components/common/layouts/ClientContainer';
import MentoringHeader from '@repo/admin/components/header/MentoringHeader';
import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';

export default async function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(options);
  const user = session?.user;
  return (
    <main className="w-full h-full relative bg-slate-50">
      <MentoringHeader user={user} />
      <ClientContainer>{children}</ClientContainer>
    </main>
  );
}
