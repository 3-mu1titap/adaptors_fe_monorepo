import JoinForm from '../../../components/form/JoinForm';
import AuthFrame from '../../../components/pages/auth/AuthFrame';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[url('/assets/images/authBackground.svg')] bg-cover bg-center bg-no-repeat bg-fixed ">
      <AuthFrame title="화원가입">
        <JoinForm />
      </AuthFrame>
    </main>
  );
}
