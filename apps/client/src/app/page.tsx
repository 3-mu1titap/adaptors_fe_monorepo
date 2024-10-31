import Splash from '../components/pages/main/splash/Splash';

export default function Page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[url('/assets/images/background.svg')] bg-cover bg-center bg-no-repeat">
      <div className="relative z-10 flex items-center justify-center h-full">
        <Splash />
      </div>
    </main>
  );
}
