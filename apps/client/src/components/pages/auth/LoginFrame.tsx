import LoginForm from '../../form/LoginForm';
import KakaoLogin from './KakaoLogin';

export default function LoginFrame() {
  return (
    <section className="min-w-[400px] w-[50%] absolute top-[50%] translate-y-[-50%] right-8">
      <h1 className="font-extrabold text-4xl text-center">로그인</h1>
      <LoginForm />
      <KakaoLogin />
    </section>
  );
}
