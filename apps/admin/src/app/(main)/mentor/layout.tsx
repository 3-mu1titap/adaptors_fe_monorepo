import ClientContainer from '@repo/admin/components/common/layouts/ClientContainer';
import MentoringHeader from '@repo/admin/components/header/MentoringHeader';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-full relative bg-slate-50">
      <MentoringHeader />
      <ClientContainer>{children}</ClientContainer>
    </main>
  );
}
