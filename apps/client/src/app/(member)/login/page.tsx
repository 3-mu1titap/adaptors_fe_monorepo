import LoginFrame from '../../../components/pages/auth/LoginFrame';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[url('/assets/images/authBackground.svg')] bg-cover bg-center bg-no-repeat">
      <LoginFrame />
    </main>
  );
}
