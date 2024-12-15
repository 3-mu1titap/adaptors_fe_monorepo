import ClientContainer from '@repo/admin/components/common/layouts/ClientContainer';
import MentoringHeader from '@repo/admin/components/header/MentoringHeader';
import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';
import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
import CommonSidebar from '@repo/admin/components/aside/metting-room/CommonSidebar';
import { mentorVoltListDataType } from '@repo/admin/components/types/main/mypage/myPageTypes';
import { GetMentorVolts } from '@repo/admin/actions/volt/voltAction';
import { getChatProfile } from '@repo/admin/actions/chatting/chattingAction';

export default async function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(options);
  const user = session?.user;
  const mentorVoltList: mentorVoltListDataType = await GetMentorVolts();
  const profileImage = await getChatProfile(user.uuid);
  return (
    <SidebarProvider className="overflow-hidden">
      <CommonSidebar />
      <SidebarTrigger className="z-[1000] hidden md:!block md:fixed" />
      <main className="w-full h-full relative bg-slate-50">
        <MentoringHeader
          mentorVolt={mentorVoltList.totalVolt}
          user={user}
          profileImage={profileImage}
        />
        <ClientContainer>{children}</ClientContainer>
      </main>
    </SidebarProvider>
  );
}
