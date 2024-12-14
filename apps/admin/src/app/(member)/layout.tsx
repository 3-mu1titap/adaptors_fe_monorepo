import ClientContainer from '@repo/admin/components/common/layouts/ClientContainer';

export default async function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-full mx-auto relative bg-slate-50">
      <ClientContainer>{children}</ClientContainer>
    </main>
  );
}
