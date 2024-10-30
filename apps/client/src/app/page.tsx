import Landing from '../components/pages/main/home/Landing';

export default function Page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[url('/assets/images/background.svg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white opacity-50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <Landing />
      </div>
    </main>
  );
}
