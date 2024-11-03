import JoinFrame from '../../../components/pages/auth/JoinFrame';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[url('/assets/images/authBackground.svg')] bg-cover bg-center bg-no-repeat bg-fixed ">
      <JoinFrame />
    </main>
  );
}
