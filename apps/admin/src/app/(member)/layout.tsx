export default async function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-svh w-[100vw] flex items-start justify-center px-8 lg:gap-10 lg:items-center bg-[#F9F9F9] px-auto">
      <>{children}</>
    </main>
  );
}
