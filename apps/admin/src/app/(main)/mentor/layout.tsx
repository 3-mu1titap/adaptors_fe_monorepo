import ClientContainer from '@repo/admin/components/common/layouts/ClientContainer';
import MentoringHeader from '@repo/admin/components/header/MentoringHeader';
import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';
import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import CommonSidebar from '@repo/admin/components/aside/metting-room/CommonSidebar';

export default async function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(options);
  const user = session?.user;
  return (
    <SidebarProvider className="overflow-hidden">
      <CommonSidebar />
      <SidebarTrigger className="z-[1000] hidden md:!block md:fixed" />
      <main className="w-full h-full relative bg-slate-50">
        <MentoringHeader user={user} />
        <ClientContainer>{children}</ClientContainer>
      </main>
    </SidebarProvider>
  );
}
