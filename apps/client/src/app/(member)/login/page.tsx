import LoginForm from '../../../components/form/LoginForm';
import AuthFrame from '../../../components/pages/auth/AuthFrame';
import KakaoLogin from '../../../components/pages/auth/KakaoLogin';
import Links from '../../../components/pages/auth/Links';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[url('/assets/images/authBackground.svg')] bg-cover bg-center bg-no-repeat">
      <AuthFrame title="로그인" style="top-[50%] translate-y-[-50%]">
        <LoginForm />
        <KakaoLogin />
        <Links currentPage={'/login'} />
      </AuthFrame>
    </main>
  );
}
