import ClientContainer from '@repo/client/components/common/layouts/ClientContainer';
import MentoringHeader from '@repo/client/components/header/MentoringHeader';

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
